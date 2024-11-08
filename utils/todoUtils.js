function createTask(task) {
    return {
        id: Date.now(),
        text: task.text,
        dueDate: task.dueDate,
        completed: false,
        createdAt: new Date().toISOString()
    }
}
function addTodo(task) {
    const newTask = createTask(task)
    const existingTasks = getTasks()
    existingTasks.push(newTask)
    saveTasks(existingTasks)
}

function editTask(taskId, updatedTask) {
    const allTasks = getTasks()
    for (let task of allTasks) {
        if (task[taskId]) {
            task.text = updatedTask.text || task.text
            task.dueDate = updatedTask.dueDate || task.dueDate
        }
    }
    console.log(allTasks, "all tasks")
    saveTasks(allTasks)
}
