[![Node.js](https://img.shields.io/badge/Node.js-20.11.1-green)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-yellow)](https://vitejs.dev/)
[![Bun](https://img.shields.io/badge/Bun-1.1.13-red)](https://bun.sh/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9.11.1-red)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.3.3-blue)](https://prettier.io/)
[![React](https://img.shields.io/badge/React-18.3.1-blueviolet)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-6.26.2-orange)](https://reactrouter.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.2.7-purple)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.13-blue)](https://tailwindcss.com/)
[![Date-picker](https://img.shields.io/badge/@sriver/date--picker--react--v2-1.0.10-purple)](https://github.com/sriver/date-picker-react-v2)

# HRnet - Application de gestion des employés
Ce projet est une application de gestion des employés pour WealthHealth. 

L'objectif principal était de mettre à jour HRnet depuis un projet JQuery et le convertir en React.

![Capture d'écran de HRnet](/public/rhnetimg.png)


## Sommaire

1. [Fonctionnalités principales](#fonctionnalités-principales)
2. [Démo](#démo)
3. [Rapport de performance](#rapport-de-performance)
4. [Prérequis](#prérequis)
5. [Installation](#installation)
6. [Utilisation](#utilisation)
7. [Exemple du date picker](#exemple-du-date-picker)
8. [Auteur](#auteur)
9. [Licence](#licence)

## Fonctionnalités principales

- ✅ Conversion complète du projet en React
- ✅ Ajout d'un système de gestion d'état avec Redux Toolkit
- ✅ Création d'un plugin React pour le sélecteur de date 
- ✅ Interface utilisateur responsive avec Tailwind CSS

## Démo

- Vercel : [Lien](https://r-hnet-react-1otu47sr8-dsrivers-projects.vercel.app)

## Rapport de performance

- audit au format Json de Lighthouse pour la page de création d'employés: [Lien](./public/localhost-index-v2.json)
- audit au format Json de Lighthouse pour la page de tableau d'employés: [Lien](./public/localhost-list-v2.json)

### Rapport de performance V1 (Jquery)

![Image de V1 index](public/pageV1-index.png) 
![Image de V1 list](public/pageV1-list.png)

### Rapport de performance V2 (React)

![Image de V2 index](public/pageV2-index.png)
![Image de V2 list](public/pageV2-list.png)

## Prérequis

Pour obtenir et construire le projet, vous aurez besoin d'installer :

- NodeJS
- Git
- Un terminal pour exécuter les commandes.

## Installation

```sh
git clone https://github.com/D-Sriver/RHnet-react.git
cd RHnet-react
npm install
```

## Utilisation

```sh
npm run dev
```

## Exemple du date picker

![Exemple du date picker](https://github.com/D-Sriver/Date-Picker-React/raw/main/datepikerv2.gif)

## Auteur

[D-Sriver](https://github.com/D-Sriver)

## Licence

[MIT](https://github.com/D-Sriver/RHnet-react/blob/main/LICENSE)
