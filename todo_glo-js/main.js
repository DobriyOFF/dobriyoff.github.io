const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
let todoTitle = 'Список дел';

const toDoData = [];


function addTodo(text, completed = false) {
    const todo = {
        text,
        completed: !!completed
    };
    toDoData.push(todo);
    render()
}

const render = function () {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';
    toDoData.forEach(function (item, index) {
        const li = document.createElement('li');

        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        li.querySelector('.todo-complete').addEventListener('click', function() {
            item.completed = !item.completed;
            saveToLocalStorage();
            render();
        });
        li.querySelector('.todo-remove').addEventListener('click', function(event) {
            toDoData.splice(index, 1);
            saveToLocalStorage();
            render();
        });
    });
};

function createTodoApp(defaultTodos = []) {
    if (Array.isArray(defaultTodos)) {
        for (let todo of defaultTodos) {
            addTodo(todo.text, todo.completed)
        }
        saveToLocalStorage();
    }
    
    todoControl.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const newToDo = {
            text: headerInput.value,
            completed: false
        }
    
        toDoData.push(newToDo);
        headerInput.value = '';
        render();
        saveToLocalStorage();
    });
}

function saveToLocalStorage() {
    // conver the array to string then store it.
    localStorage.setItem(todoTitle, JSON.stringify(toDoData));
}