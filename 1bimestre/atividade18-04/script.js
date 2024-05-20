// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    function loadTodoItems() {
        todoList.innerHTML = '';
        const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
        todoItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            todoList.appendChild(li);
        });
    }


    function addTodoItem(item) {
        const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
        todoItems.push(item);
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const todoItem = input.value.trim();
        if (todoItem) {
            addTodoItem(todoItem);
            input.value = '';
            loadTodoItems();
        }
    });

    loadTodoItems();
});
