// fwords — empty French-Arabic-English dictionary with user-added words
(function () {
    "use strict";

    const STORAGE_KEY = "fwordsData_v1";
    const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    function uid() {
        return Math.random().toString(36).slice(2) + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    }

    const SAMPLE_TEMPLATES = {
        1: `chercher
العربية: يبحث عن
English: to look for

Exemples:
Je cherche mes clés.
أبحث عن مفاتيحي.
I’m looking for my keys.`,

        2: `chercher | يبحث عن | to look for
Type: Verbe
Niveau: A1
Prononciation: /ʃɛʁ.ʃe/

Exemples :

1. Je cherche mes clés.
أبحث عن مفاتيحي.
I’m looking for my keys.`,

        3: `CHERCHER
🔹 المعنى: يبحث عن
🔹 English: to look for
🔹 النوع: فعل
🔹 المستوى: A1

جمل يومية:

🇫🇷 Je cherche mes clés.
🇸🇦 أبحث عن مفاتيحي.
🇬🇧 I’m looking for my keys.

🇫🇷 Tu cherches quoi ?
🇸🇦 عمّ تبحث؟
🇬🇧 What are you looking for?

🇫🇷 Je cherche du travail.
🇸🇦 أبحث عن عمل.
🇬🇧 I’m looking for a job.`,

        4: `chercher | يبحث عن | to look for | verbe | A1
Exemple:
Je cherche mes clés. | أبحث عن مفاتيحي. | I’m looking for my keys.`,

        5: `🇫🇷 chercher
🇸🇦 يبحث عن
🇬🇧 to look for
🗣️ Je cherche mon téléphone.
أبحث عن هاتفي.
I’m looking for my phone.
🗣️ Je cherche du travail.
أبحث عن عمل.
I’m looking for a job.`,

        6: `chercher | يبحث عن | to look for
Présent:
je cherche | أنا أبحث
tu cherches | أنت تبحث
il/elle cherche | هو/هي يبحث
nous cherchons | نحن نبحث
vous cherchez | أنتم تبحثون
ils/elles cherchent | هم/هن يبحثون
Exemple:
Je cherche mon sac. | أبحث عن حقيبتي. | I’m looking for my bag.`,

        7: `chercher | يبحث عن | to look for
شائع مع:
chercher quelqu'un | يبحث عن شخص | look for someone
chercher quelque chose | يبحث عن شيء | look for something
chercher du travail | يبحث عن عمل | look for a job
chercher une adresse | يبحث عن عنوان | look for an address
chercher une solution | يبحث عن حل | look for a solution`,

        8: `chercher | يبحث عن | to look for
Mots liés:
trouver | يجد | to find
rechercher | يبحث عن / يبحث في | to search
recherche | بحث | search / research
Exemple:
Je cherche une solution. | أبحث عن حل. | I’m looking for a solution.`,

        9: `01. chercher
العربية: يبحث عن
English: to look for
النوع: Verbe
المستوى: A1
النطق: /ʃɛʁ.ʃe/

Exemples:
Je cherche mes clés.
أبحث عن مفاتيحي.
I’m looking for my keys.`
    };

    const TEMPLATE_LABELS = {
        1: "نموذج 1 - بسيط",
        2: "نموذج 2 - منظم",
        3: "نموذج 3 - تعليمي ⭐",
        4: "نموذج 4 - سطر واحد",
        5: "نموذج 5 - بطاقات",
        6: "نموذج 6 - تصريف",
        7: "نموذج 7 - الاستعمال",
        8: "نموذج 8 - كلمات مرتبطة",
        9: "نموذج 9 - مناسب للتطبيق"
    };

    function fillTemplate(key) {
        if (bulkInput && SAMPLE_TEMPLATES[key]) {
            bulkInput.value = SAMPLE_TEMPLATES[key];
            try { bulkInput.select(); } catch (e) {}
        }
    }

    function copyTemplate(key) {
        fillTemplate(key);
        if (navigator.clipboard && bulkInput) {
            try { navigator.clipboard.writeText(bulkInput.value); } catch (e) {}
        }
    }

    function buildTemplates() {
        if (!templatesBar) return;
        templatesBar.innerHTML = "";
        Object.keys(SAMPLE_TEMPLATES).forEach(function (k) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "template-btn";
            btn.textContent = k;
            btn.title = TEMPLATE_LABELS[k] || ("نموذج " + k);
            btn.addEventListener("click", function () { copyTemplate(k); });
            templatesBar.appendChild(btn);
        });
    }

    let data = null;
    let currentCategory = "all";
    let currentLetter = "all";
    let searchTerm = "";
    let speechRun = 0;
    let activeLoopBtn = null;
    let voices = [];
    const synth = (typeof window !== "undefined" && window.speechSynthesis) ? window.speechSynthesis : null;

    const wordList = document.getElementById("wordList");
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearch");
    const statsEl = document.getElementById("stats");
    const scrollTopBtn = document.getElementById("scrollTop");
    const letterNav = document.getElementById("letterNav");
    const categoryNav = document.getElementById("categoryNav");
    const fabAdd = document.getElementById("fabAdd");
    const addModal = document.getElementById("addModal");
    const bulkTopic = document.getElementById("bulkTopic");
    const bulkInput = document.getElementById("bulkInput");
    const importFeedback = document.getElementById("importFeedback");
    const templatesBar = document.getElementById("templatesBar");
    const escapeDiv = document.createElement("div");

    const editModal = document.getElementById("editModal");
    const editWordInput = document.getElementById("editWord");
    const editExampleInput = document.getElementById("editExample");
    const editTopicInput = document.getElementById("editTopic");
    const editTypeInput = document.getElementById("editType");
    const editLevelInput = document.getElementById("editLevel");
    const editPronInput = document.getElementById("editPron");
    const editFeedback = document.getElementById("editFeedback");
    let editingWordId = null;

    function init() {
        loadData();
        buildLetterNav();
        buildCategoryNav();
        bindEvents();
        buildTemplates();
        initAppPlugin();
        loadWebVoices();
        render();
    }

    function createEmptyData() {
        return {
            categories: LETTERS.map(function (l) {
                return { id: l, name_fr: l, name_ar: l, name_en: l, words: [] };
            }),
            totalWords: 0
        };
    }

    function loadData() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                data = JSON.parse(raw);
                validateData();
            } else {
                data = createEmptyData();
                saveData();
            }
        } catch (e) {
            data = createEmptyData();
            saveData();
        }
    }

    function validateData() {
        if (!data || !Array.isArray(data.categories)) {
            data = createEmptyData();
        }
        data.categories.forEach(function (cat) {
            if (!Array.isArray(cat.words)) cat.words = [];
            cat.words.forEach(function (w) {
                if (!w.id) w.id = uid();
                if (!w.topic) w.topic = "عام";
            });
        });
        data.totalWords = data.categories.reduce(function (sum, c) {
            return sum + (c.words ? c.words.length : 0);
        }, 0);
    }

    function saveData() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            // ignore storage errors
        }
    }

    function toast(message) {
        const t = document.createElement("div");
        t.className = "toast";
        t.textContent = message;
        document.body.appendChild(t);
        setTimeout(function () { t.remove(); }, 3000);
    }

    async function exportData() {
        try {
            const payload = JSON.stringify(data, null, 2);
            const cap = window.Capacitor;
            const isNative = cap && typeof cap.isNativePlatform === "function" && cap.isNativePlatform();
            const Plugins = cap && cap.Plugins ? cap.Plugins : {};
            const FS = isNative && Plugins.Filesystem ? Plugins.Filesystem : null;
            const SharePlugin = isNative && Plugins.Share ? Plugins.Share : null;
            if (isNative && FS && typeof FS.writeFile === "function" && SharePlugin && typeof SharePlugin.share === "function") {
                const fileName = "fwords-export.json";
                const result = await FS.writeFile({
                    path: fileName,
                    data: payload,
                    directory: "CACHE",
                    encoding: "utf8",
                    recursive: true
                });
                try {
                    await SharePlugin.share({
                        title: "fwords — تصدير القاموس",
                        dialogTitle: "مشاركة القاموس",
                        files: [result.uri]
                    });
                } catch (shareErr) {
                    toast("تم حفظ الملف لكن فشلت المشاركة: " + (shareErr.message || ""));
                }
            } else {
                const blob = new Blob([payload], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "fwords-export.json";
                document.body.appendChild(a);
                a.click();
                setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 100);
                toast("تم تصدير القاموس");
            }
        } catch (e) {
            console.error(e);
            toast("فشل التصدير: " + e.message);
        }
    }

    function importFile(e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (ev) {
            try {
                const json = JSON.parse(ev.target.result);
                if (json && Array.isArray(json.categories)) {
                    data = json;
                } else if (Array.isArray(json)) {
                    const newData = createEmptyData();
                    json.forEach(function (w) {
                        if (!w || !w.fr) return;
                        const letter = autoLetterFromWord((w.fr || "").toString()) || "A";
                        const cat = newData.categories.find(function (c) { return c.id === letter; }) || newData.categories[0];
                        cat.words.push({
                            id: w.id || uid(),
                            fr: w.fr || "",
                            ar: w.ar || "",
                            en: w.en || "",
                            ex: w.ex || "",
                            ex_ar: w.ex_ar || "",
                            ex_en: w.ex_en || "",
                            topic: w.topic || "عام",
                            type: w.type || "",
                            level: w.level || "",
                            pron: w.pron || "",
                            examples: w.examples || []
                        });
                    });
                    data = newData;
                } else {
                    throw new Error("صيغة غير مدعومة");
                }
                validateData();
                saveData();
                rebuildCategoryButtons();
                render();
                toast("تم استيراد القاموس");
            } catch (err) {
                console.error(err);
                toast("فشل الاستيراد: " + err.message);
            }
            e.target.value = "";
        };
        reader.readAsText(file);
    }

    function buildLetterNav() {
        letterNav.querySelectorAll(".letter-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                currentLetter = btn.dataset.letter;
                currentCategory = "all";
                updateActiveNav();
                render();
            });
        });
    }

    function updateActiveNav() {
        document.querySelectorAll(".letter-btn").forEach(function (b) {
            b.classList.toggle("active", b.dataset.letter === currentLetter);
        });
        document.querySelectorAll(".cat-btn").forEach(function (b) {
            b.classList.toggle("active", b.dataset.cat === currentCategory);
        });
    }

    function buildCategoryNav() {
        categoryNav.addEventListener("click", function (e) {
            const btn = e.target.closest(".cat-btn");
            if (!btn) return;
            currentCategory = btn.dataset.cat || "all";
            currentLetter = "all";
            updateActiveNav();
            render();
        });
    }

    function rebuildCategoryButtons() {
        const allBtn = categoryNav.querySelector('[data-cat="all"]');
        categoryNav.innerHTML = "";
        if (allBtn) categoryNav.appendChild(allBtn);

        const topics = new Set();
        let currentTopicExists = currentCategory === "all";
        data.categories.forEach(function (cat) {
            (cat.words || []).forEach(function (w) {
                const t = w.topic || "عام";
                topics.add(t);
                if (t === currentCategory) currentTopicExists = true;
            });
        });
        if (!currentTopicExists) currentCategory = "all";

        Array.from(topics).sort().forEach(function (t) {
            const btn = document.createElement("button");
            btn.className = "cat-btn";
            btn.dataset.cat = t;
            btn.textContent = t;
            if (currentCategory === t) btn.classList.add("active");
            categoryNav.appendChild(btn);
        });
    }

    function bindEvents() {
        let searchTimeout;
        searchInput.addEventListener("input", function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(function () {
                searchTerm = searchInput.value.trim().toLowerCase();
                clearBtn.style.display = searchTerm ? "block" : "none";
                render();
            }, 200);
        });

        clearBtn.addEventListener("click", function () {
            searchInput.value = "";
            searchTerm = "";
            clearBtn.style.display = "none";
            render();
            searchInput.focus();
        });

        const exportBtn = document.getElementById("exportBtn");
        const importBtn = document.getElementById("importBtn");
        const importFileInput = document.getElementById("importFile");
        if (exportBtn) exportBtn.addEventListener("click", exportData);
        if (importBtn && importFileInput) {
            importBtn.addEventListener("click", function () { importFileInput.click(); });
            importFileInput.addEventListener("change", importFile);
        }

        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        var scrollTicking = false;
        window.addEventListener("scroll", function () {
            if (!scrollTicking) {
                requestAnimationFrame(function () {
                    scrollTopBtn.classList.toggle("show", window.scrollY > 400);
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        }, { passive: true });

        fabAdd.addEventListener("click", openAddModal);
        document.getElementById("closeAddModal").addEventListener("click", closeAddModal);
        document.getElementById("cancelImport").addEventListener("click", closeAddModal);

        document.getElementById("importWords").addEventListener("click", importWords);
        // template icons are built by buildTemplates()

        addModal.addEventListener("click", function (e) {
            if (e.target === addModal) closeAddModal();
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                if (addModal.classList.contains("active")) closeAddModal();
                if (editModal && editModal.classList.contains("active")) closeEditModal();
            }
        });

        document.addEventListener("click", function (e) {
            if (!e.target.closest(".word-actions")) closeAllWordMenus();
        });

        if (editModal) {
            editModal.addEventListener("click", function (e) {
                if (e.target === editModal) closeEditModal();
            });
            const closeEdit = document.getElementById("closeEditModal");
            const cancelEdit = document.getElementById("cancelEdit");
            const saveEditBtn = document.getElementById("saveEdit");
            if (closeEdit) closeEdit.addEventListener("click", closeEditModal);
            if (cancelEdit) cancelEdit.addEventListener("click", closeEditModal);
            if (saveEditBtn) saveEditBtn.addEventListener("click", saveEdit);
        }

        wordList.addEventListener("click", function (e) {
            const ttsWord = e.target.closest(".tts-word");
            if (ttsWord) {
                e.stopPropagation();
                e.preventDefault();
                speakOnce([{ text: ttsWord.dataset.text, lang: ttsWord.dataset.lang || "fr-FR" }], null);
                return;
            }
            const main = e.target.closest(".word-main");
            if (main) {
                e.preventDefault();
                window.toggleLoopAll(main.dataset.fr, main.dataset.ar, main.dataset.en, main);
                return;
            }
            const imgBtn = e.target.closest(".btn-img-search");
            if (imgBtn) {
                e.preventDefault();
                openImageSearch(imgBtn.dataset.query);
                return;
            }
        });
    }

    function openAddModal() {
        addModal.classList.add("active");
        bulkTopic.value = "";
        bulkInput.value = "";
        importFeedback.textContent = "";
        bulkTopic.focus();
    }

    function closeAddModal() {
        addModal.classList.remove("active");
    }

    function findWordById(id) {
        if (!id) return null;
        for (let i = 0; i < data.categories.length; i++) {
            const cat = data.categories[i];
            for (let j = 0; j < (cat.words || []).length; j++) {
                if (cat.words[j].id === id) {
                    return { word: cat.words[j], cat: cat, index: j };
                }
            }
        }
        return null;
    }

    function deleteWord(id) {
        const found = findWordById(id);
        if (!found) return;
        if (!confirm("هل تريد حذف هذه الكلمة؟")) return;
        found.cat.words.splice(found.index, 1);
        data.totalWords = Math.max(0, data.totalWords - 1);
        saveData();
        render();
    }

    function openEditWord(id) {
        closeAllWordMenus();
        const found = findWordById(id);
        if (!found || !editModal) return;
        editingWordId = id;
        const w = found.word;
        editWordInput.value = [w.fr, w.ar, w.en].filter(Boolean).join(" | ");
        editExampleInput.value = [w.ex, w.ex_ar, w.ex_en].filter(Boolean).join(" | ");
        editTopicInput.value = w.topic || "";
        editTypeInput.value = w.type || "";
        editLevelInput.value = w.level || "";
        editPronInput.value = w.pronunciation || "";
        editFeedback.textContent = "";
        editModal.classList.add("active");
        editWordInput.focus();
    }

    function closeEditModal() {
        if (editModal) editModal.classList.remove("active");
        editingWordId = null;
    }

    function saveEdit() {
        if (!editingWordId) return;
        const found = findWordById(editingWordId);
        if (!found) return;
        const w = found.word;
        const main = parseTriField(editWordInput.value);
        const ex = parseTriField(editExampleInput.value);
        if (!main.fr && !main.ar && !main.en) {
            editFeedback.textContent = "الكلمة فارغة";
            return;
        }
        w.fr = main.fr;
        w.ar = main.ar;
        w.en = main.en;
        w.ex = ex.fr;
        w.ex_ar = ex.ar;
        w.ex_en = ex.en;
        w.topic = editTopicInput.value.trim() || "عام";
        w.type = editTypeInput.value.trim();
        w.level = editLevelInput.value.trim();
        w.pronunciation = editPronInput.value.trim();

        const newLetter = autoLetterFromWord(w.fr || w.en) || "A";
        if (newLetter !== found.cat.id) {
            found.cat.words.splice(found.index, 1);
            const newCat = data.categories.find(function (c) { return c.id === newLetter; });
            if (newCat) newCat.words.push(w);
        }

        saveData();
        render();
        closeEditModal();
    }

    function showWordMenu(id, btn) {
        const actions = btn.closest(".word-actions");
        const menu = actions ? actions.querySelector(".word-menu") : null;
        if (!menu) return;
        const alreadyOpen = menu.classList.contains("show");
        closeAllWordMenus();
        if (!alreadyOpen) menu.classList.add("show");
    }

    function closeAllWordMenus() {
        document.querySelectorAll(".word-menu.show").forEach(function (m) { m.classList.remove("show"); });
    }

    function parseTriField(value) {
        const parts = (value || "").split("|").map(function (s) { return s.trim(); });
        if (parts.length === 1) {
            return { fr: parts[0] || "", ar: "", en: "" };
        }
        if (parts.length === 2) {
            return { fr: parts[0] || "", ar: parts[1] || "", en: "" };
        }
        return { fr: parts[0] || "", ar: parts[1] || "", en: parts[2] || "" };
    }

    function autoLetterFromWord(text) {
        if (!text) return "";
        const l = getFirstLetter(text);
        if (LETTERS.indexOf(l) !== -1) return l;
        return "";
    }

    function containsArabic(text) {
        return /[\u0600-\u06FF\u0750-\u077F]/.test(text || "");
    }

    function isExampleMarkerStr(str) {
        return /^(?:Exemples?|Examples?|جمل(?:\s+يومية)?|أمثلة|شائع\s+مع|Mots\s+liés|Présent|Passé\s+composé|Imparfait|Futur)\s*(?:[:：]\s*)?$/i.test((str || "").trim());
    }

    function stripLeadingNumberPrefix(s) {
        return (s || "").replace(/^\s*\d+[\.\)\-]\s*/, "").trim();
    }

    function stripLeadingNumberAndBullets(s) {
        return (s || "").replace(/^\s*(?:\d+[\.\)\-]\s*|🔹|⭐|\s)+/, "").trim();
    }

    function stripLeadingMarkers(s) {
        if (!s) return "";
        const re = /^\s*(?:\d+[\.\)\-]\s*|🔹|⭐|\u{1F5E3}\u{FE0F}?|(?:[\u{1F1E6}-\u{1F1FF}]{2}))\s*/gu;
        let prev;
        do {
            prev = s;
            s = s.replace(re, "");
        } while (s !== prev);
        return s.trim();
    }

    function isLanguageHeader(str) {
        return /^(?:Français|Francais|French|الفرنسية|English|Anglais|الإنجليزية|Arabic|Arabe|العربية)$/i.test((str || "").trim());
    }

    function looksLikeHeading(str) {
        const first = (str || "").split("|")[0].trim();
        if (!first) return false;
        if (/[.!?؟:：]$/.test(first)) return false;
        if (isExampleMarkerStr(first)) return false;
        if (isLanguageHeader(first)) return false;
        const words = first.split(/\s+/).filter(function (w) { return w.length > 0; }).length;
        return words <= 5;
    }

    function parseMeta(line) {
        const clean = stripLeadingNumberAndBullets(line);
        const m = clean.match(/^(العربية|English|المعنى|Type|Niveau|Prononciation|النوع|المستوى|النطق|الإنجليزية|معنى|نوع|مستوى|نطق)\s*[:：]\s*(.*)$/i);
        if (!m) return null;
        const label = m[1].trim();
        const value = m[2].trim();
        const map = {
            "العربية": "ar", "المعنى": "ar", "معنى": "ar", "الترجمة": "ar",
            "English": "en", "الإنجليزية": "en", "الانجليزية": "en",
            "Type": "type", "النوع": "type", "نوع": "type",
            "Niveau": "level", "المستوى": "level", "مستوى": "level",
            "Prononciation": "pronunciation", "النطق": "pronunciation", "نطق": "pronunciation"
        };
        return { field: map[label] || "", value: value };
    }

    function parseExampleMarker(line, currentExists) {
        const trimmed = line.trim();
        if (currentExists) {
            const speakerMatch = /^\s*(?:\u{1F5E3}\u{FE0F}?)\s*(.*)$/u.exec(trimmed);
            if (speakerMatch) return { isMarker: true, clean: speakerMatch[1].trim() };
        }
        const clean = stripLeadingMarkers(trimmed);
        if (isExampleMarkerStr(clean)) return { isMarker: true, clean: "" };
        return { isMarker: false, clean: "" };
    }

    function getHeadingInfo(line) {
        const trimmed = line.trim();
        if (!trimmed) return { isHeading: false };
        const core = stripLeadingNumberAndBullets(trimmed);
        if (core.includes("|")) {
            const parts = core.split("|").map(function (s) { return s.trim(); });
            const main = { fr: parts[0] || "", ar: parts[1] || "", en: parts[2] || "" };
            if (looksLikeHeading(main.fr) && !isLanguageHeader(main.fr)) {
                const info = { isHeading: true, main: main };
                if (parts.length >= 5) { info.type = parts[3] || ""; info.level = parts[4] || ""; }
                else if (parts.length === 4) {
                    if (/^[A-C][1-2]$/i.test(parts[3])) info.level = parts[3];
                    else info.type = parts[3];
                }
                return info;
            }
        } else if (looksLikeHeading(core) && !isExampleMarkerStr(core) && !isLanguageHeader(core)) {
            return { isHeading: true, main: { fr: core, ar: "", en: "" } };
        }
        return { isHeading: false };
    }

    function parseBulkText(text) {
        const entries = [];
        if (!text) return entries;
        const lines = text.split(/\r?\n/);
        let current = null;
        let inExamples = false;
        let currentExample = null;
        let foundFirstHeading = false;
        let prevLineBlank = true;

        function flushExample() {
            if (current && currentExample) {
                const ex = { fr: currentExample.fr || "", ar: currentExample.ar || "", en: currentExample.en || "" };
                if (ex.fr || ex.ar || ex.en) current.examples.push(ex);
                currentExample = null;
            }
        }

        function flushEntry() {
            flushExample();
            if (current) entries.push(current);
            current = null;
            currentExample = null;
            inExamples = false;
        }

        function startEntry(info) {
            flushEntry();
            current = {
                main: info.main,
                type: info.type || "",
                level: info.level || "",
                pronunciation: info.pronunciation || "",
                letter: autoLetterFromWord(info.main.fr || info.main.en),
                examples: []
            };
            foundFirstHeading = true;
            inExamples = false;
            prevLineBlank = false;
        }

        function processAsExample(line) {
            inExamples = true;
            const cleanLine = stripLeadingMarkers(line);
            if (line.includes("|")) {
                const ex = parseTriField(line);
                flushExample();
                currentExample = ex;
                flushExample();
                return;
            }
            if (/^\s*\d+[\.\)\-]\s*/.test(line)) {
                flushExample();
                currentExample = { fr: cleanLine, ar: "", en: "" };
                return;
            }
            if (!currentExample) currentExample = { fr: "", ar: "", en: "" };
            if (containsArabic(cleanLine)) {
                currentExample.ar = cleanLine;
            } else {
                if (!currentExample.fr) currentExample.fr = cleanLine;
                else if (!currentExample.en) currentExample.en = cleanLine;
                else {
                    flushExample();
                    currentExample = { fr: cleanLine, ar: "", en: "" };
                }
            }
        }

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].replace(/[\r\n]/g, "").trim();
            if (!line) {
                flushExample();
                prevLineBlank = true;
                continue;
            }

            const flagMatch = line.match(/^([\u{1F1E6}-\u{1F1FF}]{2})\s*(.*)$/u);
            if (flagMatch) {
                const flag = flagMatch[1];
                const rest = flagMatch[2].trim();
                if (!current) {
                    if (flag === "\u{1F1EB}\u{1F1F7}" && looksLikeHeading(rest)) {
                        startEntry({ isHeading: true, main: { fr: rest, ar: "", en: "" } });
                    }
                    prevLineBlank = false;
                    continue;
                }
                if (!inExamples) {
                    if (flag === "\u{1F1F8}\u{1F1E6}") { current.main.ar = current.main.ar || rest; prevLineBlank = false; continue; }
                    if (flag === "\u{1F1EC}\u{1F1E7}") { current.main.en = current.main.en || rest; prevLineBlank = false; continue; }
                }
                if (flag === "\u{1F1EB}\u{1F1F7}") {
                    flushExample();
                    currentExample = { fr: rest, ar: "", en: "" };
                    inExamples = true;
                } else if (flag === "\u{1F1F8}\u{1F1E6}") {
                    if (!currentExample) currentExample = { fr: "", ar: "", en: "" };
                    currentExample.ar = rest;
                    inExamples = true;
                } else if (flag === "\u{1F1EC}\u{1F1E7}") {
                    if (!currentExample) currentExample = { fr: "", ar: "", en: "" };
                    currentExample.en = rest;
                    inExamples = true;
                }
                prevLineBlank = false;
                continue;
            }

            if (!foundFirstHeading) {
                const hi = getHeadingInfo(line);
                if (hi && hi.isHeading) startEntry(hi);
                prevLineBlank = false;
                continue;
            }

            const meta = parseMeta(line);
            if (meta && meta.field) {
                flushExample();
                if (!inExamples) {
                    if (meta.field === "ar") current.main.ar = current.main.ar || meta.value;
                    else if (meta.field === "en") current.main.en = current.main.en || meta.value;
                    else current[meta.field] = meta.value;
                }
                prevLineBlank = false;
                continue;
            }

            const marker = parseExampleMarker(line, !!current);
            if (marker.isMarker) {
                flushExample();
                inExamples = true;
                if (marker.clean) currentExample = { fr: marker.clean, ar: "", en: "" };
                prevLineBlank = false;
                continue;
            }

            if (prevLineBlank) {
                const hi = getHeadingInfo(line);
                if (hi && hi.isHeading) {
                    startEntry(hi);
                    continue;
                }
            }

            processAsExample(line);
            prevLineBlank = false;
        }
        flushExample();
        flushEntry();
        return entries;
    }

    function importWords() {
        const entries = parseBulkText(bulkInput.value);
        if (entries.length === 0) {
            importFeedback.textContent = "لا يوجد نص صالح للاستيراد";
            return;
        }
        const topic = bulkTopic.value.trim() || "عام";
        let imported = 0;
        entries.forEach(function (entry) {
            const letter = entry.letter || autoLetterFromWord(entry.main.fr || entry.main.en) || "A";
            const cat = data.categories.find(function (c) { return c.id === letter; });
            if (!cat) return;
            const word = {
                id: uid(),
                fr: entry.main.fr,
                ar: entry.main.ar,
                en: entry.main.en,
                topic: topic,
                type: entry.type || "",
                level: entry.level || "",
                pronunciation: entry.pronunciation || "",
                ex: "",
                ex_ar: "",
                ex_en: ""
            };
            if (entry.examples.length > 0) {
                const first = entry.examples[0];
                word.ex = first.fr;
                word.ex_ar = first.ar;
                word.ex_en = first.en;
            }
            if (entry.examples.length > 1) {
                word.examples = entry.examples.slice(1).map(function (e) {
                    return { fr: e.fr, ar: e.ar, en: e.en };
                });
            }
            cat.words.push(word);
            data.totalWords++;
            imported++;
        });
        saveData();
        importFeedback.textContent = "تم استيراد " + imported + " كلمة";
        currentLetter = "all";
        currentCategory = topic;
        searchInput.value = "";
        searchTerm = "";
        clearBtn.style.display = "none";
        render();
        setTimeout(closeAddModal, 600);
    }

    function getFirstLetter(word) {
        const cleaned = (word || "").replace(/^(le |la |l'|les |un |une |des )/i, "");
        const ch = cleaned.charAt(0).toUpperCase();
        const map = {
            "À": "A", "Â": "A", "Ä": "A", "É": "E", "È": "E", "Ê": "E", "Ë": "E",
            "Î": "I", "Ï": "I", "Ô": "O", "Ö": "O", "Ù": "U", "Û": "U", "Ü": "U",
            "Ç": "C", "Œ": "O"
        };
        return map[ch] || ch;
    }

    function matchesLetter(w) {
        if (currentLetter === "all") return true;
        const source = (w.fr || w.en || "").replace(/^(le |la |l'|les |un |une |des )/i, "");
        return getFirstLetter(source) === currentLetter;
    }

    function matchesTopic(w) {
        if (currentCategory === "all") return true;
        return (w.topic || "عام") === currentCategory;
    }

    function matchesSearch(w) {
        if (!searchTerm) return true;
        const fields = [w.fr, w.ar, w.en, w.type, w.level, w.pronunciation, w.ex, w.ex_ar, w.ex_en];
        if (Array.isArray(w.examples)) {
            w.examples.forEach(function (e) {
                fields.push(e.fr, e.ar, e.en);
            });
        }
        for (let i = 0; i < fields.length; i++) {
            const v = String(fields[i] || "");
            if (v.toLowerCase().includes(searchTerm)) return true;
        }
        return false;
    }

    function escapeHtml(str) {
        escapeDiv.textContent = str === undefined || str === null ? "" : String(str);
        return escapeDiv.innerHTML;
    }

    function escapeQuote(str) {
        return String(str || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, "&quot;");
    }

    function highlightText(text, term) {
        if (!term) return escapeHtml(text);
        const escaped = escapeHtml(text);
        const escapedTerm = escapeHtml(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp("(" + escapedTerm + ")", "gi");
        return escaped.replace(regex, '<span class="highlight">$1</span>');
    }

    function makeClickableText(html, lang) {
        if (!html) return html;
        const div = document.createElement("div");
        div.innerHTML = html;
        const textNodes = [];
        (function collect(node) {
            if (node.nodeType === 3) {
                textNodes.push(node);
            } else if (node.nodeType === 1) {
                Array.from(node.childNodes).forEach(collect);
            }
        })(div);
        textNodes.forEach(function (node) {
            const text = node.textContent;
            const regex = /(\s+|[.,;:!?؟،؛…"\(\)\[\]\{\}\/]+)/g;
            const parts = text.split(regex).filter(function (p) { return p !== undefined && p !== ""; });
            const frag = document.createDocumentFragment();
            parts.forEach(function (part) {
                const trimmed = part.replace(/^[\s.,;:!?؟،؛…"'\(\)\[\]\{\}\/]+|[\s.,;:!?؟،؛…"'\(\)\[\]\{\}\/]+$/g, "");
                if (trimmed) {
                    const span = document.createElement("span");
                    span.className = "tts-word";
                    span.dataset.text = trimmed;
                    span.dataset.lang = lang;
                    span.textContent = part;
                    frag.appendChild(span);
                } else {
                    frag.appendChild(document.createTextNode(part));
                }
            });
            if (node.parentNode) node.parentNode.replaceChild(frag, node);
        });
        return div.innerHTML;
    }

    function render() {
        stopSpeech();
        if (!data) {
            wordList.innerHTML = '<div class="no-results">خطأ في تحميل البيانات</div>';
            return;
        }

        rebuildCategoryButtons();
        updateActiveNav();

        let html = "";
        let matchCount = 0;

        if (currentCategory !== "all") {
            const allWords = [];
            data.categories.forEach(function (cat) {
                cat.words.forEach(function (w) {
                    if (matchesSearch(w) && matchesTopic(w)) allWords.push(w);
                });
            });
            allWords.sort(function (a, b) { return (a.fr || "").localeCompare(b.fr || "", "fr"); });
            matchCount = allWords.length;
            if (allWords.length > 0) {
                html += '<div class="category-section">';
                html += '<div class="category-header" onclick="this.classList.toggle(\'collapsed\');this.nextElementSibling.classList.toggle(\'collapsed\')">';
                html += '<span>' + escapeHtml(currentCategory) + '</span>';
                html += '<span><span class="cat-count">' + allWords.length + ' كلمة</span><span class="toggle-icon">▼</span></span></div>';
                html += '<div class="category-words">';
                allWords.forEach(function (w) { html += renderWordCard(w); });
                html += '</div></div>';
            }
        } else if (currentLetter !== "all") {
            const allWords = [];
            data.categories.forEach(function (cat) {
                cat.words.forEach(function (w) {
                    if (matchesSearch(w) && matchesLetter(w)) allWords.push(w);
                });
            });
            allWords.sort(function (a, b) { return (a.fr || "").localeCompare(b.fr || "", "fr"); });
            matchCount = allWords.length;
            if (allWords.length > 0) {
                html += '<div class="category-section">';
                html += '<div class="category-header" onclick="this.classList.toggle(\'collapsed\');this.nextElementSibling.classList.toggle(\'collapsed\')">';
                html += '<span>حرف ' + currentLetter + ' - Lettre ' + currentLetter + '</span>';
                html += '<span><span class="cat-count">' + allWords.length + ' كلمة</span><span class="toggle-icon">▼</span></span></div>';
                html += '<div class="category-words">';
                allWords.forEach(function (w) { html += renderWordCard(w); });
                html += '</div></div>';
            }
        } else {
            data.categories.forEach(function (cat) {
                const filtered = cat.words.filter(function (w) { return matchesSearch(w); });
                if (filtered.length === 0) return;
                matchCount += filtered.length;

                html += '<div class="category-section">';
                html += '<div class="category-header" onclick="this.classList.toggle(\'collapsed\');this.nextElementSibling.classList.toggle(\'collapsed\')">';
                html += '<span>' + escapeHtml(cat.name_ar || cat.id) + ' - ' + escapeHtml(cat.name_fr || cat.id) + '</span>';
                html += '<span><span class="cat-count">' + filtered.length + ' كلمة</span><span class="toggle-icon">▼</span></span></div>';
                html += '<div class="category-words">';
                filtered.forEach(function (w) { html += renderWordCard(w); });
                html += '</div></div>';
            });
        }

        if (matchCount === 0) {
            html = '<div class="no-results">لا توجد كلمات بعد 😕<br>اضغط على زر + لإضافة أول كلمة</div>';
        }

        wordList.innerHTML = html;

        if (searchTerm || currentLetter !== "all") {
            statsEl.textContent = matchCount + ' نتيجة من ' + data.totalWords + ' كلمة';
        } else if (currentCategory !== "all") {
            statsEl.textContent = matchCount + ' كلمة في تصنيف ' + currentCategory;
        } else {
            statsEl.textContent = data.totalWords + ' كلمة في ' + data.categories.length + ' حرف';
        }
    }

    function renderWordCard(w) {
        const fr = w.fr || "";
        const ar = w.ar || "";
        const en = w.en || "";

        let badgesHtml = "";
        if (w.type || w.level || w.pronunciation) {
            badgesHtml = '<div class="word-badges">';
            if (w.type) badgesHtml += '<span class="badge badge-type">' + escapeHtml(w.type) + '</span>';
            if (w.level) badgesHtml += '<span class="badge badge-level">' + escapeHtml(w.level) + '</span>';
            if (w.pronunciation) badgesHtml += '<span class="badge badge-pronunciation">' + escapeHtml(w.pronunciation) + '</span>';
            badgesHtml += '</div>';
        }

        let exHtml = "";
        const examples = getExamples(w);
        if (examples.length > 0) {
            exHtml = '<div class="example-section">';
            examples.forEach(function (ex, idx) {
                const first = idx === 0;
                if (!first) exHtml += '<hr class="ex-separator">';
                let lines = "";
                if (ex.fr) {
                    lines += '<div class="ex-line"><span class="ex-label fr-label">FR</span><span class="ex-text ltr" data-lang="fr-FR">' + makeClickableText(highlightText(ex.fr, searchTerm), "fr-FR") + '</span></div>';
                }
                if (ex.ar) {
                    lines += '<div class="ex-line"><span class="ex-label ar-label">AR</span><span class="ex-text" data-lang="ar-SA">' + makeClickableText(highlightText(ex.ar, searchTerm), "ar-SA") + '</span></div>';
                }
                if (ex.en) {
                    lines += '<div class="ex-line"><span class="ex-label en-label">EN</span><span class="ex-text ltr" data-lang="en-US">' + makeClickableText(highlightText(ex.en, searchTerm), "en-US") + '</span></div>';
                }

                const frLoop = ex.fr ? '<button class="btn-loop" onclick="window.toggleLoop(\'' + escapeQuote(ex.fr) + '\', \'fr-FR\', this)" title="تكرار النطق الفرنسي">🔁 FR</button>' : "";
                const arLoop = ex.ar ? '<button class="btn-loop btn-loop-ar" onclick="window.toggleLoop(\'' + escapeQuote(ex.ar) + '\', \'ar-SA\', this)" title="تكرار النطق العربي">🔁 AR</button>' : "";
                const enLoop = ex.en ? '<button class="btn-loop btn-loop-en" onclick="window.toggleLoop(\'' + escapeQuote(ex.en) + '\', \'en-US\', this)" title="تكرار النطق الإنجليزي">🔁 EN</button>' : "";
                const bothLoop = (ex.fr && ex.en) ? '<button class="btn-loop btn-loop-both" onclick="window.toggleLoopBoth(\'' + escapeQuote(ex.fr) + '\', \'' + escapeQuote(ex.en) + '\', this)" title="تكرار فرنسي + إنجليزي">🔁 FR+EN</button>' : "";
                const allLoop = (ex.fr && ex.ar && ex.en) ? '<button class="btn-loop btn-loop-all" onclick="window.toggleLoopAll(\'' + escapeQuote(ex.fr) + '\', \'' + escapeQuote(ex.ar) + '\', \'' + escapeQuote(ex.en) + '\', this)" title="تكرار فرنسي + عربي + إنجليزي">🔁 FR+AR+EN</button>' : "";
                const controls = allLoop + frLoop + arLoop + enLoop + bothLoop;

                exHtml += '<div class="example-block">' + lines;
                if (controls) {
                    exHtml += '<div class="audio-controls">' + controls + '</div>';
                }
                exHtml += '</div>';
            });
            exHtml += '</div>';
        }

        const frLoopBtn = fr ? '<button class="btn-loop" onclick="window.toggleLoop(\'' + escapeQuote(fr) + '\', \'fr-FR\', this)" title="تكرار النطق الفرنسي">🔁 FR</button>' : "";
        const enLoopBtn = en ? '<button class="btn-loop btn-loop-en" onclick="window.toggleLoop(\'' + escapeQuote(en) + '\', \'en-US\', this)" title="تكرار النطق الإنجليزي">🔁 EN</button>' : "";
        const imgQuery = (fr + ' ' + (ar || '') + ' ' + (en || '')).trim();
        const imgSearchBtn = '<button class="btn-img-search" data-query="' + escapeHtml(imgQuery) + '" title="بحث صور Google">🖼</button>';

        const actionsHtml = '<div class="word-actions">' +
            '<button class="word-menu-btn" onclick="window.showWordMenu(\'' + escapeQuote(w.id) + '\', this)" title="خيارات">⋮</button>' +
            '<div class="word-menu">' +
                '<button class="word-menu-item" onclick="window.openEditWord(\'' + escapeQuote(w.id) + '\')">تعديل</button>' +
                '<button class="word-menu-item word-menu-delete" onclick="window.deleteWord(\'' + escapeQuote(w.id) + '\')">حذف</button>' +
            '</div>' +
        '</div>';

        return '<div class="word-card" data-id="' + escapeHtml(w.id) + '">' +
            '<div class="word-row">' +
                '<button class="btn-word-loop" onclick="window.toggleLoopWord(\'' + escapeQuote(fr) + '\', \'' + escapeQuote(en) + '\', this)" title="تكرار نطق الكلمة فرنسي + إنجليزي">🔁</button>' +
                '<span class="word-main" data-fr="' + escapeHtml(fr) + '" data-ar="' + escapeHtml(ar) + '" data-en="' + escapeHtml(en) + '" title="اضغط للنطق بثلاث لغات (loop)">' +
                    '<span class="word-fr">' + highlightText(fr, searchTerm) + '</span>' +
                    '<span class="word-ar">' + highlightText(ar, searchTerm) + '</span>' +
                    '<span class="word-en">' + highlightText(en, searchTerm) + '</span>' +
                '</span>' +
                imgSearchBtn + frLoopBtn + enLoopBtn + actionsHtml +
            '</div>' + badgesHtml + exHtml + '</div>';
    }

    function getExamples(w) {
        const examples = [];
        if (w.ex || w.ex_ar || w.ex_en) {
            examples.push({ fr: w.ex || "", ar: w.ex_ar || "", en: w.ex_en || "" });
        }
        if (Array.isArray(w.examples)) {
            w.examples.forEach(function (e) { examples.push({ fr: e.fr || "", ar: e.ar || "", en: e.en || "" }); });
        }
        return examples;
    }

    // ---- TTS / native Capacitor helpers ----

    function nativePlugin(name) {
        if (!window.Capacitor) return null;
        if (window.Capacitor.Plugins && window.Capacitor.Plugins[name]) return window.Capacitor.Plugins[name];
        if (window.Capacitor.registerPlugin) {
            window.Capacitor.Plugins = window.Capacitor.Plugins || {};
            window.Capacitor.Plugins[name] = window.Capacitor.registerPlugin(name);
            return window.Capacitor.Plugins[name];
        }
        return null;
    }

    function nativeTTS() { return nativePlugin("TextToSpeech"); }
    function nativeApp() { return nativePlugin("App"); }

    function initAppPlugin() {
        const App = nativeApp();
        if (App && App.addListener) {
            App.addListener("backButton", function () {
                if (confirm("هل تريد حقاً الخروج من التطبيق؟")) {
                    App.exitApp();
                }
            });
        }
    }

    function loadWebVoices() {
        if (!synth) return;
        voices = synth.getVoices() || [];
        synth.onvoiceschanged = function () {
            voices = synth.getVoices() || [];
        };
    }

    function stopSpeech() {
        speechRun++;
        if (activeLoopBtn) {
            setLoopBtn(activeLoopBtn, false);
            activeLoopBtn = null;
        }
        const tts = nativeTTS();
        if (tts && tts.stop) {
            try { tts.stop(); } catch (e) {}
        }
        if (synth) {
            try { synth.cancel(); } catch (e) {}
        }
    }

    async function ttsSpeak(text, lang, rate) {
        if (!text) return;
        const tts = nativeTTS();
        if (tts && tts.speak) {
            try { await tts.stop(); } catch (e) {}
            try {
                await tts.speak({ text: text, lang: lang, rate: rate || 0.85, queueStrategy: 1 });
                return;
            } catch (e) {
                // native TTS failed for this language, fall back to web speech below
            }
        }
        return speakWeb(text, lang, rate);
    }

    function speakWeb(text, lang, rate) {
        return new Promise(function (resolve) {
            if (!synth) { resolve(); return; }
            synth.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = lang;
            u.rate = rate || 0.85;
            const prefix = (lang.split("-")[0] || "").toLowerCase();
            const v = voices.find(function (voice) {
                return (voice.lang || "").toLowerCase().startsWith(prefix);
            });
            if (v) u.voice = v;
            u.onend = resolve;
            u.onerror = function () { resolve(); };
            synth.speak(u);
        });
    }

    function setLoopBtn(btn, active) {
        if (!btn) return;
        if (btn.tagName !== "BUTTON") {
            if (active) btn.classList.add("active");
            else btn.classList.remove("active");
            return;
        }
        if (active) {
            btn.classList.add("active");
            if (btn.classList.contains("btn-word-loop")) btn.innerHTML = "⏹";
            else if (btn.classList.contains("btn-loop-both")) btn.innerHTML = "⏹ FR+EN";
            else if (btn.classList.contains("btn-loop-en")) btn.innerHTML = "⏹ EN";
            else btn.innerHTML = "⏹ FR";
        } else {
            btn.classList.remove("active");
            if (btn.classList.contains("btn-word-loop")) btn.innerHTML = "🔁";
            else if (btn.classList.contains("btn-loop-both")) btn.innerHTML = "🔁 FR+EN";
            else if (btn.classList.contains("btn-loop-en")) btn.innerHTML = "🔁 EN";
            else btn.innerHTML = "🔁 FR";
        }
    }

    async function speakOnce(seq, btn) {
        stopSpeech();
        const run = speechRun;
        let orig = "";
        if (btn) {
            orig = btn.innerHTML;
            btn.innerHTML = "🔊 ...";
        }
        try {
            for (let i = 0; i < seq.length; i++) {
                if (run !== speechRun) break;
                if (!seq[i].text) continue;
                try { await ttsSpeak(seq[i].text, seq[i].lang, seq[i].rate || 0.85); } catch (e) {}
                if (run !== speechRun) break;
            }
        } catch (e) {
            // ignore
        } finally {
            if (btn) btn.innerHTML = orig;
        }
    }

    function startLoop(seq, btn) {
        stopSpeech();
        activeLoopBtn = btn;
        const run = ++speechRun;
        setLoopBtn(btn, true);
        playLoop(seq, run, btn);
    }

    async function playLoop(seq, run, btn) {
        try {
            while (run === speechRun) {
                for (let i = 0; i < seq.length; i++) {
                    if (run !== speechRun) break;
                    if (!seq[i].text) continue;
                    try { await ttsSpeak(seq[i].text, seq[i].lang, seq[i].rate || 0.85); } catch (e) {}
                    if (run !== speechRun) break;
                }
                if (run !== speechRun) break;
                await new Promise(function (resolve) { setTimeout(resolve, 800); });
            }
        } catch (e) {
            // ignore
        } finally {
            if (run === speechRun) {
                setLoopBtn(btn, false);
                activeLoopBtn = null;
            }
        }
    }

    window.speakFr = function (text, btn) {
        if (!text) return;
        speakOnce([{ text: text, lang: "fr-FR" }], btn);
    };

    window.speakEn = function (text, btn) {
        if (!text) return;
        speakOnce([{ text: text, lang: "en-US" }], btn);
    };

    window.speakBoth = function (frText, enText, btn) {
        const seq = [];
        if (frText) seq.push({ text: frText, lang: "fr-FR" });
        if (enText) seq.push({ text: enText, lang: "en-US" });
        if (seq.length) speakOnce(seq, btn);
    };

    window.toggleLoopWord = function (fr, en, btn) {
        if (!fr && !en) return;
        if (btn && btn.classList.contains("active")) { stopSpeech(); return; }
        const seq = [];
        if (fr) seq.push({ text: fr, lang: "fr-FR" });
        if (en) seq.push({ text: en, lang: "en-US" });
        startLoop(seq, btn);
    };

    window.toggleLoop = function (text, lang, btn) {
        if (!text) return;
        if (btn && btn.classList.contains("active")) { stopSpeech(); return; }
        startLoop([{ text: text, lang: lang }], btn);
    };

    window.toggleLoopBoth = function (frText, enText, btn) {
        if (!frText && !enText) return;
        if (btn && btn.classList.contains("active")) { stopSpeech(); return; }
        const seq = [];
        if (frText) seq.push({ text: frText, lang: "fr-FR" });
        if (enText) seq.push({ text: enText, lang: "en-US" });
        startLoop(seq, btn);
    };

    window.toggleLoopAll = function (frText, arText, enText, btn) {
        if (!frText && !arText && !enText) return;
        if (btn && btn.classList.contains("active")) { stopSpeech(); return; }
        const seq = [];
        if (frText) seq.push({ text: frText, lang: "fr-FR" });
        if (arText) seq.push({ text: arText, lang: "ar-SA" });
        if (enText) seq.push({ text: enText, lang: "en-US" });
        startLoop(seq, btn);
    };

    function openImageSearch(query) {
        try {
            const q = (query || "").trim();
            const url = "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(q);
            const Browser = nativePlugin("Browser");
            if (Browser && Browser.open) {
                Browser.open({ url: url });
                return;
            }
            window.open(url, "_blank");
        } catch (e) {
            console.error(e);
        }
    }

    window.openEditWord = openEditWord;
    window.deleteWord = deleteWord;
    window.showWordMenu = showWordMenu;
    window.openImageSearch = openImageSearch;

    init();
})();
