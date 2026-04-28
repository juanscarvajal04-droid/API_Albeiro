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
            servers: [
                {
                    url: 'http://10.1.196.248:3000', // Tu IP del SENA
                    description: 'Servidor Local (SENA)'
                },
            ],
        },
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
    // Ojo: Asegúrate de que la ruta a tus archivos .js sea correcta
    apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
module.exports = swaggerSpec;