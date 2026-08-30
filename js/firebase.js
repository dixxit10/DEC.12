var FIREBASE_CONFIG = {
  apiKey: "AIzaSyCEyRLhBF2NSy2jRCdBYd7UzFW5Nwklhk8",
  authDomain: "dec12-62195.firebaseapp.com",
  projectId: "dec12-62195",
  storageBucket: "dec12-62195.firebasestorage.app",
  messagingSenderId: "981849158907",
  appId: "1:981849158907:web:9eb4f5f43f207580b3ac5e",
  measurementId: "G-LX00QPTNB7"
};


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
