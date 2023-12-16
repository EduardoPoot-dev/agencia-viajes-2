import express from "express";
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetallesViaje,
    paginaTestimoniales
} from '../controllers/paginasController.js';
import {
    guardarTestimoniales
} from '../controllers/testimonialController.js'

//se crea el router
const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetallesViaje);//permite la entrada dinamica hacia los diferentes destinos a viajar
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);


export default router;