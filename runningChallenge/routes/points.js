// routes/points.js
const express = require('express');
const pointsController = require('../controller/pointController');
const router = express.Router();

router.get('/', pointsController.list);
router.get('/:id', pointsController.show);
router.post('/', pointsController.create);
router.put('/:id', pointsController.update);
router.delete('/:id', pointsController.delete);

module.exports = router;
