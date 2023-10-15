function add_tovars(){
    let tovar = {
        name: name1.value,
        name: colour.value,
        name: price.value,
        name: stan.value,
        name: seriy.value,
        type_standart: type14.value

    }
    db.collection('alltovars').add(tovar).then(res=>{
        console.log('Успіх')
        document.getElementById('modal1').style.display = 'none';
    })
}