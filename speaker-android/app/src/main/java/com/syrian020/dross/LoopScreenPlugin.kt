package com.syrian020.dross

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.media.projection.MediaProjectionManager
import android.net.Uri
import android.os.Build
import android.provider.Settings
import androidx.activity.result.ActivityResult
import androidx.core.content.ContextCompat
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.ActivityCallback
import com.getcapacitor.annotation.CapacitorPlugin

/**
 * Capacitor bridge for the Loop Screen Selection Speaker.
 *
 * JavaScript calls [start] to request the overlay permission, then the screen
 * capture permission, and finally start the foreground service that hosts the
 * overlay and TTS loop.
 */
@CapacitorPlugin(name = "LoopScreenSpeaker")
class LoopScreenPlugin : Plugin() {

    companion object {
        private const val REQUEST_SCREEN_CAPTURE = "screenCaptureResult"
        private const val REQUEST_OVERLAY = "overlayPermissionResult"
    }

    /**
     * Entry point from the web layer.
     *
     * 1. Ensures SYSTEM_ALERT_WINDOW is granted.
     * 2. Launches the MediaProjection screen-capture consent dialog.
     * 3. Starts [LoopScreenSelectionService] with the captured token.
     */
    @PluginMethod
    fun start(call: PluginCall) {
        if (!Settings.canDrawOverlays(context)) {
            // Send the user to system settings to grant "Display over other apps".
            val intent = Intent(
                Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                Uri.parse("package:${context.packageName}")
            )
            startActivityForResult(call, intent, REQUEST_OVERLAY)
            return
        }
        requestScreenCapture(call)
    }

    @PluginMethod
    fun stop(call: PluginCall) {
        val intent = Intent(context, LoopScreenSelectionService::class.java).apply {
            action = LoopScreenSelectionService.ACTION_STOP
        }
        context.startService(intent)
        call.resolve()
    }

    /** Handles the return from the overlay-permission settings screen. */
    @ActivityCallback
    @Suppress("UNUSED_PARAMETER")
    private fun overlayPermissionResult(call: PluginCall, result: ActivityResult) {
        if (Settings.canDrawOverlays(context)) {
            requestScreenCapture(call)
        } else {
            call.reject("SYSTEM_ALERT_WINDOW permission is required for the overlay")
        }
    }

    /** Launches the system screen-capture intent. */
    private fun requestScreenCapture(call: PluginCall) {
        val mediaProjectionManager = context.getSystemService(Context.MEDIA_PROJECTION_SERVICE) as MediaProjectionManager
        val intent = mediaProjectionManager.createScreenCaptureIntent()
        startActivityForResult(call, intent, REQUEST_SCREEN_CAPTURE)
    }

    /** Receives the MediaProjection result and forwards it to the service. */
    @ActivityCallback
    private fun screenCaptureResult(call: PluginCall, result: ActivityResult) {
        if (result.resultCode != Activity.RESULT_OK || result.data == null) {
            call.reject("Screen capture permission was denied or cancelled")
            return
        }

        val lang = call.getString("lang", "en") ?: "en"
        val serviceIntent = Intent(context, LoopScreenSelectionService::class.java).apply {
            action = LoopScreenSelectionService.ACTION_START
            putExtra(LoopScreenSelectionService.EXTRA_RESULT_CODE, result.resultCode)
            putExtra(LoopScreenSelectionService.EXTRA_DATA, result.data)
            putExtra(LoopScreenSelectionService.EXTRA_LANGUAGE, lang)
        }

        ContextCompat.startForegroundService(context, serviceIntent)

        val response = JSObject().apply {
            put("started", true)
        }
        call.resolve(response)
    }
}
