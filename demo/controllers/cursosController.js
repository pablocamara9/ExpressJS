const db = require('../database/conexion.js');

class CursosController{
    constructor() {}

    findAll(req, res) {
        try {
            db.query(` SELECT * FROM cursos;`, 
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err);
                    }
                    res.status(201).json(rows);
                });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }

    findById(req, res) {
        const { id } = req.params;
        try {
            db.query(` SELECT * FROM cursos WHERE id = ?;`, [id],
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err);
                    }
                    res.status(201).json(rows);
                });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }

    add(req, res) {
        try {
            const { nombre, descripcion, profesor_id } = req.body;
            db.query(` INSERT INTO cursos
                (id, nombre, descripcion, profesor_id)
                VALUES(null, ?, ?, ?);`, 
            [nombre, descripcion, profesor_id], (err, rows) => {
                if(err) {
                    res.status(400).send(err);
                } else {
                    res.status(201).json({ respuesta: 'Registro creado con éxito' });
                }
            });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }

    edit(req, res) {
        const { id } = req.params;
        try {
            const { nombre, descripcion, profesor_id } = req.body;
            db.query(`UPDATE cursos
                SET nombre=?, descripcion=?, profesor_id=?
                WHERE id=?;`, 
            [nombre, descripcion, profesor_id, id], (err, rows) => {
                if(err) {
                    res.status(400).send(err);
                }
                res.status(201).json({ respuesta: 'Registro actualizado con éxito' });
            });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }

    delete(req, res) {
        const { id } = req.params;
        try {
            db.query(`DELETE FROM cursos WHERE id = ?;`, 
            [id], (err, rows) => {
                if(err) {
                    res.status(400).send(err);
                }
                res.status(201).json({ respuesta: 'Registro eliminado con éxito' });
            });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }

}

module.exports = new CursosController();