/* ============================================================
   DEC. 12 · 應用邏輯（js/app.js）
   ============================================================
   依賴載入順序：data/hexagrams.js → js/storage.js → js/ui.js → js/app.js
   ============================================================ */
(function () {
  "use strict";

  var $ = UI.$;
  var toast = UI.toast;
  var go = UI.go;
  var esc = UI.esc;

  /* ---------- 全域狀態 ---------- */
  var state = {
    cat: "",
    len: "",
    result: null,     // 目前顯示的結果（抽卡或卜卦）
    saved: false,
    pending: null     // 未登入時暫存的紀錄
  };
  var drawFlipped = false;

  /* ---------- 64 卦換算（由 js/divination.js 提供核心演算法） ---------- */
  function changedHex(res) {
    var chg = window.Div.computeChanged(res);
    if (!chg) return { sym: "", label: "" };
    return chg;
  }

  /* ---------- 抽卦 ---------- */
  function pickHex() {
    // 每日抽卡：64 卦純隨機（不牽扯變爻）
    var r = window.Div.castDaily();
    return r.hex;
  }
  function pickResult(type) {
    if (type === "card") {
      // ===== 每日靈感抽卡：64 卦純隨機、無動爻 =====
      var c = window.Div.castDaily();
      var d = new Date();
      return {
        type: "card",
        hex: c.hex,
        cat: "每日靈感",
        len: "今日",
        changedLines: [],       // 每日抽卡不牽扯變爻
        lines: null,
        changedHex: null,
        method: "daily",
        date: (d.getMonth() + 1) + "/" + d.getDate(),
        y: d.getFullYear(), m: d.getMonth() + 1, day: d.getDate(),
        ts: Date.now()
      };
    }
    // ===== 進階卜卦：六爻法（金錢卦）含變爻 =====
    var r6 = window.Div.castSixLines();
    var dd = new Date();
    return {
      type: "divination",
      hex: r6.hex,
      cat: state.cat || "未選",
      len: state.len || "未選擇",
      changedLines: r6.changedLines,   // 動爻（6/9 之爻）
      lines: r6.lines,                 // 六爻原始值 6/7/8/9
      changedHex: r6.changedHex,       // 變卦資訊
      method: "six-lines",
      date: (dd.getMonth() + 1) + "/" + dd.getDate(),
      y: dd.getFullYear(), m: dd.getMonth() + 1, day: dd.getDate(),
      ts: Date.now()
    };
  }

  /* ---------- 畫面重置 ---------- */
  function resetForm() {
    state.result = null;
    state.saved = false;
    state.pending = null;
    document.querySelectorAll("#cat-chips .chip, #len-chips .chip").forEach(function (c) {
      c.classList.remove("on");
    });
    state.cat = "";
    state.len = "";
    var dc = $("draw-card");
    if (dc) dc.classList.remove("flipped");
    drawFlipped = false;
    var da = $("draw-actions"), dad = $("draw-actions-done");
    if (da) da.classList.remove("hidden");
    if (dad) dad.classList.add("hidden");
    var fb = $("btn-draw");
    if (fb) { fb.style.display = ""; fb.disabled = false; }
    updateSaveBtn();
  }

  /* ---------- 導覽列（登入狀態） ---------- */
  function renderNav() {
    var logged = DB.isLoggedIn();
    var user = DB.currentUser();
    document.querySelectorAll("#nav-login").forEach(function (el) {
      el.textContent = logged && user ? user.name : "登入/註冊";
    });
    var ml = $("menu-logout");
    if (ml) ml.style.display = logged ? "" : "none";
    var acct = $("setting-account");
    if (acct) acct.textContent = logged && user ? user.name + "（已登入）" : "未登入";
    var dashName = $("dash-name");
    if (dashName) dashName.textContent = logged && user ? "你好，" + user.name : "你好，旅人";
  }

  /* ---------- 表單 chips ---------- */
  function setupChips(containerId, field) {
    var box = $(containerId);
    box.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      var val = chip.getAttribute(field === "cat" ? "data-cat" : "data-len");
      box.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("on"); });
      chip.classList.add("on");
      state[field] = val;
    });
  }
  setupChips("cat-chips", "cat");
  setupChips("len-chips", "len");

  /* ---------- 頂欄：選單 / 登入 ---------- */
  document.querySelectorAll("#btn-menu").forEach(function (el) {
    el.addEventListener("click", function () { UI.openOverlay("menu-overlay"); });
  });
  $("btn-menu-close").addEventListener("click", function () { UI.closeOverlay("menu-overlay"); });
  $("menu-overlay").addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("open");
  });

  function navLoginClick() {
    if (DB.isLoggedIn()) {
      showDiary();
      return;
    }
    go("p5");
  }
  document.querySelectorAll("#nav-login").forEach(function (el) {
    el.addEventListener("click", navLoginClick);
  });

  document.querySelectorAll(".menu-item").forEach(function (m) {
    m.addEventListener("click", function () {
      UI.closeOverlay("menu-overlay");
      var act = m.getAttribute("data-act");
      if (act === "home") { resetForm(); go("p1"); }
      else if (act === "diary") { if (DB.isLoggedIn()) showDiary(); else { toast("請先登入"); go("p5"); } }
      else if (act === "about") go("about");
      else if (act === "milk") go("milk");
      else if (act === "setting") { settingReturnTo = document.querySelector(".screen.active").getAttribute("data-screen"); go("setting"); renderNav(); }
    });
  });

  function showLoading() {
    go("loading");
    setTimeout(function () {
      renderDiaryData();
      renderCalendar();
      renderCollect();
      go("diary");
      setTimeout(scrollCalToCurrent, 120);
    }, 900);
  }
  function showDiary() {
    renderDiaryData();
    renderCalendar();
    renderCollect();
    go("diary");
    setTimeout(scrollCalToCurrent, 120);
  }

  /* ---------- 登出 ---------- */
  function doLogout() {
    DB.logout();
    resetForm();
    UI.closeOverlay("menu-overlay");
    UI.closeOverlay("saved-overlay");
    renderNav();
    go("p1");
    toast("已登出");
  }
  $("menu-logout").addEventListener("click", doLogout);

  /* ---------- 每日靈感抽卡（P1） ---------- */
  $("btn-draw").addEventListener("click", function () {
    if (drawFlipped) return;
    drawFlipped = true;
    $("draw-card").classList.add("flipped");
    var res = pickResult("card");
    res.cat = "每日靈感";
    res.len = "今日";
    state.result = res;
    state.saved = false;
    $("draw-actions").classList.add("hidden");
    $("draw-actions-done").classList.remove("hidden");
    toast("今日靈感已揭曉");
  });
  $("btn-redraw").addEventListener("click", function () {
    drawFlipped = false;
    $("draw-card").classList.remove("flipped");
    state.result = null;
    state.saved = false;
    state.pending = null;
    $("draw-actions").classList.remove("hidden");
    $("draw-actions-done").classList.add("hidden");
    updateSaveBtn();
  });
  $("btn-save-draw").addEventListener("click", saveFlow);
  $("btn-share-draw").addEventListener("click", openShare);

  /* ---------- 進階卜卦罐表單（P2-A） ---------- */
  $("btn-advance").addEventListener("click", function () { go("p2a"); });
  $("p2a-back").addEventListener("click", function () { resetForm(); go("p1"); });
  $("btn-start").addEventListener("click", function () {
    if (!state.cat) { toast("請先選擇問題類別"); return; }
    if (!state.len) { toast("請先選擇預測有效長度"); return; }
    startDivination();
  });

  /* ---------- P2-B 起卦動畫 ---------- */
  var divTimer = null;
  var COIN_SLOTS = [
    { x: 60, y: 0 }, { x: 194, y: 0 }, { x: 6, y: 127 },
    { x: 248, y: 127 }, { x: 60, y: 254 }, { x: 194, y: 254 }
  ];
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function startDivination() {
    state.result = null;
    state.saved = false;
    go("p2b");
    var stage = $("divine-stage");
    var coins = stage.querySelectorAll(".coin");
    var core = $("core-btn");
    var ring = $("core-ring-fg");
    var R = 70, CIRC = 2 * Math.PI * R;
    ring.style.strokeDasharray = CIRC;
    ring.style.strokeDashoffset = CIRC;
    core.textContent = "起卦中";
    core.classList.remove("done");
    $("divine-state").textContent = "起卦中…";

    var slots = shuffle(COIN_SLOTS.slice());
    coins.forEach(function (c, i) {
      c.style.left = slots[i].x + "px";
      c.style.top = slots[i].y + "px";
    });

    clearInterval(divTimer);
    var elapsed = 0;
    var total = 1200;
    divTimer = setInterval(function () {
      elapsed += 300;
      var s2 = shuffle(COIN_SLOTS.slice());
      coins.forEach(function (c, i) {
        c.style.left = s2[i].x + "px";
        c.style.top = s2[i].y + "px";
      });
      var remain = Math.max(0, total - elapsed);
      ring.style.strokeDashoffset = CIRC * (remain / total);
      if (elapsed >= total) {
        clearInterval(divTimer);
        divTimer = null;
        ring.style.strokeDashoffset = 0;
        core.textContent = "起卦中";
        core.classList.add("done");
        $("divine-state").textContent = "起卦完成";
        setTimeout(function () { stopDivination(); }, 350);
      }
    }, 300);
  }

  function stopDivination() {
    clearInterval(divTimer);
    divTimer = null;
    var res = pickResult("divination");
    state.result = res;
    state.saved = false;
    renderCarousel();
    updateSaveBtn();
    go("p2c");
  }
  /* 中心按鈕：起卦中（正式流程自動倒數後進入結果） */
  $("core-btn").addEventListener("click", function () {
    if (divTimer) {
      clearInterval(divTimer);
      divTimer = null;
      this.textContent = "已停止";
      this.classList.add("done");
      $("divine-state").textContent = "已停止";
    } else if (this.textContent === "已停止") {
      startDivination();
    }
  });

  /* ---------- P2-C 結果摘要 ---------- */
  function catLabel(cat) {
    return (!cat || cat === "未選") ? "這件事" : cat;
  }
  function focusTextFor(h, cat) {
    if (h.focus && h.focus[cat]) return h.focus[cat];
    if (h.focus && h.focus["未選"]) return h.focus["未選"];
    return "現階段適合把焦點收回自身：釐清真正的渴望，按兵不動、看清局勢，時間到了自然會做出最精準的決定。";
  }
  /* 卦符 → img（顯示層，避免 emoji 字元；資料仍存 Unicode 符號） */
  var HEX_IMG = {
    "☰": "img/hex-qian.png", "☱": "img/hex-dui.png", "☲": "img/hex-li.png",
    "☳": "img/hex-zhen.png", "☴": "img/hex-xun.png", "☵": "img/hex-kan.png",
    "☶": "img/hex-gen.png", "☷": "img/hex-kun.png"
  };
  function hexGlyph(sym) {
    sym = String(sym || "").trim();
    var img = HEX_IMG[sym];
    return img ? '<img src="' + img + '" alt="' + esc(sym) + '" class="hex-glyph">' : esc(sym);
  }
  function pairHtml(a, b, arrow) {
    return hexGlyph(a) + ' <span class="pair-arrow">' + (arrow || "→") + "</span> " + hexGlyph(b);
  }

  function renderCarousel() {
    if (!state.result) return;
    var res = state.result;
    var h = res.hex;
    var catTxt = catLabel(res.cat);
    var lenTxt = res.len || "未選擇";
    var focusText = focusTextFor(h, res.cat);
    var chg = changedHex(res);
    var isDaily = (res.type === "card") || (res.method === "daily") || !res.changedLines || !res.changedLines.length;
    var hasContent = window.Div.hasContent(h);

    $("result-meta").innerHTML =
      '<div class="meta-row"><span class="k">類別</span><span>' + esc(res.cat) + '</span></div>' +
      '<div class="meta-row"><span class="k">有效長度</span><span>' + esc(res.len) + '</span></div>' +
      (isDaily ? '' : '<div class="meta-row"><span class="k">動爻</span><span>第 ' + esc(res.changedLines.join("、")) + ' 爻</span></div>');

    var slides = "";
    var chgSyms = chg ? String(chg.sym || "").split(" ") : [];
    // 卡片1：卜卦結果符號（每日抽卡不顯示變卦；進階卜卦顯示 本卦 → 變卦）
    slides += '<div class="slide symbol-slide">' +
      '<div class="pair">' + pairHtml(h.upper, h.lower) + (isDaily || chgSyms.length < 2 ? '' : '\u3000→\u3000' + pairHtml(chgSyms[0], chgSyms[1] || "")) + '</div>' +
      '<div class="name">' + esc(h.num ? (h.num + " ") : "") + esc(h.name) + '</div>' +
      '</div>';
    // 卡片2：白話卦辭（內容未填寫時顯示待補文案）
    slides += '<div class="slide">' +
      '<div class="slide-k">' + esc(h.num ? (h.num + " ") : "") + esc(h.name) + (chg && chg.label && !isDaily ? '　→　' + esc(chg.label) : "") + '</div>' +
      '<div class="core-txt">' + (hasContent ? esc(h.plain || h.core) : esc('此卦內容整理中，敬請期待。')) + '</div>' +
      '</div>';
    slides += '<div class="slide">' +
      '<div class="slide-k">關於「' + esc(catTxt) + '×' + esc(lenTxt) + '」</div>' +
      '<div class="focus">' + esc(focusText) + '</div>' +
      '</div>';
    slides += '<div class="slide">' +
      '<div class="slide-k">參考建議</div>' +
      '<div class="core-txt">與其向外衝撞，不如將焦點收回到自己身上：內在整理：釐清這份改變是出於心靈真正的渴望，還是單純對現狀的逃避？職場隱形：在原有的位置上優雅地守口如瓶，不流露痕跡地默默做好本分。情報觀察：在暗中默默收集、看清前方的局勢。當你釐清了內心、看清了局勢，時間到了，你自然能氣定神閒地做出最精準、最不後悔的生命決策。</div>' +
      '</div>';

    $("result-carousel").innerHTML = slides;
    var dotsHtml = "";
    for (var i = 0; i < 4; i++) { dotsHtml += '<i' + (i === 0 ? ' class="on"' : '') + '></i>'; }
    $("result-dots").innerHTML = dotsHtml;
    updateDots();
  }

  function updateDots() {
    var c = $("result-carousel");
    var idx = Math.round(c.scrollLeft / c.clientWidth) || 0;
    var dots = $("result-dots").children;
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = i === idx ? "on" : "";
    }
  }
  $("result-carousel").addEventListener("scroll", updateDots);

  function updateSaveBtn() {
    var list = ["btn-save-p2c", "btn-save-draw"];
    for (var i = 0; i < list.length; i++) {
      var btn = $(list[i]);
      if (!btn) continue;
      if (state.saved) {
        btn.textContent = "已儲存";
        btn.disabled = true;
      } else {
        btn.textContent = (list[i] === "btn-save-p2c") ? "儲存到日記" : "儲存至日記";
        btn.disabled = false;
      }
    }
  }
  $("btn-save-p2c").addEventListener("click", saveFlow);
  $("btn-redo-p2c").addEventListener("click", function () { go("p2a"); });
  $("btn-share-p2c").addEventListener("click", openShare);

  /* ---------- 儲存流程 ---------- */
  function saveFlow() {
    if (!state.result) return;
    if (DB.isLoggedIn()) {
      var rec = buildRecord(state.result);
      DB.addRecord(rec);
      state.saved = true;
      updateSaveBtn();
      UI.openOverlay("saved-overlay");
      return;
    }
    // 未登入：暫存 → 前往登入
    state.pending = state.result;
    toast("已幫你暫存這筆結果");
    setTimeout(function () { go("p5"); }, 700);
  }

  function buildRecord(res) {
    return {
      type: res.type || "divination",
      date: res.date,
      y: res.y, m: res.m, day: res.day,
      ts: res.ts,
      title: (res.hex.num ? (res.hex.num + " ") : "") + (res.hex.name || ""),
      cat: res.cat,
      len: res.len,
      upper: res.hex.upper,
      lower: res.hex.lower,
      changedLines: res.changedLines || [],
      lines: res.lines || null,
      changedHex: res.changedHex || null,
      method: res.method || (res.type === "card" ? "daily" : "six-lines"),
      mood: "",
      verify: null,
      note: ""
    };
  }

  /* ---------- 會員：登入 / 註冊 ---------- */
  $("btn-login").addEventListener("click", function () {
    var email = $("login-email").value.trim();
    var pass = $("login-pass").value;
    if (!email || !pass) { toast("請輸入 Email 與密碼"); return; }
    var r = DB.login(email, pass);
    if (r.error) { toast(r.error); return; }
    // 若有未登入暫存 → 歸戶
    if (state.pending) {
      var rec = buildRecord(state.pending);
      DB.addRecord(rec);
      state.pending = null;
      state.saved = true;
    }
    toast("登入成功");
    renderNav();
    showLoading();
  });
  $("btn-goto-register").addEventListener("click", function () { go("register"); });
  $("register-back").addEventListener("click", function () { go("p5"); });
  $("btn-register").addEventListener("click", function () {
    var name = $("reg-name").value.trim();
    var email = $("reg-email").value.trim();
    var pass = $("reg-pass").value;
    var r = DB.register(name, email, pass);
    if (r.error) { toast(r.error); return; }
    if (state.pending) {
      var rec = buildRecord(state.pending);
      DB.addRecord(rec);
      state.pending = null;
      state.saved = true;
    }
    toast("註冊成功，歡迎加入");
    renderNav();
    showLoading();
  });
  $("btn-later").addEventListener("click", function () { go("p1"); });

  /* ---------- 日記 / 日曆 ---------- */
  var CAL_WEEK = ["日", "一", "二", "三", "四", "五", "六"];
  function recordsByDate(y, m, d) {
    return DB.getRecords().filter(function (r) {
      return r.y === y && r.m === m && r.day === d;
    }).sort(function (a, b) { return (b.ts || 0) - (a.ts || 0); });
  }

  function renderCalendar() {
    var box = $("cal-months");
    if (!box) return;
    var html = "";
    for (var mi = 0; mi < 14; mi++) {
      var ym = addMonths(new Date(), mi - 4);
      var y = ym.getFullYear(), m = ym.getMonth() + 1;
      html += '<div class="cal-month" data-ym="' + y + "-" + m + '">';
      html += '<div class="cal-month-title">' + y + " 年 " + m + " 月</div>";
      html += '<div class="cal-week">';
      for (var w = 0; w < 7; w++) { html += "<span>" + CAL_WEEK[w] + "</span>"; }
      html += "</div>";
      html += '<div class="cal-grid">';
      var first = new Date(y, m - 1, 1).getDay();
      var days = new Date(y, m, 0).getDate();
      var today = new Date();
      for (var pad = 0; pad < first; pad++) { html += '<div class="cal-cell empty"></div>'; }
      for (var day = 1; day <= days; day++) {
        var recs = recordsByDate(y, m, day);
        var rec = recs.length ? recs[0] : null;
        var cls = "cal-cell";
        if (rec) { cls += rec.mood ? " has-mood" : " has-hex"; }
        if (y === today.getFullYear() && m === today.getMonth() + 1 && day === today.getDate()) { cls += " today"; }
        html += '<div class="' + cls + '" data-y="' + y + '" data-m="' + m + '" data-d="' + day + '">';
        html += "<span>" + day + "</span>";
        if (rec && rec.mood) { html += '<span class="cal-mood">' + rec.mood + "</span>"; }
        html += "</div>";
      }
      html += "</div></div>";
    }
    box.innerHTML = html;
    setTimeout(scrollCalToCurrent, 150);
  }

  function scrollCalToCurrent() {
    var box = $("cal-scroll");
    if (!box) return;
    var now = new Date();
    var cur = box.querySelector('.cal-month[data-ym="' + now.getFullYear() + "-" + (now.getMonth() + 1) + '"]');
    if (cur) {
      box.scrollTop = cur.offsetTop - 6;
      updateCalTitle(cur);
    }
  }
  function addMonths(d, n) {
    var r = new Date(d);
    r.setDate(1);
    r.setMonth(r.getMonth() + n);
    return r;
  }
  function updateCalTitle(monthEl) {
    var t = $("cal-title");
    if (t && monthEl) {
      var parts = monthEl.getAttribute("data-ym").split("-");
      t.textContent = parts[0] + " 年 " + parseInt(parts[1], 10) + " 月";
    }
  }
  $("cal-prev").addEventListener("click", function () { $("cal-scroll").scrollBy({ top: -300, behavior: "smooth" }); });
  $("cal-next").addEventListener("click", function () { $("cal-scroll").scrollBy({ top: 300, behavior: "smooth" }); });
  $("cal-scroll").addEventListener("scroll", function () {
    var box = $("cal-scroll");
    var months = box.querySelectorAll(".cal-month");
    for (var i = 0; i < months.length; i++) {
      if (months[i].offsetTop <= box.scrollTop + 30) updateCalTitle(months[i]);
    }
  });
  $("cal-months").addEventListener("click", function (e) {
    var cell = e.target.closest(".cal-cell");
    if (!cell || cell.classList.contains("empty")) return;
    var recs = recordsByDate(
      parseInt(cell.getAttribute("data-y"), 10),
      parseInt(cell.getAttribute("data-m"), 10),
      parseInt(cell.getAttribute("data-d"), 10)
    );
    if (recs && recs.length) {
      var rec = recs[0];
      rec.fromDiary = true;
      rec.siblings = recs;
      openDetail(rec);
    } else {
      toast("這天沒有卜卦紀錄");
    }
  });

  function renderDiaryData() {
    var sc = $("stat-count");
    if (sc) sc.textContent = DB.getRecords().length;
  }

  /* ---------- 日記詳情 ---------- */
  var detailMood = null;
  var verify = null;
  var currentDetailId = null;

  function bindDetailBack(fromDiary) {
    var b = $("detail-back");
    if (!b) return;
    b.addEventListener("click", function () { go(fromDiary ? "diary" : "p1"); });
  }

  function openDetail(rec) {
    var tb = $("detail-topbar");
    if (tb) {
      if (rec.fromDiary) {
        tb.innerHTML = '<button class="back" id="detail-back">← 返回</button><div class="right"></div>';
      } else {
        tb.innerHTML = '<div class="brand">DEC.<span class="dot"> 12</span></div><div class="right"><button class="navlink" id="nav-login">登入/註冊</button><button class="icon-btn" id="btn-menu" aria-label="選單"><img src="img/gear.png" alt="選單"></button></div>';
        renderNav();
        document.querySelectorAll("#btn-menu").forEach(function (el) {
          el.addEventListener("click", function () { UI.openOverlay("menu-overlay"); });
        });
        document.querySelectorAll("#nav-login").forEach(function (el) {
          el.addEventListener("click", navLoginClick);
        });
      }
      bindDetailBack(!!rec.fromDiary);
    }

    var tabsBox = $("detail-tabs");
    var siblings = (rec.siblings && rec.siblings.length) ? rec.siblings : [rec];
    if (rec.fromDiary) {
      for (var sif = 0; sif < siblings.length; sif++) {
        siblings[sif].fromDiary = true;
        siblings[sif].siblings = siblings;
      }
    }
    if (tabsBox) {
      if (siblings.length > 1) {
        tabsBox.classList.remove("hidden");
        var html = "";
        for (var si = 0; si < siblings.length; si++) {
          var s = siblings[si];
          var label = (s.type === "card") ? "抽卡" : "卜卦";
          var active = (s === rec) ? " on" : "";
          html += '<button class="detail-tab' + active + '" data-idx="' + si + '">' + label + (si === 0 ? "（最近）" : "") + '</button>';
        }
        tabsBox.innerHTML = html;
        var tabs = tabsBox.querySelectorAll(".detail-tab");
        for (var ti = 0; ti < tabs.length; ti++) {
          (function (idx) {
            tabs[ti].addEventListener("click", function () { openDetail(siblings[idx]); });
          })(ti);
        }
      } else {
        tabsBox.classList.add("hidden");
        tabsBox.innerHTML = "";
      }
    }

    var viewCard = $("detail-view-card");
    var viewDiv = $("detail-view-divination");
    if (rec.type === "card") {
      if (viewCard) viewCard.classList.add("on");
      if (viewDiv) viewDiv.classList.remove("on");
      // 填入抽卡內容
      var k = viewCard ? viewCard.querySelector(".slide-k") : null;
      var t = viewCard ? viewCard.querySelector(".core-txt") : null;
      if (k) k.textContent = rec.title;
      if (t) {
        var h = findHexByTitle(rec.title);
        t.textContent = h ? (h.plain || h.core) : "這是一個「在斷捨離中迎來新生」的卦。";
      }
    } else {
      if (viewCard) viewCard.classList.remove("on");
      if (viewDiv) viewDiv.classList.add("on");
      renderDetailCarousel(rec);
    }

    var dd = $("detail-date");
    if (dd) dd.textContent = rec.date + " · " + rec.cat + " · " + rec.len;
    var note = $("detail-note");
    if (note) note.value = rec.note || "";
    document.querySelectorAll("#detail-moods .mood-btn").forEach(function (b) {
      b.classList.remove("on");
      if (b.getAttribute("data-mood") === rec.mood) { b.classList.add("on"); detailMood = rec.mood; }
    });    $("verify-y").classList.remove("on-y");
    $("verify-x").classList.remove("on-x");
    verify = rec.verify;
    if (rec.verify === "y") $("verify-y").classList.add("on-y");
    if (rec.verify === "x") $("verify-x").classList.add("on-x");
    currentDetailId = rec.id;
    go("detail");
  }

  function findHexByTitle(title, rec) {
    // 優先以上下卦符號精確查詢（每日抽卡／進階卜卦的卦都帶 upper/lower）
    if (rec && rec.upper && rec.lower) {
      var bySym = window.Div.hexBySymbols(rec.upper, rec.lower);
      if (bySym) return bySym;
    }
    var list = window.HEXAGRAMS || [];
    for (var i = 0; i < list.length; i++) {
      if (title.indexOf(String(list[i].num)) !== -1) return list[i];
    }
    return null;
  }

  function renderDetailCarousel(rec) {
    var box = $("detail-carousel");
    if (!box) return;
    var h = findHexByTitle(rec.title);
    var focusText = h ? focusTextFor(h, rec.cat) : "";
    var chg = null;
    if (rec.changedHex) {
      chg = rec.changedHex;
    } else if (rec.upper && rec.lower && rec.changedLines && rec.changedLines.length) {
      var fake = { hex: { upper: rec.upper, lower: rec.lower }, changedLines: rec.changedLines };
      try { chg = changedHex(fake); } catch (e) { chg = null; }
    }
    var isDaily = (rec.type === "card") || (rec.method === "daily") || !rec.changedLines || !rec.changedLines.length;
    var hasContent = h ? window.Div.hasContent(h) : false;
    var slides = "";
    var chgSyms2 = chg ? String(chg.sym || "").split(" ") : [];
    slides += '<div class="slide symbol-slide">' +
      '<div class="pair">' + pairHtml(rec.upper || "☲", rec.lower || "☴") + (chg && chgSyms2.length >= 2 && !isDaily ? '\u3000→\u3000' + pairHtml(chgSyms2[0], chgSyms2[1] || "") : "") + '</div>' +
      '<div class="name">' + esc(rec.title) + '</div>' +
      '</div>';
    slides += '<div class="slide"><div class="slide-k">' + esc(rec.title) + (chg && chg.label && !isDaily ? '　→　' + esc(chg.label) : "") + '</div><div class="core-txt">' +
      esc(h ? (h.plain || h.core) : (hasContent ? "……" : "此卦內容整理中，敬請期待。")) + '</div></div>';
    slides += '<div class="slide"><div class="slide-k">關於「' + esc(rec.cat) + '×' + esc(rec.len) + '」</div><div class="focus">' +
      esc(focusText) + '</div></div>';
    slides += '<div class="slide"><div class="slide-k">參考建議</div><div class="core-txt">與其向外衝撞，不如將焦點收回到自己身上：內在整理：釐清這份改變是出於心靈真正的渴望，還是單純對現狀的逃避？職場隱形：在原有的位置上優雅地守口如瓶，不流露痕跡地默默做好本分。情報觀察：在暗中默默收集、看清前方的局勢。當你釐清了內心、看清了局勢，時間到了，你自然能氣定神閒地做出最精準、最不後悔的生命決策。</div></div>';
    box.innerHTML = slides;

    var d = $("detail-dots");
    if (d) {
      var html = "";
      for (var i = 0; i < 4; i++) { html += '<i' + (i === 0 ? ' class="on"' : '') + '></i>'; }
      d.innerHTML = html;
      function upd() {
        var idx = Math.round(box.scrollLeft / box.clientWidth) || 0;
        var dots = d.children;
        for (var j = 0; j < dots.length; j++) { dots[j].className = j === idx ? "on" : ""; }
      }
      box.addEventListener("scroll", upd);
    }
  }

  /* 詳情頁：表情 / 驗證 / 筆記（即時寫回） */
  document.querySelectorAll("#detail-moods .mood-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      detailMood = btn.getAttribute("data-mood");
      document.querySelectorAll("#detail-moods .mood-btn").forEach(function (b) { b.classList.remove("on"); });
      btn.classList.add("on");
      if (currentDetailId) DB.updateRecord(currentDetailId, { mood: detailMood });
      var moodName = { calm: "平靜", happy: "開心", think: "思考", sad: "低落", sparkle: "閃耀" }[detailMood] || detailMood;
      toast("已記錄表情 " + moodName);
    });
  });
  $("verify-y").addEventListener("click", function () {
    verify = "y";
    $("verify-y").classList.add("on-y");
    $("verify-x").classList.remove("on-x");
    if (currentDetailId) DB.updateRecord(currentDetailId, { verify: "y" });
    toast("已記錄：應驗了");
  });
  $("verify-x").addEventListener("click", function () {
    verify = "x";
    $("verify-x").classList.add("on-x");
    $("verify-y").classList.remove("on-y");
    if (currentDetailId) DB.updateRecord(currentDetailId, { verify: "x" });
    toast("已記錄：未應驗");
  });
  $("detail-note").addEventListener("change", function () {
    if (currentDetailId) DB.updateRecord(currentDetailId, { note: this.value });
  });
  (function () {
    var b = $("detail-back");
    if (b) b.addEventListener("click", function () { go("diary"); });
  })();

  /* ---------- 已儲存提示 ---------- */
  $("saved-go").addEventListener("click", function () {
    UI.closeOverlay("saved-overlay");
    if (!DB.isLoggedIn()) { toast("請先登入"); go("p5"); return; }
    showDiary();
  });
  $("saved-stay").addEventListener("click", function () { UI.closeOverlay("saved-overlay"); });
  $("saved-overlay").addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("open");
  });

  /* ---------- Logo：回全新 P1 ---------- */
  document.querySelectorAll(".brand").forEach(function (el) {
    el.addEventListener("click", function () { resetForm(); go("p1"); });
  });
  $("fab-divine").addEventListener("click", function () { resetForm(); go("p1"); });

  /* ---------- 收藏相簿 ---------- */
  var COLLECT_BOOKS = [
    {
      title: "系統任務",
      grid: "three",
      items: [
        { e: "crystal-ball", label: "完成第一次卜卦", locked: false },
        { e: "star", label: "完成第 10 次卜卦", locked: true },
        { e: "note", label: "完成 3 次筆記回饋", locked: false }
      ]
    },
    {
      title: "元素收集",
      grid: "four",
      items: [
        { e: "sun", label: "天", locked: false },
        { e: "hill", label: "地", locked: true },
        { e: "water", label: "水", locked: false },
        { e: "fire", label: "火", locked: true },
        { e: "lightning", label: "雷", locked: false },
        { e: "wind", label: "風", locked: true },
        { e: "mountain", label: "山", locked: false },
        { e: "wave", label: "澤", locked: true }
      ]
    }
  ];
  function renderCollect() {
    var body = $("collect-body");
    if (!body) return;
    var saved = DB.getCollect();
    var html = "";
    var unlockedCount = 0;
    for (var b = 0; b < COLLECT_BOOKS.length; b++) {
      var book = COLLECT_BOOKS[b];
      html += '<div class="collect-book"><div class="book-title">' + book.title + "</div>";
      html += '<div class="collect-grid ' + (book.grid === "three" ? "three" : "") + '">';
      for (var i = 0; i < book.items.length; i++) {
        var it = book.items[i];
        var id = b + "-" + i;
        var unlocked = !it.locked || saved[id];
        if (unlocked) unlockedCount++;
        html += '<div class="collect-item' + (unlocked ? "" : " locked") + '" data-id="' + id + '">';
        html += '<img class="ci-emoji" src="img/' + it.e + '.png" alt="' + it.label + '">';
        html += '<div class="ci-label">' + it.label + "</div></div>";
      }
      html += "</div></div>";
    }
    body.innerHTML = html;
    var cnt = $("collect-count");
    if (cnt) cnt.textContent = unlockedCount;
  }
  $("btn-collect").addEventListener("click", function () {
    renderCollect();
    UI.openOverlay("collect-overlay");
  });
  $("collect-close").addEventListener("click", function () { UI.closeOverlay("collect-overlay"); });
  $("collect-overlay").addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("open");
  });
  $("collect-body").addEventListener("click", function (e) {
    var item = e.target.closest(".collect-item");
    if (!item) return;
    if (item.classList.contains("locked")) {
      toast("尚未解鎖：完成任務或收集元素後解鎖");
    } else {
      DB.unlockCollect(item.getAttribute("data-id"));
      toast("已收集（mock）");
    }
  });

  /* ---------- 本命守護牌 ---------- */
  function openGuardian() {
    var ov = $("guardian-overlay");
    var card = $("guardian-card");
    var flipBtn = $("guardian-flip");
    var note = $("guardian-locked-note");
    if (DB.isGuardianOpened()) {
      card.classList.add("flipped");
      if (flipBtn) flipBtn.style.display = "none";
      if (note) note.style.display = "";
    } else {
      card.classList.remove("flipped");
      if (flipBtn) flipBtn.style.display = "";
      if (note) note.style.display = "none";
    }
    ov.classList.add("open");
  }
  $("btn-guardian").addEventListener("click", openGuardian);
  $("guardian-close").addEventListener("click", function () { UI.closeOverlay("guardian-overlay"); });
  $("guardian-overlay").addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("open");
  });
  $("guardian-flip").addEventListener("click", function () {
    if (DB.isGuardianOpened()) return;
    var card = $("guardian-card");
    var flipBtn = $("guardian-flip");
    var note = $("guardian-locked-note");
    card.classList.add("flipped");
    DB.markGuardianOpened();
    flipBtn.style.display = "none";
    setTimeout(function () { note.style.display = ""; toast("本命守護牌已固定"); }, 1600);
  });

  /* ---------- 分享（M3） ---------- */
  function openShare() {
    if (!state.result) { toast("請先完成卜卦"); return; }
    $("share-email").value = "";
    $("email-preview").style.display = "none";
    UI.openOverlay("share-overlay");
  }
  $("share-overlay").addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("open");
  });
  ["social-line", "social-fb", "social-ig", "social-x"].forEach(function (id) {
    $(id).addEventListener("click", function () {
      toast("已複製分享連結（mock）");
    });
  });
  $("btn-send").addEventListener("click", function () {
    var email = $("share-email").value.trim();
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) { toast("請輸入 email"); return; }
    if (!emailRe.test(email)) { toast("email 格式似乎有誤"); return; }
    var res = state.result;
    var h = res.hex;
    var body = "";
    body += "DEC. 12 · 你的卜卦結果\n";
    body += "========================\n";
    body += "類別：" + res.cat + "\n";
    body += "有效長度：" + res.len + "\n\n";
    var isDaily = (res.type === "card") || (res.method === "daily") || !res.changedLines || !res.changedLines.length;
    var chg = changedHex(res);
    body += "本卦：" + (h.symbolLabel || h.name) + "（" + h.upper + " " + h.lower + "）\n";
    if (!isDaily) {
      body += "變卦：" + (chg && chg.label ? chg.label : "（無）") + (chg && chg.sym ? "（" + chg.sym + "）" : "") + "\n";
      body += "動爻：第 " + (res.changedLines || []).join("、") + " 爻\n";
    }
    body += "核心：" + (h.num ? h.num + " " : "") + h.name + "\n\n";
    body += "白話卦辭：\n" + (h.plain || h.core) + "\n\n";
    body += "情境解讀：關於" + res.cat + "：" + focusTextFor(h, res.cat) + "\n\n";
    body += "一事不宜多問\n";
    body += "這是指引，不是預言\n\n";
    body += "————\n";
    body += "本信件由「DEC. 12」寄出，僅用於備份這份結果。\n";
    body += "若不想再收到提醒，可隨時回覆「退訂」停止寄送。";
    $("email-preview").textContent = "寄送給 " + email + "：\n\n" + body;
    $("email-preview").style.display = "block";
    toast("已寄出，請到信箱收信（mock）");
  });

  /* ---------- 設定 / 奶茶金 / 關於 ---------- */
  var settingReturnTo = "diary";
  $("setting-back").addEventListener("click", function () { go(settingReturnTo); });
  $("set-remind").addEventListener("click", function () {
    var b = $(this.id);
    var on = b.textContent === "已開啟";
    b.textContent = on ? "已關閉" : "已開啟";
    b.classList.toggle("on", !on);
    DB.setSettings({ remind: !on });
    toast("寄信提醒設定已更新（mock）");
  });
  $("set-push").addEventListener("click", function () {
    var b = $(this.id);
    var on = b.textContent === "已開啟";
    b.textContent = on ? "開啟" : "已開啟";
    b.classList.toggle("on", !on);
    DB.setSettings({ push: !on });
    toast("推播通知設定已更新（mock）");
  });
  $("about-back").addEventListener("click", function () { resetForm(); go("p1"); });
  $("milk-back").addEventListener("click", function () { resetForm(); go("p1"); });
  $("milk-link").addEventListener("click", function (e) { e.preventDefault(); go("milk"); });
  $("btn-milk-support").addEventListener("click", function () { toast("奶茶金功能開發中（mock）"); });
  $("btn-remind").addEventListener("click", function () {
    var b = $("btn-remind");
    b.textContent = b.textContent === "關閉" ? "開啟" : "關閉";
    toast("寄信提醒設定已更新（mock）");
  });
  $("btn-remind-dash").addEventListener("click", function () {
    var b = $("btn-remind-dash");
    b.textContent = b.textContent === "關閉" ? "開啟" : "關閉";
    toast("寄信提醒設定已更新（mock）");
  });

  /* ---------- 正式網頁：完整流程（無任何示意切換器） ---------- */

  /* ---------- 啟動 ---------- */
  function onBoot() {
    renderNav();
    go("p1");
  }
  onBoot();
})();