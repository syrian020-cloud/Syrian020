package com.syrian020.sa3a;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;

/**
 * Receives native alarm-clock triggers and posts a full-screen notification that
 * opens the app straight into the ringing screen, like the system Clock app.
 * Also re-registers alarms after device reboot from a SharedPreferences ledger.
 */
public class AlarmReceiver extends BroadcastReceiver {

    static final String PREFS = "sa3a_native_alarms";
    static final String CHANNEL = "sa3a_fullscreen";
    static final String EXTRA_RING = "sa3a_ring";

    @Override
    public void onReceive(Context ctx, Intent intent) {
        String action = intent.getAction() == null ? "" : intent.getAction();
        if (Intent.ACTION_BOOT_COMPLETED.equals(action)) {
            rescheduleAll(ctx);
            return;
        }
        if (!"com.syrian020.sa3a.NATIVE_ALARM".equals(action)) return;

        int alarmId = intent.getIntExtra(EXTRA_RING, -1);
        String label = intent.getStringExtra("label");
        if (label == null) label = "";

        // Drop this occurrence from the ledger.
        removeOccurrence(ctx, intent.getIntExtra("req", -1));

        // Hand the actual ringing to the foreground service: it plays the sound,
        // vibrates and posts the full-screen notification itself.
        Intent svc = new Intent(ctx, AlarmRingService.class);
        svc.setAction(AlarmRingService.ACTION_RING);
        svc.putExtra(EXTRA_RING, alarmId);
        svc.putExtra("label", label);
        svc.putExtra("sound", intent.getStringExtra("sound"));
        svc.putExtra("vib", intent.getBooleanExtra("vib", true));
        try {
            if (Build.VERSION.SDK_INT >= 26) ctx.startForegroundService(svc);
            else ctx.startService(svc);
        } catch (Exception ignored) { }
    }

    /** Persist every scheduled occurrence so alarms survive reboot. */
    static void ledger(Context ctx, int req, long at, int alarmId, String label, String sound, boolean vib) {
        SharedPreferences p = ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        SharedPreferences.Editor e = p.edit();
        e.putLong("t_" + req, at);
        e.putInt("i_" + req, alarmId);
        e.putString("l_" + req, label == null ? "" : label);
        e.putString("s_" + req, sound == null ? "" : sound);
        e.putBoolean("v_" + req, vib);
        e.apply();
    }

    static void removeOccurrence(Context ctx, int req) {
        if (req < 0) return;
        SharedPreferences p = ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        p.edit().remove("t_" + req).remove("i_" + req).remove("l_" + req)
                .remove("s_" + req).remove("v_" + req).apply();
    }

    static void rescheduleAll(Context ctx) {
        SharedPreferences p = ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        AlarmManager am = (AlarmManager) ctx.getSystemService(Context.ALARM_SERVICE);
        long now = System.currentTimeMillis();
        for (String k : p.getAll().keySet()) {
            if (!k.startsWith("t_")) continue;
            int req = Integer.parseInt(k.substring(2));
            long at = p.getLong(k, -1);
            if (at <= now) { removeOccurrence(ctx, req); continue; }
            AlarmSoundPlugin.scheduleNativeOccurrence(ctx, req, at, p.getInt("i_" + req, 0),
                    p.getString("l_" + req, ""), p.getString("s_" + req, ""), p.getBoolean("v_" + req, true));
        }
        if (am != null) { /* am used inside scheduleNativeOccurrence */ }
    }
}
