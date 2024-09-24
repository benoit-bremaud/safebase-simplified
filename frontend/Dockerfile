# Étape 1 : Utiliser l'image officielle Node.js
FROM node:18

# Créer et utiliser le dossier /app
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source de l'application Angular
COPY . .

# Exposer le port 4200 pour le développement Angular
EXPOSE 4200

# Lancer le serveur de développement Angular
CMD ["npm", "run", "start"]
