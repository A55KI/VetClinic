const fs = require('fs');
const path = require('path');
const dbFile = path.join(__dirname, '../data/db.json');

function readData() {
  return JSON.parse(fs.readFileSync(dbFile));
}

exports.getClients = (req, res) => {
  const data = readData();
  res.json(data.clients || []);
};

exports.addClient = (req, res) => {
  const data = readData();
  const newClient = req.body;
  data.clients.push(newClient);
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2));
  res.status(201).json(newClient);
};

// TODO: updateClient, deleteClient