package com.syrian020.dross

import android.content.Context
import android.graphics.*
import android.graphics.drawable.GradientDrawable
import android.view.Gravity
import android.view.MotionEvent
import android.view.View
import android.widget.*
import androidx.core.view.setPadding

/**
 * A floating card that shows the recognized text and provides language / read / close controls.
 */
class ResultCardView(context: Context) : LinearLayout(context) {

    interface Listener {
        fun onReadStopClicked()
        fun onNextClicked()
        fun onCloseClicked()
        fun onLanguageChanged(lang: String)
    }

    private val density = resources.displayMetrics.density
    private var listener: Listener? = null

    private var langButtons: Map<String, Button> = emptyMap()
    private val textView: TextView
    private val readButton: Button
    private val closeButton: Button
    private var isReading = false
    private var selectedLang = "en"

    init {
        orientation = VERTICAL
        setPadding((16 * density).toInt())

        val bg = GradientDrawable().apply {
            setColor(Color.WHITE)
            setStroke((2 * density).toInt(), Color.parseColor("#2196F3"))
            cornerRadius = 16 * density
        }
        background = bg

        // Close button
        closeButton = Button(context).apply {
            text = "X"
            setTextColor(Color.WHITE)
            setBackgroundColor(Color.parseColor("#D32F2F"))
            textSize = 14f
            layoutParams = LayoutParams((40 * density).toInt(), (40 * density).toInt()).apply {
                gravity = Gravity.END
            }
            setOnClickListener { listener?.onCloseClicked() }
        }

        // Header with language buttons
        val header = LinearLayout(context).apply {
            orientation = HORIZONTAL
            gravity = Gravity.CENTER_VERTICAL
            layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT)
            addView(closeButton)
        }

        val langContainer = LinearLayout(context).apply {
            orientation = HORIZONTAL
            gravity = Gravity.CENTER
            layoutParams = LayoutParams(0, LayoutParams.WRAP_CONTENT, 1f).apply {
                setMargins((8 * density).toInt(), 0, 0, 0)
            }
        }

        val langDefs = listOf(
            "ar" to "عربي",
            "en" to "En",
            "fr" to "Fr"
        )
        langButtons = langDefs.associate { (code, label) ->
            val btn = Button(context).apply {
                text = label
                textSize = 14f
                setTextColor(Color.WHITE)
                setBackgroundColor(if (code == selectedLang) Color.parseColor("#0D47A1") else Color.parseColor("#2196F3"))
                layoutParams = LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1f).apply {
                    setMargins((4 * density).toInt(), 0, (4 * density).toInt(), 0)
                }
                setOnClickListener { setLanguage(code) }
            }
            langContainer.addView(btn)
            code to btn
        }
        header.addView(langContainer)
        addView(header)

        // Text area
        textView = TextView(context).apply {
            textSize = 18f
            setTextColor(Color.BLACK)
            setPadding((12 * density).toInt())
            minHeight = (80 * density).toInt()
            maxHeight = (180 * density).toInt()
        }
        val scroll = ScrollView(context).apply {
            layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, 0, 1f).apply {
                setMargins(0, (12 * density).toInt(), 0, (12 * density).toInt())
            }
            addView(textView)
        }
        addView(scroll)

        // Read / Stop button
        readButton = Button(context).apply {
            text = "READ"
            textSize = 16f
            setTextColor(Color.WHITE)
            setBackgroundColor(Color.parseColor("#4CAF50"))
            layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, (56 * density).toInt())
            setOnClickListener { listener?.onReadStopClicked() }
        }
        setReading(false)
        addView(readButton)

        // Next button: capture and read the current selection once (useful for video captions).
        val nextButton = Button(context).apply {
            text = "NEXT"
            textSize = 16f
            setTextColor(Color.WHITE)
            setBackgroundColor(Color.parseColor("#2196F3"))
            layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, (56 * density).toInt()).apply {
                setMargins(0, (8 * density).toInt(), 0, 0)
            }
            setOnClickListener { listener?.onNextClicked() }
        }
        addView(nextButton)

        elevation = 12 * density
    }

    fun setListener(l: Listener?) {
        listener = l
    }

    fun setRecognizedText(text: String) {
        textView.text = text
    }

    fun setReading(reading: Boolean) {
        isReading = reading
        readButton.text = if (reading) "STOP" else "READ"
        readButton.setBackgroundColor(if (reading) Color.parseColor("#D32F2F") else Color.parseColor("#4CAF50"))
    }

    fun setLanguage(lang: String) {
        selectedLang = lang
        langButtons.forEach { (code, btn) ->
            btn.setBackgroundColor(if (code == lang) Color.parseColor("#0D47A1") else Color.parseColor("#2196F3"))
        }
        listener?.onLanguageChanged(lang)
    }

    fun getSelectedLanguage(): String = selectedLang

    override fun onTouchEvent(event: MotionEvent?): Boolean {
        // Keep the card interactive; pass everything through to children.
        return super.onTouchEvent(event)
    }
}
