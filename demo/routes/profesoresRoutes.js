const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController.js');

// FindAll
router.get('/', profesoresController.findAll);

// Add
router.post('/', profesoresController.add);

router.route("/:id")
    .get(profesoresController.findById)
    .put(profesoresController.edit)
    .delete(profesoresController.delete)    

module.exports = router;