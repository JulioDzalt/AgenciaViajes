import Sequelize from "sequelize";
import db from "../config/db.js"


//Definimos las propuedades del objeto bas epra las consulta

//export const TestimoniosDAO = db.define("Testimonios", {
export const TestimoniosDAO = db.define("testimonios", { //Porque psql de heroku sollo almacena tbalas en minusculas
    nombre:{
        type: Sequelize.STRING,

    },
    email:{
        type: Sequelize.STRING,
    },
    comentarios:{
        type: Sequelize.STRING,
    }
})