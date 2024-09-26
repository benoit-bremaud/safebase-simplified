// backend/src/routes/restore.js
import { performRestore } from '../utils/restoreUtility.js';

export function restoreRoute(fastify) {
  fastify.post('/restore', async (request, reply) => {
    const { backupFile } = request.body;

    // Vérifier que le nom du fichier de sauvegarde est fourni
    if (!backupFile) {
      return reply.status(400).send({ error: 'Nom du fichier de sauvegarde requis' });
    }

    try {
      await performRestore(backupFile);
      return reply.status(200).send({ message: 'Restauration réussie' });
    } catch (error) {
      return reply.status(500).send({ error: 'Processus de restauration échoué', details: error.message });
    }
  });
}
