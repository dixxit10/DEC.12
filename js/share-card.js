/* DEC.12 v44 · 儲存結果圖卡（儲存結果 = 把畫面上看到的結果卡片原封不動輸出成 PNG）
   核心原則：
     ① 每日抽卡 → 輸出 3:4 微光卡（與畫面 #draw-card 翻開後相同的 .draw-card 造型：
        米白畫布 + 圓頂狀框 1:1 + 該卦美術圖 + 卦名 + 指引文字）
     ② 進階卜卦 → 輸出長條 PNG（圓頂狀框 1:1 放卡片1 美術圖+卦名，
        卡片2/3/4 解釋文字在下方成長條，完整顯示不截斷）
   本版修正（v43→v44）：
     問題1：每日抽卡圖片對應錯誤 → 美術圖/卦名/內容一律以「畫面當下」DOM 為權威來源
            （#draw-back-el img 或 #draw-back-k 卦名反查），三者保證同一張卡
     問題2：每日抽卡畫布改 3:4（1080×1440）
     問題3：文字被圓頂框截斷 → 字級調小 + max-height 適配 + 留白加大
     問題4：進階卜卦圓頂框改 1:1（960×960，與每日抽卡一致）
     問題5：最上方加 DEC.12 品牌、底部 QRcode 移除
   注意：全部以「內聯樣式 + 明確 px」重建（不依賴外部 CSS），避免 html2canvas 讀不到 class 樣式。
   產生後顯示在預覽層：使用者長壓圖片即可儲存，或按「下載圖片」按鈕。 */
(function () {
  "use strict";

  function isEn() { try { return localStorage.getItem("xingua_lang") === "en"; } catch (e) { return false; } }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function $(id) { return document.getElementById(id); }
  function toast(msg) { try { var t = $("toast"); if (t) { t.textContent = msg; t.classList.add("show"); setTimeout(function () { t.classList.remove("show"); }, 2200); } } catch (e) {} }

  /* ============ 讀取目前結果（權威來源 = 畫面當下 DOM） ============ */
  function findHexByNum(num) {
    try {
      var n = parseInt(num, 10);
      var list = (typeof window !== "undefined" && window.HEXAGRAMS) || [];
      for (var i = 0; i < list.length; i++) {
        if (list[i] && parseInt(list[i].num, 10) === n) return list[i];
      }
    } catch (e) {}
    return null;
  }

  /* 每日抽卡：直接讀畫面 #draw-card 翻開後的 DOM。
     美術圖優先取 #draw-back-el 內的背景圖（與畫面完全同一張）；
     若該處是元素小圖則改由 #draw-back-k 卦名反查 HEXAGRAMS.cardImg。
     卦名/內容也全部來自畫面 DOM → 三者保證同一張卡。 */
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

      /* 1) 畫面 #draw-back-el 的背景圖（即時、權威） */
      var del = $("draw-back-el");
      if (del) {
        var imgs = del.querySelectorAll("img");
        for (var i = 0; i < imgs.length; i++) {
          var src = imgs[i].getAttribute("src") || "";
          if (src && /card|hexagram|art|cover/i.test(src)) { out.art = src; break; }
        }
      }
      /* 2) 保險：由卦名反查（64 卦全有 cardImg；型別已統一） */
      if (!out.art && out.num) {
        var h = findHexByNum(out.num);
        if (h && h.cardImg) out.art = h.cardImg;
      }
    } catch (e) {}
    return out;
  }

  /* 進階卜卦：直接讀畫面 Carousel 的 4 張 .slide（與畫面一致）。
     卡片1 美術圖取 .card-main-img（即時、權威），卦名取 .name。 */
  function readDivination() {
    var out = { slides: [], art: "", name: "" };
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
            if (img && img.getAttribute("src")) out.art = img.getAttribute("src");
            var nm = s.querySelector(".name");
            if (nm) out.name = String(nm.textContent).replace(/\s+/g, " ").trim();
          }
        }
      }
      /* 保險：由卡片1 卦名反查 cardImg（型別統一） */
      if (!out.art && out.name) {
        var m = out.name.match(/(\d{1,2})/);
        if (m) {
          var h = findHexByNum(parseInt(m[1], 10));
          if (h && h.cardImg) out.art = h.cardImg;
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

  /* ============ 每日抽卡：3:4 米白畫布 + 圓頂狀框 1:1（與微光卡同造型） ============ */
  function buildDailyCard(r) {
    var art = r.art || "";
    var box = document.createElement("div");
    box.id = "save-daily-card";
    /* 畫布 1080×1440（3:4）：四周留白 64px，最上方 DEC.12 品牌 */
    box.style.cssText = "width:1080px;height:1440px;box-sizing:border-box;background:#f4f1ea;font-family:'Noto Serif TC','Songti TC','STSong','Georgia',serif;color:#111;position:relative;padding:64px 64px 0;display:flex;flex-direction:column;align-items:center;";
    /* 品牌名 DEC.12（最上方） */
    var brand = document.createElement("div");
    brand.style.cssText = "font-size:34px;font-weight:700;letter-spacing:14px;color:#8a8378;text-align:center;margin-bottom:40px;flex:0 0 auto;";
    brand.textContent = "DEC. 12";
    box.appendChild(brand);
    /* 圓頂狀框（1:1 = 960×960，與微光卡相同拱門造型 border-radius） */
    var arch = document.createElement("div");
    arch.style.cssText = "width:960px;height:960px;box-sizing:border-box;background:#fff;border-radius:480px 480px 24px 24px / 380px 380px 24px 24px;position:relative;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.12);border:1px solid #e3ded2;flex:0 0 auto;";
    box.appendChild(arch);
    /* 該卦背景美術圖（與畫面同一張） */
    if (art) {
      var bg = document.createElement("img");
      bg.src = art;
      bg.crossOrigin = "anonymous";
      bg.alt = "";
      bg.style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;display:block;";
      arch.appendChild(bg);
      /* 底部漸層：確保白字清晰可讀 */
      var grad = document.createElement("div");
      grad.style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(0,0,0,0) 42%,rgba(0,0,0,.5) 76%,rgba(0,0,0,.66) 100%);";
      arch.appendChild(grad);
    }
    /* 框內文字（微光卡排版：卦名大標 + 分隔線 + 指引；字級調小確保完整顯示） */
    var txtWrap = document.createElement("div");
    txtWrap.style.cssText = "position:absolute;left:0;bottom:0;width:100%;box-sizing:border-box;padding:0 84px 88px;text-align:center;color:#fff;";
    arch.appendChild(txtWrap);
    var title = document.createElement("div");
    title.style.cssText = "font-size:56px;font-weight:700;letter-spacing:8px;color:#fff;text-shadow:0 2px 16px rgba(0,0,0,.6);margin-bottom:24px;";
    title.textContent = r.name || (isEn() ? "Daily Light" : "每日靈感");
    txtWrap.appendChild(title);
    var line = document.createElement("div");
    line.style.cssText = "width:170px;height:3px;background:rgba(255,255,255,.85);margin:0 auto 26px;border-radius:2px;";
    txtWrap.appendChild(line);
    var guide = document.createElement("div");
    guide.style.cssText = "font-size:30px;line-height:1.85;color:rgba(255,255,255,.97);text-shadow:0 1px 12px rgba(0,0,0,.55);font-family:-apple-system,BlinkMacSystemFont,'PingFang TC','Microsoft JhengHei','Noto Sans TC',sans-serif;max-height:430px;overflow:hidden;";
    guide.textContent = r.guide || "";
    txtWrap.appendChild(guide);
    /* 底部 QRcode 已移除（v44） */
    return box;
  }

  /* ============ 進階卜卦：圓頂狀框 1:1（卡片1）+ 卡片2/3/4 長條（完整內容） ============ */
  function buildDivinationCard(r) {
    var slides = r.slides && r.slides.length ? r.slides : [{ k: "", txt: "" }, { k: "", txt: "" }, { k: "", txt: "" }, { k: "", txt: "" }];
    var wrap = document.createElement("div");
    wrap.id = "save-slides-wrap";
    /* 寬 1080、高度動態（長條），四周留白 64px，最上方 DEC.12 品牌 */
    wrap.style.cssText = "width:1080px;box-sizing:border-box;background:#f4f1ea;font-family:-apple-system,BlinkMacSystemFont,'PingFang TC','Microsoft JhengHei','Noto Sans TC','Noto Serif TC',serif;color:#111;padding:64px 64px 70px;";
    var brand = document.createElement("div");
    brand.style.cssText = "font-size:34px;font-weight:700;letter-spacing:14px;color:#8a8378;text-align:center;margin-bottom:40px;font-family:'Noto Serif TC','Songti TC','STSong','Georgia',serif;";
    brand.textContent = "DEC. 12";
    wrap.appendChild(brand);
    /* 卡片1：圓頂狀框 1:1（960×960，與每日抽卡一致）+ 該卦美術圖 + 卦名 */
    var arch = document.createElement("div");
    arch.style.cssText = "width:960px;height:960px;box-sizing:border-box;background:#fff;border-radius:480px 480px 24px 24px / 380px 380px 24px 24px;position:relative;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.10);border:1px solid #e3ded2;margin:0 auto 52px;";
    if (r.art) {
      var bg = document.createElement("img");
      bg.src = r.art;
      bg.crossOrigin = "anonymous";
      bg.alt = "";
      bg.style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;display:block;";
      arch.appendChild(bg);
      var grad = document.createElement("div");
      grad.style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.58) 100%);";
      arch.appendChild(grad);
    }
    var c1txt = document.createElement("div");
    c1txt.style.cssText = "position:absolute;left:0;bottom:0;width:100%;box-sizing:border-box;padding:0 80px 84px;text-align:center;color:#fff;";
    arch.appendChild(c1txt);
    var c1k = document.createElement("div");
    c1k.style.cssText = "font-size:56px;font-weight:700;letter-spacing:6px;color:#fff;text-shadow:0 2px 16px rgba(0,0,0,.6);margin-bottom:22px;font-family:'Noto Serif TC','Songti TC','STSong','Georgia',serif;";
    c1k.textContent = r.name || slides[0].k || "";
    c1txt.appendChild(c1k);
    var c1line = document.createElement("div");
    c1line.style.cssText = "width:160px;height:3px;background:rgba(255,255,255,.85);margin:0 auto;border-radius:2px;";
    c1txt.appendChild(c1line);
    wrap.appendChild(arch);
    /* 卡片2/3/4：解釋文字長條（與結果頁 Carousel 相同排版；高度自動、完整顯示不截斷） */
    var defTitles = ["", (isEn() ? "Reading" : "指引"), (isEn() ? "Context" : "情境解讀"), (isEn() ? "Guidance" : "參考建議")];
    for (var i = 1; i < 4; i++) {
      var s = slides[i] || { k: "", txt: "" };
      var card = document.createElement("div");
      card.style.cssText = "width:100%;box-sizing:border-box;background:#fff;border:1px solid #e3ded2;border-radius:20px;padding:44px 48px;margin-bottom:36px;text-align:left;";
      var k = document.createElement("div");
      k.style.cssText = "font-size:26px;color:#8a8378;margin-bottom:20px;letter-spacing:2px;";
      k.textContent = s.k || defTitles[i] || "";
      card.appendChild(k);
      var body = document.createElement("div");
      body.style.cssText = "font-size:30px;line-height:1.85;color:#111;white-space:pre-line;";
      body.textContent = s.txt || s.focus || "";
      card.appendChild(body);
      wrap.appendChild(card);
    }
    /* 底部 QRcode 已移除（v44） */
    return wrap;
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
    var w = el.offsetWidth || 1080;
    stage.style.left = Math.max(0, Math.round((window.innerWidth - w) / 2)) + "px";
    stage.style.top = Math.max(0, Math.round((window.innerHeight - 60) / 2)) + "px";
    stage.style.width = w + "px";
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

  /* ============ 生成 canvas（1080 寬輸出，scale 2 → 2160） ============ */
  function renderCanvas(kind) {
    var root = null, bg = "#f4f1ea";
    if (kind === "daily") {
      root = buildDailyCard(readDaily());
    } else {
      root = buildDivinationCard(readDivination());
    }
    showStage(root);
    return waitImages(root)
      .then(function () {
        return new Promise(function (resolve, reject) {
          if (typeof html2canvas === "undefined") { hideStage(); reject(new Error("html2canvas not loaded")); return; }
          var scale = 2; /* 2160px 寬輸出，品質高 */
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
