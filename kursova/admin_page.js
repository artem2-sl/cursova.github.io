function add_tovar(){
    let tovar = {
        name:name1.value,
        zk_name: zk_name.value,
        price: price.value,
        room_numbers: room_numbers.value,
        ploshcha: s.value,
        img: img.value,
        type_zitla: type12.value
    }
    db.collection('alltovars').add(tovar).then(res =>{
        console.log('успіх')
        document.getElementById('modal1').style.display = 'none';
        window.location.reload();
    })
}