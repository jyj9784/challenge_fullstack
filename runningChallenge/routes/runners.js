const express = require('express');
const router = express.Router();
const runnersController = require('../controller/runnersController');

router.get('/', runnersController.list);
router.get('/:id', runnersController.show);
router.post('/', runnersController.create);
router.put('/:id', runnersController.update);
router.delete('/:id', runnersController.delete);
router.post('/:id/updatePoints', runnersController.updatePoints);

module.exports = router;
