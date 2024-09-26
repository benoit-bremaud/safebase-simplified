import { createTable } from "./create_table.js";
import { deleteRoute } from "./delete.js";
import { exampleRoute } from "./example.js";
import { readRoute } from "./read.js";
import { updateRoute } from "./update.js";

export function registerRoutes(fastify) {
  fastify.register(exampleRoute); // Enregistre la route /example
  fastify.register(createTable); // Enregistre la route /items
  fastify.register(readRoute); // Enregistre la route /items/:id
  fastify.register(updateRoute); // Enregistre la route /items/:id
  fastify.register(deleteRoute); // Enregistre la route /items/:id

}