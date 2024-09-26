import { exec } from 'child_process';
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

// Fonction pour effectuer la restauration de la base de données
export async function performRestore(backupFile) {
  try {
    // Définir le chemin du fichier de sauvegarde
    const backupDir = path.join(process.cwd(), 'src/backups');
    const backupFilePath = path.join(backupDir, backupFile);

    // Vérifier si le fichier de sauvegarde existe
    if (!fs.existsSync(backupFilePath)) {
      throw new Error('Fichier de sauvegarde introuvable');
    }

    // Commande pour restaurer la base de données
    const restoreCommand = `mysql -h ${process.env.DB_HOST} -u ${process.env.DB_USER} -p${process.env.DB_PASSWORD} ${process.env.DB_NAME} < ${backupFilePath}`;

    // Exécuter la commande de restauration
    await execCommand(restoreCommand);
    console.log(`Restauration réussie à partir de : ${backupFilePath}`);
    return backupFilePath;
  } catch (error) {
    console.error('Erreur lors de la restauration :', error);
    throw error;
  }
}
