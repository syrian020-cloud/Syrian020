---
name: Test Syrian020 web/PWA locally
description: How to run the local web server and end-to-end test the Syrian020 PWA pages (index, french, vocab) in Chrome.
---

## Devin Secrets Needed

None.

## Local server

The app is static files only. Serve the repo root with:

```bash
python3 -m http.server 8080
```

The relevant pages are:

- `http://localhost:8080/index.html` (video lessons)
- `http://localhost:8080/french.html` (French phrase lessons)
- `http://localhost:8080/vocab.html` (vocabulary page)

## Browser launch

`~/.local/bin/google-chrome` is a CDP wrapper, not the real binary. The actual Chrome for Testing binary is under `/opt/.devin/chrome/`, e.g.:

```bash
/opt/.devin/chrome/chrome/linux-137.0.7118.2/chrome-linux64/chrome \
  --no-sandbox --disable-gpu --remote-debugging-port=29229 \
  --remote-allow-origins='*' \
  --user-data-dir=/tmp/chromev137 \
  --no-first-run --no-default-browser-check \
  --incognito http://localhost:8080/vocab.html
```

Use a fresh `--user-data-dir` or an incognito window when testing service worker updates, otherwise an old `dross-v*` cache may control the page. `--remote-allow-origins='*'` is required for Python/WebSocket CDP helpers to connect to the DevTools protocol.

## Known environment quirks

- The VNC display is 1600x1200; Chrome maximizes to that size. Client coordinates from `getBoundingClientRect()` must be offset by the browser chrome height (`window.outerHeight - window.innerHeight`), typically ~192 px. The "Chrome for Testing" banners can push this to ~190–192 px, so always compute it from the current window.
- The `computer` mouse-click actions may not register in this environment. If clicks via `computer` fail, use `xdotool mousemove <x> <y> click 1` from `exec` instead, passing actual screen coordinates (`rect.left + rect.width/2 + window.screenX`, `rect.top + rect.height/2 + window.screenY + chromeOffset`).
- `localStorage` persists between sessions (theme, language, speech rate, loop mode, sort). If the initial theme or language is not the default, the toggles still work; do not assume a clean default state.
- The `<select id="sort">` control can be driven with `xdotool` by clicking the control and using arrow keys + `Return`; make sure to blur the select afterward (click on a neutral area) before pressing `Home`/`End`, otherwise the key will change the select instead of scrolling the page.
- Chrome may show a 404 for `favicon.ico` on first load; this is harmless and does not affect functionality.
- The `browser_console` tool can drop its CDP connection in this environment. Use `/tmp/cdp_helper.py` (Python `websocket-client`) to connect to `ws://localhost:29229/devtools/page/<id>` and evaluate JS / capture `Log.entryAdded` and `Runtime.consoleAPICalled` events.

## Vocab page quick checks (reset 143-entry dataset)

- `data/vocab.js` contains the active dataset; `data/vocab-batch-02.js` is currently empty (`window.VOCAB_DATA_BATCH2 = []`).
- Total entries: **143** French phrases beginning with `À`.
- Entry structure: every entry has `fr`, `ar`, `en`, `level` (A1/A2/B1), `contexts` array, and `ex` (`fr`, `ar`, `en`).
- Levels: A1=28, A2=94, B1=21.
- Contexts: daily (143 entries; tag always present), transport=16, work=16, housing=8, shop=7, family=6, health=5, restaurant=5, car=5, bank=4, services=3, weather=3, phone=2.
- Search examples:
  - `gauche` → 1 result (`À gauche`)
  - `يسار` → 1 result (`À gauche`)
  - `côté` → 3 results (`À côté`, `À côté de ça`, `À côté de la plaque`)
  - `left` → 1 result (`À gauche`)
- Filter counts:
  - level `A1` → 28
  - context `transport` (`مواصلات` in AR, `Transports` in FR) → 16
- Sorting:
  - A → Z first term: `À bas`
  - Z → A first term: `À vue d'œil`
- Pagination: `pageSize` is 100; the `#load-more` button shows the remaining count on first load (e.g. `تحميل المزيد (43)` / `Load more (43)` / `Charger plus (43)`), and after one click renders all 143 cards and removes the button.
- Audio uses Web Speech API or Capacitor TTS; in the VM the audio may not play, but the buttons should not throw console errors.
- Card action buttons (from right to left in RTL Arabic, left to right in LTR English/French):
  - `speak-btn` (🔊 / `نطق` / `Speak` / `Écouter`)
  - `loop-btn` (🔁 / `تكرار` / `Loop` / `Répéter`)
  - `google-btn` (🖼️ / `صور Google` / `Images` / `Images`) — opens `https://www.google.com/search?udm=2&q=<fr>`
  - `ai-btn` (✨ / `Google AI` / `Google AI` / `Google IA`) — opens `https://www.google.com/search?udm=50&q=<fr>%20<prompt>`
- Google AI prompt per UI language:
  - AR: `<fr> ترجمة للعربية والفرنسية مع أمثلة شائعة`
  - EN: `<fr> translation to Arabic and French with common examples`
  - FR: `<fr> traduction arabe français avec exemples courants`
- Google search links will often hit a reCAPTCHA from a VM IP; that is expected. Verify the generated URL, not the results page.
- In Chrome for Testing, opening a Google AI Mode (`udm=50`) link may crash the entire browser process. If this happens, verify the generated `href` via CDP (`document.querySelector('.ai-btn').getAttribute('href')`) instead of clicking.

## Service worker and caching

- `sw.js` is currently on cache **`dross-v80`** and uses `new Request(url, { cache: 'reload' })` during `cache.addAll()` to force fresh network fetches.
- When testing SW updates, use a fresh incognito/profile. You can inspect the active cache with:
  ```js
  (async () => { console.log(await caches.keys()); })();
  ```
- If `data/manifest.js` or any `data/stage*.js` file is missing, the install step fails and `dross-v80` will not activate.

## Android APK testing

- The debug APK is built to `android/app/build/outputs/apk/debug/app-debug.apk` after Capacitor rebuilds.
- If no Android device or emulator is attached (`adb devices` is empty), runtime APK testing is not feasible; only inspect APK presence/size or metadata.
