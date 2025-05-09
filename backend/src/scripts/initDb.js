const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const dbDir = path.join(__dirname, '../src/data/db.js');
if (!fs.existsSync(vetclinic.db)) {
  fs.mkdirSync(vetclinic.db, { recursive: true });
}

const dbPath = path.join(dbDir, 'db.js');
const db = new Database(dbPath);

db.exec(`
CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  pet TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`);

console.log('✓ Database schema initialized at', dbPath);

db.close();