const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para traer productos (la que ya te funciona)
router.get('/', productController.getAllProducts);

// 🆕 Ruta para CREAR productos (esta es la que te falta)
router.post('/', productController.createProduct);

module.exports = router;