import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

//configuramos nuestra base de datos
const db = new Sequelize(process.env.DATABASE_URL, {
    pool: {
        max: 2,
        min: 1,
        acquire: 30000,
        idle: 10000
    }
}

export default db;
