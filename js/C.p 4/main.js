function showModal(id){
    document.getElementById(id).classList.add('show')
}

function hideModal(id){
    document.getElementById(id).classList.remove('show')
}
function saveTask(){
    let texD = document.getElementById('texD').value 
    let selexD = document.getElementById('selexD').value
    let task = {
        describe: texD,
        status: selexD
    }
    let tasks = getTasks()
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    hideModal('newTaskModal')
    drawtasks()
}
function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    if(tasks==null){
        tasks = []
    }
    return tasks
}

function drawtasks(){
    let tasks = getTasks();
    let vidro = ''
    let status = ''
    tasks.forEach(function(zavd, index){
        if(zavd.status == 'Провалено') {status = '<b class="red">Провалено</b>'}
        else if(zavd.status == 'Виконується'){status = '<b class="orange">Виконується</b>'}
        else if(zavd.status == 'Виконано'){status = '<b class="green">Виконано</b>'}
        vidro+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${zavd.describe}</td>
        <td>${status}</td>
        <td class="text-center"><button class="btn btn-warning btn-sm" >edit</button></td>
        <td class="text-center"><button class="btn btn-danger btn-sm" onclick=deleteTask(${index})>x</button></td>
        </tr>
        `
    })
    document.getElementById('tbd').innerHTML=vidro
}
drawtasks()

function deleteTask(index){
    let tasks = getTasks();
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    drawtasks()
}
