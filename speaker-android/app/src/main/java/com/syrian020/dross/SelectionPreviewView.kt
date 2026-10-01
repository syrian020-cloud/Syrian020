package com.syrian020.dross

import android.content.Context
import android.graphics.*
import android.view.MotionEvent
import android.view.View

/**
 * A full-screen transparent view that only draws the red selection preview rectangle.
 * It never consumes touches so the user can continue interacting with apps behind it.
 */
class SelectionPreviewView(context: Context) : View(context) {

    private val previewFillPaint = Paint().apply {
        color = Color.parseColor("#55FF0000")
        style = Paint.Style.FILL
    }

    private val previewBorderPaint = Paint().apply {
        color = Color.RED
        style = Paint.Style.STROKE
        strokeWidth = 4f * resources.displayMetrics.density
    }

    private var previewRect: Rect? = null

    init {
        isClickable = false
        isLongClickable = false
        isFocusable = false
        isFocusableInTouchMode = false
    }

    fun setPreviewRect(rect: Rect?) {
        previewRect = rect
        invalidate()
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        previewRect?.let { rect ->
            canvas.drawRect(rect, previewFillPaint)
            canvas.drawRect(rect, previewBorderPaint)
        }
    }

    override fun onTouchEvent(event: MotionEvent?): Boolean {
        // Always pass touches through to the apps behind.
        return false
    }
}
