const express = require("express");
const router = express.Router();

const { createTask, getUserTasks, updateTask, getSingleTask } = require("../controllers/taskController");

// Task routes
router.post('/create-task',createTask);
router.get('/my-tasks/:userId', getUserTasks);
router.get("/getSingleTask/:taskId", getSingleTask)
 router.put('/update-task/:taskId', updateTask);

module.exports = router