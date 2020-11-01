

//LA FORMA ANTIGUA, COMONJS
/*
//importamos expres
const express = require("express")

//Creamos nuestro serviro
const app = express();

//Creamos un puerto, que lotome de la variable de entorno o el 4000
const puerto = process.env.PORT || 4000

//Ponemos en escuha el servidor
app.listen(puerto, () => {
    console.log(`Example app listening at http://localhost:${puerto}`)
})
*/


//LA FORMA NUEVA, IMPORT MODULS
//importamos expres
import express from "express"
import router from "./routes/index.js" //Importamos nuestro router
import db from "./config/db.js" //importamso el sequelize para usar la base de datos
//Importmaos nuestars variables de entorno
import dotenv from 'dotenv'
dotenv.config({path:"variables.env"})

process.env.DB_NOMBRE



//Creamos nuestro serviro, solo puede existir una 
const app = express();

//Creamos un puerto, que lotome de la variable de entorno o el 4000
const host = process.env.HOST || "0.0.0.0" //heroku se da cuenta y asigna una ip valida
const puerto = process.env.PORT || 4000 //Esta heroku la llena solito xd

//Nos Conectamos a la base de datos
db.authenticate()
    .then(() => console.log("Base de datos conectada"))
    .catch( error => console.log("Error al conectar la base de datos", error))

//Enlazamos PUG, tempplateEngine
app.set("view engine", "pug")

//uso del middleware para mandar uan variable a todos lados, si es como supervairbaleglobal
app.use((request, response, next)=>{
    let fecha = new Date()
    response.locals.anio = fecha.getFullYear()
    response.locals.nombreSitio = "Agencia de viajes"
    //console.log(response.locals)
    return next() //Continua el flujo
})

//Definimos la ruta de lso archivos esatticos
app.use(express.static("public"))

//Agreagamos el body parser para poder cacahrt las variabes de los fomrularios
app.use(express.urlencoded({extended:true}))

//RUTAS, enlazamso nuestars rutas al servidor
app.use("/", router)

//Ponemos en escuha el servidor
app.listen(puerto, host, () => {
    console.log(`Example app listening at http://localhost:${puerto}`)
})


