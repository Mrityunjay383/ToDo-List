
const todoButton = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list')

//Event Listeners
  todoButton.addEventListener('click', addTodo);
  todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {

  if(todoInput.value == ""){
    alert("Please type something to Add")
  }else{

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="fas fa-check"></i>'
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
  newToDo.classList.add('todo-item');
  todoDiv.appendChild(newToDo);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}
}

function deleteCheck(e) {
  const item = e.target;
  const todo = item.parentElement;

  //Delete button
  if(item.classList[0] === "trash-btn"){
    todo.classList.add('fall')
    todo.addEventListener("transitionend", function(){
      todo.remove();
    })
  }
  //Checked button
  else if(item.classList[0] === "complete-btn"){
    todo.classList.toggle("completed");
  }
}
