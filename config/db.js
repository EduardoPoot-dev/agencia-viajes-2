import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

//configuramos nuestra base de datos
const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestramps: false
    },
    pool: {
        max: 1,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false,
})

export default db;
