package com.syrian020.maps;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * MapChooser plugin: opens a URL through Android's "Open with" chooser
 * (Intent.createChooser), so the user can pick any installed map app
 * (Google Maps, Citymapper, Waze, ...) every time.
 */
@CapacitorPlugin(name = "MapChooser")
public class MapChooserPlugin extends Plugin {

    @PluginMethod
    public void open(PluginCall call) {
        String url = call.getString("url");
        String title = call.getString("title", "Open with");
        if (url == null || url.isEmpty()) {
            call.reject("missing url");
            return;
        }
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            Intent chooser = Intent.createChooser(intent, title);
            chooser.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(chooser);
            call.resolve(new JSObject());
        } catch (ActivityNotFoundException e) {
            call.reject("no app can handle: " + url, e);
        } catch (Exception e) {
            call.reject("open failed: " + e.getMessage(), e);
        }
    }
}
