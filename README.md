# Projet Boulangerie - Branche Releases

Bienvenue sur la branche **releases** du Projet Boulangerie !

## À propos de cette branche

Cette branche est dédiée à la gestion des versions de production du Projet Boulangerie. Elle contient les versions stables et testées de l'application, prêtes pour le déploiement.

## Objectif

La branche `releases` sert à :

- 📦 **Conserver les versions de production** : Chaque release contient un snapshot stable de l'application
- 🏷️ **Gérer les versions taguées** : Les releases sont identifiées par des tags sémantiques (v1.0.0, v1.1.0, etc.)
- 🚀 **Faciliter les déploiements** : Source fiable pour les déploiements en production
- 📝 **Tracer l'historique des versions** : Permet de revenir à des versions antérieures si nécessaire

## Structure des releases

Les releases suivent la convention de versioning sémantique (Semantic Versioning) :

- **MAJOR.MINOR.PATCH** (ex: 1.2.3)
  - **MAJOR** : changements incompatibles avec les versions précédentes
  - **MINOR** : nouvelles fonctionnalités rétrocompatibles
  - **PATCH** : corrections de bugs rétrocompatibles

## Workflow de release

1. Les développements se font sur la branche `dev`
2. Les fonctionnalités terminées sont mergées dans `main`
3. Une fois validées et testées, les versions stables sont taguées sur `releases`
4. Les déploiements en production utilisent les tags de cette branche

## Consulter les releases

Pour voir toutes les releases disponibles :

```bash
git fetch --tags
git tag -l
```

Pour basculer sur une release spécifique :

```bash
git checkout tags/v1.0.0
```

## À propos du Projet Boulangerie

Le Projet Boulangerie est une application web moderne développée avec Next.js pour présenter la Guilde de la Boulangerie et son équipe royale.

Pour plus d'informations sur le projet principal, consultez la branche `main`.

## Liens utiles

- 📚 [Documentation principale](https://github.com/projet-boulangerie/projet-boulangerie/tree/main)
- 🌐 [Site web](https://projet-boulangerie.github.io/projet-boulangerie/)
- 💻 [Dépôt GitHub](https://github.com/projet-boulangerie/projet-boulangerie)

---

*Pour toute question concernant les releases, veuillez contacter l'équipe de développement.*
