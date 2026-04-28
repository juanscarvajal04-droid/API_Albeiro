// Verifica que el nombre del archivo en la carpeta config sea exactamente 'db.js'
const db = require('../config/db'); 

exports.getAllProducts = (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al consultar productos:', err);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
        res.json(results);
    });
};

exports.createProduct = (req, res) => {
    const { name, description, price, stock } = req.body;
    const query = 'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)';
    
    db.query(query, [name, description, price, stock], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Producto creado con éxito', id: result.insertId });
    });
};
// Este es para crear un producto nuevo
exports.createProduct = (req, res) => {
    const { name, description, price, stock } = req.body;
    const query = 'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)';
    
    db.query(query, [name, description, price, stock], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ 
            message: '✅ Producto creado con éxito', 
            id: result.insertId 
        });
    });
};