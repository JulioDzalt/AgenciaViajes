import Sequelize from "sequelize";
//require('dotenv').config({path:"variables.env"})
//Importmaos nuestars variables de entorno
import dotenv from 'dotenv'
dotenv.config({path:"variables.env"})

process.env.DB_NOMBRE
process.env.DB_USER
process.env.DB_PASS
process.env.DB_HOST
process.env.BD_PORT


/*
const db = new Sequelize("agenciaviajes", "julio", "julio1302", {
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
    define : {
        timestamps: false
    },
    pool :{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});*/

const db = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER , process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    define : {
        timestamps: false
    },
    pool :{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

export default db