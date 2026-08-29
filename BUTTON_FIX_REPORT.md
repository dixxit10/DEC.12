# divination-gallery_v3 按鈕/圖示巨大化 修復報告

## 問題現象（3 張截圖）
使用者回報「部分按鈕會巨大化」，3 張截圖顯示：

| 截圖 | 畫面 | 巨大化元素 |
|------|------|-----------|
| s1 | 首頁（個人中心） | 「收藏相簿」「本命守護牌」橢圓按鈕內的獎盃(trophy)、盾牌(shield)圖示異常巨大 |
| s2 | 設定頁 | 「寄信提醒」的信封(icon-email)、「修改暱稱」旁圖示巨大 |
| s3 | 日記/卜卦結果頁 | 「驗證」放大鏡(icon-search)、「未應驗」X 圓圈(icon-close)巨大 |

共同特徵：**圖示（PNG）被放大數十倍，文字被擠到邊緣，比例嚴重失調**。

## 根因診斷
所有巨大化元素都是 `<img class="glyph">` 的 PNG 圖示。

CSS 中唯一的全域規則：
```css
img.glyph{object-fit:contain;vertical-align:middle}
```
**沒有設定 width/height**，因此 PNG 以「原始像素尺寸」顯示（這些圖示原始尺寸很大）。

而這些圖示所在的容器（`.badge`、`.field-label`、`.s-label`、`.verify-btn`、`.note-save-btn`、`.guardian-back-txt`、`.guardian-locked-note`、`.forgot-close`）**都沒有各自的 img 尺寸規則**，所以圖示全部巨大化。

對照：其他容器（`.icon-btn img`、`.coin img`、`.seal img`、`.mood-btn img` 等）都有明確的 width/height，所以那些圖示正常。

## 修正內容（css/style.css）
在 `img.glyph` 規則後追加：

```css
/* 全域預設：所有 glyph 圖示預設 18px（:where 使 specificity=0，不覆蓋任何專屬規則） */
:where(img.glyph){width:18px;height:18px}

/* 各容器微調（小標籤用更小尺寸） */
.badge img.glyph{width:14px;height:14px}
.field-label img.glyph{width:16px;height:16px}
.s-label img.glyph{width:16px;height:16px}
.verify-btn img.glyph{width:16px;height:16px}
.note-save-btn img.glyph{width:16px;height:16px}
.guardian-back-txt img.glyph{width:16px;height:16px}
.guardian-locked-note img.glyph{width:14px;height:14px}
.forgot-close img.glyph{width:16px;height:16px}
```

### 為何用 `:where()`？
`:where()` 的 specificity 為 **0**，因此它只作為「預設值」，**不會覆蓋**任何已有的專屬尺寸規則（如 `.icon-btn img{width:20px}`、`.coin img{width:30px}`、`.seal img{width:56px}` 等）。只有那些「原本就沒有尺寸規則」的 glyph 圖示（即巨大化的那些）會被套用 18px 預設，其餘保持原設計。

## 驗證
- 瀏覽器實際渲染首頁：所有圖示（選單、標題、卡片）均顯示正常小尺寸，無巨大化 ✅
- 已確認所有專屬容器規則（icon-btn/coin/seal/mood-btn/p1-sec-badge/draw-seal/avatar/pair/ic 等 30+ 條）未被覆蓋 ✅

## 修改檔案
- `css/style.css`（唯一修改檔案，追加上述規則）

## 交付
- 修正後完整專案 zip：`divination-gallery_v3_fixed2.zip`
- 修正後 style.css 永久網址