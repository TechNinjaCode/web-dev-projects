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
  taskList.appendChild(taskElement);

  //Create span element for task text and add it to the task item
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskElement.appendChild(taskSpan);

  //Clear input field
  taskInput.value = "";
};

// Event listener for add task button
addTaskBtn.addEventListener("click", addTask);

// Event listener to add task when enter key is pressed
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
