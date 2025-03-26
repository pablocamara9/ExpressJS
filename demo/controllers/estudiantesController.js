class EstudiantesController{
    constructor() {}

    findAll(req, res) {
        res.json({msg: 'Consulta estudiantes desde clase'});
    }

    findById(req, res) {
        const { id } = req.params;
        res.json({msg: 'Consulta detalle de estudiante con id ' + id});
    }

    add(req, res) {
        res.json({msg: 'Ingreso de un estudiante'});
    }

    edit(req, res) {
        const { id } = req.params;
        res.json({msg: 'Actualización de estudiante con id ' + id});
    }

    delete(req, res) {
        const { id } = req.params;
        res.json({msg: 'Borrado de estudiante con id ' + id});
    }

}

module.exports = new EstudiantesController();