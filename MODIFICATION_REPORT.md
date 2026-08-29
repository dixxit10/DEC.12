# divination-gallery_v3 — 6 項 UI/功能修改報告

版本：`divination-gallery_v3_fixed3`（基於 fixed2）
日期：2026-08-28

---

## 修改總覽

| # | 需求 | 修改檔案 | 修改方式 |
|---|------|---------|---------|
| 1 | 守護卡 Overlay 固定寬度、移除水平捲動條 | `css/style.css` | 修改 `.guardian-box` 規則 |
| 2 | 每日抽卡下方移除「檢查與觀察、情緒、驗證」欄位 | `css/style.css` | 新增 `#detail-fields{display:none}` |
| 3 | 重新卜卦進入新表單頁且有預設提問欄位 | `index.html` | 新增 `#divine-question` 輸入框 |
| 4 | 表單選項類別移除「其他／不確定」 | `index.html` | 刪除該 chip 按鈕 |
| 5 | 密碼與確認密碼不符時提示「不符合」 | `js/app.js` | 修改 `doLogin()` 錯誤訊息 |
| 6 | 註冊頁兩按鈕間留 space | `css/style.css` | 新增 `#btn-later{margin-top:14px}` |

---

## 各項詳細說明

### 修改 1：守護卡 Overlay 固定寬度、移除水平捲動條
**檔案**：`css/style.css`
**修改前**：
```css
.overlay.modal-mode .guardian-box{max-height:88vh;overflow-y:auto;-webkit-overflow-scrolling:touch}
```
**修改後**：
```css
.overlay.modal-mode .guardian-box{max-height:88vh;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;width:88%;max-width:340px;box-sizing:border-box}
```
**原因**：截圖 s1 顯示「本命守護牌」彈窗底部出現水平捲動條。`.guardian-box` 未設定寬度，內容（1:1 卡片 + 光暈）超出容器造成水平溢出。加入 `overflow-x:hidden` 隱藏水平捲動，並以 `width:88%;max-width:340px;box-sizing:border-box` 固定寬度，與其他 modal 一致。

### 修改 2：每日抽卡下方移除「檢查與觀察、情緒、驗證」欄位
**檔案**：`css/style.css`
**新增**：
```css
#detail-fields{display:none!important}
```
**原因**：截圖 s2 顯示每日抽卡結果下方有「寫下觀察與感受、表情符號、驗證」三個欄位。需求為僅移除這三個欄位、保留其他。`#detail-fields` 是這三個欄位的容器（index.html:306），以 `display:none` 隱藏即可，不需動 HTML/JS，且不影響進階卜卦結果頁的其他內容。

### 修改 3：重新卜卦進入新表單頁且有預設提問欄位
**檔案**：`index.html`（`#screen-p2a` 進階卜卦表單）
**新增**（在「問題類別」與「預測有效長度」之間）：
```html
<div class="field">
  <label>想問的問題（選填）</label>
  <input type="text" id="divine-question" placeholder="例如：這段感情是否適合我？" maxlength="60">
</div>
```
**原因**：截圖 s4 顯示進階卜卦表單只有類別與長度，沒有提問欄位。需求是「重新卜卦」進入新表單頁且有預設提問空格。`btn-redo-p2c` 已會 `go("p2a")` 回到此表單，新增此欄位即提供預設提問輸入框（placeholder 為預設提示文字）。

### 修改 4：表單選項類別移除「其他／不確定」
**檔案**：`index.html`（`#cat-chips`）
**修改前**：
```html
<button type="button" class="chip" data-cat="人際">人際</button>
<button type="button" class="chip" data-cat="其他／不確定">其他／不確定</button>
```
**修改後**：
```html
<button type="button" class="chip" data-cat="人際">人際</button>
```
**原因**：截圖 s4 顯示類別選項含「其他／不確定」。需求移除該選項，故刪除該 chip 按鈕。剩餘 5 個類別（感情/事業/健康/財運/人際）。

### 修改 5：密碼與確認密碼不符時提示「不符合」
**檔案**：`js/app.js`（`doLogin()` 註冊分支）
**修改前**：
```js
if(!pass2||pass!==pass2){authFail("兩次輸入的密碼不一致");return}
```
**修改後**：
```js
if(!pass2||pass!==pass2){authFail("密碼與確認密碼不符合");return}
```
**原因**：需求明確要求提示「不符合」。將錯誤訊息改為「密碼與確認密碼不符合」。

### 修改 6：註冊頁兩按鈕留 space
**檔案**：`css/style.css`
**新增**：
```css
#btn-later{margin-top:14px}
```
**原因**：截圖 s5 顯示「註冊並登入」與「稍後再說」兩按鈕連在一起。`#btn-later` 是「稍後再說」按鈕，加 `margin-top:14px` 與上方「註冊並登入」按鈕留出間距。

---

## 驗證結果
- `node --check js/app.js` ✅ 通過
- `node --check js/firebase.js` ✅ 通過
- 6 項修改全部 grep 驗證通過（見上方各項）
- 「其他／不確定」在 index.html 中已完全移除（grep 計數 = 0）