import { storage } from "./storage"

export const todoUtils = {

    createTask: (task)=>{
        return{
            id: Date.now(),
            text: task.text,
            dueDate: task.dueDate,
            completed: false,
            createdAt: new Date().toISOString()
        }
    },
    addTodo : (task)=>{
        const newTask = todoUtils.createTask(task)
        storage.saveTasks(newTask)
    }
}