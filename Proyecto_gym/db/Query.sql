CREATE DATABASE db_gym
USE db_gym


CREATE TABLE usuario
(
	id INT PRIMARY KEY,
	correo VARCHAR(100),
	usuario VARCHAR(100),
	contrasena VARCHAR(100),
	sede INT, 
	rol INT 
)

INSERT INTO usuario VALUES(1,'admin@admin.com','admin','admin',1,1)



