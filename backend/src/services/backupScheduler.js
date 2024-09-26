// backend/src/services/backupScheduler.js
import cron from 'node-cron';
import { performBackup } from '../routes/backup.js'; // Importer la fonction existante

// Planifier la tâche avec node-cron
export function scheduleAutomaticBackup() {

  cron.schedule('*/5 * * * *', () => {
    console.log('Exécution de la sauvegarde automatique...');
    performBackup()
      .then(() => console.log('Sauvegarde automatique réussie'))
      .catch(error => console.error('Erreur lors de la sauvegarde automatique :', error));
  });
}
