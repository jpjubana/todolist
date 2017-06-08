    var newTaskInput = document.getElementById("new-todo");
    var todolistContainer = document.getElementById("todo-list");

    function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            return false;
        }
        return true;
    };

    newTaskInput.addEventListener('keypress', function(event) {
        var taskName = newTaskInput.value;
        newTaskInput.value = "";
        todolistContainer.insertAdjacentHTML('afterbegin', taskName);
    });