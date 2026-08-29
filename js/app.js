(function () {
  "use strict";
  var HEXAGRAMS = (typeof window !== "undefined" && window.HEXAGRAMS) || [];
  var LINES = (typeof window !== "undefined" && window.LINES) || {};
  var TRI = {
      天: [1, 1, 1],
      澤: [1, 1, 0],
      火: [1, 0, 1],
      雷: [1, 0, 0],
      風: [0, 1, 1],
      水: [0, 1, 0],
      山: [0, 0, 1],
      地: [0, 0, 0],
    },
    SYM_OF = { 天: "☰", 澤: "☱", 火: "☲", 雷: "☳", 風: "☴", 水: "☵", 山: "☶", 地: "☷" },
    SYM_KEY = {
      "☰": "天",
      "☱": "澤",
      "☲": "火",
      "☳": "雷",
      "☴": "風",
      "☵": "水",
      "☶": "山",
      "☷": "地",
    },
    ELEMENT_IMG = (typeof window !== "undefined" && window.ELEMENT_IMG) || {
      天: "img/el-tian.png",
      地: "img/el-di.png",
      水: "img/el-shui.png",
      火: "img/el-huo.png",
      雷: "img/el-lei.png",
      風: "img/el-feng.png",
      山: "img/el-shan.png",
      澤: "img/el-ze.png",
    };

  function elImgTag(name) {
    return name && ELEMENT_IMG[name]
      ? '<img class="el-icon-img" src="' + ELEMENT_IMG[name] + '" alt="' + name + '">'
      : "";
  }
  function elIcons(hex) {
    if (!hex) return "";
    var names = [];
    return (
      hex.upperName && ELEMENT_IMG[hex.upperName] && names.push(hex.upperName),
      hex.lowerName && ELEMENT_IMG[hex.lowerName] && names.push(hex.lowerName),
      names.length === 0 &&
        (hex.upper &&
          SYM_KEY[hex.upper] &&
          ELEMENT_IMG[SYM_KEY[hex.upper]] &&
          names.push(SYM_KEY[hex.upper]),
        hex.lower &&
          SYM_KEY[hex.lower] &&
          ELEMENT_IMG[SYM_KEY[hex.lower]] &&
          names.push(SYM_KEY[hex.lower])),
      names.map(elImgTag).join(" ")
    );
  }
  function mainElIcon(hex) {
    if (!hex) return "";
    var n = hex.upperName || (hex.upper && SYM_KEY[hex.upper]) || "";
    return elImgTag(n);
  }
  function hexFromTitle(title) {
    if (!title) return null;
    var m = String(title).match(/^(\d+)\s*(.*)$/);
    if (!m) return null;
    for (var num = parseInt(m[1], 10), i = 0; i < HEXAGRAMS.length; i++)
      if (HEXAGRAMS[i].num === num) return HEXAGRAMS[i];
    return null;
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
    火_水: ["火水未濟", 64],
  };
  function triKey(t) {
    for (var k in TRI) if (TRI[k][0] === t[0] && TRI[k][1] === t[1] && TRI[k][2] === t[2]) return k;
    return "";
  }
  var STORAGE_KEY = "xingua_draft_v5",
    LOGIN_KEY = "xingua_logged_in",
    USERS_KEY = "xingua_users",
    SESSION_KEY = "xingua_session";
  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }
  function saveUsers(u) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(u));
    } catch (e) {}
  }
  function currentUser() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
    } catch (e) {
      return null;
    }
  }
  function setSession(u) {
    try {
      u
        ? sessionStorage.setItem(SESSION_KEY, JSON.stringify(u))
        : sessionStorage.removeItem(SESSION_KEY);
    } catch (e) {}
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (e) {}
  }
  function clearLegacySession() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (e) {}
    try {
      localStorage.removeItem(LOGIN_KEY);
    } catch (e) {}
  }
  function memberName() {
    var u = currentUser();
    return u && u.name ? u.name : "會員";
  }
  function uid() {
    var u = currentUser(),
      raw = u ? u.email : "guest";
    return String(raw).replace(/[^a-zA-Z0-9._-]/g, "_");
  }
  function diaryKey() {
    return DIARY_KEY_PREFIX + uid();
  }
  function changedHex(res) {
    var h = res.hex,
      up = TRI[SYM_KEY[h.upper]].slice(),
      low = TRI[SYM_KEY[h.lower]].slice(),
      changed = res.changedLines || [];
    if (changed.length === 0)
      return { sym: h.upper + " " + h.lower, label: h.symbolLabel, none: !0 };
    for (var ci = 0; ci < changed.length; ci++) {
      var line = changed[ci],
        target = line <= 3 ? low : up,
        idx = line <= 3 ? line - 1 : line - 4;
      target[idx] = target[idx] === 1 ? 0 : 1;
    }
    var upK = triKey(up),
      lowK = triKey(low),
      entry = HEX_TABLE[upK + "_" + lowK];
    return { sym: SYM_OF[upK] + " " + SYM_OF[lowK], label: entry ? entry[0] : "（變）" };
  }
  function zhiGuaObject(res) {
    var h = res.hex,
      up = TRI[SYM_KEY[h.upper]].slice(),
      low = TRI[SYM_KEY[h.lower]].slice(),
      changed = res.changedLines || [];
    if (changed.length === 0) return null;
    for (var ci = 0; ci < changed.length; ci++) {
      var line = changed[ci],
        target = line <= 3 ? low : up,
        idx = line <= 3 ? line - 1 : line - 4;
      target[idx] = target[idx] === 1 ? 0 : 1;
    }
    var upK = triKey(up),
      lowK = triKey(low),
      entry = HEX_TABLE[upK + "_" + lowK];
    if (!entry) return null;
    for (var hi = 0; hi < HEXAGRAMS.length; hi++)
      if (HEXAGRAMS[hi].symbolLabel === entry[0]) return HEXAGRAMS[hi];
    return null;
  }
  function resolveInterpretation(res) {
    var h = res.hex,
      changed = (res.changedLines || []).slice().sort(function (a, b) {
        return a - b;
      }),
      count = changed.length;
    if (count === 0) return { mode: "benGua", lineData: null, zhiGua: null };
    if (count === 1) {
      var pos1 = changed[0];
      return {
        mode: "line",
        lineData: (LINES[h.key] && LINES[h.key][String(pos1)]) || null,
        zhiGua: null,
      };
    }
    if (count === 2) {
      var pos2 = Math.max(changed[0], changed[1]);
      return {
        mode: "line",
        lineData: (LINES[h.key] && LINES[h.key][String(pos2)]) || null,
        zhiGua: null,
      };
    }
    if (count === 3) {
      var zhi3 = zhiGuaObject(res);
      return {
        mode: "bothGua",
        lineData: null,
        zhiGua: zhi3,
        benGuaText: h.plain || h.core || "",
        zhiGuaText: (zhi3 && (zhi3.plain || zhi3.core)) || "",
      };
    }
    if (count === 4 || count === 5) {
      var all = [1, 2, 3, 4, 5, 6],
        unchanged = all.filter(function (p) {
          return changed.indexOf(p) === -1;
        }),
        pos = Math.min.apply(null, unchanged),
        zhi = zhiGuaObject(res);
      return {
        mode: "line",
        lineData: (zhi && LINES[zhi.key] && LINES[zhi.key][String(pos)]) || null,
        zhiGua: zhi,
      };
    }
    var zhi6 = zhiGuaObject(res),
      special = null;
    return (
      h.num === 1 && h.yongJiuText && (special = { label: "用九", text: h.yongJiuText }),
      h.num === 2 && h.yongLiuText && (special = { label: "用六", text: h.yongLiuText }),
      {
        mode: "zhiGua",
        lineData: null,
        zhiGua: zhi6,
        zhiGuaText: (zhi6 && (zhi6.plain || zhi6.core)) || "",
        special,
      }
    );
  }
  function readingLineText(res) {
    var r = resolveInterpretation(res);
    if (r.mode === "line")
      return r.lineData
        ? r.lineData.name + "：" + r.lineData.text
        : res.hex.plain || res.hex.core || "";
    if (r.mode === "bothGua") {
      var label = r.zhiGua ? r.zhiGua.num + " " + r.zhiGua.symbolLabel : "";
      return (
        r.benGuaText +
        (r.zhiGuaText
          ? `
之卦` +
            (label ? "「" + label + "」" : "") +
            "：" +
            r.zhiGuaText
          : "")
      );
    }
    if (r.mode === "zhiGua") {
      var zlabel = r.zhiGua ? r.zhiGua.num + " " + r.zhiGua.symbolLabel + "：" : "",
        base = zlabel + r.zhiGuaText;
      return (
        r.special &&
          r.special.text &&
          (base +=
            `
` +
            r.special.label +
            "：" +
            r.special.text),
        base
      );
    }
    return res.hex.plain || res.hex.core || "";
  }
  function readingFocusText(res, cat) {
    var r = resolveInterpretation(res);
    if (r.mode === "line" && r.lineData && r.lineData.focus && r.lineData.focus[cat])
      return r.lineData.focus[cat];
    var h = res.hex;
    return h.focus[cat] || h.focus["其他/不確定"] || h.focus.未選 || h.core || "";
  }
  function readingGuideText(res) {
    var r = resolveInterpretation(res);
    if (r.mode === "line" && r.lineData && r.lineData.guide) return r.lineData.guide;
    var h = res.hex;
    return h.focus["其他/不確定"] || h.core || "";
  }
  var state = { cat: "", len: "", result: null, draftDate: "", saved: !1 };
  function $(id) {
    return document.getElementById(id);
  }
  function todayMD() {
    var d = new Date();
    return d.getMonth() + 1 + "/" + d.getDate();
  }
  function toast(msg) {
    var t = $("toast");
    ((t.textContent = msg),
      t.classList.add("show"),
      clearTimeout(t._timer),
      (t._timer = setTimeout(function () {
        t.classList.remove("show");
      }, 2400)));
  }
  function isLoggedIn() {
    return !!currentUser();
  }
  function loadDraft() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }
  function saveDraft(data) {
    try {
      return (localStorage.setItem(STORAGE_KEY, JSON.stringify(data)), !0);
    } catch (e) {
      return !1;
    }
  }
  function clearDraft() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }
  var screens = document.querySelectorAll(".screen");
  function go(name) {
    screens.forEach(function (s) {
      s.classList.toggle("active", s.getAttribute("data-screen") === name);
    });
    var el = document.querySelector(".main");
    el && (el.scrollTop = 0);
  }
  function resetForm() {
    ((state.result = null),
      (state.saved = !1),
      clearDraft(),
      document.querySelectorAll("#cat-chips .chip, #len-chips .chip").forEach(function (c) {
        c.classList.remove("on");
      }),
      (state.cat = ""),
      (state.len = ""));
    var dc = $("draw-card");
    dc && (dc.classList.remove("flipped"), (drawFlipped = !1));
    var da = $("draw-actions"),
      dad = $("draw-actions-done");
    da && dad && (da.classList.remove("hidden"), dad.classList.add("hidden"));
    var fb = $("btn-draw");
    fb && ((fb.style.display = ""), (fb.disabled = !1));
  }
  function setupChips(containerId, field) {
    var box = $(containerId);
    box.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (chip) {
        var val = chip.getAttribute(field === "cat" ? "data-cat" : "data-len");
        (box.querySelectorAll(".chip").forEach(function (c) {
          c.classList.remove("on");
        }),
          chip.classList.add("on"),
          (state[field] = val));
      }
    });
  }
  (setupChips("cat-chips", "cat"),
    setupChips("len-chips", "len"),
    document.querySelectorAll("#btn-menu").forEach(function (el) {
      el.addEventListener("click", function () {
        $("menu-overlay").classList.add("open");
      });
    }),
    $("btn-menu-close").addEventListener("click", function () {
      $("menu-overlay").classList.remove("open");
    }),
    $("menu-overlay").addEventListener("click", function (e) {
      e.target === this && this.classList.remove("open");
    }),
    document.querySelectorAll(".menu-item").forEach(function (m) {
      m.addEventListener("click", function () {
        $("menu-overlay").classList.remove("open");
        var act = m.getAttribute("data-act");
        act === "home"
          ? (resetForm(), go("p1"))
          : act === "diary"
            ? isLoggedIn()
              ? (renderDiaryData(),
                renderCalendar(),
                renderCollect(),
                go("diary"),
                setTimeout(scrollCalToCurrent, 120))
              : (toast("請先登入"), go("p5"))
            : act === "about"
              ? go("about")
              : act === "milk"
                ? go("milk")
                : act === "setting" &&
                  ((settingReturnTo = document.querySelector(".screen.active")
                    ? document.querySelector(".screen.active").getAttribute("data-screen")
                    : "diary"),
                  go("setting"),
                  updateSettingAccount());
      });
    }));
  function updateNav() {
    document.querySelectorAll("#nav-login").forEach(function (el) {
      el.textContent = isLoggedIn() ? memberName() : "登入/註冊";
    });
    var ml = $("menu-logout");
    ml && (ml.style.display = isLoggedIn() ? "" : "none");
    var dn = $("dash-name");
    dn && (dn.textContent = isLoggedIn() ? "你好，" + memberName() + "，歡迎回來" : "你好，旅人");
  }
  function doLogout() {
    (setSession(null),
      localStorage.removeItem(LOGIN_KEY),
      clearDraft(),
      (state.result = null),
      (state.saved = !1),
      (state.draftDate = null),
      resetForm(),
      refreshPerUserData(),
      $("menu-overlay").classList.remove("open"),
      $("saved-overlay").classList.remove("open"),
      updateNav(),
      go("p1"),
      toast("已登出"));
  }
  $("menu-logout").addEventListener("click", doLogout);
  function navLoginClick() {
    if (isLoggedIn()) {
      (renderDiaryData(),
        renderCalendar(),
        renderCollect(),
        go("diary"),
        setTimeout(scrollCalToCurrent, 120));
      return;
    }
    go("p5");
  }
  (document.querySelectorAll("#nav-login").forEach(function (el) {
    el.addEventListener("click", navLoginClick);
  }),
    $("milk-link").addEventListener("click", function (e) {
      (e.preventDefault(), go("milk"));
    }),
    $("btn-milk-support").addEventListener("click", function () {
      toast("奶茶金即將開放，敬請期待");
    }));
  var drawFlipped = !1;
  ($("btn-draw").addEventListener("click", function () {
    if (!drawFlipped) {
      drawFlipped = !0;
      var res = dailyDraw();
      ((res.cat = "每日靈感"), (res.len = "今日"), $("draw-card").classList.add("flipped"));
      var dk = $("draw-back-k"),
        dt = $("draw-back-txt");
      (dk && (dk.textContent = res.hex.num + " " + res.hex.symbolLabel),
        dt && (dt.textContent = res.hex.core || res.hex.plainText || ""));
      var del = $("draw-back-el");
      del && (del.textContent = mainElIcon(res.hex));
      var freshEls = unlockElementsFromHex(res.hex);
      (freshEls.length &&
        (renderCollect(),
        setTimeout(function () {
          toast("✨ 元素任務完成：" + freshEls.join("、") + "（已解鎖收藏相簿）");
        }, 1800)),
        (state.result = res),
        (state.saved = !1),
        $("draw-actions").classList.add("hidden"),
        $("draw-actions-done").classList.remove("hidden"),
        toast("今日靈感已揭曉"));
    }
  }),
    $("btn-redraw").addEventListener("click", function () {
      ((drawFlipped = !1),
        $("draw-card").classList.remove("flipped"),
        (state.result = null),
        (state.saved = !1),
        clearDraft(),
        resetForm(),
        updateSaveBtn(),
        $("draw-actions").classList.remove("hidden"),
        $("draw-actions-done").classList.add("hidden"));
    }),
    $("btn-save-draw").addEventListener("click", function () {
      saveFlow();
    }),
    $("btn-share-draw").addEventListener("click", openShare),
    $("btn-advance").addEventListener("click", function () {
      go("p2a");
    }),
    $("p2a-back").addEventListener("click", function () {
      (resetForm(), go("p1"));
    }),
    $("btn-start").addEventListener("click", function () {
      if (!state.cat) {
        toast("請先選擇問題類別");
        return;
      }
      if (!state.len) {
        toast("請先選擇預測有效長度");
        return;
      }
      startDivination();
    }));
  var divTimer = null,
    COIN_SLOTS = [
      { x: 60, y: 0 },
      { x: 194, y: 0 },
      { x: 6, y: 127 },
      { x: 248, y: 127 },
      { x: 60, y: 254 },
      { x: 194, y: 254 },
    ];
  function dailyDraw() {
    var idx = Math.floor(Math.random() * HEXAGRAMS.length),
      h = HEXAGRAMS[idx];
    return {
      hex: h,
      hexKey: h.key,
      cat: state.cat || "每日靈感",
      len: "今日",
      changedLines: [],
      lines: [7, 7, 7, 7, 7, 7],
      method: "daily",
      date: todayMD(),
      ts: Date.now(),
    };
  }
  function tossOneLine() {
    for (var sum = 0, i = 0; i < 3; i++) sum += Math.random() < 0.5 ? 3 : 2;
    return sum;
  }
  function castSixLines() {
    for (var lines = [], i = 0; i < 6; i++) lines.push(tossOneLine());
    return lines;
  }
  function pickResult() {
    for (
      var cat = state.cat || "未選", values = castSixLines(), changedLines = [], vals = [], i = 0;
      i < 6;
      i++
    ) {
      var v = values[i];
      (vals.push(v), (v === 6 || v === 9) && changedLines.push(i + 1));
    }
    var low = values.slice(0, 3),
      up = values.slice(3, 6);
    function triToName(three) {
      for (var key = "", k = 0; k < 3; k++) key += three[k] === 7 || three[k] === 9 ? "1" : "0";
      for (var t in TRI) if (TRI[t].join("") === key) return t;
      return "";
    }
    var lowK = triToName(low),
      upK = triToName(up),
      entry = HEX_TABLE[upK + "_" + lowK],
      h = null;
    if (entry) {
      for (var hi = 0; hi < HEXAGRAMS.length; hi++)
        if (HEXAGRAMS[hi].symbolLabel === entry[0]) {
          h = HEXAGRAMS[hi];
          break;
        }
    }
    return (
      h || (h = HEXAGRAMS[0]),
      {
        hex: h,
        hexKey: h.key,
        cat,
        len: state.len || "未選擇",
        changedLines,
        lines: vals,
        method: "coins",
        date: todayMD(),
        ts: Date.now(),
      }
    );
  }
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)),
        t = arr[i];
      ((arr[i] = arr[j]), (arr[j] = t));
    }
    return arr;
  }
  function startDivination() {
    ((state.result = null), (state.saved = !1), go("p2b"));
    var stage = $("divine-stage"),
      coins = stage.querySelectorAll(".coin"),
      core = $("core-btn"),
      ring = $("core-ring-fg"),
      R = 63,
      CIRC = 2 * Math.PI * R;
    ((ring.style.strokeDasharray = CIRC),
      (ring.style.strokeDashoffset = CIRC),
      (core.textContent = "起卦中"),
      core.classList.remove("done"));
    var slots = shuffle(COIN_SLOTS.slice());
    (coins.forEach(function (c, i) {
      ((c.style.left = slots[i].x + "px"), (c.style.top = slots[i].y + "px"));
    }),
      clearInterval(divTimer));
    var elapsed = 0,
      total = 1200;
    divTimer = setInterval(function () {
      elapsed += 300;
      var s2 = shuffle(COIN_SLOTS.slice());
      coins.forEach(function (c, i) {
        ((c.style.left = s2[i].x + "px"), (c.style.top = s2[i].y + "px"));
      });
      var remain = Math.max(0, total - elapsed);
      ((ring.style.strokeDashoffset = CIRC * (remain / total)),
        elapsed >= total &&
          (clearInterval(divTimer),
          (divTimer = null),
          (ring.style.strokeDashoffset = 0),
          (core.textContent = "起卦中"),
          core.classList.add("done"),
          setTimeout(function () {
            stopDivination();
          }, 350)));
    }, 300);
  }
  function stopDivination() {
    (clearInterval(divTimer), (divTimer = null));
    var res = pickResult();
    ((state.result = res), (state.saved = !1), renderCarousel(), updateSaveBtn(), go("p2c"));
  }
  $("core-btn").addEventListener("click", function () {});
  function catLabel(cat) {
    return !cat || cat === "未選" ? "這件事" : cat;
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function renderCarousel() {
    if (state.result) {
      var res = state.result,
        h = res.hex,
        catTxt = catLabel(res.cat),
        lenTxt = res.len || "未選擇",
        chg = changedHex(res),
        changed = res.changedLines || [];
      $("result-meta").innerHTML =
        '<div class="meta-row"><span class="k">類別</span><span>' +
        esc(res.cat) +
        '</span></div><div class="meta-row"><span class="k">有效長度</span><span>' +
        esc(res.len) +
        "</span></div>";
      var slides = "",
        changedTxt = changed.length === 0 ? "" : "動爻：第 " + changed.join("、") + " 爻",
        title = res.hex.num + " " + res.hex.symbolLabel;
      ((slides +=
        '<div class="slide symbol-slide"><div class="el-ic">' +
        mainElIcon(h) +
        '</div><div class="pair">' +
        h.upper +
        " " +
        h.lower +
        (chg.none ? "" : "　→　" + chg.sym) +
        '</div><div class="name">' +
        esc(title) +
        "</div>" +
        (changedTxt ? '<div class="changed-line">' + esc(changedTxt) + "</div>" : "") +
        "</div>"),
        (slides +=
          '<div class="slide"><div class="slide-k">' +
          esc(title) +
          '</div><div class="core-txt">' +
          esc(readingLineText(res)) +
          "</div></div>"),
        (slides +=
          '<div class="slide"><div class="slide-k">關於「' +
          esc(catTxt) +
          "×" +
          esc(lenTxt) +
          '」</div><div class="focus">' +
          esc(readingFocusText(res, res.cat)) +
          "</div></div>"),
        (slides +=
          '<div class="slide"><div class="slide-k">參考建議</div><div class="core-txt">' +
          esc(readingGuideText(res)) +
          "</div></div>"),
        ($("result-carousel").innerHTML = slides));
      for (var dotsHtml = "", i = 0; i < 4; i++)
        dotsHtml += "<i" + (i === 0 ? ' class="on"' : "") + "></i>";
      (($("result-dots").innerHTML = dotsHtml), updateDots());
    }
  }
  function updateDots() {
    for (
      var c = $("result-carousel"),
        idx = Math.round(c.scrollLeft / c.clientWidth) || 0,
        dots = $("result-dots").children,
        i = 0;
      i < dots.length;
      i++
    )
      dots[i].className = i === idx ? "on" : "";
  }
  $("result-carousel").addEventListener("scroll", updateDots);
  function updateSaveBtn() {
    for (var list = ["btn-save-p2c", "btn-save-draw"], i = 0; i < list.length; i++) {
      var btn = $(list[i]);
      btn &&
        (state.saved
          ? ((btn.textContent = "已儲存"), (btn.disabled = !0))
          : ((btn.textContent = list[i] === "btn-save-p2c" ? "儲存到日記" : "儲存至日記"),
            (btn.disabled = !1)));
    }
  }
  ($("btn-save-p2c").addEventListener("click", function () {
    saveFlow();
  }),
    $("btn-redo-p2c").addEventListener("click", function () {
      go("p2a");
    }),
    $("btn-share-p2c").addEventListener("click", openShare));
  function saveFlow() {
    if (state.result) {
      if (isLoggedIn()) {
        (commitRecord(state.result),
          (state.saved = !0),
          updateSaveBtn(),
          renderDiaryData(),
          renderCalendar(),
          $("saved-overlay").classList.add("open"));
        return;
      }
      (saveDraft(state.result),
        (state.draftDate = state.result.date),
        toast("已幫你暫存這筆結果"),
        setTimeout(function () {
          go("p5");
        }, 700));
    }
  }
  var authMode = "login";
  function setAuthMode(mode) {
    ((authMode = mode),
      $("tab-login").classList.toggle("on", mode === "login"),
      $("tab-register").classList.toggle("on", mode === "register"),
      ($("auth-name-field").style.display = mode === "register" ? "" : "none"),
      ($("auth-pass2-field").style.display = mode === "register" ? "" : "none"),
      ($("login-title").textContent = mode === "register" ? "註冊" : "登入"),
      ($("login-sub").textContent =
        mode === "register"
          ? "建立帳號，之後的卜卦與應驗都會為你保存"
          : "記錄你的卜卦與應驗，歡迎回來對照，看看指引是否成真"),
      ($("btn-login").textContent = mode === "register" ? "註冊並登入" : "登入"));
    var fg = $("auth-forgot");
    fg && (fg.style.display = mode === "login" ? "" : "none");
    var fb = $("forgot-box");
    fb && (fb.style.display = "none");
    var ph = $("pass-hint");
    (ph && ((ph.style.display = "none"), (ph.className = "pass-hint")),
      ($("auth-error").textContent = ""));
  }
  ($("tab-login").addEventListener("click", function () {
    setAuthMode("login");
  }),
    $("tab-register").addEventListener("click", function () {
      setAuthMode("register");
    }),
    setAuthMode("login"));
  function authFail(msg) {
    var e = $("auth-error");
    (e && (e.textContent = msg), toast(msg));
  }
  function isValidEmail(e) {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(e);
  }
  function isStrongPassword(p) {
    return p.length >= 8 && /[A-Za-z]/.test(p) && /[0-9]/.test(p);
  }
  function doLogin() {
    var email = $("auth-email").value.trim().toLowerCase(),
      pass = $("auth-pass").value,
      pass2 = $("auth-pass2").value,
      users = getUsers(),
      nameField = $("auth-name").value.trim();
    if (!email) {
      authFail("請輸入帳號（Email）");
      return;
    }
    if (!isValidEmail(email)) {
      authFail("Email 格式有誤（例：you@example.com，不可含空白或特殊符號）");
      return;
    }
    if (!pass) {
      authFail("請輸入密碼");
      return;
    }
    if (authMode === "register") {
      if (!isStrongPassword(pass)) {
        authFail("密碼強度不足：至少 8 碼，且需包含字母與數字");
        return;
      }
      if (!pass2 || pass !== pass2) {
        authFail("密碼與確認密碼不符合");
        return;
      }
      if (users[email]) {
        authFail("這個帳號已註冊，請直接登入");
        return;
      }
      if (!nameField) {
        authFail("請輸入暱稱");
        return;
      }
      var dupName = null;
      for (var k in users)
        if (
          users[k] &&
          users[k].name &&
          String(users[k].name).toLowerCase() === nameField.toLowerCase()
        ) {
          dupName = users[k].name;
          break;
        }
      if (dupName) {
        authFail("這個暱稱已被使用，請換一個");
        return;
      }
      var nm = nameField;
      ((users[email] = { pass, name: nm, createdAt: Date.now() }),
        saveUsers(users),
        setSession({ email, name: nm }),
        toast("註冊成功，歡迎 " + nm));
    } else {
      var rec = users[email];
      if (!rec || rec.pass !== pass) {
        authFail("帳號或密碼不正確");
        return;
      }
      (setSession({ email, name: rec.name }), toast("登入成功，歡迎回來 " + rec.name));
    }
    (state.result && (commitRecord(state.result), (state.saved = !0), clearDraft()),
      refreshPerUserData(),
      updateNav(),
      showLoading());
  }
  ($("btn-login").addEventListener("click", function () {
    doLogin();
  }),
    $("auth-pass").addEventListener("keydown", function (e) {
      e.key === "Enter" && doLogin();
    }));
  var passHint = $("pass-hint");
  $("auth-pass").addEventListener("input", function () {
    if (passHint) {
      var p = this.value;
      if (!p) {
        ((passHint.style.display = "none"), (passHint.className = "pass-hint"));
        return;
      }
      ((passHint.style.display = ""),
        isStrongPassword(p)
          ? ((passHint.textContent = "✓ 密碼符合規範（至少 8 碼，含英文與數字）"),
            (passHint.className = "pass-hint ok"))
          : ((passHint.textContent = "密碼需至少 8 碼，且需含英文與數字"),
            (passHint.className = "pass-hint")));
    }
  });
  function updatePassHintVisibility() {
    passHint && (passHint.style.display = "none");
  }
  function openForgot() {
    var box = $("forgot-box");
    box &&
      ((box.style.display = ""),
      ($("forgot-result").textContent = ""),
      ($("forgot-email").value = ""),
      ($("auth-error").textContent = ""),
      setTimeout(function () {
        $("forgot-email").focus();
      }, 50));
  }
  function closeForgot() {
    var box = $("forgot-box");
    box && (box.style.display = "none");
  }
  ($("btn-forgot").addEventListener("click", function () {
    openForgot();
  }),
    $("btn-forgot-close").addEventListener("click", function () {
      closeForgot();
    }),
    $("btn-forgot-find").addEventListener("click", function () {
      var em = $("forgot-email").value.trim().toLowerCase(),
        res = $("forgot-result");
      if (res) {
        if (!em) {
          res.innerHTML = '<span class="fr-err">請輸入註冊時的信箱</span>';
          return;
        }
        if (!isValidEmail(em)) {
          res.innerHTML = '<span class="fr-err">Email 格式有誤（例：you@example.com）</span>';
          return;
        }
        var users = getUsers(),
          rec = users[em];
        if (!rec) {
          res.innerHTML =
            '<span class="fr-err">查無此信箱，請確認是否曾以該信箱註冊（僅能以信箱尋找，無法用用戶名）</span>';
          return;
        }
        ((res.innerHTML =
          '<span class="fr-ok">找到你的帳號：</span><div class="fr-pw">密碼：' +
          esc(rec.pass) +
          '</div><span class="fr-ok">請記下密碼後登入，或關閉此面板</span>'),
          toast("已透過信箱找到密碼"));
      }
    }),
    $("forgot-email").addEventListener("keydown", function (e) {
      e.key === "Enter" && $("btn-forgot-find").click();
    }),
    $("btn-later").addEventListener("click", function () {
      go("p1");
    }));
  function showLoading() {
    (go("loading"),
      setTimeout(function () {
        (renderDiaryData(),
          renderCalendar(),
          renderCollect(),
          go("diary"),
          setTimeout(scrollCalToCurrent, 120));
      }, 1100));
  }
  var SETTINGS_KEY = "xingua_settings";
  function settingsKey() {
    return SETTINGS_KEY + "_" + uid();
  }
  function getSettings() {
    try {
      return JSON.parse(localStorage.getItem(settingsKey()) || "{}");
    } catch (e) {
      return {};
    }
  }
  function saveSettings(s) {
    try {
      localStorage.setItem(settingsKey(), JSON.stringify(s));
    } catch (e) {}
  }
  function refreshPerUserData() {
    ((diaryData = loadDiary()), renderDiaryData(), renderCalendar(), renderCollect());
  }
  function applySettingsUI() {
    var s = getSettings(),
      r = $("set-remind");
    if (r) {
      var on = s.remind !== !1;
      ((r.textContent = on ? "已開啟" : "已關閉"), r.classList.toggle("on", on));
    }
    var p = $("set-push");
    if (p) {
      var pon = !!s.push;
      ((p.textContent = pon ? "已開啟" : "開啟"), p.classList.toggle("on", pon));
    }
    var b = $("btn-remind");
    b && (b.textContent = s.remind !== !1 ? "關閉" : "開啟");
  }
  var settingReturnTo = "diary";
  $("setting-back").addEventListener("click", function () {
    go(settingReturnTo);
  });
  function updateSettingAccount() {
    var a = $("setting-account");
    a && (a.textContent = isLoggedIn() ? memberName() + "（已登入）" : "未登入");
    var btn = $("btn-edit-name");
    btn && (btn.style.display = isLoggedIn() ? "" : "none");
  }
  ($("btn-edit-name").addEventListener("click", function () {
    var u = currentUser();
    if (u) {
      var cur = (u.name || "").trim(),
        nm = prompt("輸入新的暱稱（最多 16 字）", cur);
      if (nm !== null) {
        if (((nm = nm.trim()), !nm)) {
          toast("暱稱不能空白");
          return;
        }
        if (nm.length > 16) {
          toast("暱稱最多 16 字");
          return;
        }
        var users = getUsers();
        for (var k in users)
          if (
            k !== u.email &&
            users[k] &&
            users[k].name &&
            String(users[k].name).toLowerCase() === nm.toLowerCase()
          ) {
            toast("這個暱稱已被使用，請換一個");
            return;
          }
        (users[u.email] && ((users[u.email].name = nm), saveUsers(users)),
          setSession({ email: u.email, name: nm }),
          updateNav(),
          updateSettingAccount(),
          toast("暱稱已更新為「" + nm + "」"));
      }
    }
  }),
    $("set-remind").addEventListener("click", function () {
      var s = getSettings();
      ((s.remind = s.remind === !1),
        saveSettings(s),
        applySettingsUI(),
        toast("寄信提醒設定已更新"));
    }),
    $("set-push").addEventListener("click", function () {
      var s = getSettings();
      ((s.push = !s.push), saveSettings(s), applySettingsUI(), toast("推播通知設定已更新"));
    }));
  var CAL_WEEK = ["日", "一", "二", "三", "四", "五", "六"],
    DIARY_KEY_PREFIX = "xingua_diary_";
  function seedDiary() {
    return [];
  }
  function loadDiary() {
    try {
      var raw = localStorage.getItem(diaryKey());
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    var seed = seedDiary();
    try {
      localStorage.setItem(diaryKey(), JSON.stringify(seed));
    } catch (e) {}
    return seed;
  }
  function saveDiary(arr) {
    diaryData = arr;
    try {
      for (var clean = [], si = 0; si < arr.length; si++) {
        var r = arr[si],
          c = {};
        for (var k in r) k === "siblings" || k === "fromDiary" || (c[k] = r[k]);
        clean.push(c);
      }
      localStorage.setItem(diaryKey(), JSON.stringify(clean));
    } catch (e) {}
  }
  function recordFromResult(res) {
    var now = new Date();
    return {
      date: now.getMonth() + 1 + "/" + now.getDate(),
      y: now.getFullYear(),
      m: now.getMonth() + 1,
      d: now.getDate(),
      type: res.method === "daily" ? "card" : "divination",
      ts: Date.now(),
      title: res.hex.num + " " + res.hex.symbolLabel,
      cat: res.cat || "未選",
      len: res.len || "",
      mood: "",
      verify: null,
      note: "",
      hex: res.hex,
      hexKey: res.hexKey,
      changedLines: res.changedLines || [],
      lines: res.lines || [],
    };
  }
  function commitRecord(res) {
    var arr = loadDiary();
    return (arr.unshift(recordFromResult(res)), saveDiary(arr), arr);
  }
  var diaryData = loadDiary();
  function diaryByDate(y, m, d) {
    for (var out = [], i = 0; i < diaryData.length; i++)
      diaryData[i].y === y &&
        diaryData[i].m === m &&
        diaryData[i].d === d &&
        out.push(diaryData[i]);
    return (
      out.sort(function (a, b) {
        return (b.ts || 0) - (a.ts || 0);
      }),
      out
    );
  }
  function renderCalendar() {
    var box = $("cal-months");
    if (box) {
      for (var html = "", mi = 0; mi < 14; mi++) {
        var ym = addMonths(new Date(), mi - 4),
          y = ym.getFullYear(),
          m = ym.getMonth() + 1;
        ((html += '<div class="cal-month" data-ym="' + y + "-" + m + '">'),
          (html += '<div class="cal-month-title">' + y + " 年 " + m + " 月</div>"),
          (html += '<div class="cal-week">'));
        for (var w = 0; w < 7; w++) html += "<span>" + CAL_WEEK[w] + "</span>";
        ((html += "</div>"), (html += '<div class="cal-grid">'));
        for (
          var first = new Date(y, m - 1, 1).getDay(),
            days = new Date(y, m, 0).getDate(),
            today = new Date(),
            pad = 0;
          pad < first;
          pad++
        )
          html += '<div class="cal-cell empty"></div>';
        for (var day = 1; day <= days; day++) {
          for (
            var recs = diaryByDate(y, m, day),
              rec = recs.length ? recs[0] : null,
              dailyRec = null,
              dr = 0;
            dr < recs.length;
            dr++
          )
            if (recs[dr].type === "card") {
              dailyRec = recs[dr];
              break;
            }
          var recHex = dailyRec ? dailyRec.hex || hexFromTitle(dailyRec.title || "") : null,
            recIcons = recHex ? mainElIcon(recHex) : "",
            cls = "cal-cell";
          (dailyRec && (recIcons ? (cls += " has-mood") : (cls += " has-hex")),
            y === today.getFullYear() &&
              m === today.getMonth() + 1 &&
              day === today.getDate() &&
              (cls += " today"),
            (html +=
              '<div class="' +
              cls +
              '" data-y="' +
              y +
              '" data-m="' +
              m +
              '" data-d="' +
              day +
              '">'),
            (html += "<span>" + day + "</span>"),
            dailyRec && recIcons && (html += '<span class="cal-mood">' + recIcons + "</span>"),
            (html += "</div>"));
        }
        html += "</div></div>";
      }
      ((box.innerHTML = html), setTimeout(scrollCalToCurrent, 150));
    }
  }
  function scrollCalToCurrent() {
    var box = document.getElementById("cal-scroll");
    if (box) {
      var now = new Date(),
        cur = box.querySelector(
          '.cal-month[data-ym="' + now.getFullYear() + "-" + (now.getMonth() + 1) + '"]',
        );
      cur && ((box.scrollTop = cur.offsetTop - 6), updateCalTitle(cur));
    }
  }
  function addMonths(d, n) {
    var r = new Date(d);
    return (r.setDate(1), r.setMonth(r.getMonth() + n), r);
  }
  function updateCalTitle(monthEl) {
    var t = $("cal-title");
    if (t && monthEl) {
      var parts = monthEl.getAttribute("data-ym").split("-");
      t.textContent = parts[0] + " 年 " + parseInt(parts[1], 10) + " 月";
    }
  }
  ($("cal-prev").addEventListener("click", function () {
    var box = $("cal-scroll");
    box.scrollBy({ top: -300, behavior: "smooth" });
  }),
    $("cal-next").addEventListener("click", function () {
      var box = $("cal-scroll");
      box.scrollBy({ top: 300, behavior: "smooth" });
    }),
    $("cal-scroll").addEventListener("scroll", function () {
      for (
        var box = $("cal-scroll"), months = box.querySelectorAll(".cal-month"), i = 0;
        i < months.length;
        i++
      )
        months[i].offsetTop <= box.scrollTop + 30 && updateCalTitle(months[i]);
    }),
    $("cal-months").addEventListener("click", function (e) {
      var cell = e.target.closest(".cal-cell");
      if (!(!cell || cell.classList.contains("empty"))) {
        var recs = diaryByDate(
          parseInt(cell.getAttribute("data-y"), 10),
          parseInt(cell.getAttribute("data-m"), 10),
          parseInt(cell.getAttribute("data-d"), 10),
        );
        if (recs && recs.length) {
          var rec = recs[0];
          ((rec.fromDiary = !0), (rec.siblings = recs), openDetail(rec));
        } else toast("這天沒有卜卦紀錄");
      }
    }));
  var COLLECT_BOOKS = [
      {
        title: "🎯 系統任務",
        grid: "three",
        items: [
          { e: "🔮", label: "完成第一次卜卦", locked: !1 },
          { e: "⭐", label: "完成第 10 次卜卦", locked: !0 },
          { e: "📝", label: "完成 3 次筆記回饋", locked: !1 },
        ],
      },
      {
        title: "🧭 元素收集",
        grid: "four",
        items: [
          { e: "☀️", label: "天", locked: !1 },
          { e: "⛰️", label: "地", locked: !0 },
          { e: "💧", label: "水", locked: !1 },
          { e: "🔥", label: "火", locked: !0 },
          { e: "⚡", label: "雷", locked: !1 },
          { e: "🌬️", label: "風", locked: !0 },
          { e: "🏔️", label: "山", locked: !1 },
          { e: "🌊", label: "澤", locked: !0 },
        ],
      },
    ],
    COLLECT_KEY = "xingua_collect_elements";
  function collectKey() {
    return COLLECT_KEY + "_" + uid();
  }
  function getCollectedElements() {
    try {
      return JSON.parse(localStorage.getItem(collectKey()) || "[]");
    } catch (e) {
      return [];
    }
  }
  function saveCollectedElements(arr) {
    try {
      localStorage.setItem(collectKey(), JSON.stringify(arr));
    } catch (e) {}
  }
  function unlockElementsFromHex(hex) {
    if (!hex) return [];
    for (
      var names = [hex.upperName, hex.lowerName], cur = getCollectedElements(), fresh = [], i = 0;
      i < names.length;
      i++
    ) {
      var n = names[i];
      n && cur.indexOf(n) === -1 && (cur.push(n), fresh.push(n));
    }
    return (fresh.length && saveCollectedElements(cur), fresh);
  }
  function renderCollect() {
    var body = $("collect-body");
    if (body) {
      for (var arr = loadDiary(), divCount = 0, feedbackCount = 0, di = 0; di < arr.length; di++)
        (arr[di].type === "divination" && divCount++,
          (arr[di].note || arr[di].mood || arr[di].verify) && feedbackCount++);
      var mission0 = divCount >= 1,
        mission1 = divCount >= 10,
        mission2 = feedbackCount >= 3;
      ((COLLECT_BOOKS[0].items[0].locked = !mission0),
        (COLLECT_BOOKS[0].items[1].locked = !mission1),
        (COLLECT_BOOKS[0].items[2].locked = !mission2));
      for (
        var html = "", unlockedCount = 0, collected = getCollectedElements(), b = 0;
        b < COLLECT_BOOKS.length;
        b++
      ) {
        var book = COLLECT_BOOKS[b];
        ((html += '<div class="collect-book"><div class="book-title">' + book.title + "</div>"),
          (html += '<div class="collect-grid ' + (book.grid === "three" ? "three" : "") + '">'));
        for (var i = 0; i < book.items.length; i++) {
          var it = book.items[i],
            isLocked = it.locked;
          (b === 1 && (isLocked = collected.indexOf(it.label) === -1),
            isLocked || unlockedCount++,
            (html +=
              '<div class="collect-item' +
              (isLocked ? " locked" : "") +
              '" data-idx="' +
              b +
              "-" +
              i +
              '">'),
            (html += '<div class="ci-emoji">' + it.e + "</div>"),
            (html += '<div class="ci-label">' + it.label + "</div></div>"));
        }
        html += "</div></div>";
      }
      body.innerHTML = html;
      var cnt = $("collect-count");
      cnt && (cnt.textContent = unlockedCount);
    }
  }
  ($("btn-collect").addEventListener("click", function () {
    (renderCollect(), $("collect-overlay").classList.add("open"));
  }),
    $("collect-close").addEventListener("click", function () {
      $("collect-overlay").classList.remove("open");
    }),
    $("collect-overlay").addEventListener("click", function (e) {
      e.target === this && this.classList.remove("open");
    }),
    $("collect-body").addEventListener("click", function (e) {
      var item = e.target.closest(".collect-item");
      item &&
        (item.classList.contains("locked")
          ? toast("尚未解鎖：完成任務或收集元素後解鎖")
          : toast("已收集 ✨"));
    }));
  var GUARDIAN_KEY = "xingua_guardian_opened",
    GUARDIAN_HEX_KEY = "xingua_guardian_hex";
  function guardianKey() {
    return GUARDIAN_KEY + "_" + uid();
  }
  function guardianHexKey() {
    return GUARDIAN_HEX_KEY + "_" + uid();
  }
  function guardianOpened() {
    try {
      return localStorage.getItem(guardianKey()) === "1";
    } catch (e) {
      return !1;
    }
  }
  function markGuardianOpened() {
    try {
      localStorage.setItem(guardianKey(), "1");
    } catch (e) {}
  }
  function guardianStoredNum() {
    try {
      var n = parseInt(localStorage.getItem(guardianHexKey()) || "", 10);
      return n || null;
    } catch (e) {
      return null;
    }
  }
  function renderGuardianBack() {
    var n = guardianStoredNum(),
      h = null;
    if (n) {
      for (var i = 0; i < HEXAGRAMS.length; i++)
        if (HEXAGRAMS[i].num === n) {
          h = HEXAGRAMS[i];
          break;
        }
    }
    h || (h = HEXAGRAMS[Math.floor(Math.random() * HEXAGRAMS.length)]);
    var bk = document.querySelector("#guardian-back .guardian-back-k"),
      bt = document.querySelector("#guardian-back .guardian-back-txt"),
      be = $("guardian-back-el");
    return (
      bk && (bk.textContent = h.num + " " + h.symbolLabel),
      bt && (bt.textContent = h.core || h.plainText || ""),
      be && (be.textContent = mainElIcon(h)),
      h
    );
  }
  function openGuardian() {
    var ov = $("guardian-overlay"),
      card = $("guardian-card"),
      flipBtn = $("guardian-flip"),
      note = $("guardian-locked-note");
    (guardianOpened()
      ? (renderGuardianBack(),
        card.classList.add("flipped"),
        flipBtn && (flipBtn.style.display = "none"),
        note && (note.style.display = ""))
      : (card.classList.remove("flipped"),
        flipBtn && (flipBtn.style.display = ""),
        note && (note.style.display = "none")),
      ov.classList.add("open"));
  }
  ($("btn-guardian").addEventListener("click", openGuardian),
    $("guardian-close").addEventListener("click", function () {
      $("guardian-overlay").classList.remove("open");
    }),
    $("guardian-overlay").addEventListener("click", function (e) {
      e.target === this && this.classList.remove("open");
    }),
    $("guardian-flip").addEventListener("click", function () {
      if (!guardianOpened()) {
        var card = $("guardian-card"),
          flipBtn = $("guardian-flip"),
          note = $("guardian-locked-note"),
          h = renderGuardianBack();
        try {
          localStorage.setItem(guardianHexKey(), String(h.num));
        } catch (e) {}
        (card.classList.add("flipped"),
          markGuardianOpened(),
          (flipBtn.style.display = "none"),
          setTimeout(function () {
            ((note.style.display = ""), toast("🛡️ 本命守護牌已固定"));
          }, 1600));
      }
    }));
  function renderDetailCarousel(rec) {
    var c = $("detail-carousel"),
      d = $("detail-dots");
    if (c) {
      var h = rec.hex,
        chg = changedHex(rec),
        catTxt = rec.cat || "未選",
        changed = rec.changedLines || [],
        changedTxt = changed.length ? "動爻：第 " + changed.join("、") + " 爻" : "",
        title = h.num + " " + h.symbolLabel,
        slides = "";
      if (
        ((slides +=
          '<div class="slide symbol-slide"><div class="el-ic">' +
          mainElIcon(h) +
          '</div><div class="pair">' +
          h.upper +
          " " +
          h.lower +
          (chg.none ? "" : "　→　" + chg.sym) +
          '</div><div class="name">' +
          esc(title) +
          "</div>" +
          (changedTxt ? '<div class="changed-line">' + esc(changedTxt) + "</div>" : "") +
          "</div>"),
        (slides +=
          '<div class="slide"><div class="slide-k">' +
          esc(title) +
          '</div><div class="core-txt">' +
          esc(readingLineText(rec)) +
          "</div></div>"),
        (slides +=
          '<div class="slide"><div class="slide-k">關於「' +
          esc(catTxt) +
          "×" +
          esc(rec.len || "") +
          '」</div><div class="focus">' +
          esc(readingFocusText(rec, catTxt)) +
          "</div></div>"),
        (slides +=
          '<div class="slide"><div class="slide-k">參考建議</div><div class="core-txt">' +
          esc(readingGuideText(rec)) +
          "</div></div>"),
        (c.innerHTML = slides),
        d)
      ) {
        for (var dotsHtml = "", i = 0; i < 4; i++)
          dotsHtml += "<i" + (i === 0 ? ' class="on"' : "") + "></i>";
        d.innerHTML = dotsHtml;
      }
    }
  }
  function openDetail(rec) {
    detailRec = rec;
    var tb = $("detail-topbar");
    tb &&
      (rec.fromDiary
        ? (tb.innerHTML =
            '<button class="back" id="detail-back">← 返回</button><div class="right"></div>')
        : (tb.innerHTML =
            '<div class="brand">DEC. 12</div><div class="right"><button class="navlink" id="nav-login">登入/註冊</button><button class="icon-btn" id="btn-menu" aria-label="選單">☰</button></div>'),
      rec.fromDiary || updateNav(),
      bindDetailBack(!!rec.fromDiary),
      document.querySelectorAll("#btn-menu").forEach(function (el) {
        el.addEventListener("click", function () {
          $("menu-overlay").classList.add("open");
        });
      }),
      document.querySelectorAll("#nav-login").forEach(function (el) {
        el.addEventListener("click", navLoginClick);
      }));
    var tabsBox = $("detail-tabs"),
      siblings = rec.siblings && rec.siblings.length ? rec.siblings : [rec];
    if (rec.fromDiary)
      for (var sif = 0; sif < siblings.length; sif++)
        ((siblings[sif].fromDiary = !0), (siblings[sif].siblings = siblings));
    if (tabsBox)
      if (siblings.length > 1) {
        tabsBox.classList.remove("hidden");
        for (var html = "", si = 0; si < siblings.length; si++) {
          var s = siblings[si],
            label = s.type === "card" ? "🎴 抽卡" : "🔮 卜卦",
            active = s === rec ? " on" : "";
          html +=
            '<button class="detail-tab' +
            active +
            '" data-idx="' +
            si +
            '">' +
            label +
            (si === 0 ? "（最近）" : "") +
            "</button>";
        }
        tabsBox.innerHTML = html;
        for (var tabs = tabsBox.querySelectorAll(".detail-tab"), ti = 0; ti < tabs.length; ti++)
          (function (idx) {
            tabs[ti].addEventListener("click", function () {
              openDetail(siblings[idx]);
            });
          })(ti);
      } else (tabsBox.classList.add("hidden"), (tabsBox.innerHTML = ""));
    var viewCard = $("detail-view-card"),
      viewDiv = $("detail-view-divination");
    if (rec.type === "card") {
      if (
        (viewCard && viewCard.classList.add("on"),
        viewDiv && viewDiv.classList.remove("on"),
        viewCard)
      ) {
        var hCard = rec.hex || hexFromTitle(rec.title || ""),
          coreCard = hCard && hCard.core ? hCard.core : rec.note || rec.title || "",
          elCard = hCard ? mainElIcon(hCard) : "";
        viewCard.innerHTML =
          '<div class="detail-card">' +
          (elCard ? '<div class="el-ic">' + elCard + "</div>" : "") +
          '<div class="slide-k">' +
          esc(rec.title || "") +
          '</div><div class="core-txt">' +
          esc(coreCard) +
          "</div></div>";
      }
    } else (viewCard && viewCard.classList.remove("on"), viewDiv && viewDiv.classList.add("on"));
    var dd = document.querySelector(".detail-date");
    if (
      (dd && (dd.textContent = rec.date + " · " + (rec.cat || "") + " · " + (rec.len || "")),
      detailNoteDraft && detailNoteDraft.ts === rec.ts && detailNoteDraft.title === rec.title
        ? (($("detail-note").value = detailNoteDraft.text),
          setNoteSaveUI(!0, !1),
          setNoteBtnMode(!1))
        : (($("detail-note").value = rec.note || ""),
          setNoteSaveUI(!1, !!rec.note),
          setNoteBtnMode(!!rec.note)),
      (detailMood = null),
      document.querySelectorAll("#detail-moods .mood-btn").forEach(function (b) {
        (b.classList.remove("on"),
          rec.mood &&
            b.getAttribute("data-mood") === rec.mood &&
            (b.classList.add("on"), (detailMood = rec.mood)));
      }),
      (verify = null),
      $("verify-y").classList.remove("on-y"),
      $("verify-x").classList.remove("on-x"),
      rec.verify === "y" && ((verify = "y"), $("verify-y").classList.add("on-y")),
      rec.verify === "x" && ((verify = "x"), $("verify-x").classList.add("on-x")),
      rec.hex)
    )
      renderDetailCarousel(rec);
    else if (rec.title) {
      var c = $("detail-carousel");
      c &&
        (c.innerHTML =
          '<div class="slide"><div class="slide-k">' +
          esc(rec.title) +
          '</div><div class="core-txt">' +
          esc(rec.note || rec.title) +
          "</div></div>");
      var d = $("detail-dots");
      d && (d.innerHTML = '<i class="on"></i>');
    }
    go("detail");
  }
  function renderDiaryData() {
    var sc = $("stat-count");
    sc && (sc.textContent = diaryData.length);
    var sp = $("stat-pending");
    if (sp) {
      for (var n = 0, i = 0; i < diaryData.length; i++) diaryData[i].verify !== "y" && n++;
      sp.textContent = n;
    }
  }
  ($("about-back").addEventListener("click", function () {
    (resetForm(), go("p1"));
  }),
    $("milk-back").addEventListener("click", function () {
      (resetForm(), go("p1"));
    }),
    $("saved-go").addEventListener("click", function () {
      if (($("saved-overlay").classList.remove("open"), !isLoggedIn())) {
        (toast("請先登入"), go("p5"));
        return;
      }
      (renderDiaryData(),
        renderCalendar(),
        renderCollect(),
        go("diary"),
        setTimeout(scrollCalToCurrent, 120));
    }),
    $("saved-stay").addEventListener("click", function () {
      $("saved-overlay").classList.remove("open");
    }),
    $("saved-overlay").addEventListener("click", function (e) {
      e.target === this && this.classList.remove("open");
    }));
  function bindDetailBack(fromDiary) {
    var b = $("detail-back");
    b &&
      b.addEventListener("click", function () {
        go(fromDiary ? "diary" : "p1");
      });
  }
  ((function () {
    var b = $("detail-back");
    b &&
      b.addEventListener("click", function () {
        go("diary");
      });
  })(),
    (function () {
      var d = $("detail-dots");
      if (!d) return;
      for (var html = "", i = 0; i < 4; i++)
        html += "<i" + (i === 0 ? ' class="on"' : "") + "></i>";
      d.innerHTML = html;
      var c = $("detail-carousel");
      function update() {
        for (
          var idx = Math.round(c.scrollLeft / c.clientWidth) || 0, dots = d.children, j = 0;
          j < dots.length;
          j++
        )
          dots[j].className = j === idx ? "on" : "";
      }
      c.addEventListener("scroll", update);
    })());
  var detailMood = null,
    detailRec = null,
    detailNoteDraft = null;
  function setNoteSaveUI(dirty, saved) {
    var hint = $("note-save-hint"),
      btn = $("note-save-btn");
    (hint &&
      ((hint.textContent = dirty ? "尚未儲存" : saved ? "已儲存" : ""),
      hint.classList.toggle("dirty", !!dirty)),
      btn && btn.classList.toggle("saved", !!saved && !dirty));
  }
  document.querySelectorAll("#detail-moods .mood-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      ((detailMood = btn.getAttribute("data-mood")),
        document.querySelectorAll("#detail-moods .mood-btn").forEach(function (b) {
          b.classList.remove("on");
        }),
        btn.classList.add("on"),
        toast("已記錄表情 " + detailMood),
        saveDetailField("mood", detailMood));
    });
  });
  var verify = null;
  ($("verify-y").addEventListener("click", function () {
    ((verify = "y"),
      $("verify-y").classList.add("on-y"),
      $("verify-x").classList.remove("on-x"),
      toast("已記錄：應驗了"),
      saveDetailField("verify", "y"));
  }),
    $("verify-x").addEventListener("click", function () {
      ((verify = "x"),
        $("verify-x").classList.add("on-x"),
        $("verify-y").classList.remove("on-y"),
        toast("已記錄：未應驗"),
        saveDetailField("verify", "x"));
    }));
  function saveDetailField(field, val) {
    if (detailRec) {
      if (((detailRec[field] = val), diaryData.indexOf(detailRec) >= 0)) {
        saveDiary(diaryData);
        return;
      }
      for (var arr = loadDiary(), i = 0; i < arr.length; i++)
        if (arr[i].ts === detailRec.ts && arr[i].title === detailRec.title) {
          ((arr[i][field] = val), saveDiary(arr));
          return;
        }
      (diaryData.indexOf(detailRec) < 0 && diaryData.unshift(detailRec), saveDiary(diaryData));
    }
  }
  var noteSaved = !1;
  function setNoteBtnMode(saved) {
    var btn = $("note-save-btn");
    btn &&
      ((noteSaved = !!saved),
      (btn.innerHTML = saved ? "✏️ 編輯" : "💾 儲存"),
      btn.classList.toggle("saved", !!saved));
  }
  ($("detail-note").addEventListener("input", function () {
    detailRec &&
      ((detailNoteDraft = { ts: detailRec.ts, title: detailRec.title, text: this.value }),
      setNoteSaveUI(!0, !1),
      setNoteBtnMode(!1));
  }),
    $("note-save-btn").addEventListener("click", function () {
      if (detailRec) {
        var text = $("detail-note").value;
        if (noteSaved) {
          ((noteSaved = !1),
            setNoteBtnMode(!1),
            setNoteSaveUI(!1, !1),
            ($("note-save-hint").textContent = ""),
            $("detail-note").focus(),
            toast("已切換為編輯模式"));
          return;
        }
        (saveDetailField("note", text),
          (detailNoteDraft = null),
          setNoteSaveUI(!1, !!text),
          setNoteBtnMode(!0),
          toast("已儲存這則觀察與感受"));
      }
    }),
    document.querySelectorAll(".brand").forEach(function (el) {
      el.addEventListener("click", function () {
        (resetForm(), go("p1"));
      });
    }),
    $("fab-divine").addEventListener("click", function () {
      (resetForm(), go("p1"));
    }),
    $("btn-remind").addEventListener("click", function () {
      var s = getSettings();
      ((s.remind = s.remind === !1),
        saveSettings(s),
        applySettingsUI(),
        toast("寄信提醒設定已更新"));
    }));
  function shareText() {
    var res = state.result;
    if (!res) return "DEC. 12 卜卦罐";
    var h = res.hex,
      chg = changedHex(res),
      changed = res.changedLines || [],
      txt = "";
    return (
      (txt += `DEC. 12 · 我的卜卦結果
`),
      (txt += `====================
`),
      (txt +=
        "類別：" +
        (res.cat || "未選") +
        `
`),
      (txt +=
        "有效長度：" +
        (res.len || "今日") +
        `

`),
      (txt +=
        "本卦：" +
        h.symbolLabel +
        "（" +
        h.upper +
        " " +
        h.lower +
        `）
`),
      chg.none ||
        (txt +=
          "變卦：" +
          chg.label +
          "（" +
          chg.sym +
          `）
`),
      changed.length &&
        (txt +=
          "動爻：第 " +
          changed.join("、") +
          ` 爻
`),
      (txt +=
        "核心：" +
        h.num +
        " " +
        h.symbolLabel +
        " " +
        (h.core || "") +
        `

`),
      (txt +=
        "「" +
        h.plain +
        `」

`),
      (txt += `這是指引，不是預言。
`),
      (txt += "—— 來自 DEC. 12 卜卦罐"),
      txt
    );
  }
  function shareUrl() {
    try {
      return location.href;
    } catch (e) {
      return "";
    }
  }
  function openShare() {
    if (!state.result) {
      toast("請先完成卜卦");
      return;
    }
    var ov = $("share-overlay");
    (($("share-email").value = ""),
      ($("email-preview").style.display = "none"),
      ov.classList.add("open"));
  }
  $("share-overlay").addEventListener("click", function (e) {
    e.target === this && this.classList.remove("open");
  });
  function shareViaApp(kind) {
    if (!state.result) {
      toast("請先完成卜卦");
      return;
    }
    var txt = shareText(),
      url = "";
    if (
      (kind === "line"
        ? (url = "https://line.me/R/msg/text/?" + encodeURIComponent(txt))
        : kind === "fb"
          ? (url =
              "fb-messenger://share?link=" +
              encodeURIComponent(shareUrl()) +
              "&text=" +
              encodeURIComponent(txt))
          : (kind === "ig" || kind === "x") &&
            (url = "https://wa.me/?text=" + encodeURIComponent(txt)),
      !!url)
    ) {
      try {
        var opened = window.open(url, "_blank");
        toast(opened ? "已開啟聊天室分享" : "已複製分享內容，請貼到聊天室");
      } catch (e) {
        toast("已複製分享內容，請貼到聊天室");
      }
      $("share-overlay").classList.remove("open");
    }
  }
  ($("social-line").addEventListener("click", function () {
    shareViaApp("line");
  }),
    $("social-fb").addEventListener("click", function () {
      shareViaApp("fb");
    }),
    $("social-ig").addEventListener("click", function () {
      shareViaApp("ig");
    }),
    $("social-x").addEventListener("click", function () {
      shareViaApp("x");
    }),
    $("btn-send").addEventListener("click", function () {
      var email = $("share-email").value.trim(),
        emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        toast("請輸入 email");
        return;
      }
      if (!emailRe.test(email)) {
        toast("email 格式似乎有誤");
        return;
      }
      var h = state.result.hex,
        cat = state.result.cat,
        changed = state.result.changedLines.join("、"),
        focusText = h.focus[cat] || h.focus.未選,
        body = "";
      ((body += `DEC. 12 · 你的卜卦結果
`),
        (body += `========================
`),
        (body +=
          "類別：" +
          cat +
          `
`),
        (body +=
          "有效長度：" +
          state.result.len +
          `

`));
      var chg = changedHex(state.result);
      ((body +=
        "本卦：" +
        state.result.hex.symbolLabel +
        "（" +
        state.result.hex.upper +
        " " +
        state.result.hex.lower +
        `）
`),
        (body +=
          "變卦：" +
          chg.label +
          "（" +
          chg.sym +
          `）
`),
        (body +=
          "動爻：第 " +
          changed +
          ` 爻
`),
        (body +=
          "核心：" +
          state.result.hex.num +
          " " +
          state.result.hex.symbolLabel +
          " " +
          (state.result.hex.core || "") +
          `

`),
        (body +=
          `白話卦辭：
` +
          state.result.hex.plain +
          `

`),
        (body +=
          "情境解讀：關於" +
          cat +
          "：" +
          focusText +
          `

`),
        (body += `一事不宜多問
`),
        (body += `這是指引，不是預言

`),
        (body += `————
`),
        (body += `本信件由「DEC. 12」寄出，僅用於備份這份結果。
`),
        (body += "若不想再收到提醒，可隨時回覆「退訂」停止寄送。"),
        ($("email-preview").textContent =
          "寄送給 " +
          email +
          `：

` +
          body),
        ($("email-preview").style.display = "block"));
      try {
        var mailto =
            "mailto:" +
            encodeURIComponent(email) +
            "?subject=" +
            encodeURIComponent("DEC. 12 · 我的卜卦結果") +
            "&body=" +
            encodeURIComponent(body),
          w = window.open(mailto, "_blank");
        toast(w ? "已開啟郵件客戶端" : "已寄出，請到信箱收信");
      } catch (e) {
        toast("已寄出，請到信箱收信");
      }
    }));
  function onBoot() {
    (clearLegacySession(), updateNav(), applySettingsUI(), go("p1"));
  }
  onBoot();
})();
