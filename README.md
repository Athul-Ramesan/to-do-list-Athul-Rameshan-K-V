# to-do-list-Athul-Rameshan-K-V
A task management application built with  HTML and JavaScript. Features include task creation, updation, filters, and persistent storage.

A feature-rich, responsive to-do list application built with HTML, CSS, and JavaScript. This application helps users manage their tasks efficiently with date-based organization, local storage persistence, and search functionality.

## Features

### Task Management
- Create tasks with descriptions, due dates, and times
- Edit existing tasks
- Delete tasks
- Tasks persist through browser refreshes using local storage
- Automatic task organization by date
- Tasks are categorized as "Due" or "Upcoming" based on current date

### Search
- Real-time search functionality
- Case-insensitive search

### User Interface
- Clean, modern design with intuitive controls
- Responsive layout
- Date and time picker integration
- Task categorization by date
- Visual feedback for user actions

### Task Display
- Tasks grouped by date
- Clear distinction between due and upcoming tasks
- Time display in 12-hour format (HH:MM AM/PM)
- Empty state handling

## Technical Specifications

### Styling
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Color Scheme:
  - Primary Background: #f7f8fc
  - Header Background: #3f51b5
  - Primary Text: #333
  - Task Day Background: #e8f5e9

### Button Colors
- Add Task Button: #4caf50 (Hover: #388e3c)
- Edit Button: #ffca28 (Hover: #fbc02d)
- Delete Button: #f44336 (Hover: #d32f2f)

### Local Storage
- Tasks are stored in browser's local storage
- Data persists across page refreshes
- Automatic loading of saved tasks on page load

## Project Structure

│
├── utils/                  
│   ├── eventHandlers.js    
│   ├── storage.js         
│   ├── taskDisplay.js     
│   └── todoUtils.js       
│
├── .gitignore            
├── index.html            
├── README.md             
├── script.js             
└── styles.css        

## Getting Started

1. Clone the repository or download the files
2. Open `index.html` in a modern web browser
3. Start adding tasks!

## Usage

1. **Adding Tasks**
   - Enter task description in the input field
   - Select due date and time
   - Click "Add Task" button

2. **Managing Tasks**
   - Edit: Click "Edit" button next to task
   - Delete: Click "Delete" button next to task
   - Search: Type in search bar to filter tasks

3. **Viewing Tasks**
   - Tasks are automatically organized by date
   - "Today" section shows current day's tasks
   - Tasks are separated into "Due" and "Upcoming" categories



