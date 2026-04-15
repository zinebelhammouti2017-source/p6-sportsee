# SportSee - Tableau de bord de performance sportive

## Présentation

SportSee est une application web développée avec React permettant de visualiser les performances sportives d’un utilisateur à travers un tableau de bord interactif.

L’objectif est de proposer une interface claire, fluide et intuitive pour suivre l’activité physique d’un utilisateur et analyser ses statistiques.

## Fonctionnalités principales

* Authentification utilisateur
* Tableau de bord des performances
* Visualisation de données dynamiques avec des graphiques
* Page profil utilisateur
* Navigation avec React Router
* Protection des routes privées

## Fonctionnement

L’application s’appuie sur une API fournie dans le cadre du projet OpenClassrooms.
Cette API permet de récupérer les données utilisateur, notamment :

* les informations personnelles
* les séances sportives
* les statistiques globales

Les données récupérées sont ensuite transformées dans les services afin d’être adaptées au format attendu par l’application, puis affichées dans les composants React.

## Technologies utilisées

* React
* Vite
* JavaScript (ES6+)
* CSS
* Recharts
* API REST
* React Router
* Context API

## Gestion de l’authentification

L’utilisateur se connecte via un formulaire.

Le processus est le suivant :

* envoi des identifiants à l’API
* récupération d’un token d’authentification
* stockage du token côté client
* protection des routes avec `PrivateRoute`
* envoi du token dans les headers pour les requêtes sécurisées

## Installation et lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/zinebelhammouti2017-source/p6-sportsee.git
```

### 2. Lancer le backend

Se placer dans le dossier backend fourni avec le projet OpenClassrooms, puis exécuter :

```bash
npm install
npm run dev
```

### 3. Lancer le front-end

Se placer dans le dossier front-end (`source`), puis exécuter :

```bash
npm install
npm run dev
```

L’application sera disponible sur :

```bash
http://localhost:5173
```

## Auteur

Zineb El Hammouti
