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

function editTask(taskId, newText) {
    const allTasks = getTasks()
    for (let task of allTasks) {
        if (task[taskId]) {
            task.text = newText || task.text
        }
    }
    console.log(allTasks, "all tasks")
    saveTasks(allTasks)
}
