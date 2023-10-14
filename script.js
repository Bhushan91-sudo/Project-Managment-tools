// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    taskItem.textContent = taskText;
    deleteButton.textContent = "Delete";

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Add an event listener to mark the task as completed
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    // Add an event listener to delete the task
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    taskInput.value = "";
}

// Event listener for adding a new task
document.getElementById("addTask").addEventListener("click", addTask);
