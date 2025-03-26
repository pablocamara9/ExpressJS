const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController.js');

// FindAll
router.get('/', estudiantesController.findAll);

// Add
router.post('/', estudiantesController.add);

router.route("/:id")
    .get(estudiantesController.findById)
    .put(estudiantesController.edit)
    .delete(estudiantesController.delete)    

module.exports = router;