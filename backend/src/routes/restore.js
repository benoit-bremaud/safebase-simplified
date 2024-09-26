// backend/src/routes/restore.js
import { performRestore } from '../utils/restoreUtility.js';

export async function restoreRoute(fastify) {
  fastify.post('/restore', async (request, reply) => {
    try {
      const { backupFile } = request.body;

      // Vérifier que le nom du fichier de sauvegarde est fourni
      if (!backupFile) {
        return reply.status(400).send({ error: 'Nom du fichier de sauvegarde requis' });
      }

      // Appel à la fonction asynchrone pour effectuer la restauration
      await performRestore(backupFile);

      // Répondre une fois que la restauration est terminée
      return reply.status(200).send({ message: 'Restauration réussie' });
    } catch (error) {
      return reply.status(500).send({ error: 'Processus de restauration échoué', details: error.message });
    }
  });
}
