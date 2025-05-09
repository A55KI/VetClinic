const fs = require('fs');
const path = require('path');
const DB_PATH = path.join(__dirname, '../data/db.json');

function read()  { return JSON.parse(fs.readFileSync(DB_PATH)); }
function write(d){ fs.writeFileSync(DB_PATH, JSON.stringify(d, null, 2)); }

module.exports = { read, write };