let numDoList = 0;
let numCompleteList = 0;

let dataTask = document.querySelector(".input_data_task");
let btnAddTask = document.querySelector(".btn_add_task");
let dataItemsTodo = document.querySelector(".mask-list-todo");

let spanNumDoList = document.querySelector(".mask-num-todo");
let spanNumCompleteList = document.querySelector(".mask-num-done");

spanNumDoList.innerHTML = numDoList;
spanNumCompleteList.innerHTML = numCompleteList;

btnAddTask.onclick = function () {
  let dataItemTodoList = document.createElement("li");
  let dataItemTodo = dataTask.value;
  dataItemTodoList.innerHTML = `
  <div>
    <input type="checkbox" />
    <span class="data_todo_item">${dataItemTodo}</span>
  </div>
  <button class="btn-remove">Remove</button>
`;
  dataItemsTodo.append(dataItemTodoList);
  dataTask.value = "";
};
console.log(dataTask);
console.log(btnAddTask);
