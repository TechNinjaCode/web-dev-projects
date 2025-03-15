"use strict";

// Select elements (Task input field , add task button and the list)

const taskInput = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskList = document.querySelector(".task-list");

// Function to add new task
const addTask = () => {
  // Get input value and remove extra spaces
  const taskText = taskInput.value.trim();
  // Prevent from adding empty task
  if (taskText === "") return;

  // Create a task item and add it to the list
  const taskElement = document.createElement("li");
  taskElement.classList.add("task-item");

  //Create Checkbox
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.classList.add("checkbox");
  taskElement.appendChild(checkBox);

  //Create span element for task text and add it to the task item
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskElement.appendChild(taskSpan);

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");

  // Icon for delete button
  const deleteIcon = document.createElement("ion-icon");
  deleteIcon.setAttribute("name", "trash-outline");
  deleteBtn.appendChild(deleteIcon); // Append icon to the button

  // Append delete button to the task item
  taskElement.appendChild(deleteBtn);

  // Append task item to the task list
  taskList.appendChild(taskElement);

  //Clear input field
  taskInput.value = "";
};

// Function to handle tasks
const handleTask = (event) => {
  if (event.target.closest(".delete-btn")) {
    event.target.closest(".task-item").remove();
  }
};

// Function for task completion toggle
const toggleTask = (event) => {
  if (event.target.classList.contains("checkbox")) {
    event.target.nextElementSibling.classList.toggle("completed");
  }
};

// Event listener for add task button
addTaskBtn.addEventListener("click", addTask);

// Event listener to add task when enter key is pressed
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Event listener for handling tasks
taskList.addEventListener("click", handleTask);

// Event Listener for task completion toggle
taskList.addEventListener("change", toggleTask);
