// 1. 在此填入你的 Firebase 設定物件
var FIREBASE_CONFIG = {
  apiKey: "AIzaSyCEyRLhBF2NSy2jRCdBYd7UzFW5Nwklhk8",
  authDomain: "dec12-62195.firebaseapp.com",
  projectId: "dec12-62195",
  storageBucket: "dec12-62195.firebasestorage.app",
  messagingSenderId: "981849158907",
  appId: "1:981849158907:web:9eb4f5f43f207580b3ac5e",
  measurementId: "G-LX00QPTNB7"
};

// 2. Firebase 操作模組 (FB)
var FB = (function () {
  var db = null;
  var auth = null;
  var enabled = false;
  var initPromise = null;

  // 動態載入 Firebase SDK 腳本
  function loadSDK(cfg) {
    return new Promise(function (resolve, reject) {
      try {
        var scripts = [
          "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js",
          "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js",
          "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"
        ];
        var idx = 0;

        function next() {
          if (idx >= scripts.length) {
            resolve();
            return;
          }
          var s = document.createElement("script");
          s.src = scripts[idx++];
          s.onload = next;
          s.onerror = reject;
          document.head.appendChild(s);
        }

        next();
      } catch (e) {
        reject(e);
      }
    });
  }

  // 初始化 Firebase
  function init() {
    if (initPromise) return initPromise;

    initPromise = new Promise(function (resolve) {
      if (!FIREBASE_CONFIG) {
        resolve(false);
        return;
      }

      try {
        // 如果尚未載入 Firebase SDK，先動態載入
        if (typeof firebase === "undefined" || !firebase.apps || !firebase.firestore) {
          loadSDK(FIREBASE_CONFIG)
            .then(function () {
              try {
                firebase.initializeApp(FIREBASE_CONFIG);
                db = firebase.firestore();
                if (firebase.auth) {
                  auth = firebase.auth();
                }
                enabled = true;
              } catch (e) {
                enabled = false;
              }
              resolve(enabled);
            })
            .catch(function () {
              resolve(false);
            });
          return;
        }

        // 若已載入 SDK，直接初始化
        if (!firebase.apps.length) {
          firebase.initializeApp(FIREBASE_CONFIG);
        }
        db = firebase.firestore();
        if (firebase.auth) {
          auth = firebase.auth();
        }
        enabled = true;
        resolve(true);
      } catch (e) {
        resolve(false);
      }
    });

    return initPromise;
  }

  // --- 使用者資料 (Users) ---
  function loadUsers() {
    return init().then(function (ok) {
      if (!ok) return null;
      return db
        .collection("xingua_users")
        .doc("all")
        .get()
        .then(function (doc) {
          return doc.exists ? doc.data() : {};
        })
        .catch(function () {
          return null;
        });
    });
  }

  function saveUsers(u) {
    return init().then(function (ok) {
      if (!ok) return false;
      return db
        .collection("xingua_users")
        .doc("all")
        .set(u)
        .then(function () {
          return true;
        })
        .catch(function () {
          return false;
        });
    });
  }

  // --- 抽卦日記/紀錄 (Diaries) ---
  function loadDiary(uid) {
    return init().then(function (ok) {
      if (!ok) return null;
      return db
        .collection("xingua_diaries")
        .doc(uid || "guest")
        .get()
        .then(function (doc) {
          return doc.exists ? doc.data().items || [] : [];
        })
        .catch(function () {
          return null;
        });
    });
  }

  function saveDiary(uid, arr) {
    return init().then(function (ok) {
      if (!ok) return false;
      return db
        .collection("xingua_diaries")
        .doc(uid || "guest")
        .set({ items: arr })
        .then(function () {
          return true;
        })
        .catch(function () {
          return false;
        });
    });
  }

  // --- 個人設定 (Settings) ---
  function loadSettings(uid) {
    return init().then(function (ok) {
      if (!ok) return null;
      return db
        .collection("xingua_settings")
        .doc(uid || "guest")
        .get()
        .then(function (doc) {
          return doc.exists ? doc.data().s || {} : {};
        })
        .catch(function () {
          return null;
        });
    });
  }

  function saveSettings(uid, s) {
    return init().then(function (ok) {
      if (!ok) return false;
      return db
        .collection("xingua_settings")
        .doc(uid || "guest")
        .set({ s: s })
        .then(function () {
          return true;
        })
        .catch(function () {
          return false;
        });
    });
  }

  // --- 收藏卦象 (Collects) ---
  function loadCollect(uid) {
    return init().then(function (ok) {
      if (!ok) return null;
      return db
        .collection("xingua_collects")
        .doc(uid || "guest")
        .get()
        .then(function (doc) {
          return doc.exists ? doc.data().c || {} : {};
        })
        .catch(function () {
          return null;
        });
    });
  }

  function saveCollect(uid, c) {
    return init().then(function (ok) {
      if (!ok) return false;
      return db
        .collection("xingua_collects")
        .doc(uid || "guest")
        .set({ c: c })
        .then(function () {
          return true;
        })
        .catch(function () {
          return false;
        });
    });
  }

  // 對外公開的方法
  return {
    init: init,
    loadUsers: loadUsers,
    saveUsers: saveUsers,
    loadDiary: loadDiary,
    saveDiary: saveDiary,
    loadSettings: loadSettings,
    saveSettings: saveSettings,
    loadCollect: loadCollect,
    saveCollect: saveCollect
  };
})();