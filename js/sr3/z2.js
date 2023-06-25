function enter(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let userdata = JSON.parse(localStorage.getItem('local'))

    if(email == userdata.user_email && password == userdata.user_password){
        document.getElementById('message').innerHTML='<div class="alert alert-success col-6">Успіх</div>'
    }

    else{
        document.getElementById('message').innerHTML='<div class="alert alert-danger col-6">Помилка</div>'
    }
}