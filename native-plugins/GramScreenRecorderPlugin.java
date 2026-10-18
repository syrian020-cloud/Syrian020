package com.syrian020.tts;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.hardware.display.DisplayManager;
import android.hardware.display.VirtualDisplay;
import android.media.MediaRecorder;
import android.media.projection.MediaProjection;
import android.media.projection.MediaProjectionManager;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.util.DisplayMetrics;
import android.view.WindowManager;

import androidx.activity.result.ActivityResult;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * Screen-recorder plugin for gramvip: records the screen via MediaProjection
 * into Android/data/<pkg>/files/Movies/gramvip (Directory.External).
 * The system consent dialog is shown only for the first record() of an app
 * session — later records reuse the live MediaProjection, Zeelang-style.
 */
@CapacitorPlugin(name = "GramScreenRecorder")
public class GramScreenRecorderPlugin extends Plugin {

    private MediaProjectionManager mgr;
    private MediaProjection projection;
    private VirtualDisplay display;
    private MediaRecorder recorder;
    private File outFile;
    private boolean recording = false;
    private PluginCall pendingStop;

    @Override
    public void load() {
        mgr = (MediaProjectionManager) getContext().getSystemService(Context.MEDIA_PROJECTION_SERVICE);
    }

    @PluginMethod
    public void start(PluginCall call) {
        if (recording) { call.resolve(); return; }
        Activity act = getActivity();
        if (act == null) { call.reject("no activity"); return; }
        if (projection != null) {
            try {
                beginRecording();
                call.resolve();
            } catch (Exception e) {
                call.reject("record failed: " + e.getMessage(), e);
            }
            return;
        }
        // first time: needs the system consent dialog
        startActivityForResult(call, mgr.createScreenCaptureIntent(), "onProjResult");
    }

    @ActivityCallback
    private void onProjResult(PluginCall call, ActivityResult result) {
        if (call == null) return;
        if (result.getResultCode() != Activity.RESULT_OK || result.getData() == null) {
            call.reject("screen capture denied");
            return;
        }
        try {
            getContext().startForegroundService(new Intent(getContext(), GramRecService.class));
            projection = mgr.getMediaProjection(result.getResultCode(), result.getData());
            projection.registerCallback(new MediaProjection.Callback() {
                @Override
                public void onStop() {
                    projection = null;
                    stopInternal();
                }
            }, new Handler(Looper.getMainLooper()));
            beginRecording();
            call.resolve();
        } catch (Exception e) {
            call.reject("record failed: " + e.getMessage(), e);
        }
    }

    private void beginRecording() throws Exception {
        File dir = new File(getContext().getExternalFilesDir(Environment.DIRECTORY_MOVIES), "gramvip");
        dir.mkdirs();
        outFile = new File(dir, "rec-" + new SimpleDateFormat("MMdd-HHmmss", Locale.US).format(new Date()) + ".mp4");

        DisplayMetrics m = new DisplayMetrics();
        ((WindowManager) getContext().getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay().getRealMetrics(m);
        int w = Math.min(m.widthPixels, 1080);
        int h = Math.min(m.heightPixels, 1920);

        recorder = new MediaRecorder();
        recorder.setVideoSource(MediaRecorder.VideoSource.SURFACE);
        recorder.setOutputFormat(MediaRecorder.OutputFormat.MPEG_4);
        recorder.setVideoEncoder(MediaRecorder.VideoEncoder.H264);
        recorder.setVideoEncodingBitRate(6 * 1024 * 1024);
        recorder.setVideoFrameRate(30);
        recorder.setVideoSize(w, h);
        recorder.setOutputFile(outFile.getAbsolutePath());
        recorder.prepare();

        display = projection.createVirtualDisplay("gramvip", w, h, m.densityDpi,
                DisplayManager.VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR, recorder.getSurface(), null, null);
        recorder.start();
        recording = true;
    }

    private void stopInternal() {
        recording = false;
        try { if (recorder != null) recorder.stop(); } catch (Exception ignored) {}
        try { if (recorder != null) recorder.release(); } catch (Exception ignored) {}
        recorder = null;
        try { if (display != null) display.release(); } catch (Exception ignored) {}
        display = null;
        getContext().stopService(new Intent(getContext(), GramRecService.class));
        PluginCall call = pendingStop;
        pendingStop = null;
        if (call != null) {
            if (outFile != null && outFile.exists() && outFile.length() > 0) {
                JSObject ret = new JSObject();
                ret.put("path", outFile.getAbsolutePath());
                ret.put("name", outFile.getName());
                call.resolve(ret);
            } else {
                call.reject("no recording produced");
            }
        }
    }

    @PluginMethod
    public void stop(PluginCall call) {
        if (!recording) { call.reject("not recording"); return; }
        pendingStop = call;
        new Handler(Looper.getMainLooper()).postDelayed(this::stopInternal, 300);
    }
}
