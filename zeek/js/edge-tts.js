/* EdgeTTS — better TTS over the internet, with graceful fallback.
 *
 * Internet sources tried in order (per session):
 *  1. Native Capacitor plugin "EdgeTTS" (APK only): real Microsoft neural
 *     voices (e.g. fr-FR-DeniseNeural), synthesized to a cache file.
 *  2. ResponsiveVoice getvoice.php: playable MP3 URL, no key needed.
 * If every internet source fails, callers should fall back to device TTS.
 * A failed source is skipped for REVIVE_MS before being retried, so a
 * transient outage does not cost a slow timeout on every tap.
 *
 * API:
 *   EdgeTTS.enabled()        -> bool (persisted in localStorage 'edge_tts')
 *   EdgeTTS.setEnabled(v)
 *   EdgeTTS.supported()      -> enabled && online && an alive source exists
 *   EdgeTTS.audio(text,lang) -> Promise<{url}> (cached, deduped)
 *   EdgeTTS.play(text,lang)  -> Promise resolving when playback ends
 *   EdgeTTS.playUrl(url)     -> same for a cached URL
 *   EdgeTTS.stop()           -> pause current audio
 *   EdgeTTS.down             -> true while every source is marked dead
 *   EdgeTTS.lastError        -> aggregated reason of the last full failure
 *   EdgeTTS.voices/rates     -> {fr,ar,en}
 */
(function () {
  'use strict';

  var api = {
    down: false,
    lastError: '',
    voices: {
      fr: 'fr-FR-DeniseNeural', ar: 'ar-SY-AmanyNeural', en: 'en-US-JennyNeural',
      es: 'es-ES-ElviraNeural', de: 'de-DE-KatjaNeural', pt: 'pt-PT-RaquelNeural',
      ru: 'ru-RU-SvetlanaNeural', fa: 'fa-IR-DilaraNeural', tr: 'tr-TR-EmelNeural',
      it: 'it-IT-ElsaNeural', nl: 'nl-NL-ColetteNeural', zh: 'zh-CN-XiaoxiaoNeural',
      ja: 'ja-JP-NanamiNeural', ko: 'ko-KR-SunHiNeural', el: 'el-GR-AthinaNeural',
      ur: 'ur-PK-UzmaNeural'
    },
    rates: {
      fr: '-8%', ar: '0%', en: '0%', es: '0%', de: '0%', pt: '0%',
      ru: '0%', fa: '0%', tr: '0%', it: '0%', nl: '0%', zh: '0%',
      ja: '0%', ko: '0%', el: '0%', ur: '0%'
    }
  };
  var RV_TL = { fr: 'fr', ar: 'ar', en: 'en-US', es: 'es', de: 'de', pt: 'pt', ru: 'ru', fa: 'fa', tr: 'tr', it: 'it', nl: 'nl', zh: 'zh-CN', ja: 'ja', ko: 'ko', el: 'el', ur: 'ur' };
  var RV_RATE = '0.47';
  var CACHE_MAX = 60;
  var FETCH_TIMEOUT_MS = 25000;
  var PLAY_START_TIMEOUT_MS = 15000;
  var REVIVE_MS = 120000;

  var cache = {};
  var cacheOrder = [];
  var pending = {};
  var curAudio = null;
  var curFin = null;
  var deadSrc = {}; // source name -> timestamp of last failure

  function stoppedErr() { var e = new Error('stopped'); e.stopped = true; return e; }

  function enabled() {
    try { return localStorage.getItem('edge_tts') !== '0'; } catch (e) { return true; }
  }
  function setEnabled(v) {
    try { localStorage.setItem('edge_tts', v ? '1' : '0'); } catch (e) {}
    if (v) { api.down = false; api.lastError = ''; deadSrc = {}; }
  }
  function plugin() {
    return (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.EdgeTTS) || null;
  }
  function reviveDue() {
    var newest = 0;
    for (var k in deadSrc) { if (deadSrc[k] > newest) newest = deadSrc[k]; }
    return !!newest && (Date.now() - newest) > REVIVE_MS;
  }
  function aliveSrcs() {
    var now = Date.now();
    var out = [];
    if (plugin() && !(deadSrc.edge && now - deadSrc.edge < REVIVE_MS)) out.push('edge');
    if (!(deadSrc.rv && now - deadSrc.rv < REVIVE_MS)) out.push('rv');
    return out;
  }
  function supported() {
    if (!enabled()) return false;
    if (navigator.onLine === false) return false;
    if (api.down) {
      if (reviveDue()) { api.down = false; deadSrc = {}; }
      else return false;
    }
    return !!plugin() || typeof Audio !== 'undefined';
  }

  function rvUrl(text, lang) {
    return 'https://responsivevoice.org/responsivevoice/getvoice.php?text=' + encodeURIComponent(text) +
      '&tl=' + (RV_TL[lang] || 'fr') + '&sv=g1&vn=&pitch=0.5&rate=' + RV_RATE + '&vol=1&gender=female';
  }

  function fileUrl(path) {
    if (window.Capacitor && window.Capacitor.convertFileSrc) {
      return window.Capacitor.convertFileSrc('file://' + path);
    }
    return 'file://' + path;
  }

  function errText(e) {
    if (!e) return 'unknown';
    var s = e.message || e.errorMessage || e;
    return String(s).slice(0, 140);
  }

  function fetchSource(src, text, lang) {
    if (src === 'edge') {
      var p = plugin();
      if (!p) return Promise.reject(new Error('no EdgeTTS plugin'));
      var call;
      try {
        call = p.speak({ text: text, voice: api.voices[lang] || api.voices.fr, rate: api.rates[lang] || '+0%' });
      } catch (e) {
        return Promise.reject(e);
      }
      var timeout = new Promise(function (_, rej) {
        setTimeout(function () { rej(new Error('plugin timeout')); }, FETCH_TIMEOUT_MS);
      });
      return Promise.race([call, timeout]).then(function (r) {
        return { url: fileUrl(r.path), src: 'edge' };
      });
    }
    return Promise.resolve({ url: rvUrl(text, lang), src: 'rv' });
  }

  function touch(key) {
    var i = cacheOrder.indexOf(key);
    if (i >= 0) { cacheOrder.splice(i, 1); cacheOrder.push(key); }
  }
  function put(key, entry) {
    cache[key] = entry;
    cacheOrder.push(key);
    while (cacheOrder.length > CACHE_MAX) {
      var k = cacheOrder.shift();
      delete cache[k];
    }
  }
  function keyFor(text, lang) {
    return lang + '|' + (api.voices[lang] || '') + '|' + (api.rates[lang] || '') + '|' + text;
  }

  // Fetch a playable URL: tries the remembered-good source first, then
  // whatever is alive. Playback happens in play(); a cached URL is only a
  // fetch cache — play() re-verifies it and falls through on error.
  function audio(text, lang) {
    lang = lang || 'fr';
    var key = keyFor(text, lang);
    var hit = cache[key];
    if (hit) { touch(key); return Promise.resolve(hit); }
    if (pending[key]) return pending[key];
    var srcs = aliveSrcs();
    if (!srcs.length) return Promise.reject(new Error(api.lastError || 'edge tts unavailable'));
    var i = 0;
    function attempt() {
      if (i >= srcs.length) return Promise.reject(new Error('no source produced audio'));
      var src = srcs[i++];
      return fetchSource(src, text, lang).then(function (entry) {
        entry.src = src;
        delete pending[key];
        put(key, entry);
        return entry;
      }, function () {
        return attempt();
      });
    }
    var p = attempt();
    pending[key] = p;
    return p;
  }

  function playUrl(url) {
    return new Promise(function (resolve, reject) {
      var el;
      try { el = new Audio(); } catch (e) { reject(e); return; }
      curAudio = el;
      var settled = false, watchdog = null;
      function arm(ms) {
        if (watchdog) clearTimeout(watchdog);
        watchdog = setTimeout(function () { fin(new Error('audio timeout')); }, ms);
      }
      function fin(err) {
        if (settled) return;
        settled = true;
        if (watchdog) clearTimeout(watchdog);
        if (curFin === fin) curFin = null;
        if (curAudio === el) curAudio = null;
        if (err) reject(err); else resolve();
      }
      curFin = fin;
      arm(PLAY_START_TIMEOUT_MS);
      el.onloadedmetadata = function () {
        var d = (isFinite(el.duration) && el.duration > 0) ? el.duration * 1000 : 60000;
        arm(d + 10000);
      };
      el.onended = function () { fin(); };
      el.onerror = function () { fin(new Error('audio playback error')); };
      el.src = url;
      var pr;
      try { pr = el.play(); } catch (e) { fin(e); return; }
      if (pr && pr.catch) pr.catch(function (e) { fin(e); });
    });
  }

  // Full chain: for each source (remembered-good first, then the rest in
  // order), fetch its URL and play it. First source that plays to the end
  // wins and is cached for this text. If all fail, api.down + lastError.
  function play(text, lang) {
    lang = lang || 'fr';
    var key = keyFor(text, lang);
    var hit = cache[key];
    var seq = [];
    if (hit) seq.push(hit.src);
    var rest = aliveSrcs();
    for (var i = 0; i < rest.length; i++) { if (!hit || rest[i] !== hit.src) seq.push(rest[i]); }
    if (!seq.length) {
      api.down = true;
      return Promise.reject(new Error(api.lastError || 'edge tts unavailable'));
    }
    var errors = [];
    var idx = 0;
    function attempt() {
      if (idx >= seq.length) {
        api.down = true;
        api.lastError = errors.join(' | ') || 'edge tts failed';
        if (hit) delete cache[key];
        return Promise.reject(new Error(api.lastError));
      }
      var src = seq[idx++];
      var fetch = (hit && hit.src === src) ? Promise.resolve(hit) : fetchSource(src, text, lang);
      return fetch.then(function (entry) {
        return playUrl(entry.url).then(function () {
          api.down = false;
          entry.src = src;
          if (entry !== hit) put(key, entry);
          return entry;
        });
      }).catch(function (e) {
        if (e && e.stopped) throw e; // user stop: no deadSrc, no retry
        deadSrc[src] = Date.now();
        if (hit && hit.src === src) delete cache[key];
        errors.push(src + ': ' + errText(e));
        return attempt();
      });
    }
    return attempt();
  }

  function stop() {
    if (curAudio) {
      try { curAudio.pause(); } catch (e) {}
      curAudio = null;
    }
    if (curFin) curFin(stoppedErr());
  }

  api.enabled = enabled;
  api.setEnabled = setEnabled;
  api.supported = supported;
  api.audio = audio;
  api.play = play;
  api.playUrl = playUrl;
  api.stop = stop;
  window.EdgeTTS = api;
})();
