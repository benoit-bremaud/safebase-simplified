import { connectToDatabase } from './db.js';
import fastify from 'fastify';
import { registerRoutes } from './routes/index.js';
import { scheduleAutomaticBackup } from './services/backupScheduler.js';

// Création de l'instance Fastify
const app = fastify({ logger: true });

// Connexion à la base de données
async function startServer() {
  try {
    const dbconnection = await connectToDatabase();
    console.log('Connexion à la base de données MySQL établie avec succès !');

    // Partager la connexion MySQL avec Fastify
    app.decorate('db', dbconnection);

    // Enregistrement des routes dans l'instance Fastify
    registerRoutes(app);

    // Planifier la sauvegarde automatique
    scheduleAutomaticBackup();

    // Démarrage du serveur Fastify
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server Fastify démarré sur le port 3000');
  } catch (error) {
    console.error('Error starting server: ', error);
    process.exit(1);
  }
}

// Démarrage du serveur
startServer();