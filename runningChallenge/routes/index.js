const express = require('express');
const router = express.Router();

const runnersRouter = require('./runners');
const teamsRouter = require('./teams');
const tasksRouter = require('./tasks');

router.use('/runners', runnersRouter);
router.use('/teams', teamsRouter);
router.use('/tasks', tasksRouter);

module.exports = router;
