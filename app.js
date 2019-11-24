//onReady sends an onReady event, this takes boxes down for me
function onReady() {
  // [] this is a single array (list) if [][] then it is a 2D list
  let toDos = [];
  // document = working with html, getElementById is saying "get me this element from html file"
  const addToDoForm = document.getElementById("addToDoForm");
  //Hey you, i need a box with 0 in it
  let id = 0;

  //this is what happens after you push the button which causes the button to createNewToDo (item in the list)
  function createNewToDo() {
    //Getting element from html and if it doesn't, it returns blank (if new toDo text does not have a value, return blank - if you leave text box blank, nothing happens)
    const newToDoText = document.getElementById("newToDoText");
    if (!newToDoText.value) {
      return;
    }

    //look for the toDos above, it's creating am empty list. If i DO have a value, i want to push (add) the value(object things in {} with no functions etc) to the list(toDos)
    toDos.push({
      title: newToDoText.value,
      complete: false,
      //hey id, i'm giving you a value as opposed to just having one... it's... id (see: let id = 0;)
      id: id
    });

    //this is what html elements have - i have this element newToDoText, i want to put this value into it('s values slots). value is the label of  the spot where newToDoText puts things. I have spots to put my name, gender, etc, same thing.
    newToDoText.value = "";
    //++ means take whatever the value of this is and add 1 to it "here's a new box, (add a new number)"
    id++;

    //calling the function below
    renderTheUI();
  }
  //when i create a new item i want it to be useable
  function renderTheUI() {
    //below is how you make it usable
    const toDoList = document.getElementById("toDoList");
    //textContent is an attribute that it has
    toDoList.textContent = "";

    //for everything in this list do the thing (this function) this function is not named
    toDos.forEach(function(toDo) {
      //these are creating html elements (document.createElement creates html element without being in the html file)
      const newLi = document.createElement("li");
      const checkbox = document.createElement("input");
      const deleteButton = document.createElement("button");

      //create a function to use when you press delete
      function deleteToDo() {
        //I want my list toDos to be filled with filtered items that are not
        //filter is a built in function for lists, which runs a function against your lists
        //item is creating another anonomys function (instead of function ()) and
        //alternative to write [after .filter( ] this could be: function(item){ } item => {return item !== toDos;}
        toDos = toDos.filter(item => {
          return item.id !== toDo.id;
        });
      }

      //for above this is what the object item and toDo look like
      //    {
      //      title
      //      complete
      //      id
      //    };
      deleteButton.addEventListener("click", event => {
        deleteToDo();
        renderTheUI();
      });

      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;
      deleteButton.textContent = "Delete!";

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });
  }

  //EventListener is someone shouts something and someone else responds to it.
  //addEventListener = someone's ready to respond when an event is shouted
  // such as "submit"(the event)
  //on the addToDoForm i'm adding this one [anonymous]function [event =>{}]
  //this one is easier for beginners - function(item){ }
  //this one is not. item => {}

  addToDoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

//when your browser starts, an onload event is given which starts the function at the top : this is me asking for boxes to be brought down
window.onload = function() {
  onReady();
};
