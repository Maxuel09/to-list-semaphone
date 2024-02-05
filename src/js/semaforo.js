// let menuInput = document.getElementById('menuInput');
// menuInput.addEventListener('click', function () {
//     document.getElementById('dropdownMenu').classList.toggle('show');
// })

let iconPalet = document.createElement('button');
iconPalet.className = 'material-symbols-outlined';
iconPalet.textContent = 'color_lens';
iconPalet.style.width = '50px';
iconPalet.style.height = '50px';
iconPalet.style.borderRadius = '50%';
iconPalet.style.border = 'none';
iconPalet.style.position = 'fixed';
iconPalet.style.top = '10px';


let colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.style.display = 'none';

iconPalet.addEventListener('click', function () {
    colorPicker.click(); 
});

colorPicker.addEventListener('input', function () {
    document.body.style.backgroundColor = colorPicker.value;
});

document.body.appendChild(iconPalet);
document.body.appendChild(colorPicker);



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
                let completedText = document.createElement('span');
                completedText.textContent = ' Completada';
                completedText.style.color = 'green'; 
                completedText.classList.add('completed-text');
                li.appendChild(completedText);
            } else {
                span.style.textDecoration = 'none';
                let completedText = li.querySelector('.completed-text');
                if (completedText) {
                    li.removeChild(completedText);
                }
            }
            buttonsDiv.appendChild(completedText)
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




    }

});

