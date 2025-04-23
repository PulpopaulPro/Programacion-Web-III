const db = require('../db');

// READ
exports.getAll = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// CREATE
exports.create = (req, res) => {
    console.log("jp");
  const { name } = req.body;
  db.query('INSERT INTO users (name) VALUES (?)', [name], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, name });
  });
};

// UPDATE
exports.update = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  db.query('UPDATE users SET name = ? WHERE id = ?', [name, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id, name });
  });
};

// DELETE
exports.remove = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Usuario eliminado', id });
  });
};
