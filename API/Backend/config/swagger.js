const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API_ALBEIRO - Gestión de Usuarios',
            version: '1.0.0',
            description: 'API para el proyecto de ADSO en el SENA con control de Roles',
        },
        servers: [
            {
                url: 'http://10.1.196.248:3000',
                description: 'Servidor Local (SENA)'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    // Esto lee todos los archivos .js dentro de la carpeta routes
    apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
module.exports = swaggerSpec;