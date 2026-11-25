package com.syrian020.sa3a;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.res.AssetFileDescriptor;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.os.PowerManager;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.content.pm.ServiceInfo;
import android.provider.Settings;

/**
 * Foreground service that actually PLAYS the alarm: looping sound + vibration,
 * a wake lock, and the full-screen notification that opens the app into the
 * ringing screen. Runs independently of the WebView so the ring survives the
 * app being killed, and still makes noise when the screen is unlocked (where a
 * full-screen intent alone would only show a silent heads-up).
 */
public class AlarmRingService extends Service {

    static final String ACTION_RING = "com.syrian020.sa3a.RING";
    static final String ACTION_STOP = "com.syrian020.sa3a.STOP_RING";
    static volatile long ringingId = Long.MIN_VALUE;

    private MediaPlayer mp;
    private Vibrator vib;
    private PowerManager.WakeLock wl;
    private final Handler handler = new Handler(Looper.getMainLooper());

    @Override
    public IBinder onBind(Intent intent) { return null; }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent == null || ACTION_STOP.equals(intent.getAction())) {
            shutdown();
            return START_NOT_STICKY;
        }
        long alarmId = intent.getLongExtra(AlarmReceiver.EXTRA_RING, -1);
        String label = intent.getStringExtra("label");
        if (label == null || label.isEmpty()) label = "Alarm";
        String sound = intent.getStringExtra("sound");
        boolean vibOn = intent.getBooleanExtra("vib", true);

        ringingId = alarmId;
        postForeground(alarmId, label);
        acquireWake();
        startSound(sound);
        startVibrate(vibOn);
        handler.postDelayed(this::shutdown, 10 * 60 * 1000);
        return START_STICKY;
    }

    private void postForeground(long alarmId, String label) {
        NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        if (Build.VERSION.SDK_INT >= 26) {
            NotificationChannel ch = new NotificationChannel(AlarmReceiver.CHANNEL, "Sa3a Alarms", NotificationManager.IMPORTANCE_HIGH);
            ch.setSound(null, null);
            ch.setBypassDnd(true);
            ch.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
            nm.createNotificationChannel(ch);
        }

        Intent open = new Intent(this, MainActivity.class);
        open.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        open.putExtra(AlarmReceiver.EXTRA_RING, alarmId);
        PendingIntent fullScreen = PendingIntent.getActivity(this, (int)(Math.abs(alarmId) % 1000000), open,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);

        Intent stop = new Intent(this, AlarmRingService.class);
        stop.setAction(ACTION_STOP);
        PendingIntent stopPi = PendingIntent.getService(this, (int)(Math.abs(alarmId) % 1000000) + 1, stop,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);

        Notification n = new Notification.Builder(this, Build.VERSION.SDK_INT >= 26 ? AlarmReceiver.CHANNEL : null)
                .setSmallIcon(android.R.drawable.ic_lock_idle_alarm)
                .setContentTitle(label)
                .setContentText("⏰")
                .setCategory(Notification.CATEGORY_ALARM)
                .setPriority(Notification.PRIORITY_MAX)
                .setFullScreenIntent(fullScreen, true)
                .setContentIntent(fullScreen)
                .setOngoing(true)
                .addAction(0, "⏹ إيقاف · Stop · Arrêter", stopPi)
                .build();

        int nid = 900000 + (int)(Math.abs(alarmId) % 100000);
        try {
            if (Build.VERSION.SDK_INT >= 29)
                startForeground(nid, n, ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK);
            else
                startForeground(nid, n);
        } catch (Exception e) {
            startForeground(nid, n);
        }
    }

    private void startSound(String sound) {
        try {
            mp = new MediaPlayer();
            mp.setAudioAttributes(new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_ALARM)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                    .build());
            boolean ok = false;
            if (sound != null && sound.startsWith("asset:")) {
                String path = sound.substring(6);
                for (String p : new String[]{"public/" + path, path}) {
                    try (AssetFileDescriptor afd = getAssets().openFd(p)) {
                        mp.setDataSource(afd.getFileDescriptor(), afd.getStartOffset(), afd.getLength());
                        ok = true;
                        break;
                    } catch (Exception ignored) { }
                }
            } else if (sound != null && !sound.isEmpty()) {
                try { mp.setDataSource(this, Uri.parse(sound)); ok = true; } catch (Exception ignored) { }
            }
            if (!ok) mp.setDataSource(this, Settings.System.DEFAULT_ALARM_ALERT_URI);
            mp.setLooping(true);
            mp.prepare();
            mp.start();
        } catch (Exception e) {
            try { if (mp != null) mp.release(); } catch (Exception ignored) { }
            mp = null;
            // last resorts: plain MediaPlayer on the system alarm tone, then Ringtone
            try {
                mp = new MediaPlayer();
                mp.setAudioAttributes(new AudioAttributes.Builder()
                        .setUsage(AudioAttributes.USAGE_ALARM)
                        .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                        .build());
                mp.setDataSource(this, Settings.System.DEFAULT_ALARM_ALERT_URI);
                mp.setLooping(true);
                mp.prepare();
                mp.start();
            } catch (Exception e2) {
                try { if (mp != null) mp.release(); } catch (Exception ignored) { }
                mp = null;
                try {
                    android.media.Ringtone r = android.media.RingtoneManager.getRingtone(
                            this, Settings.System.DEFAULT_ALARM_ALERT_URI);
                    if (r != null) {
                        if (Build.VERSION.SDK_INT >= 28)
                            r.setLooping(true);
                        r.play();
                        ringtone = r;
                    }
                } catch (Exception ignored) { }
            }
        }
    }
    private android.media.Ringtone ringtone;

    private void startVibrate(boolean on) {
        if (!on) return;
        try {
            vib = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
            if (vib == null) return;
            long[] pattern = {0, 600, 300, 600, 300};
            if (Build.VERSION.SDK_INT >= 26)
                vib.vibrate(VibrationEffect.createWaveform(pattern, 0));
            else
                vib.vibrate(pattern, 0);
        } catch (Exception ignored) { }
    }

    private void acquireWake() {
        try {
            PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
            wl = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "sa3a:ring");
            wl.acquire(10 * 60 * 1000);
        } catch (Exception ignored) { }
    }

    private void shutdown() {
        ringingId = Long.MIN_VALUE;
        handler.removeCallbacksAndMessages(null);
        try { if (mp != null) { mp.stop(); mp.release(); } } catch (Exception ignored) { }
        mp = null;
        try { if (ringtone != null) { ringtone.stop(); } } catch (Exception ignored) { }
        ringtone = null;
        try { if (vib != null) vib.cancel(); } catch (Exception ignored) { }
        vib = null;
        try { if (wl != null && wl.isHeld()) wl.release(); } catch (Exception ignored) { }
        wl = null;
        try { stopForeground(true); } catch (Exception ignored) { }
        stopSelf();
    }

    /** Called by the plugin when the user dismisses/snoozes in the UI. */
    static void stopRing(Context ctx) {
        if (ringingId == Long.MIN_VALUE) return;
        Intent i = new Intent(ctx, AlarmRingService.class);
        i.setAction(ACTION_STOP);
        try { ctx.startService(i); } catch (Exception ignored) { }
    }
}
