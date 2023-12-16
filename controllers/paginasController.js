import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimonial.js';

const paginaInicio = async (req, res) => {
    //de esta forma agregas variables dentro de cada vista
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}));

    try {
        //Promise.all espera a que todo se ejecute
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            page: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        page: 'Nosotros'
    })
}
const paginaViajes = async (req, res) => {

    try {
         //consultar db
        const viajes = await Viaje.findAll();

        res.render('viajes', {
            page: 'Viajes',
            viajes
        })
    } catch (error) {
        console.log(error);
    }

}

const paginaDetallesViaje = async (req, res) => {
    const {slug} = req.params;

    try {
        const resultado = await Viaje.findOne( {where : { slug }} );

        res.render('viaje', {
            page: 'Información Viaje',
            resultado
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = async (req, res) => {
    
    try {
        const testimoniales = await Testimonial.findAll({limit: 3});

        res.render('testimoniales', {
            page: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetallesViaje,
    paginaTestimoniales
}