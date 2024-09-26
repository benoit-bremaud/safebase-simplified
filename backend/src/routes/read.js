export async function readRoute(fastify) {
  // Obtenir tous les éléments
  fastify.get('/items', async (request, reply) => {
    try {
      const [rows] = await fastify.db.query('SELECT * FROM items');
      reply.send(rows);
    } catch (error) {
      reply.status(500).send({ error: 'Failed to fetch items.', details: error });
    }
  });

  // Obtenir un élément par ID
  fastify.get('/items/:id', async (request, reply) => {
    const { id } = request.params;
    try {
      const [rows] = await fastify.db.query('SELECT * FROM items WHERE id = ?', [id]);
      if (rows.length === 0) {
        return reply.status(404).send({ error: 'Item not found.' });
      }
      reply.send(rows[0]);
    } catch (error) {
      reply.status(500).send({ error: 'Failed to fetch item.', details: error });
    }
  });
}
