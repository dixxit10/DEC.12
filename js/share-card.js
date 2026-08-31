/* DEC.12 v35 · 分享結果圖卡（html2canvas + QRCode + Web Share API）
   獨立於 app.js：直接讀取已渲染的結果 DOM（#result-meta / #result-carousel），
   不需觸碰 app.js 內部狀態。 */
(function () {
  "use strict";

  function isEn() {
    try { return localStorage.getItem("xingua_lang") === "en"; } catch (e) { return false; }
  }

  function siteUrl() {
    try {
      return location.href;
    } catch (e) { return "https://dec12.app/"; }
  }

  function clean(s) {
    return String(s == null ? "" : s).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  }

  /* 從已渲染結果 DOM 取出本卦 / 變卦 / 指引文字 */
  function readResult() {
    var out = {
      name: "",
      en: "",
      guide: "",
      cat: "",
      symbol: "☰",
      changed: ""
    };
    try {
      var car = document.getElementById("result-carousel");
      if (car) {
        var slides = car.querySelectorAll(".slide");
        if (slides.length) {
          /* slide 1：卦名與卦象 */
          var nm = slides[0] && slides[0].querySelector(".name");
          if (nm) out.name = clean(nm.textContent);
          var pr = slides[0] && slides[0].querySelector(".pair");
          if (pr) out.changed = clean(pr.textContent);
          /* slide 2：核心指引 */
          var core = slides[1] && slides[1].querySelector(".core-txt");
          if (core) out.guide = clean(core.textContent);
          /* slide 3：情境解讀 */
          var f = slides[2] && slides[2].querySelector(".focus");
          if (f) out.cat = clean(f.textContent);
        }
      }
    } catch (e) {}
    if (!out.name) {
      try {
        var meta = document.getElementById("result-meta");
        if (meta) {
          var m = clean(meta.textContent);
          out.cat = m;
        }
      } catch (e) {}
    }
    return out;
  }

  function fillCard() {
    var r = readResult();
    var elName = document.getElementById("card-hexname");
    var elEn = document.getElementById("card-hexen");
    var elGuide = document.getElementById("card-guide");
    var elCat = document.getElementById("card-cat");
    var elSym = document.getElementById("card-symbol");

    if (elName) {
      elName.textContent = r.name || (isEn() ? "I Ching" : "易經指引");
    }
    if (elEn) {
      elEn.textContent = r.changed || (isEn() ? "The Book of Changes" : "The Book of Changes");
    }
    if (elGuide) {
      elGuide.textContent = r.guide || (isEn() ? "Every divination is a conversation with yourself." : "每一次占卜，都是一次與自己的對話。");
    }
    if (elCat) {
      var catTxt = r.cat;
      if (catTxt) {
        if (catTxt.length > 56) catTxt = catTxt.slice(0, 55) + "…";
        elCat.textContent = catTxt;
        elCat.style.display = "";
      } else {
        elCat.textContent = "";
        elCat.style.display = "none";
      }
    }
    /* 卦象符號：從卦名前的數字 → 抓對應 Unicode 三線卦符號（由卦名前綴天/地/水/火/雷/風/山/澤決定） */
    if (elSym) {
      var sym = guessSymbol(r.name);
      if (sym) elSym.textContent = sym;
    }
  }

  /* 由卦名猜測主卦符號：match 中文卦名含字 → 八卦符號 */
  function guessSymbol(name) {
    var n = String(name || "");
    var map = [
      ["天", "\u2630"], ["澤", "\u2631"], ["火", "\u2632"], ["雷", "\u2633"],
      ["風", "\u2634"], ["水", "\u2635"], ["山", "\u2636"], ["地", "\u2637"]
    ];
    for (var i = 0; i < map.length; i++) {
      if (n.indexOf(map[i][0]) >= 0) return map[i][1];
    }
    return "\u2630";
  }

  function drawQr() {
    return new Promise(function (resolve) {
      var img = document.getElementById("card-qr");
      if (!img || typeof QRCode === "undefined") { resolve(); return; }
      QRCode.toDataURL(siteUrl(), { width: 300, margin: 1, color: { dark: "#111111", light: "#f4f1ea" } })
        .then(function (url) { img.src = url; resolve(); })
        .catch(function () { resolve(); });
    });
  }

  function renderCardImage() {
    var stage = document.getElementById("share-card-stage");
    if (!stage) return Promise.reject(new Error("no stage"));
    stage.style.left = "0px";
    stage.style.zIndex = "9999";
    stage.style.opacity = "1";
    return drawQr()
      .then(function () {
        return new Promise(function (resolve, reject) {
          if (typeof html2canvas === "undefined") { reject(new Error("html2canvas not loaded")); return; }
          var card = document.getElementById("share-card");
          html2canvas(card, {
            scale: 1,
            backgroundColor: "#f4f1ea",
            useCORS: true,
            logging: false,
            windowWidth: 1080,
            width: 1080,
            height: 1080
          }).then(function (canvas) {
            stage.style.left = "-9999px";
            stage.style.zIndex = "-1";
            resolve(canvas);
          }).catch(function (e) {
            stage.style.left = "-9999px";
            stage.style.zIndex = "-1";
            reject(e);
          });
        });
      });
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

  function toast(msg) {
    try {
      var t = document.getElementById("toast");
      if (t) { t.textContent = msg; t.classList.add("show"); setTimeout(function () { t.classList.remove("show"); }, 2200); }
    } catch (e) {}
  }

  function shareCard() {
    fillCard();
    renderCardImage().then(function (canvas) {
      var overlay = document.getElementById("share-overlay");
      if (overlay) overlay.classList.remove("open");

      /* 手機：Web Share API 分享圖片；桌面：直接下載 */
      var file = null;
      try {
        var blob = canvas.toBlob ? null : null;
      } catch (e) {}
      if (navigator.share && navigator.canShare) {
        canvas.toBlob(function (b) {
          if (!b) { downloadCanvas(canvas); return; }
          var f = new File([b], "dec12-reading.png", { type: "image/png" });
          var files = [f];
          if (navigator.canShare({ files: files })) {
            navigator.share({ files: files, title: "DEC. 12", text: isEn() ? "My I Ching reading from DEC.12" : "我在 DEC. 12 抽到的指引" })
              .catch(function () { downloadCanvas(canvas); });
          } else {
            downloadCanvas(canvas);
          }
        }, "image/png");
      } else {
        downloadCanvas(canvas);
      }
    }).catch(function () {
      toast(isEn() ? "Could not generate card. Try sharing text instead." : "圖卡生成失敗，請改用文字分享");
    });
  }

  function bind() {
    var btn = document.getElementById("social-card");
    if (btn) btn.addEventListener("click", shareCard);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
