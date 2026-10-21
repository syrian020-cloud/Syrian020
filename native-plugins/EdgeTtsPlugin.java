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

    private static int[] cs64WordSwap(int[] w, int a, int b) {
        int acc = 0, last = 0;
        for (int i = 0; i < w.length; i += 2) {
            int x = w[i], y = w[i + 1];
            int t = rol16(rol16(x) * 0xef0569fb + x * a);
            int q = t * 0x76f50f34;
            acc = acc + rol16(q) * 0xc3efea97 + q;
            t = rol16(rol16(y) * 0xc31713db + y * b);
            q = t * 0x1881ce3c;
            last = rol16(q) * 0x35bd1ec9 + q;
            acc = acc + last;
        }
        return new int[] { last, acc };
    }

    private static int[] cs64Reversible(int[] w, int a, int b) {
        int state = 0, acc = 0;
        for (int i = 0; i < w.length; i += 2) {
            state = (state + w[i]) * a;
            state = rol16(state) * 0xcf98b111;
            state = rol16(state) * 0x87085b9f;
            state = rol16(state) * 0x12ceb96d;
            state = rol16(state) * 0x257e1d83;
            int t = (w[i + 1] + state) * b;
            t = rol16(t) * 0xa27416f5;
            t = rol16(rol16(t) * 0xd38396ff);
            acc = acc + state;
            state = rol16(t * 0x7c932b89) * 0xbfa49f69;
            acc = acc + state;
        }
        return new int[] { state, acc };
    }

    private static int leWord(byte[] b, int off) {
        return (b[off] & 0xff) | ((b[off + 1] & 0xff) << 8)
                | ((b[off + 2] & 0xff) << 16) | ((b[off + 3] & 0xff) << 24);
    }

    // v2 Sec-MS-GEC: "<CS64 hex>-<SHA256 hex>" over the prefix words followed by
    // the Windows file time (rounded down to 5 minutes) and the client token.
    private static String secMsGec() throws Exception {
        long ticks = System.currentTimeMillis() / 1000 + WIN_EPOCH;
        ticks -= ticks % 300;
        ticks *= 10_000_000L;
        byte[] suffix = (ticks + TOKEN).getBytes("US-ASCII");
        byte[] data = new byte[GEC_PREFIX_LENGTH + suffix.length];
        ByteBuffer bb = ByteBuffer.wrap(data).order(ByteOrder.LITTLE_ENDIAN);
        for (int w : GEC_PREFIX_WORDS) bb.putInt(w);
        System.arraycopy(suffix, 0, data, GEC_PREFIX_LENGTH, suffix.length);
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] digest = md.digest(data);
        byte[] paddedData = new byte[(data.length + 7) / 8 * 8];
        System.arraycopy(data, 0, paddedData, 0, data.length);
        int[] words = new int[paddedData.length / 4];
        for (int i = 0; i < words.length; i++) words[i] = leWord(paddedData, i * 4);
        int a = leWord(digest, 0) | 1;
        int b = leWord(digest, 4) | 1;
        int[] s = cs64WordSwap(words, a, b);
        int[] r = cs64Reversible(words, a, b);
        StringBuilder sb = new StringBuilder(16 + 1 + digest.length * 2);
        for (int v : new int[] { s[0] ^ r[0], s[1] ^ r[1] }) {
            for (int i = 0; i < 4; i++) sb.append(String.format(Locale.US, "%02X", (v >>> (8 * i)) & 0xff));
        }
        sb.append('-');
        for (byte d : digest) sb.append(String.format(Locale.US, "%02X", d));
        return sb.toString();
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
                        + " xml:lang='en-US'><voice name='" + voice
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
