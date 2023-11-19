function sign_in_up_google(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    


    var user = result.user;
   console.log(user)
    console.log(user.uid)
    db.collection('users_info').doc(user.uid).get().then(res =>{
      if(res._document == null){
        console.log('незарег')
        let user12 = {
          email: user.email,
          name: user.displayName,
          phone: '',
          login: ''
        }
       
        db.collection('users_info').doc(user.uid).set(user12).then(res => {
          link_uid(user.uid)
        })
      }else{
        
        link_uid(user.uid)
      }
    })

  }).catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    console.log(errorCode)
    console.log(errorMessage)
    console.log(email)

  });

}

function reg(){
    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    data_reg(user.uid)
    // ...
    link_uid(user.uid)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorCode)
    console.log(errorMessage)
  });
}

function data_reg(id){
  let user = {
    email: email.value,
    name: names.value,
    phone: phone.value,
    login: login.value
  }
 
  db.collection('users_info').doc(id).set(user).then(res => {
    alert('Успіх')
  })
} 

function email_pass_signIn(){
  firebase.auth().signInWithEmailAndPassword(email_vhid.value, password_vhid.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    link_uid(user.uid)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function link_uid(id){
  setTimeout(function(){
    localStorage.setItem('uid',id);
    window.location.href = `index.html?id=${id}`
  },1500)
  
}