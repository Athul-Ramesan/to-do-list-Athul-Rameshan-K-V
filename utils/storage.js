function getTasks() {
    const tasks = localStorage.getItem("todo-tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function saveTasks(tasks) {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
}