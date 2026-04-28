const jwt = require('jsonwebtoken');
const { secretOrKey } = require('../config/keys');

/**
 * Middleware para verificar si el usuario tiene un token válido
 */
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: "No se proporcionó un token." });
    }

    // El token suele venir como "Bearer XXXX...", esto quita el "Bearer "
    const bearerToken = token.split(' ')[1];

    jwt.verify(bearerToken, secretOrKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token inválido o expirado." });
        }
        req.user = decoded; // Guardamos los datos del usuario en la petición
        next();
    });
};

/**
 * Middleware para autorizar por roles (ej: admin, seller)
 */
const authorizeRoles = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "No tienes permiso para acceder a esta ruta." });
        }
        next();
    };
};

module.exports = { verifyToken, authorizeRoles };