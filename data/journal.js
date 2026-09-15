(function () {
  "use strict";

  var JOURNAL = {
    version: "1.0",

    zh: {
      tabs: {
        card: "抽卡收藏",
        divination: "卜卦收藏"
      },

      stats: {
        summary: "卜卦 {n} 次 · 待應驗 {p} 次"
      },

      empty: {
        card: "還沒有收藏。去抽一張卡吧。",
        divination: "還沒有收藏。問一個問題，開始第一次卜卦。"
      },

      catOther: "其他",

      catAll: "全部",

      catEmptyOne: "還沒有「{cat}」的收藏。問一個這方面的問題，開始第一次卜卦。",

      fallback: {
        line: "這一卦還沒有寫下內容。"
      }
    },

    en: {
      tabs: {
        card: "Card Saves",
        divination: "Reading Saves"
      },
      stats: {
        summary: "{n} readings · {p} waiting to review"
      },
      empty: {
        card: "No saves yet. Draw a card to begin.",
        divination: "No saves yet. Ask a question and start your first reading."
      },
      catOther: "Other",
      catAll: "All",
      catEmptyOne: "Nothing saved for {cat} yet. Ask a question about it to start your first reading.",

      fallback: {
        line: "Nothing written for this reading yet."
      }
    }
  };

  window.JOURNAL_I18N = function (lang) {
    if (lang === "en" && JOURNAL.en) return JOURNAL.en;
    return JOURNAL.zh;
  };

  window.JOURNAL = JOURNAL;
})();
