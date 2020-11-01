import Sequelize from "sequelize";
import db from "../config/db.js"


//Definimos las propuedades del objeto bas epra las consulta

export const TestimoniosDAO = db.define("Testimonios", {
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