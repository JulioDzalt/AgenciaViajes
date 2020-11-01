import {ViajeDAO} from "../models/Viaje.js" 
import {TestimoniosDAO} from "../models/Testimonios.js" 

const inicioControler = async (request,response) =>{
    //response.send("<h2>Holi desde Node.js</h2>")
    try {
        const listaViajes = await ViajeDAO.findAll({limit:3}) //Regresa una promesa y un array de objetos tipo ViajeDAO
        
        response.render("inicio.pug", {
            nombrePagina : "Inicio",
            clase: "home",
            listaViajes: listaViajes
        })
    } catch (error) {
        
    }
}



const viajesControler = async (request,response) =>{
    //Consultamso la bd
    const listaViajes = await ViajeDAO.findAll() //Regresa una promesa y un array de objetos tipo ViajeDAO
    //console.log(listaViajes)
    response.render("viajes.pug", {
        nombrePagina : "Viajes",
        listaViajes : listaViajes
    })
}

const detalleViajeControler = async (request,response) =>{
    //Consultamso la bd
    const slugBusqueda = request.params.slug
    console.log("slugBusqueda: ",slugBusqueda)
    try {
        const viajeQuery = await ViajeDAO.findOne({where:{slug:slugBusqueda}}) //Regresa una promesa y un array de objetos tipo ViajeDAO
        //console.log("Resultado: ",viajeQuery)

        //Copiamos la parte del viajeQuery que continee los valores de la BD
                /* ES mucha chamba esto xd
                id: viajes.dataValues.id
                titulo: viajes.dataValues.titulo
                precio: viajes.dataValues.precio
                fecha_ida: viajes.dataValues.fecha_ida
                fecha_vuelta: viajes.dataValues.fecha_vuelta
                imagen: viajes.dataValues.imagen
                descripcion: viajes.dataValues.descripcion
                disponibles: viajes.dataValues.disponibles
                */
        const viajeResultado = Object.assign({},viajeQuery.dataValues)
        //console.log(viajeResultado)


        
        response.render("detalleViaje.pug", {
            "viajeResultado" : viajeResultado,
        })

    } catch (error) {
        console.log(error)
    }
}

const guardarTestimonial = async (request,response) =>{
    //Validamso el formularios
    console.log("REQUEST.BODY: ",request.body)

    const {nombre, email, comentarios} = request.body
    const errores = []
    if (nombre.trim() ===""){ //trim quieta espacions en blanco adelante y atras de una cadena
        errores.push({mensaje: "Nombre vacio"})
    }
    if (email.trim() ===""){ //trim quieta espacions en blanco adelante y atras de una cadena
        errores.push({mensaje: "Correo vacio"})
    }
    if (comentarios.trim() ===""){ //trim quieta espacions en blanco adelante y atras de una cadena
        errores.push({mensaje: "Comentarios vacio"})
    }
    //Si hya errotes regresamos a testimoniales y les manamso los errores
    if (errores.length > 0){
        response.render("testimoniales.pug", {
            nombrePagina : "Testimoniales",
            errores : errores,
            nombre: nombre,
            email: email,
            comentarios: comentarios
        })
    }else{

        try {
            await TestimoniosDAO.create({
                nombre: nombre,
                email: email,
                comentarios: comentarios
                })

            const listaTestimonios = await TestimoniosDAO.findAll() //Regresa una promesa y un array de objetos tipo ViajeDAO
            //response.redirect("/testimoniales/")
            response.render("testimoniales.pug", {
                nombrePagina : "Testimoniales",
                mensajes : ["Testimonio agregado", "Gracias"],
                listaTestimonios : listaTestimonios
            })
        } catch (error) {
            
        }
    }
}
const obtenerTestimoniales = async (request,response) =>{
    try {
        //Consultamso la bd
        const listaTestimonios = await TestimoniosDAO.findAll() //Regresa una promesa y un array de objetos tipo ViajeDAO
        //console.log(listaViajes)
        response.render("testimoniales.pug", {
            nombrePagina : "Testimoniales",
            listaTestimonios : listaTestimonios
        })
    } catch (error) {
        console.log(error)
        response.render("testimoniales.pug", {
            nombrePagina : "Testimoniales"
        })
    }
}



export {
    inicioControler,
    viajesControler,
    detalleViajeControler,
    guardarTestimonial,
    obtenerTestimoniales

}