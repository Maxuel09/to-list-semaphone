document.getElementById('todoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let todoInput = document.getElementById('todoInput').value;
    if (todoInput.trim() !== '') {
        let todoList = document.getElementById('todoList');
        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center col-md-8';

        let span = document.createElement('span');
        span.appendChild(document.createTextNode(todoInput));
        li.appendChild(span);

        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        let editButton = document.createElement('button');
        editButton.className = 'btn btn-outline-secondary btn-sm mr-1 edit';
        editButton.appendChild(document.createTextNode('Editar'));
        editButton.addEventListener('click', function () {
            let newText = prompt('Edita la tarea', todoInput);
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText;
            }
        });

        let deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-outline-danger btn-sm delete';
        deleteButton.appendChild(document.createTextNode('Eliminar'));
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(li);
        });

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);
        li.appendChild(buttonsDiv);

        todoList.appendChild(li);
        document.getElementById('todoInput').value = '';
    }

});

