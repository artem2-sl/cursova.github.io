let users = [];

db.collection('usersNew').get().then (res => {
    res.forEach(function(doc){
        let User = doc.data()
        User.id = doc.id
        users.push(User)
    })
})
console.log(users)

function drawUsers(){
    let tbody = document.getElementById('tbody');
    let tbody_trash = '';
    users.map(function(imya,index){
        tbody_trash += `
        <tr id=${imya.id}>
                <th>${index+1}</th>
                <th>${imya.name}</th>
                <th>${imya.lastname}</th>
                <th>${imya.email}</th>
                <th>${imya.password}</th>
                <th><button class="edit">Редагувати</button></th>
                <th><button class="delete" onclick='deleteDoc("${imya.id}")'>Видалити</button></th>
            </tr>
        `
    })


    tbody.innerHTML = tbody_trash;
}
drawUsers()
function deleteDoc(id){
    db.collection('usersNew').doc(id).delete().then(function(){
        console.log(`Видалено!`)
        drawUsers()
    })
}