function showModal(id){
    document.getElementById(id).classList.add('show')
    }
    function hideModal(id){
    document.getElementById(id).classList.remove('show')
    }
    let vsi_masiv = []
    let nomer = 0;
    function addUser(){
        let user = {
            name: document.getElementById('name').value,
            lastname: document.getElementById('lastname').value,
            age: document.getElementById('age').value,
            email:document.getElementById('email').value
        }
        console.log(user)
        db.collection("saitUsers").add(user).then(function(){
            console.log('Додано')
            hideModal('newTaskModal')
            location.reload()
        })
    }
    
    function drawUsers(){
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = ''
        db.collection("saitUsers").get().then(res => {
            res.forEach(function(doc,idx){
                let user = doc.data();
                user.id = doc.id;
                vsi_masiv.push(user) 
                tbody.innerHTML += `
                <tr>
                <th scope="row">${idx+1}</th>
                <td>${user.name} ${user.lastname}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td class="text-center"><button class="btn btn-warning btn-sm" onclick="edit(${nomer})">Редагувати</button></td>
                <td class="text-center"><button class="btn btn-danger btn-sm" onclick="delUser('${user.id}')">x</button></td>
              </tr>
                `
                nomer++
            })
        })
    }
    
    drawUsers()

    function SaveEditUser(id){
        let user = {
            name: document.getElementById('edit_name').value,
            lastname: document.getElementById('edit_lastname').value,
            age: document.getElementById('edit_age').value,
            email:document.getElementById('edit_email').value
        }
        console.log(user)
        db.collection("saitUsers").doc(id).set(user).then(function(){
            console.log('Оновлено')
            hideModal('editTaskModal')
            location.reload()
        })
    }

    function edit(index){
         document.getElementById('edit_name').value = vsi_masiv[index].name;
         document.getElementById('edit_lastname').value = vsi_masiv[index].lastname;
         document.getElementById('edit_age').value = vsi_masiv[index].age;
         document.getElementById('edit_email').value = vsi_masiv[index].email;
         showModal('editTaskModal')
         document.getElementById('saveEd').setAttribute('onclick', `SaveEditUser("${vsi_masiv[index].id}")`)
    }

    function delUser(userId){
        db.collection('saitUsers').doc(userId).delete().then(function(){ location.reload()})
       
    }