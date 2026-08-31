/* ============================================================
   DEC.12 卜卦 App v27 — Firebase 雲端資料層 (js/firebase.js)
   ------------------------------------------------------------
   功能：
   1. 若你在 firebase.js 設定 FIREBASE_CONFIG（Firebase 專案設定），
      會員帳號、日記、收藏、設定會同步到 Firebase Firestore 雲端資料庫，
      且登入/註冊/重設密碼使用 Firebase Auth。
   2. 若未設定（null，或 Firebase 連線失敗），自動 fallback 到 localStorage，
      與原本單機版行為一致。

   如何啟用 Firebase（詳細步驟見 README）：
   1. 到 https://console.firebase.google.com 建立專案
   2. 啟用 Authentication → Email/密碼
   3. 建立 Firestore 資料庫（測試模式）
   4. 將專案設定中的 config 物件填入下方 FIREBASE_CONFIG
   5. 重新部署即可。用戶註冊/登入/資料全部雲端同步。

   ※ 若 FIREBASE_CONFIG 留空（null），程式完全以 localStorage 運作，
      Firebase SDK 不會被載入，不影響任何功能。

   介面（與 localStorage 版本一致）：
     FB.ready               → Promise<boolean> 是否 Firebase 可用
     FB.loadUsers()         → Promise<Object>  會員表 {email: {password,name,...}}
     FB.saveUsers(u)        → Promise<void>    儲存會員表
     FB.loadDiary(uid)      → Promise<Array>   該會員日記
     FB.saveDiary(uid,a)    → Promise<void>    儲存該會員日記
     FB.loadSettings(uid)   → Promise<Object>  該會員設定
     FB.saveSettings(uid,s) → Promise<void>    儲存該會員設定
     FB.loadCollect(uid)    → Promise<Object>  該會員收藏
     FB.saveCollect(uid,c)  → Promise<void>    儲存該會員收藏
     FB.resetPassword(email)→ Promise<Object>  寄送重設密碼信 {ok, error}
     FB.signUp(email,pass)  → Promise<Object>  Firebase Auth 註冊 {ok, error}
     FB.signIn(email,pass)  → Promise<Object>  Firebase Auth 登入 {ok, error}
   ============================================================ */

var FIREBASE_CONFIG = null; // ← 填入你的 Firebase config 即可啟用雲端

var FB = (function(){
  var db = null, auth = null, enabled = false, initPromise = null;

  function init(){
    if(initPromise) return initPromise;
    initPromise = new Promise(function(resolve){
      if(!FIREBASE_CONFIG){
        resolve(false); return;
      }
      try{
        if(typeof firebase === "undefined" || !firebase.apps || !firebase.firestore){
          // Firebase SDK 未載入 → 動態載入
          loadSDK(FIREBASE_CONFIG).then(function(){
            try{
              if(!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
              db = firebase.firestore();
              if(firebase.auth) auth = firebase.auth();
              enabled = true;
            }catch(e){ enabled = false; }
            resolve(enabled);
          }).catch(function(){ resolve(false); });
          return;
        }
        // SDK 已載入
        if(!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        db = firebase.firestore();
        if(firebase.auth) auth = firebase.auth();
        enabled = true;
        resolve(true);
      }catch(e){ resolve(false); }
    });
    return initPromise;
  }

  function loadSDK(cfg){
    return new Promise(function(resolve, reject){
      try{
        var scripts = [
          "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js",
          "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js",
          "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"
        ];
        var idx = 0;
        function next(){
          if(idx >= scripts.length){ resolve(); return; }
          var s = document.createElement("script");
          s.src = scripts[idx++];
          s.onload = next;
          s.onerror = reject;
          document.head.appendChild(s);
        }
        next();
      }catch(e){ reject(e); }
    });
  }

  /* ---- Firebase Auth：重設密碼 ---- */
  function resetPassword(email){
    return init().then(function(ok){
      if(!ok || !auth || !auth.sendPasswordResetEmail) return { ok:false, error:"firebase_off" };
      return auth.sendPasswordResetEmail(email)
        .then(function(){ return { ok:true }; })
        .catch(function(err){
          var code = err && err.code || "";
          return { ok:false, error: code };
        });
    });
  }

  /* ---- Firebase Auth：註冊 ---- */
  function signUp(email, pass){
    return init().then(function(ok){
      if(!ok || !auth || !auth.createUserWithEmailAndPassword) return { ok:false, error:"firebase_off" };
      return auth.createUserWithEmailAndPassword(email, pass)
        .then(function(){ return { ok:true }; })
        .catch(function(err){
          var code = err && err.code || "";
          return { ok:false, error: code };
        });
    });
  }

  /* ---- Firebase Auth：登入 ---- */
  function signIn(email, pass){
    return init().then(function(ok){
      if(!ok || !auth || !auth.signInWithEmailAndPassword) return { ok:false, error:"firebase_off" };
      return auth.signInWithEmailAndPassword(email, pass)
        .then(function(){ return { ok:true }; })
        .catch(function(err){
          var code = err && err.code || "";
          return { ok:false, error: code };
        });
    });
  }

  /* ---- 會員表 ---- */
  function loadUsers(){
    return init().then(function(ok){
      if(!ok) return null;
      return db.collection("xingua_users").doc("all")
        .get().then(function(doc){ return doc.exists ? doc.data() : {}; })
        .catch(function(){ return null; });
    });
  }
  function saveUsers(u){
    return init().then(function(ok){
      if(!ok) return false;
      return db.collection("xingua_users").doc("all").set(u)
        .then(function(){ return true; }).catch(function(){ return false; });
    });
  }

  /* ---- 日記 ---- */
  function loadDiary(uid){
    return init().then(function(ok){
      if(!ok) return null;
      return db.collection("xingua_diaries").doc(uid || "guest")
        .get().then(function(doc){ return doc.exists ? (doc.data().items || []) : []; })
        .catch(function(){ return null; });
    });
  }
  function saveDiary(uid, arr){
    return init().then(function(ok){
      if(!ok) return false;
      return db.collection("xingua_diaries").doc(uid || "guest").set({ items: arr })
        .then(function(){ return true; }).catch(function(){ return false; });
    });
  }

  /* ---- 設定 ---- */
  function loadSettings(uid){
    return init().then(function(ok){
      if(!ok) return null;
      return db.collection("xingua_settings").doc(uid || "guest")
        .get().then(function(doc){ return doc.exists ? (doc.data().s || {}) : {}; })
        .catch(function(){ return null; });
    });
  }
  function saveSettings(uid, s){
    return init().then(function(ok){
      if(!ok) return false;
      return db.collection("xingua_settings").doc(uid || "guest").set({ s: s })
        .then(function(){ return true; }).catch(function(){ return false; });
    });
  }

  /* ---- 收藏 ---- */
  function loadCollect(uid){
    return init().then(function(ok){
      if(!ok) return null;
      return db.collection("xingua_collects").doc(uid || "guest")
        .get().then(function(doc){ return doc.exists ? (doc.data().c || {}) : {}; })
        .catch(function(){ return null; });
    });
  }
  function saveCollect(uid, c){
    return init().then(function(ok){
      if(!ok) return false;
      return db.collection("xingua_collects").doc(uid || "guest").set({ c: c })
        .then(function(){ return true; }).catch(function(){ return false; });
    });
  }

  return {
    init: init,
    loadUsers: loadUsers, saveUsers: saveUsers,
    loadDiary: loadDiary, saveDiary: saveDiary,
    loadSettings: loadSettings, saveSettings: saveSettings,
    loadCollect: loadCollect, saveCollect: saveCollect,
    resetPassword: resetPassword, signUp: signUp, signIn: signIn
  };
})();
