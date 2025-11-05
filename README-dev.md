# README Développement - Projet Boulangerie

Bienvenue dans le guide de développement du **Projet Boulangerie** ! 🥐

Ce document contient toutes les informations nécessaires pour contribuer efficacement au projet en tant que développeur.

## Table des matières

- [Configuration de l'environnement](#configuration-de-lenvironnement)
- [Structure détaillée du projet](#structure-détaillée-du-projet)
- [Workflow de développement](#workflow-de-développement)
- [Standards de code](#standards-de-code)
- [Développement des fonctionnalités](#développement-des-fonctionnalités)
- [Tests et débogage](#tests-et-débogage)
- [Déploiement](#déploiement)
- [Bonnes pratiques](#bonnes-pratiques)

## Configuration de l'environnement

### Prérequis détaillés

- **Node.js** >= 18.18 (recommandé : version LTS la plus récente)
- **npm** >= 9.x
- **Git** pour la gestion de version
- Un éditeur de code (VS Code recommandé)

### Installation et configuration initiale

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/projet-boulangerie-org/projet-boulangerie.git
   cd projet-boulangerie
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** (si nécessaire) :
   ```bash
   # Créer un fichier .env.local pour les variables locales
   touch .env.local
   ```

4. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:3000`

### Extensions VS Code recommandées

- **ESLint** : Pour le linting en temps réel
- **Tailwind CSS IntelliSense** : Autocomplétion pour Tailwind
- **TypeScript and JavaScript Language Features** : Support TypeScript
- **Prettier** : Formatage du code (optionnel)

## Structure détaillée du projet

```
projet-boulangerie/
├── app/                          # Application Next.js (App Router)
│   ├── layout.tsx                # Layout racine avec polices et métadonnées
│   ├── page.tsx                  # Page d'accueil (présentation + équipe)
│   ├── croissant/
│   │   └── page.tsx              # Page Croissantage avec intégration Slack
│   ├── game/
│   │   └── page.tsx              # Mini-jeu "Four Maudit"
│   └── favicon.ico               # Icône du site
│
├── components/                   # Composants React réutilisables
│   ├── layout/                   # Composants de mise en page
│   │   ├── ConditionalHeader.tsx # Header conditionnel (masqué sur homepage)
│   │   ├── Footer.tsx            # Footer avec liens légaux
│   │   └── DarkModeInitializer.tsx # Initialisation du thème sombre
│   ├── croissant/                # Composants liés au Croissantage
│   ├── legal/                    # Composants légaux
│   │   ├── MentionsLegales.tsx   # Mentions légales
│   │   └── PolitiqueConfidentialite.tsx # Politique de confidentialité
│   ├── FourMaudit.tsx            # Composant du jeu interactif
│   └── JoinGuildModal.tsx        # Modal d'adhésion à la guilde
│
├── lib/                          # Bibliothèques et utilitaires
│   └── constants.tsx             # Constantes globales (basePath, etc.)
│
├── public/                       # Assets statiques
│   ├── king.png                  # Image du Roi Divin
│   ├── seigneur.jpeg             # Image du Seigneur suprême
│   ├── patiss.png                # Image du Grand maître Pâtissier
│   └── panetier.png              # Image du Grand maître Panetier
│
├── styles/                       # Styles globaux
│   ├── global.css                # Styles CSS globaux et variables
│   ├── SlackMessage.css          # Styles pour les messages Slack
│   └── FourMaudit.css            # Styles pour le jeu Four Maudit
│
├── next.config.ts                # Configuration Next.js (export statique)
├── tailwind.config.js            # Configuration Tailwind CSS
├── tsconfig.json                 # Configuration TypeScript
├── eslint.config.mjs             # Configuration ESLint
└── package.json                  # Dépendances et scripts npm
```

### Technologies utilisées

- **Next.js 15.5+** : Framework React avec App Router
- **React 19+** : Bibliothèque UI
- **TypeScript** : Typage statique
- **Tailwind CSS** : Framework CSS utility-first
- **Lucide React** : Icônes
- **ESLint** : Linting du code

## Workflow de développement

### Branches

- `main` : Branche de production (déployée sur GitHub Pages)
- `dev` : Branche de développement principale
- Feature branches : `feature/nom-de-la-fonctionnalité`
- Bugfix branches : `bugfix/description-du-bug`

### Processus de développement

1. **Créer une nouvelle branche** depuis `dev` :
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/ma-nouvelle-fonctionnalite
   ```

2. **Développer et tester localement** :
   ```bash
   npm run dev
   # Faire vos modifications
   npm run lint  # Vérifier le code
   ```

3. **Commiter vos changements** :
   ```bash
   git add .
   git commit -m "feat: description de la fonctionnalité"
   ```

4. **Pousser et créer une Pull Request** :
   ```bash
   git push origin feature/ma-nouvelle-fonctionnalite
   # Créer une PR vers dev sur GitHub
   ```

### Convention de nommage des commits

Utilisez des messages de commit descriptifs suivant le format :
- `feat:` pour une nouvelle fonctionnalité
- `fix:` pour un correctif
- `docs:` pour la documentation
- `style:` pour les changements de style (formatage, etc.)
- `refactor:` pour une refactorisation
- `test:` pour l'ajout de tests
- `chore:` pour les tâches de maintenance

## Standards de code

### TypeScript

- Utilisez le typage strict (activé dans `tsconfig.json`)
- Évitez `any` autant que possible
- Définissez des interfaces pour les props des composants

### React/Next.js

- Utilisez les composants fonctionnels avec hooks
- Utilisez `'use client'` uniquement quand nécessaire (interactivité)
- Préférez les Server Components par défaut
- Utilisez les composants Next.js optimisés (`Image`, `Link`)

### CSS/Tailwind

- Utilisez Tailwind pour le styling
- Variables CSS définies dans `styles/global.css` pour les couleurs de marque :
  - `--boulange-gold` : Couleur or de la marque
  - `--boulange-flour` : Couleur farine
- Classes utilitaires personnalisées disponibles dans `global.css`

### ESLint

Avant de commiter, vérifiez que votre code passe le linting :
```bash
npm run lint
```

Pour corriger automatiquement les erreurs simples :
```bash
npm run lint -- --fix
```

## Développement des fonctionnalités

### Ajouter une nouvelle page

1. Créer un dossier dans `app/` avec un `page.tsx` :
   ```typescript
   // app/ma-nouvelle-page/page.tsx
   export default function MaNouvellePage() {
     return (
       <main className="flex-1 flex flex-col">
         <h1>Ma Nouvelle Page</h1>
       </main>
     );
   }
   ```

2. La route sera automatiquement disponible à `/ma-nouvelle-page`

### Ajouter un nouveau composant

1. Créer le composant dans `components/` ou un sous-dossier approprié :
   ```typescript
   // components/MonComposant.tsx
   export default function MonComposant() {
     return <div>Mon Composant</div>;
   }
   ```

2. L'importer où nécessaire :
   ```typescript
   import MonComposant from '@/components/MonComposant';
   ```

### Utiliser les constantes

Importez et utilisez les constantes définies :
```typescript
import { basePath } from '@/lib/constants';

// Pour les liens et images
<Image src={`${basePath}/image.png`} alt="..." />
<a href={`${basePath}/page`}>Lien</a>
```

## Tests et débogage

### Développement local

Le serveur de développement inclut :
- **Hot Module Replacement** : Rechargement automatique des modifications
- **Turbopack** : Bundler ultra-rapide
- **Messages d'erreur détaillés** : En mode développement

### Console de débogage

Utilisez les outils de développement du navigateur :
- Console pour les logs
- React DevTools pour inspecter les composants
- Network tab pour les requêtes

### Vérification du build

Avant de pousser, testez le build de production :
```bash
npm run build
```

Cela génère un export statique dans le dossier `out/` et vérifie :
- Aucune erreur de compilation TypeScript
- Aucune erreur ESLint
- Tous les liens et imports sont valides

## Déploiement

### Déploiement sur GitHub Pages

Le projet est configuré pour un déploiement automatique sur GitHub Pages.

**Script de déploiement** :
```bash
npm run deploy
```

Ce script :
1. Build l'application (`next build`)
2. Crée un fichier `.nojekyll` pour GitHub Pages
3. Commit le dossier `out/`
4. Pousse vers la branche `gh-pages`

**Note** : Assurez-vous que :
- Le `basePath` dans `next.config.ts` est correctement configuré
- La branche `gh-pages` existe dans le dépôt
- Les GitHub Pages sont activées dans les paramètres du dépôt

### Variables d'environnement

- **Production** : `basePath = '/projet-boulangerie'`
- **Développement** : `basePath = ''`

Ces valeurs sont définies dans `lib/constants.tsx` selon `NODE_ENV`.

## Bonnes pratiques

### Performance

- Utilisez `next/image` pour les images (optimisation automatique)
- Évitez les `'use client'` inutiles (favorise le SSR)
- Lazy load les composants lourds si nécessaire

### Accessibilité

- Ajoutez des attributs `alt` à toutes les images
- Utilisez des balises sémantiques HTML
- Assurez un contraste suffisant pour le texte

### SEO

- Définissez des `metadata` dans chaque page
- Utilisez des balises `<h1>`, `<h2>`, etc. de manière hiérarchique
- Ajoutez des descriptions pertinentes

### Sécurité

- Ne commitez jamais de secrets ou clés API
- Utilisez `.env.local` pour les variables sensibles (non versionnées)
- Validez les entrées utilisateur

### Code maintenable

- Commentez le code complexe
- Créez des composants réutilisables
- Gardez les composants petits et focalisés
- Utilisez des noms de variables descriptifs

## Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation React](https://react.dev/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)

---

**Bonne contribution à la Guilde de la Boulangerie ! 🥐👑**

Pour toute question ou problème, n'hésitez pas à ouvrir une issue sur GitHub.
