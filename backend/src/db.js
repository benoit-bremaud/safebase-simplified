import mysql from 'mysql2/promise';

// Connexion à MySQL
export async function connectToDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        console.log('Connexion à la base de données');
        return connection; // Retourne la connexion à la base de données
    } catch (error) {
        console.error('Error connecting to the database: ', error);
        throw error;
    }
}
