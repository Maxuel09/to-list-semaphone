

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
            if (event.key === 'Enter') {
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

        let iconMenu = document.createElement('span');
        iconMenu.className = 'material-symbols-outlined';
        iconMenu.textContent = 'menu';
        iconMenu.style.color = '#919190';

        let menuButton = document.createElement('button');
        menuButton.className = 'btn';
        menuButton.style.padding = '0';

        menuButton.addEventListener('click', function () {
            let menuDiv = document.createElement('ul');
            menuDiv.className = 'ml-5 list-group';
            menuDiv.style.position = 'absolute';
            menuDiv.style.left = '95%';
            menuDiv.style.top = '0%'; // Ajusta la posición vertical del menú para que aparezca debajo del botón

            // Crear elementos de menú
            let menuDate = document.createElement('li');
            menuDate.className = 'list-group-item';
            menuDate.textContent = 'Date';

            menuDate.addEventListener('click', function () {
                let menuDate = document.createElement('input');
                menuDate.type = 'date';
                menuDate.className = 'form-control';
            })


            let liMenu2 = document.createElement('li');
            liMenu2.className = 'list-group-item';
            liMenu2.textContent = 'Opción 2';

            let liMenu3 = document.createElement('li');
            liMenu3.className = 'list-group-item';
            liMenu3.textContent = 'Opción 3';

            // Agregar elementos al menú
            menuDiv.appendChild(menuDate);
            menuDiv.appendChild(liMenu2);
            menuDiv.appendChild(liMenu3);


            menuButton.appendChild(menuDiv);
        });


        menuButton.appendChild(iconMenu);


        li.appendChild(menuButton);


        buttonsDiv.appendChild(menuButton);
        menuButton.appendChild(iconMenu);
        li.appendChild(buttonsDiv);





    }

});

