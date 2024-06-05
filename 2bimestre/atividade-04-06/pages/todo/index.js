const taskKey = '@tasks'

let selectedTaskId = null

function addTask(event) {
    event.preventDefault();
    const taskId = new Date().getTime();
    const taskList = document.querySelector('#taskList');
    const form = document.querySelector('#taskForm');
    const formData = new FormData(form);
    const taskTitle = formData.get('title');
    const taskDescription = formData.get('description');

    const li = document.createElement('li');
    li.id = `id-${taskId}`;
    li.innerHTML = `
        <div>
            <h2>${taskTitle}</h2>
            <p>${taskDescription}</p>
        </div>
        <button class="btn-edit" title="Editar tarefa" onClick="openEditDialog(${taskId})">✏️</button>
        <button class="btn-delete" title="Excluir tarefa" onclick="removeTask(${taskId})">❌</button>
    `;

    taskList.appendChild(li);

    const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
    tasks.push({
        id: taskId,
        title: taskTitle,
        description: taskDescription,
    });
    localStorage.setItem(taskKey, JSON.stringify(tasks));

    form.reset();
}

function openEditDialog(taskId) {
    const tasks = JSON.parse(localStorage.getItem(taskKey)) || []

    selectedTaskId = tasks.findIndex((task) => task.id === taskId)
    const task = tasks[selectedTaskId]

    const dialog = document.querySelector('dialog')

    const editTitle = document.querySelector('#editTaskForm #title')
    const editDescription = document.querySelector('#editTaskForm #description')

    editTitle.value = task.title
    editDescription.value = task.description

    dialog.showModal()
}

function closeDialog() {
    const dialog = document.querySelector('dialog')
    dialog.close()
}

function editTask() {

    const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
    const task = tasks[selectedTaskId];

    const editTitle = document.querySelector('#editTaskForm #title').value;
    const editDescription = document.querySelector('#editTaskForm #description').value;

    task.title = editTitle;
    task.description = editDescription;

    tasks[selectedTaskId] = task;
    localStorage.setItem(taskKey, JSON.stringify(tasks));

    const taskListItem = document.querySelector(`#id-${task.id}`);
    taskListItem.querySelector('h2').textContent = task.title;
    taskListItem.querySelector('p').textContent = task.description;

    closeDialog();
}

function removeTask(taskId) {

    const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem(taskKey, JSON.stringify(updatedTasks));

    const taskListItem = document.querySelector(`#id-${taskId}`);
    taskListItem.remove();
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
    const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
    const taskList = document.querySelector('#taskList')

    taskList.innerHTML = tasks
        .map(
            (task) => `
      <li id='id-${task.id}'>
        <div>
          <h2>${task.title}</h2>
          <p>${task.description}</p>
        </div>
        <button class="btn-edit" title="Editar tarefa" onClick="openEditDialog(${task.id})">✏️</button>
        <button class="btn-delete" title="Excluir tarefa" onclick="removeTask(${task.id})">❌</button>
      </li>
    `
        )
        .join('')
})