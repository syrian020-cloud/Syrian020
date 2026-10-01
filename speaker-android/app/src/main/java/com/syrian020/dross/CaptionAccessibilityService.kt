package com.syrian020.dross

import android.accessibilityservice.AccessibilityService
import android.accessibilityservice.GestureDescription
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.graphics.Path
import android.os.Build
import android.os.Handler
import android.os.Looper
import android.view.accessibility.AccessibilityEvent

/**
 * Accessibility service that receives broadcast requests from [LoopScreenSelectionService]
 * and performs tap gestures on the screen. This is needed because video apps such as
 * TikTok do not respond to standard media button events, so the only reliable way to
 * play/pause them is to tap the screen.
 *
 * The user must enable this service in Settings > Accessibility for the feature to work.
 */
class CaptionAccessibilityService : AccessibilityService() {

    companion object {
        const val ACTION_TAP = "com.syrian020.dross.ACCESSIBILITY_TAP"
        const val EXTRA_X = "x"
        const val EXTRA_Y = "y"
    }

    private val uiHandler = Handler(Looper.getMainLooper())

    private val tapReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            if (intent?.action != ACTION_TAP) return
            val x = intent.getFloatExtra(EXTRA_X, 0f)
            val y = intent.getFloatExtra(EXTRA_Y, 0f)
            if (x > 0 && y > 0) {
                performTap(x, y)
            }
        }
    }

    override fun onServiceConnected() {
        super.onServiceConnected()
        val filter = IntentFilter(ACTION_TAP)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            registerReceiver(tapReceiver, filter, RECEIVER_NOT_EXPORTED)
        } else {
            @Suppress("UnspecifiedRegisterReceiverFlag")
            registerReceiver(tapReceiver, filter)
        }
    }

    override fun onAccessibilityEvent(event: AccessibilityEvent?) {
        // No UI automation needed; gestures are triggered by broadcasts.
    }

    override fun onInterrupt() {}

    override fun onDestroy() {
        super.onDestroy()
        try {
            unregisterReceiver(tapReceiver)
        } catch (_: IllegalArgumentException) {
            // Not registered.
        }
    }

    private fun performTap(x: Float, y: Float) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.N) return
        val path = Path().apply { moveTo(x, y) }
        val stroke = GestureDescription.StrokeDescription(path, 0, 80)
        val gesture = GestureDescription.Builder().addStroke(stroke).build()
        dispatchGesture(gesture, null, null)
    }
}
