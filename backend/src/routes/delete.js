export async function deleteRoute(fastify) {
  fastify.delete('/items/:id', async (request, reply) => {
    const { id } = request.params;

    try {
      const [result] = await fastify.db.query('DELETE FROM items WHERE id = ?', [id]);
      if (result.affectedRows === 0) {
        return reply.status(404).send({ error: 'Item not found.' });
      }
      reply.send({ message: 'Item deleted successfully.' });
    } catch (error) {
      reply.status(500).send({ error: 'Failed to delete item.', details: error });
    }
  });
}
