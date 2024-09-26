# Dossier `/utils`

## Description

Le dossier `/utils` regroupe des fonctions utilitaires réutilisables utilisées dans le backend du projet SafeBase. Ces fonctions sont indépendantes du framework Fastify et offrent une manière centralisée de gérer des opérations courantes, comme les interactions avec le système de fichiers ou l'exécution de commandes système.

## Pourquoi Utiliser un Dossier `/utils`

L'objectif principal du dossier `/utils` est de maintenir une organisation propre et modulaire du code. En regroupant les fonctions réutilisables dans ce dossier, nous facilitons la maintenance et encourageons la réutilisation de code tout en évitant les duplications. Ce dossier sert également à séparer la logique métier du projet des fonctions auxiliaires.

## Contenu

Actuellement, le dossier `/utils` comprend les éléments suivants :

- **[restoreUtility.js](./restoreUtility.js)** : Contient la fonction `performRestore`, utilisée pour restaurer une base de données à partir d'un fichier de sauvegarde. Cette fonction utilise les commandes système pour effectuer la restauration et peut être invoquée depuis la route `/restore`.

## Bonnes Pratiques

- Les fichiers du dossier `/utils` doivent être autonomes et ne pas dépendre directement du framework (Fastify) utilisé dans l'application.
- Les fonctions dans ce dossier doivent être **génériques**, **réutilisables**, et axées sur une seule responsabilité (ex. : exécuter des commandes système, manipuler des fichiers).
- **Ne pas** inclure dans `/utils` des fonctionnalités spécifiques à une seule route ou qui sont étroitement liées à la logique métier.
- Inclure une **gestion d'erreurs robuste** dans toutes les fonctions utilitaires pour garantir la stabilité de l'application.
  
## Ajouter de Nouvelles Fonctions Utilitaires

Pour ajouter une nouvelle fonction utilitaire :

1. Créez un nouveau fichier `.js` dans le dossier `/utils` avec un nom descriptif (par exemple, `dataProcessing.js`).
2. Implémentez la fonction en vous assurant qu'elle est autonome et réutilisable.
3. Exportez la fonction pour qu'elle puisse être utilisée dans d'autres parties de l'application.

## Exemple d'Utilisation

Voici un exemple pour importer et utiliser une fonction du dossier `/utils` :

```javascript
import { performRestore } from '../utils/restoreUtility.js';

try {
  await performRestore('backupFile.sql');
} catch (error) {
  console.error('Erreur lors de la restauration :', error);
}
```