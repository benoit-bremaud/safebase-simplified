# SafeBase Simplified

**Description**:  
SafeBase Simplified est une solution complète de gestion de sauvegarde et de restauration de bases de données. Cette plateforme inclut une API REST, une interface utilisateur intuitive, et des automatisations puissantes pour assurer la sécurité des données d’entreprises. Elle est construite avec Node.js, Fastify, MySQL, Angular, et est complètement dockerisée pour faciliter le déploiement.

## Fonctionnalités

- **Ajout de Base de Données** : Ajouter une connexion à des bases de données MySQL et PostgreSQL.
- **Automatisation des Sauvegardes** : Planification et exécution de sauvegardes régulières des bases de données via des tâches cron.
- **Gestion des Versions de Sauvegarde** : Conserver l’historique des versions sauvegardées, avec la possibilité de restaurer une version spécifique.
- **Surveillance et Alertes** : Surveillance des sauvegardes et alertes en cas de problèmes lors des processus de sauvegarde ou de restauration.
- **Interface Utilisateur** : Interface utilisateur simple construite en Angular pour la gestion des sauvegardes.
- **Containérisation** : Le projet utilise Docker pour contenir l’API backend, les bases de données (MySQL et PostgreSQL), et le frontend.

## Prérequis

- **Node.js** (version 18.17.0 ou plus récente)
- **Docker** et **Docker Compose**
- **MySQL** et **PostgreSQL**

## Installation

1. **Clonez le dépôt** :

   ```bash
   git clone git@github.com:benoit-bremaud/safebase-simplified.git
   cd safebase-simplified
   ```

2. **Démarrez l’environnement Docker** :

   ```bash
   docker-compose up -d
   ```

   Cette commande va lancer les services backend (Fastify), le frontend (Angular) ainsi que les bases de données MySQL et PostgreSQL.

3. **Accédez à l’interface utilisateur** :
   Ouvrez votre navigateur à l'adresse [http://localhost:4200](http://localhost:4200).

## Utilisation

- **API REST Backend** : Accessible via [http://localhost:3000](http://localhost:3000). Vous trouverez la documentation de l'API dans le fichier `/docs`.
- **Tâches Automatisées** : Les sauvegardes sont planifiées avec `node-cron`. Les horaires peuvent être configurés dans `backupScheduler.js`.

## Scripts Disponibles

- **Démarrer le backend** :

  ```bash
  npm run start:backend
  ```

- **Démarrer le frontend** :

  ```bash
  npm run start:frontend
  ```

- **Tests** :
  Utilisez `npm test` pour lancer les tests unitaires de l’API backend.

## Architecture du Projet

- **Backend** : Utilise **Node.js** avec **Fastify** comme framework principal.
- **Frontend** : Construit en **Angular** pour une interface utilisateur réactive.
- **Base de Données** : **MySQL** et **PostgreSQL** pour la persistance des données.
- **Docker** : Utilisé pour la containérisation, facilitant le déploiement sur différents environnements.

## Contribution

Les contributions sont les bienvenues ! Pour proposer une fonctionnalité ou corriger un bug, veuillez créer une `issue` ou soumettre une `pull request`.

## Liens Utiles

- [Fastify Documentation](https://www.fastify.io/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Angular Documentation](https://angular.io/docs)
- [Docker Documentation](https://docs.docker.com/)

## Licence

Ce projet est sous licence [MIT](LICENSE).

## Auteur

Développé par Benoit dans le cadre du projet **SafeBase** pour garantir la sécurité et la continuité des bases de données en entreprise.