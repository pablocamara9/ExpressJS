const db = require('../database/conexion.js');

class EstudiantesController{
    constructor() {}

    findAll(req, res) {
        try {
            db.query(` SELECT * FROM estudiantes;`, 
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
            db.query(` SELECT * FROM estudiantes WHERE id = ?;`, [id],
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
            const { dni, nombre, apellido, email } = req.body;
            db.query(` INSERT INTO estudiantes
                (id, dni, nombre, apellido, email)
                VALUES(null, ?, ?, ?, ?);`, 
            [dni, nombre, apellido, email], (err, rows) => {
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
            const { dni, nombre, apellido, email } = req.body;
            db.query(`UPDATE estudiantes
                SET dni=?, nombre=?, apellido=?, email=?
                WHERE id=?;`, 
            [dni, nombre, apellido, email, id], (err, rows) => {
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
            db.query(`DELETE FROM estudiantes WHERE id = ?;`, 
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

module.exports = new EstudiantesController();