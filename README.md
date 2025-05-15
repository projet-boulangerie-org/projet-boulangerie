# Projet Boulangerie

Une application web moderne pour présenter la Guilde de la Boulangerie et son équipe royale.

## Prérequis

- Node.js (version 16.x ou supérieure)
- npm (inclus avec Node.js)

## Installation

1. Clonez le dépôt :
```bash
git clone <votre-url-de-depot>
cd projet-boulangerie
```

2. Installez les dépendances :
```bash
npm install
```

3. Ajoutez les images requises dans le dossier `public` :
- `king.png` - Image du Roi Divin
- `apprenti.jpeg` - Image de l'Apprenti Chevalier
- `patiss.png` - Image de l'Apprenti Pâtissier

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Production

1. Construisez l'application :
```bash
npm run build
```

2. Pour tester la version de production localement :
```bash
npx serve out -s
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Déploiement sur GitHub Pages

1. Configurez la branche gh-pages dans votre dépôt GitHub

2. Déployez avec la commande :
```bash
npm run deploy
```

L'application sera accessible à l'adresse : `https://<votre-nom-utilisateur>.github.io/projet-boulangerie`

## Structure du Projet

```
projet-boulangerie/
├── app/
│   ├── page.tsx          # Page principale
│   ├── layout.tsx        # Layout principal
│   ├── croissant/
│       ├── page.tsx          # Page secondaire
├── components/        # Composants React
├── public/               # Assets statiques (images)
└── styles/              # Styles globaux
```

## Technologies Utilisées

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Google Fonts](https://fonts.google.com/) - Polices Cinzel pour le style médiéval

## Personnalisation

### Images
Placez vos images dans le dossier `public/` et référencez-les dans le code en utilisant le chemin relatif (par exemple : `/king.png`).

### Styles
Les styles sont gérés avec Tailwind CSS. Vous pouvez personnaliser les couleurs et autres variables dans `tailwind.config.js`.

## Licence

MIT 
