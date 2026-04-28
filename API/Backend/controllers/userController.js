const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secretOrKey } = require('../config/keys');

// Traer todos (el que ya tienes)
exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// --- EL LOGIN QUE TE FALTA ---
exports.login = (req, res) => {
    const { email, password } = req.body;

    User.getByEmail(email, (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

        // Aquí comparas la contraseña (puedes usar bcrypt.compare después)
        if (password === user.password) {
            // AQUÍ ESTÁ EL TRUCO: Metemos el rol en el token
            const payload = { 
                id: user.id, 
                role: user.role // 👈 Esto es lo que lee tu authMiddleware
            };

            const token = jwt.sign(payload, secretOrKey, { expiresIn: '8h' });

            res.json({
                success: true,
                token: `Bearer ${token}`,
                user: { id: user.id, name: user.name, role: user.role }
            });
        } else {
            res.status(401).json({ message: "Contraseña incorrecta" });
        }
    });
};