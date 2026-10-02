package com.syrian020.pdfscanner;

import android.Manifest;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.ContentUris;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Rect;
import android.graphics.pdf.PdfRenderer;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.CancellationSignal;
import android.os.Environment;
import android.os.ParcelFileDescriptor;
import android.print.PageRange;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintDocumentInfo;
import android.print.PrintManager;
import android.print.pdf.PrintedPdfDocument;
import android.provider.MediaStore;
import android.provider.Settings;
import android.util.Base64;

import androidx.activity.result.ActivityResult;
import androidx.core.content.ContextCompat;
import androidx.core.content.FileProvider;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.IOException;

@CapacitorPlugin(
    name = "PdfScanner",
    permissions = {
        @Permission(strings = { Manifest.permission.READ_EXTERNAL_STORAGE }, alias = "storage")
    }
)
public class PdfScannerPlugin extends Plugin {

    /**
     * Returns { status: "granted" | "denied" | "settings" }.
     * "settings" means the user must grant All Files Access in system
     * settings (Android 11+).
     */
    @PluginMethod
    public void getAccessStatus(PluginCall call) {
        JSObject ret = new JSObject();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            ret.put("status", Environment.isExternalStorageManager() ? "granted" : "settings");
        } else {
            int check = ContextCompat.checkSelfPermission(
                getContext(), Manifest.permission.READ_EXTERNAL_STORAGE);
            ret.put("status", check == PackageManager.PERMISSION_GRANTED ? "granted" : "denied");
        }
        call.resolve(ret);
    }

    /**
     * Android 11+: opens the system All Files Access screen for this app.
     * Android <= 10: shows the runtime permission dialog.
     * Resolves immediately after dispatching; the web layer re-checks
     * getAccessStatus() on resume.
     */
    @PluginMethod
    public void requestStorageAccess(PluginCall call) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            try {
                Intent intent = new Intent(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION);
                intent.setData(Uri.parse("package:" + getContext().getPackageName()));
                startActivityForResult(call, intent, "accessSettingsResult");
            } catch (Exception e) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION);
                startActivityForResult(call, intent, "accessSettingsResult");
            }
        } else {
            requestPermissionForAlias("storage", call, "accessPermissionResult");
        }
    }

    @ActivityCallback
    private void accessSettingsResult(PluginCall call, ActivityResult result) {
        JSObject ret = new JSObject();
        ret.put("status", Environment.isExternalStorageManager() ? "granted" : "settings");
        call.resolve(ret);
    }

    @PermissionCallback
    private void accessPermissionResult(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("status", getPermissionState("storage") == PermissionState.GRANTED ? "granted" : "denied");
        call.resolve(ret);
    }

    /**
     * Lists every PDF on the device: a direct storage walk when the app
     * holds All Files Access, else a MediaStore.Files query.
     * Returns { files: [{ name, uri, path, size, modified }] } sorted by
     * most recently modified first.
     */
    @PluginMethod
    public void listPdfs(PluginCall call) {
        JSArray files = new JSArray();

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R
                && Environment.isExternalStorageManager()) {
            // All-files access: MediaStore.Files can stay filtered on newer
            // Android, so walk the shared storage tree directly.
            List<JSObject> found = new ArrayList<>();
            walkForPdfs(Environment.getExternalStorageDirectory(), found, 0);
            found.sort((a, b) -> Long.compare(b.optLong("modified"), a.optLong("modified")));
            for (JSObject f : found) files.put(f);
            JSObject ret = new JSObject();
            ret.put("files", files);
            call.resolve(ret);
            return;
        }

        Uri collection = MediaStore.Files.getContentUri("external");
        String[] projection = {
            MediaStore.Files.FileColumns._ID,
            MediaStore.Files.FileColumns.DISPLAY_NAME,
            MediaStore.Files.FileColumns.SIZE,
            MediaStore.Files.FileColumns.DATE_MODIFIED,
            MediaStore.Files.FileColumns.DATA
        };
        String selection = MediaStore.Files.FileColumns.MIME_TYPE + " = ?"
            + " OR " + MediaStore.Files.FileColumns.DISPLAY_NAME + " LIKE ?";
        String[] args = { "application/pdf", "%.pdf" };
        String sort = MediaStore.Files.FileColumns.DATE_MODIFIED + " DESC";

        try (Cursor cursor = getContext().getContentResolver().query(
                collection, projection, selection, args, sort)) {
            if (cursor != null) {
                int colId = cursor.getColumnIndexOrThrow(MediaStore.Files.FileColumns._ID);
                int colName = cursor.getColumnIndexOrThrow(MediaStore.Files.FileColumns.DISPLAY_NAME);
                int colSize = cursor.getColumnIndexOrThrow(MediaStore.Files.FileColumns.SIZE);
                int colDate = cursor.getColumnIndexOrThrow(MediaStore.Files.FileColumns.DATE_MODIFIED);
                int colData = cursor.getColumnIndexOrThrow(MediaStore.Files.FileColumns.DATA);
                while (cursor.moveToNext()) {
                    long id = cursor.getLong(colId);
                    String name = cursor.getString(colName);
                    if (name == null || !name.toLowerCase().endsWith(".pdf")) continue;
                    JSObject file = new JSObject();
                    file.put("name", name);
                    file.put("uri", ContentUris.withAppendedId(collection, id).toString());
                    file.put("path", cursor.getString(colData));
                    file.put("size", cursor.getLong(colSize));
                    file.put("modified", cursor.getLong(colDate));
                    files.put(file);
                }
            }
        } catch (Exception e) {
            call.reject("Failed to scan PDFs: " + e.getMessage(), e);
            return;
        }

        JSObject ret = new JSObject();
        ret.put("files", files);
        call.resolve(ret);
    }

    private void walkForPdfs(File dir, List<JSObject> out, int depth) {
        if (depth > 10 || dir == null) return;
        File[] kids = dir.listFiles();
        if (kids == null) return;
        for (File kid : kids) {
            String name = kid.getName();
            if (name.startsWith(".")) continue;
            if (kid.isDirectory()) {
                walkForPdfs(kid, out, depth + 1);
            } else if (name.toLowerCase().endsWith(".pdf")) {
                JSObject file = new JSObject();
                String path = kid.getAbsolutePath();
                file.put("name", name);
                file.put("uri", "file://" + path);
                file.put("path", path);
                file.put("size", kid.length());
                file.put("modified", kid.lastModified() / 1000);
                out.add(file);
            }
        }
    }

    /**
     * Reads a PDF and returns it as base64 in { data }.
     * Accepts a content:// URI (from listPdfs) or an absolute file path.
     */
    @PluginMethod
    public void readPdf(PluginCall call) {
        String uri = call.getString("uri");
        if (uri == null) {
            call.reject("Missing uri");
            return;
        }
        try (InputStream in = openInput(uri);
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            if (in == null) {
                call.reject("Cannot open " + uri);
                return;
            }
            byte[] buf = new byte[64 * 1024];
            int n;
            while ((n = in.read(buf)) != -1) {
                out.write(buf, 0, n);
            }
            JSObject ret = new JSObject();
            ret.put("data", Base64.encodeToString(out.toByteArray(), Base64.NO_WRAP));
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to read PDF: " + e.getMessage(), e);
        }
    }

    private InputStream openInput(String uri) throws Exception {
        if (uri.startsWith("content://")) {
            return getContext().getContentResolver().openInputStream(Uri.parse(uri));
        }
        String path = uri.startsWith("file://") ? uri.substring(7) : uri;
        return new FileInputStream(path);
    }

    /**
     * Shares a PDF through the system share sheet.
     * Accepts { uri } (content:// or path) or { data: base64 } which is
     * written to the app cache and shared via FileProvider.
     */
    @PluginMethod
    public void sharePdf(PluginCall call) {
        String name = call.getString("name", "document.pdf");
        Uri shareUri;
        try {
            String uri = call.getString("uri");
            String data = call.getString("data");
            if (uri != null && uri.startsWith("content://")) {
                shareUri = Uri.parse(uri);
            } else {
                File f;
                if (uri != null) {
                    f = new File(uri.startsWith("file://") ? uri.substring(7) : uri);
                    if (!f.getAbsolutePath().startsWith(getContext().getCacheDir().getAbsolutePath())) {
                        f = copyToCache(f, name);
                    }
                } else if (data != null) {
                    f = cachePdf(data, name);
                } else {
                    call.reject("Missing uri or data");
                    return;
                }
                shareUri = FileProvider.getUriForFile(
                    getContext(), getContext().getPackageName() + ".fileprovider", f);
            }
            Intent send = new Intent(Intent.ACTION_SEND);
            send.setType("application/pdf");
            send.putExtra(Intent.EXTRA_STREAM, shareUri);
            send.putExtra(Intent.EXTRA_SUBJECT, name);
            send.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            getActivity().startActivity(
                Intent.createChooser(send, call.getString("title", name)));
            call.resolve();
        } catch (Exception e) {
            call.reject("Cannot share: " + e.getMessage(), e);
        }
    }

    /**
     * Prints a PDF via the system print service.
     * Accepts { uri } (content:// or path) or { data: base64 }.
     */
    @PluginMethod
    public void printPdf(PluginCall call) {
        String name = call.getString("name", "document.pdf");
        try {
            String uri = call.getString("uri");
            String data = call.getString("data");
            if (uri == null && data == null) {
                call.reject("Missing uri or data");
                return;
            }
            ParcelFileDescriptor pfd;
            if (uri != null && uri.startsWith("content://")) {
                pfd = getContext().getContentResolver()
                    .openFileDescriptor(Uri.parse(uri), "r");
            } else {
                File f = uri != null
                    ? new File(uri.startsWith("file://") ? uri.substring(7) : uri)
                    : cachePdf(data, name);
                pfd = ParcelFileDescriptor.open(f, ParcelFileDescriptor.MODE_READ_ONLY);
            }
            PrintManager pm = (PrintManager) getContext().getSystemService(Context.PRINT_SERVICE);
            pm.print(name, new PdfPrintAdapter(getActivity(), pfd, name), null);
            call.resolve();
        } catch (Exception e) {
            call.reject("Cannot print: " + e.getMessage(), e);
        }
    }

    @PluginMethod
    public void copyText(PluginCall call) {
        String text = call.getString("text");
        if (text == null) {
            call.reject("No text");
            return;
        }
        ClipboardManager cm = (ClipboardManager) getContext().getSystemService(Context.CLIPBOARD_SERVICE);
        cm.setPrimaryClip(ClipData.newPlainText("PDF text", text));
        call.resolve();
    }

    private File cachePdf(String base64, String name) throws IOException {
        File dir = new File(getContext().getCacheDir(), "pdfs");
        dir.mkdirs();
        File f = new File(dir, name.replaceAll("[^\\w.\\-]", "_"));
        try (FileOutputStream out = new FileOutputStream(f)) {
            out.write(Base64.decode(base64, Base64.DEFAULT));
        }
        return f;
    }

    private File copyToCache(File src, String name) throws IOException {
        File dir = new File(getContext().getCacheDir(), "pdfs");
        dir.mkdirs();
        File dst = new File(dir, name.replaceAll("[^\\w.\\-]", "_"));
        try (InputStream in = new FileInputStream(src);
             FileOutputStream out = new FileOutputStream(dst)) {
            byte[] buf = new byte[64 * 1024];
            int n;
            while ((n = in.read(buf)) != -1) out.write(buf, 0, n);
        }
        return dst;
    }

    /** Streams every page of the PDF into the system's print pipeline. */
    private static class PdfPrintAdapter extends PrintDocumentAdapter {
        private final Context ctx;
        private final ParcelFileDescriptor pfd;
        private final PdfRenderer renderer;
        private final int totalPages;
        private final String jobName;
        private PrintAttributes attrs;

        PdfPrintAdapter(Context ctx, ParcelFileDescriptor pfd, String jobName) throws IOException {
            this.ctx = ctx;
            this.pfd = pfd;
            this.jobName = jobName;
            this.renderer = new PdfRenderer(pfd);
            this.totalPages = renderer.getPageCount();
        }

        @Override
        public void onLayout(PrintAttributes oldAttributes, PrintAttributes newAttributes,
                             CancellationSignal cancellationSignal,
                             LayoutResultCallback callback, Bundle extras) {
            this.attrs = newAttributes;
            PrintDocumentInfo info = new PrintDocumentInfo.Builder(jobName)
                .setContentType(PrintDocumentInfo.CONTENT_TYPE_DOCUMENT)
                .setPageCount(totalPages)
                .build();
            callback.onLayoutFinished(info, true);
        }

        @Override
        public void onWrite(PageRange[] ranges, ParcelFileDescriptor destination,
                            CancellationSignal cancellationSignal,
                            WriteResultCallback callback) {
            PrintedPdfDocument doc = new PrintedPdfDocument(ctx, attrs);
            try {
                for (int i = 0; i < totalPages; i++) {
                    if (cancellationSignal.isCanceled()) {
                        callback.onWriteCancelled();
                        return;
                    }
                    PdfRenderer.Page src = renderer.openPage(i);
                    PrintedPdfDocument.Page dst = doc.startPage(i);
                    Rect box = new Rect(0, 0,
                        dst.getInfo().getContentRect().width(),
                        dst.getInfo().getContentRect().height());
                    // render at 3x the content box for sharper text
                    Bitmap bmp = Bitmap.createBitmap(
                        box.width() * 3, box.height() * 3, Bitmap.Config.ARGB_8888);
                    bmp.eraseColor(Color.WHITE);
                    src.render(bmp, null, null, PdfRenderer.Page.RENDER_MODE_FOR_PRINT);
                    Canvas c = dst.getCanvas();
                    c.drawBitmap(bmp, null, box, null);
                    bmp.recycle();
                    src.close();
                    doc.finishPage(dst);
                }
                doc.writeTo(new FileOutputStream(destination.getFileDescriptor()));
                callback.onWriteFinished(new PageRange[]{ PageRange.ALL_PAGES });
            } catch (Exception e) {
                callback.onWriteFailed(e.getMessage());
            } finally {
                doc.close();
            }
        }

        @Override
        public void onFinish() {
            try { renderer.close(); } catch (Exception ignored) {}
            try { pfd.close(); } catch (Exception ignored) {}
        }
    }
}
