import express from "express"
//importamos un archivo que tine controladores
import {inicioControler, viajesControler, detalleViajeControler, guardarTestimonial, obtenerTestimoniales} from "../controllers/InicioControler.js"

const router = express.Router();

//Este callback atiende al peticiones de la url indicada, que sean port GET
router.get("/", inicioControler)

router.get("/contacto", (request,response) =>{
    response.json({
        "nombre": "Julio",
        "edad": 24
    })
})

router.get("/nosotros", (request,response) =>{
    const descripcion  = "Nosotros hacemos viajes a Alemania"
    const costoBase = 100
    response.render("nosotros.pug", {
        nombrePagina : "Nosotros",
        descripcion : descripcion,
        costoBase, costoBase
    })
})

/*
router.get("/viajes", (request,response) =>{
    response.render("viajes.pug", {
        nombrePagina : "Viajes",
    })
})*/

router.get("/viajes", viajesControler)
router.get("/viajes/:slug", detalleViajeControler )

/*
router.get("/testimoniales", (request,response) =>{
    response.render("testimoniales.pug", {
        nombrePagina : "Testimoniales",
    })
})*/
router.get("/testimoniales", obtenerTestimoniales)
router.post("/testimoniales", guardarTestimonial)


export default router