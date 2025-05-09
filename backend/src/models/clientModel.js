const db = require('../data/db');

exports.findAll = () => db.prepare('SELECT * FROM clients').all();

exports.findById = id =>
  db.prepare('SELECT * FROM clients WHERE id = ?').get(id);

exports.create = ({ name, phone, pet }) => {
  const stmt = db.prepare(
    'INSERT INTO clients (name, phone, pet) VALUES (?, ?, ?)'
  );
  return stmt.run(name, phone, pet).lastInsertRowid;
};

exports.update = (id, { name, phone, pet }) =>
  db
    .prepare('UPDATE clients SET name = ?, phone = ?, pet = ? WHERE id = ?')
    .run(name, phone, pet, id).changes;

exports.remove = id =>
  db.prepare('DELETE FROM clients WHERE id = ?').run(id).changes;