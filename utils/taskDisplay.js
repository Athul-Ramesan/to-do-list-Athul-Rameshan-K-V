
function displayTasks(allTasks = getTasks()) {
    const dueTaskListForDisplay = document.getElementById("due-task-list")
    const upComingTaskListForDisplay = document.getElementById("upcoming-task-list")
    const todayTaskListForDisplay = document.getElementById("today-task-list")

    
    dueTaskListForDisplay.innerHTML = ""
    upComingTaskListForDisplay.innerHTML = ""

    const currentDate = new Date().toISOString().split("T")[0];

    allTasks.forEach((task, index) => {
        const formattedDateTime = formatDateAndTime(task.dueDate)
       const taskDate = task.dueDate.split("T")[0]; 
        const listEachItem = document.createElement("li")

        listEachItem.innerHTML = `
        ${taskDate === currentDate ? "<span>Today</span>" : `<span>${formattedDateTime.formattedDate}</span>`}
        <br>
        <div id="task-item-${task.id}">
        <span id="task-text-${task.id}">${task.text}</span> <span>${formattedDateTime.formattedTime}</span>
        <br>
        <button class="edit-btn" onclick="handleEditTask(${task.id})">Edit</button>
        <button class="delete-btn" onclick="handleDeleteTask(${task.id})">Delete</button>
        </div>
        `;

        if (taskDate < currentDate) {
            dueTaskListForDisplay.appendChild(listEachItem);
        } else if (taskDate > currentDate) {
            upComingTaskListForDisplay.appendChild(listEachItem);
        } else {
            todayTaskListForDisplay.appendChild(listEachItem)
        }
    })
}

function formatDateAndTime(date) {
    const dateObj = new Date(date)
    const timeInHours = dateObj.getHours()
    const timeInMinutes = dateObj.getMinutes().toString().padStart(2, 0)
    const timePeriod = timeInHours >= 12 ? "AM" : "PM"

    return {
        formattedDate: `${dateObj.toLocaleDateString("en-GB")}`,
        formattedTime: `${timeInHours % 12 || 12}: ${timeInMinutes} ${timePeriod}`
    }
}