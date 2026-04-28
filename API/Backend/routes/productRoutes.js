const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { verifyToken, authorizeRoles } = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /api/products:
 * get:
 * summary: Obtener todos los productos
 * tags: [Productos]
 * responses:
 * 200:
 * description: OK
 * post:
 * summary: Crear producto (Solo Admin/Seller)
 * tags: [Productos]
 * security:
 * - bearerAuth: []
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * name:
 * type: string
 * description:
 * type: string
 * price:
 * type: number
 * stock:
 * type: number
 * responses:
 * 201:
 * description: Creado
 * 403:
 * description: No autorizado
 */

router.get('/', productController.getAllProducts);
router.post('/', verifyToken, authorizeRoles(['admin', 'seller']), productController.createProduct);

module.exports = router;