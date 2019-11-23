function onReady() {
    let toDos = [];
    let currentToDoID = 1;
    const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');
        if (!newToDoText.value) {
            return;
        }

        //get the text

        toDos.push({
            title: newToDoText.value,
            complete: false
        });

        newToDoText.value = '';
        renderTheUI();
    }

    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';
        toDos.forEach(function (toDo) {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            newLi.textContent = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
        });
        addToDoForm.addEventListener('submit', event => {
            event.preventDefault();
            createNewToDo();
        });
    }

    renderTheUI();
}
window.onload = function () {
    onReady();
};
//toDos.push(todoObj);

//console.log(toDos);

//from addtodoform
//let todoObj = {
//    name: title,
//    id: currentToDoId

//let currentToDoId = 0;
//const ADD_TODO_FORM = document.getElementById("addToDoForm");

//function createNewToDo() {}

//ADD_TODO_FORM.addEventListener('submit', event => {
//  event.preventDefault();
//createNewToDo();
//});


//let deleteBtn = document.createElement('button');
//deleteBtn.textContent = "Delete";


//deleteBtn.addEventListener('click', function (event) {
//  let todoText = this.parentElement.childNodes[0].nodeValue;
//toDos.forEach(function (todoItem, index) {
//  if (todoItem.name == todoText) {
// delete that item
//    toDos.splice(index, 1);
// }
// console.log(toDos);
// })
//   toDoList.appendChild(newLi);
//newLi.appendChild(checkbox);.removeChild(this.parentElement);
// });
// newLi.appendChild(checkbox);
//newLi.appendChild(deleteBtn);
//   toDoList.appendChild(newLi);
//newLi.appendChild(checkbox);.appendChild(newLi);
//});
//};