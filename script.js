writeTask = document.getElementById('addT');
addBtn = document.getElementById('add');
newTask = document.querySelector('.container');

addBtn.addEventListener('click', function () {
    const taskcheck = writeTask.value;
    if (taskcheck == "") {
        return;
    }
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = ` <input type="checkbox">
       <label>${taskcheck}</label>
            <i class="fa-solid fa-trash"></i>
` ;
    const deleteBtn = task.querySelector('.fa-trash');
    deleteBtn.addEventListener('click', function () {
        task.remove();
    });
    newTask.appendChild(task);

    writeTask.value = "";


})



