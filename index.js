import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

//verificar conexio a la db
db.authenticate()
    .then( () => console.log('Base de datos concectada'))
    .catch( error => console.log(error));

//definir puerto y verficar que funcione el servidor
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor ${port} funcionando...`);
})

//Habilitar Pug
app.set('view engine', 'pug');

//definir la carpeta publica
app.use(express.static('public'));

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }))

//actualiza el año en el footer
app.use( (req, res, next) => {
    const year = new Date();

    //guarda la variable en el locals de express-de manera global por asi decirlo
    res.locals.yearNow = year.getFullYear();
    
    res.locals.siteName = 'Agencia de viajes';

    next();
})

//agregar router
app.use('/', router);