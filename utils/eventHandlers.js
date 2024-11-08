
function handleEditTask(taskId) {
    const taskItem = document.getElementById(`task-item-${taskId}`);
    const currentTaskTextElement = document.getElementById(`task-text-${taskId}`)
    const currentText = currentTaskTextElement.innerText

    taskItem.innerHTML = `
        <input type="text" id="edit-input-${taskId}" value="${currentText}">
        <button onclick="updateTaskText(${taskId})">Update</button>
        <button onclick="cancelEdit(${taskId}, '${currentText}')">Cancel</button>
    `;
}
function updateTaskText(taskId) {
    const editInput = document.getElementById(`edit-input-${taskId}`);
    const newText = editInput.value;
    if (newText.trim() === "") return;

    const allTasks = getTasks();
    const taskIndex = allTasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        allTasks[taskIndex].text = newText;
        saveTasks(allTasks);
    }
    displayTasks();
}

function cancelEdit(taskId, originalText) {
    const taskItem = document.getElementById(`task-item-${taskId}`);
    taskItem.innerHTML = `
        <span id="task-text-${taskId}">${originalText}</span>
        <button class="edit-btn" onclick="handleEditTask(${taskId})">Edit</button>
        <button class="delete-btn" onclick="handleDeleteTask(${taskId})">Delete</button>
    `;
}
