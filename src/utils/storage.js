export const storage = {
    saveTasks: (tasks)=>{
        localStorage.setItem("todo-tasks", JSON.stringify(tasks))
    },
    getTask : ()=>{
        const tasks = localStorage.getItem("todo-tasks")
        return tasks ? JSON.parse(tasks) : []
    }
}