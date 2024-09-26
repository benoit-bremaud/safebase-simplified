// backend/src/routes/backup.js
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

// Fonction utilitaire pour exécuter une commande
function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

// Fonction pour effectuer la sauvegarde (totalement indépendante de Fastify)
export async function performBackup() {
  try {
    // Créer l'équivalent de __dirname dans un module ES6
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    // Définir le dossier de sauvegarde
    const backupDir = path.join(__dirname, '../backups');

    // Créer le dossier s'il n'existe pas
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
    }

    // Générer le nom du fichier de sauvegarde avec un horodatage
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFilePath = path.join(backupDir, `mydb_backup_${timestamp}.sql`);

    // Afficher le nom de la base de données qui va être sauvegardée
    console.log(`Sauvegarde de la base de données : ${process.env.DB_NAME}`);

    // Commande de sauvegarde (mysqldump)
    const dumpCommand = `mysqldump -h ${process.env.DB_HOST} -u ${process.env.DB_USER} -p${process.env.DB_PASSWORD} ${process.env.DB_NAME} > ${backupFilePath}`;

    // Exécuter la commande de sauvegarde
    await execCommand(dumpCommand);
    console.log(`Sauvegarde réussie : ${backupFilePath}`);
    return backupFilePath;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde :', error);
    throw error;
  }
}

// Route pour déclencher la sauvegarde manuelle
export async function backupRoute(fastify) {
  fastify.post('/backup', async (request, reply) => {
    try {
      await performBackup();
      return reply.status(200).send({ message: 'Backup successful' });
    } catch (error) {
      return reply.status(500).send({ error: 'Backup process failed', details: error.message });
    }
  });
}
