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

let spinner = document.getElementById('spiner');
let list = document.getElementById('list');
let statti = [];

db.collection('articles').get().then(function(res){ 
    res.forEach(function(title){
        statti.push(title.data())  
        spinner.innerHTML = '';       
        drawArticle(title.data())
    })

})
console.log(statti)
function drawArticle(data){
    let article = document.createElement('article')

    let title = document.createElement('h2')
    let text = document.createElement('h2')
    let avtor = document.createElement('h2')

    title.innerHTML = data.title
    text.innerHTML = data.article

    avtor.innerHTML = 'Оригінальна стаття'
    avtor.href = data.author

    article.appendChild(title)
    article.appendChild(text)
    article.appendChild(avtor)

    list.appendChild(article)
} 