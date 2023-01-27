const toDoInput = document.getElementById("to-do-input");
const toDoAddBtn = document.getElementById("to-do-add-btn");
const toDoList = document.getElementById("to-do-list");

const doingInput = document.getElementById("doing-input");
const doingAddBtn = document.getElementById("doing-add-btn");
const doingList = document.getElementById("doing-list");

const doneInput = document.getElementById("done-input");
const doneAddBtn = document.getElementById("done-add-btn");
const doneList = document.getElementById("done-list");

toDoAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const task = toDoInput.value;
  if (!task) return;
  const li = document.createElement("li");
  li.innerHTML = task;
  toDoList.appendChild(li);
  toDoInput.value = "";
});

doingAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const task = doingInput.value;
  if (!task) return;
  const li = document.createElement("li");
  li.innerHTML = task;
  doingList.appendChild(li);
  doingInput.value = "";
});

doneAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const task = doneInput.value;
  if (!task) return;
  const li = document.createElement("li");
  li.innerHTML = task;
  doneList.appendChild(li);
  doneInput.value = "";
});