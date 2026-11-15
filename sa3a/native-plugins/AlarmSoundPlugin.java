package com.syrian020.sa3a;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.ContentValues;
import android.content.Context;
import android.media.AudioAttributes;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.provider.Settings;
import android.util.Base64;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;

/**
 * Lets the web app import a user-picked audio file into shared media storage and
 * bind a notification channel to it, so scheduled alarms ring with an uploaded
 * sound even while the app is closed.
 */
@CapacitorPlugin(name = "AlarmSound")
public class AlarmSoundPlugin extends Plugin {

    private static String mimeFor(String name) {
        String n = name == null ? "" : name.toLowerCase();
        if (n.endsWith(".ogg")) return "audio/ogg";
        if (n.endsWith(".wav")) return "audio/wav";
        if (n.endsWith(".m4a") || n.endsWith(".aac")) return "audio/aac";
        return "audio/mpeg";
    }

    @PluginMethod
    public void importSound(PluginCall call) {
        String base64 = call.getString("base64");
        String name = call.getString("name", "alarm-sound.mp3");
        if (base64 == null) { call.reject("missing base64"); return; }
        int comma = base64.indexOf(',');
        if (base64.startsWith("data:") && comma > 0) base64 = base64.substring(comma + 1);
        try {
            byte[] bytes = Base64.decode(base64, Base64.DEFAULT);
            Context ctx = getContext();
            Uri uri;
            if (Build.VERSION.SDK_INT >= 29) {
                ContentValues v = new ContentValues();
                v.put(MediaStore.Audio.Media.DISPLAY_NAME, name);
                v.put(MediaStore.Audio.Media.MIME_TYPE, mimeFor(name));
                v.put(MediaStore.Audio.Media.RELATIVE_PATH, Environment.DIRECTORY_MUSIC + "/Sa3a");
                v.put(MediaStore.Audio.Media.IS_ALARM, true);
                uri = ctx.getContentResolver().insert(MediaStore.Audio.Media.EXTERNAL_CONTENT_URI, v);
                if (uri == null) { call.reject("mediastore insert failed"); return; }
                try (OutputStream os = ctx.getContentResolver().openOutputStream(uri)) {
                    os.write(bytes);
                }
            } else {
                File dir = new File(Environment.getExternalStoragePublicDirectory(
                        Environment.DIRECTORY_ALARMS), "Sa3a");
                dir.mkdirs();
                File out = new File(dir, name);
                try (FileOutputStream os = new FileOutputStream(out)) { os.write(bytes); }
                MediaScannerConnection.scanFile(ctx, new String[]{out.getAbsolutePath()}, null, null);
                uri = Uri.fromFile(out);
            }
            JSObject ret = new JSObject();
            ret.put("uri", uri.toString());
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("import failed: " + e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setChannelSound(PluginCall call) {
        String id = call.getString("channelId");
        String chName = call.getString("name", id);
        String soundUri = call.getString("soundUri");
        if (id == null) { call.reject("missing channelId"); return; }
        try {
            if (Build.VERSION.SDK_INT >= 26) {
                NotificationManager nm = (NotificationManager)
                        getContext().getSystemService(Context.NOTIFICATION_SERVICE);
                NotificationChannel ch = new NotificationChannel(
                        id, chName, NotificationManager.IMPORTANCE_HIGH);
                Uri sound = soundUri == null || soundUri.isEmpty()
                        ? Settings.System.DEFAULT_ALARM_ALERT_URI
                        : Uri.parse(soundUri);
                AudioAttributes attr = new AudioAttributes.Builder()
                        .setUsage(AudioAttributes.USAGE_ALARM)
                        .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                        .build();
                ch.setSound(sound, attr);
                ch.enableVibration(true);
                ch.setVibrationPattern(new long[]{0, 500, 400, 500, 400, 500});
                ch.setBypassDnd(false);
                nm.createNotificationChannel(ch);
            }
            call.resolve();
        } catch (Exception e) {
            call.reject("channel failed: " + e.getMessage(), e);
        }
    }
}
