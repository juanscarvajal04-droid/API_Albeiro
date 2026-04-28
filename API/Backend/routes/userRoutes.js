const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /api/users:
 * get:
 * summary: Obtener todos los usuarios
 * tags: [Users]
 * responses:
 * 200:
 * description: Lista de usuarios
 */
router.get('/', userController.getAllUsers);

module.exports = router;