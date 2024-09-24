import { createPool } from 'mysql2/promise';

// Connexion à MySQL
const pool = createPool({
  host: 'db',  // Nom du service Docker pour MySQL
  user: 'root',
  password: 'toor',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
