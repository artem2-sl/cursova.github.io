const firebaseConfig = {
    apiKey: "AIzaSyAPy0T46ubdKzDQocnIWwWXAAv8mgJN-PQ",
    authDomain: "style-viel.firebaseapp.com",
    projectId: "style-viel",
    storageBucket: "style-viel.appspot.com",
    messagingSenderId: "940489843429",
    appId: "1:940489843429:web:160f811deed16ee2666a0c"
  };
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function add_user(){
    let new_user = {
        name: document.getElementById('user_name').value,
        lastname: document.getElementById('user_lastname').value,
        email: document.getElementById('user_email').value,
        password: document.getElementById('user_password').value
    }
    db.collection('usersNew').add(new_user).then(function(){
        console.log('Успіх')
    })
}