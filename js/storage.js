(function () {
  "use strict";

  function isCard(rec) {
    if (!rec) return false;
    if (rec.type) return rec.type === "card";
    if (rec.method) return rec.method === "daily";
    var c = rec.cat || "";
    return c === "每日靈感" || c === "daily" || c === "card";
  }

  function isDivination(rec) {
    return !!rec && !isCard(rec);
  }

  function isPending(rec) {
    return isDivination(rec) && !rec.verify;
  }

  function tsOf(rec) {
    if (!rec) return 0;
    return rec.ts || rec.time || rec.createdAt || 0;
  }

  function byNewestFirst(a, b) {
    return tsOf(b) - tsOf(a);
  }

  function sortNewest(list) {
    return (Array.isArray(list) ? list.slice() : []).sort(byNewestFirst);
  }

  function group(records) {
    var list = Array.isArray(records) ? records : [],
        card = [],
        divination = [],
        i,
        r;
    for (i = 0; i < list.length; i++) {
      r = list[i];
      if (!r) continue;
      if (isCard(r)) card.push(r);
      else divination.push(r);
    }
    return {
      card: sortNewest(card),
      divination: sortNewest(divination),
      all: sortNewest(list)
    };
  }

  function stats(records) {
    var list = Array.isArray(records) ? records : [],
        n = 0,
        p = 0,
        i;
    for (i = 0; i < list.length; i++) {
      if (isDivination(list[i])) {
        n++;
        if (!list[i].verify) p++;
      }
    }
    return { count: n, pending: p };
  }

  function oneLine(rec) {
    if (!rec) return "";
    var note = (rec.note || "").replace(/\s+$/, "");
    if (note) return note;
    var h = rec.hex || null;
    if (h) {
      if (h.symbolLabel) return h.symbolLabel;
      if (h.core) return h.core;
    }
    return rec.title || "";
  }

  function clip(text, max) {
    var s = String(text == null ? "" : text);
    max = max || 42;
    return s.length > max ? s.slice(0, max) + "…" : s;
  }

  function hasAny(records) {
    var list = Array.isArray(records) ? records : [],
        i;
    for (i = 0; i < list.length; i++) {
      if (list[i]) return true;
    }
    return false;
  }

  var CAT_ORDER = ["love", "career", "health", "finances", "relationships"],
      CAT_ALIAS = {
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
      };

  var CAT_LABELS = {
        love: "感情",
        career: "事業",
        health: "健康",
        finances: "財運",
        relationships: "人際",
        other: "其他"
      },
      CAT_EMOJI = {
        love: "💗",
        career: "💼",
        health: "🌿",
        finances: "💰",
        relationships: "🤝",
        other: "✨"
      };

  function catEmoji(key) {
    return CAT_EMOJI[key] || CAT_EMOJI.other;
  }

  function allCats() {
    var out = [],
        i;
    for (i = 0; i < CAT_ORDER.length; i++) out.push(CAT_ORDER[i]);
    return out;
  }

  function catKey(rec) {
    if (!rec) return "other";
    return CAT_ALIAS[rec.cat || rec.category || ""] || "other";
  }

  function groupByCat(records) {
    var list = sortNewest(records),
        buckets = {},
        out = [],
        i,
        j,
        k,
        rest;
    for (i = 0; i < list.length; i++) {
      if (!list[i]) continue;
      k = catKey(list[i]);
      if (!buckets[k]) buckets[k] = [];
      buckets[k].push(list[i]);
    }
    for (j = 0; j < CAT_ORDER.length; j++) {
      k = CAT_ORDER[j];
      if (buckets[k]) {
        out.push({ key: k, records: buckets[k] });
        delete buckets[k];
      }
    }
    rest = [];
    for (k in buckets) {
      if (buckets.hasOwnProperty(k)) rest = rest.concat(buckets[k]);
    }
    if (rest.length) out.push({ key: "other", records: sortNewest(rest) });
    return out;
  }

  window.JournalStore = {
    isCard: isCard,
    isDivination: isDivination,
    isPending: isPending,
    tsOf: tsOf,
    sortNewest: sortNewest,
    group: group,
    stats: stats,
    oneLine: oneLine,
    clip: clip,
    hasAny: hasAny,
    catKey: catKey,
    groupByCat: groupByCat,
    catEmoji: catEmoji,
    allCats: allCats,
    catLabel: function (key) {
      return CAT_LABELS[key] || CAT_LABELS.other;
    }
  };
})();
