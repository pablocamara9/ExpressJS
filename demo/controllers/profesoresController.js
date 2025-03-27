const db = require('../database/conexion.js');

class ProfesoresController{
    constructor() {}

    findAll(req, res) {
        res.json({msg: 'Consulta profesores desde clase'});
    }

    findById(req, res) {
        const { id } = req.params;
        res.json({msg: 'Consulta detalle de profesor con id ' + id});
    }

    add(req, res) {
        res.json({msg: 'Ingreso de un profesor'});
    }

    edit(req, res) {
        const { id } = req.params;
        res.json({msg: 'Actualización de profesor con id ' + id});
    }

    delete(req, res) {
        const { id } = req.params;
        res.json({msg: 'Borrado de profesor con id ' + id});
    }

}

module.exports = new ProfesoresController();