const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
  const task = taskInput.value;
  if (task !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${task}<button class="deleteButton" id='red'>X</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
    const deleteButton = li.querySelector('.deleteButton');
    deleteButton.addEventListener('click', deleteTask);
  }
}

function deleteTask(event) {
  const li = event.target.closest('li');
  taskList.removeChild(li);
}

addButton.addEventListener('click', addTask);
