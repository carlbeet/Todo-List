const task = document.getElementById('taskInput');
const button = document.getElementById('button-id');
const list = document.getElementById('todoList');

function addTask() {
    const taskText = task.value.trim();

    if (taskText == "") {
        alert("Please add task");
        taskInput.focus();
        return;
    }

    const span = document.createElement("span");
    span.textcontent = taskText;
    const newTodo = document.createElement('li');
    
    const editButton= document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(span);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.onclick = () => removeTask(li);

    list.appendChild(span)
    list.appendChild(newTodo);
    list.appendChild(editButton)

    task.value()= "";
};
