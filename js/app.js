(function() {
    "use strict";
    var HEXAGRAMS = typeof window != "undefined" && window.HEXAGRAMS || [],
        LINES = typeof window != "undefined" && window.LINES || {},
        UI_LANG = (function() {
            try {
                var v = localStorage.getItem("xingua_lang");
                if(v === "en" || v === "zh") return v
            } catch (e) {}
            return defaultLangByRegion()
        })(),
        uiLang = function(l) {
            return l ? (UI_LANG = l === "en" ? "en" : "zh", HEXAGRAMS = getHexagrams(), LINES = getLines(), onBoot()) : UI_LANG
        },
        getHexagrams = function() {
            if(typeof window == "undefined") return [];
            var zh = window.HEXAGRAMS || [],
                en = window.HEXAGRAMS_EN || [];
            return UI_LANG === "en" && en.length ? en : zh
        },
        getLines = function() {
            if(typeof window == "undefined") return {};
            var zh = window.LINES || {},
                en = window.LINES_EN || {};
            return UI_LANG === "en" && en && Object.keys(en).length ? en : zh
        },
        TRI = {
            天: [1, 1, 1],
            澤: [1, 1, 0],
            火: [1, 0, 1],
            雷: [1, 0, 0],
            風: [0, 1, 1],
            水: [0, 1, 0],
            山: [0, 0, 1],
            地: [0, 0, 0]
        },
        SYM_OF = {
            天: "☰",
            澤: "☱",
            火: "☲",
            雷: "☳",
            風: "☴",
            水: "☵",
            山: "☶",
            地: "☷"
        },
        SYM_KEY = {
            "☰": "天",
            "☱": "澤",
            "☲": "火",
            "☳": "雷",
            "☴": "風",
            "☵": "水",
            "☶": "山",
            "☷": "地"
        },
        ELEMENT_IMG = typeof window != "undefined" && window.ELEMENT_IMG || {
            天: "img/el-tian.png",
            地: "img/el-di.png",
            水: "img/el-shui.png",
            火: "img/el-huo.png",
            雷: "img/el-lei.png",
            風: "img/el-feng.png",
            山: "img/el-shan.png",
            澤: "img/el-ze.png"
        };

    function elImgTag(name) {
        return name && ELEMENT_IMG[name] ? '<img class="el-icon-img" src="' + ELEMENT_IMG[name] + '" alt="' + name + '">' : ""
    }

    function elIcons(hex) {
        if(!hex) return "";
        var names = [];
        return hex.upperName && ELEMENT_IMG[hex.upperName] && names.push(hex.upperName), hex.lowerName && ELEMENT_IMG[hex.lowerName] && names.push(hex.lowerName), names.length === 0 && (hex.upper && SYM_KEY[hex.upper] && ELEMENT_IMG[SYM_KEY[hex.upper]] && names.push(SYM_KEY[hex.upper]), hex.lower && SYM_KEY[hex.lower] && ELEMENT_IMG[SYM_KEY[hex.lower]] && names.push(SYM_KEY[hex.lower])), names.map(elImgTag).join(" ")
    }

    function mainElIcon(hex) {
        if(!hex) return "";
        var n = hex.upperName || hex.upper && SYM_KEY[hex.upper] || "";
        return elImgTag(n)
    }

    function pad2(n) {
        return n < 10 ? "0" + n : "" + n
    }
    for(var HEXAGRAM_IMG = {}, _hi = 1; _hi <= 64; _hi++) HEXAGRAM_IMG[_hi] = "img/hexagram-" + pad2(_hi) + ".png";

    function cardMainImg(hex) {
        if(!hex) return "";
        var src = hex.cardImg || HEXAGRAM_IMG[hex.num] || "";
        return src ? '<img class="card-main-img" src="' + src + '" alt="' + esc(hex.symbolLabel || "") + '">' : mainElIcon(hex)
    }

    function hexFromTitle(title) {
        if(!title) return null;
        var m = String(title).match(/^(\d+)\s*(.*)$/);
        if(!m) return null;
        for(var num = parseInt(m[1], 10), _H = getHexagrams(), i = 0; i < _H.length; i++)
            if(_H[i].num === num) return _H[i];
        return null
    }
    var HEX_TABLE = {
        天_天: ["乾為天", 1],
        地_地: ["坤為地", 2],
        水_雷: ["水雷屯", 3],
        山_水: ["山水蒙", 4],
        水_天: ["水天需", 5],
        天_水: ["天水訟", 6],
        地_水: ["地水師", 7],
        水_地: ["水地比", 8],
        風_天: ["風天小畜", 9],
        天_澤: ["天澤履", 10],
        地_天: ["地天泰", 11],
        天_地: ["天地否", 12],
        天_火: ["天火同人", 13],
        火_天: ["火天大有", 14],
        地_山: ["地山謙", 15],
        雷_地: ["雷地豫", 16],
        澤_雷: ["澤雷隨", 17],
        山_風: ["山風蠱", 18],
        地_澤: ["地澤臨", 19],
        風_地: ["風地觀", 20],
        火_雷: ["火雷噬嗑", 21],
        山_火: ["山火賁", 22],
        山_地: ["山地剝", 23],
        地_雷: ["地雷復", 24],
        天_雷: ["天雷无妄", 25],
        山_天: ["山天大畜", 26],
        山_雷: ["山雷頤", 27],
        澤_風: ["澤風大過", 28],
        水_水: ["坎為水", 29],
        火_火: ["離為火", 30],
        澤_山: ["澤山咸", 31],
        雷_風: ["雷風恆", 32],
        天_山: ["天山遯", 33],
        雷_天: ["雷天大壯", 34],
        火_地: ["火地晉", 35],
        地_火: ["地火明夷", 36],
        風_火: ["風火家人", 37],
        火_澤: ["火澤睽", 38],
        水_山: ["水山蹇", 39],
        雷_水: ["雷水解", 40],
        山_澤: ["山澤損", 41],
        風_雷: ["風雷益", 42],
        澤_天: ["澤天夬", 43],
        天_風: ["天風姤", 44],
        澤_地: ["澤地萃", 45],
        地_風: ["地風升", 46],
        澤_水: ["澤水困", 47],
        水_風: ["水風井", 48],
        澤_火: ["澤火革", 49],
        火_風: ["火風鼎", 50],
        雷_雷: ["震為雷", 51],
        山_山: ["艮為山", 52],
        風_山: ["風山漸", 53],
        雷_澤: ["雷澤歸妹", 54],
        雷_火: ["雷火豐", 55],
        火_山: ["火山旅", 56],
        風_風: ["巽為風", 57],
        澤_澤: ["兌為澤", 58],
        風_水: ["風水渙", 59],
        水_澤: ["水澤節", 60],
        風_澤: ["風澤中孚", 61],
        雷_山: ["雷山小過", 62],
        水_火: ["水火既濟", 63],
        火_水: ["火水未濟", 64]
    };

    function triKey(t2) {
        for(var k in TRI)
            if(TRI[k][0] === t2[0] && TRI[k][1] === t2[1] && TRI[k][2] === t2[2]) return k;
        return ""
    }
    var STORAGE_KEY = "xingua_draft_v5",
        LOGIN_KEY = "xingua_logged_in",
        USERS_KEY = "xingua_users",
        SESSION_KEY = "xingua_session",
        FB_USERS_KEY = "xingua_fb_users";

    function getUsers() {
        try {
            var v = JSON.parse(localStorage.getItem(FB_USERS_KEY) || "{}");
            if(v && typeof v == "object" && Object.keys(v).length) return v
        } catch (e) {}
        try {
            return JSON.parse(localStorage.getItem(USERS_KEY) || "{}")
        } catch (e) {
            return {}
        }
    }

    function saveUsers(u) {
        try {
            localStorage.setItem(USERS_KEY, JSON.stringify(u)), localStorage.setItem(FB_USERS_KEY, JSON.stringify(u))
        } catch (e) {}
        typeof FB != "undefined" && FB && FB.saveUsers && FB.saveUsers(u)
    }

    function currentUser() {
        try {
            return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null")
        } catch (e) {
            return null
        }
    }

    function setSession(u) {
        try {
            u ? sessionStorage.setItem(SESSION_KEY, JSON.stringify(u)) : sessionStorage.removeItem(SESSION_KEY)
        } catch (e) {}
        try {
            localStorage.removeItem(SESSION_KEY)
        } catch (e) {}
    }

    function clearLegacySession() {
        try {
            localStorage.removeItem(SESSION_KEY)
        } catch (e) {}
        try {
            localStorage.removeItem(LOGIN_KEY)
        } catch (e) {}
    }

    function purgeLegacyPasswords() {
        try {
            [USERS_KEY, FB_USERS_KEY].forEach(function(key) {
                try {
                    var map = JSON.parse(localStorage.getItem(key) || "{}"),
                        dirty = !1;
                    for(var k in map) map[k] && typeof map[k] == "object" && "pass" in map[k] && (delete map[k].pass, dirty = !0);
                    dirty && localStorage.setItem(key, JSON.stringify(map))
                } catch (e) {}
            })
        } catch (e) {}
    }

    function memberName() {
        var u = currentUser();
        return u && u.name ? u.name : "會員"
    }

    function uid() {
        var u = currentUser(),
            raw = u ? u.email : "guest";
        return String(raw).replace(/[^a-zA-Z0-9._-]/g, "_")
    }

    function diaryKey() {
        return DIARY_KEY_PREFIX + uid()
    }

    function changedHex(res) {
        var h = res.hex,
            up = TRI[SYM_KEY[h.upper]].slice(),
            low = TRI[SYM_KEY[h.lower]].slice(),
            changed = res.changedLines || [];
        if(changed.length === 0) return {
            sym: h.upper + " " + h.lower,
            label: h.symbolLabel,
            none: !0
        };
        for(var ci = 0; ci < changed.length; ci++) {
            var line = changed[ci],
                target = line <= 3 ? low : up,
                idx = line <= 3 ? line - 1 : line - 4;
            target[idx] = target[idx] === 1 ? 0 : 1
        }
        var upK = triKey(up),
            lowK = triKey(low),
            entry = HEX_TABLE[upK + "_" + lowK];
        return {
            sym: SYM_OF[upK] + " " + SYM_OF[lowK],
            label: entry ? entry[0] : "（變）"
        }
    }

    function zhiGuaObject(res) {
        var h = res.hex,
            up = TRI[SYM_KEY[h.upper]].slice(),
            low = TRI[SYM_KEY[h.lower]].slice(),
            changed = res.changedLines || [];
        if(changed.length === 0) return null;
        for(var ci = 0; ci < changed.length; ci++) {
            var line = changed[ci],
                target = line <= 3 ? low : up,
                idx = line <= 3 ? line - 1 : line - 4;
            target[idx] = target[idx] === 1 ? 0 : 1
        }
        var upK = triKey(up),
            lowK = triKey(low),
            entry = HEX_TABLE[upK + "_" + lowK];
        if(!entry) return null;
        for(var hi = 0, _H = getHexagrams(); hi < _H.length; hi++)
            if(_H[hi].num === entry[1]) return _H[hi];
        return null
    }
    var CARD2_COMBO_TPL = ["慢慢來，事情會走向{A}。中間會經歷一段{B}，這都是必經的過程。試著{C}，也記得提醒自己，先別{D}。", "不用太緊張，結果可能會是{A}。過程中如果遇到{B}，那也只是暫時的。你可以試著{C}，同時也讓自己留意，別掉進{D}的坑裡。", "放輕鬆，事情會走向{A}。路上會遇到{B}，這很正常。此刻不妨{C}，也提醒自己輕輕避開{D}。", "深呼吸一下，將會迎來{A}。只是這條路上，會先經歷{B}，辛苦你了。試著{C}，同時溫柔地提醒自己，先不要{D}。", "一步步來，結果會走向{A}。過程中若感到{B}，請對自己多一點耐心。先{C}，也記得留意別{D}。"],
        CARD2_SIMPLE_TPL = ["一個階段正式結束了，新的方向會走向{A}。此刻，試著{C}。", "過去的都過去了，接著會走向{A}。給自己一點時間{C}。", "一切都翻開新的一頁，未來{A}。此刻最溫柔的做法，就是{C}。", "舊的已經放下了，眼前的路會{A}。你可以試著{C}，慢慢來。", "這是一個全新的開始，方向會是{A}。此刻，不妨先{C}。"],
        CARD3_COMBO_TPL = ["{MAIN}{SUP}", "{MAIN}{SUP}", "{MAIN}{SUP}", "{MAIN}{SUP}", "{MAIN}{SUP}"],
        CARD4_COMBO_TPL = ["{MAIN}\n{SUP}", "{MAIN}\n{SUP}", "{MAIN}\n{SUP}", "{MAIN}\n{SUP}", "{MAIN}\n{SUP}"];

    function pickTplIdx(res, key, n) {
        var k = "_tpl_" + key;
        return typeof res[k] != "number" && (res[k] = Math.floor(Math.random() * n)), res[k]
    }

    function fillTpl(tpl, map) {
        return tpl.replace(/\{(\w+)\}/g, function(_, k) {
            return map[k] || ""
        })
    }
    var CAT_KEY_MAP = {
            感情: "love",
            事業: "career",
            健康: "health",
            財運: "finances",
            人際: "relationships",
            love: "love",
            career: "career",
            health: "health",
            finances: "finances",
            relationships: "relationships"
        },
        CAT_I18N = {
            love: "p2a.cat1",
            career: "p2a.cat2",
            health: "p2a.cat3",
            finances: "p2a.cat4",
            relationships: "p2a.cat5"
        };

    function normalizeCat(cat) {
        return CAT_KEY_MAP[cat] || cat || ""
    }

    function catLabel(cat) {
        var k = normalizeCat(cat),
            ik = CAT_I18N[k];
        return ik ? t(ik) : cat || (lang() === "en" ? "This matter" : "這件事")
    }
    var LEN_KEY_MAP = {
        一週內: "p2a.len1",
        一個月內: "p2a.len2",
        三個月內: "p2a.len3",
        "長期（六個月以上）": "p2a.len4",
        "6 months": "p2a.len4",
        "Within 1 week": "p2a.len1",
        "Within 1 month": "p2a.len2",
        "Within 3 months": "p2a.len3"
    };

    function lenLabel(v) {
        var k = LEN_KEY_MAP[v];
        return k ? t(k) : v || ""
    }

    function changedText(changed) {
        return !changed || changed.length === 0 ? t("result.noChanging") : t("result.changingPrefix") + " " + changed.join(lang() === "en" ? ", " : "、") + t("result.changingSuffix")
    }

    function guideOf(entry, cat) {
        if(cat = normalizeCat(cat), !entry || !entry.guide) return "";
        var g = entry.guide;
        return typeof g == "object" ? g[cat] || "" : g
    }

    function resolveInterpretation(res) {
        var h = res.hex,
            _L = getLines(),
            changed = (res.changedLines || []).slice().sort(function(a, b) {
                return a - b
            }),
            count = changed.length;
        if(count === 0) return {
            mode: "benGua",
            lineData: null,
            zhiGua: null,
            combo: null
        };
        if(count === 1) {
            var pos1 = changed[0];
            return {
                mode: "line",
                lineData: _L[h.key] && _L[h.key][String(pos1)] || null,
                zhiGua: null,
                combo: null
            }
        }
        if(count === 2) {
            var posMax = Math.max(changed[0], changed[1]),
                posMin = Math.min(changed[0], changed[1]),
                mainLine2 = _L[h.key] && _L[h.key][String(posMax)] || null,
                supportLine2 = _L[h.key] && _L[h.key][String(posMin)] || null;
            return {
                mode: "line",
                lineData: mainLine2,
                zhiGua: null,
                combo: {
                    main: mainLine2,
                    support: supportLine2
                }
            }
        }
        if(count === 3) {
            var zhi3 = zhiGuaObject(res);
            return {
                mode: "bothGua",
                lineData: null,
                zhiGua: zhi3,
                benGuaText: h.plain || h.core || "",
                zhiGuaText: zhi3 && (zhi3.plain || zhi3.core) || "",
                combo: {
                    main: zhi3,
                    support: h
                }
            }
        }
        if(count === 4 || count === 5) {
            var all = [1, 2, 3, 4, 5, 6],
                unchanged = all.filter(function(p) {
                    return changed.indexOf(p) === -1
                }),
                posLow = Math.min.apply(null, unchanged),
                posHigh = Math.max.apply(null, unchanged),
                zhi = zhiGuaObject(res),
                mainLine4 = zhi && _L[zhi.key] && _L[zhi.key][String(posLow)] || null,
                supportLine4 = count === 4 && zhi && _L[zhi.key] && _L[zhi.key][String(posHigh)] || null;
            return {
                mode: "line",
                lineData: mainLine4,
                zhiGua: zhi,
                combo: count === 4 ? {
                    main: mainLine4,
                    support: supportLine4
                } : null
            }
        }
        var zhi6 = zhiGuaObject(res),
            special = null;
        return h.num === 1 && h.yongJiuText && (special = {
            label: "用九",
            text: h.yongJiuText
        }), h.num === 2 && h.yongLiuText && (special = {
            label: "用六",
            text: h.yongLiuText
        }), {
            mode: "zhiGua",
            lineData: null,
            zhiGua: zhi6,
            zhiGuaText: zhi6 && (zhi6.plain || zhi6.core) || "",
            special,
            combo: {
                main: zhi6,
                support: null
            }
        }
    }

    function readingLineText(res) {
        var r = resolveInterpretation(res);
        if(r.mode === "line") {
            if(r.combo) {
                var m = r.combo.main,
                    s = r.combo.support,
                    A = m && m.main_state || "",
                    C = m && m.main_strategy || "";
                if((A || C) && s) {
                    var B = s.support_risk || "",
                        D = s.support_warning || "",
                        t2 = CARD2_COMBO_TPL[pickTplIdx(res, "l2", CARD2_COMBO_TPL.length)];
                    return fillTpl(t2, {
                        A,
                        B,
                        C,
                        D
                    })
                }
            }
            return r.lineData ? r.lineData.name + "：" + r.lineData.text : res.hex.core || res.hex.plain || ""
        }
        if(r.mode === "bothGua") {
            if(r.combo) {
                var m2 = r.combo.main,
                    s2 = r.combo.support,
                    A2 = m2 && m2.main_state || "",
                    C2 = m2 && m2.main_strategy || "";
                if((A2 || C2) && s2) {
                    var B2 = s2.support_risk || "",
                        D2 = s2.support_warning || "",
                        t22 = CARD2_COMBO_TPL[pickTplIdx(res, "l2", CARD2_COMBO_TPL.length)];
                    return fillTpl(t22, {
                        A: A2,
                        B: B2,
                        C: C2,
                        D: D2
                    })
                }
            }
            var label = r.zhiGua ? r.zhiGua.num + " " + r.zhiGua.symbolLabel : "";
            return (label ? "之卦「" + label + "」：" : "") + r.zhiGuaText + (r.benGuaText ? `
本卦：` + r.benGuaText : "")
        }
        if(r.mode === "zhiGua") {
            if(r.special && r.special.text) return r.special.label + "：" + r.special.text;
            if(r.combo && r.combo.main) {
                var m3 = r.combo.main,
                    A3 = m3.main_state || "",
                    C3 = m3.main_strategy || "";
                if(A3 || C3) return fillTpl(CARD2_SIMPLE_TPL[pickTplIdx(res, "l2s", CARD2_SIMPLE_TPL.length)], {
                    A: A3,
                    C: C3
                })
            }
            var zlabel = r.zhiGua ? r.zhiGua.num + " " + r.zhiGua.symbolLabel + "：" : "";
            return zlabel + r.zhiGuaText
        }
        return res.hex.core || res.hex.plain || ""
    }

    function readingFocusText(res, cat) {
        cat = normalizeCat(cat);
        var r = resolveInterpretation(res),
            h = res.hex;
        if(r.mode === "line") {
            if(r.combo && r.combo.support) {
                var mf = r.combo.main && r.combo.main.focus && r.combo.main.focus[cat],
                    sf = r.combo.support && r.combo.support.focus && r.combo.support.focus[cat];
                if(mf && sf) return fillTpl(CARD3_COMBO_TPL[pickTplIdx(res, "f" + cat, CARD3_COMBO_TPL.length)], {
                    CAT: catLabel(cat),
                    MAIN: mf,
                    SUP: sf
                })
            }
            return r.lineData && r.lineData.focus && r.lineData.focus[cat] ? r.lineData.focus[cat] : h.focus[cat] || h.core || ""
        }
        if(r.mode === "bothGua") {
            var zhi = r.zhiGua,
                mf2 = zhi && zhi.focus && zhi.focus[cat],
                sf2 = h.focus && h.focus[cat];
            return mf2 && sf2 ? fillTpl(CARD3_COMBO_TPL[pickTplIdx(res, "f" + cat, CARD3_COMBO_TPL.length)], {
                CAT: catLabel(cat),
                MAIN: mf2,
                SUP: sf2
            }) : mf2 || sf2 || h.core || ""
        }
        if(r.mode === "zhiGua") {
            var zh = r.zhiGua;
            return zh && zh.focus && zh.focus[cat] || h.focus[cat] || h.core || ""
        }
        return h.focus[cat] || h.core || ""
    }

    function readingGuideText(res, cat) {
        cat = normalizeCat(cat);
        var r = resolveInterpretation(res),
            h = res.hex;
        if(r.mode === "line") {
            if(r.combo && r.combo.support) {
                var mg = guideOf(r.combo.main, cat),
                    sg = guideOf(r.combo.support, cat);
                if(mg && sg) return fillTpl(CARD4_COMBO_TPL[pickTplIdx(res, "g" + cat, CARD4_COMBO_TPL.length)], {
                    MAIN: mg,
                    SUP: sg
                })
            }
            var lg = r.lineData && guideOf(r.lineData, cat);
            return lg || h.guide && h.guide[cat] || h.focus[cat] || h.core || ""
        }
        if(r.mode === "bothGua") {
            var zhi = r.zhiGua,
                mg2 = guideOf(zhi, cat),
                sg2 = guideOf(h, cat);
            return mg2 && sg2 ? fillTpl(CARD4_COMBO_TPL[pickTplIdx(res, "g" + cat, CARD4_COMBO_TPL.length)], {
                MAIN: mg2,
                SUP: sg2
            }) : mg2 || sg2 || h.core || ""
        }
        if(r.mode === "zhiGua") {
            var zh = r.zhiGua,
                zg = guideOf(zh, cat);
            return zg || zh && zh.focus && zh.focus[cat] || h.core || ""
        }
        return h.guide && h.guide[cat] || h.focus[cat] || h.core || ""
    }
    var state = {
        cat: "",
        len: "",
        result: null,
        draftDate: "",
        saved: !1
    };

    function $(id) {
        return document.getElementById(id)
    }

    function todayMD() {
        var d = new Date;
        return d.getMonth() + 1 + "/" + d.getDate()
    }

    function toast(msg) {
        var t2 = $("toast");
        t2.textContent = msg, t2.classList.add("show"), clearTimeout(t2._timer), t2._timer = setTimeout(function() {
            t2.classList.remove("show")
        }, 2400)
    }

    function isLoggedIn() {
        return !!currentUser()
    }

    function loadDraft() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if(!raw) return [];
            var v = JSON.parse(raw);
            return Array.isArray(v) ? v : [v]
        } catch (e) {
            return []
        }
    }

    function saveDraft(data) {
        try {
            return localStorage.setItem(STORAGE_KEY, JSON.stringify([data])), !0
        } catch (e) {
            return !1
        }
    }

    function clearDraft() {
        try {
            localStorage.removeItem(STORAGE_KEY)
        } catch (e) {}
    }
    var screens = document.querySelectorAll(".screen");

    function go(name) {
        screens.forEach(function(s) {
            s.classList.toggle("active", s.getAttribute("data-screen") === name)
        });
        var el = document.querySelector(".main");
        el && (el.scrollTop = 0)
    }

    function resetForm() {
        state.result = null, state.saved = !1, clearDraft(), document.querySelectorAll("#cat-chips .chip, #len-chips .chip").forEach(function(c) {
            c.classList.remove("on")
        }), state.cat = "", state.len = "";
        var dc = $("draw-card");
        dc && (dc.classList.remove("flipped"), drawFlipped = !1);
        var da = $("draw-actions"),
            dad = $("draw-actions-done");
        da && dad && (da.classList.remove("hidden"), dad.classList.add("hidden"));
        var fb = $("btn-draw");
        fb && (fb.style.display = "", fb.disabled = !1), updateSaveBtn()
    }

    function setupChips(containerId, field) {
        var box = $(containerId);
        box.addEventListener("click", function(e) {
            var chip = e.target.closest(".chip");
            if(chip) {
                var val = chip.getAttribute(field === "cat" ? "data-cat" : "data-len");
                box.querySelectorAll(".chip").forEach(function(c) {
                    c.classList.remove("on")
                }), chip.classList.add("on"), state[field] = field === "cat" ? normalizeCat(val) : val
            }
        })
    }
    setupChips("cat-chips", "cat"), setupChips("len-chips", "len"), document.querySelectorAll("#btn-menu").forEach(function(el) {
        el.addEventListener("click", function() {
            guardLeave(function() {
                $("menu-overlay").classList.add("open"), updateMenuAuth()
            })
        })
    }), $("btn-menu-close").addEventListener("click", function() {
        $("menu-overlay").classList.remove("open")
    }), $("menu-overlay").addEventListener("click", function(e) {
        e.target === this && this.classList.remove("open")
    }), document.querySelectorAll(".menu-item").forEach(function(m) {
        m.addEventListener("click", function() {
            if(!m.classList.contains("menu-lang")) {
                var act = m.getAttribute("data-act");
                guardLeave(function() {
                    $("menu-overlay").classList.remove("open"), act === "home" ? (resetForm(), go("p1")) : act === "diary" ? isLoggedIn() ? (refreshPerUserData(), go("diary"), setTimeout(scrollCalToCurrent, 120)) : (toast("請先登入"), go("p5")) : act === "about" ? (clearDraft(), state.result = null, state.saved = !1, go("about")) : act === "milk" ? (clearDraft(), state.result = null, state.saved = !1, go("milk")) : act === "setting" && (clearDraft(), state.result = null, state.saved = !1, settingReturnTo = document.querySelector(".screen.active") ? document.querySelector(".screen.active").getAttribute("data-screen") : "diary", go("setting"), updateSettingAccount())
                })
            }
        })
    });

    function updateNav() {
        document.querySelectorAll("#nav-login").forEach(function(el) {
            el.textContent = isLoggedIn() ? memberName() : t("nav.login")
        });
        var ml = $("menu-logout");
        ml && (ml.style.display = isLoggedIn() ? "" : "none");
        var dn = $("dash-name");
        dn && (dn.textContent = isLoggedIn() ? t("dash.helloPre") + memberName() + t("dash.helloPost") : t("dash.helloGuest"))
    }

    function updateMenuAuth() {
        var ok = isLoggedIn(),
            si = $("menu-setting-item"),
            lo = $("menu-logout");
        si && (si.style.display = ok ? "" : "none"), lo && (lo.style.display = ok ? "" : "none")
    }

    function doLogout() {
        setSession(null), localStorage.removeItem(LOGIN_KEY), clearDraft(), state.result = null, state.saved = !1, state.draftDate = null, resetForm(), refreshPerUserData(), $("menu-overlay").classList.remove("open"), $("saved-overlay").classList.remove("open"), updateNav(), updateMenuAuth(), go("p1"), (function() {
            try {
                localStorage.removeItem(guardianRedrawKey()), localStorage.removeItem(guardianClaimKey())
            } catch (e) {}
        })(), toast("已登出")
    }
    $("menu-logout").addEventListener("click", doLogout);

    function navLoginClick() {
        guardLeave(function() {
            if(isLoggedIn()) {
                refreshPerUserData(), go("diary"), setTimeout(scrollCalToCurrent, 120);
                return
            }
            go("p5")
        })
    }
    document.querySelectorAll("#nav-login").forEach(function(el) {
        el.addEventListener("click", navLoginClick)
    }), $("milk-link").addEventListener("click", function(e) {
        e.preventDefault(), go("milk")
    }), $("btn-milk-support").addEventListener("click", function() {
        toast("感謝支持，將為你開啟捐款頁面")
    });
    var drawFlipped = !1;

    function flipDailyCard() {
        if(!drawFlipped) {
            drawFlipped = !0;
            var res = dailyDraw();
            res.cat = "每日靈感", res.len = "今日", $("draw-card").classList.add("flipped");
            var dk = $("draw-back-k"),
                dt = $("draw-back-txt");
            dk && (dk.textContent = res.hex.num + " " + res.hex.symbolLabel), dt && (dt.textContent = res.hex.core || res.hex.plainText || "");
            var del = $("draw-back-el");
            del && (del.innerHTML = cardMainImg(res.hex)), window.__lastHex = res.hex, state.result = res, state.saved = !1, $("draw-actions").classList.add("hidden"), $("draw-actions-done").classList.remove("hidden"), toast("今日靈感已揭曉")
        }
    }
    $("btn-draw").addEventListener("click", flipDailyCard), (function() {
        var card = $("draw-card");
        card && card.addEventListener("click", function() {
            flipDailyCard()
        })
    })(), $("btn-redraw").addEventListener("click", function() {
        drawFlipped = !1, $("draw-card").classList.remove("flipped"), state.result = null, state.saved = !1, clearDraft(), resetForm(), updateSaveBtn(), $("draw-actions").classList.remove("hidden"), $("draw-actions-done").classList.add("hidden")
    }), $("btn-save-draw").addEventListener("click", function() {
        saveFlow()
    }), $("btn-share-draw").addEventListener("click", openShare), $("btn-advance").addEventListener("click", function() {
        guardLeave(function() {
            go("p2a")
        })
    }), $("p2a-back").addEventListener("click", function() {
        guardLeave(function() {
            resetForm(), go("p1")
        })
    }), $("btn-start").addEventListener("click", function() {
        if(!state.cat) {
            toast("請先選擇問題類別");
            return
        }
        if(!state.len) {
            toast("請先選擇顯化期長度");
            return
        }
        startDivination()
    });
    var divTimer = null,
        COIN_SLOTS = [{
            x: 60,
            y: 0
        }, {
            x: 194,
            y: 0
        }, {
            x: 6,
            y: 127
        }, {
            x: 248,
            y: 127
        }, {
            x: 60,
            y: 254
        }, {
            x: 194,
            y: 254
        }];

    function dailyDraw() {
        var _h = getHexagrams(),
            idx = Math.floor(Math.random() * _h.length),
            h = _h[idx];
        return {
            hex: h,
            hexKey: h.key,
            cat: state.cat || "每日靈感",
            len: "今日",
            changedLines: [],
            lines: [7, 7, 7, 7, 7, 7],
            method: "daily",
            date: todayMD(),
            ts: Date.now()
        }
    }

    function tossOneLine() {
        for(var sum = 0, i = 0; i < 3; i++) sum += Math.random() < .5 ? 3 : 2;
        return sum
    }

    function castSixLines() {
        for(var lines = [], i = 0; i < 6; i++) lines.push(tossOneLine());
        return lines
    }

    function pickResult() {
        for(var cat = normalizeCat(state.cat || ""), values = castSixLines(), changedLines = [], vals = [], i = 0; i < 6; i++) {
            var v = values[i];
            vals.push(v), (v === 6 || v === 9) && changedLines.push(i + 1)
        }
        var low = values.slice(0, 3),
            up = values.slice(3, 6);

        function triToName(three) {
            for(var key = "", k = 0; k < 3; k++) key += three[k] === 7 || three[k] === 9 ? "1" : "0";
            for(var t2 in TRI)
                if(TRI[t2].join("") === key) return t2;
            return ""
        }
        var lowK = triToName(low),
            upK = triToName(up),
            entry = HEX_TABLE[upK + "_" + lowK],
            h = null;
        if(entry) {
            for(var hi = 0, _H = getHexagrams(); hi < _H.length; hi++)
                if(_H[hi].num === entry[1]) {
                    h = _H[hi];
                    break
                }
        }
        return h || (h = HEXAGRAMS[0]), {
            hex: h,
            hexKey: h.key,
            cat,
            len: state.len || "未選擇",
            changedLines,
            lines: vals,
            method: "coins",
            date: todayMD(),
            ts: Date.now()
        }
    }

    function shuffle(arr) {
        for(var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1)),
                t2 = arr[i];
            arr[i] = arr[j], arr[j] = t2
        }
        return arr
    }

    function startDivination() {
        state.result = null, state.saved = !1, go("p2b");
        var stage = $("divine-stage"),
            coins = stage.querySelectorAll(".coin"),
            core = $("core-btn"),
            ring = $("core-ring-fg"),
            R = 63,
            CIRC = 2 * Math.PI * R;
        ring.style.strokeDasharray = CIRC, ring.style.strokeDashoffset = CIRC, core.textContent = t("p2b.casting"), core.classList.remove("done");
        var slots = shuffle(COIN_SLOTS.slice());
        coins.forEach(function(c, i) {
            c.style.left = slots[i].x + "px", c.style.top = slots[i].y + "px"
        }), clearInterval(divTimer);
        var elapsed = 0,
            total = 1200;
        divTimer = setInterval(function() {
            elapsed += 300;
            var s2 = shuffle(COIN_SLOTS.slice());
            coins.forEach(function(c, i) {
                c.style.left = s2[i].x + "px", c.style.top = s2[i].y + "px"
            });
            var remain = Math.max(0, total - elapsed);
            ring.style.strokeDashoffset = CIRC * (remain / total), elapsed >= total && (clearInterval(divTimer), divTimer = null, ring.style.strokeDashoffset = 0, core.textContent = t("p2b.casting"), core.classList.add("done"), setTimeout(function() {
                stopDivination()
            }, 350))
        }, 300)
    }

    function stopDivination() {
        clearInterval(divTimer), divTimer = null;
        var res = pickResult();
        state.result = res, state.saved = !1, renderCarousel(), updateSaveBtn(), go("p2c")
    }
    $("core-btn").addEventListener("click", function() {});

    function esc(s) {
        return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }

    function renderCarousel(keepPos) {
        if(state.result) {
            var _rc = $("result-carousel"),
                _prev = keepPos && _rc && Math.round(_rc.scrollLeft / _rc.clientWidth) || 0,
                res = state.result,
                h = res.hex,
                catTxt = catLabel(res.cat),
                lenTxt = res.len || "未選擇",
                chg = changedHex(res),
                changed = res.changedLines || [];
            $("result-meta").innerHTML = '<div class="meta-row"><span class="k">' + esc(t("result.category")) + "</span><span>" + esc(catLabel(res.cat)) + '</span></div><div class="meta-row"><span class="k">' + esc(t("result.duration")) + "</span><span>" + esc(lenLabel(res.len)) + "</span></div>";
            var slides = "",
                changedTxt = changedText(changed),
                title = res.hex.num + " " + res.hex.symbolLabel;
            slides += '<div class="slide symbol-slide"><div class="el-ic">' + cardMainImg(h) + '</div><div class="pair" style="display:flex;flex-direction:row;align-items:center;justify-content:center;gap:16px;"><div style="display:flex;flex-direction:column;align-items:center;">' + h.upper + "<br>" + h.lower + "</div>" + (chg.none ? "" : '<div style="margin:0 4px;">→</div><div style="display:flex;flex-direction:column;align-items:center;">' + chg.sym.split(" ").join("<br>") + "</div>") + '</div><div class="name">' + esc(title) + "</div>" + (changedTxt ? '<div class="changed-line">' + esc(changedTxt) + "</div>" : "") + "</div>", slides += '<div class="slide"><div class="slide-k">' + esc(title) + '</div><div class="core-txt">' + esc(readingLineText(res)) + "</div></div>", slides += '<div class="slide"><div class="slide-k">' + esc(t("result.aboutPrefix")) + "「" + esc(catTxt) + " × " + esc(lenLabel(lenTxt)) + '」</div><div class="focus">' + esc(readingFocusText(res, res.cat)) + "</div></div>", slides += '<div class="slide"><div class="slide-k">' + esc(t("result.advice")) + '</div><div class="core-txt">' + esc(readingGuideText(res, res.cat)) + "</div></div>", $("result-carousel").innerHTML = slides;
            for(var dotsHtml = "", i = 0; i < 4; i++) dotsHtml += "<i" + (i === 0 ? ' class="on"' : "") + "></i>";
            $("result-dots").innerHTML = dotsHtml, updateDots();
            var _c = $("result-carousel");
            _c && (_c.scrollLeft = keepPos ? _prev * _c.clientWidth : 0, updateDots()), !keepPos && _c && requestAnimationFrame(function() {
                _c.scrollLeft = 0, updateDots()
            })
        }
    }

    function updateDots() {
        for(var c = $("result-carousel"), idx = Math.round(c.scrollLeft / c.clientWidth) || 0, dots = $("result-dots").children, i = 0; i < dots.length; i++) dots[i].className = i === idx ? "on" : ""
    }
    $("result-carousel").addEventListener("scroll", updateDots);

    function updateSaveBtn() {
        for(var list = ["btn-save-p2c", "btn-save-draw"], i = 0; i < list.length; i++) {
            var btn = $(list[i]);
            btn && (state.saved ? (btn.textContent = t("save.done"), btn.disabled = !0) : (btn.textContent = list[i] === "btn-save-p2c" ? t("p2c.save") : t("p1.save"), btn.disabled = !1))
        }
    }
    $("btn-save-p2c").addEventListener("click", function() {
        saveFlow()
    }), $("btn-redo-p2c").addEventListener("click", function() {
        guardLeave(function() {
            state.cat = null, state.len = "", document.querySelectorAll("#cat-chips .chip, #len-chips .chip").forEach(function(c) {
                c.classList.remove("on")
            }), resetForm(), go("p2a")
        })
    }), $("btn-share-p2c").addEventListener("click", openShare);

    function safeRenderDiary() {
        try {
            renderDiaryData(), renderCalendar()
        } catch (e) {}
    }

    function saveFlow() {
        if(state.result) {
            var freshEls = state.result.method === "daily" ? unlockElementsFromHex(state.result.hex) : [];
            isLoggedIn() ? ($("saved-overlay").classList.add("open"), commitRecord(state.result), state.saved = !0, updateSaveBtn(), safeRenderDiary()) : (saveDraft(state.result), state.draftDate = state.result.date, state.saved = !0, toast("已幫你暫存這筆結果"), setTimeout(function() {
                go("p5")
            }, 700)), freshEls.length && (renderCollect(), setTimeout(function() {
                toast("✨ 元素任務完成：" + freshEls.join("、") + "（已解鎖收藏相簿）")
            }, 1800))
        }
    }
    var authMode = "login";

    function setAuthMode(mode) {
        authMode = mode, $("tab-login").classList.toggle("on", mode === "login"), $("tab-register").classList.toggle("on", mode === "register"), $("auth-name-field").style.display = mode === "register" ? "" : "none", $("auth-pass2-field").style.display = mode === "register" ? "" : "none", $("login-title").textContent = mode === "register" ? "註冊" : "登入", $("login-sub").textContent = mode === "register" ? "建立帳號，之後的卜卦與應驗都會為你保存" : "記錄你的卜卦與應驗，歡迎回來對照，看看指引是否成真", $("btn-login").textContent = mode === "register" ? "註冊並登入" : "登入";
        var fg = $("auth-forgot");
        fg && (fg.style.display = mode === "login" ? "" : "none");
        var fb = $("forgot-box");
        fb && (fb.style.display = "none");
        var ph = $("pass-hint");
        ph && (ph.style.display = "none", ph.className = "pass-hint"), $("auth-error").textContent = ""
    }
    $("tab-login").addEventListener("click", function() {
        setAuthMode("login")
    }), $("tab-register").addEventListener("click", function() {
        setAuthMode("register")
    }), setAuthMode("login");

    function authFail(msg) {
        var e = $("auth-error");
        e && (e.textContent = msg), toast(msg)
    }

    function isValidEmail(e) {
        return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(e)
    }

    function isStrongPassword(p) {
        return p.length >= 8 && /[A-Za-z]/.test(p) && /[0-9]/.test(p)
    }

    function doLogin() {
        var email = $("auth-email").value.trim().toLowerCase(),
            pass = $("auth-pass").value,
            pass2 = $("auth-pass2").value,
            nameField = $("auth-name").value.trim(),
            fbReady = typeof FB != "undefined" && FB && FB.signIn && FB.signUp;
        if(!email) {
            authFail("請輸入帳號（Email）");
            return
        }
        if(!isValidEmail(email)) {
            authFail("Email 格式有誤（例：you@example.com，不可含空白或特殊字元）");
            return
        }
        if(!pass) {
            authFail("請輸入密碼");
            return
        }
        if(!fbReady) {
            authFail("需要連線才能註冊／登入，請確認網路後再試");
            return
        }
        purgeLegacyPasswords();
        var users = getUsers();
        if(authMode === "register") {
            if(!isStrongPassword(pass)) {
                authFail("密碼強度不足：至少 8 碼，且需包含字母與數字");
                return
            }
            if(!pass2 || pass !== pass2) {
                authFail("密碼與確認密碼不符合");
                return
            }
            if(users[email]) {
                authFail("這個帳號已註冊，請直接登入");
                return
            }
            if(!nameField) {
                authFail("請輸入暱稱");
                return
            }
            var dupName = null;
            for(var k in users)
                if(users[k] && users[k].name && String(users[k].name).toLowerCase() === nameField.toLowerCase()) {
                    dupName = users[k].name;
                    break
                } if(dupName) {
                authFail("這個暱稱已被使用，請換一個");
                return
            }
            var nm = nameField;
            FB.signUp(email, pass).then(function(r) {
                if(!r || !r.ok) {
                    var ec = r && r.error || "";
                    ec === "auth/email-already-in-use" ? authFail("這個帳號已註冊，請直接登入") : ec === "auth/weak-password" ? authFail("密碼強度不足：至少 8 碼，且需包含字母與數字") : ec === "auth/invalid-email" ? authFail("Email 格式有誤") : ec && ec.indexOf("network") >= 0 ? authFail("需要連線才能註冊，請確認網路後再試") : authFail("註冊失敗，請稍後再試");
                    return
                }
                users = getUsers(), users[email] = {
                    name: nm,
                    createdAt: Date.now()
                }, saveUsers(users), setSession({
                    email,
                    name: nm
                }), toast("註冊成功，歡迎 " + nm), mergeDraftsOnLogin(), migrateGuestCollection(), refreshPerUserData(), updateNav(), updateMenuAuth(), showLoading(), typeof FB != "undefined" && FB && FB.loadEntitlements && FB.loadEntitlements(email)
            });
            return
        }
        FB.signIn(email, pass).then(function(r) {
            if(!r || !r.ok) {
                var e2 = r && r.error || "";
                e2 && e2.indexOf("network") >= 0 ? authFail("需要連線才能登入，請確認網路後再試") : authFail("帳號或密碼不正確");
                return
            }
            var rec = getUsers()[email] || null,
                sname = rec && rec.name || email.split("@")[0] || "會員";
            setSession({
                email,
                name: sname
            }), toast("登入成功，歡迎回來 " + sname), mergeDraftsOnLogin(), migrateGuestCollection(), refreshPerUserData(), updateNav(), updateMenuAuth(), showLoading(), typeof FB != "undefined" && FB && FB.loadUsers && FB.loadUsers().then(function(map) {
                var rr = map && map[email] || null;
                rr && rr.name && (setSession({
                    email,
                    name: rr.name
                }), updateNav(), updateMenuAuth())
            }), typeof FB != "undefined" && FB && FB.loadEntitlements && FB.loadEntitlements(email)
        })
    }
    $("btn-login").addEventListener("click", function() {
        doLogin()
    }), $("auth-pass").addEventListener("keydown", function(e) {
        e.key === "Enter" && doLogin()
    });
    var passHint = $("pass-hint");
    $("auth-pass").addEventListener("input", function() {
        if(passHint) {
            var p = this.value;
            if(!p) {
                passHint.style.display = "none", passHint.className = "pass-hint";
                return
            }
            passHint.style.display = "", isStrongPassword(p) ? (passHint.textContent = "✓ 密碼符合規範（至少 8 碼，含英文與數字）", passHint.className = "pass-hint ok") : (passHint.textContent = "密碼需至少 8 碼，且需含英文與數字", passHint.className = "pass-hint")
        }
    });

    function updatePassHintVisibility() {
        passHint && (passHint.style.display = "none")
    }

    function openForgot() {
        var box = $("forgot-box");
        box && (box.style.display = "", $("forgot-result").textContent = "", $("forgot-email").value = "", $("auth-error").textContent = "", setTimeout(function() {
            $("forgot-email").focus()
        }, 50))
    }

    function closeForgot() {
        var box = $("forgot-box");
        box && (box.style.display = "none")
    }
    $("btn-forgot").addEventListener("click", function() {
        openForgot()
    }), $("btn-forgot-close").addEventListener("click", function() {
        closeForgot()
    }), $("btn-forgot-find").addEventListener("click", function() {
        var em = $("forgot-email").value.trim().toLowerCase(),
            res = $("forgot-result");
        if(res) {
            if(!em) {
                res.innerHTML = '<span class="fr-err">請輸入註冊時的信箱</span>';
                return
            }
            if(!isValidEmail(em)) {
                res.innerHTML = '<span class="fr-err">Email 格式有誤（例：you@example.com）</span>';
                return
            }
            var users = getUsers(),
                rec = users[em];
            if(!rec) {
                res.innerHTML = '<span class="fr-err">此信箱未註冊，請確認是否曾以該信箱註冊（僅能以信箱查詢，無法用用戶名）</span>';
                return
            }
            if(typeof FB != "undefined" && FB && FB.resetPassword) {
                FB.resetPassword(em).then(function(r) {
                    if(r && r.ok) res.innerHTML = '<span class="fr-ok">重設密碼信件已寄出至 ' + esc(em) + "，請到信箱點擊連結設定新密碼。</span>", toast("重設密碼信件已寄出");
                    else {
                        var code = r && r.error || "";
                        if(code === "email_not_registered") {
                            res.innerHTML = '<span class="fr-err">此信箱未註冊</span>';
                            return
                        }
                        if(code === "firebase_off") {
                            res.innerHTML = '<span class="fr-err">需要連線才能重設密碼，請確認網路後再試。</span>', toast("需要連線才能重設密碼");
                            return
                        }
                        res.innerHTML = '<span class="fr-err">寄送失敗：' + esc(code) + "</span>"
                    }
                });
                return
            }
            res.innerHTML = '<span class="fr-err">需要連線才能重設密碼，請確認網路後再試。</span>', toast("需要連線才能重設密碼")
        }
    }), $("forgot-email").addEventListener("keydown", function(e) {
        e.key === "Enter" && $("btn-forgot-find").click()
    }), $("btn-later").addEventListener("click", function() {
        resetForm(), go("p1")
    });

    function showLoading() {
        go("loading"), setTimeout(function() {
            try {
                renderDiaryData(), renderCalendar(), renderCollect()
            } catch (e) {}
            go("diary"), setTimeout(scrollCalToCurrent, 120)
        }, 1100)
    }
    var SETTINGS_KEY = "xingua_settings";

    function settingsKey() {
        return SETTINGS_KEY + "_" + uid()
    }

    function getSettings() {
        try {
            return JSON.parse(localStorage.getItem(settingsKey()) || "{}")
        } catch (e) {
            return {}
        }
    }

    function saveSettings(s) {
        try {
            localStorage.setItem(settingsKey(), JSON.stringify(s))
        } catch (e) {}
        typeof FB != "undefined" && FB && FB.saveSettings && FB.saveSettings(uid(), s)
    }

    function refreshPerUserData() {
        diaryData = loadDiary(), renderDiaryData(), renderCalendar(), renderCollect()
    }

    function applySettingsUI() {
        var s = getSettings(),
            r = $("set-remind");
        if(r) {
            var on = s.remind !== !1;
            r.textContent = on ? "已開啟" : "已關閉", r.classList.toggle("on", on)
        }
        var p = $("set-push");
        if(p) {
            var pon = !!s.push;
            p.textContent = pon ? "已開啟" : "開啟", p.classList.toggle("on", pon)
        }
        var b = $("btn-remind");
        b && (b.textContent = s.remind !== !1 ? "關閉" : "開啟")
    }
    var settingReturnTo = "diary";
    $("setting-back").addEventListener("click", function() {
        go(settingReturnTo)
    });

    function updateSettingAccount() {
        var a = $("setting-account");
        a && (a.textContent = isLoggedIn() ? memberName() + t("setting.accountLogged") : t("setting.accountGuest"));
        var btn = $("btn-edit-name");
        btn && (btn.style.display = isLoggedIn() ? "" : "none")
    }
    $("btn-edit-name").addEventListener("click", function() {
        var u = currentUser();
        if(u) {
            var cur = (u.name || "").trim(),
                nm = prompt("輸入新的暱稱（最多 16 字）", cur);
            if(nm !== null) {
                if(nm = nm.trim(), !nm) {
                    toast("暱稱不能空白");
                    return
                }
                if(nm.length > 16) {
                    toast("暱稱最多 16 字");
                    return
                }
                var users = getUsers();
                for(var k in users)
                    if(k !== u.email && users[k] && users[k].name && String(users[k].name).toLowerCase() === nm.toLowerCase()) {
                        toast("這個暱稱已被使用，請換一個");
                        return
                    } users[u.email] && (users[u.email].name = nm, saveUsers(users)), setSession({
                    email: u.email,
                    name: nm
                }), updateNav(), updateSettingAccount(), toast("暱稱已更新為「" + nm + "」")
            }
        }
    }), $("set-remind").addEventListener("click", function() {
        var s = getSettings();
        s.remind = s.remind === !1, saveSettings(s), applySettingsUI(), toast("寄信提醒設定已更新")
    }), $("set-push").addEventListener("click", function() {
        var s = getSettings();
        s.push = !s.push, saveSettings(s), applySettingsUI(), toast("推播通知設定已更新")
    });
    var CAL_WEEK = ["日", "一", "二", "三", "四", "五", "六"],
        DIARY_KEY_PREFIX = "xingua_diary_";

    function seedDiary() {
        return []
    }

    function loadDiary() {
        try {
            var raw = localStorage.getItem(diaryKey());
            if(raw) return JSON.parse(raw)
        } catch (e) {}
        var seed = seedDiary();
        try {
            localStorage.setItem(diaryKey(), JSON.stringify(seed))
        } catch (e) {}
        if(typeof FB != "undefined" && FB && FB.loadDiary) {
            var remoteUid = uid();
            FB.loadDiary(remoteUid).then(function(remote) {
                if(remote && remote.length) {
                    try {
                        localStorage.setItem(diaryKey(), JSON.stringify(remote))
                    } catch (e) {}
                    diaryData = remote, renderDiaryData(), renderCalendar(), renderCollect()
                }
            })
        }
        return seed
    }

    function saveDiary(arr) {
        diaryData = arr;
        try {
            for(var clean = [], si = 0; si < arr.length; si++) {
                var r = arr[si],
                    c = {};
                for(var k in r) k === "siblings" || k === "fromDiary" || (c[k] = r[k]);
                clean.push(c)
            }
            localStorage.setItem(diaryKey(), JSON.stringify(clean))
        } catch (e) {}
        typeof FB != "undefined" && FB && FB.saveDiary && FB.saveDiary(uid(), clean)
    }

    function recordFromResult(res) {
        var now = new Date;
        return {
            date: now.getMonth() + 1 + "/" + now.getDate(),
            y: now.getFullYear(),
            m: now.getMonth() + 1,
            d: now.getDate(),
            type: res.method === "daily" ? "card" : "divination",
            method: res.method || (res.method === "daily" ? "daily" : "coins"),
            ts: Date.now(),
            title: res.hex.num + " " + res.hex.symbolLabel,
            cat: normalizeCat(res.cat || ""),
            len: res.len || "",
            mood: "",
            verify: null,
            note: "",
            hex: res.hex,
            hexKey: res.hexKey,
            changedLines: res.changedLines || [],
            lines: res.lines || []
        }
    }

    function commitRecord(res) {
        var arr = loadDiary();
        return arr.unshift(recordFromResult(res)), saveDiary(arr), arr
    }

    function mergeDraftsOnLogin() {
        try {
            var drafts = loadDraft();
            if(drafts && drafts.length) {
                for(var diary = loadDiary(), i = drafts.length - 1; i >= 0; i--) {
                    var d = drafts[i];
                    !d || !d.hex || (diary.unshift(recordFromResult(d)), d.method === "daily" && unlockElementsFromHex(d.hex))
                }
                saveDiary(diary), clearDraft()
            }
            state.result = null, state.saved = !0
        } catch (e) {}
    }
    var diaryData = loadDiary();

    function diaryByDate(y, m, d) {
        for(var out = [], i = 0; i < diaryData.length; i++) diaryData[i].y === y && diaryData[i].m === m && diaryData[i].d === d && out.push(diaryData[i]);
        return out.sort(function(a, b) {
            return (b.ts || 0) - (a.ts || 0)
        }), out
    }

    function renderCalendar() {
        var box = $("cal-months");
        if(box) {
            for(var html = "", mi = 0; mi < 14; mi++) {
                var ym = addMonths(new Date, mi - 4),
                    y = ym.getFullYear(),
                    m = ym.getMonth() + 1;
                html += '<div class="cal-month" data-ym="' + y + "-" + m + '">', html += '<div class="cal-month-title">' + y + " 年 " + m + " 月</div>", html += '<div class="cal-week">';
                for(var w = 0; w < 7; w++) html += "<span>" + CAL_WEEK[w] + "</span>";
                html += "</div>", html += '<div class="cal-grid">';
                for(var first = new Date(y, m - 1, 1).getDay(), days = new Date(y, m, 0).getDate(), today = new Date, pad = 0; pad < first; pad++) html += '<div class="cal-cell empty"></div>';
                for(var day = 1; day <= days; day++) {
                    for(var recs = diaryByDate(y, m, day), rec = recs.length ? recs[0] : null, dailyRec = null, dr = 0; dr < recs.length; dr++)
                        if(recs[dr].type === "card") {
                            dailyRec = recs[dr];
                            break
                        } var recHex = dailyRec ? dailyRec.hex || hexFromTitle(dailyRec.title || "") : null,
                        recIcons = recHex ? mainElIcon(recHex) : "",
                        cls = "cal-cell";
                    dailyRec && (recIcons ? cls += " has-mood" : cls += " has-hex"), y === today.getFullYear() && m === today.getMonth() + 1 && day === today.getDate() && (cls += " today"), html += '<div class="' + cls + '" data-y="' + y + '" data-m="' + m + '" data-d="' + day + '">', html += "<span>" + day + "</span>", dailyRec && recIcons && (html += '<span class="cal-mood">' + recIcons + "</span>"), html += "</div>"
                }
                html += "</div></div>"
            }
            box.innerHTML = html, setTimeout(scrollCalToCurrent, 150)
        }
    }

    function scrollCalToCurrent() {
        var box = document.getElementById("cal-scroll");
        if(box) {
            var now = new Date,
                cur = box.querySelector('.cal-month[data-ym="' + now.getFullYear() + "-" + (now.getMonth() + 1) + '"]');
            cur && (box.scrollTop = cur.offsetTop - 6, updateCalTitle(cur))
        }
    }

    function addMonths(d, n) {
        var r = new Date(d);
        return r.setDate(1), r.setMonth(r.getMonth() + n), r
    }

    function updateCalTitle(monthEl) {
        var t2 = $("cal-title");
        if(t2 && monthEl) {
            var parts = monthEl.getAttribute("data-ym").split("-");
            t2.textContent = parts[0] + " 年 " + parseInt(parts[1], 10) + " 月"
        }
    }
    $("cal-prev").addEventListener("click", function() {
        var box = $("cal-scroll");
        box.scrollBy({
            top: -300,
            behavior: "smooth"
        })
    }), $("cal-next").addEventListener("click", function() {
        var box = $("cal-scroll");
        box.scrollBy({
            top: 300,
            behavior: "smooth"
        })
    }), $("cal-scroll").addEventListener("scroll", function() {
        for(var box = $("cal-scroll"), months = box.querySelectorAll(".cal-month"), i = 0; i < months.length; i++) months[i].offsetTop <= box.scrollTop + 30 && updateCalTitle(months[i])
    }), $("cal-months").addEventListener("click", function(e) {
        var cell = e.target.closest(".cal-cell");
        if(!(!cell || cell.classList.contains("empty"))) {
            var recs = diaryByDate(parseInt(cell.getAttribute("data-y"), 10), parseInt(cell.getAttribute("data-m"), 10), parseInt(cell.getAttribute("data-d"), 10));
            if(recs && recs.length) {
                var rec = recs[0];
                rec.fromDiary = !0, rec.siblings = recs, openDetail(rec)
            } else toast("這天沒有卜卦紀錄")
        }
    });
    var COLLECT_BOOKS = [{
            title: "🎯 系統任務",
            grid: "three",
            items: [{
                e: "🔮",
                label: "完成第一次卜卦",
                locked: !1
            }, {
                e: "⭐",
                label: "完成第 10 次卜卦",
                locked: !0
            }, {
                e: "📝",
                label: "完成 3 次筆記回饋",
                locked: !1
            }]
        }, {
            title: "🧭 元素收集",
            grid: "four",
            items: [{
                e: "☀️",
                label: "天",
                locked: !1
            }, {
                e: "⛰️",
                label: "地",
                locked: !0
            }, {
                e: "💧",
                label: "水",
                locked: !1
            }, {
                e: "🔥",
                label: "火",
                locked: !0
            }, {
                e: "⚡",
                label: "雷",
                locked: !1
            }, {
                e: "🌬️",
                label: "風",
                locked: !0
            }, {
                e: "🏔️",
                label: "山",
                locked: !1
            }, {
                e: "🌊",
                label: "澤",
                locked: !0
            }]
        }],
        COLLECT_KEY = "xingua_collect_elements";

    function collectKey() {
        return COLLECT_KEY + "_" + uid()
    }

    function getCollectedElements() {
        try {
            return JSON.parse(localStorage.getItem(collectKey()) || "[]")
        } catch (e) {
            return []
        }
    }

    function saveCollectedElements(arr) {
        try {
            localStorage.setItem(collectKey(), JSON.stringify(arr))
        } catch (e) {}
        typeof FB != "undefined" && FB && FB.saveCollect && FB.saveCollect(uid(), arr)
    }

    function unlockElementsFromHex(hex) {
        if(!hex) return [];
        for(var names = [hex.upperName, hex.lowerName], cur = getCollectedElements(), fresh = [], i = 0; i < names.length; i++) {
            var n = names[i];
            n && cur.indexOf(n) === -1 && (cur.push(n), fresh.push(n))
        }
        return fresh.length && saveCollectedElements(cur), fresh
    }

    function migrateGuestCollection() {
        try {
            var GUEST_KEY = COLLECT_KEY + "_guest",
                curKey = collectKey();
            if(GUEST_KEY === curKey) return;
            var guest = JSON.parse(localStorage.getItem(GUEST_KEY) || "[]");
            if(!guest.length) return;
            for(var cur = getCollectedElements(), i = 0; i < guest.length; i++) cur.indexOf(guest[i]) === -1 && cur.push(guest[i]);
            saveCollectedElements(cur), localStorage.removeItem(GUEST_KEY), state.result && state.result.hex && unlockElementsFromHex(state.result.hex)
        } catch (e) {}
    }

    function renderCollect() {
        var body = $("collect-body");
        if(body) {
            for(var arr = loadDiary(), divCount = 0, feedbackCount = 0, di = 0; di < arr.length; di++) arr[di].type === "divination" && divCount++, (arr[di].note || arr[di].mood || arr[di].verify) && feedbackCount++;
            var mission0 = divCount >= 1,
                mission1 = divCount >= 10,
                mission2 = feedbackCount >= 3;
            COLLECT_BOOKS[0].items[0].locked = !mission0, COLLECT_BOOKS[0].items[1].locked = !mission1, COLLECT_BOOKS[0].items[2].locked = !mission2;
            for(var html = "", unlockedCount = 0, collected = getCollectedElements(), b = 0; b < COLLECT_BOOKS.length; b++) {
                var book = COLLECT_BOOKS[b];
                html += '<div class="collect-book"><div class="book-title">' + book.title + "</div>", html += '<div class="collect-grid ' + (book.grid === "three" ? "three" : "") + '">';
                for(var i = 0; i < book.items.length; i++) {
                    var it = book.items[i],
                        isLocked = it.locked;
                    b === 1 && (isLocked = collected.indexOf(it.label) === -1), isLocked || unlockedCount++, html += '<div class="collect-item' + (isLocked ? " locked" : "") + '" data-idx="' + b + "-" + i + '">', html += '<div class="ci-emoji">' + it.e + "</div>", html += '<div class="ci-label">' + it.label + "</div></div>"
                }
                html += "</div></div>"
            }
            body.innerHTML = html;
            var cnt = $("collect-count");
            cnt && (cnt.textContent = unlockedCount)
        }
    }
    $("btn-collect").addEventListener("click", function() {
        renderCollect(), $("collect-overlay").classList.add("open")
    }), $("collect-close").addEventListener("click", function() {
        $("collect-overlay").classList.remove("open")
    }), $("collect-overlay").addEventListener("click", function(e) {
        e.target === this && this.classList.remove("open")
    }), $("collect-body").addEventListener("click", function(e) {
        var item = e.target.closest(".collect-item");
        item && (item.classList.contains("locked") ? toast("尚未解鎖：完成任務或收集元素後解鎖") : toast("已收集 ✨"))
    });
    var GUARDIAN_KEY = "xingua_guardian_opened",
        GUARDIAN_HEX_KEY = "xingua_guardian_hex",
        GUARDIAN_REDRAW_KEY = "xingua_guardian_redraw",
        GUARDIAN_CLAIM_KEY = "xingua_guardian_claim";

    function guardianKey() {
        return GUARDIAN_KEY + "_" + uid()
    }

    function guardianHexKey() {
        return GUARDIAN_HEX_KEY + "_" + uid()
    }

    function guardianRedrawKey() {
        return GUARDIAN_REDRAW_KEY + "_" + uid()
    }

    function guardianClaimKey() {
        return GUARDIAN_CLAIM_KEY + "_" + uid()
    }

    function guardianState() {
        var s = {
            beta: !1,
            active: !1,
            can: !1,
            claimed: !1,
            reason: ""
        };
        try {
            s.claimed = localStorage.getItem(guardianClaimKey()) === "1"
        } catch (e) {}
        if(typeof FB != "undefined" && FB && FB.getConfig && FB.getConfig("betaProgramActive")) {
            var c = FB.getConfig("betaProgramActive"),
                a = c && c.active === !0;
            if(!a) return s.reason = "off", s
        } else return s.reason = "off", s;
        var u = currentUser() || {};
        return u.email ? (s.beta = u.betaTester === !0 || u.betaTester === "true" || u.betaTester === 1 || u.betaTester === "1", s.beta ? (s.can = !s.claimed, s) : (s.reason = "notBeta", s)) : (s.reason = "guest", s)
    }

    function guardianOpened() {
        try {
            return localStorage.getItem(guardianKey()) === "1"
        } catch (e) {
            return !1
        }
    }

    function markGuardianOpened() {
        try {
            localStorage.setItem(guardianKey(), "1")
        } catch (e) {}
    }

    function guardianStoredNum() {
        try {
            var n = parseInt(localStorage.getItem(guardianHexKey()) || "", 10);
            return n || null
        } catch (e) {
            return null
        }
    }

    function guardianOverlay() {
        return document.getElementById("guardian-overlay")
    }

    function playGuardianFlare() {
        var ov = guardianOverlay(),
            fx = ov && ov.querySelector(".guardian-flare");
        fx || (fx = document.createElement("div"), fx.className = "guardian-flare", ov && ov.appendChild(fx)), fx.classList.remove("play"), fx.offsetWidth, fx.classList.add("play")
    }

    function guardianBannerHTML(s) {
        return s.claimed ? '<div class="guardian-beta-banner claimed" id="guardian-beta-banner"><div class="gbb-ic">🎁</div><div class="gbb-main"><div class="gbb-title">封測感謝禮</div><div class="gbb-sub">你已保留「正式開放後再抽一次守護卡」的資格。</div><div class="gbb-status">✅ 已預約 · 正式開放時自動生效</div></div></div>' : '<div class="guardian-beta-banner" id="guardian-beta-banner"><div class="gbb-ic">🎁</div><div class="gbb-main"><div class="gbb-title">封測參與者限定</div><div class="gbb-sub">感謝你參與封測！正式開放後，你可再抽一次本命守護卡。</div><button class="gbb-btn" id="guardian-beta-btn">領取再抽資格</button><div class="gbb-status" id="guardian-beta-status">僅限封測帳號 · 由系統審核</div></div></div>'
    }

    function guardianBannerEN(s) {
        return s.claimed ? '<div class="guardian-beta-banner claimed" id="guardian-beta-banner"><div class="gbb-ic">🎁</div><div class="gbb-main"><div class="gbb-title">Beta Thanks</div><div class="gbb-sub">Your extra Guardian Card draw after launch is reserved.</div><div class="gbb-status">✅ Reserved · activates at launch</div></div></div>' : '<div class="guardian-beta-banner" id="guardian-beta-banner"><div class="gbb-ic">🎁</div><div class="gbb-main"><div class="gbb-title">Beta Tester Perk</div><div class="gbb-sub">Thanks for beta testing! When DEC.12 officially launches, you can draw your Guardian Card once more.</div><button class="gbb-btn" id="guardian-beta-btn">Reserve extra draw</button><div class="gbb-status" id="guardian-beta-status">Beta accounts only · verified by system</div></div></div>'
    }

    function refreshGuardianBanner() {
        var ov = guardianOverlay(),
            wrap = ov && ov.querySelector(".guardian-beta-wrap");
        if(wrap) {
            var s = guardianState(),
                oldB = document.getElementById("guardian-beta-banner");
            if(oldB && oldB.parentNode === wrap && wrap.removeChild(oldB), !(!s.beta || !s.active)) {
                var langEn = (function() {
                    try {
                        return localStorage.getItem("xingua_lang") === "en"
                    } catch (e) {
                        return !1
                    }
                })();
                wrap.insertAdjacentHTML("beforeend", langEn ? guardianBannerEN(s) : guardianBannerHTML(s));
                var btn = document.getElementById("guardian-beta-btn");
                btn && btn.addEventListener("click", function() {
                    if(!guardianState().claimed) {
                        var st = guardianState();
                        if(!st.beta || !st.active) {
                            toast(t("toast.guardianBetaOff"));
                            return
                        }
                        try {
                            localStorage.setItem(guardianClaimKey(), "1")
                        } catch (e) {}
                        typeof FB != "undefined" && FB && FB.claimBetaPerk && FB.claimBetaPerk(uid()), refreshGuardianBanner(), toast(t("toast.guardianBetaClaimed"))
                    }
                })
            }
        }
    }

    function renderGuardianBack() {
        var n = guardianStoredNum(),
            h = null,
            _H = getHexagrams();
        if(n) {
            for(var i = 0; i < _H.length; i++)
                if(_H[i].num === n) {
                    h = _H[i];
                    break
                }
        }
        h || (h = _H[Math.floor(Math.random() * _H.length)]);
        var back = document.getElementById("guardian-back"),
            bk = document.querySelector("#guardian-back .guardian-back-k"),
            bt = document.querySelector("#guardian-back .guardian-back-txt"),
            be = $("guardian-back-el"),
            elN = "",
            elN = h.upper && SYM_KEY[h.upper] || h.upperName || "",
            bgSrc = ELEMENT_IMG && elN && ELEMENT_IMG[elN] || h.cardImg || "img/card-" + (h.num < 10 ? "0" + h.num : h.num) + "-" + h.key + ".png";
        return back && (back.style.setProperty("--guardian-bg", "url('" + bgSrc + "')"), back.style.setProperty("background-image", "url('" + bgSrc + "')", "important"), back.style.setProperty("background-size", "cover", "important"), back.style.setProperty("background-position", "center", "important"), back.style.setProperty("background-repeat", "no-repeat", "important"), back.style.setProperty("background-color", "transparent", "important")), bk && (bk.textContent = h.num + " " + h.symbolLabel), bt && (bt.textContent = h.blessingText || h.plainText || h.core || ""), be && (be.innerHTML = ""), h
    }

    function openGuardian() {
        var ov = $("guardian-overlay"),
            card = $("guardian-card"),
            flipBtn = $("guardian-flip"),
            note = $("guardian-locked-note");
        guardianOpened() ? (renderGuardianBack(), card.classList.add("flipped"), flipBtn && (flipBtn.style.display = "none"), note && (note.style.display = "")) : (card.classList.remove("flipped"), flipBtn && (flipBtn.style.display = ""), note && (note.style.display = "none")), ov.classList.add("open"), refreshGuardianBanner()
    }
    $("btn-guardian").addEventListener("click", openGuardian), $("guardian-close").addEventListener("click", function() {
        $("guardian-overlay").classList.remove("open")
    }), $("guardian-overlay").addEventListener("click", function(e) {
        e.target === this && this.classList.remove("open")
    }), $("guardian-flip").addEventListener("click", function() {
        if(!guardianOpened()) {
            var card = $("guardian-card"),
                flipBtn = $("guardian-flip"),
                note = $("guardian-locked-note"),
                h = renderGuardianBack();
            try {
                localStorage.setItem(guardianHexKey(), String(h.num))
            } catch (e) {}
            card.classList.add("flipped"), markGuardianOpened(), flipBtn.style.display = "none", playGuardianFlare(), setTimeout(function() {
                note.style.display = "", toast("🛡️ 本命守護牌已固定")
            }, 1600)
        }
    });

    function renderDetailCarousel(rec, keepPos) {
        var c = $("detail-carousel"),
            d = $("detail-dots");
        if(c) {
            var _pidx = keepPos && c && Math.round(c.scrollLeft / c.clientWidth) || 0,
                h = rec.hex,
                chg = changedHex(rec),
                catTxt = catLabel(rec.cat),
                changed = rec.changedLines || [],
                changedTxt = changedText(changed),
                title = h.num + " " + h.symbolLabel,
                slides = "";
            if(slides += '<div class="slide symbol-slide"><div class="el-ic">' + cardMainImg(h) + '</div><div class="pair">' + h.upper + " " + h.lower + (chg.none ? "" : "　→　" + chg.sym) + '</div><div class="name">' + esc(title) + "</div>" + (changedTxt ? '<div class="changed-line">' + esc(changedTxt) + "</div>" : "") + "</div>", slides += '<div class="slide"><div class="slide-k">' + esc(title) + '</div><div class="core-txt">' + esc(readingLineText(rec)) + "</div></div>", slides += '<div class="slide"><div class="slide-k">' + esc(t("result.aboutPrefix")) + "「" + esc(catTxt) + " × " + esc(lenLabel(rec.len || "")) + '」</div><div class="focus">' + esc(readingFocusText(rec, rec.cat)) + "</div></div>", slides += '<div class="slide"><div class="slide-k">' + esc(t("result.advice")) + '</div><div class="core-txt">' + esc(readingGuideText(rec, rec.cat)) + "</div></div>", c.innerHTML = slides, d) {
                for(var dotsHtml = "", i = 0; i < 4; i++) dotsHtml += "<i" + (i === 0 ? ' class="on"' : "") + "></i>";
                d.innerHTML = dotsHtml;
                var _dc = $("detail-carousel");
                _dc && (_dc.scrollLeft = keepPos ? _pidx * _dc.clientWidth : 0), (function() {
                    for(var _dd = d.children, _i = 0; _i < _dd.length; _i++) _dd[_i].className = _i === Math.round(c.scrollLeft / c.clientWidth) ? "on" : ""
                })(), !keepPos && requestAnimationFrame(function() {
                    _dc.scrollLeft = 0;
                    for(var _dd2 = d.children, _j = 0; _j < _dd2.length; _j++) _dd2[_j].className = _j === 0 ? "on" : ""
                })
            }
        }
    }

    function openDetail(rec) {
        detailRec = rec;
        var df = $("detail-fields");
        df && (df.style.display = rec.type === "divination" ? "block" : "none");
        var tb = $("detail-topbar");
        tb && (rec.fromDiary ? tb.innerHTML = '<button class="back" id="detail-back">← 返回</button><div class="right"></div>' : tb.innerHTML = '<div class="brand">DEC. 12</div><div class="right"><button class="navlink" id="nav-login">登入/註冊</button><button class="icon-btn" id="btn-menu" aria-label="選單">☰</button></div>', rec.fromDiary || updateNav(), bindDetailBack(!!rec.fromDiary), document.querySelectorAll("#btn-menu").forEach(function(el) {
            el.addEventListener("click", function() {
                $("menu-overlay").classList.add("open")
            })
        }), document.querySelectorAll("#nav-login").forEach(function(el) {
            el.addEventListener("click", navLoginClick)
        }));
        var tabsBox = $("detail-tabs"),
            siblings = rec.siblings && rec.siblings.length ? rec.siblings : [rec];
        if(rec.fromDiary)
            for(var sif = 0; sif < siblings.length; sif++) siblings[sif].fromDiary = !0, siblings[sif].siblings = siblings;
        if(tabsBox)
            if(siblings.length > 1) {
                tabsBox.classList.remove("hidden");
                for(var html = "", si = 0; si < siblings.length; si++) {
                    var s = siblings[si],
                        label = s.type === "card" ? "🎴 抽卡" : "🔮 卜卦",
                        active = s === rec ? " on" : "";
                    html += '<button class="detail-tab' + active + '" data-idx="' + si + '">' + label + (si === 0 ? "（最近）" : "") + "</button>"
                }
                tabsBox.innerHTML = html;
                for(var tabs = tabsBox.querySelectorAll(".detail-tab"), ti = 0; ti < tabs.length; ti++)(function(idx) {
                    tabs[ti].addEventListener("click", function() {
                        openDetail(siblings[idx])
                    })
                })(ti)
            } else tabsBox.classList.add("hidden"), tabsBox.innerHTML = "";
        var viewCard = $("detail-view-card"),
            viewDiv = $("detail-view-divination");
        if(rec.type === "card") {
            if(viewCard && viewCard.classList.add("on"), viewDiv && viewDiv.classList.remove("on"), viewCard) {
                var hCard = rec.hex || hexFromTitle(rec.title || ""),
                    coreCard = hCard && hCard.core ? hCard.core : rec.note || rec.title || "",
                    elCard = hCard ? cardMainImg(hCard) : "";
                viewCard.innerHTML = '<div class="detail-card">' + (elCard ? '<div class="el-ic">' + elCard + "</div>" : "") + '<div class="slide-k">' + esc(rec.title || "") + '</div><div class="core-txt">' + esc(coreCard) + "</div></div>"
            }
        } else viewCard && viewCard.classList.remove("on"), viewDiv && viewDiv.classList.add("on");
        var dd = document.querySelector(".detail-date");
        if(dd && (dd.textContent = rec.date + " · " + catLabel(rec.cat) + " · " + lenLabel(rec.len || "")), detailNoteDraft && detailNoteDraft.ts === rec.ts && detailNoteDraft.title === rec.title ? ($("detail-note").value = detailNoteDraft.text, setNoteSaveUI(!0, !1), setNoteBtnMode(!1)) : ($("detail-note").value = rec.note || "", setNoteSaveUI(!1, !!rec.note), setNoteBtnMode(!!rec.note)), detailMood = null, document.querySelectorAll("#detail-moods .mood-btn").forEach(function(b) {
                b.classList.remove("on"), rec.mood && b.getAttribute("data-mood") === rec.mood && (b.classList.add("on"), detailMood = rec.mood)
            }), verify = null, $("verify-y").classList.remove("on-y"), $("verify-x").classList.remove("on-x"), rec.verify === "y" && (verify = "y", $("verify-y").classList.add("on-y")), rec.verify === "x" && (verify = "x", $("verify-x").classList.add("on-x")), rec.hex) renderDetailCarousel(rec, !1);
        else if(rec.title) {
            var c = $("detail-carousel");
            c && (c.innerHTML = '<div class="slide"><div class="slide-k">' + esc(rec.title) + '</div><div class="core-txt">' + esc(rec.note || rec.title) + "</div></div>");
            var d = $("detail-dots");
            d && (d.innerHTML = '<i class="on"></i>')
        }
        go("detail")
    }

    function recIsDivination(r) {
        return r ? r.type ? r.type === "divination" : r.method ? r.method !== "daily" : r.cat !== "每日靈感" && r.cat !== "daily" && r.cat !== "card" : !1
    }

    function renderDiaryData() {
        for(var i = 0, dc = 0, n = 0; i < diaryData.length; i++) {
            var _r = diaryData[i];
            recIsDivination(_r) && (dc++, !_r.verify && n++)
        }
        var sc = $("stat-count");
        sc && (sc.textContent = dc);
        var sp = $("stat-pending");
        sp && (sp.textContent = n)
    }
    $("about-back").addEventListener("click", function() {
        resetForm(), go("p1")
    }), $("milk-back").addEventListener("click", function() {
        resetForm(), go("p1")
    }), $("saved-go").addEventListener("click", function() {
        if($("saved-overlay").classList.remove("open"), !isLoggedIn()) {
            toast("請先登入"), go("p5");
            return
        }
        refreshPerUserData(), go("diary"), setTimeout(scrollCalToCurrent, 120)
    }), $("saved-stay").addEventListener("click", function() {
        $("saved-overlay").classList.remove("open"), resetForm(), go("p1")
    }), $("saved-overlay").addEventListener("click", function(e) {
        e.target === this && this.classList.remove("open")
    });

    function bindDetailBack(fromDiary) {
        var b = $("detail-back");
        b && b.addEventListener("click", function() {
            go(fromDiary ? "diary" : "p1")
        })
    }(function() {
        var b = $("detail-back");
        b && b.addEventListener("click", function() {
            go("diary")
        })
    })(), (function() {
        var d = $("detail-dots");
        if(!d) return;
        for(var html = "", i = 0; i < 4; i++) html += "<i" + (i === 0 ? ' class="on"' : "") + "></i>";
        d.innerHTML = html;
        var c = $("detail-carousel");

        function update() {
            for(var idx = Math.round(c.scrollLeft / c.clientWidth) || 0, dots = d.children, j = 0; j < dots.length; j++) dots[j].className = j === idx ? "on" : ""
        }
        c.addEventListener("scroll", update)
    })();
    var detailMood = null,
        detailRec = null,
        detailNoteDraft = null;

    function setNoteSaveUI(dirty, saved) {
        var hint = $("note-save-hint"),
            btn = $("note-save-btn");
        hint && (hint.textContent = dirty ? "尚未儲存" : saved ? "已儲存" : "", hint.classList.toggle("dirty", !!dirty)), btn && btn.classList.toggle("saved", !!saved && !dirty)
    }
    document.querySelectorAll("#detail-moods .mood-btn").forEach(function(btn) {
        btn.addEventListener("click", function() {
            detailMood = btn.getAttribute("data-mood"), document.querySelectorAll("#detail-moods .mood-btn").forEach(function(b) {
                b.classList.remove("on")
            }), btn.classList.add("on"), toast("已記錄心情 " + detailMood), saveDetailField("mood", detailMood)
        })
    });
    var verify = null;
    $("verify-y").addEventListener("click", function() {
        verify = "y", $("verify-y").classList.add("on-y"), $("verify-x").classList.remove("on-x"), toast("已記錄：應驗了"), saveDetailField("verify", "y"), renderDiaryData()
    }), $("verify-x").addEventListener("click", function() {
        verify = "x", $("verify-x").classList.add("on-x"), $("verify-y").classList.remove("on-y"), toast("已記錄：未應驗"), saveDetailField("verify", "x"), renderDiaryData()
    });

    function saveDetailField(field, val) {
        if(detailRec) {
            if(detailRec[field] = val, diaryData.indexOf(detailRec) >= 0) {
                saveDiary(diaryData);
                return
            }
            for(var arr = loadDiary(), i = 0; i < arr.length; i++)
                if(arr[i].ts === detailRec.ts && arr[i].title === detailRec.title) {
                    arr[i][field] = val, saveDiary(arr);
                    return
                } diaryData.indexOf(detailRec) < 0 && diaryData.unshift(detailRec), saveDiary(diaryData)
        }
    }
    var noteSaved = !1;

    function setNoteBtnMode(saved) {
        var btn = $("note-save-btn");
        btn && (noteSaved = !!saved, btn.innerHTML = saved ? "✏️ 編輯" : "💾 儲存", btn.classList.toggle("saved", !!saved))
    }
    $("detail-note").addEventListener("input", function() {
        detailRec && (detailNoteDraft = {
            ts: detailRec.ts,
            title: detailRec.title,
            text: this.value
        }, setNoteSaveUI(!0, !1), setNoteBtnMode(!1))
    }), $("note-save-btn").addEventListener("click", function() {
        if(detailRec) {
            var text = $("detail-note").value;
            if(noteSaved) {
                noteSaved = !1, setNoteBtnMode(!1), setNoteSaveUI(!1, !1), $("note-save-hint").textContent = "", $("detail-note").focus(), toast("已切換為編輯模式");
                return
            }
            saveDetailField("note", text), detailNoteDraft = null, setNoteSaveUI(!1, !!text), setNoteBtnMode(!0), toast("已儲存這則觀察與感受")
        }
    });

    function guardLeave(after) {
        if(state.result && !state.saved) {
            window.__guardAfter = after || function() {}, $("guard-overlay").classList.add("open");
            return
        }
        after && after()
    }
    $("guard-save").addEventListener("click", function() {
        if($("guard-overlay").classList.remove("open"), !isLoggedIn()) {
            state.saved = !0, saveDraft(state.result), setTimeout(function() {
                go("p5")
            }, 300);
            return
        }
        saveFlow();
        var a = window.__guardAfter;
        window.__guardAfter = null, a && a()
    }), $("guard-discard").addEventListener("click", function() {
        $("guard-overlay").classList.remove("open"), clearDraft(), state.result = null, state.saved = !1;
        var a = window.__guardAfter;
        window.__guardAfter = null, a && a()
    }), $("guard-overlay").addEventListener("click", function(e) {
        e.target === this && this.classList.remove("open")
    }), document.querySelectorAll(".brand").forEach(function(el) {
        el.addEventListener("click", function() {
            guardLeave(function() {
                resetForm(), go("p1")
            })
        })
    }), $("fab-divine").addEventListener("click", function() {
        guardLeave(function() {
            go("p2a")
        })
    });
    var br = $("btn-remind");
    br && br.addEventListener("click", function() {
        var s = getSettings();
        s.remind = s.remind === !1, saveSettings(s), applySettingsUI(), toast("寄信提醒設定已更新")
    });

    function shareText() {
        var res = state.result;
        if(!res) return "DEC. 12 星星罐";
        var h = res.hex,
            chg = changedHex(res),
            changed = res.changedLines || [],
            txt = "";
        return txt += `DEC. 12 · 我的卜卦結果
`, txt += `====================
`, txt += "類別：" + catLabel(res.cat) + `
`, txt += "顯化期長度：" + (res.len || "今日") + `

`, txt += "本卦：" + h.symbolLabel + "（" + h.upper + " " + h.lower + `）
`, chg.none || (txt += "變卦：" + chg.label + "（" + chg.sym + `）
`), changed.length && (txt += "動爻：第 " + changed.join("、") + ` 爻
`), txt += "核心：" + h.num + " " + h.symbolLabel + " " + (h.core || "") + `

`, txt += `白話卦辭：
` + h.plain + `

`, txt += "情境解讀：關於" + res.cat + "：" + (h.focus[res.cat] || h.core || "") + `

`, txt += `一事不宜多問
`, txt += `這是指引，不是預言。
`, txt += "。 來自 DEC. 12 星星罐", txt
    }

    function shareUrl() {
        try {
            return location.href
        } catch (e) {
            return ""
        }
    }

    function openShare() {
        if(!state.result) {
            toast("請先完成卜卦");
            return
        }
        var ov = $("share-overlay");
        $("share-email").value = "", $("email-preview").style.display = "none", ov.classList.add("open")
    }
    $("share-overlay").addEventListener("click", function(e) {
        e.target === this && this.classList.remove("open")
    });

    function shareViaApp(kind) {
        if(!state.result) {
            toast("請先完成卜卦");
            return
        }
        var txt = shareText(),
            url = "";
        if(kind === "ig") {
            url = "https://www.instagram.com/";
            try {
                navigator.clipboard && navigator.clipboard.writeText(txt)
            } catch (e) {}
        } else kind === "thread" ? url = "https://www.threads.net/intent/post?text=" + encodeURIComponent(txt) : kind === "x" && (url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(txt));
        if(url) try {
            var opened = window.open(url, "_blank");
            toast(opened ? "已開啟分享" : "已複製分享內容，請貼到聊天室")
        } catch (e) {
            toast("已複製分享內容，請貼到聊天室")
        }
        $("share-overlay").classList.remove("open")
    }
    $("social-ig").addEventListener("click", function() {
        shareViaApp("ig")
    }), $("social-thread").addEventListener("click", function() {
        shareViaApp("thread")
    }), $("social-x").addEventListener("click", function() {
        shareViaApp("x")
    }), $("btn-send").addEventListener("click", function() {
        var email = $("share-email").value.trim(),
            emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email) {
            toast("請輸入 email");
            return
        }
        if(!emailRe.test(email)) {
            toast("email 格式似乎有誤");
            return
        }
        var h = state.result.hex,
            cat = state.result.cat,
            changed = state.result.changedLines.join("、"),
            focusText = h.focus[cat] || h.core || "",
            body = "";
        body += `DEC. 12 · 你的卜卦結果
`, body += `========================
`, body += "類別：" + cat + `
`, body += "顯化期長度：" + state.result.len + `

`;
        var chg = changedHex(state.result);
        body += "本卦：" + state.result.hex.symbolLabel + "（" + state.result.hex.upper + " " + state.result.hex.lower + `）
`, body += "變卦：" + chg.label + "（" + chg.sym + `）
`, body += "動爻：第 " + changed + ` 爻
`, body += "核心：" + state.result.hex.num + " " + state.result.hex.symbolLabel + " " + (state.result.hex.core || "") + `

`, body += `白話卦辭：
` + state.result.hex.plain + `

`, body += "情境解讀：關於" + cat + "：" + focusText + `

`, body += `一事不宜多問
`, body += `這是指引，不是預言

`, body += `。。
`, body += `本信件由「DEC. 12」寄出，僅用於備份這份結果。
`, body += "若不想再收到提醒，可隨時回覆「退訂」停止寄送。", $("email-preview").textContent = "寄送給 " + email + `：

` + body, $("email-preview").style.display = "block";
        try {
            var mailto = "mailto:" + encodeURIComponent(email) + "?subject=" + encodeURIComponent("DEC. 12 · 我的卜卦結果") + "&body=" + encodeURIComponent(body),
                w = window.open(mailto, "_blank");
            toast(w ? "已開啟郵件客戶端" : "已寄出，請到信箱收信")
        } catch (e) {
            toast("已寄出，請到信箱收信")
        }
    });

    function onBoot() {
        purgeLegacyPasswords(), clearLegacySession(), updateNav(), updateMenuAuth(), applySettingsUI(), go("p1"), typeof FB != "undefined" && FB && FB.loadUsers && FB.loadUsers().then(function(remote) {
            if(remote) try {
                localStorage.setItem(FB_USERS_KEY, JSON.stringify(remote))
            } catch (e) {}
        })
    }

    function boot() {
        try {
            var v = localStorage.getItem("xingua_lang");
            (v === "en" || v === "zh") && (UI_LANG = v)
        } catch (e) {}
        HEXAGRAMS = getHexagrams(), LINES = getLines(), syncLangUI(), initVisitCounter(), renderVisits(), onBoot()
    }

    function initVisitCounter() {
        try {
            var n = parseInt(localStorage.getItem("dec12_visits") || "0", 10) + 1;
            localStorage.setItem("dec12_visits", String(n)), window.__visitCount = n
        } catch (e) {
            window.__visitCount = 1
        }
    }

    function renderVisits() {
        var el = document.getElementById("p1-visits");
        if(el) {
            var n = window.__visitCount || 1,
                txt = t("p1.visits");
            try {
                txt = txt.replace("{{n}}", n.toLocaleString())
            } catch (e) {}
            el.textContent = txt
        }
    }
    var I18N = {
        zh: {
            nav: {
                login: "登入/註冊"
            },
            lang: {
                zh: "中文",
                en: "EN"
            },
            menu: {
                home: "首頁",
                diary: "我的隨記",
                about: "關於 DEC. 12",
                milk: "奶茶金",
                setting: "設定",
                lang: "語言設置",
                langSub: "切換中文／English 介面",
                logout: "⎋ 登出",
                account: "帳戶",
                accountGuest: "未登入",
                editName: "修改暱稱",
                privacy: "隱私權政策",
                authEmail: "帳戶（Email）",
                authName: "用戶名（註冊用）",
                authPass: "密碼",
                authPass2: "確認密碼",
                forgot: "忘記帳戶或密碼？",
                forgotFind: "尋找密碼",
                forgotClose: "關閉",
                loading: "載入你的隨記中…",
                shareNote1: " ",
                shareNote2: "若未收到請檢查垃圾郵件",
                langToggle: "系統語言切換",
                diaryHint: "點任一個格子可查看該卦內容；滑動查看更多月份",
                detailWrite: "寫下觀察與感受",
                detailNoteSave: "尚未儲存",
                detailSave: "儲存",
                detailMood: "表情符號",
                detailVerify: "感受",
                verifyY: "◯ 有幫助",
                verifyX: "沒有幫助",
                detailNoteHint: "寫下心得，之後回到這裡，看看指引是否有所幫助",
                collectSub: "完成任務或收集元素，解鎖彩色圖案",
                guardianSub: "每個帳戶只有一次翻開守護卡機會",
                guardianFront1: "請靜心翻開旅程起點的第一張卡片作為迎新祝福",
                guardianFlip: "翻開守護卡",
                guardianLocked: "守護卡已固定，無法再次翻開",
                guardianBetaTitle: "封測參與者限定",
                guardianBetaSub: "正式開放後，你可再抽一次守護卡",
                guardianBetaBtn: "領取再抽資格",
                guardianBetaReserved: "已預約 · 正式開放時自動生效",
                guardianBetaClaimedTitle: "封測感謝禮",
                guardianBetaClaimedSub: "你已保留正式開放後再抽一次的資格"
            },
            dash: {
                helloPre: "你好，",
                helloPost: "，歡迎回來",
                helloGuest: "你好，旅人",
                collect: "收藏相簿",
                guardian: "本命守護牌",
                statCount: "卜卦次數",
                statPending: "待回來對照",
                sec: "每一筆卜卦"
            },
            setting: {
                title: "設定",
                subtitle: "管理你的通知、隱私與帳號",
                remind: "寄信提醒",
                push: "推播通知",
                dark: "深色模式",
                darkVal: "跟隨系統",
                lang: "語言設置",
                account: "帳號",
                accountGuest: "未登入",
                accountLogged: "（已登入）",
                privacy: "隱私權政策"
            },
            set: {
                on: "已開啟",
                off: "已關閉",
                pushOff: "開啟"
            },
            p1: {
                micro: "微光卡",
                microSub: "為當下的自己帶來靈感與溫柔指引",
                draw: "點擊翻開",
                save: "儲存至日記",
                redraw: "重新抽卡",
                share: "分享",
                divider: "需要更具體的方向？",
                advance: "進階卜卦",
                advanceSub: "透過類別，讓指引更聚焦",
                enter: "進入星星瓶",
                footerPre: "若DEC.12真的有鼓舞到您，歡迎",
                footerLink: "Ko-fi一杯奶茶",
                footerPost: "表示支持",
                visits: "今日瀏覽 {{n}} 人"
            },
            p2a: {
                back: "← 返回",
                title: "星星瓶",
                subtitle: "閉上眼，帶著問題選擇類別，讓思緒在星光中聚焦。",
                cat: "問題類別(必填)",
                cat1: "感情",
                cat2: "事業",
                cat3: "健康",
                cat4: "財運",
                cat5: "人際",
                len: "顯化期(必填)",
                len1: "一週內",
                len2: "一個月內",
                len3: "三個月內",
                len4: "六個月",
                start: "開始卜卦"
            },
            result: {
                category: "類別",
                duration: "有效長度",
                noChanging: "沒有變爻",
                changingPrefix: "動爻：第",
                changingSuffix: " 爻",
                aboutPrefix: "關於",
                advice: "參考建議"
            },
            p2c: {
                save: "儲存到日記",
                redo: "重新起卦",
                share: "分享"
            },
            about: {
                title: "關於 DEC. 12",
                subtitle: "在圓的軌跡裡，與宇宙共振",
                p1: "榮格在治療一位病人時，遇到一個他始終記得的時刻。病人正描述夢裡一隻金龜子，話說到一半，窗外真的飛來一隻金龜子，停在窗台上。榮格後來把這類現象稱作「共時性」：外在發生的事，跟你內心正在經歷的，並非因果關係，卻在同一個時刻，指向同一個意義。",
                p2: "《易經》運作的原理，正是這個。它不是預測未來的工具，而是在你提問的當下，把你內在早已知道、卻還沒說出口的答案，用卦象的方式映照出來。",
                p3: "DEC.12 用簡單的文字x日記。讓每一次提問留下紀錄，每一次回頭看，你會發現卦象與現實之間，常常出現讓人愣住的呼應。不是因為卦象真的能預知什麼，而是因為提問本身，讓你更誠實地觀察自己正在經歷的一切。",
                p4: "我自己也在最不確定的日子裡，靠這個方式一次次向內對話。母親的溫柔，如今已化作心底一抹安靜的底蘊，陪我走過那些反覆提問的時刻。如果你也正站在一個看不清方向的路口，那麼別急著相信，問一個你真正在意的問題，看看會發生什麼。",
                version: "DEC. 12 · 測試版 v1"
            },
            draw: {
                front: "每日靈感",
                hint: "每日靈感卡，點擊翻開。",
                drawBtn: "點擊翻開",
                drawHint: "每日靈感卡，點擊翻開。",
                swipeHint: " "
            },
            p2b: {
                casting: "起卦中"
            },
            milk: {
                title: "奶茶基金",
                subtitle: "每一杯奶茶，都是開發者繼續寫字和維護的燃料",
                cups: "累積杯數",
                total: "累積金額",
                ratio: "淨利潤捐出",
                r1: "固定費用",
                r2: "創作獎勵",
                r3: "已捐金額",
                support: "Ko-fi一杯奶茶",
                note: "每月月初更新金額",
                charity: "DEC.12捐款流向 No Kid Hungry & 家扶基金會"
            },
            p5: {
                title: "登入",
                sub: "記錄你的卜卦與應驗，歡迎回來對照，看看指引是否成真",
                login: "登入",
                register: "註冊",
                submit: "登入",
                later: "稍後再說"
            },
            saved: {
                title: "已儲存該筆紀錄",
                sub: "這筆卜卦已寫入你的隨記",
                go: "前往查看",
                stay: "回到首頁",
                langToggle: "系統語言切換",
                settingItem: "設定",
                diaryHint: "點任一格子可查看該卦內容；滑動查看更多月份",
                detailWrite: "寫下觀察與感受",
                detailNoteSave: "尚未儲存",
                detailSave: "儲存",
                detailMood: "表情符號",
                detailVerify: "感受",
                verifyY: "○ 有幫助",
                verifyX: "沒有幫助",
                detailNoteHint: "寫下心得，之後回到這裡對照，看看指引是否有所幫助",
                account: "帳號",
                accountGuest: "未登入",
                editName: "修改暱稱",
                privacy: "隱私權政策",
                authEmail: "帳號（Email）",
                authName: "用戶名（註冊用）",
                authPass: "密碼",
                authPass2: "確認密碼",
                forgot: "忘記帳號或密碼？",
                forgotFind: "尋找密碼",
                forgotClose: "關閉",
                loading: "載入你的隨記中…",
                shareNote1: " ",
                shareNote2: "若未收到請檢查垃圾郵件",
                collectSub: "完成任務或收集元素，解鎖彩色圖案",
                guardianSub: "送給你的迎新祝福，每個帳戶只有一次翻開機會",
                guardianFront1: "請靜心翻開旅程起點的第一張卡牌",
                guardianFront2: "作為送給用戶的迎新祝福",
                guardianFlip: "翻開守護卡",
                guardianLocked: "守護卡已固定，無法再次翻開"
            },
            cardPreview: {
                title: "下載圖卡",
                hint: "長壓圖片即可儲存到手機",
                download: "下載圖片"
            },
            guard: {
                title: "尚未儲存",
                sub: "這筆卜卦結果尚未儲存，要儲存到隨記嗎？",
                save: "儲存至日記",
                discard: "放棄儲存"
            },
            share: {
                title: "分享",
                sub: "使用Email僅寄送這份結果，不會註冊帳戶",
                or: "或寄到 Email",
                send: "寄送",
                cardBtn: "下載圖卡"
            },
            save: {
                done: "已儲存"
            },
            toast: {
                lang: "已切換語言",
                remindUpdated: "寄信提醒設定已更新",
                pushUpdated: "推播通知設定已更新",
                needLogin: "請先登入",
                logout: "已登出",
                milkSoon: "感謝支持，將為你開啟捐款頁面",
                drawRevealed: "今日靈感已揭曉",
                needCat: "請先選擇問題類別",
                needLen: "請先選擇預測顯化期長度",
                draftSaved: "已幫你暫存這筆結果",
                foundPw: "已透過信箱找到密碼",
                nameEmpty: "暱稱不能空白",
                nameLong: "暱稱最多 16 字",
                nameUsed: "這個暱稱已被使用，請換一個",
                noRecord: "這天沒有卜卦紀錄",
                locked: "尚未解鎖：完成任務或收集元素後解鎖",
                collected: "已收集 ✨",
                guardianFixed: "🛡️ 守護卡已固定",
                guardianBetaClaimed: "已領取！正式開放後可再抽一次守護卡",
                guardianBetaOff: "此功能尚未開放",
                verifyY2: "已記錄：有幫助",
                verifyX2: "已記錄：沒有幫助",
                editMode: "已切換為編輯模式",
                noteSaved: "已儲存這則觀察與感受",
                divineFirst: "請先完成卜卦",
                copied: "已複製分享內容，請貼到聊天室",
                needEmail: "請輸入 email",
                badEmail: "email 格式似乎有誤",
                mailSent: "已寄出，請到信箱收信",
                mailOpened: "已開啟郵件客戶端"
            }
        },
        en: {
            nav: {
                login: "Log in / Sign up"
            },
            lang: {
                zh: "Chinese",
                en: "EN"
            },
            menu: {
                home: "Home",
                diary: "My Journal",
                about: "About DEC. 12",
                milk: "Milk Tea Fund",
                setting: "Settings",
                lang: "Language",
                langSub: "Switch between Chinese and English",
                logout: "⎋ Log out",
                account: "Account",
                accountGuest: "Not logged in",
                editName: "Edit nickname",
                privacy: "Privacy Policy",
                authEmail: "Account (Email)",
                authName: "Username (for sign-up)",
                authPass: "Password",
                authPass2: "Confirm password",
                forgot: "Forgot your account or password?",
                forgotFind: "Find password",
                forgotClose: "Close",
                loading: "Loading your journal…",
                shareNote1: " ",
                shareNote2: "If you don't receive it, check your spam folder",
                langToggle: "Language",
                diaryHint: "Tap any date to view its reading; scroll for more months",
                detailWrite: "Write your thoughts and observations",
                detailNoteSave: "Unsaved",
                detailSave: "Save",
                detailMood: "Mood",
                detailVerify: "Feeling",
                verifyY: "◯ It helps",
                verifyX: "Doesn't help",
                detailNoteHint: "Write what happened and how you felt, then come back later to compare",
                collectSub: "Complete missions or collect elements to unlock artwork",
                guardianSub: "Each account can reveal its Guardian Card only once",
                guardianFront1: "Take a quiet moment, then reveal the first card of your journey as a welcome blessing",
                guardianFlip: "Reveal Guardian Card",
                guardianLocked: "Your Guardian Card is set and cannot be revealed again",
                guardianBetaTitle: "Beta Tester Exclusive",
                guardianBetaSub: "After the official launch, you can draw one more Guardian Card",
                guardianBetaBtn: "Claim extra draw",
                guardianBetaReserved: "Reserved · activates at launch",
                guardianBetaClaimedTitle: "Beta Thank-You Gift",
                guardianBetaClaimedSub: "Your extra Guardian Card draw after launch is reserved"
            },
            dash: {
                helloPre: "Hello, ",
                helloPost: ", welcome back",
                helloGuest: "Hello, traveler",
                collect: "Collection",
                guardian: "Guardian Card",
                statCount: "Readings",
                statPending: "Waiting to review",
                sec: "Your readings"
            },
            setting: {
                title: "Settings",
                subtitle: "Manage notifications, privacy, and your account",
                remind: "Email reminders",
                push: "Push notifications",
                dark: "Dark mode",
                darkVal: "Follow system",
                lang: "Language",
                account: "Account",
                accountGuest: "Not logged in",
                accountLogged: " (logged in)",
                privacy: "Privacy Policy"
            },
            set: {
                on: "On",
                off: "Off",
                pushOff: "Enable"
            },
            p1: {
                micro: "Glimmer Card",
                microSub: "A little inspiration and gentle guidance for this moment",
                draw: "Tap to reveal",
                save: "Save to Journal",
                redraw: "Draw again",
                share: "Share",
                divider: "Need more specific guidance?",
                advance: "Advanced Reading",
                advanceSub: "Choose a category for more focused guidance",
                enter: "Enter Star Jar",
                footerPre: "If DEC.12 has encouraged you, you're welcome to ",
                footerLink: "buy me a milk tea on Ko-fi",
                footerPost: " to support the project",
                visits: "{{n}} visitors today"
            },
            p2a: {
                back: "← Back",
                title: "Star Jar",
                subtitle: "Close your eyes, hold your question in mind, and choose a category.",
                cat: "Question category (required)",
                cat1: "Love",
                cat2: "Career",
                cat3: "Health",
                cat4: "Finances",
                cat5: "Relationships",
                len: "Time window (required)",
                len1: "Within 1 week",
                len2: "Within 1 month",
                len3: "Within 3 months",
                len4: "6 months",
                start: "Start Reading"
            },
            result: {
                category: "Category",
                duration: "Time Window",
                noChanging: "No changing lines",
                changingPrefix: "Changing lines:",
                changingSuffix: "",
                aboutPrefix: "About",
                advice: "Guidance"
            },
            p2c: {
                save: "Save to Journal",
                redo: "Start over",
                share: "Share"
            },
            about: {
                title: "About DEC. 12",
                subtitle: "Finding resonance in life's patterns",
                p1: "While treating a patient, Carl Jung witnessed a moment he never forgot. The patient was describing a golden scarab from a dream when a similar beetle suddenly appeared at the window. Jung later called experiences like this “synchronicity”: an outer event and an inner experience are not causally linked, yet at the same moment they point to the same meaning.",
                p2: "This is also one way to understand the I Ching. It is not a tool for predicting the future. At the moment you ask a question, it reflects through the hexagrams what you may already sense inside but have not yet put into words.",
                p3: "DEC.12 combines simple readings with a journal. Each question leaves a record. When you look back, you may notice surprising echoes between the reading and real life—not because the hexagrams predicted anything, but because asking the question helped you observe your experience more honestly.",
                p4: "I have used this practice myself during uncertain times as a way to turn inward and listen. My mother's gentleness has become a quiet foundation that stays with me through those moments of questioning. If you are standing at a crossroads and cannot see the way ahead, you do not have to believe first. Ask a question that truly matters to you and see what happens.",
                version: "DEC. 12 · Beta v1"
            },
            draw: {
                front: "Daily Inspiration",
                hint: "Your daily inspiration card. Tap to reveal.",
                drawBtn: "Tap to reveal",
                drawHint: "Your daily inspiration card. Tap to reveal.",
                swipeHint: " "
            },
            p2b: {
                casting: "Casting…"
            },
            milk: {
                title: "Milk Tea Fund",
                subtitle: "Every milk tea helps fuel the writing and upkeep behind DEC.12",
                cups: "Total cups",
                total: "Total amount",
                ratio: "Net profit donated",
                r1: "Fixed costs",
                r2: "Creative rewards",
                r3: "Amount donated",
                support: "Buy me a milk tea on Ko-fi",
                note: "Updated at the beginning of each month",
                charity: "DEC.12 donations support No Kid Hungry and the Taiwan Fund for Children and Families"
            },
            p5: {
                title: "Log in",
                sub: "Save your readings and outcomes so you can come back later and see how the guidance unfolded",
                login: "Log in",
                register: "Sign up",
                submit: "Log in",
                later: "Maybe later"
            },
            saved: {
                title: "Record saved",
                sub: "This reading has been added to your journal",
                go: "View record",
                stay: "Back to Home",
                langToggle: "Language",
                settingItem: "Settings",
                diaryHint: "Tap any date to view its reading; scroll for more months",
                detailWrite: "Write your thoughts and observations",
                detailNoteSave: "Unsaved",
                detailSave: "Save",
                detailMood: "Mood",
                detailVerify: "Outcome",
                verifyY: "○ Came true",
                verifyX: "Didn't come true",
                detailNoteHint: "Write what happened and how you felt, then come back later to compare",
                account: "Account",
                accountGuest: "Not logged in",
                editName: "Edit nickname",
                privacy: "Privacy Policy",
                authEmail: "Account (Email)",
                authName: "Username (for sign-up)",
                authPass: "Password",
                authPass2: "Confirm password",
                forgot: "Forgot your account or password?",
                forgotFind: "Find password",
                forgotClose: "Close",
                loading: "Loading your journal…",
                shareNote1: " ",
                shareNote2: "If you don't receive it, check your spam folder",
                collectSub: "Complete missions or collect elements to unlock artwork",
                guardianSub: "A welcome blessing you can reveal only once",
                guardianFront1: "Take a quiet moment and reveal the first card of your journey",
                guardianFront2: "A welcome blessing for you",
                guardianFlip: "Reveal Guardian Card",
                guardianLocked: "Your Guardian Card is set and cannot be revealed again"
            },
            cardPreview: {
                title: "Download Card",
                hint: "Press and hold the image to save it to your phone",
                download: "Download Image"
            },
            guard: {
                title: "Not Saved",
                sub: "This reading has not been saved. Save it to your journal?",
                save: "Save to Journal",
                discard: "Discard"
            },
            share: {
                title: "Share",
                sub: "Email is used only to send this result and will not create an account",
                or: "Or send to Email",
                send: "Send",
                cardBtn: "Download card"
            },
            save: {
                done: "Saved"
            },
            toast: {
                lang: "Language switched",
                remindUpdated: "Email reminder settings updated",
                pushUpdated: "Push notification settings updated",
                needLogin: "Please log in first",
                logout: "Logged out",
                milkSoon: "Thanks for your support. Opening the donation page",
                drawRevealed: "Today's inspiration is ready",
                needCat: "Please choose a question category",
                needLen: "Please choose a time window",
                draftSaved: "This result has been saved as a draft",
                foundPw: "Password found by email",
                nameEmpty: "Nickname cannot be blank",
                nameLong: "Nickname can be up to 16 characters",
                nameUsed: "This nickname is already in use. Try another",
                noRecord: "No reading recorded for this day",
                locked: "Locked: complete a mission or collect elements to unlock",
                collected: "Collected ✨",
                guardianFixed: "🛡️ Guardian Card set",
                guardianBetaClaimed: "Claimed! You can draw one more Guardian Card after launch",
                guardianBetaOff: "This feature is not available yet",
                verifyY2: "Recorded: came true",
                verifyX2: "Recorded: didn't come true",
                editMode: "Edit mode enabled",
                noteSaved: "Your note has been saved",
                divineFirst: "Please complete a reading first",
                copied: "Share text copied. Paste it into your chat",
                needEmail: "Please enter an email",
                badEmail: "That email address looks invalid",
                mailSent: "Sent. Check your inbox",
                mailOpened: "Email app opened"
            }
        }
    };

    function t(key) {
        function pick(o) {
            return key.split(".").reduce(function(a, k) {
                return a && a[k]
            }, o)
        }
        var v = pick(I18N[lang()]) || pick(I18N.zh);
        return v || key
    }

    function lang() {
        return UI_LANG === "en" ? "en" : "zh"
    }

    function asiaLangPref() {
        try {
            var nl = (navigator.language || "").toLowerCase() || "";
            if(nl.indexOf("zh") === 0 || nl.indexOf("ja") === 0 || nl.indexOf("ko") === 0 || nl.indexOf("th") === 0 || nl.indexOf("vi") === 0 || nl.indexOf("id") === 0 || nl.indexOf("ms") === 0 || nl.indexOf("fil") === 0 || nl.indexOf("tl") === 0) return "zh";
            if(nl.indexOf("en") === 0) return "en";
            var tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
            return tz.indexOf("asia/") === 0 ? "zh" : "en"
        } catch (e) {
            return "en"
        }
    }

    function defaultLangByRegion() {
        try {
            if(navigator && navigator.languages && navigator.languages.length)
                for(var i = 0; i < navigator.languages.length; i++) {
                    var code = String(navigator.languages[i] || "").toLowerCase();
                    if(code.indexOf("zh") === 0 || code.indexOf("ja") === 0 || code.indexOf("ko") === 0 || code.indexOf("th") === 0 || code.indexOf("vi") === 0 || code.indexOf("id") === 0 || code.indexOf("ms") === 0 || code.indexOf("fil") === 0 || code.indexOf("tl") === 0) return "zh";
                    if(code.indexOf("en") === 0) return "en"
                }
            return asiaLangPref()
        } catch (e) {
            return asiaLangPref()
        }
    }

    function detectLang() {
        try {
            var saved = localStorage.getItem("xingua_lang");
            if(saved === "zh" || saved === "en") return saved
        } catch (e) {}
        return defaultLangByRegion()
    }

    function setLang(l) {
        l = l === "en" ? "en" : "zh", UI_LANG = l;
        try {
            localStorage.setItem("xingua_lang", l)
        } catch (e) {}
        HEXAGRAMS = getHexagrams(), LINES = getLines(), applyLangTexts(), syncLangBtns(), syncLangUI(), updateNav(), toast(t("toast.lang"))
    }

    function syncLangBtns() {
        var isEn = lang() === "en";
        document.querySelectorAll("#lang-zh,#set-lang-zh").forEach(function(b) {
            b.classList.toggle("on", !isEn)
        }), document.querySelectorAll("#lang-en,#set-lang-en").forEach(function(b) {
            b.classList.toggle("on", isEn)
        })
    }

    function applyLangTexts() {
        document.querySelectorAll("[data-i18n]").forEach(function(el) {
            var key = el.getAttribute("data-i18n"),
                txt = t(key),
                hasEl = !1,
                i;
            if(txt !== key) {
                for(i = 0; i < el.childNodes.length; i++)
                    if(el.childNodes[i].nodeType === 1) {
                        hasEl = !0;
                        break
                    } if(!hasEl) {
                    el.textContent = txt;
                    return
                }
                for(i = 0; i < el.childNodes.length; i++) {
                    var c = el.childNodes[i];
                    c.nodeType === 3 && c.textContent.trim() !== "" && (c.textContent = txt)
                }
            }
        }), document.querySelectorAll("[data-i18n-title]").forEach(function(el) {
            el.textContent = t(el.getAttribute("data-i18n-title"))
        }), document.querySelectorAll("[data-i18n-label]").forEach(function(el) {
            el.textContent = t(el.getAttribute("data-i18n-label"))
        }), updateSettingAccount()
    }

    function initLang() {
        try {
            var saved = localStorage.getItem("xingua_lang");
            if(saved !== "zh" && saved !== "en") {
                var d = detectLang();
                localStorage.setItem("xingua_lang", d)
            }
        } catch (e) {}
        applyLangTexts(), syncLangBtns()
    }

    function syncLangUI() {
        try {
            var tg = document.getElementById("menu-lang-toggle");
            tg && (tg.checked = UI_LANG === "en");
            var tx = document.getElementById("menu-lang-txt");
            tx && (tx.textContent = UI_LANG === "en" ? "EN" : "中文");
            var bd = document.body;
            bd && bd.classList.toggle("lang-en", UI_LANG === "en")
        } catch (e) {}
    }

    function toggleLang() {
        UI_LANG = UI_LANG === "en" ? "zh" : "en";
        try {
            localStorage.setItem("xingua_lang", UI_LANG)
        } catch (e) {}
        HEXAGRAMS = getHexagrams(), LINES = getLines(), applyLangTexts(), updateNav(), updateMenuAuth(), updateSettingAccount(), syncLangUI(), renderVisits();
        try {
            state.result && (renderCarousel(!0), updateSaveBtn(), renderDiaryData(), renderCalendar(), renderCollect())
        } catch (e) {}
    }
    var menuLangToggle = $("menu-lang-toggle");
    menuLangToggle && menuLangToggle.addEventListener("change", function() {
        var want = this.checked ? "en" : "zh";
        want !== UI_LANG && toggleLang()
    }), initLang(), syncLangUI(), boot()
})();