import {Testimonial} from '../models/Testimonial.js';

const guardarTestimoniales = async (req, res) => {
    
    //req.body ahi se guarda todo lo que ingresa el usuario
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(!nombre) {
        errores.push({'mensaje': 'Agrega tu nombre'});
    }

    if(!correo) {
        errores.push({'mensaje': 'Agrega tu correo'});
    }

    if(!mensaje) {
        errores.push({'mensaje': 'Agrega tu mensaje'});
    }

    if(errores.length) {
        const testimoniales = await Testimonial.findAll({limit: 3});

        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales,
            page: 'Testimoniales'
        })
    } else {
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimoniales
}