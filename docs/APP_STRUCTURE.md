# DEC.12 ・ app.js 結構與維護指南（v38）

> 本文件是 `js/app.js`（minified 壓縮檔）的「地圖」。任何修改前**先讀這裡**。
> 對應的導覽註解已寫在 `js/app.js` 最頂部（`/* ==== DEC.12 ・ app.js 檔案導覽 ==== */`）。

---

## 0. 檔案基本資料

| 項目 | 數值 |
|------|------|
| 檔案 | `js/app.js` |
| 型態 | minified（壓縮）單行檔（由某份原始碼壓縮而來，非手寫） |
| 大小 | 約 68 KB（含註解後約 64 KB） |
| 函式數 | 115 個（`function` 宣告） |
| 事件綁定 | 約 73 個 `addEventListener` |
| 語言字典 | `I18N` 約佔檔案 22%（中英兩套 UI 文案） |
| 包裝 | 單一 IIFE `(function(){"use strict"; ... })()` |
| 載入順序 | firebase.js → hexagrams.js → hexagrams.en.js → html2canvas → qrcode → share-card.js → **app.js** |

---

## 1. 九大區塊對應表

### [A] 易經核心 — 64 卦資料與卦辭解析
| 代表函式 | 功能 |
|---------|------|
| `hexFromTitle` | 由卦名標題取得卦象物件 |
| `HEX_TABLE` | 64 卦查詢表（如 `天_天:["乾為天",1]`） |
| `changedHex` | 計算變爻後的之卦 |
| `zhiGuaObject` | 之卦物件 |
| `resolveInterpretation` | 解析 386 卦爻辭（含 64 卦 × 6 爻 + 用九用六） |
| `readingLineText / readingFocusText / readingGuideText` | 卦辭/爻辭/指引文字產生器 |

**修改守則**：這是純資料＋純函式區，**不碰 DOM、不碰 localStorage**。改卦辭內容只動 `HEX_TABLE` 與 `resolveInterpretation` 內的文字，勿動解析邏輯結構。

### [B] 語言系統 — I18N 中英字典與切換
| 代表函式 | 功能 |
|---------|------|
| `I18N` | 中英字典（`{zh:{...}, en:{...}}`，佔檔案約 22%） |
| `t()` / `pick()` | 依目前語言取值 |
| `lang` / `detectLang` | 目前語言／偵測（localStorage `xingua_lang`） |
| `setLang` / `toggleLang` | 切換語言 |
| `applyLangTexts` / `syncLangUI` / `syncLangBtns` | 套用語言到 UI |
| `initLang` | 初始化語言 |

**修改守則**：**所有新文案必須加進 `I18N`（中英都要），禁止 hardcode**。改字典時搜 `var I18N=` 定位，`zh` 與 `en` 兩邊都要同步加同 key。

### [C] 畫面切換 — SPA screen 導航
| 代表函式 | 功能 |
|---------|------|
| `go(name)` | 切換 `.screen`（顯示/隱藏），核心導航 |
| `resetForm` | 重置卜卦表單 |
| `setupChips` | 情境 chips（愛情/事業/財運…） |
| `updateNav` / `updateMenuAuth` | 導覽列與登入狀態 |
| `doLogout` / `navLoginClick` | 登出與登入跳轉 |

**修改守則**：新增頁面 = 在 index.html 加 `<section class="screen" id="xxx">` + 在 `go()` 白名單/選單註冊。`go()` 是單一入口，勿在頁面內自己 display 控制。

### [D] 每日抽卡 — 每日一卦 + 翻牌
| 代表函式 | 功能 |
|---------|------|
| `dailyDraw` | 抽每日卡（依日期 seed 取卦，同日同卦） |

**修改守則**：抽卡邏輯與 `unlockElementsFromHex`（收藏解鎖）連動，改動前先讀 `[H]`。日期 seed 邏輯勿動（同日不同結果會破壞「每日一卡」承諾）。

### [E] 進階卜卦 — 六爻起卦 + 結果輪播
| 代表函式 | 功能 |
|---------|------|
| `tossOneLine` / `castSixLines` | 擲爻（亂數 6/7/8/9） |
| `pickResult` / `triToName` | 決定本卦/之卦 |
| `shuffle` | 洗牌 |
| `startDivination` / `stopDivination` | 起卦動畫流程 |
| `renderCarousel` / `updateDots` | 結果頁輪播（爻象、卦名、指引、日記儲存） |
| `updateSaveBtn` / `saveFlow` | 儲存流程 |

**修改守則**：結果資料存在 `state.result`（由 `[A]` 產生）。新增結果 UI 元件時讀 `state.result`，勿重算卦。`renderCarousel` 是最常改的函式之一（v35 分享圖卡就是從它的 DOM 讀資料）。

### [F] 帳號系統 — 登入/註冊/找回/設定
| 代表函式 | 功能 |
|---------|------|
| `setAuthMode` / `authFail` | 登入/註冊分頁與錯誤 |
| `isValidEmail` / `isStrongPassword` | 驗證 |
| `doLogin` / `doLogout` | 登入/登出（含 `migrateGuestCollection` 訪客收藏遷移） |
| `openForgot` / `closeForgot` | 密碼找回 |
| `showLoading` | 載入遮罩 |
| `settingsKey` / `getSettings` / `saveSettings` / `applySettingsUI` | 設定（含寄信提醒） |
| `updateSettingAccount` | 設定頁帳號區 |

**修改守則**：登入成功後**必須**呼叫 `mergeDraftsOnLogin`＋`migrateGuestCollection`（訪客資料遷移，v35 修過一次 bug）。改登入流程先看 `doLogin` 結尾的遷移區塊，勿移除。

### [G] 日記系統 — 隨記 + 月曆 + 詳情
| 代表函式 | 功能 |
|---------|------|
| `seedDiary` / `loadDiary` / `saveDiary` | 日記 CRUD（localStorage `xingua_diary_` + uid） |
| `recordFromResult` / `commitRecord` | 從卜卦結果建日記 |
| `mergeDraftsOnLogin` | 登入合併訪客草稿 |
| `renderCalendar` / `scrollCalToCurrent` / `addMonths` / `updateCalTitle` | 月曆 |
| `openDetail` / `renderDetailCarousel` / `saveDetailField` | 日記詳情編輯 |

**修改守則**：日記 key 依 uid 分離（`diaryKey()`），**改 key 格式 = 所有用戶日記遺失**，禁止。新增欄位要同時改 `saveDetailField` 與詳情渲染。

### [H] 收藏守護 — 元素收藏 + 守護牌
| 代表函式 | 功能 |
|---------|------|
| `collectKey` / `getCollectedElements` / `saveCollectedElements` | 收藏 CRUD（`xingua_collect_elements_` + uid） |
| `unlockElementsFromHex` | 依卦象解鎖元素收藏 |
| `migrateGuestCollection` | 訪客收藏遷移至帳號（v35 bug 修復處） |
| `renderCollect` | 收藏相簿渲染 |
| `guardianKey` / `guardianHexKey` / `guardianOpened` / `markGuardianOpened` | 守護牌開啟狀態 |
| `renderGuardianBack` / `openGuardian` | 守護牌翻牌 |
| `openDetail`（詳情） | 收藏/日記共用詳情 |

**修改守則**：收藏 key 依 uid 分離；**登入遷移邏輯（`migrateGuestCollection`）是 v35 的修復成果，勿動**。守護牌與收藏共用狀態，改動前確認兩邊。

### [I] 分享 — 文字/連結/App/email
| 代表函式 | 功能 |
|---------|------|
| `shareText` | 產生分享文字（卦名＋指引） |
| `shareUrl` | 分享網址 |
| `openShare` | 開啟分享面板 |
| `shareViaApp` | 分享到 LINE/FB/IG/X（＋email） |

**修改守則**：圖卡分享（html2canvas）在獨立的 `js/share-card.js`，不要搬進來。`shareText` 的輸出會被 Web Share API 使用，格式調整時兩處都要測。

---

## 2. 檔案實體順序（minified 檔內的出現次序）

```
頂部導覽註解（v38 新增）
[A] 易經核心     ← hexFromTitle / HEX_TABLE / changedHex / zhiGuaObject / resolveInterpretation / reading*
[C] 畫面切換     ← go / resetForm / setupChips / updateNav / updateMenuAuth / doLogout / navLoginClick
[D] 每日抽卡     ← dailyDraw
[E] 進階卜卦     ← tossOneLine / castSixLines / pickResult / triToName / shuffle / startDivination / stopDivination / renderCarousel / updateDots / updateSaveBtn / safeRenderDiary / saveFlow
[F] 帳號系統     ← setAuthMode / authFail / isValidEmail / isStrongPassword / doLogin / openForgot / closeForgot / showLoading / settings* / updateSettingAccount
[G] 日記系統     ← seedDiary / loadDiary / saveDiary / recordFromResult / commitRecord / mergeDraftsOnLogin / renderCalendar / scrollCalToCurrent / addMonths / updateCalTitle
[H] 收藏守護     ← collectKey / getCollectedElements / saveCollectedElements / unlockElementsFromHex / migrateGuestCollection / renderCollect / guardian* / renderGuardianBack / openGuardian / openDetail
[I] 分享         ← shareText / shareUrl / openShare / shareViaApp
[B] 語言系統     ← I18N / t / pick / lang / detectLang / setLang / syncLangBtns / applyLangTexts / initLang / syncLangUI / toggleLang
（檔案尾）啟動區   ← onBoot / boot / initVisitCounter / renderVisits
```

> 注意：實體順序是「壓縮器」決定的，不是人為設計。字母代號 [A]–[I] 僅供導覽，不代表執行順序。
> 真正執行起點是檔尾的 `boot()`（DOMContentLoaded 後啟動）。

---

## 3. 未來新增功能的維護守則（7 條）

```
1. 先讀 app.js 頂部導覽，確認新功能屬於哪一區（A–I）
2. 用 grep 搜該區的關鍵函式，找到插入點
3. 只改該區：新增函式命名一律用「區塊前綴」
   （如每日抽卡 → drawXxx；日記 → diaryXxx；卜卦 → divXxx）
4. 新文案一律加進 I18N 字典（中英都要），不 hardcode
5. 改完執行 node --check + 手機實測該功能
6. 每完成一個功能，更新 docs/APP_STRUCTURE.md
7. 永不直接改壓縮行——先 beautify 定位，再改，再壓縮
```

---

## 4. 特別提醒：v37 bug 的教訓

**事件**：v36 → v37 時，index.html 的結果頁（p2c）區塊中有一個
`<div style="display:flex; gap:8px">` 開啟後沒有閉合，多出一個 `</div>`。

**後果**：瀏覽器 HTML 解析器遇到多餘 `</div>` 會**隱式提早關閉 `#shell`（.phone-shell 容器）**，
導致之後 7 個 screen（關於、奶茶金、日記、明細、設定、登入、loading）脫離 390px 手機外殼，
在手機上變成全寬桌面模式（981px），超出手機螢幕。

**教訓**：
- 在壓縮/單行 HTML 與 JS 中，**一個字元（如多一個 `</div>`）極難用肉眼發現**——必須用工具驗證：
  ```bash
  # 驗證 HTML 標籤配平
  grep -o "</div>" index.html | wc -l   # 必須等於 <div 的數量
  grep -o "</section>" index.html | wc -l  # 等於 <section 的數量
  # 驗證 JS 語法
  node --check js/app.js
  ```
- 修改後務必**用手機實測所有 screen**，不能只測首頁（bug 往往在「非首頁」浮現）。
- 所有 DOM 修改後，確認每個 `<section class="screen">` 的 `parentElement` 都是 `#shell`。

---

## 5. 常用驗證指令（每次修改後執行）

```bash
# JS 語法
node --check js/app.js
node --check js/share-card.js

# HTML 標籤配平（v37 bug 檢查）
node -e '
const fs=require("fs");const s=fs.readFileSync("index.html","utf8");
const c=(r)=>(s.match(r)||[]).length;
console.log("div:",c(/<div\b/g),"vs",c(/<\/div>/g));
console.log("section:",c(/<section\b/g),"vs",c(/<\/section>/g));
'

# 搜尋函式位置
grep -o "function dailyDraw" js/app.js   # 或用 node -e 印出 idx
```

---

## 6. 未來方案 B（模組化拆分）的藍圖

當你準備好做模組化（建議等找到未壓縮原始碼後再做）：

```
js/
├── app.js            ← 壓縮版（正式部署用，不動）
└── src/              ← 原始碼倉庫（人看的，app.readable.js 為起點）
    ├── core.js       ← [A] 易經核心
    ├── i18n.js       ← [B] 語言字典 + t() + 切換
    ├── ui.js         ← [C] go()、menu、resetForm
    ├── daily.js      ← [D] 每日抽卡
    ├── divination.js ← [E] 進階卜卦 + 結果輪播
    ├── auth.js       ← [F] 登入/註冊/找回/設定
    ├── diary.js      ← [G] 日記 + 月曆 + 詳情
    ├── collect.js    ← [H] 收藏 + 守護牌
    └── share.js      ← [I] 分享 + email
```

載入方式：多個 `<script>` 依序載入（`core → i18n → ui → daily → divination → auth → diary → collect → share`），
每個檔仍用 IIFE 或全域宣告保持變數共享（**不要**直接用 ES Module，會改變變數可見性、風險高）。
每拆一個檔就做一次完整功能測試。
