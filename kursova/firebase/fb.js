const firebaseConfig = {
    apiKey: "AIzaSyDXGIu-pwtnzw6htPyxQptVRZlKtTdApXw",
    authDomain: "nedilya-12.firebaseapp.com",
    projectId: "nedilya-12",
    storageBucket: "nedilya-12.appspot.com",
    messagingSenderId: "161612025199",
    appId: "1:161612025199:web:4bb9db3e2d7452cf616c9a"
  };

  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();