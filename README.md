# Project #10 - Argent Bank API

This codebase contains the code needed to run the backend for Argent Bank.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com)
- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
  Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

### Dépendances :

- [React](https://reactjs.org)
- [React-router-dom](https://reactrouter.com/): ^6.23.1
- [React-redux](https://react-redux.js.org/): ^9.1.2
- [@reduxjs/toolkit](https://redux-toolkit.js.org/): ^2.2.5

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.

## Installation :

### Procédure d'installation :

Cloner le repository:

- git clone https://github.com/Gizmoux/Project-10-Bank-API.git

### Installation et lancement du Back-end :

1. Aller dans le dossier PROJETCT-10-BANK-API

2. Vérifier la version de Node:

   - `node --version`

3. Vérifier la version de MongoDB

   - `mongo --version`

4. Installer toutes les dépendances pour le back-end:

   - `npm install` ou `yarn`

5. Lancer le back-end avec Node 16 (nvm) et créer 2 utilisateurs dans la base de données:

```bash
nvm use 16
npm run dev:server
npm run populate-db
```

## Utilisateurs en base de données:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`
- token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDcwYzEzODA5NGE1MDdhNmZkNWNjYSIsImlhdCI6MTcxODAyNTMwMiwiZXhwIjoxNzE4MTExNzAyfQ.iNuRV4KWPS4G2Ji47ObpAla5jc35MRk7qNtzKWn2eLE

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

Pour en apprendre plus sur le fonctionnement de l'API, une fois l'environnement local lancé, visitez: http://localhost:3001/api-docs

### Installation et lancement du front-end :

1. Aller dans le dossier argent-bank

   - cd argent-bank

2. Installer toutes les dépendances et lancer le frontend:

```bash
cd argent-bank
npm run dev
```

Le front-end sera lancé à l'URL:
`http://localhost:5173/`
