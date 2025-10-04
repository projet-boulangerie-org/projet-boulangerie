# Projet Boulangerie

Une application web moderne (next.js) pour présenter la Guilde de la Boulangerie et son équipe royale.

## Prerequis

- Node.js >= 18.18.
- npm >= 9 (installé avec Node.js).

## Installation

1. Clonez le depot :
   ```bash
   git clone https://github.com/projet-boulangerie/projet-boulangerie.git
   cd projet-boulangerie
   ```
2. Installez les dependances :
   ```bash
   npm install
   ```

## Scripts npm utiles

- `npm run dev` : lance le serveur de developpement (Turbopack) sur `http://localhost:3000`.
- `npm run build` : genere l'export statique dans le dossier `out/`.
- `npm run lint` : execute ESLint sur le projet.


## Architecture du projet

```
projet-boulangerie/
├── app/
|   ├── layout.tsx                  # Layout principal
|   ├── page.tsx                    # Page principale
|   ├── croissant/
|   |   ├── page.tsx                # Page Croissantage avec bouton Slack
|   ├── game/
|       ├── page.tsx                # Mini-jeu interactif
├── components/
|   ├── croissant/                  # Components de croissant/
|   ├── layout/                     # Components de layout.tsx
|   ├── legal/                      # Mentions légales et Politique de confidentialité
|   ├── FourMaudit.tsx              # Component de game/
├── lib/                            # Librairies React
├── public/                         # Assets statiques (images)
└── styles/                         # Styles globaux
```

## Licence

MIT