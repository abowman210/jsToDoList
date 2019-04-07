const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var toDoCount = 0;


function addToDo() {
  var newToDo = getValue();
  var toDoToAdd = document.createElement(`li`);

  toDoToAdd.innerHTML = newToDo;
  var element = document.getElementById("todo-list");
  element.appendChild(toDoToAdd);
  var nodeToDelete = document.getElementById("newToDoDiv");
  element.removeChild(nodeToDelete);
  toDoCount++;
  itemCountSpan.innerHTML = toDoCount;
}

function newToDo() {
  showNewToDo();
}

function showNewToDo() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "newToDoDiv");
  var input = document.createElement("input");
  input.setAttribute("id", "newToDo");
  input.setAttribute("type", "text");
  newDiv.appendChild(input);
  var element = document.getElementById("todo-list");
  element.appendChild(newDiv);
  addButton();

}

function addButton() {
  var btn = document.createElement("button");
  btn.innerHTML = "Add Me!";
  btn.setAttribute("onClick", "addToDo()")
  var element = document.getElementById("newToDoDiv");
  element.appendChild(btn);
}

function addDeleteButton() {
  var btn = document.createElement("button");
  btn.innerHTML = "Delete Me!";
  btn.setAttribute("onClick", "deleteToDo()")
  var element = document.querySelector("#todo-list li");
  element.appendChild(btn);
}

function getValue() {
  var newToDo = document.getElementById("newToDo").value;
  addDeleteButton();
  return newToDo;
}

function deleteToDo(){

}
