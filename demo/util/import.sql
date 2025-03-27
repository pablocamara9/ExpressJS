DROP TABLE IF EXISTS cursos_estudiantes CASCADE;
DROP TABLE IF EXISTS estudiantes CASCADE;
DROP TABLE IF EXISTS profesores CASCADE;
DROP TABLE IF EXISTS cursos CASCADE;


CREATE TABLE estudiantes (
	id int auto_increment,
	dni varchar(64),
	nombre varchar(64),
	apellido varchar(64),
	email varchar(128),
	primary key (id)
);

CREATE TABLE profesores (
	id int auto_increment,
	dni varchar(64),
	nombre varchar(64),
	apellido varchar(64),
	email varchar(128),
	profesion varchar(128),
	telefono varchar(64),
	primary key (id)
);

CREATE TABLE cursos (
	id int auto_increment,
	nombre varchar(64),
	descripcion text,
	profesor_id int,
	primary key (id)
);

ALTER TABLE cursos.cursos
	ADD CONSTRAINT cursos_profesores_FK 
	FOREIGN KEY (profesor_id) 
	REFERENCES cursos.profesores(id);

CREATE TABLE cursos_estudiantes(
	curso_id int,
	estudiante_id int,
	PRIMARY KEY(curso_id, estudiante_id)
);

ALTER TABLE cursos.cursos_estudiantes
	ADD CONSTRAINT cursos_estudiantes_cursos_FK 
	FOREIGN KEY (curso_id) 
	REFERENCES cursos.cursos(id);

ALTER TABLE cursos.cursos_estudiantes
	ADD CONSTRAINT cursos_estudiantes_estudiantes_FK 
	FOREIGN KEY (estudiante_id) 
	REFERENCES cursos.estudiantes(id);






