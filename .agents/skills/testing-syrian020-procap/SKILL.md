---
name: Test Syrian020 Zeek PWA
description: How to end-to-end test the standalone Zeek PWA at zeek/index.html in Chrome for Testing.
---

## Devin Secrets Needed

None.

## Local server

The app is static files only. Serve the repo root with:

```bash
python3 -m http.server 8080
```

The relevant page is:

- `http://localhost:8080/zeek/index.html`

**Note for media tests:** `python3 -m http.server` does not respond with `Accept-Ranges: bytes`, so Chrome may be slow to start loading a direct MP4/WebM. The video still loads once the full response is received. For faster local video tests, run a range-supporting server for the media asset or use small files.

**Note for caption/video tests:** For `<video>` seeking to work reliably in Chrome, the media server must support `Range` requests. If you serve the fixture from `python3 -m http.server`, `video.currentTime` may not update and captions will not progress. Serve test MP4s from a simple range-aware server such as `/tmp/range_server.py` on a second port (e.g. `http://localhost:8090/test-video.mp4`).

## Browser launch

`~/.local/bin/google-chrome` is a CDP wrapper, not the real binary. The actual Chrome for Testing binary is under `/opt/.devin/chrome/`, e.g.:

```bash
/opt/.devin/chrome/chrome/linux-137.0.7118.2/chrome-linux64/chrome \
  --no-sandbox --disable-gpu --no-first-run --no-default-browser-check \
  --user-data-dir=/tmp/chrome-zeek-test --incognito --start-maximized \
  --remote-debugging-port=29229 --remote-allow-origins='*' \
  http://localhost:8080/zeek/index.html
```

Use a fresh `--user-data-dir` and `--incognito` when testing service-worker or storage isolation, otherwise cached `zeek-v*` data and old lessons may affect the page.

## Build Zeek APK

```bash
export ANDROID_HOME=/home/ubuntu/android-sdk
USE_ALIYUN=1 ./build-zeek-apk.sh
# APK: android/app/build/outputs/apk/debug/app-debug.apk
```

If Maven Central returns 429, the `USE_ALIYUN=1` flag uses Aliyun mirrors via `init.gradle`.

## Known environment quirks

- The VNC display is 1600x1200; Chrome maximizes to that size. Client coordinates from `getBoundingClientRect()` must be offset by the browser chrome height (`window.outerHeight - window.innerHeight`), typically ~192 px.
- The `computer` mouse-click actions may not register in this environment. Use `xdotool mousemove <x> <y> click 1` from `exec`, passing actual screen coordinates (`rect.left + rect.width/2 + window.screenX`, `rect.top + rect.height/2 + window.screenY + chromeOffset`).
- The app is RTL Arabic by default (`<html lang="ar" dir="rtl">`). Language buttons are `.lang-btn[data-lang="ar|en|fr"]`.
- `localStorage` keys use the `zeek_` prefix (`zeek_lessons`, `zeek_ui_lang`, `zeek_theme`, `zeek_favs`, `zeek_notes`); the service-worker cache is `zeek-v6` for the current captions/media build.
- Chrome for Testing may crash when opening Google AI Mode (`udm=50`) links. To verify the Google AI button, either override `window.open` to capture the generated URL, or let it open and accept the crash risk.
- The test VM typically has no `speechSynthesis` voices, so TTS buttons silently do nothing by default. To verify the TTS/loop UI feedback path, inject a fake voice (`window.speechSynthesis.getVoices = () => [{ name: 'Fake', lang: 'fr-FR', default: false, localService: true, voiceURI: '' }]`) and optionally make `speechSynthesis.speak` a no-op so the highlight state persists long enough to observe.
- Testing the file picker for import requires the hidden `<input id="import-file" type="file">` to be visible before `xdotool` can click it. Use a single `browser_console` script to set `display:block; position:fixed; ...` on the input, then click it with `xdotool`.
- Export downloads are saved through Chrome's save dialog and may appear as a temporary `.org.chromium.Chromium.XXXX` file in `~/Downloads` before the user confirms. For test evidence, capture that temp file immediately after triggering the export.
- `importLessons()` replaces the entire `LESSONS` array, then `ensureBuiltInLesson()` re-adds the protected Bienvenue lesson. Any media or other edits made to the built-in Bienvenue *before* an import will be lost unless the imported JSON itself includes the updated Bienvenue lesson.
- For transient UI elements (browser `confirm()` dialogs, `showToast()` toasts), the `computer` screenshot capture may wait too long and miss them. Use `import -window root /tmp/ss.png` directly after the action for reliable capture.
- The in-app `browser_console` tool may fail to connect to Chrome CDP in some sessions. A reliable fallback is to install `websocket-client` and drive `Runtime.evaluate` over `webSocketDebuggerUrl` from a Python script.
- The media-modal remove button (`#btn-remove-media`) and note-clear button both use `data-t="delete"`. There is no `delete` key in `TRANSLATIONS`, so `t()` falls back to the raw key and the button label renders as lowercase `delete` in every language. The click handler still works correctly.

## Quick end-to-end check

1. Open `http://localhost:8080/zeek/index.html` in a fresh incognito Chrome profile.
2. Assert `html.dir === 'rtl'`, `html.lang === 'ar'`, library title is `المكتبة`, and the Bienvenue lesson card appears.
3. Toggle `#btn-theme` and assert `data-theme` switches between dark and light and the icon changes.
4. Switch languages AR → EN → FR and assert `dir`, `lang`, titles, placeholders, and action-bar labels update.
5. Add a folder with a trilingual title, then inside it add a lesson with pipe-delimited phrases such as `Bonjour | مرحبا | Hello`.
6. Open the lesson and assert `.line.fr` has `dir="ltr"`, `.line.ar` has `dir="rtl"`, `.line.en` has `dir="ltr"`, with matching text.
7. Click a speak/loop button and verify the phrase card gets `.playing` and the active line gets `.active`.
8. Click `.ai-btn` and verify a new tab is opened to a Google search URL containing `udm=50` and the phrase text.
9. Click a phrase's media button (📷), upload an image or paste a video/YouTube URL, and verify a `.phrase-media` element appears clearly below the phrase.
10. Click `#btn-export`, confirm the `zeek-lessons.json` download, and inspect the JSON for the built-in Bienvenue lesson plus the custom folder/lesson with `p.media`.
11. Import a JSON file via the `label[for="import-file"]` picker and verify the new library state.
12. Confirm `Object.keys(localStorage)` contains only `zeek_*` keys.
