package com.syrian020.tts;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileOutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.WebSocket;
import okhttp3.WebSocketListener;
import okio.ByteString;

/**
 * EdgeTTS plugin: synthesizes speech with Microsoft's free neural voices
 * (the same endpoint edge-tts uses) and writes the MP3 to the app cache.
 * Requires internet. JS side plays the returned file path.
 */
@CapacitorPlugin(name = "EdgeTTS")
public class EdgeTtsPlugin extends Plugin {

    private static final String TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
    private static final String GEC_VERSION = "2-143.0.3650.75";
    private static final String UA =
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                    + " (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0";
    private static final long WIN_EPOCH = 11644473600L;
    // "Copyright (C) Microsoft Corporation. All rights reserved." as LE u32 words,
    // the constant prefix Edge feeds into the v2 Sec-MS-GEC hash.
    private static final int[] GEC_PREFIX_WORDS = {
            0x79706f43, 0x68676972, 0x43282074, 0x694d2029, 0x736f7263, 0x2074666f,
            0x70726f43, 0x7461726f, 0x2e6e6f69, 0x6c6c4120, 0x67697220, 0x20737468,
            0x65736572, 0x64657672, 0x0000002e };
    private static final int GEC_PREFIX_LENGTH = 57;

    private final OkHttpClient client = new OkHttpClient();

    private android.media.MediaPlayer mediaPlayer;
    private PluginCall pendingPlayCall;

    /**
     * Plays a synthesized MP3 natively with MediaPlayer. We do NOT request
     * audio focus, so the WebView <video> keeps playing alongside TTS
     * (a second HTMLAudioElement would suspend it inside the WebView).
     */
    @PluginMethod
    public void play(PluginCall call) {
        String path = call.getString("path");
        if (path == null || path.isEmpty()) {
            call.reject("missing path");
            return;
        }
        stopPlayer(true);
        try {
            android.media.MediaPlayer mp = new android.media.MediaPlayer();
            mediaPlayer = mp;
            pendingPlayCall = call;
            mp.setDataSource(path);
            mp.setOnCompletionListener(m -> {
                PluginCall pc = pendingPlayCall;
                pendingPlayCall = null;
                cleanupPlayer();
                if (pc != null) pc.resolve();
            });
            mp.setOnErrorListener((m, what, extra) -> {
                PluginCall pc = pendingPlayCall;
                pendingPlayCall = null;
                cleanupPlayer();
                if (pc != null) pc.reject("playback error " + what);
                return true;
            });
            mp.prepare();
            mp.start();
        } catch (Exception e) {
            pendingPlayCall = null;
            cleanupPlayer();
            call.reject("play failed: " + e.getMessage(), e);
        }
    }

    @PluginMethod
    public void stop(PluginCall call) {
        stopPlayer(true);
        call.resolve();
    }

    private void cleanupPlayer() {
        if (mediaPlayer != null) {
            try { mediaPlayer.stop(); } catch (Exception ignored) {}
            try { mediaPlayer.release(); } catch (Exception ignored) {}
            mediaPlayer = null;
        }
    }

    private void stopPlayer(boolean resolvePending) {
        PluginCall pc = pendingPlayCall;
        pendingPlayCall = null;
        cleanupPlayer();
        if (resolvePending && pc != null) pc.resolve();
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text");
        String voice = call.getString("voice", "fr-FR-DeniseNeural");
        String rate = call.getString("rate", "+0%");
        if (text == null || text.trim().isEmpty()) {
            call.reject("missing text");
            return;
        }
        final String t = text;
        final String v = voice;
        final String r = rate;
        new Thread(() -> {
            try {
                File out = synth(t, v, r);
                JSObject res = new JSObject();
                res.put("path", out.getAbsolutePath());
                call.resolve(res);
            } catch (Exception e) {
                call.reject("edge-tts failed: " + e.getMessage(), e);
            }
        }).start();
    }

    private static int rol16(int x) { return (x << 16) | (x >>> 16); }

    // v2 Sec-MS-GEC coefficient table (from the Edge browser's own DRM flow).
    private static final int[][] CS64_COEFF = {
            { 0xe82e91b1, 0xb32700d0 }, { 0x44de24c6, 0x88dff51d },
            { 0x3beb65bc, 0x29514038 }, { 0xc89c5933, 0xb328cbdf },
            { 0x8d1ec211, 0xd405b4d5 }, { 0x314ef5d5, 0x26e55f3c },
            { 0xe92491b1, 0x607801c6 }, { 0xf0a5b9d5, 0x82b2c1fb },
            { 0x06064cf3, 0xfa51a3da }, { 0xda79fa60, 0x207cc464 },
            { 0xbed20560, 0x3c3c74f3 }, { 0x89f9c9f8, 0xd2d14b61 },
            { 0x35fa38c6, 0xbb04a2c1 }, { 0xcb49e3c6, 0xc5626167 } };

    private static int leWord(byte[] b, int off) {
        return (b[off] & 0xff) | ((b[off + 1] & 0xff) << 8)
                | ((b[off + 2] & 0xff) << 16) | ((b[off + 3] & 0xff) << 24);
    }

    // CS64 digest over "\x00" + data: 14 fixed terms, then one per input word.
    private static int[] cs64(byte[] data, byte[] digest) {
        int keyA = leWord(digest, 0) | 1, keyB = leWord(digest, 4) | 1;
        int factorA = keyA * 0x82893933, factorB = keyB * 0x82893933;

        // little-endian u32 words of "\x00" + data, padded to an even count
        int nWords = (data.length + 1 + 3) / 4;
        if (nWords % 2 == 1) nWords++;
        byte[] salted = new byte[nWords * 4];
        System.arraycopy(data, 0, salted, 1, data.length);
        int[] words = new int[nWords];
        for (int i = 0; i < nWords; i++) words[i] = leWord(salted, i * 4);

        int n = CS64_COEFF.length + nWords;
        int[] terms = new int[n], offsets = new int[n];
        for (int i = 0; i < CS64_COEFF.length; i++) {
            terms[i] = CS64_COEFF[i][0] * (i % 2 == 0 ? factorA : factorB);
            offsets[i] = CS64_COEFF[i][1];
        }
        for (int i = 0; i < nWords; i++) {
            int term = words[i] * (i % 2 == 0 ? keyA : keyB);
            int offset = rol16(words[i]) * (i % 2 == 0 ? 0xef0569fb : 0xc31713db);
            if (i == 0) {
                term += 0xf2f90b1a * factorA;
                offset += 0x0b1a0000;
            }
            terms[CS64_COEFF.length + i] = term;
            offsets[CS64_COEFF.length + i] = offset;
        }

        int swapAcc = 0, swapLast = 0, state = 0, acc = 0;
        for (int i = 0; i < n; i += 2) {
            int x = terms[i], y = terms[i + 1];
            int t = rol16(offsets[i] + x);
            int q = t * 0x76f50f34;
            swapAcc += rol16(q) * 0xc3efea97 + q;
            t = rol16(offsets[i + 1] + y);
            q = t * 0x1881ce3c;
            swapLast = rol16(q) * 0x35bd1ec9 + q;
            swapAcc += swapLast;
            state = state * keyA + x;
            state = rol16(state) * 0xcf98b111;
            state = rol16(state) * 0x87085b9f;
            state = rol16(state) * 0x12ceb96d;
            state = rol16(state) * 0x257e1d83;
            acc += state;
            t = state * keyB + y;
            t = rol16(t) * 0xa27416f5;
            t = rol16(t) * 0xd38396ff;
            state = rol16(rol16(t) * 0x7c932b89) * 0xbfa49f69;
            acc += state;
        }
        return new int[] { swapLast ^ state, swapAcc ^ acc };
    }

    // v2 Sec-MS-GEC: "<CS64 hex>-<SHA256 hex>". SHA256 runs over the copyright
    // prefix + "<ticks><token>"; CS64 salts the same suffix with a leading NUL.
    private static String secMsGec() throws Exception {
        long ticks = System.currentTimeMillis() / 1000 + WIN_EPOCH;
        ticks -= ticks % 300;
        ticks *= 10_000_000L;
        byte[] suffix = (ticks + TOKEN).getBytes("US-ASCII");
        byte[] data = new byte[GEC_PREFIX_LENGTH + suffix.length];
        ByteBuffer bb = ByteBuffer.wrap(data).order(ByteOrder.LITTLE_ENDIAN);
        for (int w : GEC_PREFIX_WORDS) bb.putInt(w);
        System.arraycopy(suffix, 0, data, GEC_PREFIX_LENGTH, suffix.length);
        byte[] digest = MessageDigest.getInstance("SHA-256").digest(data);
        int[] cs = cs64(suffix, digest);
        StringBuilder sb = new StringBuilder(16 + 1 + digest.length * 2);
        for (int v : cs) {
            for (int i = 0; i < 4; i++) sb.append(String.format(Locale.US, "%02X", (v >>> (8 * i)) & 0xff));
        }
        sb.append('-');
        for (byte d : digest) sb.append(String.format(Locale.US, "%02X", d));
        return sb.toString();
    }

    // "fr-FR-DeniseNeural" -> "Microsoft Server Speech Text to Speech Voice (fr-FR, DeniseNeural)"
    // (the full form the real Edge browser sends)
    private static String fullVoiceName(String v) {
        if (v.startsWith("Microsoft Server Speech")) return v;
        java.util.regex.Matcher m = java.util.regex.Pattern
                .compile("^([a-z]{2,3}-[A-Z]{2}(?:-[a-z]+)?)-(.+Neural)$").matcher(v);
        if (m.matches()) {
            return "Microsoft Server Speech Text to Speech Voice ("
                    + m.group(1) + ", " + m.group(2) + ")";
        }
        return v;
    }

    private static String escXml(String s) {
        return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
                .replace("\"", "&quot;").replace("'", "&apos;");
    }

    private static String timestamp() {
        SimpleDateFormat f = new SimpleDateFormat(
                "EEE MMM dd yyyy HH:mm:ss 'GMT+0000 (Coordinated Universal Time)'", Locale.US);
        f.setTimeZone(TimeZone.getTimeZone("UTC"));
        return f.format(new Date());
    }

    private File synth(String text, String voice, String rate) throws Exception {
        String url = "wss://api.msedgeservices.com/tts/cognitiveservices/websocket/v1"
                + "?Ocp-Apim-Subscription-Key=" + TOKEN
                + "&ConnectionId=" + UUID.randomUUID().toString().replace("-", "")
                + "&Sec-MS-GEC=" + secMsGec()
                + "&Sec-MS-GEC-Version=" + GEC_VERSION;

        File out = File.createTempFile("edge-", ".mp3", getContext().getCacheDir());
        final FileOutputStream fos = new FileOutputStream(out);
        final CountDownLatch latch = new CountDownLatch(1);
        final Exception[] err = { null };
        final boolean[] gotAudio = { false };
        final boolean[] finished = { false };

        WebSocketListener listener = new WebSocketListener() {
            @Override
            public void onOpen(WebSocket ws, Response response) {
                String ts = timestamp();
                ws.send("X-Timestamp:" + ts
                        + "\r\nContent-Type:application/json; charset=utf-8"
                        + "\r\nPath:speech.config\r\n\r\n"
                        + "{\"context\":{\"synthesis\":{\"audio\":{\"metadataoptions\":{"
                        + "\"sentenceBoundaryEnabled\":\"false\",\"wordBoundaryEnabled\":\"true\"},"
                        + "\"outputFormat\":\"audio-24khz-48kbitrate-mono-mp3\"}}}}\r\n");
                String ssml = "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis'"
                        + " xml:lang='en-US'><voice name='" + fullVoiceName(voice)
                        + "'><prosody pitch='+0Hz' rate='" + rate + "' volume='+0%'>"
                        + escXml(text) + "</prosody></voice></speak>";
                ws.send("X-RequestId:" + UUID.randomUUID().toString().replace("-", "")
                        + "\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:" + ts + "Z"
                        + "\r\nPath:ssml\r\n\r\n" + ssml);
            }

            @Override
            public void onMessage(WebSocket ws, ByteString bytes) {
                try {
                    byte[] b = bytes.toByteArray();
                    if (b.length < 3) return;
                    int hlen = ((b[0] & 0xff) << 8) | (b[1] & 0xff);
                    if (b.length > 2 + hlen) {
                        fos.write(b, 2 + hlen, b.length - 2 - hlen);
                        gotAudio[0] = true;
                    }
                } catch (Exception e) {
                    err[0] = e;
                    finished[0] = true;
                    latch.countDown();
                }
            }

            @Override
            public void onMessage(WebSocket ws, String text2) {
                if (text2.contains("Path:turn.end")) {
                    finished[0] = true;
                    latch.countDown();
                }
            }

            @Override
            public void onFailure(WebSocket ws, Throwable t, Response r) {
                err[0] = new Exception("ws failure: "
                        + (r != null ? "HTTP " + r.code() : String.valueOf(t.getMessage())));
                finished[0] = true;
                latch.countDown();
            }

            @Override
            public void onClosed(WebSocket ws, int code, String reason) {
                if (!finished[0]) {
                    finished[0] = true;
                    latch.countDown();
                }
            }
        };

        WebSocket ws = client.newWebSocket(new Request.Builder().url(url)
                .header("User-Agent", UA)
                .header("Origin", "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold")
                .header("Cookie", "muid=" + UUID.randomUUID().toString().replace("-", "").toUpperCase(Locale.US) + ";")
                .header("Accept-Language", "en-US,en;q=0.9")
                .header("Pragma", "no-cache")
                .header("Cache-Control", "no-cache")
                .build(), listener);
        latch.await(25, TimeUnit.SECONDS);
        try { ws.close(1000, "done"); } catch (Exception ignored) {}
        fos.close();
        if (err[0] != null) { out.delete(); throw err[0]; }
        if (!gotAudio[0]) { out.delete(); throw new Exception("no audio received"); }
        return out;
    }
}
