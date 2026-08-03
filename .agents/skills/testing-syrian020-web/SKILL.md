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
/opt/.devin/chrome/chrome/linux-133.0.6943.126/chrome-linux64/chrome \
  --no-sandbox --disable-gpu --remote-debugging-port=29229 \
  --user-data-dir=/tmp/chromev4 \
  --no-first-run --no-default-browser-check \
  --incognito http://localhost:8080/vocab.html
```

Use a fresh `--user-data-dir` or an incognito window when testing service worker updates, otherwise an old `dross-v*` cache may control the page.

## Known environment quirks

- The VNC display is 1600x1200; Chrome maximizes to that size. Client coordinates from `getBoundingClientRect()` must be offset by the browser chrome height (`window.outerHeight - window.innerHeight`). The "Chrome for Testing" banners can push this to ~190 px, so always compute it from the current window.
- The `computer` mouse-click actions may not register in this environment. If clicks via `computer` fail, use `xdotool mousemove <x> <y> click 1` from `exec` instead.
- `localStorage` persists between sessions (theme, language, speech rate, loop mode, sort). If the initial theme or language is not the default, the toggles still work; do not assume a clean default state.
- The `<select id="sort">` control can be driven with `xdotool` by clicking the control and using arrow keys + `Return`; make sure to blur the select afterward (click on a neutral area) before pressing `Home`/`End`, otherwise the key will change the select instead of scrolling the page.
- Chrome may show a 404 for `favicon.ico` on first load; this is harmless and does not affect functionality.
- The `browser_console` tool can drop its CDP connection in this environment. If it fails, a Python helper such as `/tmp/cdp_async.py` can connect directly to `ws://localhost:29229/devtools/page/<id>` to evaluate JS and inspect state.

## Vocab page quick checks (updated dataset)

- `data/vocab.js` and `data/vocab-batch-02.js` are concatenated into the in-memory list.
- Total entries: **7,734**.
- Search examples:
  - `rue` → 14 results, including `fr: "rue"` with `ex.fr: "Le chat traversa la rue."`, `ex.ar: "عبر القط الطريق."`, `ex.en: "The cat crossed the road."`
  - `côté` → 5 results, including `fr: "côté"` with `ex.fr: "Mets-le de côté."` and `fr: "à côté de"` with `ex.fr: "C'est à côté de la mairie, derrière l'église."`
  - `à côté de` → 1 result with `ex.fr: "C'est à côté de la mairie, derrière l'église."`
  - rare/technical terms removed: `abaque` → 0, `spool` → 0
  - common/admin terms retained: `attestation` (3), `loyer` (4), `compte bancaire` (1), `titre de séjour` (1), `CAF` (11), `OFII` (1)
- Filter counts:
  - level `A1` → 988
  - context `prefecture` (`محافظة` in AR, `Préfecture` in FR, `Prefecture` in EN) → 651
- Sorting:
  - A → Z first term: `à bas`
  - Z → A first term: `ZWD` (after filtering, `zygote` was removed)
- Pagination: `pageSize` is 100; the `#load-more` button now shows the remaining count on first load (e.g. `تحميل المزيد (7634)` / `Load more (7634)` / `Charger plus (7634)`), and updates after each click.
- Audio uses Web Speech API or Capacitor TTS; in the VM the audio may not play, but the buttons should not throw console errors.
- Card action buttons (from left in LTR):
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

- `sw.js` is currently on cache **`dross-v74`** and uses `new Request(url, { cache: 'reload' })` during `cache.addAll()` to force fresh network fetches.
- When testing SW updates, use a fresh incognito/profile. You can inspect the active cache with:
  ```js
  (async () => { console.log(await caches.keys()); })();
  ```
- If `data/manifest.js` or any `data/stage*.js` file is missing, the install step fails and `dross-v74` will not activate.
