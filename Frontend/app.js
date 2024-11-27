const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Fetch tasks from the backend and display them
async function fetchTasks() {
  const response = await fetch('http://localhost:3000/tasks');
  const tasks = await response.json();
  
  taskList.innerHTML = ''; // Clear the current list
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.name;
    taskList.appendChild(li);
  });
}

// Handle task form submission
taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const taskName = taskInput.value;
  if (taskName) {
    const task = { name: taskName };

    // POST request to add task
    await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    taskInput.value = ''; // Clear input field

    // Fetch and display updated task list
    fetchTasks();
  }
});

// Initial task fetch
fetchTasks();
