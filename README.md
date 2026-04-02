#  SportSee - Dashboard de performance sportive

##  Présentation

SportSee est une application web permettant de visualiser les performances sportives d’un utilisateur à travers un tableau de bord interactif et moderne.

L'objectif est de fournir une interface claire, rapide et intuitive pour suivre son activité physique et analyser ses statistiques.

---

##  Fonctionnalités principales

-  Authentification utilisateur sécurisée
-  Tableau de bord des performances
-  Visualisation de données dynamiques (graphiques)
-  Page profil utilisateur
-  Navigation fluide avec React Router

---

##  Fonctionnement

L’application repose sur une API qui fournit les données utilisateur :

- Informations personnelles
- Sessions sportives
- Statistiques globales

Ces données sont ensuite transformées et affichées dans des composants React dédiés.

---

##  Technologies utilisées

- React
- Vite
- JavaScript (ES6+)
- CSS
- Recharts (visualisation de données)
- API REST

---

##  Gestion de l’authentification

L'utilisateur se connecte via un formulaire :


- Envoi des identifiants à l’API
- Récupération d’un **token d’authentification**
- Stockage du token côté client
- Protection des routes avec un système de `PrivateRoute`

  ## Architecture du projet

  src/
├── components/ # Composants réutilisables
├── pages/ # Pages principales (Login, Dashboard, Profile)
├── services/ # Appels API
├── hooks/ # Hooks personnalisés
├── context/ # Gestion globale (authentification)
└── styles/ # CSS

## Installation et lancement

-git clone https://github.com/ton-repo/sportsee.git
-cd sportsee
-npm install
-npm run dev

L’application sera disponible sur : http://localhost:5173

##  Auteur

Zineb El Hammouti  


