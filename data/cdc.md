Développe une landing page responsive avec Next.js. Voici les exigences précises :

## Structure générale
- Utilise Next.js avec un design **moderne et soigné**.
- Typographie : `Roboto`.
- Trois couleurs principales : `#ffffff` (blanc), `#d6eaff` (bleu clair), `#0a0f1c` (bleu foncé presque noir).
- Gestion **rigoureuse des contrastes** (aucun texte blanc sur fond blanc ou bouton blanc sans contraste).
- Ajoute des **animations légères** sur les couleurs et la typographie.
- **Style aérien** : transitions entre sections avec des séparateurs SVG (style nuage ou hachuré).

## Header
- Deux variantes :
  - `LandingHeader`: affiché uniquement sur la page d’accueil.
  - `DefaultHeader`: utilisé sur les autres pages.
- Contenu du header :
  - Logo en haut à gauche.
  - CTA en haut à droite : bouton cliquable avec numéro de téléphone.
  - Dans `LandingHeader` uniquement : des sélecteurs (liens) qui scrollent vers des sections de la landing page.

## Footer
- Footer réutilisable sur toutes les pages.
- Doit contenir :
  - Informations légales (numéro de SIRET, nom du gérant, etc.).
  - Liens : mentions légales, politique de confidentialité, annuaires, etc.

## Sections de la landing page
Chaque section possède :
- Un **fond de couleur alterné** (clair / foncé).
- Un **icône dédié** dans une couleur cohérente (`bleu foncé`).
- Une **bonne hiérarchie visuelle** et un espacement aéré.

### Sections attendues :
1. **Hero** : description générale de l’activité (drone).
2. **Services proposés** :
   - Clips vidéos
   - Photos
   - Contenus pour réseaux sociaux
   - Captation d’événements (entreprises, mariages)
   - Vues aériennes pour particuliers
   - Services pour agents immobiliers
3. **Zone d’intervention**
4. **Contact**

## Style visuel
- Chaque section est bien délimitée par un SVG décoratif (style nuage ou aérien, jamais une ligne droite brute).
- Le site doit refléter une **identité visuelle professionnelle et harmonieuse**, adaptée au domaine du **drone**.

## Ressources disponibles (à venir)
- Logo
- Icônes
- Images
- Données JSON pour les services

Pour cette première phase, ne développe **que la landing page**. Code propre, composants réutilisables, aucune approximation visuelle ou fonctionnelle n’est tolérée.