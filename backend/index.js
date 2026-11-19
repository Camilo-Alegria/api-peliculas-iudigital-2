require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { getConnection } = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

// Conectar a la Base de Datos
getConnection();

// Middlewares
app.use(cors()); // Habilita la comunicación entre el Front-End (React) y este Back-End
app.use(express.json()); // Middleware para leer datos JSON en las peticiones HTTP

// Ruta raíz de verificación rápida en el navegador
app.get('/', (req, res) => {
  res.json({ ok: true, mensaje: 'API PELI - IU Digital funcionando en la nube' });
});

// Declaración de Rutas de la API (con el prefijo /api)
app.use('/api/genero', require('./routes/generoRoute'));
app.use('/api/director', require('./routes/directorRoute'));
app.use('/api/productora', require('./routes/productoraRoute'));
app.use('/api/tipo', require('./routes/tipoRoute'));
app.use('/api/media', require('./routes/mediaRoute'));

// Servidor escuchando en 0.0.0.0 para Render
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});