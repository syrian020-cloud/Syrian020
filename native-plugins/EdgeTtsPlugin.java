package com.syrian020.tts;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileOutputStream;
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
    private static final String GEC_VERSION = "1-143.0.3650.75";
    private static final String UA =
            "Mozilla/5.0 (Linux; Android 10; ONEPLUS A6003) AppleWebKit/537.36"
                    + " (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36 EdgA/143.0.0.0";
    private static final long WIN_EPOCH = 11644473600L;

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

    private static String secMsGec() throws Exception {
        long ticks = System.currentTimeMillis() / 1000 + WIN_EPOCH;
        ticks -= ticks % 300;
        ticks *= 10_000_000L;
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] d = md.digest((ticks + TOKEN).getBytes("US-ASCII"));
        StringBuilder sb = new StringBuilder(d.length * 2);
        for (byte b : d) sb.append(String.format(Locale.US, "%02X", b));
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
        String url = "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1"
                + "?TrustedClientToken=" + TOKEN
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
                        + "\"sentenceBoundaryEnabled\":\"true\",\"wordBoundaryEnabled\":\"false\"},"
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

        WebSocket ws = client.newWebSocket(
                new Request.Builder().url(url).header("User-Agent", UA).build(), listener);
        latch.await(25, TimeUnit.SECONDS);
        try { ws.close(1000, "done"); } catch (Exception ignored) {}
        fos.close();
        if (err[0] != null) { out.delete(); throw err[0]; }
        if (!gotAudio[0]) { out.delete(); throw new Exception("no audio received"); }
        return out;
    }
}
