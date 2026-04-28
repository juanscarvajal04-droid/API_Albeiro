const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API_ALBEIRO - Gestión de Usuarios',
            version: '1.0.0',
            description: 'API para el proyecto de ADSO en el SENA',
            contact: {
                name: 'Juan Sebastian Carvajal',
            },
        },
        // Servers va aquí afuera de info
        servers: [
            {
                url: 'http://10.1.196.248:3000',
                description: 'Servidor Local (SENA)'
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
    // Asegúrate de que la ruta sea exacta desde la raíz de Backend
    // Busca esta línea y déjala así (ruta directa al archivo):
    // En config/swagger.js
    apis: [],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
module.exports = swaggerSpec;