package com.syrian020.tts;

import android.os.Environment;
import android.os.Handler;
import android.os.Looper;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import dev.bmcreations.scrcast.ScrCast;
import dev.bmcreations.scrcast.config.NotificationConfig;
import dev.bmcreations.scrcast.config.Options;
import dev.bmcreations.scrcast.config.StorageConfig;
import dev.bmcreations.scrcast.config.VideoConfig;
import dev.bmcreations.scrcast.recorder.RecordingCallbacks;
import dev.bmcreations.scrcast.recorder.RecordingState;

import java.io.File;

/**
 * Screen-recorder plugin for gramvip: wraps ScrCast (MediaProjection) so the
 * JS side can record the game screen and share the mp4. Files land in
 * Android/data/<pkg>/files/Movies/gramvip (Directory.External).
 */
@CapacitorPlugin(name = "GramScreenRecorder")
public class GramScreenRecorderPlugin extends Plugin {

    private ScrCast recorder;
    private PluginCall pendingStop;
    private File lastFile;

    @Override
    public void load() {
        recorder = ScrCast.use(this.bridge.getActivity());
        File dir = new File(getContext().getExternalFilesDir(Environment.DIRECTORY_MOVIES), "gramvip");
        StorageConfig storage = new StorageConfig("gramvip", dir);
        Options options = new Options(new VideoConfig(), storage, new NotificationConfig(), false, 0L, false);
        recorder.updateOptions(options);
        recorder.setRecordingCallback(new RecordingCallbacks() {
            @Override
            public void onStateChange(RecordingState state) {}

            @Override
            public void onRecordingFinished(File file) {
                lastFile = file;
                PluginCall call = pendingStop;
                pendingStop = null;
                if (call != null) {
                    JSObject ret = new JSObject();
                    ret.put("path", file.getAbsolutePath());
                    ret.put("name", file.getName());
                    call.resolve(ret);
                }
            }
        });
    }

    @PluginMethod
    public void start(PluginCall call) {
        new Handler(Looper.getMainLooper()).post(() -> {
            try {
                lastFile = null;
                recorder.record();
                call.resolve();
            } catch (Exception e) {
                call.reject("record failed: " + e.getMessage(), e);
            }
        });
    }

    @PluginMethod
    public void stop(PluginCall call) {
        new Handler(Looper.getMainLooper()).post(() -> {
            try {
                pendingStop = call;
                recorder.stopRecording();
                // fallback: if the finish callback never fires, don't hang the JS
                new Handler(Looper.getMainLooper()).postDelayed(() -> {
                    if (pendingStop == call) {
                        pendingStop = null;
                        if (lastFile != null) {
                            JSObject ret = new JSObject();
                            ret.put("path", lastFile.getAbsolutePath());
                            ret.put("name", lastFile.getName());
                            call.resolve(ret);
                        } else {
                            call.reject("no recording produced");
                        }
                    }
                }, 4000);
            } catch (Exception e) {
                pendingStop = null;
                call.reject("stop failed: " + e.getMessage(), e);
            }
        });
    }
}
