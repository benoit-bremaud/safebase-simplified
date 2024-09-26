export async function updateRoute(fastify) {
  fastify.put('/items/:id', async (request, reply) => {
    const { id } = request.params;
    const { name, description } = request.body;

    if (!name || !description) {
      return reply.status(400).send({ error: 'Name and description are required.' });
    }

    try {
      const [result] = await fastify.db.query('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id]);
      if (result.affectedRows === 0) {
        return reply.status(404).send({ error: 'Item not found.' });
      }
      reply.send({ message: 'Item updated successfully.' });
    } catch (error) {
      reply.status(500).send({ error: 'Failed to update item.', details: error });
    }
  });
}
