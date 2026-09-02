(function () {
    "use strict";

    // ---------- 基本工具 ----------

    function isEn() {
        try {
            return localStorage.getItem("xingua_lang") === "en";
        } catch (e) {
            return false;
        }
    }

    function siteUrl() {
        try {
            return location.href;
        } catch (e) {
            return "https://dec12.app/";
        }
    }

    function clean(s) {
        return String(s == null ? "" : s)
            .replace(/<[^>]*>/g, "")
            .replace(/\s+/g, " ")
            .trim();
    }

    function cleanKeepNL(s) {
        return String(s == null ? "" : s)
            .replace(/<[^>]*>/g, "")
            .replace(/[ \t]+/g, " ")
            .replace(/\n{3,}/g, "\n\n")
            .trim();
    }

    function $(id) {
        return document.getElementById(id);
    }

    function esc(s) {
        return String(s == null ? "" : s)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function hexList() {
        var en = (typeof window != "undefined" && window.HEXAGRAMS_EN) || null;
        var zh = (typeof window != "undefined" && window.HEXAGRAMS) || [];
        return isEn() && en && en.length ? en : zh;
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
                t._timer = setTimeout(function () {
                    t.classList.remove("show");
                }, 2200);
            }
        } catch (e) {}
    }

    // ---------- 狀態快照 ----------

    var dailySnapshot = null;
    var divinationSnapshot = null;

    function watchDaily() {
        var k = $("draw-back-k");
        var t = $("draw-back-txt");
        if (!k) return;

        var take = function () {
            var name = clean(k.textContent);
            var guide = t ? clean(t.textContent) : "";
            var hex = null;

            try {
                if (window.__lastHex && window.__lastHex.num) hex = window.__lastHex;
            } catch (e) {}

            if (!hex) {
                var num = parseInt(name, 10);
                hex = isNaN(num) ? null : findHex(num);
            }

            dailySnapshot = {
                num: hex ? hex.num : NaN,
                name: name,
                guide: (hex && (hex.core || hex.plainText || hex.plain || "")) || guide,
                art: (hex && hex.cardImg) || "",
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
                art: imgEl ? imgEl.getAttribute("src") : "",
            });

            for (var i = 1; i < slides.length && i < 4; i++) {
                var s = slides[i];
                var kEl = s.querySelector(".slide-k");
                var coreEl = s.querySelector(".core-txt");
                var focusEl = s.querySelector(".focus");

                snap.push({
                    kind: "text",
                    title: kEl ? clean(kEl.textContent) : "",
                    body: coreEl ? cleanKeepNL(coreEl.textContent) : focusEl ? cleanKeepNL(focusEl.textContent) : "",
                });
            }

            divinationSnapshot = snap;
        };

        var mo = new MutationObserver(take);
        mo.observe(car, { childList: true, subtree: true });
    }

    function currentMode() {
        var active = document.querySelector(".screen.active");
        var name = active ? active.getAttribute("data-screen") : "";

        if (name === "p2c" && divinationSnapshot && divinationSnapshot.length >= 4) return "divination";
        if (dailySnapshot && dailySnapshot.name) return "daily";
        return null;
    }

    function drawQr() {
        return new Promise(function (resolve) {
            if (typeof QRCode == "undefined") {
                resolve("");
                return;
            }
            QRCode.toDataURL(siteUrl(), {
                width: 300,
                margin: 1,
                color: { dark: "#111111", light: "#f4f1ea" },
            })
                .then(function (url) {
                    resolve(url);
                })
                .catch(function () {
                    resolve("");
                });
        });
    }

    // ---------- 卡片樣式（HTML 字串） ----------

    var SANS = "'Noto Sans TC','Songti TC','STSong','Georgia',sans-serif";
    var SERIF = "'Noto Serif TC','Songti TC','STSong','Georgia',serif";

    function brandHtml() {
        return `
            <div style="
                font-size: 40px;
                letter-spacing: 14px;
                color: #a39d90;
                text-align: center;
                margin-bottom: 36px;
                font-family: ${SERIF};
            ">DEC. 12</div>
        `;
    }

    function qrHtml(qr) {
        var qrImg = qr
            ? `<div style="
            padding: 50px;
            background: #f4f1ea;
            display: inline-block;
            border-radius: 10px;
            vertical-align: middle;
          ">            
            <img src="${qr}" style="
                width: 150px;
                height: 150px;
                border-radius: 10px;
                display: inline-block;
                vertical-align: middle;
              ">`
            : "";

        return `
            <div style="margin-top: 44px; text-align: center;">
                ${qrImg}
                <div style="
                    display: inline-block;
                    vertical-align: middle;
                    margin-left: 24px;
                    font-size: 26px;
                    color: #a39d90;
                    line-height: 1.7;
                    letter-spacing: 1px;
                    text-align: left;
                    font-family: ${SANS};
                ">掃碼回到 DEC. 12<br>每一次提問，都是一次與自己的對話</div>
            </div>
        `;
    }

    function domeFrameHtml(art, name, guide) {
        var artImg = art
            ? `<img src="${art}" style="
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
              ">`
            : "";

        return `
            <div style="
                width: 960px;
                height: 960px;
                border-radius: 50% 50% 18px 18px / 38% 38% 18px 18px;
                overflow: hidden;
                position: relative;
                box-shadow: 0 18px 44px rgba(0,0,0,.14);
                flex-shrink: 0;
                background: #101010;
            ">
                ${artImg}
                <div style="
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(0,0,0,.18) 0%, rgba(0,0,0,0) 32%, rgba(0,0,0,.55) 100%);
                "></div>
                <div style="
                    position: absolute;
                    left: 100px;
                    right: 100px;
                    top: 250px;
                    text-align: center;
                ">
                    <div style="
                        font-size: 40px;
                        font-weight: 700;
                        color: #fff;
                        text-shadow: 0 2px 12px rgba(0,0,0,.6);
                        letter-spacing: 2px;
                        line-height: 1.3;
                        font-family: ${SERIF};
                    ">${esc(name)}</div>
                    <div style="
                        font-size: 30px;
                        line-height: 1.7;
                        color: #fff;
                        text-shadow: 0 1px 10px rgba(0,0,0,.65);
                        white-space: pre-line;
                        letter-spacing: 1px;
                        margin-top: 10px;
                        height: 500px;
                        overflow: hidden;
                        font-family: ${SANS};
                    ">${esc(guide)}</div>
                </div>
            </div>
        `;
    }

    function textCardHtml(title, body) {
        var b = String(body == null ? "" : body)
            .replace(/[ \t]*•[ \t]*/g, "\n•")
            .replace(/^\n+/, "");

        return `
            <div style="
                width: 960px;
                background: #fff;
                border-radius: 24px;
                padding: 40px 48px;
                margin-top: 32px;
                box-shadow: 0 8px 24px rgba(0,0,0,.06);
                box-sizing: border-box;
                text-align: center;
            ">
                <div style="
                    font-size: 26px;
                    color: #8a8578;
                    letter-spacing: 2px;
                    margin-bottom: 16px;
                    font-family: ${SANS};
                ">${esc(title)}</div>
                <div style="
                    font-size: 32px;
                    color: #111;
                    line-height: 1.8;
                    letter-spacing: 1px;
                    white-space: normal;
                    font-family: ${SANS};
                ">${esc(b).replace(/\n/g, "<br>")}</div>
            </div>
        `;
    }

    function dailyCardHtml(snap, q) {
        return `
            <div style="
                width: 1080px;
                height: 1440px;
                background: #f4f1ea;
                position: relative;
                overflow: hidden;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                padding: 60px 60px 56px;
            ">
                <div style="width: 100%; text-align: center;">
                    ${brandHtml()}
                    ${domeFrameHtml(snap.art, snap.name, snap.guide)}
                    ${qrHtml(q)}
                </div>
            </div>
        `;
    }

    function divinationCardHtml(snap, qr) {
        var main = snap[0];
        var html = `
            <div style="
                width: 1080px;
                background: #f4f1ea;
                position: relative;
                box-sizing: border-box;
                padding: 60px 60px 56px;
                display: flex;
                flex-direction: column;
                align-items: center;
            ">
                ${brandHtml()}
                ${domeFrameHtml(main.art, main.name, "")}
        `;

        for (var i = 1; i < snap.length; i++) {
            html += textCardHtml(snap[i].title, snap[i].body);
        }

        html += qrHtml(qr);
        html += "</div>";
        return html;
    }

    // ---------- 渲染與輸出 ----------

    function renderToCanvas(html, width, height) {
        var stage = $("share-card-stage");
        if (!stage) return Promise.reject(new Error("no stage"));
        if (typeof html2canvas == "undefined") return Promise.reject(new Error("html2canvas not loaded"));

        stage.style.left = "-9999px";
        stage.style.top = "0";
        stage.style.zIndex = "-1";
        stage.style.opacity = "1";
        stage.style.width = width + "px";
        stage.style.height = height + "px";
        stage.innerHTML = html.trim();

        return html2canvas(stage.firstElementChild, {
            scale: 2,
            backgroundColor: "#f4f1ea",
            useCORS: true,
            logging: false,
            width: width,
            height: height,
            windowWidth: width,
        });
    }

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
                if (!blob) {
                    fallbackDownload(canvas);
                    return;
                }
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
        } catch (e) {
            fallbackDownload(canvas);
        }
    }

    function fallbackDownload(canvas) {
        try {
            var a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = "dec12-reading.png";
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
            }, 800);
        } catch (e) {}
    }

    function shareCard() {
        var mode = currentMode();
        if (!mode) {
            toast(isEn() ? "Please finish a reading first." : "請先完成卜卦");
            return;
        }

        var snap = mode === "daily" ? dailySnapshot : divinationSnapshot;
        if (!snap) {
            toast(isEn() ? "Please finish a reading first." : "請先完成卜卦");
            return;
        }

        drawQr().then(function (qr) {
            var html, w, h;

            if (mode === "daily") {
                w = 1080;
                h = 1440;
                html = dailyCardHtml(snap, qr);
            } else {
                w = 1080;
                h = 0;
                html = divinationCardHtml(snap, qr);
            }

            var stage = $("share-card-stage");

            if (h === 0) {
                stage.style.width = w + "px";
                stage.style.height = "auto";
                stage.innerHTML = html.trim();
                h = stage.scrollHeight;
            }

            renderToCanvas(html, w, h)
                .then(function (canvas) {
                    showPreview(canvas);
                })
                .catch(function () {
                    toast(isEn() ? "Could not generate card." : "圖卡生成失敗，請重試");
                });
        });
    }

    // ---------- 事件綁定 ----------

    function bind() {
        var btn = $("social-card");
        if (btn) btn.addEventListener("click", shareCard);

        var dl = $("card-preview-download");
        if (dl) {
            dl.addEventListener("click", function () {
                var img = $("card-preview-img");
                if (img && img.src && img.src.indexOf("data:image/png") === 0) {
                    var a = document.createElement("a");
                    a.href = img.src;
                    a.download = "dec12-reading.png";
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(function () {
                        document.body.removeChild(a);
                    }, 800);
                }
            });
        }

        var close = $("card-preview-close");
        if (close) {
            close.addEventListener("click", function () {
                var ov2 = $("card-preview-overlay");
                if (ov2) ov2.classList.remove("open");
            });
        }

        var ov = $("card-preview-overlay");
        if (ov) {
            ov.addEventListener("click", function (e) {
                if (e.target === this) this.classList.remove("open");
            });
        }

        watchDaily();
        watchDivination();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bind);
    } else {
        bind();
    }
})();
