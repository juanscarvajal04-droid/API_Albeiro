const db = require('../config/db'); 

// 1. Obtener todos
exports.getAllProducts = (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// 2. Obtener uno por ID (¡Esta es la que te faltaba!)
exports.getProductById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM products WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Producto no encontrado' });
        res.json(result[0]);
    });
};

// 3. Crear
exports.createProduct = (req, res) => {
    const { name, description, price, stock } = req.body;
    const query = 'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)';
    db.query(query, [name, description, price, stock], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: '✅ Producto creado con éxito', id: result.insertId });
    });
};

// 4. Actualizar
exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;
    const query = 'UPDATE products SET name=?, description=?, price=?, stock=? WHERE id=?';
    db.query(query, [name, description, price, stock, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: '🔄 Producto actualizado' });
    });
};

// 5. Eliminar
exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: '❌ Producto eliminado' });
    });
};