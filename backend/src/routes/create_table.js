export async function createTable(fastify) {
  fastify.post('/items', async (request, reply) => {
    const { name, description } = request.body;
    if (!name || !description) {
      return reply.status(400).send({ error: 'Name and description are required.' });
    }

    try {
      // Log pour débogage
      console.log(`Insertion de l'élément dans la base de données : ${process.env.DB_NAME}`);

      const [result] = await fastify.db.query('INSERT INTO items (name, description) VALUES (?, ?)', [name, description]);
      reply.status(201).send({ id: result.insertId, name, description });
    } catch (error) {
      reply.status(500).send({ error: 'Failed to create item.', details: error });
    }
  });
}
