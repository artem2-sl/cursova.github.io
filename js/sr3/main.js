function register(){
   let name = document.getElementById('name').value

   let email = document.getElementById('email').value

   let password = document.getElementById('password').value

   if (name.length>3 && email.includes('@') && password.length>6){
    let object1 = {
        user_name: name,
        user_email:email,
        user_password:password 
    }

    localStorage.setItem('local',JSON.stringify(object1))
    document.getElementById('message').innerHTML='<div class="alert alert-success col-6">Успіх</div>'
   }
   else{
    document.getElementById('message').innerHTML='<div class="alert alert-danger col-6">Помилка</div>'
   }
}