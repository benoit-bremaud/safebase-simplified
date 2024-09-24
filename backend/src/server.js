import { exec } from 'child_process';
import fastify from 'fastify';
import { fileURLToPath } from 'url';
import path from 'path';

// Recréer __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify({ logger: true });

// Stocker les bases de données en mémoire
const databases = [];

// Route pour tester le serveur
app.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Route pour ajouter une base de données
app.post('/databases', async (req, reply) => {
  const { dbType, host, user, password, database } = req.body;

  // Vérifier que tous les champs nécessaires sont présents
  if (!dbType || !host || !user || !password || !database) {
    return reply.status(400).send({ error: 'All fields are required' });
  }

  // Ajouter la nouvelle base de données à la liste
  const newDatabase = { dbType, host, user, password, database };
  databases.push(newDatabase);

  reply.status(201).send({ message: `Database ${database} added successfully`, databases });
});

// Route pour lister les bases de données
app.get('/databases', async (req, reply) => {
  reply.send({databases});
});

// Route pour déclencher une sauvegarde MySQL simple
app.post('/backup', (req, reply) => {
  const { host, user, password, database } = req.body;

  // Commande de sauvegarde MySQL
  const backupFileName = `${database}_backup.sql`;
  const backupFilePath = path.join(__dirname, 'backups', backupFileName);

  // Commande pour créer le dossier backups s'il n'existe pas, puis exécuter mysqldump
  const backupCommand = `
    mkdir -p ${path.join(__dirname, 'backups')} && \
    mysqldump -h ${host} -u ${user} -p${password} ${database} > ${backupFilePath}
  `;

  // Exécuter la commande de sauvegarde
  exec(backupCommand, (error, stdout, stderr) => {
    // Vérification si la réponse a déjà été envoyée
    if (reply.sent) {
      return;
    }

    if (error) {
      console.error(`Erreur lors de l'exécution de mysqldump : ${stderr}`);
      return reply.status(500).send({ error: 'Backup failed', details: stderr });
    }

    // Réponse si la sauvegarde réussit
    console.log(`Sauvegarde réussie : ${stdout}`);
    reply.send({ message: `Backup completed`, file: backupFileName });
  });
});


// Démarrer le serveur Fastify
app.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log('Server listening at ${address}');
  app.log.info(`Server listening at ${address}`);
});
