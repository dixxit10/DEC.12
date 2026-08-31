/* DEC.12 v42 · 儲存結果圖卡
   核心原則：直接複用網頁上既有的 .draw-card（微光卡）與 .slide（卜卦卡）樣式，
   把「畫面上看到的結果卡片」原封不動輸出成 PNG。
   每日抽卡  → 1:1 單張微光卡（1080×1080）
   進階卜卦  → 長條 PNG（4 張 .slide 上下排列）
   產生後顯示在預覽層：使用者長壓圖片即可儲存，或按「下載圖片」按鈕。 */
(function () {
  "use strict";

  function isEn() { try { return localStorage.getItem("xingua_lang") === "en"; } catch (e) { return false; } }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function $(id) { return document.getElementById(id); }
  function toast(msg) { try { var t = $("toast"); if (t) { t.textContent = msg; t.classList.add("show"); setTimeout(function () { t.classList.remove("show"); }, 2200); } } catch (e) {} }

  /* ============ 讀取目前結果 ============ */
  function findHexByNum(num) {
    try {
      var list = (typeof window !== "undefined" && window.HEXAGRAMS) || [];
      for (var i = 0; i < list.length; i++) {
        if (list[i] && list[i].num === num) return list[i];
      }
    } catch (e) {}
    return null;
  }
  /* 每日抽卡：從畫面 #draw-card 讀卦名 / 指引 / 卦卡美術圖 */
  function readDaily() {
    var out = { num: null, name: "", guide: "", art: "" };
    try {
      var dk = $("draw-back-k");
      if (dk && dk.textContent) {
        out.name = String(dk.textContent).replace(/\s+/g, " ").trim();
        var m = out.name.match(/(\d{1,2})/);
        if (m) out.num = parseInt(m[1], 10);
      }
      var dt = $("draw-back-txt");
      if (dt) out.guide = String(dt.textContent).replace(/\s+/g, " ").trim();
      if (out.num) {
        var h = findHexByNum(out.num);
        if (h && h.cardImg) out.art = h.cardImg;
      }
    } catch (e) {}
    return out;
  }

  /* ============ 判斷目前是哪一種結果 ============ */
  function currentKind() {
    try {
      var p2c = $("screen-p2c"), p1 = $("screen-p1");
      if (p2c && p2c.classList.contains("active")) return "divination";
      if (p1 && p1.classList.contains("active")) {
        var dc = $("draw-card");
        if (dc && dc.classList.contains("flipped")) return "daily";
      }
      var car = $("result-carousel");
      if (car && car.querySelector(".slide")) return "divination";
      var d2 = $("draw-card");
      if (d2 && d2.classList.contains("flipped")) return "daily";
    } catch (e) {}
    return "daily";
  }

  /* ============ 每日抽卡：clone 畫面微光卡（翻面後的背面） ============ */
  function buildDailyStage() {
    var stage = $("share-card-stage");
    var src = $("draw-card");
    if (!stage || !src) return null;
    var clone = src.cloneNode(true);
    clone.id = "save-daily-card";
    clone.classList.add("flipped");                       // 顯示背面（結果面）
    clone.style.width = "320px";
    clone.style.maxWidth = "320px";
    clone.style.margin = "0 auto";
    clone.style.cursor = "default";
    /* 移除 3D 翻面 transform——html2canvas 無法渲染 rotateY，改以平面呈現 */
    var inner = clone.querySelector(".draw-inner");
    if (inner) inner.style.transform = "none";
    var back = clone.querySelector(".draw-back");
    if (back) back.style.transform = "none";
    /* 背景圖替換為「該卦的卦卡美術圖」（與結果頁同一張圖） */
    var r = readDaily();
    if (r.art) {
      var el = clone.querySelector(".draw-back-el");
      if (el) el.innerHTML = '<img class="card-main-img" src="' + esc(r.art) + '" alt="" crossorigin="anonymous">';
    }
    stage.innerHTML = "";
    stage.style.width = "320px";
    stage.style.height = "320px";
    stage.appendChild(clone);
    return stage;
  }

  /* ============ 進階卜卦：clone 4 張 .slide 上下排列 ============ */
  function buildDivinationStage() {
    var stage = $("share-card-stage");
    var car = $("result-carousel");
    if (!stage || !car) return null;
    var slides = car.querySelectorAll(".slide");
    if (!slides.length) return null;
    var wrap = document.createElement("div");
    wrap.id = "save-slides-wrap";
    wrap.style.width = "350px";
    wrap.style.background = "#f4f1ea";
    wrap.style.padding = "8px 0";
    for (var i = 0; i < slides.length; i++) {
      var c = slides[i].cloneNode(true);
      c.style.flex = "0 0 auto";
      c.style.width = "350px";
      c.style.margin = "0 0 12px";
      c.style.scrollSnapAlign = "none";
      c.style.minHeight = "190px";
      wrap.appendChild(c);
    }
    stage.innerHTML = "";
    stage.style.width = "350px";
    stage.style.height = "auto";
    stage.appendChild(wrap);
    return stage;
  }

  /* ============ 等待圖片載入 ============ */
  function waitImages(root) {
    return new Promise(function (resolve) {
      var imgs = root ? root.querySelectorAll("img") : [];
      var pending = [];
      for (var i = 0; i < imgs.length; i++) {
        var im = imgs[i];
        if (!im.complete || im.naturalWidth === 0) pending.push(im);
      }
      if (!pending.length) { resolve(); return; }
      var done = false, remain = pending.length;
      var fin = function () { if (!done) { remain--; if (remain <= 0) { done = true; resolve(); } } };
      for (var j = 0; j < pending.length; j++) {
        pending[j].addEventListener("load", fin);
        pending[j].addEventListener("error", fin);
      }
      setTimeout(function () { if (!done) { done = true; resolve(); } }, 4000);
    });
  }

  function showStage() {
    var stage = $("share-card-stage");
    if (!stage) return;
    stage.style.left = "0px";
    stage.style.top = "0px";
    stage.style.zIndex = "9999";
    stage.style.opacity = "1";
  }
  function hideStage() {
    var stage = $("share-card-stage");
    if (!stage) return;
    stage.style.left = "-9999px";
    stage.style.zIndex = "-1";
  }

  /* ============ 生成 canvas ============ */
  function renderCanvas(kind) {
    var stage = null, scale = 1, bg = "#f4f1ea", vw = 350;
    if (kind === "daily") {
      stage = buildDailyStage();
      scale = 1080 / 320;      // 320px 容器 → 1080px 輸出（1:1）
      bg = "#ffffff";          // 與手機頁面背景一致（微光卡四角露出頁面底色）
      vw = 320;
    } else {
      stage = buildDivinationStage();
      scale = 1080 / 350;      // 350px 容器 → 1080px 寬輸出（長條）
      bg = "#f4f1ea";
      vw = 350;
    }
    if (!stage) return Promise.reject(new Error("stage build failed"));
    showStage();
    var root = stage.firstChild;
    return waitImages(root)
      .then(function () {
        return new Promise(function (resolve, reject) {
          if (typeof html2canvas === "undefined") { hideStage(); reject(new Error("html2canvas not loaded")); return; }
          html2canvas(root, {
            scale: scale,
            backgroundColor: bg,
            useCORS: true,
            logging: false,
            width: root.offsetWidth,
            height: root.offsetHeight,
            windowWidth: vw
          }).then(function (canvas) {
            hideStage();
            try { if (window.DEC12_CAPTURE) window.DEC12_CAPTURE(canvas); } catch (e) {}
            resolve(canvas);
          }).catch(function (e) { hideStage(); reject(e); });
        });
      });
  }

  /* ============ 下載 ============ */
  function downloadCanvas(canvas) {
    try {
      canvas.toBlob(function (blob) {
        if (!blob) { fallbackDownload(canvas); return; }
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "dec12-reading.png";
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 800);
      }, "image/png");
    } catch (e) { fallbackDownload(canvas); }
  }
  function fallbackDownload(canvas) {
    try {
      var a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "dec12-reading.png";
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { document.body.removeChild(a); }, 800);
    } catch (e) {}
  }

  /* ============ 主流程：生成 → 顯示預覽（長壓可儲存） ============ */
  var lastCanvas = null;
  function shareCard() {
    var kind = currentKind();
    renderCanvas(kind).then(function (canvas) {
      lastCanvas = canvas;
      var ov = $("share-overlay");
      if (ov) ov.classList.remove("open");
      var img = $("save-preview-img");
      if (img) {
        try { img.src = canvas.toDataURL("image/png"); } catch (e) { img.src = ""; }
      }
      var po = $("save-preview-overlay");
      if (po) po.classList.add("open");
      else downloadCanvas(canvas);
    }).catch(function () {
      toast(isEn() ? "Could not generate the card image." : "圖卡生成失敗，請稍後再試");
    });
  }

  /* ============ 綁定 ============ */
  function bind() {
    var btn = $("social-card");
    if (btn) btn.addEventListener("click", shareCard);
    var dl = $("save-preview-dl");
    if (dl) dl.addEventListener("click", function () { if (lastCanvas) downloadCanvas(lastCanvas); });
    var cl = $("save-preview-close");
    if (cl) cl.addEventListener("click", function () { var po = $("save-preview-overlay"); if (po) po.classList.remove("open"); });
    var po = $("save-preview-overlay");
    if (po) po.addEventListener("click", function (e) { if (e.target === this) this.classList.remove("open"); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
  else bind();
})();
