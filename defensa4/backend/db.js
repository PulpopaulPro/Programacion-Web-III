// backend/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // o el usuario que creaste
  password: '', // tu contraseña aquí ('' si no tiene)
  database: 'crud_db' // la base de datos que creaste
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a MySQL:', err);
    return;
  }
  console.log('✅ Conectado a MySQL correctamente');
});

module.exports = connection;
