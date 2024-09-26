export async function exampleRoute(fastify, options) {
  fastify.get('/example', async (request, reply) => {
    reply.send({ message: 'This is an example route' });
    });
}