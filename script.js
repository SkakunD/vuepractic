let numDoList = 0;
let numCompleteList = 0;

let dataTask = document.querySelector(".input_data_task");
let btnAddTask = document.querySelector(".btn_add_task");
let dataItemsTodo = document.querySelector(".mask-list-todo");
let dataItemCompleteList = document.querySelector(".complete-list");

let spanNumDoList = document.querySelector(".mask-num-todo");
let spanNumCompleteList = document.querySelector(".mask-num-done");

let checkboxList;

spanNumDoList.innerHTML = numDoList;
spanNumCompleteList.innerHTML = numCompleteList;

btnAddTask.onclick = function () {
  let dataItemTodoList = document.createElement("li");
  let dataItemTodo = dataTask.value;
  dataItemTodoList.className = "inData";
  dataItemTodoList.innerHTML = `
  <div class="parent">
    <input type="checkbox" onchange = replace() />
    <span class="data_todo_item">${dataItemTodo}</span>
  </div>
  <button class="btn-remove">Remove</button>
`;
  dataItemsTodo.append(dataItemTodoList);

  numDoList = document.querySelectorAll(".inData").length;
  spanNumDoList.innerHTML = numDoList;
  dataTask.value = "";
  checkboxList = document.querySelectorAll("input[type=checkbox]");
};

let replaceItem;
function replace() {
  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i].checked) {
      replaceItem = checkboxList[i].parentNode.parentNode;
      numDoList -= 1;
      spanNumDoList.innerHTML = numDoList;
      numCompleteList += 1;
      spanNumCompleteList.innerHTML = numCompleteList;
      // console.log(replaceItem);
      // console.log(dataItemCompleteList);
      dataItemCompleteList.append(replaceItem);
      // console.log(checkboxList[i].parentNode.parentNode);
    } else if (!checkboxList[i].checked) {
      replaceItem = checkboxList[i].parentNode.parentNode;
      dataItemsTodo.append(replaceItem);
      numDoList += 1;
      spanNumDoList.innerHTML = numDoList;
      numCompleteList -= 1;
      spanNumCompleteList.innerHTML = numCompleteList;
    }
  }
}

// function replace() {
//   console.log(this.parentNode);
// }
