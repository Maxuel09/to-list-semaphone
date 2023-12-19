

document.getElementById('todoForm').addEventListener('submit', function (list) {
    list.preventDefault();
    let todoInput = document.getElementById('todoInput').value;
    if (todoInput.trim() !== '') {
        let todoList = document.getElementById('todoList');
        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center col-md-8';

        let span = document.createElement('span');
        span.appendChild(document.createTextNode(todoInput));
        li.appendChild(span);

        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'form-check-input mt-0 p-2';

        checkBox.addEventListener('change', function () {
            if (this.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
        });

        li.appendChild(checkBox);




        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';





        let iconEdit = document.createElement('span');
        iconEdit.className = 'material-symbols-outlined';
        iconEdit.textContent = 'edit';


        let editButton = document.createElement('button');
        editButton.className = 'btn';
        editButton.appendChild(iconEdit);
        editButton.addEventListener('click', function () {
            span.contentEditable = "true";
            span.focus();
        });

        editButton.addEventListener('keydown', function (event) {
            if(event.key === 'Enter'){
                span.contentEditable = "false";
            }
        })


        let iconDelete = document.createElement('span');
        iconDelete.className = 'material-symbols-outlined';
        iconDelete.textContent = 'delete';
        iconDelete.style.color = 'red';


        let deleteButton = document.createElement('button');
        deleteButton.className = 'btn';
        deleteButton.appendChild(iconDelete);
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

