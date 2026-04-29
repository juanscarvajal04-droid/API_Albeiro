const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { verifyToken, authorizeRoles } = require('../middlewares/authmiddleware');
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos] 
 *     responses:
 *      200:
 *     description: Lista obtenida
 */
router.get('/', productController.getAllProducts);
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Products]
 *     parameters:
 *        in: path
 *        name: id
 *        required: true
 *        schema:
 *        type: string
 *        responses:
 *          200:
 *     description: Procucto encontrado
 */
router.get('/:id', productController.getProductById);
/**
 * @swagger
 * /api/products/create:
 *  post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto creado
 */
router.post('/create', verifyToken, authorizeRoles(['admin', 'seller']), productController.createProduct);

/**
 * @swagger
 * /api/products/update/{id}:
 *  put:
 *     summary: Actualizar un producto
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *               description:
 *                 type: string
 *                 price:
 *                   type: number
 *                 stock:
 *                   type: integer
 *     responses:
 * 200:
 * description: Producto actualizado correctamente
 */

router.put('/update/:id', verifyToken, authorizeRoles(['admin']), productController.updateProduct);
module.exports = router;
