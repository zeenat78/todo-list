const todoContainer = document.getElementById("container");
const addTodoButton = document.getElementById("button");
const inputField = document.getElementById("input");
//getting todos from localStorage
const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}
addTodoButton.addEventListener("click", function (e) {
  e.preventDefault();
  addTodo();
  inputField.value = "";
});
function addTodo(todo) {
  let todoText = inputField.value;
  if (todo) {
    todoText = todo;
  }
  if (todoText) {
    const list = document.createElement("li");
    const deleteIcon = document.createElement("span");
    const editIcon = document.createElement("span");
    const icons=document.createElement("div")
    deleteIcon.innerHTML = "<i class='fas fa-trash-alt'></i>";
    editIcon.innerHTML = "<i class='fas fa-edit'></i>";
    list.innerText = todoText;
    //add todo in todoContainer
    icons.appendChild(deleteIcon)
    icons.appendChild(editIcon);
    list.appendChild(icons);
    
    todoContainer.append(list);
    updateLocalStorage();
    //delete todo
    deleteIcon.addEventListener("click", function () {
      list.remove();
      updateLocalStorage();
    });
    //update todo
    editIcon.addEventListener("click",function(){
      let editValue=prompt("edit the selected todo")
      list.innerText=editValue
      list.appendChild(icons);
      // list.appendChild(editIcon);
      updateLocalStorage()
    })
  }
}
//updating localStorage
function updateLocalStorage() {
  const todoElements = document.querySelectorAll("li");
  const Todos = [];
  todoElements.forEach((item) => {
    Todos.push(item.innerText);
  });

  localStorage.setItem("todos", JSON.stringify(Todos));
}
