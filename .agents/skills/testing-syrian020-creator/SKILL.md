---
name: testing-syrian020-creator
description: How to end-to-end test the Motsy Creator lesson builder (creator.html) in Chrome and build its separate APK.
---

## Devin Secrets Needed

None.

## Local server

Serve the repo root with:

```bash
cd /home/ubuntu/repos/Syrian020
python3 -m http.server 8080
```

The page is at `http://localhost:8080/creator.html`.

## Browser launch

Use the actual Chrome for Testing binary (not `~/.local/bin/google-chrome`), with a clean profile on port `29229`:

```bash
rm -rf /tmp/creator-chrome
mkdir -p /tmp/creator-chrome
/opt/.devin/chrome/chrome/linux-137.0.7118.2/chrome-linux64/chrome-wrapper \
  --no-sandbox --disable-gpu \
  --remote-debugging-port=29229 --remote-allow-origins='*' \
  --user-data-dir=/tmp/creator-chrome \
  --no-first-run --no-default-browser-check \
  --start-maximized http://localhost:8080/creator.html
```

The VNC display is `:1` but Chrome will use `:0` from its own launch. For `xdotool` commands, set:

```bash
export DISPLAY=:0
export XAUTHORITY=/home/ubuntu/.Xauthority
```

## Known environment quirks

- The Chrome for Testing and unsupported-flag banners take about 190–200 px of vertical space. Compute the click offset with `window.outerHeight - window.innerHeight` (~192 px) plus `getBoundingClientRect()`.
- `xdotool` clicks are more reliable than the `computer` tool for this app; use CDP to get element rects and convert to screen coordinates.
- Arabic text cannot be typed reliably with `xdotool` in this environment (glyphs may be reversed). Use CDP/JS to set `.value` and dispatch an `input` event, or paste from the clipboard if `xclip`/`xsel` are available.
- The hidden `<input type="file">` inside each phrase card is triggered by the `.attach-media` button. To drive the file chooser with `xdotool`: click the button, press `Ctrl+L`, type the absolute path (e.g., `/home/ubuntu/repos/Syrian020/icon-512.png`), press `Return`, then click `Open`.

## Lesson persistence

Lessons and media blobs are stored in IndexedDB (`MotsyCreatorDB`) and `localStorage` for theme/language. Use a persistent `--user-data-dir` (not incognito) for reload persistence tests.

## UI-language / labels

`applyTranslations()` is called after every `renderLessonEditor()` and `renderLessonList()`, so field labels and media buttons should render in the active UI language immediately. Switch between EN/FR/AR to verify direction and labels.

## APK build

```bash
cd /home/ubuntu/repos/Syrian020
USE_ALIYUN=1 ./build-creator-apk.sh
```

The script swaps `capacitor-creator.config.json` into `capacitor.config.json`, syncs, and restores the original config on exit. The debug APK lands at `android/app/build/outputs/apk/debug/app-debug.apk`. The application id is `com.syrian020.motsy.creator`.
