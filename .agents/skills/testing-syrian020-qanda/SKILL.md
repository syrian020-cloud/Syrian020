---
name: testing-syrian020-qanda
description: How to run and end-to-end test the Syrian020 Q&A driving-test page (qanda.html) in Chrome and build its Capacitor APK.
---

## Devin Secrets Needed

None.

## Local server

Serve the repo root:

```bash
python3 -m http.server 8080
```

Relevant URLs:

- `http://localhost:8080/qanda.html` — Q&A viewer (RTL Arabic, 161 French Q&A pairs)
- `http://localhost:8080/data/qanda.js` — the dataset

## Browser launch

Use the Chrome for Testing binary under `/opt/.devin/chrome/` (not `~/.local/bin/google-chrome`, which is a wrapper), e.g.:

```bash
/opt/.devin/chrome/chrome/linux-137.0.7118.2/chrome-linux64/chrome \
  --no-sandbox --disable-gpu --remote-debugging-port=29229 \
  --remote-allow-origins='*' \
  --user-data-dir=/tmp/chromev137-qanda \
  --no-first-run --no-default-browser-check \
  --incognito http://localhost:8080/qanda.html
```

Use a fresh `--user-data-dir` or incognito to avoid stale service-worker caches.

## CDP helper

The `browser_console` tool may fail to connect. Install `websocket-client` and use a small Python helper to evaluate JS over the DevTools WebSocket:

```python
pip3 install websocket-client
python3 /tmp/cdp_eval.py "document.querySelectorAll('.qa-card').length"
```

## Known environment quirks

- The test VM has no French Web Speech voices, so `window.speechSynthesis.getVoices()` returns an empty list. To verify the loop-count logic, monkeypatch `speechSynthesis.speak` and call the utterance `onend` callback immediately:

  ```js
  window.__speakCount = 0;
  window.speechSynthesis.speak = function(u) {
    window.__speakCount++;
    setTimeout(() => u.onend && u.onend(), 10);
  };
  ```

- The page is RTL, so the visual right-to-left order of filter chips / action buttons does not match the DOM order. Use `getBoundingClientRect()` plus `window.screenX`/`screenY` and the Chrome chrome offset (`window.outerHeight - window.innerHeight`, typically ~192px) to derive click coordinates, or drive clicks via CDP/JS.

- `localStorage` persists `qanda_rate` and `qanda_loopcount` between sessions. Use fresh `--user-data-dir` for a clean default.

- The Q&A page registers `sw.js`, but the existing `sw.js` (dross-v1) caches only `index.html` and `manifest.json`, which can cause a stale service worker on repeated loads. Use incognito/fresh profile when testing.

## APK build

The provided `build-qanda-apk.sh` depends on repo-root files that may not be present in every branch:

- `package.json`
- `capacitor.config.json`
- `icon-192.png` and `icon-512.png`

If these are missing, `npx cap sync` or the script's `cp` steps will fail. If they are present, run:

```bash
USE_ALIYUN=1 ./build-qanda-apk.sh
```

`init.gradle` (Aliyun mirrors) is at the repo root and can be passed as `--init-script ../init.gradle` from the `android/` directory. The Gradle build itself (`cd android && ./gradlew assembleDebug`) can succeed independently even when the wrapper script fails.

## APK verification without an emulator

If no Android emulator/system image is installed, the runtime behavior cannot be verified. Useful shell-only checks:

```bash
unzip -l android/app/build/outputs/apk/debug/app-debug.apk | grep -E 'index.html|qanda'
/home/ubuntu/android-sdk/build-tools/34.0.0/aapt2 dump permissions android/app/build/outputs/apk/debug/app-debug.apk
```

Confirm package `com.syrian020.qanda`, `INTERNET` permission, and `assets/public/index.html` matching `qanda.html`.

## Dataset quick checks

```js
global.window = {};
require('./data/qanda.js');
const d = global.window.QANDA_DATA;
console.log(d.length, d.reduce((m, x) => { m[x.cat] = (m[x.cat] || 0) + 1; return m; }, {}));
```

Expected 161 items across `VE` (vehicle checks), `QSER` (road safety), and `1ers secours` (first aid).

## What to test

1. Page load: 161 cards, Arabic title, four filter chips with counts.
2. Search: substring match on question/answer/category; clear returns 161.
3. Category filters: click each chip and confirm card count.
4. Loop TTS: monkeypatch `speechSynthesis.speak`, click a question and an answer loop button, confirm the selected loop count (default 3) and UI active/reset states; test the `🔇` stop button.
5. Google AI link: `href` must start with `https://www.google.com/search?udm=50&q=` and contain the Arabic translation/analysis prompt plus the French text.
6. APK: build succeeds and `index.html` inside the APK matches `qanda.html`; runtime on emulator only if emulator available.
