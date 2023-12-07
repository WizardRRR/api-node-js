import express from 'express'
import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const app = express()
const puerto = 3123

console.log(process.env.DB_HOST)

// Configuración de la conexión a la base de datos
const conexionBD = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

conexionBD.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos establecida');
  }
});

app.get('/mascotas', (req, res) => {
  const consulta = 'SELECT * FROM mascotas';
  conexionBD.query(consulta, (err, resultados) => {
    if (err) {
      console.error('Error al obtener mascotas:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      res.json(resultados);
    }
  });
});

// Inicia el servidor
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});