import fastify from 'fastify';
import fs from 'fs';
import path from 'path';
import pool from './db.js';

const app = fastify({ logger: true });

// Stocker les bases de données en mémoire
const databases = [];

// Route pour tester le serveur
app.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Route pour ajouter une base de données
app.post('/databases', async (req, reply) => {
  const { dbType, host, user, password, database } = req.body;

  // Vérifier que tous les champs nécessaires sont présents
  if (!dbType || !host || !user || !password || !database) {
    return reply.status(400).send({ error: 'All fields are required' });
  }

  // Ajouter la nouvelle base de données à la liste
  const newDatabase = { dbType, host, user, password, database };
  databases.push(newDatabase);

  reply.status(201).send({ message: `Database ${database} added successfully`, databases });
});

// Route pour lister les bases de données
app.get('/databases', async (req, reply) => {
  reply.send({databases});
});

// Démarrer le serveur Fastify
app.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${address}`);
});
