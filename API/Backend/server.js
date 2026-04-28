const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); // El archivo que creamos antes
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/users', userRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;

// Cambia esto:
console.log('📚 Swagger disponible en: http://192.168.1.77:3000/api-docs');

// Por esto (más pro):
const IP_ADDRESS = '10.1.196.248'; 
console.log(`📚 Swagger disponible en: http://${IP_ADDRESS}:3000/api-docs`);