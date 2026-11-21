package com.syrian020.sa3a;

import android.app.AlarmManager;
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
    public void exactAlarmStatus(PluginCall call) {
        JSObject ret = new JSObject();
        if (Build.VERSION.SDK_INT >= 31) {
            android.app.AlarmManager am = (android.app.AlarmManager)
                    getContext().getSystemService(Context.ALARM_SERVICE);
            ret.put("canSchedule", am.canScheduleExactAlarms());
        } else {
            ret.put("canSchedule", true);
        }
        call.resolve(ret);
    }

    @PluginMethod
    public void requestExactAlarm(PluginCall call) {
        try {
            if (Build.VERSION.SDK_INT >= 31) {
                android.content.Intent i = new android.content.Intent(
                        Settings.ACTION_REQUEST_SCHEDULE_EXACT_ALARM,
                        Uri.parse("package:" + getContext().getPackageName()));
                getActivity().startActivity(i);
            }
            call.resolve();
        } catch (Exception e) {
            call.reject("failed: " + e.getMessage(), e);
        }
    }

    @PluginMethod
    public void openAppSettings(PluginCall call) {
        try {
            android.content.Intent i = new android.content.Intent(
                    Settings.ACTION_APPLICATION_DETAILS_SETTINGS,
                    Uri.parse("package:" + getContext().getPackageName()));
            getActivity().startActivity(i);
            call.resolve();
        } catch (Exception e) {
            call.reject("failed: " + e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setAsWallpaper(PluginCall call) {
        try {
            android.content.Intent intent = new android.content.Intent(
                    android.app.WallpaperManager.ACTION_CHANGE_LIVE_WALLPAPER);
            intent.putExtra(android.app.WallpaperManager.EXTRA_LIVE_WALLPAPER_COMPONENT,
                    new android.content.ComponentName(getContext(), Sa3aWallpaperService.class));
            getActivity().startActivity(intent);
            call.resolve();
        } catch (Exception e) {
            call.reject("wallpaper failed: " + e.getMessage(), e);
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

    /* ---------- native alarm-clock scheduling (rings over lock screen) ---------- */

    static void scheduleNativeOccurrence(Context ctx, int req, long at, long alarmId, String label, String sound, boolean vib) {
        AlarmManager am = (AlarmManager) ctx.getSystemService(Context.ALARM_SERVICE);
        if (am == null) return;
        android.content.Intent i = new android.content.Intent(ctx, AlarmReceiver.class);
        i.setAction("com.syrian020.sa3a.NATIVE_ALARM");
        i.putExtra(AlarmReceiver.EXTRA_RING, alarmId);
        i.putExtra("req", req);
        i.putExtra("label", label);
        i.putExtra("sound", sound);
        i.putExtra("vib", vib);
        android.app.PendingIntent op = android.app.PendingIntent.getBroadcast(
                ctx, req, i, android.app.PendingIntent.FLAG_UPDATE_CURRENT | android.app.PendingIntent.FLAG_IMMUTABLE);
        android.content.Intent show = new android.content.Intent(ctx, MainActivity.class);
        android.app.PendingIntent showPi = android.app.PendingIntent.getActivity(
                ctx, 0, show, android.app.PendingIntent.FLAG_UPDATE_CURRENT | android.app.PendingIntent.FLAG_IMMUTABLE);
        am.setAlarmClock(new AlarmManager.AlarmClockInfo(at, showPi), op);
        AlarmReceiver.ledger(ctx, req, at, alarmId, label, sound, vib);
    }

    @PluginMethod
    public void scheduleNative(PluginCall call) {
        Integer req = call.getInt("req");
        Long at = call.getLong("at");
        Long alarmId = call.getLong("alarmId");
        String label = call.getString("label", "");
        String sound = call.getString("sound", "");
        boolean vib = call.getBoolean("vib", true);
        if (req == null || at == null || alarmId == null) { call.reject("missing args"); return; }
        try {
            scheduleNativeOccurrence(getContext(), req, at, alarmId, label, sound, vib);
            call.resolve();
        } catch (Exception e) {
            call.reject("schedule failed: " + e.getMessage(), e);
        }
    }

    @PluginMethod
    public void cancelNative(PluginCall call) {
        Integer req = call.getInt("req");
        if (req == null) { call.reject("missing req"); return; }
        try {
            Context ctx = getContext();
            AlarmManager am = (AlarmManager) ctx.getSystemService(Context.ALARM_SERVICE);
            android.content.Intent i = new android.content.Intent(ctx, AlarmReceiver.class);
            i.setAction("com.syrian020.sa3a.NATIVE_ALARM");
            android.app.PendingIntent op = android.app.PendingIntent.getBroadcast(
                    ctx, req, i, android.app.PendingIntent.FLAG_UPDATE_CURRENT | android.app.PendingIntent.FLAG_IMMUTABLE);
            if (am != null) am.cancel(op);
            AlarmReceiver.removeOccurrence(ctx, req);
            call.resolve();
        } catch (Exception e) {
            call.reject("cancel failed: " + e.getMessage(), e);
        }
    }

    /** Reads and clears the alarm id the app was opened with (full-screen intent). */
    private Long pendingRingId = null;

    @Override
    protected void handleOnNewIntent(android.content.Intent intent) {
        super.handleOnNewIntent(intent);
        if (intent != null && intent.hasExtra(AlarmReceiver.EXTRA_RING))
            pendingRingId = intent.getLongExtra(AlarmReceiver.EXTRA_RING, -1);
    }

    @PluginMethod
    public void nativeDebug(PluginCall call) {
        Context ctx = getContext();
        JSObject ret = new JSObject();
        try {
            if (Build.VERSION.SDK_INT >= 31) {
                AlarmManager am = (AlarmManager) ctx.getSystemService(Context.ALARM_SERVICE);
                ret.put("canSchedule", am.canScheduleExactAlarms());
            } else ret.put("canSchedule", true);
            NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
            ret.put("notif", nm.areNotificationsEnabled());
            if (Build.VERSION.SDK_INT >= 34) ret.put("fsi", nm.canUseFullScreenIntent());
            else ret.put("fsi", true);
            android.content.SharedPreferences p = ctx.getSharedPreferences(AlarmReceiver.PREFS, Context.MODE_PRIVATE);
            int n = 0; long next = -1;
            for (java.util.Map.Entry<String, ?> e : p.getAll().entrySet()) {
                if (!e.getKey().startsWith("t_")) continue;
                n++;
                long at = (Long) e.getValue();
                if (at > System.currentTimeMillis() && (next < 0 || at < next)) next = at;
            }
            ret.put("native", n);
            ret.put("nextAt", next);
            ret.put("ringing", AlarmRingService.ringingId);
            ret.put("sdk", Build.VERSION.SDK_INT);
        } catch (Exception e) {
            call.reject("debug failed: " + e.getMessage(), e);
            return;
        }
        call.resolve(ret);
    }

    @PluginMethod
    public void stopNativeRing(PluginCall call) {
        AlarmRingService.stopRing(getContext());
        call.resolve();
    }

    @PluginMethod
    public void nativeRingState(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("alarmId", AlarmRingService.ringingId);
        call.resolve(ret);
    }

    @PluginMethod
    public void consumeRingIntent(PluginCall call) {
        try {
            android.content.Intent in = getActivity().getIntent();
            JSObject ret = new JSObject();
            if (pendingRingId != null) {
                ret.put("alarmId", pendingRingId);
                pendingRingId = null;
            } else if (in != null && in.hasExtra(AlarmReceiver.EXTRA_RING)) {
                ret.put("alarmId", in.getLongExtra(AlarmReceiver.EXTRA_RING, -1));
                in.removeExtra(AlarmReceiver.EXTRA_RING);
            }
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("intent failed: " + e.getMessage(), e);
        }
    }
}
