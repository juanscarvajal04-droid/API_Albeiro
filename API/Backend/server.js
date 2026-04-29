const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); 
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // 1. Agregamos esta línea

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes); // 2. Agregamos esta línea para los productos

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); 

module.exports = app;

