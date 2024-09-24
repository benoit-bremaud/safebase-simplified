# Image Node.js officielle
FROM node:18

# Installer mysql-client (inclut mysqldump)
RUN apt-get update && apt-get install -y default-mysql-client

# Créer et utiliser le dossier /app
WORKDIR /app

# Copier les fichiers package et installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port 3000 pour Fastify
EXPOSE 3000

# Lancer le serveur Fastify
# CMD ["node", "src/server.js"]
CMD ["npm", "run", "dev"]
