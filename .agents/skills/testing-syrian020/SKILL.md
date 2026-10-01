---
name: Testing Syrian020 standalone PWA pages
description: How to run and visually test the standalone HTML PWAs in the Syrian020 repo (procap.html, french.html, index.html)
---

## Devin Secrets Needed
None.

## Serving the app
These are static HTML PWAs. Serve the repo root over HTTP so the service worker can register and `window.open` behavior is realistic:

```bash
python3 -m http.server 8000 --directory /home/ubuntu/repos/Syrian020
```

Open Chrome with popup blocking disabled:

```bash
google-chrome --disable-popup-blocking --incognito http://localhost:8000/procap.html
```

## Window sizing and coordinates
- The desktop is usually 1600x1200, but the `computer` tool coordinate space is 1024x768, so divide getBoundingClientRect/device-pixel values by 1.5625 before clicking.
- Chrome window chrome adds about 87 px vertically; the viewport starts below the browser UI.
- `wmctrl` may not resize Chrome reliably under KDE/Plasma; install/use `xdotool` if precise window sizing is needed (e.g. for responsive tests).

## Responsive testing
The fastest reliable way to simulate a narrow viewport is Chrome DevTools device emulation:
- `F12` to open DevTools, then `Ctrl+Shift+M` to toggle the device toolbar.
- Set width to 400–420 px to exercise the `@media (max-width: 520px)` breakpoint.
- The page uses `max-width: 880px`, so wider desktop viewports center the content; narrow viewports stack cards and wrap phrase action buttons.

## Audio/TTS notes
- Speech uses `window.speechSynthesis` with `fr-FR`, `ar-SA`, and `en-US` voices.
- Many test environments have no system voices (`speechSynthesis.getVoices().length === 0`). In those cases the UI still shows feedback (`.playing` border, `🔁` → `⏸` toggle, active line highlight), but actual sound cannot be verified.
- The `Capacitor` native TTS path is only active inside the built Android app.

## Google Images search icon
- Each phrase has a `🖼️` button that calls `window.open('https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(p.fr), '_blank')`.
- From automated cloud hosts, Google often returns a reCAPTCHA interstitial. That is expected and still proves the new-tab behavior.

## Custom-lesson / add-form notes
- Lessons are loaded from and saved to `localStorage` under `procap_lessons`. Start with a fresh incognito session and `localStorage.clear()` to avoid stale data.
- The add form at `#/add` supports a **Column order** selector: `auto` / `fr-ar-en` / `en-ar-fr`.
- `parsePhrases` accepts delimiters: `|`, `,`, `=`, `→`, `->`, `=>`, `:`, `-` (with spaces), multiple spaces, and tabs.
- It detects Arabic text to find the middle column, then classifies the two Latin sides as French/English using accents and common-word hints. Use **EN-AR-FR** for simple words that have no accents or obvious language clues (e.g. `sun | شمس | soleil`).
- Surrounding `*`, `-`, `–`, `—`, `:`, `=`, `;` and Markdown bold `**...**` are cleaned from each part.
- Switching the UI language while on `#/add` re-renders the form (`setUILang` calls `go(state.route, false)`), which will reset any values already typed.
- If the automation keyboard cannot type Arabic characters in this environment, set input/textarea values via `browser_console` and then click Save to test the parsing flow.
- The service worker caches `procap.html`; use a query string like `?nocache=2` during testing to force a fresh fetch.
- The delete button triggers a browser `confirm` dialog; pressing `Return` accepts it if mouse clicking the OK button is unreliable.

## Useful selectors
- Home hero: `.hero h1`
- Lesson cards: `.card.lesson-card`
- Phrase cards: `.phrase`
- Language buttons: `.lang-btn`
- Theme button: `#btn-theme`
- Search input: `#search`
