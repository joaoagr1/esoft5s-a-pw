const taskKey = '@tasks'

// Função para adicionar tarefa
function addTask(event) {
  event.preventDefault() // Evita o recarregamento da página
  const taskId = new Date().getTime()
  const taskList = document.querySelector('#taskList')

  const form = document.querySelector('#taskForm')
  const formData = new FormData(form)

  const taskTitle = formData.get('title')
  const taskDescription = formData.get('description')

  const li = document.createElement('li')

  li.id = taskId
  li.innerHTML = `
  <button id="edit" onclick="abreModal(event)">✏️</button>
      <h2>${taskTitle}</h2>
      <p>${taskDescription}</p>
  `

  taskList.appendChild(li)

  // Salvar tarefas no localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  tasks.push({ title: taskTitle, description: taskDescription })
  localStorage.setItem(taskKey, JSON.stringify(tasks))

  form.reset()
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  const taskList = document.querySelector('#taskList')
  taskList.innerHTML = tasks
    .map((task) => `<li><button id="edit" onclick="abreModal(event)">✏️</button><h2>${task.title}</h2> <p>${task.description}</p></li>`)
    .join('')
})

function abreModal(event) {
  const modal = document.querySelector('#modal')
  const modalTitle = document.querySelector('#modalTitle')
  const modalDescription = document.querySelector('#modalDescription')
  const closeModal = document.querySelector('#closeModal')

  const taskElement = event.target.parentElement
  const taskTitle = taskElement.querySelector('h2').innerText
  const taskDescription = taskElement.querySelector('p').innerText

  modalTitle.value = taskTitle
  modalDescription.value = taskDescription

  modal.style.display = 'flex'

  closeModal.onclick = function () {
    modal.style.display = 'none'
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  }
}
