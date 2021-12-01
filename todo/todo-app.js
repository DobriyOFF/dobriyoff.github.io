(function() {
    let todos = [];
    let todoTitle;
    let todoList;
    let countId = 1;
    //создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    //создаем и вовзращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        button.disabled = true;
        input.oninput = function() {
            button.disabled = input.value <= 0;
        };

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    }

    //создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function addTodo(name, done = false) {
        const todo = {
            id: countId++,
            name,
            done: !!done
        };
        todos.push(todo);
        let { item, doneButton, deleteButton } = createTodoItemElement(name, done);
        //добавляем обработчик на кнопки
        doneButton.addEventListener('click', function() {
            if (todo.done) {
                item.classList.toggle('list-group-item-success');
                todo.done = false;
            } else {
                item.classList.toggle('list-group-item-success');
                todo.done = true;
            }
            saveToLocalStorage();
        });
        deleteButton.addEventListener('click', function(event) {
            item.remove();
            deleteTodo(todo.id);
            saveToLocalStorage();
        });
        //создаем и добавляем в список новое дело с названием из поля для ввода
        todoList.append(item);
    }

    //создаем li элементы
    function createTodoItemElement(name, done) {
        let item = document.createElement('li');
        //кпноки помещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        //устанавливаем стили для элемента списка, а также для размещения кнопок
        //в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        for (let i = 0; i < todos.length; i++) {
            item.setAttribute('data-key', todos[i].id);
        }
        item.textContent = name;
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        if (done === true) {
            item.classList.toggle('list-group-item-success');
        }
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';
        //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);
        // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    function deleteTodo(id) {
        // filters out the <li> with the id and updates the todos array
        todos = todos.filter(function(item) {
            // use != not !==, because here types are different. One is number and other is string
            return "" + item.id !== "" + id;
        });
    }

    function createTodoApp(container, title, defaultTodos = [], startTodos) {

        todoTitle = title;

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        // for (const item of startTodos) {
        //   let todoItems = createTodoItemElement(item.name);
        //   todoList.append(todoItems.item);
        //   if (item.done === true) {
        //     todoItems.item.classList.toggle('list-group-item-success');
        //   }
        //   todoItems.doneButton.addEventListener('click', function() {
        //     todoItems.item.classList.toggle('list-group-item-success');
        //   });
        //   todoItems.deleteButton.addEventListener('click', function() {
        //       todoItems.item.remove();
        //   });
        // }

        if (Array.isArray(defaultTodos)) {
            for (let todo of defaultTodos) {
                addTodo(todo.name, todo.done);
            }
            saveToLocalStorage();
        }
        //бразуер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e) {
            //эта строчка необходима, чтобы предоставить стандартное действие браузера
            //в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault();
            //игнорируем создание элемента, если пользователь ничего не ввел в поле
            if (!todoItemForm.input.value) {
                return;
            } else {
                todoItemForm.button.disabled = true;
            }
            addTodo(todoItemForm.input.value, false);

            saveToLocalStorage();

            //обнуляем значение в поле, чтобы не пришлось стирать его вручную
            todoItemForm.input.value = '';
        });
    }

    function saveToLocalStorage() {
        localStorage.setItem(todoTitle, JSON.stringify(todos));
    }

    window.createTodoApp = createTodoApp;

})();