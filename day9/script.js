// script.js

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const starterTasks = [
    "Bring CarolinaCard (Physical or Virtual)",
    "Bring GameDay Ticket",
    "Bring Clear Bag!",
    "Bring Phone",
    "Water Bottle (HYDRATE!)"
];

function createTask(taskText) {
    const listItem = document.createElement("li");
    listItem.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            listItem.classList.add("completed");
        } else {
            listItem.classList.remove("completed");
        }
    });

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    createTask(taskText);

    taskInput.value = "";
    taskInput.focus();
}

starterTasks.forEach(function (task) {
    createTask(task);
});

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});