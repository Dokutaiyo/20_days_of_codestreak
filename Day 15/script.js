// Get the input and button elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add event listener to the button
addTaskBtn.addEventListener("click", function() {
  // Get the task text from the input
  const taskText = taskInput.value;

  // Create a new list item
  const taskItem = document.createElement("li");
  taskItem.innerText = taskText;

  // Add the new task to the list
  taskList.appendChild(taskItem);

  // Clear the input
  taskInput.value = "";
});