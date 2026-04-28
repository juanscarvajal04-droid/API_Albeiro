const db = require('../config/db');

const User = {
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);
    },
    getByEmail: (email, callback) => {
        // Buscamos al usuario y su rol
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results[0]);
        });
    }
};

module.exports = User;