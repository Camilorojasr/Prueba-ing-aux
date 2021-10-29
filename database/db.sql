-- create DB
CREATE database crudnodejsmysql;

 -- USING DB
 use crudnodejsmysql;

 create table usuario (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (50) NOT NULL,
    ubicacion VARCHAR (50) NOT NULL
 );
 create table inventario(

   cod_inv INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   referencia VARCHAR (50) NOT NULL,
   elemento VARCHAR (100) NOT NULL

 );

 -- SHOW ALL TABLES
 SHOW TABLES;

 describe usuario;

 describe inventario;
