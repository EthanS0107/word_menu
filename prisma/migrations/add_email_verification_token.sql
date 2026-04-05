-- Migration: Ajout de la table EmailVerificationToken
-- À exécuter dans le SQL Editor de Supabase si prisma migrate dev échoue

CREATE TABLE IF NOT EXISTS "EmailVerificationToken" (
    "id"        TEXT NOT NULL,
    "email"     TEXT NOT NULL,
    "token"     TEXT NOT NULL,
    "expires"   TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailVerificationToken_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "EmailVerificationToken_token_key" UNIQUE ("token"),
    CONSTRAINT "EmailVerificationToken_email_token_key" UNIQUE ("email", "token")
);
