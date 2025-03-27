const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController.js');

// FindAll
router.get('/', cursosController.findAll);

// Add
router.post('/', cursosController.add);

// Gestionar la sociación con estudiantes
router.post('/registraEstudiante', cursosController.asociarEstudiante);

router.route("/:id")
    .get(cursosController.findById)
    .put(cursosController.edit)
    .delete(cursosController.delete)    

module.exports = router;