const db = require('../database/conexion.js');

class ProfesoresController{
    constructor() {}

    findAll(req, res) {
        try {
            db.query(` SELECT * FROM profesores;`, 
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
            db.query(` SELECT * FROM profesores WHERE id = ?;`, [id],
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
            const { dni, nombre, apellido, email, profesion, telefono } = req.body;
            db.query(` INSERT INTO profesores
                (id, dni, nombre, apellido, email, profesion, telefono)
                VALUES(null, ?, ?, ?, ?, ?, ?);`, 
            [dni, nombre, apellido, email, profesion, telefono], (err, rows) => {
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
            const { dni, nombre, apellido, email, profesion, telefono } = req.body;
            db.query(`UPDATE profesores
                SET dni=?, nombre=?, apellido=?, email=?, profesion=?, telefono=?
                WHERE id=?;`, 
            [dni, nombre, apellido, email, profesion, telefono, id], (err, rows) => {
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
            db.query(`DELETE FROM profesores WHERE id = ?;`, 
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

module.exports = new ProfesoresController();