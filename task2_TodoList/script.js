function addTask() {
    
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
       
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskValue}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        
        const taskList = document.getElementById('taskList');
        taskList.appendChild(listItem);

        
        taskInput.value = '';
    }
}

function deleteTask(button) {
    
    const listItem = button.parentNode;
    listItem.remove();
}
