// routes/teams.js
const express = require('express');
const teamsController = require('../controller/teamController');
const router = express.Router();

router.get('/', teamsController.list);
router.get('/:id', teamsController.show);
router.post('/', teamsController.create);
router.put('/:id', teamsController.update);
router.delete('/:id', teamsController.delete);

module.exports = router;
