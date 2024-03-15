const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authenticateToken = require("../middleware/authenticateToken");
//create a new task
router.post("/", authenticateToken, taskController.createTask);

//get all task
router.get("/",authenticateToken, taskController.getAllTasks);

//get by Id
router.get("/:id",authenticateToken, taskController.getTaskById);

//update
router.put("/:id",authenticateToken, taskController.updateTask)

//delete 
router.delete("/:id",authenticateToken, taskController.deleteTask)


module.exports = router;