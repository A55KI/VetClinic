const Client = require('../models/clientModel');   // ← model opisany wcześniej

exports.getAll = (req, res) => res.json(Client.findAll());

exports.getOne = (req, res) => {
  const client = Client.findById(req.params.id);
  if (!client) return res.status(404).json({ error: 'Not found' });
  res.json(client);
};

exports.create = (req, res, next) => {
  try {
    const id = Client.create(req.body);
    res.status(201).json({ id, ...req.body });
  } catch (err) { next(err); }
};

exports.update = (req, res, next) => {
  try {
    const ok = Client.update(req.params.id, req.body);
    if (!ok) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'updated' });
  } catch (err) { next(err); }
};

exports.remove = (req, res) => {
  const ok = Client.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
};