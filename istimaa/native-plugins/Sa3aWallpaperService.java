package com.syrian020.sa3a;

import android.content.SharedPreferences;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.graphics.Typeface;
import android.os.Handler;
import android.os.Looper;
import android.service.wallpaper.WallpaperService;
import android.view.SurfaceHolder;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Path;
import android.util.Base64;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

/** Live wallpaper: draws the Sa3a clock on the home screen, once per second. */
public class Sa3aWallpaperService extends WallpaperService {

    @Override
    public Engine onCreateEngine() { return new ClockEngine(); }

    private class ClockEngine extends Engine {
        private final Handler handler = new Handler(Looper.getMainLooper());
        private final Paint bg = new Paint();
        private final Paint face = new Paint(Paint.ANTI_ALIAS_FLAG);
        private final Paint line = new Paint(Paint.ANTI_ALIAS_FLAG);
        private final Paint txt = new Paint(Paint.ANTI_ALIAS_FLAG);
        private final Paint acc = new Paint(Paint.ANTI_ALIAS_FLAG);
        private boolean visible;
        private final Runnable drawTick = new Runnable() {
            @Override public void run() { draw(); if (visible) handler.postDelayed(this, 1000); }
        };

        ClockEngine() {
            bg.setColor(Color.parseColor("#0b1020"));
            face.setColor(Color.parseColor("#1a2340"));
            face.setStyle(Paint.Style.FILL);
            line.setColor(Color.parseColor("#8b93b8"));
            line.setStrokeWidth(3f);
            line.setStyle(Paint.Style.STROKE);
            txt.setColor(Color.parseColor("#eef1ff"));
            txt.setTextAlign(Paint.Align.CENTER);
            txt.setTypeface(Typeface.create(Typeface.DEFAULT, Typeface.BOLD));
            acc.setColor(Color.parseColor("#4f8cff"));
            acc.setStrokeCap(Paint.Cap.ROUND);
        }

        @Override
        public void onVisibilityChanged(boolean v) {
            visible = v;
            handler.removeCallbacks(drawTick);
            if (v) drawTick.run();
        }

        @Override
        public void onSurfaceDestroyed(SurfaceHolder holder) {
            visible = false;
            handler.removeCallbacks(drawTick);
        }

        private String style() {
            try {
                SharedPreferences p = getSharedPreferences("CapacitorStorage", MODE_PRIVATE);
                String s = p.getString("wallstyle", "analog");
                return s == null ? "analog" : s;
            } catch (Exception e) { return "analog"; }
        }

        private String wallTheme() {
            try {
                SharedPreferences p = getSharedPreferences("CapacitorStorage", MODE_PRIVATE);
                String s = p.getString("walltheme", "dark");
                return s == null ? "dark" : s;
            } catch (Exception e) { return "dark"; }
        }

        private Bitmap flagBmp;
        private Bitmap flag() {
            if (flagBmp == null) flagBmp = BitmapFactory.decodeResource(getResources(), R.drawable.flag);
            return flagBmp;
        }

        private Bitmap custBmp;
        private String custKey;
        private Bitmap cust() {
            try {
                SharedPreferences p = getSharedPreferences("CapacitorStorage", MODE_PRIVATE);
                String b64 = p.getString("wallimg", "");
                if (b64 == null || b64.isEmpty()) { custBmp = null; custKey = null; return null; }
                if (!b64.equals(custKey)) {
                    custKey = b64;
                    byte[] d = Base64.decode(b64, Base64.DEFAULT);
                    custBmp = BitmapFactory.decodeByteArray(d, 0, d.length);
                }
                return custBmp;
            } catch (Exception e) { return null; }
        }

        private Bitmap decoBmp() {
            if ("custom".equals(wallTheme())) { Bitmap b = cust(); if (b != null) return b; }
            return flag();
        }

        private boolean deco() {
            String t = wallTheme();
            return "syria".equals(t) || ("custom".equals(t) && cust() != null);
        }

        private void drawFlag(Canvas c, float cx, float cy, float r) {
            Bitmap bm = decoBmp();
            if (bm == null) return;
            Path clip = new Path();
            clip.addCircle(cx, cy, r, Path.Direction.CW);
            c.save();
            c.clipPath(clip);
            c.drawBitmap(bm, null, new RectF(cx - r, cy - r, cx + r, cy + r), null);
            c.restore();
            Paint ov = new Paint();
            ov.setColor(Color.argb(95, 0, 0, 0));
            c.drawCircle(cx, cy, r, ov);
        }

        private void draw() {
            boolean sy = deco();
            bg.setColor(Color.parseColor(sy ? "#06130c" : "#0b1020"));
            line.setColor(sy ? Color.WHITE : Color.parseColor("#8b93b8"));
            SurfaceHolder h = getSurfaceHolder();
            Canvas c = null;
            try {
                c = h.lockCanvas();
                if (c == null) return;
                c.drawRect(0, 0, c.getWidth(), c.getHeight(), bg);
                Calendar cal = Calendar.getInstance();
                float cx = c.getWidth() / 2f, cy = c.getHeight() * 0.42f;
                if ("digital".equals(style())) drawDigital(c, cx, cy, cal);
                else drawAnalog(c, cx, cy, cal);
            } finally {
                if (c != null) h.unlockCanvasAndPost(c);
            }
        }

        private void drawAnalog(Canvas c, float cx, float cy, Calendar cal) {
            boolean sy = deco();
            float r = Math.min(c.getWidth(), c.getHeight()) * 0.36f;
            if (sy) drawFlag(c, cx, cy, r); else c.drawCircle(cx, cy, r, face);
            line.setStrokeWidth(4f);
            c.drawCircle(cx, cy, r, line);
            // ticks + numbers
            for (int i = 0; i < 60; i++) {
                double a = Math.toRadians(i * 6);
                boolean big = i % 5 == 0;
                float r1 = r * (big ? 0.86f : 0.92f);
                line.setStrokeWidth(big ? 6f : 2.5f);
                c.drawLine(cx + (float)(r1 * Math.sin(a)), cy - (float)(r1 * Math.cos(a)),
                        cx + (float)(r * 0.95 * Math.sin(a)), cy - (float)(r * 0.95 * Math.cos(a)), line);
            }
            txt.setTextSize(r * 0.16f);
            for (int n = 1; n <= 12; n++) {
                double a = Math.toRadians(n * 30);
                c.drawText(String.valueOf(n), cx + (float)(r * 0.68 * Math.sin(a)),
                        cy - (float)(r * 0.68 * Math.cos(a)) + txt.getTextSize() * 0.35f, txt);
            }
            int hh = cal.get(Calendar.HOUR), mm = cal.get(Calendar.MINUTE), ss = cal.get(Calendar.SECOND);
            int hcol = sy ? Color.WHITE : txt.getColor();
            int scol = sy ? Color.parseColor("#ffd23e") : acc.getColor();
            if (sy) {
                drawHand(c, cx, cy, r, (hh % 12) * 30 + mm * 0.5f, 0.52f, r * 0.085f, Color.BLACK);
                drawHand(c, cx, cy, r, mm * 6 + ss * 0.1f, 0.72f, r * 0.06f, Color.BLACK);
                drawHand(c, cx, cy, r, ss * 6, 0.82f, r * 0.03f, Color.BLACK);
            }
            drawHand(c, cx, cy, r, (hh % 12) * 30 + mm * 0.5f, 0.52f, r * 0.05f, hcol);
            drawHand(c, cx, cy, r, mm * 6 + ss * 0.1f, 0.72f, r * 0.035f, hcol);
            drawHand(c, cx, cy, r, ss * 6, 0.82f, r * 0.016f, scol);
            Paint dp = new Paint(Paint.ANTI_ALIAS_FLAG); dp.setColor(scol);
            c.drawCircle(cx, cy, r * 0.05f, dp);
            txt.setTextSize(r * 0.12f);
            txt.setColor(Color.parseColor("#8b93b8"));
            c.drawText(new SimpleDateFormat("EEEE d MMMM", Locale.getDefault()).format(new Date()),
                    cx, cy + r * 1.25f, txt);
            txt.setColor(Color.parseColor("#eef1ff"));
        }

        private void drawHand(Canvas c, float cx, float cy, float r, float deg,
                              float len, float w, int color) {
            Paint p = new Paint(Paint.ANTI_ALIAS_FLAG);
            p.setColor(color); p.setStrokeWidth(w); p.setStrokeCap(Paint.Cap.ROUND);
            double a = Math.toRadians(deg);
            c.drawLine(cx, cy, cx + (float)(r * len * Math.sin(a)),
                    cy - (float)(r * len * Math.cos(a)), p);
        }

        private void drawDigital(Canvas c, float cx, float cy, Calendar cal) {
            boolean sy = deco();
            if (sy) drawFlag(c, cx, cy, Math.min(c.getWidth(), c.getHeight()) * 0.4f);
            if (sy) txt.setShadowLayer(c.getWidth() * 0.012f, 0, c.getWidth() * 0.004f, Color.BLACK);
            float big = c.getWidth() * 0.22f;
            txt.setColor(Color.parseColor("#eef1ff"));
            txt.setTextSize(big);
            String time = String.format(Locale.US, "%02d:%02d",
                    cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE));
            String sec = String.format(Locale.US, "%02d", cal.get(Calendar.SECOND));
            float tw = txt.measureText(time);
            txt.setTextSize(big * 0.35f);
            float sw = txt.measureText(sec);
            float startX = cx - (tw + sw) / 2f;
            txt.setTextSize(big);
            c.drawText(time, startX + tw / 2f, cy, txt);
            int dim = sy ? Color.WHITE : Color.parseColor("#8b93b8");
            txt.setTextSize(big * 0.35f);
            txt.setColor(dim);
            c.drawText(sec, startX + tw + sw / 2f + big * 0.04f, cy, txt);
            txt.setTextSize(big * 0.16f);
            c.drawText(new SimpleDateFormat("EEEE d MMMM yyyy", Locale.getDefault()).format(new Date()),
                    cx, cy + big * 0.4f, txt);
            if (sy) txt.clearShadowLayer();
            txt.setColor(Color.parseColor("#eef1ff"));
        }
    }
}
