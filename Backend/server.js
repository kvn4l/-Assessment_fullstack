const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());     
app.use(bodyParser.json());

// In-memory task storage
let tasks = [];

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, '../frontend')));

// POST endpoint to add a task
app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

// GET endpoint to fetch all tasks
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
