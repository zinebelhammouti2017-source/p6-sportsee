
# SportSee - Tableau de bord de performance sportive

## Présentation

SportSee est une application web développée avec React permettant de visualiser les performances sportives d’un utilisateur à travers un tableau de bord interactif.

L’objectif de cette application est de proposer une interface claire, fluide et intuitive pour suivre l’activité physique d’un utilisateur et analyser ses statistiques.

---

## Fonctionnalités principales

* Authentification utilisateur
* Tableau de bord des performances
* Visualisation de données dynamiques avec des graphiques (Recharts)
* Page profil utilisateur
* Navigation avec React Router
* Protection des routes privées (PrivateRoute)
* Gestion des erreurs (redirection vers login et page 404)

---

## Fonctionnement

L’application repose sur une API.

Cette API permet de récupérer :

* les informations utilisateur
* les séances sportives
* les statistiques globales

Les données récupérées sont ensuite :

* traitées via des services dédiés
* transformées pour correspondre aux besoins du front-end
* stockées dans le state des composants
* affichées dans l’interface ou dans les graphiques

---

## Technologies utilisées

* 'React'
* Vite
* JavaScript (ES6+)
* CSS
* 'Recharts'
* 'React Router'
* Context API
* API REST

---

## Gestion de l’authentification

L’utilisateur se connecte via un formulaire.

Le processus est le suivant :

* envoi des identifiants à l’API
* récupération d’un token d’authentification
* stockage du token côté client (Context API)
* protection des routes avec `PrivateRoute`
* envoi du token dans les headers pour les requêtes sécurisées

---

## Installation et lancement

### 1. Cloner le projet

```bash
git clone https://github.com/zinebelhammouti2017-source/p6-sportsee.git
```

---

### 2. Installer les dépendances (front-end)

Se placer à la racine du projet :

```bash
npm install
```

---

### 3. Lancer le front-end

```bash
npm run dev
```

---

### 4. Lancer le backend (API)

Se placer dans le dossier :

```bash
P6JS-main
```

Puis lancer le serveur :

```bash
npx nodemon app/index.js
```

---

### 5. Accéder à l’application

```bash
http://localhost:5173
```

---

## Remarques

Le travail réalisé porte sur :

* le développement du front-end React
* la gestion de l’authentification
* la mise en place des routes protégées
* la récupération et la transformation des données
* l’intégration des graphiques et de l’interface utilisateur

---

## Auteur

Zineb El Hammouti
