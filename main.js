const list = document.querySelector('.todo-list');
const input = document.querySelector('.new-todo');


function addTodo(event) {
    if (event.keyCode === 13) {
        let text = input.value;
        let html = itemTemplate(text);


        list.insertAdjacentHTML('beforeend', html);

        input.value = "";
    }
}

function itemTemplate(text) {
    return '<li><div class="view"><label>' + text + '</label></div></li>';
}

input.addEventListener('keypress', addTodo);