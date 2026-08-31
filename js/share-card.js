/* DEC.12 v43 · 儲存結果圖卡（儲存結果 = 把畫面上看到的結果卡片原封不動輸出成 PNG）
   核心原則：
     ① 每日抽卡 → 輸出 1:1 微光卡（與畫面 #draw-card 翻開後完全相同的 .draw-card 樣式 + 該卦美術圖 + 卦名 + 指引文字）
     ② 進階卜卦 → 輸出長條 PNG（4 張 .slide 卡片上下排列，與結果頁 Carousel 相同樣式）
   底部皆附 QRcode（掃碼回 DEC.12）。
   產生後顯示在預覽層：使用者長壓圖片即可儲存，或按「下載圖片」按鈕。
   注意：全部以「內聯樣式 + 明確 px」重寫（不依賴外部 CSS），避免 html2canvas 讀不到 class 樣式。 */
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
      /* 保險：直接由卦號反查（64 卦全有 cardImg） */
      if (!out.art && out.num) {
        var h2 = findHexByNum(out.num);
        if (h2 && h2.cardImg) out.art = h2.cardImg;
      }
    } catch (e) {}
    return out;
  }

  /* 進階卜卦：從畫面 Carousel 讀 4 張 slide 的內容與卡片1背景圖 */
  function readDivination() {
    var out = { slides: [], art: "" };
    try {
      var car = $("result-carousel");
      if (car) {
        var slides = car.querySelectorAll(".slide");
        for (var i = 0; i < slides.length; i++) {
          var s = slides[i];
          var k = s.querySelector(".slide-k"), c = s.querySelector(".core-txt"), f = s.querySelector(".focus");
          out.slides.push({
            k: k ? String(k.textContent).replace(/\s+/g, " ").trim() : "",
            txt: c ? String(c.textContent).replace(/\s+/g, " ").trim() : "",
            focus: f ? String(f.textContent).replace(/\s+/g, " ").trim() : ""
          });
          if (i === 0) {
            var img = s.querySelector("img.card-main-img") || s.querySelector(".el-ic img");
            if (img && img.src) out.art = img.src;
            var nm = s.querySelector(".name");
            if (nm) out.name = String(nm.textContent).replace(/\s+/g, " ").trim();
          }
        }
      }
      /* 保險：由 state.result 反查卡片1背景圖 */
      if (!out.art) {
        try {
          if (window.state && state.result && state.result.hex && state.result.hex.cardImg) out.art = state.result.hex.cardImg;
        } catch (e) {}
      }
      /* 再保險：由畫面 draw-back-k 的卦號反查 */
      if (!out.art) {
        var dk = $("draw-back-k");
        if (dk && dk.textContent) {
          var m = String(dk.textContent).match(/(\d{1,2})/);
          if (m) {
            var h = findHexByNum(parseInt(m[1], 10));
            if (h && h.cardImg) out.art = h.cardImg;
          }
        }
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

  /* ============ 每日抽卡：1:1 微光卡（與畫面 .draw-card 相同設計，含該卦美術圖 + 卦名 + 指引文字） ============ */
  function buildDailyCard(r) {
    var art = r.art || "";
    var box = document.createElement("div");
    box.id = "save-daily-card";
    box.style.cssText = "width:1080px;height:1080px;box-sizing:border-box;background:#f4f1ea;font-family:'Noto Serif TC','Songti TC','STSong','Georgia',serif;color:#111;position:relative;padding:60px;display:flex;flex-direction:column;align-items:center;";
    /* 品牌名 DEC.12 */
    var brand = document.createElement("div");
    brand.style.cssText = "font-size:34px;font-weight:700;letter-spacing:12px;color:#8a8378;text-align:center;margin-bottom:34px;";
    brand.textContent = "DEC. 12";
    box.appendChild(brand);
    /* 圓頂狀框（與微光卡相同造形：border-radius 拱門） */
    var arch = document.createElement("div");
    arch.style.cssText = "width:960px;height:840px;box-sizing:border-box;background:#fff;border-radius:480px 480px 24px 24px / 320px 320px 24px 24px;position:relative;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.12);border:1px solid #e3ded2;";
    box.appendChild(arch);
    /* 背景美術圖（與結果頁同一張 card-XX-*.png） */
    if (art) {
      var bg = document.createElement("img");
      bg.src = art;
      bg.crossOrigin = "anonymous";
      bg.alt = "";
      bg.style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;display:block;";
      arch.appendChild(bg);
      /* 底部漸層：確保白字清晰可讀 */
      var grad = document.createElement("div");
      grad.style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.55) 78%,rgba(0,0,0,.7) 100%);";
      arch.appendChild(grad);
    }
    /* 文字區（與微光卡排版相同：卦名大標 + 分隔線 + 指引） */
    var txtWrap = document.createElement("div");
    txtWrap.style.cssText = "position:absolute;left:0;bottom:0;width:100%;box-sizing:border-box;padding:0 70px 66px;text-align:center;color:#fff;";
    arch.appendChild(txtWrap);
    var title = document.createElement("div");
    title.style.cssText = "font-size:62px;font-weight:700;letter-spacing:8px;color:#fff;text-shadow:0 2px 16px rgba(0,0,0,.6);margin-bottom:26px;";
    title.textContent = r.name || "每日靈感";
    txtWrap.appendChild(title);
    var line = document.createElement("div");
    line.style.cssText = "width:180px;height:3px;background:rgba(255,255,255,.85);margin:0 auto 26px;border-radius:2px;";
    txtWrap.appendChild(line);
    var guide = document.createElement("div");
    guide.style.cssText = "font-size:36px;line-height:1.9;color:rgba(255,255,255,.96);text-shadow:0 1px 12px rgba(0,0,0,.55);font-family:-apple-system,BlinkMacSystemFont,'PingFang TC','Microsoft JhengHei','Noto Sans TC',sans-serif;max-height:300px;overflow:hidden;";
    guide.textContent = r.guide || "";
    txtWrap.appendChild(guide);
    /* QR code（掃碼回 DEC.12） */
    var qrWrap = document.createElement("div");
    qrWrap.style.cssText = "margin-top:44px;display:flex;align-items:center;gap:26px;";
    var qrImg = document.createElement("img");
    qrImg.id = "save-daily-qr";
    qrImg.alt = "QR";
    qrImg.style.cssText = "width:150px;height:150px;display:block;background:#fff;padding:6px;box-sizing:border-box;border-radius:8px;";
    qrWrap.appendChild(qrImg);
    var qrTxt = document.createElement("div");
    qrTxt.style.cssText = "font-size:22px;color:#8a8378;letter-spacing:2px;line-height:1.6;";
    qrTxt.textContent = "DEC. 12\n掃描開啟每日指引";
    qrWrap.appendChild(qrTxt);
    box.appendChild(qrWrap);
    /* 填 QR */
    setQr(qrImg, location.href);
    return box;
  }

  /* ============ 進階卜卦：4 張 .slide 卡片上下排列（與結果頁 Carousel 相同樣式） ============ */
  function buildDivinationCard(r) {
    var wrap = document.createElement("div");
    wrap.id = "save-slides-wrap";
    wrap.style.cssText = "width:1080px;box-sizing:border-box;background:#f4f1ea;font-family:-apple-system,BlinkMacSystemFont,'PingFang TC','Microsoft JhengHei','Noto Sans TC','Noto Serif TC',serif;color:#111;padding:64px 64px 40px;";
    /* 品牌名 DEC.12 */
    var brand = document.createElement("div");
    brand.style.cssText = "font-size:34px;font-weight:700;letter-spacing:12px;color:#8a8378;text-align:center;margin-bottom:40px;font-family:'Noto Serif TC','Songti TC','STSong','Georgia',serif;";
    brand.textContent = "DEC. 12";
    wrap.appendChild(brand);
    /* 卡片1：圓頂狀框 + 該卦美術圖 + 卦名（與結果頁卡片1 .symbol-slide 一致） */
    var slides = r.slides && r.slides.length ? r.slides : [{ k: "", txt: "" }, { k: "", txt: "" }, { k: "", txt: "" }, { k: "", txt: "" }];
    var arch = document.createElement("div");
    arch.style.cssText = "width:100%;height:760px;box-sizing:border-box;background:#fff;border-radius:480px 480px 24px 24px / 260px 260px 24px 24px;position:relative;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.10);border:1px solid #e3ded2;margin-bottom:48px;";
    if (r.art) {
      var bg = document.createElement("img");
      bg.src = r.art;
      bg.crossOrigin = "anonymous";
      bg.alt = "";
      bg.style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;display:block;";
      arch.appendChild(bg);
      var grad = document.createElement("div");
      grad.style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.6) 100%);";
      arch.appendChild(grad);
    }
    var c1txt = document.createElement("div");
    c1txt.style.cssText = "position:absolute;left:0;bottom:0;width:100%;box-sizing:border-box;padding:0 60px 56px;text-align:center;color:#fff;";
    arch.appendChild(c1txt);
    var c1k = document.createElement("div");
    c1k.style.cssText = "font-size:56px;font-weight:700;letter-spacing:6px;color:#fff;text-shadow:0 2px 16px rgba(0,0,0,.6);margin-bottom:22px;font-family:'Noto Serif TC','Songti TC','STSong','Georgia',serif;";
    c1k.textContent = r.name || slides[0].k || "";
    c1txt.appendChild(c1k);
    var c1line = document.createElement("div");
    c1line.style.cssText = "width:160px;height:3px;background:rgba(255,255,255,.85);margin:0 auto;border-radius:2px;";
    c1txt.appendChild(c1line);
    wrap.appendChild(arch);
    /* 卡片2/3/4：解釋文字長條（與結果頁 .slide 相同排版） */
    var labels = ["", "關於「", "參考建議"];
    var defTitles = ["", "指引", "情境解讀", "參考建議"];
    for (var i = 1; i < 4; i++) {
      var s = slides[i] || { k: "", txt: "" };
      var card = document.createElement("div");
      card.style.cssText = "width:100%;box-sizing:border-box;background:#fff;border:1px solid #e3ded2;border-radius:20px;padding:40px 44px;margin-bottom:36px;text-align:left;";
      var k = document.createElement("div");
      k.style.cssText = "font-size:26px;color:#8a8378;margin-bottom:18px;letter-spacing:2px;";
      k.textContent = s.k || defTitles[i] || "";
      card.appendChild(k);
      var body = document.createElement("div");
      body.style.cssText = "font-size:32px;line-height:1.85;color:#111;white-space:pre-line;";
      body.textContent = s.txt || s.focus || "";
      card.appendChild(body);
      wrap.appendChild(card);
    }
    /* QR code */
    var qrWrap = document.createElement("div");
    qrWrap.style.cssText = "display:flex;align-items:center;gap:26px;padding:8px 0 16px;";
    var qrImg = document.createElement("img");
    qrImg.id = "save-div-qr";
    qrImg.alt = "QR";
    qrImg.style.cssText = "width:140px;height:140px;display:block;background:#fff;padding:6px;box-sizing:border-box;border-radius:8px;";
    qrWrap.appendChild(qrImg);
    var qrTxt = document.createElement("div");
    qrTxt.style.cssText = "font-size:22px;color:#8a8378;letter-spacing:2px;line-height:1.6;";
    qrTxt.textContent = "DEC. 12\n掃描開啟每日指引";
    qrWrap.appendChild(qrTxt);
    wrap.appendChild(qrWrap);
    setQr(qrImg, location.href);
    return wrap;
  }

  /* ============ QR code（qrcode-generator 全域 API） ============ */
  function setQr(img, url) {
    try {
      var fn = (typeof qrcode !== "undefined" && qrcode) ? qrcode(0, "M") : null;
      if (!fn && typeof QRCode !== "undefined") {
        /* 舊版 qrcode.min.js（build/ 不存在的那版） */
        var q = new QRCode(-1, "M");
        q.addData(url || "https://dec12.app");
        q.make();
        img.src = q.createDataURL(8, 8);
        return;
      }
      fn.addData(url || "https://dec12.app");
      fn.make();
      img.src = fn.createDataURL(10, 10);
    } catch (e) {
      img.src = "";
    }
  }

  /* ============ 等待圖片載入（含背景美術圖） ============ */
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
      setTimeout(function () { if (!done) { done = true; resolve(); } }, 5000);
    });
  }

  function showStage(el) {
    var stage = $("share-card-stage");
    if (!stage) return;
    stage.innerHTML = "";
    stage.appendChild(el);
    /* 定位在視口正中央（而非 left:0/top:0），避免 html2canvas 截圖瞬間在左上角閃出 */
    stage.style.left = Math.max(0, Math.round((window.innerWidth - 1080) / 2)) + "px";
    stage.style.top = Math.max(0, Math.round((window.innerHeight - 60) / 2)) + "px";
    stage.style.width = "1080px";
    stage.style.height = "auto";
    stage.style.zIndex = "9999";
    stage.style.opacity = "1";
    stage.style.position = "fixed";
    stage.style.background = "#f4f1ea";
    stage.style.pointerEvents = "none";
  }
  function hideStage() {
    var stage = $("share-card-stage");
    if (!stage) return;
    stage.style.left = "-9999px";
    stage.style.zIndex = "-1";
    stage.innerHTML = "";
  }

  /* ============ 生成 canvas（1080 寬輸出） ============ */
  function renderCanvas(kind) {
    var root = null, bg = "#f4f1ea";
    if (kind === "daily") {
      var r = readDaily();
      root = buildDailyCard(r);
      bg = "#f4f1ea";
    } else {
      var rd = readDivination();
      root = buildDivinationCard(rd);
      bg = "#f4f1ea";
    }
    showStage(root);
    return waitImages(root)
      .then(function () {
        return new Promise(function (resolve, reject) {
          if (typeof html2canvas === "undefined") { hideStage(); reject(new Error("html2canvas not loaded")); return; }
          var scale = 2; /* 2160px 輸出，品質高 */
          html2canvas(root, {
            scale: scale,
            backgroundColor: bg,
            useCORS: true,
            allowTaint: true,
            logging: false,
            width: root.offsetWidth,
            height: root.offsetHeight,
            windowWidth: 1080,
            onclone: function (doc) {
              /* 讓 clone 裡所有圖片也允許跨域 */
              var imgs = doc.querySelectorAll("img[src]");
              for (var i = 0; i < imgs.length; i++) {
                if (!imgs[i].getAttribute("crossorigin")) imgs[i].setAttribute("crossorigin", "anonymous");
              }
            }
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
