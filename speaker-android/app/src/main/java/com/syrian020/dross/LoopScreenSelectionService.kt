package com.syrian020.dross

import android.app.Activity
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Context
import android.content.Intent
import android.graphics.Bitmap
import android.graphics.PixelFormat
import android.graphics.Rect
import android.hardware.display.DisplayManager
import android.hardware.display.VirtualDisplay
import android.media.AudioManager
import android.media.Image
import android.media.ImageReader
import android.media.projection.MediaProjection
import android.media.projection.MediaProjectionManager
import android.content.pm.ServiceInfo
import android.os.*
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import android.util.DisplayMetrics
import android.view.Gravity
import android.view.KeyEvent
import android.view.View
import android.view.WindowManager
import android.widget.Toast
import androidx.core.app.NotificationCompat
import androidx.core.content.ContextCompat
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.text.TextRecognition
import com.google.mlkit.vision.text.latin.TextRecognizerOptions
import java.util.*

/**
 * Foreground Service that hosts the overlay, captures the screen with [MediaProjection],
 * runs ML Kit OCR on the selected region, and speaks the result in a looping TTS session.
 */
class LoopScreenSelectionService : Service() {

    companion object {
        const val ACTION_START = "com.syrian020.dross.ACTION_START"
        const val ACTION_STOP = "com.syrian020.dross.ACTION_STOP"
        const val ACTION_NEXT = "com.syrian020.dross.ACTION_NEXT"
        const val EXTRA_RESULT_CODE = "resultCode"
        const val EXTRA_DATA = "data"
        const val EXTRA_LANGUAGE = "lang"
        const val NOTIFICATION_ID = 1001
        const val CHANNEL_ID = "loop_screen_speaker"
        const val UTTERANCE_ID = "loop_utterance"

        private const val CAPTION_POLL_INTERVAL_MS = 300L
        private const val CAPTION_STABLE_THRESHOLD = 2
    }

    private var mediaProjection: MediaProjection? = null
    private var virtualDisplay: VirtualDisplay? = null
    private var imageReader: ImageReader? = null

    private var tts: TextToSpeech? = null

    private var windowManager: WindowManager? = null
    private var bubble: FloatingBubble? = null
    private var resultCardView: ResultCardView? = null

    private var handlerThread: HandlerThread? = null
    private var backgroundHandler: Handler? = null
    private val mainHandler = Handler(Looper.getMainLooper())

    private var screenWidth = 0
    private var screenHeight = 0
    private var screenDensity = 0

    @Volatile
    private var isLooping = false
    private var autoLoop = true
    private var lastSpokenText = ""
    private var lastSelectionRect: android.graphics.Rect? = null
    private var currentLang = "en"
    private var isProcessing = false

    @Volatile
    private var isMonitoringCaptions = false
    private var captionPollRunnable: CaptionPollRunnable? = null
    private var captionStableCount = 0
    private var currentCaptionText = ""

    override fun onBind(intent: Intent?) = null

    override fun onCreate() {
        super.onCreate()
        windowManager = getSystemService(Context.WINDOW_SERVICE) as WindowManager
        handlerThread = HandlerThread("LoopScreenCapture").apply { start() }
        backgroundHandler = Handler(handlerThread!!.looper)
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        when (intent?.action) {
            ACTION_STOP -> {
                stopSelf()
                return START_NOT_STICKY
            }
            ACTION_NEXT -> {
                readNext()
                return START_NOT_STICKY
            }
        }

        val resultCode = intent?.getIntExtra(EXTRA_RESULT_CODE, Activity.RESULT_CANCELED)
            ?: Activity.RESULT_CANCELED
        val data = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            intent?.getParcelableExtra(EXTRA_DATA, Intent::class.java)
        } else {
            @Suppress("DEPRECATION")
            intent?.getParcelableExtra(EXTRA_DATA)
        }

        if (resultCode != Activity.RESULT_OK || data == null) {
            stopSelf()
            return START_NOT_STICKY
        }

        currentLang = intent?.getStringExtra(EXTRA_LANGUAGE) ?: Locale.getDefault().language

        createNotificationChannel()
        startForegroundWithProjection()
        initMediaProjection(resultCode, data)
        initTts(currentLang)
        showOverlay()

        return START_NOT_STICKY
    }

    private fun startForegroundWithProjection() {
        updateNotification(
            title = "Loop Screen Speaker",
            text = "Drag the bubble, select the caption area, then tap READ or use notification Next."
        )
    }

    private fun updateNotification(title: String, text: String, showNext: Boolean = true) {
        val nextIntent = Intent(this, LoopScreenSelectionService::class.java).apply {
            action = ACTION_NEXT
        }
        val nextPendingIntent = PendingIntent.getService(
            this,
            1,
            nextIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val closeIntent = Intent(this, LoopScreenSelectionService::class.java).apply {
            action = ACTION_STOP
        }
        val closePendingIntent = PendingIntent.getService(
            this,
            0,
            closeIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val builder = NotificationCompat.Builder(this, CHANNEL_ID)
            .setContentTitle(title)
            .setContentText(text)
            .setSmallIcon(android.R.drawable.ic_media_play)
            .setOngoing(true)
            .setSilent(true)
        if (showNext) {
            builder.addAction(0, "Next", nextPendingIntent)
        }
        builder.addAction(0, "Close", closePendingIntent)

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            startForeground(
                NOTIFICATION_ID,
                builder.build(),
                ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PROJECTION
            )
        } else {
            startForeground(NOTIFICATION_ID, builder.build())
        }
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            val channel = NotificationChannel(
                CHANNEL_ID,
                "Loop Screen Speaker",
                NotificationManager.IMPORTANCE_LOW
            ).apply {
                description = "Foreground service for screen capture and TTS"
            }
            notificationManager.createNotificationChannel(channel)
        }
    }

    private fun initMediaProjection(resultCode: Int, data: Intent) {
        val mediaProjectionManager = getSystemService(Context.MEDIA_PROJECTION_SERVICE) as MediaProjectionManager
        mediaProjection = mediaProjectionManager.getMediaProjection(resultCode, data)

        // Clean up automatically if Android revokes the projection.
        mediaProjection?.registerCallback(object : MediaProjection.Callback() {
            override fun onStop() {
                super.onStop()
                stopSelf()
            }
        }, backgroundHandler)

        val metrics = DisplayMetrics()
        windowManager?.defaultDisplay?.getRealMetrics(metrics)
        screenDensity = metrics.densityDpi
        screenWidth = metrics.widthPixels
        screenHeight = metrics.heightPixels

        imageReader = ImageReader.newInstance(
            screenWidth,
            screenHeight,
            PixelFormat.RGBA_8888,
            2
        )

        virtualDisplay = mediaProjection?.createVirtualDisplay(
            "LoopScreenCapture",
            screenWidth,
            screenHeight,
            screenDensity,
            DisplayManager.VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR,
            imageReader?.surface,
            null,
            backgroundHandler
        )
    }

    private fun localeForCode(code: String): Locale {
        return when (code.lowercase(Locale.ROOT)) {
            "ar" -> Locale("ar")
            "en" -> Locale.ENGLISH
            "fr" -> Locale.FRENCH
            else -> Locale.getDefault()
        }
    }

    private fun initTts(langCode: String) {
        currentLang = langCode
        tts = TextToSpeech(this) { status ->
            if (status != TextToSpeech.SUCCESS) {
                toast("Text-to-Speech failed to initialize")
                return@TextToSpeech
            }
            setTtsLanguage(langCode)
            tts?.setOnUtteranceProgressListener(object : UtteranceProgressListener() {
                override fun onStart(utteranceId: String?) {}

                override fun onDone(utteranceId: String?) {
                    // In auto-loop mode repeat the same text; in single-read mode stop after one phrase.
                    if (isLooping && lastSpokenText.isNotBlank()) {
                        if (autoLoop) {
                            mainHandler.post { speak(lastSpokenText) }
                        } else {
                            mainHandler.post { stopLoop() }
                        }
                    }
                }

                @Deprecated("Deprecated in Java")
                override fun onError(utteranceId: String?) {}

                override fun onError(utteranceId: String?, errorCode: Int) {}
            })
        }
    }

    private fun setTtsLanguage(langCode: String) {
        currentLang = langCode
        tts?.let { engine ->
            val locale = localeForCode(langCode)
            val result = engine.setLanguage(locale)
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                toast("TTS language not supported: $locale")
            }
        }
    }

    private fun showOverlay() {
        // Small draggable bubble window; preview rectangle is drawn inside the bubble window itself.
        bubble = FloatingBubble(this).apply {
            setListener(object : FloatingBubble.Listener {
                override fun onSelectionRectChanged(mode: FloatingBubble.Mode, rect: android.graphics.Rect?) {
                    // Keep the last selected area so notification "Next" can re-capture it.
                    if (rect != null) lastSelectionRect = rect
                }

                override fun onProcessSelection(rect: android.graphics.Rect) {
                    if (isLooping) {
                        stopLoop()
                    }
                    stopCaptionMonitoring()
                    lastSelectionRect = rect
                    // A single tap on the bubble reads the current caption once and shows the card.
                    processSelection(rect, autoLoop = false, showCard = true)
                }

                override fun onStopTapped() {
                    stopSelf()
                }
            })
        }

        // Place the selection anchor at the top-left of the screen.
        val metrics = DisplayMetrics()
        windowManager?.defaultDisplay?.getRealMetrics(metrics)
        bubble?.setPosition(0, (metrics.heightPixels * 0.25).toInt())
        bubble?.let { windowManager?.addView(it, it.getWindowLayoutParams()) }
    }

    private fun readNext() {
        if (isProcessing) {
            toast("Please wait for the current capture to finish")
            return
        }
        val rect = lastSelectionRect ?: bubble?.getSelectionRect()
        if (rect == null || rect.width() <= 0 || rect.height() <= 0) {
            toast("Please select a caption area first")
            return
        }

        // If already monitoring, the user wants to stop at the current caption.
        if (isMonitoringCaptions) {
            stopCaptionMonitoring()
            if (isMediaPlaying()) {
                tapToControlVideo { processSelection(rect, autoLoop = false, showCard = true) }
            } else {
                processSelection(rect, autoLoop = false, showCard = true)
            }
            return
        }

        if (isLooping) stopLoop()

        // If we have not read anything yet, capture the current caption as a baseline,
        // then start the video and watch for a *different* caption.
        if (lastSpokenText.isBlank()) {
            isProcessing = true
            captureCaption(rect) { baseline ->
                isProcessing = false
                lastSpokenText = baseline
                if (!isMediaPlaying()) {
                    tapToControlVideo { startCaptionMonitoring(rect) }
                } else {
                    startCaptionMonitoring(rect)
                }
            }
            return
        }

        // Make sure the video is playing, then watch for the next caption change.
        if (!isMediaPlaying()) {
            tapToControlVideo { startCaptionMonitoring(rect) }
        } else {
            startCaptionMonitoring(rect)
        }
    }

    /** Returns true if the device is currently outputting media audio. */
    private fun isMediaPlaying(): Boolean {
        return try {
            val audioManager = getSystemService(Context.AUDIO_SERVICE) as AudioManager
            audioManager.isMusicActive
        } catch (_: Exception) {
            false
        }
    }

    /** Returns true if the accessibility service is enabled in system settings. */
    private fun isAccessibilityServiceEnabled(): Boolean {
        return try {
            val am = getSystemService(Context.ACCESSIBILITY_SERVICE) as android.view.accessibility.AccessibilityManager
            val enabledServices = am.getEnabledAccessibilityServiceList(android.accessibilityservice.AccessibilityServiceInfo.FEEDBACK_ALL_MASK)
            enabledServices.any {
                it.resolveInfo.serviceInfo.packageName == packageName &&
                    it.resolveInfo.serviceInfo.name == "$packageName.CaptionAccessibilityService"
            }
        } catch (_: Exception) {
            false
        }
    }

    /**
     * Pause/resume the video player by performing a tap at the center of the screen.
     * This is the only reliable way to control apps such as TikTok. If the accessibility
     * service is not enabled, we fall back to sending a media key event.
     *
     * The overlay is hidden during the tap and restored via [onComplete].
     */
    private fun tapToControlVideo(onComplete: (() -> Unit)? = null) {
        if (!isAccessibilityServiceEnabled()) {
            toggleMediaPlayback()
            onComplete?.invoke()
            return
        }
        val metrics = DisplayMetrics()
        windowManager?.defaultDisplay?.getRealMetrics(metrics)
        val x = metrics.widthPixels / 2f
        val y = metrics.heightPixels / 2f
        // Hide the overlay so the tap does not hit our own bubble/card.
        hideOverlay()
        sendAccessibilityTap(x, y)
        mainHandler.postDelayed({
            restoreOverlay()
            onComplete?.invoke()
        }, 350)
    }

    private fun sendAccessibilityTap(x: Float, y: Float) {
        val intent = Intent(CaptionAccessibilityService.ACTION_TAP).apply {
            setClass(applicationContext, CaptionAccessibilityService::class.java)
            putExtra(CaptionAccessibilityService.EXTRA_X, x)
            putExtra(CaptionAccessibilityService.EXTRA_Y, y)
        }
        sendBroadcast(intent)
    }

    /** Send a media play/pause key event to the currently playing media app. */
    private fun toggleMediaPlayback() {
        try {
            val audioManager = getSystemService(Context.AUDIO_SERVICE) as AudioManager
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                val down = KeyEvent(KeyEvent.ACTION_DOWN, KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE)
                val up = KeyEvent(KeyEvent.ACTION_UP, KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE)
                audioManager.dispatchMediaKeyEvent(down)
                audioManager.dispatchMediaKeyEvent(up)
            }
        } catch (_: Exception) {
            // Some devices or apps block simulated media key events.
        }
    }

    private fun stopCaptionMonitoring() {
        isMonitoringCaptions = false
        captionPollRunnable?.let { backgroundHandler?.removeCallbacks(it) }
        captionPollRunnable = null
    }

    private fun startCaptionMonitoring(rect: android.graphics.Rect) {
        stopCaptionMonitoring()
        isMonitoringCaptions = true
        captionStableCount = 0
        currentCaptionText = ""
        updateNotification(
            title = "Watching next caption",
            text = "When a new caption appears the video will pause and be read."
        )
        val runnable = CaptionPollRunnable(rect)
        captionPollRunnable = runnable
        backgroundHandler?.postDelayed(runnable, CAPTION_POLL_INTERVAL_MS)
    }

    /**
     * Lightweight capture + OCR that returns the recognized text via callback.
     * @param restoreOverlay whether to show the bubble/preview/result card after capture.
     */
    private fun captureCaption(
        rect: android.graphics.Rect,
        restoreOverlay: Boolean = true,
        onText: (String) -> Unit
    ) {
        mainHandler.post { hideOverlay() }
        backgroundHandler?.postDelayed({
            val image = imageReader?.acquireLatestImage()
            if (restoreOverlay) {
                mainHandler.post { restoreOverlay() }
            }
            if (image == null) {
                onText("")
                return@postDelayed
            }
            val fullBitmap = imageToBitmap(image)
            image.close()
            if (fullBitmap == null) {
                onText("")
                return@postDelayed
            }
            // Clamp the requested region to the actual captured bitmap.
            val clamped = Rect(
                rect.left.coerceAtLeast(0),
                rect.top.coerceAtLeast(0),
                rect.right.coerceAtMost(fullBitmap.width),
                rect.bottom.coerceAtMost(fullBitmap.height)
            )
            if (clamped.width() <= 0 || clamped.height() <= 0) {
                onText("")
                return@postDelayed
            }
            val cropped = Bitmap.createBitmap(
                fullBitmap,
                clamped.left,
                clamped.top,
                clamped.width(),
                clamped.height()
            )
            val inputImage = InputImage.fromBitmap(cropped, 0)
            val recognizer = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)
            recognizer.process(inputImage)
                .addOnSuccessListener { onText(normalizeText(extractText(it))) }
                .addOnFailureListener { onText("") }
        }, 200)
    }

    /** Polls the caption area while the video plays and pauses when a new caption is stable. */
    private inner class CaptionPollRunnable(private val rect: android.graphics.Rect) : Runnable {
        override fun run() {
            if (!isMonitoringCaptions) return
            captureCaption(rect) { text ->
                if (!isMonitoringCaptions) return@captureCaption
                if (text.isBlank()) {
                    scheduleNext()
                    return@captureCaption
                }
                if (text == currentCaptionText) {
                    captionStableCount++
                } else {
                    currentCaptionText = text
                    captionStableCount = 1
                }
                // Wait for the caption to be stable for a few polls and be different from the last spoken one.
                if (captionStableCount >= CAPTION_STABLE_THRESHOLD && currentCaptionText != lastSpokenText) {
                    isMonitoringCaptions = false
                    captionPollRunnable = null
                    // Pause the video and then read/show the new caption.
                    if (isMediaPlaying()) {
                        tapToControlVideo { startLoop(currentCaptionText, autoLoop = false, showCard = true) }
                    } else {
                        startLoop(currentCaptionText, autoLoop = false, showCard = true)
                    }
                    return@captureCaption
                }
                scheduleNext()
            }
        }

        private fun scheduleNext() {
            if (isMonitoringCaptions) {
                backgroundHandler?.postDelayed(this, CAPTION_POLL_INTERVAL_MS)
            }
        }
    }

    private fun hideOverlay() {
        bubble?.setVisible(false)
        bubble?.setSelectionVisible(false)
        resultCardView?.visibility = View.GONE
    }

    private fun restoreOverlay() {
        bubble?.setVisible(true)
        bubble?.setSelectionVisible(true)
        resultCardView?.visibility = View.VISIBLE
    }

    /** Hide only the selection preview/result card; keep the bubble visible for capture. */
    private fun hideSelectionForCapture() {
        bubble?.setSelectionVisible(false)
        resultCardView?.visibility = View.GONE
    }

    private fun restoreSelectionAfterCapture() {
        bubble?.setSelectionVisible(true)
        resultCardView?.visibility = View.VISIBLE
    }

    private fun showResultCard(text: String) {
        if (resultCardView == null) {
            resultCardView = ResultCardView(this).apply {
                setListener(object : ResultCardView.Listener {
                    override fun onReadStopClicked() {
                        if (isLooping) {
                            stopLoop()
                        } else if (lastSpokenText.isNotBlank()) {
                            startLoop(lastSpokenText, autoLoop = true)
                        }
                    }

                    override fun onNextClicked() {
                        readNext()
                    }

                    override fun onCloseClicked() {
                        stopLoop()
                        hideResultCard()
                    }

                    override fun onLanguageChanged(lang: String) {
                        setTtsLanguage(lang)
                        if (isLooping && lastSpokenText.isNotBlank()) {
                            // Restart the loop in the new language.
                            stopLoop()
                            startLoop(lastSpokenText, autoLoop)
                        }
                    }
                })
            }

            val cardWidth = (360 * resources.displayMetrics.density).toInt()
            val cardParams = WindowManager.LayoutParams(
                cardWidth,
                WindowManager.LayoutParams.WRAP_CONTENT,
                WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY,
                WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE or
                    WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL,
                PixelFormat.TRANSLUCENT
            ).apply {
                gravity = Gravity.CENTER
            }

            windowManager?.addView(resultCardView, cardParams)
        }
        resultCardView?.setLanguage(currentLang)
        resultCardView?.setRecognizedText(text)
        resultCardView?.setReading(isLooping)
    }

    private fun hideResultCard() {
        resultCardView?.let { card ->
            try {
                windowManager?.removeView(card)
            } catch (_: IllegalArgumentException) {
                // Already removed.
            }
        }
        resultCardView = null
        // Keep the selection preview visible so the user can continue reading captions.
        bubble?.setMode(FloatingBubble.Mode.SELECT)
    }

    /**
     * Capture the screen, crop to the given rectangle, and run OCR.
     * The overlay (bubble, preview, result card) is hidden before capture so nothing
     * from our own UI appears in the OCR result.
     */
    private fun processSelection(rect: android.graphics.Rect?, autoLoop: Boolean = true, showCard: Boolean = true) {
        if (isProcessing) {
            toast("Please wait for the current capture to finish")
            return
        }
        if (rect == null || rect.width() <= 0 || rect.height() <= 0) {
            toast("Please select a valid area")
            return
        }

        isProcessing = true
        mainHandler.post { hideOverlay() }

        // Wait long enough for the display to render a clean frame without the overlay, then capture.
        backgroundHandler?.postDelayed({
            captureAndProcess(rect, autoLoop, showCard)
        }, 300)
    }

    private fun captureAndProcess(rect: android.graphics.Rect, autoLoop: Boolean, showCard: Boolean) {
        val image = imageReader?.acquireLatestImage()
        // Bring the overlay back as soon as the frame is acquired.
        mainHandler.post { restoreOverlay() }

        if (image == null) {
            isProcessing = false
            toast("Could not capture the screen")
            return
        }

        val fullBitmap = imageToBitmap(image)
        image.close()

        if (fullBitmap == null) {
            isProcessing = false
            toast("Screen capture failed")
            return
        }

        // Clamp the selection to the actual captured bitmap bounds.
        val clamped = Rect(
            rect.left.coerceAtLeast(0),
            rect.top.coerceAtLeast(0),
            rect.right.coerceAtMost(fullBitmap.width),
            rect.bottom.coerceAtMost(fullBitmap.height)
        )
        if (clamped.width() <= 0 || clamped.height() <= 0) {
            isProcessing = false
            toast("Selection is outside the captured screen area")
            return
        }

        val cropped = Bitmap.createBitmap(
            fullBitmap,
            clamped.left,
            clamped.top,
            clamped.width(),
            clamped.height()
        )
        mainHandler.post { runOcr(cropped, autoLoop, showCard) }
    }

    /**
     * Convert the [Image] returned by [ImageReader] into a regular [Bitmap].
     * Reads the RGBA_8888 plane pixel-by-pixel while respecting [Image.getCropRect]
     * and handling row padding, and forces the result to be opaque ARGB.
     */
    private fun imageToBitmap(image: Image): Bitmap? {
        return try {
            val plane = image.planes[0]
            val buffer = plane.buffer
            val pixelStride = plane.pixelStride
            val rowStride = plane.rowStride

            val fullWidth = image.width
            val fullHeight = image.height
            val crop = image.cropRect ?: Rect(0, 0, fullWidth, fullHeight)
            val cropWidth = crop.width()
            val cropHeight = crop.height()
            val cropLeft = crop.left
            val cropTop = crop.top

            // Build a full-screen-sized bitmap so screen coordinates can be used
            // directly when cropping to the selection rectangle.
            val pixels = IntArray(fullWidth * fullHeight)
            val rowBytes = ByteArray(cropWidth * pixelStride)

            for (y in 0 until cropHeight) {
                val rowOffset = (cropTop + y) * rowStride + cropLeft * pixelStride
                buffer.position(rowOffset)
                buffer.get(rowBytes)
                for (x in 0 until cropWidth) {
                    val i = x * pixelStride
                    val r = rowBytes[i].toInt() and 0xFF
                    val g = rowBytes[i + 1].toInt() and 0xFF
                    val b = rowBytes[i + 2].toInt() and 0xFF
                    // Screen capture is always opaque; ignore the alpha/X byte to avoid
                    // transparent bitmaps on devices that return RGBX_8888.
                    pixels[(cropTop + y) * fullWidth + (cropLeft + x)] =
                        (0xFF shl 24) or (r shl 16) or (g shl 8) or b
                }
            }

            val bitmap = Bitmap.createBitmap(fullWidth, fullHeight, Bitmap.Config.ARGB_8888)
            bitmap.setPixels(pixels, 0, fullWidth, 0, 0, fullWidth, fullHeight)
            bitmap
        } catch (e: Exception) {
            null
        }
    }

    private fun normalizeText(text: String): String {
        return text
            .replace(Regex("\\s+"), " ")
            .trim()
            .lowercase()
    }

    private fun runOcr(bitmap: Bitmap, autoLoop: Boolean = true, showCard: Boolean = true) {
        val inputImage = InputImage.fromBitmap(bitmap, 0)
        val recognizer = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)

        recognizer.process(inputImage)
            .addOnSuccessListener { visionText ->
                isProcessing = false
                val text = normalizeText(extractText(visionText))
                if (text.isBlank()) {
                    toast("No text detected in the selection")
                } else {
                    if (showCard) showResultCard(text)
                    startLoop(text, autoLoop)
                }
            }
            .addOnFailureListener { exception ->
                isProcessing = false
                toast("OCR error: ${exception.message}")
            }
    }

    /**
     * Extract text from the OCR result, preferring blocks whose recognized
     * language matches the currently selected language. This helps avoid
     * reading UI text in a different language (e.g. a video title) when the
     * user selected French or English.
     */
    private fun extractText(visionText: com.google.mlkit.vision.text.Text): String {
        val blocks = visionText.textBlocks
        if (blocks.isEmpty()) return ""
        val filtered = blocks.filter { block ->
            block.recognizedLanguage.lowercase(Locale.ROOT).startsWith(currentLang)
        }
        val useBlocks = if (filtered.isNotEmpty()) filtered else blocks
        return useBlocks.joinToString(" ") { it.text }
    }

    private fun startLoop(text: String, autoLoop: Boolean = true, showCard: Boolean = false) {
        this.autoLoop = autoLoop
        lastSpokenText = text
        isLooping = true
        restoreOverlay()
        if (showCard) showResultCard(text)
        resultCardView?.setReading(true)
        bubble?.setMode(FloatingBubble.Mode.READING)
        updateNotification(title = if (autoLoop) "Loop Reading" else "Reading caption", text = text.take(80))
        speak(text)
    }

    private fun stopLoop(updateNotification: Boolean = true) {
        isLooping = false
        stopCaptionMonitoring()
        resultCardView?.setReading(false)
        tts?.stop()
        bubble?.setMode(FloatingBubble.Mode.SELECT)
        if (updateNotification) {
            updateNotification(title = "Loop Screen Speaker", text = lastSpokenText.take(80))
        }
    }

    private fun speak(text: String) {
        if (text.isBlank()) return
        val params = Bundle().apply {
            putString(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, UTTERANCE_ID)
        }
        tts?.speak(text, TextToSpeech.QUEUE_FLUSH, params, UTTERANCE_ID)
    }

    private fun toast(message: String) {
        Handler(Looper.getMainLooper()).post {
            Toast.makeText(applicationContext, message, Toast.LENGTH_SHORT).show()
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        stopLoop(updateNotification = false)
        tts?.shutdown()
        tts = null

        bubble?.let { view ->
            try {
                windowManager?.removeView(view)
            } catch (_: IllegalArgumentException) {
                // View was already removed.
            }
        }
        bubble = null

        resultCardView?.let { card ->
            try {
                windowManager?.removeView(card)
            } catch (_: IllegalArgumentException) {
                // Card was already removed.
            }
        }
        resultCardView = null

        virtualDisplay?.release()
        virtualDisplay = null
        imageReader?.close()
        imageReader = null
        mediaProjection?.stop()
        mediaProjection = null

        handlerThread?.quitSafely()
        handlerThread = null

        stopForeground(STOP_FOREGROUND_REMOVE)
    }
}
