# 🌍 World Menu

Une application web permettant de découvrir les menus culinaires du monde entier, avec un système d'accès par abonnement.

## Aperçu

**World Menu** est une plateforme SaaS construite avec Next.js qui offre aux utilisateurs abonnés l'accès à des menus exclusifs provenant de différents pays du monde. Les visiteurs peuvent s'inscrire, s'abonner via Stripe, puis explorer des fiches culinaires par destination.

## Fonctionnalités

- **Page d'accueil** — Présentation du service avec appel à l'action pour l'abonnement
- **Authentification** — Inscription / connexion par email et mot de passe (JWT), réinitialisation de mot de passe par email
- **Abonnement Stripe** — Paiement récurrent avec gestion des webhooks et accès conditionnel au contenu
- **Menus par pays** — Accès aux fiches culinaires (Bénin, Seychelles…) réservé aux abonnés
- **Page de suggestion** — Formulaire permettant aux utilisateurs de proposer des idées de menus
- **Profil utilisateur** — Consultation et gestion du compte
- **Protection des routes** — Middleware Next.js bloquant l'accès à `/menu` et `/propose` sans abonnement actif
- **Rôle administrateur** — Accès étendu sans abonnement requis
- **Animations** — Transitions de pages et révélations de sections avec Framer Motion

## Stack technique

| Catégorie        | Technologie              |
| ---------------- | ------------------------ |
| Framework        | Next.js 16 (App Router)  |
| Langage          | TypeScript               |
| UI               | React 19, Tailwind CSS 4 |
| Animations       | Framer Motion            |
| Authentification | NextAuth.js v4           |
| Base de données  | PostgreSQL + Prisma ORM  |
| Paiements        | Stripe                   |
| Emails           | Nodemailer               |
| Tests E2E        | Playwright               |

## Prérequis

- Node.js 18+
- Une base de données PostgreSQL
- Un compte Stripe
- Un serveur SMTP (pour les emails)

## Installation

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd world_menu

# Installer les dépendances
npm install
```

## Configuration

Créer un fichier `.env` à la racine du projet :

```env
# Base de données
DATABASE_URL="postgresql://user:password@host:5432/dbname?pgbouncer=true"
DIRECT_URL="postgresql://user:password@host:5432/dbname"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="votre-secret-nextauth"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRICE_ID="price_..."

# Email (Nodemailer)
EMAIL_SERVER_HOST="smtp.example.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="votre@email.com"
EMAIL_SERVER_PASSWORD="votre-mot-de-passe"
EMAIL_FROM="noreply@worldmenu.com"
```

## Lancement

```bash
# Appliquer les migrations et générer le client Prisma
npx prisma migrate deploy
npx prisma generate

# (Optionnel) Alimenter la base avec des données de test
npx prisma db seed

# Démarrer le serveur de développement
npm run dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production (génère Prisma + Next.js)
npm run start    # Démarrer en mode production
npm run lint     # Vérification ESLint
```

## Tests

Les tests end-to-end sont écrits avec Playwright et couvrent :

- Affichage et comportement de la page de connexion
- Connexion avec identifiants valides / invalides
- Affichage du bouton d'abonnement
- Redirection Stripe au clic sur le bouton d'abonnement
- Accès aux menus premium sans abonnement

```bash
# Installer les navigateurs Playwright (première fois)
npx playwright install

# Lancer les tests
npx playwright test

# Lancer les tests avec interface graphique
npx playwright test --ui
```

## Structure du projet

```
world_menu/
├── app/
│   ├── page.tsx               # Page d'accueil
│   ├── about/                 # Page À propos
│   ├── menu/                  # Menus par pays (protégé)
│   │   ├── benin/
│   │   └── seychelles/
│   ├── propose/               # Formulaire de suggestion (protégé)
│   ├── profile/               # Profil utilisateur
│   ├── auth/                  # Pages connexion / inscription / reset
│   ├── api/                   # Routes API (auth, profil, Stripe, webhooks)
│   └── components/            # Composants partagés
├── lib/
│   ├── auth.ts                # Configuration NextAuth
│   ├── prisma.ts              # Client Prisma
│   ├── stripe.ts              # Client Stripe
│   └── email.ts               # Service d'envoi d'emails
├── prisma/
│   ├── schema.prisma          # Schéma de base de données
│   └── seed.ts                # Données initiales
├── middleware.ts              # Protection des routes par abonnement
└── tests/                     # Tests Playwright
```

## Modèle de données

- **User** — Compte utilisateur avec informations de profil et données d'abonnement Stripe
- **Account / Session** — Adapters NextAuth pour la gestion des sessions
- **VerificationToken** — Tokens de vérification d'email
- **PasswordResetToken** — Tokens de réinitialisation de mot de passe

## Déploiement

```bash
npm run build
npm run start
```

Pour un déploiement sur Vercel, connectez le dépôt et renseignez toutes les variables d'environnement dans le dashboard Vercel. Pensez également à configurer l'écoute des webhooks Stripe vers votre URL de production (`/api/webhooks/stripe`).
