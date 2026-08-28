/* ============================================================
   DEC. 12 · 起卦演算法（js/divination.js）
   依「運算與抽卦邏輯.md」規格實作（2026-08-28 校正版）
   ============================================================
   本檔集中管理「抽卦／起卦」的運算邏輯，方便日後替換或擴充。

   文件規格對照：
   - 方法A：三枚硬幣法（建議採用，本頁預設）
       每爻擲 3 枚硬幣，正面(陽)=3 分、反面(陰)=2 分，加總得 6/7/8/9：
         6 = 老陰（動爻，陰變陽）  概率 1/8
         7 = 少陽（靜爻）          概率 3/8
         8 = 少陰（靜爻）          概率 3/8
         9 = 老陽（動爻，陽變陰）  概率 1/8
   - 方法B：蓍草法（傳統原始方法，可作進階選項）
       老陰 1/16、少陽 5/16、少陰 7/16、老陽 3/16
   - 資料結構：一次抽卦結果為長度 6 的陣列（由下而上），每元素：
       { position: 1~6, value: 0或1（變化前的原始值）, moving: true/false }
   - 本卦：第1~3爻 value 由下而上組 3 位二進位 → 下卦；第4~6爻 → 上卦；
       用「上卦+下卦」查 64 卦對照表（HEX_TABLE）。
   - 之卦：moving=true 的爻 value 反轉（1變0、0變1）後重算。
   - 動爻數量 → 讀取規則（文件第五節）：
       0：讀本卦整體卦辭
       1：讀該爻爻辭
       2：讀兩個動爻中 position 較大的那一爻
       3：本卦卦辭 + 之卦卦辭（以本卦為主）
       4：讀之卦中「未變」的兩爻裡 position 較小的那一爻
       5：讀之卦中唯一「未變」的一爻
       6（全變）：只讀之卦卦辭；本卦恰為乾(1)/坤(2) 且全變，依傳統可提示「用九」「用六」

   依賴載入順序：data/hexagrams.js（提供 HEXAGRAMS / HEX_TABLE / TRI /
   SYM_OF / SYM_KEY）→ 本檔 → js/app.js。

   兩種抽卦模式：
   1) castDaily()     每日靈感抽卡：單純 64 卦隨機，不牽扯變爻。
   2) castSixLines()  進階卜卦：可選 "coins"（三枚硬幣法，預設）或
                      "yarrow"（蓍草法）；含動爻、本卦／之卦。
   ============================================================ */
(function () {
  "use strict";

  var H = window.HEXAGRAMS || [];    // 內容檔（可自行擴充）
  var TABLE = window.HEX_TABLE || {}; // 64 卦名稱查表（上卦_下卦 → [名稱]）
  var TRI = window.TRI || {};         // 八卦三爻表（1=陽 0=陰）
  var SYM_OF = window.SYM_OF || {};   // 卦名 → 卦符
  var SYM_KEY = window.SYM_KEY || {}; // 卦符 → 卦名

  /* ---------- 完整 64 卦清單（骨架） ---------- */
  function buildHexList() {
    var map = {};
    (H || []).forEach(function (hex) { if (hex && hex.key) map[hex.key] = hex; });
    var list = [];
    for (var k in TABLE) {
      var parts = String(k).split("_");
      if (parts.length !== 2) continue;
      var upK = parts[0], lowK = parts[1];
      var upSym = SYM_OF[upK] || "", lowSym = SYM_OF[lowK] || "";
      var name = (TABLE[k] && TABLE[k][0]) || (upK + lowK);
      var found = null;
      for (var i = 0; i < H.length; i++) {
        if (H[i].upper === upSym && H[i].lower === lowSym) { found = H[i]; break; }
      }
      list.push(found ? found : {
        key: upK + "_" + lowK,
        num: null,
        name: name,
        colloquial: name,
        keyword: "",
        upper: upSym,
        lower: lowSym,
        symbolLabel: name,
        core: "",
        plain: "",
        focus: {}
      });
    }
    return list;
  }

  /* ---------- 隨機工具 ---------- */
  function randInt(n) { return Math.floor(Math.random() * n); }

  /* ---------- 八卦二進位（由下而上）→ 卦名 key ---------- */
  function triToKey(bits) {
    for (var k in TRI) {
      if (TRI[k][0] === bits[0] && TRI[k][1] === bits[1] && TRI[k][2] === bits[2]) return k;
    }
    return "";
  }

  /* ---------- 卦名 key → 卦符 ---------- */
  function symOf(key) { return SYM_OF[key] || ""; }

  /* ---------- 標準 64 卦序（文件「64卦對照表」，上卦_下卦 → 卦序） ----------
     注意：此為《周易》通行本 King Wen 卦序，與 HEXAGRAMS 內容庫的自訂
     num（如 58 斷捨離中迎來新生＝火風鼎）可能不同；標準卦序用於
     演算法驗證與之卦計算，顯示層仍以內容庫 num 為準。 */
  var STANDARD_NUM = {
    "天_天": 1, "地_地": 2, "水_雷": 3, "山_水": 4, "水_天": 5, "天_水": 6, "地_水": 7, "水_地": 8,
    "風_天": 9, "天_澤": 10, "地_天": 11, "天_地": 12, "天_火": 13, "火_天": 14, "地_山": 15, "雷_地": 16,
    "澤_雷": 17, "山_風": 18, "地_澤": 19, "風_地": 20, "火_雷": 21, "山_火": 22, "山_地": 23, "地_雷": 24,
    "天_雷": 25, "山_天": 26, "山_雷": 27, "澤_風": 28, "水_水": 29, "火_火": 30, "澤_山": 31, "雷_風": 32,
    "天_山": 33, "雷_天": 34, "火_地": 35, "地_火": 36, "風_火": 37, "火_澤": 38, "水_山": 39, "雷_水": 40,
    "山_澤": 41, "風_雷": 42, "澤_天": 43, "天_風": 44, "澤_地": 45, "地_風": 46, "澤_水": 47, "水_風": 48,
    "澤_火": 49, "火_風": 50, "雷_雷": 51, "山_山": 52, "風_山": 53, "雷_澤": 54, "雷_火": 55, "火_山": 56,
    "風_風": 57, "澤_澤": 58, "風_水": 59, "水_澤": 60, "風_澤": 61, "雷_山": 62, "水_火": 63, "火_水": 64
  };

  /* ---------- 卦符、卦名 key → 卦物件（含內容庫優先） ---------- */
  function hexBySymbols(upper, lower) {
    var list = buildHexList();
    for (var i = 0; i < list.length; i++) {
      if (list[i].upper === upper && list[i].lower === lower) return list[i];
    }
    return null;
  }

  /* ============================================================
     文件第三節：由六爻（{position, value, moving} 陣列）算出「本卦」
     也供「之卦」重算使用。回傳 { number, name, upper, lower,
     upperKey, lowerKey, symbolLabel }。
     ============================================================ */
  function hexFromLines(lines) {
    // lines 為長度 6、由下而上的 {value: 0|1}（moving 不影響本卦）
    var lowBits = [lines[0].value, lines[1].value, lines[2].value];
    var upBits = [lines[3].value, lines[4].value, lines[5].value];
    var lowK = triToKey(lowBits);
    var upK = triToKey(upBits);
    var entry = TABLE[upK + "_" + lowK];
    var name = (entry && entry[0]) || (upK + lowK);
    return {
      number: STANDARD_NUM[upK + "_" + lowK] || null, // 標準卦序（King Wen）
      name: name,
      upper: symOf(upK),
      lower: symOf(lowK),
      upperKey: upK,
      lowerKey: lowK,
      symbolLabel: name
    };
  }

  /* ---------- 由 hexFromLines 結果補上內容庫物件（含 num/plain 等） ---------- */
  function enrichHex(found) {
    if (!found) return null;
    var full = hexBySymbols(found.upper, found.lower);
    return full || found;
  }

  /* ============================================================
     每日靈感抽卡：64 卦純隨機，不牽扯變爻
     ============================================================ */
  function castDaily() {
    var list = buildHexList();
    if (!list.length) {
      return {
        hex: {
          key: "ding", num: 58, name: "火風鼎", colloquial: "鼎", keyword: "革新",
          upper: "☲", lower: "☴", symbolLabel: "火風鼎",
          core: "58 斷捨離中迎來新生。這是一個「在斷捨離中迎來新生」的卦。",
          plain: "這是一個「在斷捨離中迎來新生」的卦。",
          focus: {}
        },
        changedLines: [],
        lines: null,
        changedHex: null,
        method: "daily"
      };
    }
    return {
      hex: list[randInt(list.length)],
      changedLines: [],   // 每日抽卡無動爻
      lines: null,
      changedHex: null,
      method: "daily"
    };
  }

  /* ============================================================
     進階卜卦：依文件演算法（方法A 三枚硬幣法 或 方法B 蓍草法）
     - 每爻產出 {position, value, moving}
     - 本卦：由六爻 value 查 64 卦表
     - 之卦：moving 爻 value 反轉後重算（無動爻則為 null）
     - reading：動爻數量 → 讀取規則（文件第五節）
     ============================================================ */
  var ROLL_DEFS = {
    coins:  { label: "三枚硬幣法", weights: { "6": 1, "7": 3, "8": 3, "9": 1 } },
    yarrow: { label: "蓍草法",     weights: { "6": 1, "7": 5, "8": 7, "9": 3 } }
  };

  function weightedRoll(def) {
    var w = def.weights;
    var sum = 0;
    for (var k in w) sum += w[k];
    var r = randInt(sum);
    var acc = 0;
    for (var k2 in w) {
      acc += w[k2];
      if (r < acc) return parseInt(k2, 10);
    }
    return 7;
  }

  function castSixLines(method) {
    method = method || "coins";
    var def = ROLL_DEFS[method] || ROLL_DEFS.coins;
    var lines = [];      // 由下而上：lines[0] = 初爻 … lines[5] = 上爻
    var changed = [];
    for (var i = 0; i < 6; i++) {
      var roll = weightedRoll(def);            // 6/7/8/9
      var value = (roll === 7 || roll === 9) ? 1 : 0; // 老陰/少陰=0；少陽/老陽=1
      var moving = (roll === 6 || roll === 9);        // 老陰/老陽為動爻
      lines.push({ position: i + 1, value: value, moving: moving });
      if (moving) changed.push(i + 1);
    }

    // 本卦
    var ben = hexFromLines(lines);
    var hex = enrichHex(ben);

    // 之卦：動爻反轉後重算
    var changedHexObj = null;
    if (changed.length) {
      var flipped = lines.map(function (l) {
        return { position: l.position, value: l.moving ? (l.value === 1 ? 0 : 1) : l.value, moving: l.moving };
      });
      var zhi = hexFromLines(flipped);
      changedHexObj = {
        sym: zhi.upper + " " + zhi.lower,
        label: zhi.name,
        number: null
      };
      var zhiFull = enrichHex(zhi);
      if (zhiFull) {
        changedHexObj.label = zhiFull.name || zhi.name;
        if (zhiFull.num) changedHexObj.number = zhiFull.num;
      }
    }

    if (!hex) {
      hex = {
        key: ben.upperKey + "_" + ben.lowerKey, num: null, name: ben.name,
        colloquial: "", keyword: "", upper: ben.upper, lower: ben.lower,
        symbolLabel: ben.name, core: "", plain: "", focus: {}
      };
    }

    return {
      hex: hex,
      lines: lines,          // [{position, value, moving}]（文件規格結構）
      changedLines: changed, // 動爻位置（1-6，由下而上）
      changedHex: changedHexObj,
      reading: readingRule(changed), // 動爻數量 → 讀取規則（0~6）
      method: method === "yarrow" ? "six-lines-yarrow" : "six-lines"
    };
  }

  /* ============================================================
     文件第五節：動爻數量 → 讀取規則
     回傳規則編號 0~6，並提供人類可讀標籤。
     ============================================================ */
  function readingRule(changedLines) {
    var n = (changedLines || []).length;
    return n >= 6 ? 6 : n; // 0~6
  }

  var READING_LABELS = {
    0: "讀本卦整體卦辭",
    1: "讀該動爻的爻辭",
    2: "讀兩個動爻中爻位較大者的爻辭",
    3: "本卦卦辭＋之卦卦辭（以本卦為主）",
    4: "讀之卦中未變兩爻裡爻位較小者的爻辭",
    5: "讀之卦中唯一未變一爻的爻辭",
    6: "讀之卦卦辭（乾/坤全變可提示用九/用六）"
  };
  function readingLabel(changedLines) {
    var n = readingRule(changedLines);
    return READING_LABELS[n] || "";
  }

  /* ---------- 相容包裝：由結果物件算變卦（給既有顯示層使用） ---------- */
  function computeChanged(res) {
    if (!res) return null;
    if (!res.changedLines || !res.changedLines.length) return null;
    if (res.changedHex) return res.changedHex;
    var h = res.hex;
    var up = (TRI[SYM_KEY[h.upper]] || []).slice();
    var low = (TRI[SYM_KEY[h.lower]] || []).slice();
    var line = res.changedLines[0];
    var target = line <= 3 ? low : up;
    var idx = line <= 3 ? line - 1 : line - 4;
    target[idx] = target[idx] === 1 ? 0 : 1;
    var upK = triToKey(up), lowK = triToKey(low);
    var entry = TABLE[upK + "_" + lowK];
    return {
      sym: SYM_OF[upK] + " " + SYM_OF[lowK],
      label: entry ? entry[0] : "（變）"
    };
  }

  /* ---------- 內容是否齊全（供顯示層決定是否顯示「內容整理中」） ---------- */
  function hasContent(hex) {
    return !!(hex && hex.plain && hex.plain.length > 0);
  }

  /* ---------- 匯出 ---------- */
  window.Div = {
    buildHexList: buildHexList,
    castDaily: castDaily,
    castSixLines: castSixLines,
    computeChanged: computeChanged,
    hexBySymbols: hexBySymbols,
    hexFromLines: hexFromLines,
    hasContent: hasContent,
    readingRule: readingRule,
    readingLabel: readingLabel,
    ROLL_DEFS: ROLL_DEFS
  };
})();
