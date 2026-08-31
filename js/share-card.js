/* DEC.12 v47 · 結果圖卡（html2canvas + QRCode + Overlay 長壓儲存）
   ------------------------------------------------------------
   設計原則：
   1. 抽卡當下即綁定：用 MutationObserver 監看 #draw-back-k / #result-carousel，
      DOM 一更新就快照 {卦名, 內容, 美術圖} 到模組變數。儲存時只讀快照，
      永不讀 live DOM → 徹底消除「偶爾存到別張卡」的競態條件。
   2. 離線重建：圖卡全部用內聯樣式重建（不依賴外部 CSS），html2canvas 100% 渲染。
   3. 每日抽卡：3:4 畫布（1080×1440）、圓頂框 1:1（960×960）、DEC.12 品牌、QRcode。
   4. 進階卜卦：長條畫布（1080×H）、卡片1 圓頂框 1:1、卡片2/3/4 白底圓角長條
      （條列式圓點分行）、DEC.12 品牌、QRcode。
   5. Overlay 呈現：圖卡以最終尺寸直接顯示（無放大→縮小動畫），長壓即可儲存。 */
(function () {
  "use strict";

  /* ---------- 工具 ---------- */
  function isEn() {
    try { return localStorage.getItem("xingua_lang") === "en"; } catch (e) { return false; }
  }
  function siteUrl() {
    try { return location.href; } catch (e) { return "https://dec12.app/"; }
  }
  function clean(s) {
    return String(s == null ? "" : s).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  }
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function hexList() {
    var en = (typeof window !== "undefined" && window.HEXAGRAMS_EN) || null;
    var zh = (typeof window !== "undefined" && window.HEXAGRAMS) || [];
    return (isEn() && en && en.length) ? en : zh;
  }
  function findHex(num) {
    var list = hexList();
    for (var i = 0; i < list.length; i++) {
      if (list[i].num === num) return list[i];
    }
    return null;
  }
  function toast(msg) {
    try {
      var t = $("toast");
      if (t) {
        t.textContent = msg;
        t.classList.add("show");
        clearTimeout(t._timer);
        t._timer = setTimeout(function () { t.classList.remove("show"); }, 2200);
      }
    } catch (e) {}
  }

  /* ---------- 抽卡當下綁定（MutationObserver 快照） ---------- */
  var dailySnapshot = null;      // {num, name, guide, art}
  var divinationSnapshot = null; // [{kind:'main',name,art}, {kind:'text',title,body} x3]

  function watchDaily() {
    var k = $("draw-back-k");
    var t = $("draw-back-txt");
    if (!k) return;
    var take = function () {
      var name = clean(k.textContent);
      var guide = t ? clean(t.textContent) : "";
      var num = parseInt(name, 10);
      var hex = isNaN(num) ? null : findHex(num);
      dailySnapshot = {
        num: num,
        name: name,
        guide: guide,
        art: (hex && hex.cardImg) || ""
      };
    };
    var mo = new MutationObserver(take);
    mo.observe(k, { childList: true, characterData: true, subtree: true });
    if (t) mo.observe(t, { childList: true, characterData: true, subtree: true });
  }

  function watchDivination() {
    var car = $("result-carousel");
    if (!car) return;
    var take = function () {
      var slides = car.querySelectorAll(".slide");
      if (!slides.length) return;
      var snap = [];
      var s1 = slides[0];
      var nameEl = s1.querySelector(".name");
      var imgEl = s1.querySelector(".card-main-img");
      snap.push({
        kind: "main",
        name: nameEl ? clean(nameEl.textContent) : "",
        art: imgEl ? imgEl.getAttribute("src") : ""
      });
      for (var i = 1; i < slides.length && i < 4; i++) {
        var s = slides[i];
        var kEl = s.querySelector(".slide-k");
        var coreEl = s.querySelector(".core-txt");
        var focusEl = s.querySelector(".focus");
        snap.push({
          kind: "text",
          title: kEl ? clean(kEl.textContent) : "",
          body: coreEl ? clean(coreEl.textContent) : (focusEl ? clean(focusEl.textContent) : "")
        });
      }
      divinationSnapshot = snap;
    };
    var mo = new MutationObserver(take);
    mo.observe(car, { childList: true, subtree: true });
  }

  /* ---------- 模式判斷 ---------- */
  function currentMode() {
    var active = document.querySelector(".screen.active");
    var name = active ? active.getAttribute("data-screen") : "";
    if (name === "p2c" && divinationSnapshot && divinationSnapshot.length >= 4) return "divination";
    if (dailySnapshot && dailySnapshot.name) return "daily";
    return null;
  }

  /* ---------- QR ---------- */
  function drawQr() {
    return new Promise(function (resolve) {
      if (typeof QRCode === "undefined") { resolve(""); return; }
      QRCode.toDataURL(siteUrl(), {
        width: 300, margin: 1, color: { dark: "#111111", light: "#f4f1ea" }
      }).then(function (url) { resolve(url); }).catch(function () { resolve(""); });
    });
  }

  /* ---------- 圖卡 HTML（全部內聯樣式） ---------- */
  var SERIF = "'Noto Serif TC','Songti TC','STSong','Georgia',serif";

  function brandHtml() {
    return '<div style="font-size:34px;letter-spacing:14px;color:#a39d90;text-align:center;margin-bottom:36px;font-family:' + SERIF + ';">DEC. 12</div>';
  }
  function qrHtml(qr) {
    return '<div style="margin-top:44px;display:flex;align-items:center;justify-content:center;gap:24px;">' +
      (qr ? '<img src="' + qr + '" style="width:150px;height:150px;border-radius:10px;flex-shrink:0;">' : "") +
      '<div style="font-size:22px;color:#a39d90;line-height:1.7;letter-spacing:1px;text-align:left;font-family:' + SERIF + ';">掃碼回到 DEC. 12<br>每一次占卜，都是一次與自己的對話</div>' +
      "</div>";
  }
  function domeFrameHtml(art, name, guide) {
    return '<div style="width:960px;height:960px;border-radius:50% 50% 18px 18px/38% 38% 18px 18px;overflow:hidden;position:relative;box-shadow:0 18px 44px rgba(0,0,0,.14);flex-shrink:0;background:#101014;">' +
      (art ? '<img src="' + art + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">' : "") +
      '<div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.18) 0%,rgba(0,0,0,0) 32%,rgba(0,0,0,.55) 100%);"></div>' +
      '<div style="position:absolute;left:84px;right:84px;top:52px;text-align:center;">' +
        '<div style="font-size:56px;font-weight:700;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.6);letter-spacing:4px;line-height:1.3;font-family:' + SERIF + ';">' + esc(name) + "</div>" +
      "</div>" +
      '<div style="position:absolute;left:84px;right:84px;bottom:44px;text-align:left;">' +
        '<div style="font-size:30px;line-height:1.75;color:#fff;text-shadow:0 1px 10px rgba(0,0,0,.65);max-height:430px;overflow:hidden;letter-spacing:1px;font-family:' + SERIF + ';">' + esc(guide) + "</div>" +
      "</div>" +
      "</div>";
  }
  function textCardHtml(title, body) {
    return '<div style="width:960px;background:#fff;border-radius:24px;padding:40px 48px;margin-top:32px;box-shadow:0 8px 24px rgba(0,0,0,.06);box-sizing:border-box;">' +
      '<div style="font-size:26px;color:#8a8578;letter-spacing:2px;margin-bottom:16px;font-family:' + SERIF + ';">' + esc(title) + "</div>" +
      '<div style="font-size:32px;color:#111;line-height:1.8;letter-spacing:1px;white-space:pre-line;font-family:' + SERIF + ';">' + esc(body) + "</div>" +
      "</div>";
  }

  function dailyCardHtml(snap, qr) {
    return '<div style="width:1080px;height:1440px;background:#f4f1ea;position:relative;overflow:hidden;box-sizing:border-box;padding:60px 60px 56px;display:flex;flex-direction:column;align-items:center;">' +
      brandHtml() +
      domeFrameHtml(snap.art, snap.name, snap.guide) +
      qrHtml(qr) +
      "</div>";
  }

  function divinationCardHtml(snap, qr) {
    var html = '<div style="width:1080px;background:#f4f1ea;position:relative;box-sizing:border-box;padding:60px 60px 56px;display:flex;flex-direction:column;align-items:center;">' +
      brandHtml();
    var main = snap[0];
    html += domeFrameHtml(main.art, main.name, "");
    for (var i = 1; i < snap.length; i++) {
      html += textCardHtml(snap[i].title, snap[i].body);
    }
    html += qrHtml(qr);
    html += "</div>";
    return html;
  }

  /* ---------- 離線渲染（html2canvas） ---------- */
  function renderToCanvas(html, width, height) {
    var stage = $("share-card-stage");
    if (!stage) return Promise.reject(new Error("no stage"));
    if (typeof html2canvas === "undefined") return Promise.reject(new Error("html2canvas not loaded"));
    stage.style.left = "-9999px";
    stage.style.top = "0";
    stage.style.zIndex = "-1";
    stage.style.opacity = "1";
    stage.style.width = width + "px";
    stage.style.height = height + "px";
    stage.innerHTML = html;
    return html2canvas(stage.firstChild, {
      scale: 2,
      backgroundColor: "#f4f1ea",
      useCORS: true,
      logging: false,
      width: width,
      height: height,
      windowWidth: width
    });
  }

  /* ---------- Overlay 預覽（長壓儲存） ---------- */
  function showPreview(canvas) {
    var ov = $("card-preview-overlay");
    var img = $("card-preview-img");
    if (!ov || !img) return;
    img.src = canvas.toDataURL("image/png");
    ov.classList.add("open");
  }

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
        setTimeout(function () {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 800);
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

  /* ---------- 主流程 ---------- */
  function shareCard() {
    var mode = currentMode();
    if (!mode) { toast(isEn() ? "Please finish a reading first." : "請先完成卜卦"); return; }
    var snap = mode === "daily" ? dailySnapshot : divinationSnapshot;
    if (!snap) { toast(isEn() ? "Please finish a reading first." : "請先完成卜卦"); return; }

    drawQr().then(function (qr) {
      var html, w, h;
      if (mode === "daily") {
        w = 1080; h = 1440;
        html = dailyCardHtml(snap, qr);
      } else {
        w = 1080; h = 0;
        html = divinationCardHtml(snap, qr);
      }
      var stage = $("share-card-stage");
      if (h === 0) {
        stage.style.width = w + "px";
        stage.style.height = "auto";
        stage.innerHTML = html;
        h = stage.scrollHeight;
      }
      renderToCanvas(html, w, h).then(function (canvas) {
        showPreview(canvas);
      }).catch(function () {
        toast(isEn() ? "Could not generate card." : "圖卡生成失敗，請重試");
      });
    });
  }

  /* ---------- 綁定 ---------- */
  function bind() {
    var btn = $("social-card");
    if (btn) btn.addEventListener("click", shareCard);

    var dl = $("card-preview-download");
    if (dl) dl.addEventListener("click", function () {
      var img = $("card-preview-img");
      if (img && img.src && img.src.indexOf("data:image/png") === 0) {
        var a = document.createElement("a");
        a.href = img.src;
        a.download = "dec12-reading.png";
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { document.body.removeChild(a); }, 800);
      }
    });
    var close = $("card-preview-close");
    if (close) close.addEventListener("click", function () {
      var ov = $("card-preview-overlay");
      if (ov) ov.classList.remove("open");
    });
    var ov = $("card-preview-overlay");
    if (ov) ov.addEventListener("click", function (e) {
      if (e.target === this) this.classList.remove("open");
    });

    watchDaily();
    watchDivination();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();