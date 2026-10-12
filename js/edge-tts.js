/* EdgeTTS — better TTS over the internet, with graceful fallback.
 *
 * Two internet sources, picked automatically:
 *  1. Native Capacitor plugin "EdgeTTS" (APK only): real Microsoft neural
 *     voices (e.g. fr-FR-DeniseNeural), synthesized to a cache file.
 *  2. ResponsiveVoice getvoice.php (web/PWA): playable MP3 URL, no key.
 *
 * API:
 *   EdgeTTS.enabled()        -> bool (persisted in localStorage 'edge_tts')
 *   EdgeTTS.setEnabled(v)
 *   EdgeTTS.supported()      -> enabled && !down && (plugin || Audio) && online
 *   EdgeTTS.audio(text,lang) -> Promise<{url}> (cached, deduped)
 *   EdgeTTS.play(text,lang)  -> Promise resolving when playback ends
 *   EdgeTTS.playUrl(url)     -> same for a cached URL
 *   EdgeTTS.stop()           -> pause current audio
 *   EdgeTTS.down             -> true after a failure (session only)
 *   EdgeTTS.voices/rates     -> {fr,ar,en} (user-overridable via openSettings())
 *   EdgeTTS.openSettings()   -> speech settings sheet (voice + speed per lang)
 */
(function () {
  'use strict';

  var DEFAULT_VOICES = { fr: 'fr-FR-DeniseNeural', ar: 'ar-SY-AmanyNeural', en: 'en-US-JennyNeural' };
  var DEFAULT_RATES = { fr: -8, ar: 0, en: 0 };

  /* Curated neural voices per UI language — Edge names also used by the web
   * preview; on web (ResponsiveVoice fallback) the choice is ignored. */
  var VOICE_OPTIONS = {
    fr: [
      'fr-FR-DeniseNeural', 'fr-FR-EloiseNeural', 'fr-FR-VivienneMultilingualNeural',
      'fr-FR-HenriNeural', 'fr-FR-RemyMultilingualNeural',
      'fr-FR-CelesteMultilingualNeural', 'fr-FR-ClaudeMultilingualNeural',
      'fr-FR-CoralieNeural', 'fr-FR-JacquelineNeural', 'fr-FR-JosephineNeural',
      'fr-FR-MauriceNeural', 'fr-FR-YvesNeural', 'fr-FR-YvetteNeural',
      'fr-CA-SylvieNeural', 'fr-CA-JeanNeural',
      'fr-BE-CharlineNeural', 'fr-BE-GerardNeural',
      'fr-CH-ArianeNeural', 'fr-CH-FabriceNeural'
    ],
    ar: [
      'ar-SY-AmanyNeural', 'ar-SY-LaithNeural',
      'ar-EG-SalmaNeural', 'ar-EG-ShakirNeural',
      'ar-SA-ZariyahNeural', 'ar-SA-HamedNeural',
      'ar-DZ-AminaNeural', 'ar-DZ-IsmaelNeural',
      'ar-MA-MounaNeural', 'ar-MA-JamalNeural',
      'ar-TN-HediNeural', 'ar-TN-ReemNeural',
      'ar-JO-SanaNeural', 'ar-JO-TaimNeural',
      'ar-LB-LaylaNeural', 'ar-LB-RamiNeural',
      'ar-IQ-RanaNeural', 'ar-IQ-BasselNeural'
    ],
    en: [
      'en-US-JennyNeural', 'en-US-AriaNeural', 'en-US-GuyNeural',
      'en-US-AvaNeural', 'en-US-EmmaNeural', 'en-US-ChristopherNeural',
      'en-US-AndrewMultilingualNeural', 'en-US-BrianNeural', 'en-US-MichelleNeural',
      'en-GB-SoniaNeural', 'en-GB-RyanNeural',
      'en-GB-LibbyNeural', 'en-GB-MaisieNeural', 'en-GB-ThomasNeural',
      'en-AU-NatashaNeural', 'en-AU-WilliamNeural',
      'en-CA-ClaraNeural', 'en-CA-LiamNeural'
    ]
  };
  var VOICE_LABEL = {
    'fr-FR-DeniseNeural': 'Denise 🇫🇷', 'fr-FR-EloiseNeural': 'Eloise 🇫🇷',
    'fr-FR-VivienneMultilingualNeural': 'Vivienne 🇫🇷', 'fr-FR-HenriNeural': 'Henri 🇫🇷',
    'fr-FR-RemyMultilingualNeural': 'Rémy 🇫🇷',
    'fr-FR-CelesteMultilingualNeural': 'Céleste 🇫🇷', 'fr-FR-ClaudeMultilingualNeural': 'Claude 🇫🇷',
    'fr-FR-CoralieNeural': 'Coralie 🇫🇷', 'fr-FR-JacquelineNeural': 'Jacqueline 🇫🇷',
    'fr-FR-JosephineNeural': 'Joséphine 🇫🇷', 'fr-FR-MauriceNeural': 'Maurice 🇫🇷',
    'fr-FR-YvesNeural': 'Yves 🇫🇷', 'fr-FR-YvetteNeural': 'Yvette 🇫🇷',
    'fr-CA-SylvieNeural': 'Sylvie 🇨🇦', 'fr-CA-JeanNeural': 'Jean 🇨🇦',
    'fr-BE-CharlineNeural': 'Charline 🇧🇪', 'fr-BE-GerardNeural': 'Gérard 🇧🇪',
    'fr-CH-ArianeNeural': 'Ariane 🇨🇭', 'fr-CH-FabriceNeural': 'Fabrice 🇨🇭',
    'ar-SY-AmanyNeural': 'أماني 🇸🇾', 'ar-SY-LaithNeural': 'ليث 🇸🇾',
    'ar-EG-SalmaNeural': 'سلمى 🇪🇬', 'ar-EG-ShakirNeural': 'شاكر 🇪🇬',
    'ar-SA-ZariyahNeural': 'زارية 🇸🇦', 'ar-SA-HamedNeural': 'حامد 🇸🇦',
    'ar-DZ-AminaNeural': 'أمينة 🇩🇿', 'ar-DZ-IsmaelNeural': 'إسماعيل 🇩🇿',
    'ar-MA-MounaNeural': 'منى 🇲🇦', 'ar-MA-JamalNeural': 'جمال 🇲🇦',
    'ar-TN-HediNeural': 'هادي 🇹🇳', 'ar-TN-ReemNeural': 'ريم 🇹🇳',
    'ar-JO-SanaNeural': 'سناء 🇯🇴', 'ar-JO-TaimNeural': 'تيم 🇯🇴',
    'ar-LB-LaylaNeural': 'ليلى 🇱🇧', 'ar-LB-RamiNeural': 'رامي 🇱🇧',
    'ar-IQ-RanaNeural': 'رنا 🇮🇶', 'ar-IQ-BasselNeural': 'باسل 🇮🇶',
    'en-US-JennyNeural': 'Jenny 🇺🇸', 'en-US-AriaNeural': 'Aria 🇺🇸',
    'en-US-GuyNeural': 'Guy 🇺🇸', 'en-US-AvaNeural': 'Ava 🇺🇸',
    'en-US-EmmaNeural': 'Emma 🇺🇸', 'en-US-ChristopherNeural': 'Christopher 🇺🇸',
    'en-US-AndrewMultilingualNeural': 'Andrew 🇺🇸', 'en-US-BrianNeural': 'Brian 🇺🇸',
    'en-US-MichelleNeural': 'Michelle 🇺🇸',
    'en-GB-SoniaNeural': 'Sonia 🇬🇧', 'en-GB-RyanNeural': 'Ryan 🇬🇧',
    'en-GB-LibbyNeural': 'Libby 🇬🇧', 'en-GB-MaisieNeural': 'Maisie 🇬🇧',
    'en-GB-ThomasNeural': 'Thomas 🇬🇧',
    'en-AU-NatashaNeural': 'Natasha 🇦🇺', 'en-AU-WilliamNeural': 'William 🇦🇺',
    'en-CA-ClaraNeural': 'Clara 🇨🇦', 'en-CA-LiamNeural': 'Liam 🇨🇦'
  };
  var SAMPLE = {
    fr: 'Bonjour, comment allez-vous ?',
    ar: 'مرحبا، كيف حالك؟',
    en: 'Hello, how are you?'
  };

  var api = { down: false };
  var RV_TL = { fr: 'fr', ar: 'ar', en: 'en-US' };
  var RV_RATE = '0.47';
  var CACHE_MAX = 60;

  var cache = {};
  var cacheOrder = [];
  var pending = {};
  var curAudio = null;

  function ls(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function voiceOf(lang) {
    return ls('edge_voice_' + lang) || DEFAULT_VOICES[lang] || DEFAULT_VOICES.fr;
  }
  function rateOf(lang) {
    var v = parseInt(ls('edge_rate_' + lang) || '', 10);
    if (isNaN(v)) v = DEFAULT_RATES[lang] || 0;
    return (v >= 0 ? '+' : '') + v + '%';
  }
  function rateNum(lang) {
    var v = parseInt(ls('edge_rate_' + lang) || '', 10);
    return isNaN(v) ? (DEFAULT_RATES[lang] || 0) : v;
  }
  api.voiceOf = voiceOf;
  api.rateOf = rateOf;

  /* global speed multiplier set by the app's quick-speed pills (gv_speed):
   * adds (mult-1)*100 to the per-language rate, clamped to the plugin range. */
  function effRate(lang) {
    var v = rateNum(lang);
    var m = parseFloat(ls('gv_speed') || '1');
    if (!isNaN(m) && m !== 1) v = Math.round(v + (m - 1) * 100);
    v = Math.max(-90, Math.min(100, v));
    return (v >= 0 ? '+' : '') + v + '%';
  }

  function enabled() {
    try { return localStorage.getItem('edge_tts') !== '0'; } catch (e) { return true; }
  }
  function setEnabled(v) {
    try { localStorage.setItem('edge_tts', v ? '1' : '0'); } catch (e) {}
    if (v) api.down = false;
    try { document.dispatchEvent(new CustomEvent('etts-change')); } catch (e) {}
  }
  function plugin() {
    return (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.EdgeTTS) || null;
  }
  function supported() {
    if (!enabled() || api.down) return false;
    if (navigator.onLine === false) return false;
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

  function fetchAudio(text, lang) {
    var p = plugin();
    if (p) {
      return p.speak({ text: text, voice: voiceOf(lang), rate: effRate(lang) })
        .then(function (r) { return { url: fileUrl(r.path) }; })
        .catch(function () { return { url: rvUrl(text, lang) }; }); // plugin failed → internet MP3
    }
    return Promise.resolve({ url: rvUrl(text, lang) });
  }

  function touch(key) {
    var i = cacheOrder.indexOf(key);
    if (i >= 0) { cacheOrder.splice(i, 1); cacheOrder.push(key); }
  }

  function audio(text, lang) {
    lang = lang || 'fr';
    var key = lang + '|' + voiceOf(lang) + '|' + effRate(lang) + '|' + text;
    var hit = cache[key];
    if (hit) { touch(key); return Promise.resolve(hit); }
    if (pending[key]) return pending[key];
    var p = fetchAudio(text, lang).then(function (entry) {
      cache[key] = entry;
      cacheOrder.push(key);
      while (cacheOrder.length > CACHE_MAX) {
        var k = cacheOrder.shift();
        delete cache[k];
      }
      delete pending[key];
      return entry;
    }, function (err) {
      delete pending[key];
      api.down = true;
      throw err;
    });
    pending[key] = p;
    return p;
  }

  function playUrl(url) {
    return new Promise(function (resolve, reject) {
      var el;
      try { el = new Audio(url); } catch (e) { reject(e); return; }
      curAudio = el;
      var settled = false;
      function fin(err) {
        if (settled) return;
        settled = true;
        if (curAudio === el) curAudio = null;
        if (err) reject(err); else resolve();
      }
      el.onended = function () { fin(); };
      el.onerror = function () { fin(new Error('audio playback error')); };
      var pr;
      try { pr = el.play(); } catch (e) { fin(e); return; }
      if (pr && pr.catch) pr.catch(function (e) { fin(e); });
    });
  }

  function play(text, lang) {
    return audio(text, lang).then(function (a) {
      return playUrl(a.url).catch(function (e) { api.down = true; throw e; });
    });
  }

  function stop() {
    if (curAudio) {
      try { curAudio.pause(); } catch (e) {}
      curAudio = null;
    }
  }

  /* ---------- Settings sheet ---------- */
  var sheetEl = null;

  var SET_T = {
    ar: {
      title: 'إعدادات النطق',
      voice: 'الصوت', speed: 'السرعة', preview: 'تجربة',
      srcEdge: '🌐 صوت الإنترنت (Edge TTS)', srcDevice: '📱 صوت الجهاز',
      reset: 'استعادة الافتراضي', close: 'إغلاق',
      langs: { fr: '🇫🇷 الفرنسية', ar: '🇸🇾 العربية', en: '🇺🇸 الإنكليزية' },
      note: 'الصوت الطبيعي يحتاج إنترنت — بدون إنترنت يُستخدم صوت الجهاز.'
    },
    en: {
      title: 'Speech settings',
      voice: 'Voice', speed: 'Speed', preview: 'Preview',
      srcEdge: '🌐 Internet voice (Edge TTS)', srcDevice: '📱 Device voice',
      reset: 'Reset to defaults', close: 'Close',
      langs: { fr: '🇫🇷 French', ar: '🇸🇾 Arabic', en: '🇺🇸 English' },
      note: 'The neural voice needs internet — offline, the device voice is used.'
    },
    fr: {
      title: 'Réglages de la voix',
      voice: 'Voix', speed: 'Vitesse', preview: 'Écouter',
      srcEdge: '🌐 Voix internet (Edge TTS)', srcDevice: '📱 Voix de l\'appareil',
      reset: 'Valeurs par défaut', close: 'Fermer',
      langs: { fr: '🇫🇷 Français', ar: '🇸🇾 Arabe', en: '🇺🇸 Anglais' },
      note: 'La voix neurale nécessite internet — hors ligne, la voix de l\'appareil est utilisée.'
    }
  };

  function setLang() {
    var l = (document.documentElement.lang || 'ar').slice(0, 2).toLowerCase();
    return SET_T[l] || SET_T.ar;
  }

  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'style') el.style.cssText = attrs[k];
      else if (k === 'text') el.textContent = attrs[k];
      else el.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { el.appendChild(c); });
    return el;
  }

  function buildSheet() {
    var T = setLang();
    var css = [
      '.etts-ov{position:fixed;inset:0;background:rgba(3,6,18,.66);backdrop-filter:blur(4px);z-index:4000;display:flex;align-items:flex-end;justify-content:center}',
      '.etts-card{width:100%;max-width:480px;background:#101427;border:1px solid rgba(139,92,246,.25);border-bottom:none;border-radius:20px 20px 0 0;padding:1rem 1.1rem 1.4rem;color:#e8eaf6;font-family:inherit;box-shadow:0 -12px 40px rgba(0,0,0,.5);max-height:82vh;overflow-y:auto}',
      '.etts-h{display:flex;align-items:center;justify-content:space-between;margin-bottom:.7rem}',
      '.etts-h b{font-size:1rem}',
      '.etts-x{background:none;border:none;color:#9aa3c7;font-size:1.3rem;cursor:pointer;padding:.2rem .5rem}',
      '.etts-row{background:rgba(139,92,246,.07);border:1px solid rgba(139,92,246,.15);border-radius:14px;padding:.7rem .8rem;margin-bottom:.7rem}',
      '.etts-row>div{display:flex;align-items:center;gap:.6rem;margin-top:.5rem}',
      '.etts-row>div:first-child{margin-top:0}',
      '.etts-lab{font-weight:800;font-size:.92rem;flex:1}',
      '.etts-mini{font-size:.72rem;color:#9aa3c7;width:4.2rem;flex:none}',
      '.etts-sel{flex:1;background:#0b0f22;color:#e8eaf6;border:1px solid rgba(139,92,246,.3);border-radius:10px;padding:.45rem .55rem;font-size:.85rem;font-family:inherit}',
      '.etts-range{flex:1;accent-color:#8b5cf6}',
      '.etts-val{width:3rem;text-align:center;font-size:.8rem;color:#c4b5fd;font-weight:700;flex:none}',
      '.etts-pv{background:linear-gradient(135deg,#8b5cf6,#6366f1);border:none;color:#fff;border-radius:10px;padding:.42rem .7rem;font-size:.85rem;cursor:pointer;flex:none}',
      '.etts-pv:disabled{opacity:.5}',
      '.etts-note{font-size:.72rem;color:#9aa3c7;text-align:center;margin:.3rem 0 .8rem}',
      '.etts-foot{display:flex;gap:.6rem}',
      '.etts-btn{flex:1;border:1px solid rgba(139,92,246,.3);background:rgba(139,92,246,.12);color:#e8eaf6;border-radius:12px;padding:.6rem;font-size:.88rem;font-weight:700;cursor:pointer;font-family:inherit}',
      '.etts-src{display:flex;gap:.55rem;margin-bottom:.8rem}',
      '.etts-src button{flex:1;border-radius:12px;padding:.55rem .4rem;border:1px solid rgba(139,92,246,.3);background:rgba(139,92,246,.08);color:#c4b5fd;font-weight:800;font-size:.82rem;cursor:pointer;font-family:inherit}',
      '.etts-src button.on{background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;border-color:transparent;box-shadow:0 4px 16px rgba(139,92,246,.4)}',
      '.etts-chips{display:flex;gap:.4rem;margin-top:.5rem}',
      '.etts-chip{flex:1;border-radius:999px;padding:.32rem .2rem;border:1px solid rgba(139,92,246,.3);background:rgba(139,92,246,.08);color:#c4b5fd;font-weight:800;font-size:.72rem;cursor:pointer;font-family:inherit}',
      '.etts-chip.on{background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;border-color:transparent}',
      '.etts-dim{opacity:.45;pointer-events:none}'
    ].join('\n');

    var ov = h('div', { 'class': 'etts-ov' });
    var card = h('div', { 'class': 'etts-card' });
    ov.appendChild(card);
    card.appendChild(h('style', { text: css }));

    var closeBtn = h('button', { 'class': 'etts-x', text: '✕' });
    closeBtn.onclick = function () { ov.remove(); };
    card.appendChild(h('div', { 'class': 'etts-h' }, [
      h('b', { text: T.title }), closeBtn
    ]));

    var langRows = h('div', {});
    var edgeB = h('button', { text: T.srcEdge });
    var devB = h('button', { text: T.srcDevice });
    function paintSrc() {
      var on = enabled();
      try { document.dispatchEvent(new CustomEvent('etts-change')); } catch (e) {}
      edgeB.className = on ? 'on' : '';
      devB.className = on ? '' : 'on';
      langRows.className = on ? '' : 'etts-dim';
    }
    edgeB.onclick = function () { api.setEnabled(true); paintSrc(); };
    devB.onclick = function () { api.setEnabled(false); paintSrc(); };
    card.appendChild(h('div', { 'class': 'etts-src' }, [edgeB, devB]));
    card.appendChild(langRows);

    ['fr', 'ar', 'en'].forEach(function (lang) {
      var row = h('div', { 'class': 'etts-row' });
      row.appendChild(h('div', {}, [h('span', { 'class': 'etts-lab', text: T.langs[lang] })]));

      var sel = h('select', { 'class': 'etts-sel' });
      VOICE_OPTIONS[lang].forEach(function (v) {
        var o = h('option', { value: v, text: VOICE_LABEL[v] || v });
        if (v === voiceOf(lang)) o.selected = true;
        sel.appendChild(o);
      });
      sel.onchange = function () { lsSet('edge_voice_' + lang, sel.value); };
      row.appendChild(h('div', {}, [h('span', { 'class': 'etts-mini', text: T.voice }), sel]));

      var val = h('span', { 'class': 'etts-val' });
      var rng = h('input', { 'class': 'etts-range', type: 'range', min: '-50', max: '50', step: '5' });
      rng.value = String(rateNum(lang));
      val.textContent = rateOf(lang);
      rng.oninput = function () {
        lsSet('edge_rate_' + lang, rng.value);
        val.textContent = rateOf(lang);
      };
      var pv = h('button', { 'class': 'etts-pv', text: '▶ ' + T.preview });
      pv.onclick = function () {
        pv.disabled = true;
        play(SAMPLE[lang], lang).catch(function () {}).then(function () { pv.disabled = false; });
      };
      row.appendChild(h('div', {}, [h('span', { 'class': 'etts-mini', text: T.speed }), rng, val, pv]));

      // common speed presets
      var presets = [[-50, '×0.5'], [-25, '×0.75'], [0, '×1'], [25, '×1.25'], [50, '×1.5']];
      var chips = h('div', { 'class': 'etts-chips' });
      presets.forEach(function (pr) {
        var c = h('button', { 'class': 'etts-chip', text: pr[1] });
        if (rateNum(lang) === pr[0]) c.classList.add('on');
        c.onclick = function () {
          rng.value = String(pr[0]);
          lsSet('edge_rate_' + lang, rng.value);
          val.textContent = rateOf(lang);
          chips.querySelectorAll('.etts-chip').forEach(function (x) { x.classList.remove('on'); });
          c.classList.add('on');
        };
        chips.appendChild(c);
      });
      row.appendChild(chips);

      langRows.appendChild(row);
    });
    paintSrc();

    card.appendChild(h('div', { 'class': 'etts-note', text: T.note }));

    var reset = h('button', { 'class': 'etts-btn', text: '↺ ' + T.reset });
    reset.onclick = function () {
      ['fr', 'ar', 'en'].forEach(function (l) {
        try { localStorage.removeItem('edge_voice_' + l); localStorage.removeItem('edge_rate_' + l); } catch (e) {}
      });
      ov.remove();
      openSettings();
    };
    var done = h('button', { 'class': 'etts-btn', text: T.close });
    done.onclick = function () { ov.remove(); };
    card.appendChild(h('div', { 'class': 'etts-foot' }, [reset, done]));

    ov.onclick = function (e) { if (e.target === ov) ov.remove(); };
    return ov;
  }

  function openSettings() {
    if (sheetEl && sheetEl.parentNode) { sheetEl.remove(); }
    sheetEl = buildSheet();
    document.body.appendChild(sheetEl);
  }

  api.enabled = enabled;
  api.setEnabled = setEnabled;
  api.openSettings = openSettings;
  api.supported = supported;
  api.audio = audio;
  api.play = play;
  api.playUrl = playUrl;
  api.stop = stop;
  window.EdgeTTS = api;
})();
