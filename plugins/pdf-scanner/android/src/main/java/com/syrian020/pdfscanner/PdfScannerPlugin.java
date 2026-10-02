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
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import android.provider.Settings;
import android.util.Base64;
import android.webkit.WebView;
import android.webkit.WebViewClient;

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

import com.tom_roush.pdfbox.io.MemoryUsageSetting;
import com.tom_roush.pdfbox.multipdf.PDFMergerUtility;
import com.tom_roush.pdfbox.pdmodel.PDDocument;
import com.tom_roush.pdfbox.pdmodel.PDPage;
import com.tom_roush.pdfbox.pdmodel.encryption.AccessPermission;
import com.tom_roush.pdfbox.pdmodel.encryption.InvalidPasswordException;
import com.tom_roush.pdfbox.pdmodel.encryption.StandardProtectionPolicy;
import com.tom_roush.pdfbox.rendering.ImageType;
import com.tom_roush.pdfbox.rendering.PDFRenderer;
import com.tom_roush.pdfbox.android.PDFBoxResourceLoader;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
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

    /**
     * Locks or unlocks a PDF. { uri | data, name, mode: 'lock'|'unlock',
     * password, oldPassword }. Saves the result to public Downloads when
     * all-files access is granted, otherwise to the app cache (shared out
     * by the web layer). Resolves { path, public }.
     */
    @PluginMethod
    public void protectPdf(PluginCall call) {
        String name = call.getString("name", "document.pdf");
        boolean unlock = "unlock".equals(call.getString("mode"));
        String password = call.getString("password", "");
        String oldPassword = call.getString("oldPassword", "");
        try {
            String uri = call.getString("uri");
            String data = call.getString("data");
            PDDocument doc;
            if (uri != null) {
                doc = PDDocument.load(openInput(uri), oldPassword);
            } else if (data != null) {
                doc = PDDocument.load(
                    new ByteArrayInputStream(Base64.decode(data, Base64.DEFAULT)), oldPassword);
            } else {
                call.reject("Missing uri or data");
                return;
            }
            if (unlock) {
                doc.setAllSecurityToBeRemoved(true);
            } else {
                StandardProtectionPolicy spp = new StandardProtectionPolicy(
                    password, password, new AccessPermission());
                spp.setEncryptionKeyLength(256);
                doc.protect(spp);
            }
            String base = name.replaceAll("(?i)\\.pdf$", "");
            String outName = (base + (unlock ? "-unlocked" : "-locked") + ".pdf")
                .replaceAll("[^\\w.\\-\\u0600-\\u06FF]", "_");
            boolean publicDir = Build.VERSION.SDK_INT >= Build.VERSION_CODES.R
                && Environment.isExternalStorageManager();
            File dir = publicDir
                ? Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)
                : new File(getContext().getCacheDir(), "pdfs");
            dir.mkdirs();
            File out = new File(dir, outName);
            doc.save(out);
            doc.close();
            JSObject ret = new JSObject();
            ret.put("path", out.getAbsolutePath());
            ret.put("name", outName);
            ret.put("public", publicDir);
            call.resolve(ret);
        } catch (InvalidPasswordException e) {
            call.reject("wrong-password");
        } catch (Exception e) {
            call.reject("Protect failed: " + e.getMessage(), e);
        }
    }

    /**
     * Prints arbitrary HTML through the system print framework — the user
     * picks a printer or "Save as PDF". Used by the PDF composer.
     */
    @PluginMethod
    public void printHtml(PluginCall call) {
        String html = call.getString("html");
        String name = call.getString("name", "document");
        if (html == null) {
            call.reject("Missing html");
            return;
        }
        getActivity().runOnUiThread(() -> {
            try {
                WebView wv = new WebView(getContext());
                wv.setWebViewClient(new WebViewClient() {
                    @Override
                    public void onPageFinished(WebView view, String url) {
                        PrintManager pm = (PrintManager) getContext().getSystemService(Context.PRINT_SERVICE);
                        pm.print(name, view.createPrintDocumentAdapter(name), null);
                        call.resolve();
                    }
                });
                wv.loadDataWithBaseURL(null, html, "text/html", "utf-8", null);
            } catch (Exception e) {
                call.reject("Print failed: " + e.getMessage(), e);
            }
        });
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

    /** Renames a PDF in place. { uri, newName } -> { uri, path?, name }. */
    @PluginMethod
    public void renameFile(PluginCall call) {
        String uri = call.getString("uri");
        String newName = call.getString("newName", "").trim();
        if (uri == null || newName.isEmpty()) {
            call.reject("Missing uri/newName");
            return;
        }
        if (!newName.toLowerCase().endsWith(".pdf")) newName += ".pdf";
        try {
            JSObject ret = new JSObject();
            if (uri.startsWith("content://")) {
                Uri out = DocumentsContract.renameDocument(
                    getContext().getContentResolver(), Uri.parse(uri), newName);
                ret.put("uri", out != null ? out.toString() : uri);
            } else {
                File f = new File(uri.startsWith("file://") ? uri.substring(7) : uri);
                File dst = new File(f.getParentFile(), newName);
                if (!f.renameTo(dst)) {
                    call.reject("Rename failed");
                    return;
                }
                ret.put("uri", "file://" + dst.getAbsolutePath());
                ret.put("path", dst.getAbsolutePath());
            }
            ret.put("name", newName);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Rename failed: " + e.getMessage(), e);
        }
    }

    /** Deletes a PDF. { uri }. */
    @PluginMethod
    public void deleteFile(PluginCall call) {
        String uri = call.getString("uri");
        if (uri == null) {
            call.reject("Missing uri");
            return;
        }
        try {
            boolean ok;
            if (uri.startsWith("content://")) {
                ok = getContext().getContentResolver().delete(Uri.parse(uri), null, null) > 0;
            } else {
                ok = new File(uri.startsWith("file://") ? uri.substring(7) : uri).delete();
            }
            if (!ok) {
                call.reject("Delete failed");
                return;
            }
            call.resolve();
        } catch (Exception e) {
            call.reject("Delete failed: " + e.getMessage(), e);
        }
    }

    /**
     * Merges several PDFs into one. { uris: [..] and/or data: [base64..],
     * name }. Saves to public Downloads when possible; resolves
     * { path, name, public, count }.
     */
    @PluginMethod
    public void mergePdfs(PluginCall call) {
        String name = call.getString("name", "merged.pdf");
        if (!name.toLowerCase().endsWith(".pdf")) name += ".pdf";
        try {
            List<InputStream> sources = new ArrayList<>();
            JSArray uris = call.getArray("uris");
            if (uris != null) {
                for (int i = 0; i < uris.length(); i++) {
                    InputStream in = openInput(uris.getString(i));
                    if (in != null) sources.add(in);
                }
            }
            JSArray datas = call.getArray("data");
            if (datas != null) {
                for (int i = 0; i < datas.length(); i++) {
                    sources.add(new ByteArrayInputStream(
                        Base64.decode(datas.getString(i), Base64.DEFAULT)));
                }
            }
            if (sources.size() < 2) {
                call.reject("need-2-files");
                return;
            }
            File out = outFile(name, "-merged");
            PDFMergerUtility mu = new PDFMergerUtility();
            for (InputStream in : sources) mu.addSource(in);
            mu.setDestinationFileName(out.getAbsolutePath());
            mu.mergeDocuments(MemoryUsageSetting.setupMainMemoryOnly());
            for (InputStream in : sources) {
                try { in.close(); } catch (Exception e) {}
            }
            JSObject ret = new JSObject();
            ret.put("path", out.getAbsolutePath());
            ret.put("name", out.getName());
            ret.put("public", isPublicDir());
            ret.put("count", sources.size());
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Merge failed: " + e.getMessage(), e);
        }
    }

    /**
     * Page surgery on a PDF. { uri|data, name, password,
     * mode: 'extract'|'delete'|'rotate', pages: "1-3,5", degrees }.
     * extract keeps only the listed pages in a new file; delete removes
     * them; rotate adds `degrees` to their rotation. Resolves
     * { path, name, public }.
     */
    @PluginMethod
    public void editPdf(PluginCall call) {
        String name = call.getString("name", "document.pdf");
        String mode = call.getString("mode", "extract");
        String spec = call.getString("pages", "");
        int degrees = call.getInt("degrees", 90);
        String password = call.getString("password", "");
        try {
            PDDocument doc = loadDoc(call, password);
            if (doc == null) {
                call.reject("Missing uri or data");
                return;
            }
            int total = doc.getNumberOfPages();
            Set<Integer> sel = parsePageSpec(spec, total);
            if (sel.isEmpty()) {
                doc.close();
                call.reject("bad-pages");
                return;
            }
            String suffix;
            PDDocument src = null;
            if ("delete".equals(mode)) {
                for (int i = total - 1; i >= 0; i--) {
                    if (sel.contains(i + 1)) doc.removePage(i);
                }
                suffix = "-trimmed";
            } else if ("rotate".equals(mode)) {
                for (int p : sel) {
                    PDPage pg = doc.getPage(p - 1);
                    pg.setRotation((pg.getRotation() + degrees) % 360);
                }
                suffix = "-rotated";
            } else {
                src = doc;
                doc = new PDDocument();
                for (int i = 0; i < total; i++) {
                    if (sel.contains(i + 1)) doc.importPage(src.getPage(i));
                }
                suffix = "-pages";
            }
            File out = outFile(name, suffix);
            doc.save(out);
            doc.close();
            if (src != null) src.close();
            JSObject ret = new JSObject();
            ret.put("path", out.getAbsolutePath());
            ret.put("name", out.getName());
            ret.put("public", isPublicDir());
            call.resolve(ret);
        } catch (InvalidPasswordException e) {
            call.reject("wrong-password");
        } catch (Exception e) {
            call.reject("Edit failed: " + e.getMessage(), e);
        }
    }

    /**
     * Renders every page to a PNG image. { uri|data, name, password, dpi }.
     * Saves to Pictures/QariPDF when possible; resolves { count, dir,
     * public }.
     */
    @PluginMethod
    public void pdfToImages(PluginCall call) {
        String name = call.getString("name", "document.pdf");
        String password = call.getString("password", "");
        int dpi = call.getInt("dpi", 150);
        try {
            PDFBoxResourceLoader.init(getContext());
            PDDocument doc = loadDoc(call, password);
            if (doc == null) {
                call.reject("Missing uri or data");
                return;
            }
            String base = name.replaceAll("(?i)\\.pdf$", "")
                .replaceAll("[^\\w.\\-\\u0600-\\u06FF]", "_");
            File dir;
            if (isPublicDir()) {
                dir = new File(Environment.getExternalStoragePublicDirectory(
                    Environment.DIRECTORY_PICTURES), "QariPDF");
            } else {
                dir = new File(getContext().getCacheDir(), "imgs");
            }
            dir.mkdirs();
            PDFRenderer renderer = new PDFRenderer(doc);
            int count = doc.getNumberOfPages();
            for (int i = 0; i < count; i++) {
                Bitmap bmp = renderer.renderImageWithDPI(i, dpi, ImageType.RGB);
                File f = new File(dir, base + "-p" + (i + 1) + ".png");
                try (FileOutputStream fos = new FileOutputStream(f)) {
                    bmp.compress(Bitmap.CompressFormat.PNG, 100, fos);
                }
                bmp.recycle();
            }
            doc.close();
            JSObject ret = new JSObject();
            ret.put("count", count);
            ret.put("dir", dir.getAbsolutePath());
            ret.put("public", isPublicDir());
            call.resolve(ret);
        } catch (InvalidPasswordException e) {
            call.reject("wrong-password");
        } catch (Exception e) {
            call.reject("Render failed: " + e.getMessage(), e);
        }
    }

    private PDDocument loadDoc(PluginCall call, String password) throws Exception {
        String uri = call.getString("uri");
        String data = call.getString("data");
        if (uri != null) return PDDocument.load(openInput(uri), password);
        if (data != null) {
            return PDDocument.load(
                new ByteArrayInputStream(Base64.decode(data, Base64.DEFAULT)), password);
        }
        return null;
    }

    private boolean isPublicDir() {
        return Build.VERSION.SDK_INT >= Build.VERSION_CODES.R
            && Environment.isExternalStorageManager();
    }

    private File outFile(String name, String suffix) {
        String base = name.replaceAll("(?i)\\.pdf$", "");
        String outName = (base + suffix + ".pdf")
            .replaceAll("[^\\w.\\-\\u0600-\\u06FF]", "_");
        File dir = isPublicDir()
            ? Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)
            : new File(getContext().getCacheDir(), "pdfs");
        dir.mkdirs();
        return new File(dir, outName);
    }

    private static Set<Integer> parsePageSpec(String spec, int total) {
        Set<Integer> out = new HashSet<>();
        for (String part : spec.split(",")) {
            part = part.trim();
            if (part.isEmpty()) continue;
            try {
                if (part.contains("-")) {
                    String[] ab = part.split("-", 2);
                    int a = Integer.parseInt(ab[0].trim());
                    int b = Integer.parseInt(ab[1].trim());
                    for (int i = Math.max(1, a); i <= Math.min(total, b); i++) out.add(i);
                } else {
                    int p = Integer.parseInt(part);
                    if (p >= 1 && p <= total) out.add(p);
                }
            } catch (NumberFormatException e) {}
        }
        return out;
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
