const app = require('./server');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const IP_ADDRESS = '10.1.196.248'; // Tu IP del SENA

app.listen(PORT, '0.0.0.0', () => {
    console.log('---------------------------------------------------------');
    console.log(`Servidor corriendo en: http://${IP_ADDRESS}:${PORT}`);
    console.log(`Swagger disponible en: http://${IP_ADDRESS}:${PORT}/api-docs`);
    console.log('---------------------------------------------------------');
});