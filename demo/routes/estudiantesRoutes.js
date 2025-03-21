const express = require('express');
const router = express.Router();

// FindAll
router.get('/', (req, res) => {
    res.json({msg: 'Consulta estudiantes'});
});

// FindById
router.get('/:id', (req, res) => {
    res.json({msg: 'Consulta un estudiante'});
});

// Add
router.post('/', (req, res) => {
    res.json({msg: 'Ingreso de estudiantes'});
});

// Edit
router.put('/:id', (req, res) => {
    res.json({msg: 'Actualización estudiantes'});
});

// Delete
router.delete('/:id', (req, res) => {
    res.json({msg: 'Borrado de estudiantes'});
});

module.exports = router;