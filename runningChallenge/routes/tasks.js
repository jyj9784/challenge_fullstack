// routes/tasks.js
const express = require('express');
const tasksController = require('../controller/taskController');
const router = express.Router();

router.get('/', tasksController.list);
router.get('/:id', tasksController.show);
router.post('/', tasksController.create);
router.put('/:id', tasksController.update);
router.delete('/:id', tasksController.delete);

module.exports = router;
