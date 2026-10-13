package com.syrian020.tts;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.provider.OpenableColumns;
import android.util.Base64;

import androidx.activity.result.ActivityResult;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.RandomAccessFile;

/**
 * FilePick plugin: imports a JSON export file on Android.
 * The WebView <input type="file"> can't stream files from some content
 * providers (Drive / "Recent" / WhatsApp) — reads fail with
 * NotReadableError. This plugin opens the system document picker,
 * copies the chosen file into the app cache (a real file the app owns),
 * then serves it back to JS in chunks.
 */
@CapacitorPlugin(name = "FilePick")
public class FilePickPlugin extends Plugin {

    @PluginMethod
    public void pick(PluginCall call) {
        Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        intent.setType("*/*");
        String[] mime = { "application/json", "text/plain", "application/octet-stream" };
        intent.putExtra(Intent.EXTRA_MIME_TYPES, mime);
        startActivityForResult(call, intent, "onPickResult");
    }

    @ActivityCallback
    private void onPickResult(PluginCall call, ActivityResult result) {
        if (result.getResultCode() != Activity.RESULT_OK || result.getData() == null
                || result.getData().getData() == null) {
            call.reject("cancelled");
            return;
        }
        Uri uri = result.getData().getData();
        try {
            String name = "export.json";
            Cursor c = getContext().getContentResolver()
                    .query(uri, null, null, null, null);
            if (c != null) {
                int ni = c.getColumnIndex(OpenableColumns.DISPLAY_NAME);
                if (c.moveToFirst() && ni >= 0 && c.getString(ni) != null) name = c.getString(ni);
                c.close();
            }
            String safe = name.replaceAll("[^A-Za-z0-9._-]", "_");
            File out = new File(getContext().getCacheDir(), "import-" + System.currentTimeMillis() + "-" + safe);
            try (InputStream in = getContext().getContentResolver().openInputStream(uri);
                 FileOutputStream fos = new FileOutputStream(out)) {
                if (in == null) throw new Exception("provider returned no stream");
                byte[] buf = new byte[256 * 1024];
                int n;
                while ((n = in.read(buf)) != -1) fos.write(buf, 0, n);
            }
            JSObject res = new JSObject();
            res.put("path", out.getAbsolutePath());
            res.put("name", name);
            res.put("size", out.length());
            call.resolve(res);
        } catch (Exception e) {
            call.reject("copy failed: " + e.getMessage(), e);
        }
    }

    @PluginMethod
    public void readChunk(PluginCall call) {
        String path = call.getString("path");
        if (path == null) { call.reject("missing path"); return; }
        long offset = call.getLong("offset", 0L);
        int length = call.getInt("length", 4 * 1024 * 1024);
        try (RandomAccessFile raf = new RandomAccessFile(path, "r")) {
            long size = raf.length();
            if (offset < 0) offset = 0;
            if (offset > size) offset = size;
            raf.seek(offset);
            int want = (int) Math.min(length, size - offset);
            byte[] buf = new byte[want];
            int got = 0;
            while (got < want) {
                int n = raf.read(buf, got, want - got);
                if (n == -1) break;
                got += n;
            }
            byte[] exact = buf;
            if (got < want) {
                exact = new byte[got];
                System.arraycopy(buf, 0, exact, 0, got);
            }
            JSObject res = new JSObject();
            res.put("data", Base64.encodeToString(exact, Base64.NO_WRAP));
            res.put("size", size);
            call.resolve(res);
        } catch (Exception e) {
            call.reject("read failed: " + e.getMessage(), e);
        }
    }
}
