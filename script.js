
const todo = ()=>{
    const addTaskInput = document.getElementById("add-todo-input")
    const dueDateInput = document.getElementById("due-date")
    const todoForm = document.getElementById("todo-form")

    const handleAddTask = (e)=>{
        e.preventDefault()
        const text = addTaskInput.value.trim()
        const dueDate = dueDateInput.value
        if(text && dueDate){
            const newTask = {
                text,
                dueDate
            }
            addTodo(newTask)
            addTaskInput.value=""
            dueDateInput.value = ""
        }
    }
    todoForm.addEventListener("submit", handleAddTask)
}


document.addEventListener('DOMContentLoaded',todo)