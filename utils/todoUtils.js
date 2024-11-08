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
