var tasksList = document.getElementById("tasks-list");

function addTask(){
    var task = document.getElementById("todo-tasks");
    var li = document.createElement('li')
    var liTask = document.createTextNode(task.value)
    li.appendChild(liTask)
    if(task.value !=""){ tasksList.appendChild(li); }
    task.value = "";

    var editBtn = document.createElement('button')
    var editbtnText = document.createTextNode("Edit task")
    editBtn.appendChild(editbtnText)
    li.appendChild(editBtn)
    editBtn.setAttribute("class", "btn btn-secondary edit")
    editBtn.setAttribute("onclick","editTask(this)")


    var dltBtn = document.createElement("button");
    var btnText = document.createTextNode("Delete task")
    dltBtn.appendChild(btnText)
    li.appendChild(dltBtn);
    dltBtn.setAttribute("class","btn btn-secondary delete")
    dltBtn.setAttribute("onclick","deleteTask(this)")  
}


function editTask(edtbtn){
    console.log(edtbtn.parentNode.firstChild)
    var newValue = prompt("Enter task");
    if (newValue != ""){
    edtbtn.parentNode.firstChild.nodeValue = newValue;}
}


function deleteTask(delbtn){
    delbtn.parentNode.remove()
}


function deleteAll(){
    tasksList.innerHTML = "";
}
