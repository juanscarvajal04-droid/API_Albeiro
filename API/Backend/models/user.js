const db = require('../config/config');

const User = {
    getAll: (callback) => {
        return db.query('SELECT * FROM users', callback);
    },
    // Aquí irían el resto de funciones como create, findById, etc.
};

module.exports = User;