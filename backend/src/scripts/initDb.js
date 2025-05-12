const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

// katalog: backend/src/data
const dbDir = path.join(__dirname, '../data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// plik bazy
const dbPath = path.join(dbDir, 'vetclinic.db');
const db = new Database(dbPath);

// schema – tabela clients
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