package com.syrian020.dross

import android.content.Context
import android.graphics.*
import android.os.*
import android.util.DisplayMetrics
import android.view.*
import kotlin.math.hypot

/**
 * A small floating target that opens a resizable selection rectangle.
 *
 * - BUBBLE mode: a tiny target icon that can be dragged anywhere.
 * - SELECT mode: full-screen overlay with a red rectangle anchored at the
 *   target (top-left corner). Drag the bottom-right target to resize.
 *   Tap inside the rectangle to capture + read. Tap the top-left target
 *   again to close the selection.
 * - READING mode: a small red STOP target that stops TTS when tapped.
 */
class FloatingBubble(context: Context) : View(context) {

    enum class Mode { BUBBLE, SELECT, READING }
    private enum class ResizeHandle { NONE, LEFT, RIGHT, TOP, BOTTOM, TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT }

    interface Listener {
        /** Selection rectangle or mode changed. rect is null when not in SELECT. */
        fun onSelectionRectChanged(mode: Mode, rect: Rect?)
        /** Tapped inside the selection area to read it. */
        fun onProcessSelection(rect: Rect)
        /** Tapped while in READING mode to stop the app. */
        fun onStopTapped()
    }

    private var listener: Listener? = null
    fun setListener(l: Listener?) { listener = l }

    private val windowManager = context.getSystemService(Context.WINDOW_SERVICE) as WindowManager
    private val density = resources.displayMetrics.density

    private val targetRadius = 22 * density
    private val targetHitPadding = 16 * density
    private val bubbleWindowSize = ((targetRadius + targetHitPadding) * 2).toInt()

    private var previewWidth = 200 * density
    private var previewHeight = 160 * density
    private val minPreviewWidth = 40 * density
    private val minPreviewHeight = 40 * density
    private val previewHorizontalMargin = 8 * density
    private var previewWidthInitialized = false

    private val windowParams: WindowManager.LayoutParams = run {
        val type = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY
        } else {
            @Suppress("DEPRECATION")
            WindowManager.LayoutParams.TYPE_SYSTEM_ALERT
        }
        WindowManager.LayoutParams(
            bubbleWindowSize,
            bubbleWindowSize,
            type,
            WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE or
                WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL or
                WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS or
                WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED,
            PixelFormat.TRANSLUCENT
        ).apply {
            gravity = Gravity.TOP or Gravity.START
            x = 0
            y = 0
        }
    }

    // Anchor point of the selection rectangle (top-left corner) and the bubble center.
    private var anchorX = 0
    private var anchorY = 0

    private var mode = Mode.BUBBLE
    private var selectionVisible = true

    private var isDraggingAnchor = false
    private var dragStartRawX = 0f
    private var dragStartRawY = 0f
    private var dragStartAnchorX = 0
    private var dragStartAnchorY = 0

    private var isResizing = false
    private var resizeHandle = ResizeHandle.NONE
    private var resizeStartRawX = 0f
    private var resizeStartRawY = 0f
    private var resizeStartAnchorX = 0
    private var resizeStartAnchorY = 0
    private var resizeStartWidth = 0f
    private var resizeStartHeight = 0f

    private var isPreviewTapped = false
    private var previewTapStartRawX = 0f
    private var previewTapStartRawY = 0f

    private var isCloseButtonTouched = false
    private var closeButtonStartRawX = 0f
    private var closeButtonStartRawY = 0f

    private val tapSlop = 10 * density

    private val closeButtonRadius = 18 * density
    private val closeButtonHitRadius = 30 * density

    private val shadowPaint = Paint().apply {
        color = Color.parseColor("#44000000")
        style = Paint.Style.FILL
        isAntiAlias = true
    }

    private val targetFillPaint = Paint().apply {
        color = Color.WHITE
        style = Paint.Style.FILL
        isAntiAlias = true
    }

    private val targetRingPaint = Paint().apply {
        color = Color.parseColor("#F44336")
        style = Paint.Style.STROKE
        strokeWidth = 3f * density
        isAntiAlias = true
    }

    private val bubbleTargetPaint = Paint().apply {
        color = Color.parseColor("#FF9800")
        style = Paint.Style.FILL
        isAntiAlias = true
    }

    private val selectTargetPaint = Paint().apply {
        color = Color.parseColor("#2196F3")
        style = Paint.Style.FILL
        isAntiAlias = true
    }

    private val readingTargetPaint = Paint().apply {
        color = Color.parseColor("#D32F2F")
        style = Paint.Style.FILL
        isAntiAlias = true
    }

    private val previewFillPaint = Paint().apply {
        color = Color.parseColor("#22F44336")
        style = Paint.Style.FILL
    }

    private val previewBorderPaint = Paint().apply {
        color = Color.parseColor("#F44336")
        style = Paint.Style.STROKE
        strokeWidth = 2.5f * density
        isAntiAlias = true
    }

    private val targetCrossPaint = Paint().apply {
        color = Color.WHITE
        style = Paint.Style.STROKE
        strokeWidth = 2f * density
        isAntiAlias = true
    }

    private val stopTextPaint = Paint().apply {
        color = Color.WHITE
        textSize = 10f * density
        textAlign = Paint.Align.CENTER
        isAntiAlias = true
    }

    private val closeButtonPaint = Paint().apply {
        color = Color.parseColor("#D32F2F")
        style = Paint.Style.FILL
        isAntiAlias = true
    }

    private val closeButtonXPaint = Paint().apply {
        color = Color.WHITE
        style = Paint.Style.STROKE
        strokeWidth = 3f * density
        isAntiAlias = true
    }

    init {
        isClickable = false
        isLongClickable = false
        isFocusable = false
        isFocusableInTouchMode = false
        setLayerType(LAYER_TYPE_HARDWARE, null)
    }

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
        applyPosition(update = true)
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        val w = width
        val h = height
        if (w == 0 || h == 0) return

        val windowX = windowParams.x.toFloat()
        val windowY = windowParams.y.toFloat()

        // In SELECT the window is full-screen and the anchor is in screen coordinates.
        // In BUBBLE/READING the window is small and the anchor is at its center.
        val ax = if (mode == Mode.SELECT) anchorX - windowX else w / 2f
        val ay = if (mode == Mode.SELECT) anchorY - windowY else h / 2f

        if (mode == Mode.SELECT && selectionVisible) {
            val left = ax
            val top = ay
            val right = ax + previewWidth
            val bottom = ay + previewHeight

            // Selection rectangle.
            canvas.drawRect(left, top, right, bottom, previewFillPaint)
            canvas.drawRect(left, top, right, bottom, previewBorderPaint)

            // Target handles at corners/edges.
            drawTarget(canvas, left, top, false)      // top-left (bubble, movable)
            drawTarget(canvas, left, bottom, false)   // bottom-left
            drawTarget(canvas, right, bottom, true)  // bottom-right resize handle
            // Close button at top-right to hide the selection easily.
            drawCloseButton(canvas, right, top)
        }

        // The main target/bubble at the anchor point.
        val fillPaint = when (mode) {
            Mode.SELECT -> selectTargetPaint
            Mode.READING -> readingTargetPaint
            else -> bubbleTargetPaint
        }
        drawTarget(canvas, ax, ay, false, fillPaint)

        if (mode == Mode.READING) {
            canvas.drawText("STOP", ax, ay + stopTextPaint.textSize / 3f, stopTextPaint)
        }
    }

    private fun drawTarget(canvas: Canvas, x: Float, y: Float, larger: Boolean, fillPaint: Paint = targetFillPaint) {
        val radius = if (larger) targetRadius * 1.4f else targetRadius
        canvas.drawCircle(x + 2 * density, y + 2 * density, radius, shadowPaint)
        canvas.drawCircle(x, y, radius, fillPaint)
        canvas.drawCircle(x, y, radius * 0.7f, targetRingPaint)
        canvas.drawCircle(x, y, radius * 0.4f, targetFillPaint)
        canvas.drawCircle(x, y, radius * 0.15f, targetRingPaint)
        // Crosshair.
        canvas.drawLine(x - radius, y, x + radius, y, targetCrossPaint)
        canvas.drawLine(x, y - radius, x, y + radius, targetCrossPaint)
    }

    private fun drawCloseButton(canvas: Canvas, x: Float, y: Float) {
        val radius = closeButtonRadius
        canvas.drawCircle(x + 2 * density, y + 2 * density, radius, shadowPaint)
        canvas.drawCircle(x, y, radius, closeButtonPaint)
        canvas.drawLine(x - radius * 0.5f, y - radius * 0.5f, x + radius * 0.5f, y + radius * 0.5f, closeButtonXPaint)
        canvas.drawLine(x + radius * 0.5f, y - radius * 0.5f, x - radius * 0.5f, y + radius * 0.5f, closeButtonXPaint)
    }

    private fun isInsideCloseButton(rawX: Float, rawY: Float): Boolean {
        if (mode != Mode.SELECT || !selectionVisible) return false
        val r = previewRect()
        val topRightX = r.right
        val topRightY = r.top
        return hypot((rawX - topRightX).toDouble(), (rawY - topRightY).toDouble()) <= closeButtonHitRadius
    }

    override fun onTouchEvent(event: MotionEvent): Boolean {
        when (event.action) {
            MotionEvent.ACTION_DOWN -> {
                if (mode == Mode.SELECT && selectionVisible && isInsideCloseButton(event.rawX, event.rawY)) {
                    isCloseButtonTouched = true
                    closeButtonStartRawX = event.rawX
                    closeButtonStartRawY = event.rawY
                    return true
                }

                if (mode == Mode.SELECT && selectionVisible) {
                    val handle = getResizeHandle(event.rawX, event.rawY)
                    if (handle != ResizeHandle.NONE) {
                        resizeHandle = handle
                        isResizing = true
                        resizeStartRawX = event.rawX
                        resizeStartRawY = event.rawY
                        resizeStartAnchorX = anchorX
                        resizeStartAnchorY = anchorY
                        resizeStartWidth = previewWidth
                        resizeStartHeight = previewHeight
                        return true
                    }
                }

                if (isInsideBubble(event.rawX, event.rawY)) {
                    isDraggingAnchor = true
                    dragStartRawX = event.rawX
                    dragStartRawY = event.rawY
                    dragStartAnchorX = anchorX
                    dragStartAnchorY = anchorY
                    return true
                }

                if (mode == Mode.SELECT && selectionVisible && isInsidePreview(event.rawX, event.rawY)) {
                    isPreviewTapped = true
                    previewTapStartRawX = event.rawX
                    previewTapStartRawY = event.rawY
                    return true
                }

                return false
            }
            MotionEvent.ACTION_MOVE -> {
                return when {
                    isResizing -> {
                        val dx = event.rawX - resizeStartRawX
                        val dy = event.rawY - resizeStartRawY
                        resizeSelection(dx, dy)
                        true
                    }
                    isDraggingAnchor -> {
                        val dx = (event.rawX - dragStartRawX).toInt()
                        val dy = (event.rawY - dragStartRawY).toInt()
                        moveTo(dragStartAnchorX + dx, dragStartAnchorY + dy)
                        true
                    }
                    isPreviewTapped -> true
                    isCloseButtonTouched -> true
                    else -> false
                }
            }
            MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {
                return when {
                    isResizing -> {
                        val moved = hypot(
                            (event.rawX - resizeStartRawX).toDouble(),
                            (event.rawY - resizeStartRawY).toDouble()
                        )
                        isResizing = false
                        if (moved < tapSlop) {
                            getSelectionRect()?.let { rect -> listener?.onProcessSelection(rect) }
                        }
                        resizeHandle = ResizeHandle.NONE
                        true
                    }
                    isCloseButtonTouched -> {
                        isCloseButtonTouched = false
                        if (mode == Mode.SELECT) {
                            setMode(Mode.BUBBLE)
                        }
                        true
                    }
                    isDraggingAnchor -> {
                        val moved = hypot(
                            (event.rawX - dragStartRawX).toDouble(),
                            (event.rawY - dragStartRawY).toDouble()
                        )
                        isDraggingAnchor = false
                        if (moved < tapSlop) {
                            when (mode) {
                                Mode.BUBBLE -> setMode(Mode.SELECT)
                                Mode.SELECT -> setMode(Mode.BUBBLE)
                                Mode.READING -> listener?.onStopTapped()
                            }
                        }
                        true
                    }
                    isPreviewTapped -> {
                        val moved = hypot(
                            (event.rawX - previewTapStartRawX).toDouble(),
                            (event.rawY - previewTapStartRawY).toDouble()
                        )
                        isPreviewTapped = false
                        if (moved < tapSlop && isInsidePreview(event.rawX, event.rawY)) {
                            getSelectionRect()?.let { rect -> listener?.onProcessSelection(rect) }
                        }
                        true
                    }
                    else -> false
                }
            }
        }
        return false
    }

    private fun isInsideBubble(rawX: Float, rawY: Float): Boolean {
        return hypot((rawX - anchorX).toDouble(), (rawY - anchorY).toDouble()) <= targetRadius + targetHitPadding
    }

    private fun isInsidePreview(rawX: Float, rawY: Float): Boolean {
        if (mode != Mode.SELECT || !selectionVisible) return false
        val r = previewRect()
        return rawX >= r.left && rawX <= r.right && rawY >= r.top && rawY <= r.bottom
    }

    private fun getResizeHandle(rawX: Float, rawY: Float): ResizeHandle {
        if (mode != Mode.SELECT || !selectionVisible) return ResizeHandle.NONE
        val r = previewRect()
        val left = r.left
        val top = r.top
        val right = r.right
        val bottom = r.bottom
        val pad = 28 * density

        val onLeft = rawX >= left - pad && rawX <= left + pad && rawY >= top && rawY <= bottom
        val onRight = rawX >= right - pad && rawX <= right + pad && rawY >= top && rawY <= bottom
        val onTop = rawY >= top - pad && rawY <= top + pad && rawX >= left && rawX <= right
        val onBottom = rawY >= bottom - pad && rawY <= bottom + pad && rawX >= left && rawX <= right

        return when {
            onLeft && onTop -> ResizeHandle.TOP_LEFT
            onRight && onTop -> ResizeHandle.TOP_RIGHT
            onLeft && onBottom -> ResizeHandle.BOTTOM_LEFT
            onRight && onBottom -> ResizeHandle.BOTTOM_RIGHT
            onLeft -> ResizeHandle.LEFT
            onRight -> ResizeHandle.RIGHT
            onTop -> ResizeHandle.TOP
            onBottom -> ResizeHandle.BOTTOM
            else -> ResizeHandle.NONE
        }
    }

    /** Preview rectangle in screen coordinates. */
    private fun previewRect(): RectF {
        return RectF(anchorX.toFloat(), anchorY.toFloat(), anchorX + previewWidth, anchorY + previewHeight)
    }

    private fun resizeSelection(dx: Float, dy: Float) {
        val metrics = DisplayMetrics()
        windowManager.defaultDisplay?.getRealMetrics(metrics)
        val screenW = metrics.widthPixels
        val screenH = metrics.heightPixels

        when (resizeHandle) {
            ResizeHandle.RIGHT -> {
                previewWidth = (resizeStartWidth + dx).coerceIn(minPreviewWidth, (screenW - resizeStartAnchorX).toFloat())
            }
            ResizeHandle.BOTTOM -> {
                previewHeight = (resizeStartHeight + dy).coerceIn(minPreviewHeight, (screenH - resizeStartAnchorY).toFloat())
            }
            ResizeHandle.BOTTOM_RIGHT -> {
                previewWidth = (resizeStartWidth + dx).coerceIn(minPreviewWidth, (screenW - resizeStartAnchorX).toFloat())
                previewHeight = (resizeStartHeight + dy).coerceIn(minPreviewHeight, (screenH - resizeStartAnchorY).toFloat())
            }
            ResizeHandle.LEFT -> {
                val newLeft = (resizeStartAnchorX + dx).toInt().coerceIn(0, (resizeStartAnchorX + resizeStartWidth - minPreviewWidth).toInt())
                val right = resizeStartAnchorX + resizeStartWidth
                anchorX = newLeft
                previewWidth = (right - newLeft).toFloat().coerceAtLeast(minPreviewWidth)
            }
            ResizeHandle.TOP -> {
                val newTop = (resizeStartAnchorY + dy).toInt().coerceIn(0, (resizeStartAnchorY + resizeStartHeight - minPreviewHeight).toInt())
                val bottom = resizeStartAnchorY + resizeStartHeight
                anchorY = newTop
                previewHeight = (bottom - newTop).toFloat().coerceAtLeast(minPreviewHeight)
            }
            ResizeHandle.TOP_RIGHT -> {
                val newTop = (resizeStartAnchorY + dy).toInt().coerceIn(0, (resizeStartAnchorY + resizeStartHeight - minPreviewHeight).toInt())
                val bottom = resizeStartAnchorY + resizeStartHeight
                anchorY = newTop
                previewHeight = (bottom - newTop).toFloat().coerceAtLeast(minPreviewHeight)
                previewWidth = (resizeStartWidth + dx).coerceIn(minPreviewWidth, (screenW - resizeStartAnchorX).toFloat())
            }
            ResizeHandle.BOTTOM_LEFT -> {
                val newLeft = (resizeStartAnchorX + dx).toInt().coerceIn(0, (resizeStartAnchorX + resizeStartWidth - minPreviewWidth).toInt())
                val right = resizeStartAnchorX + resizeStartWidth
                anchorX = newLeft
                previewWidth = (right - newLeft).toFloat().coerceAtLeast(minPreviewWidth)
                previewHeight = (resizeStartHeight + dy).coerceIn(minPreviewHeight, (screenH - resizeStartAnchorY).toFloat())
            }
            ResizeHandle.TOP_LEFT -> {
                // Moving top-left anchor moves the whole rectangle instead of resizing from that corner,
                // because the top-left handle is the main bubble.
                val newLeft = (resizeStartAnchorX + dx).toInt().coerceIn(0, (resizeStartAnchorX + resizeStartWidth - minPreviewWidth).toInt())
                val right = resizeStartAnchorX + resizeStartWidth
                anchorX = newLeft
                previewWidth = (right - newLeft).toFloat().coerceAtLeast(minPreviewWidth)
                val newTop = (resizeStartAnchorY + dy).toInt().coerceIn(0, (resizeStartAnchorY + resizeStartHeight - minPreviewHeight).toInt())
                val bottom = resizeStartAnchorY + resizeStartHeight
                anchorY = newTop
                previewHeight = (bottom - newTop).toFloat().coerceAtLeast(minPreviewHeight)
            }
            else -> {}
        }

        invalidate()
        notifySelectionRect()
    }

    private fun moveTo(x: Int, y: Int) {
        anchorX = x
        anchorY = y
        applyPosition(update = isAttachedToWindow && mode != Mode.SELECT)
    }

    /** Place the top-left anchor at (x,y) in screen coordinates. */
    fun setPosition(x: Int, y: Int) {
        anchorX = x
        anchorY = y
        applyPosition(update = isAttachedToWindow && mode != Mode.SELECT)
    }

    fun setMode(newMode: Mode) {
        if (mode == newMode) return
        mode = newMode
        applyPosition(update = isAttachedToWindow)
        notifySelectionRect()
    }

    fun getMode() = mode

    private val uiHandler = Handler(Looper.getMainLooper())

    /** Show or hide the overlay. Hiding also disables touch so it cannot block the phone. */
    fun setVisible(visible: Boolean) {
        uiHandler.post {
            if (visible) {
                windowParams.flags = windowParams.flags and WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE.inv()
                visibility = View.VISIBLE
            } else {
                windowParams.flags = windowParams.flags or WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE
                visibility = View.GONE
            }
            if (isAttachedToWindow) {
                try {
                    windowManager.updateViewLayout(this, windowParams)
                } catch (_: IllegalArgumentException) {
                    // View was already removed.
                }
            }
        }
    }

    fun setSelectionVisible(visible: Boolean) {
        uiHandler.post {
            selectionVisible = visible
            invalidate()
        }
    }

    fun getWindowLayoutParams(): WindowManager.LayoutParams = windowParams

    private fun applyPosition(update: Boolean) {
        val metrics = DisplayMetrics()
        windowManager.defaultDisplay?.getRealMetrics(metrics)
        val screenW = metrics.widthPixels

        if (mode == Mode.SELECT && !previewWidthInitialized) {
            previewWidth = (screenW - anchorX - 2 * previewHorizontalMargin).coerceAtLeast(minPreviewWidth)
            previewHeight = (metrics.heightPixels * 0.25f).coerceAtLeast(minPreviewHeight)
            previewWidthInitialized = true
        }

        if (mode == Mode.SELECT) {
            windowParams.width = WindowManager.LayoutParams.MATCH_PARENT
            windowParams.height = WindowManager.LayoutParams.MATCH_PARENT
            windowParams.x = 0
            windowParams.y = 0
        } else {
            windowParams.width = bubbleWindowSize
            windowParams.height = bubbleWindowSize
            windowParams.x = anchorX - bubbleWindowSize / 2
            windowParams.y = anchorY - bubbleWindowSize / 2
        }

        if (update && isAttachedToWindow) {
            try {
                windowManager.updateViewLayout(this, windowParams)
            } catch (_: IllegalArgumentException) {
                // View was already removed.
            }
        }
        invalidate()
    }

    /** Compute the selection rectangle in screen coordinates. */
    fun getSelectionRect(): Rect? {
        if (mode != Mode.SELECT) return null
        val metrics = DisplayMetrics()
        windowManager.defaultDisplay?.getRealMetrics(metrics)
        val screenW = metrics.widthPixels
        val screenH = metrics.heightPixels

        val left = anchorX.coerceIn(0, screenW)
        val top = anchorY.coerceIn(0, screenH)
        val right = (anchorX + previewWidth).toInt().coerceAtMost(screenW).coerceAtLeast(left)
        val bottom = (anchorY + previewHeight).toInt().coerceAtMost(screenH).coerceAtLeast(top)
        if (right <= left || bottom <= top) return null
        return Rect(left, top, right, bottom)
    }

    private fun notifySelectionRect() {
        listener?.onSelectionRectChanged(mode, getSelectionRect())
    }
}
