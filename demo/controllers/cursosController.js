const db = require('../database/conexion.js');

class CursosController{
    constructor() {}

    findAll(req, res) {
        res.json({msg: 'Consulta cursos desde clase'});
    }

    findById(req, res) {
        const { id } = req.params;
        res.json({msg: 'Consulta detalle de curso con id ' + id});
    }

    add(req, res) {
        res.json({msg: 'Ingreso de un curso'});
    }

    edit(req, res) {
        const { id } = req.params;
        res.json({msg: 'Actualización de curso con id ' + id});
    }

    delete(req, res) {
        const { id } = req.params;
        res.json({msg: 'Borrado de curso con id ' + id});
    }

}

module.exports = new CursosController();