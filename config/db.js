import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

//configuramos nuestra base de datos
const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestramps: false
    },
    pool: {
        max: 2,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false,
})

// Realiza operaciones con la base de datos
async function performDatabaseOperations() {
    try {
      // Tu lógica para realizar operaciones en la base de datos aquí
      // Por ejemplo, consultar datos
      const users = await sequelize.query('SELECT * FROM users', { type: Sequelize.QueryTypes.SELECT });
      console.log(users);
  
      // Cierra la conexión después de usarla
      await sequelize.close();
      console.log('Conexión cerrada correctamente');
    } catch (error) {
      console.error('Error al realizar operaciones en la base de datos:', error);
    }
  }
  
  // Llama a la función para realizar operaciones en la base de datos
  performDatabaseOperations();

export default db;
