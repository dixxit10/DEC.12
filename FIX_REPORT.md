# divination-gallery_v3 日記功能 / 日曆顯示 修復報告

## 一、檢查結果

**網址**：`https://teamily.ai/link/xZd25hMs5ho`
- ✅ 可正常開啟（HTTP 200）
- ✅ 對應專案：**divination-gallery_v3**（易經卜卦 — 藝術 Gallery v29）
- 實際內容網址：`https://static.teamily.ai/sites/96e8b0f4-af25-46f8-84e7-9022a7f7c4c3/webpages/divination-gallery_v3/index.html`
- 頁面以 iframe 內嵌於 Teamily AI 分享頁（sandbox 含 `allow-same-origin allow-scripts`，localStorage 可用）

## 二、問題根因（已用瀏覽器實測確認）

日記功能與日曆的 **DOM、JS、CSS 全部存在且邏輯正確**，真正的問題是：

### 根因：`.cal-scroll` 在 flex 容器中被壓縮到 0 高度

日記頁面（`screen-diary`）的 `.main` 是 `display:flex; flex-direction:column`，而日曆容器 `.cal-scroll` 是 flex item，且帶 `overflow-y:auto`。

- 依 CSS flexbox 規則，`overflow` 非 `visible` 的 flex item 其 `min-height:auto` 會解析為 **0**
- 加上預設 `flex-shrink:1`，當內容（dash-hero + dash-stats + cal-nav）超過可用高度時，`.cal-scroll` 被壓縮到 **0 高度**

**實測數據（瀏覽器 eval）**：
| 屬性 | 修正前 | 修正後 |
|------|--------|--------|
| `#cal-scroll` clientHeight | **0** | **520** |
| `#cal-scroll` offsetHeight | **0** | **520** |
| `#cal-scroll` scrollHeight | 4718（14 個月已渲染） | 4718 |
| `#cal-months` children | 14 | 14 |

→ 日曆 DOM 有渲染（14 個月、日期格子都在），但**父容器高度為 0，被裁切看不見**。

### 2. 次要：日記頁面有登入牆
未登入時點「我的隨記」會先彈登入視窗（`isLoggedIn()` 檢查），登入後才顯示日記與日曆。這是**設計行為**，非 bug。登入後日曆即可正常顯示。

## 三、修改點

**檔案**：`css/style.css`
**位置**：`.cal-scroll` 規則

**修正前**：
```css
.cal-scroll{overflow-y:auto;max-height:520px;scrollbar-width:none;-webkit-overflow-scrolling:touch;margin-bottom:14px;position:relative}
```

**修正後**：
```css
.cal-scroll{overflow-y:auto;max-height:520px;scrollbar-width:none;-webkit-overflow-scrolling:touch;margin-bottom:14px;position:relative;flex-shrink:0;min-height:0}
```

**新增**：`flex-shrink:0`（禁止被 flex 壓縮）+ `min-height:0`（允許正確計算高度）

## 四、修正前後差異

| 項目 | 修正前 | 修正後 |
|------|--------|--------|
| 日曆可見高度 | 0（被裁切） | 520px（正常顯示） |
| 14 個月日曆 | 有渲染但看不見 | 完整可見、可滾動 |
| 日期格子點擊 | 無法操作 | 可點擊查看該卦內容 |
| 卜卦次數/待對照統計 | 有 DOM 但被擠壓 | 正常顯示 |
| 收藏相簿/本命守護牌 | 正常 | 正常 |

## 五、驗證

- `node --check js/app.js` ✅ 語法正確
- `node --check js/firebase.js` ✅ 語法正確
- 瀏覽器實測：注入 `flex-shrink:0` 後 `clientHeight` 由 0 → 520 ✅
- 登入後日記頁完整顯示 14 個月日曆、統計、收藏相簿 ✅

## 六、檔案清單（修正版專案）

```
divination-gallery_v3_fixed/
├── index.html          （未改動）
├── css/style.css       ★ 已修正（.cal-scroll 加 flex-shrink:0）
├── js/app.js           （未改動，邏輯正確）
├── js/firebase.js      （未改動）
├── data/hexagrams.js   （未改動）
└── img/                （29 張圖片，完整）
```