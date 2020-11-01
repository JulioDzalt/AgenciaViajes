import Sequelize from "sequelize";
import db from "../config/db.js"


//Definimos las propuedades del objeto bas epra las consulta

export const ViajeDAO = db.define("viajes", {
    titulo:{
        type: Sequelize.STRING,

    },
    precio:{
        type: Sequelize.STRING,

    },
    fecha_ida:{
        type: Sequelize.STRING,

    },
    fecha_vuelta:{
        type: Sequelize.DATE,

    },
    imagen:{
        type: Sequelize.STRING,

    },
    descripcion:{
        type: Sequelize.STRING,

    },
    disponibles:{
        type: Sequelize.STRING,

    },
    slug:{
        type: Sequelize.STRING,

    },

})