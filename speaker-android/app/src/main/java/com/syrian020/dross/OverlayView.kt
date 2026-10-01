package com.syrian020.dross

import android.content.Context
import android.graphics.*
import android.view.MotionEvent
import android.view.View
import kotlin.math.hypot

/**
 * Full-screen transparent overlay that hosts a small draggable "read" bubble.
 *
 * The overlay intentionally does NOT consume touches except directly on the bubble,
 * so the user can still use other apps while the bubble is visible.
 *
 * Interaction:
 *  - BUBBLE: a small circular icon. It can be dragged anywhere and does not block
 *            touches on other apps except directly on the bubble.
 *  - SELECT: tap the bubble to show a preview rectangle of the area that will be read;
 *            drag to position the rectangle, then tap the bubble again to read.
 */
class OverlayView(context: Context) : View(context) {

    enum class Mode { BUBBLE, SELECT }

    /** Callbacks to the service. */
    interface Listener {
        /** The user tapped the bubble while in [Mode.BUBBLE] — request selection mode. */
        fun onBubbleTapped()
        /** The user tapped the bubble while in [Mode.SELECT] — read the preview area. */
        fun onPinTapped(rect: Rect)
    }

    private var listener: Listener? = null
    fun setListener(l: Listener?) {
        listener = l
    }

    init {
        // Make sure the overlay itself never consumes touches except on the bubble.
        isClickable = false
        isLongClickable = false
        isFocusable = false
        isFocusableInTouchMode = false
    }

    private val density = resources.displayMetrics.density

    private val previewFillPaint = Paint().apply {
        color = Color.parseColor("#55FF0000")
        style = Paint.Style.FILL
    }

    private val previewBorderPaint = Paint().apply {
        color = Color.RED
        style = Paint.Style.STROKE
        strokeWidth = 4f * density
    }

    private val shadowPaint = Paint().apply {
        color = Color.parseColor("#44000000")
        style = Paint.Style.FILL
        isAntiAlias = true
    }

    private val bubblePaint = Paint().apply {
        color = Color.parseColor("#FF9800")
        style = Paint.Style.FILL
        isAntiAlias = true
    }

    private val selectBubblePaint = Paint().apply {
        color = Color.parseColor("#2196F3")
        style = Paint.Style.FILL
        isAntiAlias = true
    }

    private val bubbleBorderPaint = Paint().apply {
        color = Color.WHITE
        style = Paint.Style.STROKE
        strokeWidth = 3f * density
        isAntiAlias = true
    }

    private val bubbleTextPaint = Paint().apply {
        color = Color.WHITE
        textSize = 12f * density
        textAlign = Paint.Align.CENTER
        isAntiAlias = true
    }

    private val bubbleIconPaint = Paint().apply {
        color = Color.WHITE
        style = Paint.Style.FILL
        isAntiAlias = true
    }

    // Bubble dimensions
    private val bubbleRadius = 22 * density
    private val touchPadding = 14 * density

    // Preview rectangle dimensions centered below the bubble
    private val previewWidth = 200 * density
    private val previewHeight = 100 * density

    private var pinX = 0f
    private var pinY = 0f

    private var isDragging = false
    private var dragStartX = 0f
    private var dragStartY = 0f
    private var pinStartX = 0f
    private var pinStartY = 0f

    private val tapSlop = 8 * density

    private var mode = Mode.BUBBLE

    override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
        super.onSizeChanged(w, h, oldw, oldh)
        if (w == 0 || h == 0) return
        if (pinX == 0f && pinY == 0f) {
            // Start centered horizontally, about 20% from the top.
            pinX = w / 2f
            pinY = h * 0.20f
        }
        clampPinPosition(w, h)
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        val w = width
        val h = height
        if (w == 0 || h == 0) return

        // In SELECT mode draw the preview rectangle below the bubble.
        if (mode == Mode.SELECT) {
            val preview = getSelectionRect()
            if (preview != null) {
                canvas.drawRect(preview, previewFillPaint)
                canvas.drawRect(preview, previewBorderPaint)
            }
        }

        // Draw a subtle drop shadow.
        canvas.drawCircle(pinX + 2 * density, pinY + 2 * density, bubbleRadius, shadowPaint)

        // Draw bubble head.
        val paint = when (mode) {
            Mode.BUBBLE -> bubblePaint
            Mode.SELECT -> selectBubblePaint
        }
        canvas.drawCircle(pinX, pinY, bubbleRadius, paint)
        canvas.drawCircle(pinX, pinY, bubbleRadius, bubbleBorderPaint)

        // Draw icon / label inside bubble.
        if (mode == Mode.SELECT) {
            canvas.drawText(
                "READ",
                pinX,
                pinY + bubbleTextPaint.textSize / 3f,
                bubbleTextPaint
            )
        } else {
            drawSpeakerIcon(canvas)
        }
    }

    private fun drawSpeakerIcon(canvas: Canvas) {
        // Speaker body (small trapezoid pointing right).
        val bodyPath = Path().apply {
            moveTo(pinX - bubbleRadius * 0.25f, pinY - bubbleRadius * 0.3f)
            lineTo(pinX + bubbleRadius * 0.25f, pinY - bubbleRadius * 0.15f)
            lineTo(pinX + bubbleRadius * 0.25f, pinY + bubbleRadius * 0.15f)
            lineTo(pinX - bubbleRadius * 0.25f, pinY + bubbleRadius * 0.3f)
            close()
        }
        canvas.drawPath(bodyPath, bubbleIconPaint)

        // Sound waves (two arcs).
        val wavePaint = Paint().apply {
            color = Color.WHITE
            style = Paint.Style.STROKE
            strokeWidth = 2f * density
            isAntiAlias = true
        }
        val oval = RectF(
            pinX + bubbleRadius * 0.1f,
            pinY - bubbleRadius * 0.35f,
            pinX + bubbleRadius * 0.7f,
            pinY + bubbleRadius * 0.35f
        )
        canvas.drawArc(oval, -60f, 120f, false, wavePaint)
    }

    override fun onTouchEvent(event: MotionEvent): Boolean {
        val w = width
        val h = height
        if (w == 0 || h == 0) return false

        when (event.action) {
            MotionEvent.ACTION_DOWN -> {
                if (isInsideBubble(event.x, event.y)) {
                    isDragging = true
                    dragStartX = event.x
                    dragStartY = event.y
                    pinStartX = pinX
                    pinStartY = pinY
                    return true
                }
                return false
            }
            MotionEvent.ACTION_MOVE -> {
                if (isDragging) {
                    pinX = pinStartX + (event.x - dragStartX)
                    pinY = pinStartY + (event.y - dragStartY)
                    clampPinPosition(w, h)
                    invalidate()
                    return true
                }
                return false
            }
            MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {
                if (isDragging) {
                    val moved = hypot((event.x - dragStartX).toDouble(), (event.y - dragStartY).toDouble())
                    isDragging = false
                    invalidate()
                    if (moved < tapSlop) {
                        when (mode) {
                            Mode.BUBBLE -> {
                                mode = Mode.SELECT
                                listener?.onBubbleTapped()
                            }
                            Mode.SELECT -> {
                                val rect = getSelectionRect()
                                if (rect != null) {
                                    listener?.onPinTapped(rect)
                                }
                            }
                        }
                    }
                    return true
                }
                return false
            }
        }
        return false
    }

    private fun isInsideBubble(x: Float, y: Float): Boolean {
        return hypot((x - pinX).toDouble(), (y - pinY).toDouble()) <= bubbleRadius + touchPadding
    }

    private fun clampPinPosition(w: Int, h: Int) {
        if (w == 0 || h == 0) return

        val minX = maxOf(bubbleRadius, previewWidth / 2f)
        val maxX = minOf(w - bubbleRadius, w - previewWidth / 2f)
        pinX = if (minX < maxX) pinX.coerceIn(minX, maxX) else w / 2f

        val minY = bubbleRadius
        val maxY = h - bubbleRadius - previewHeight
        pinY = if (minY < maxY) pinY.coerceIn(minY, maxY) else h / 2f
    }

    /** Return the selection rectangle below the bubble in screen coordinates. */
    fun getSelectionRect(): Rect? {
        val top = pinY + bubbleRadius
        val left = (pinX - previewWidth / 2f).toInt()
        val right = left + previewWidth.toInt()
        val bottom = top.toInt() + previewHeight.toInt()
        if (left < 0 || top < 0 || right > width || bottom > height) return null
        return Rect(left, top.toInt(), right, bottom)
    }

    fun setMode(newMode: Mode) {
        mode = newMode
        invalidate()
    }

    fun getMode(): Mode = mode
}
