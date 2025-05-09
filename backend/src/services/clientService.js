const Client = require('../models/clientModel');

const validate = data => {
  if (!data.name || !data.phone) throw new Error('name & phone required');
};

exports.getAll = () => Client.findAll();

exports.getById = id => Client.findById(id);

exports.create = data => {
  validate(data);
  const id = Client.create(data);
  return { id, ...data };
};

exports.update = (id, data) => {
  validate(data);
  return Client.update(id, data);
};

exports.remove = id => Client.remove(id);