import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { randomUUID } from "crypto";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email et mot de passe",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "votre@email.com",
        },
        password: { label: "Mot de passe", type: "password" },
        firstName: { label: "Prénom", type: "text" },
        lastName: { label: "Nom", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = credentials.email.toLowerCase().trim();
        const password = credentials.password;

        try {
          let user = await prisma.user.findUnique({ where: { email } });

          if (!user) {
            // Création d'un nouvel utilisateur avec hash du mot de passe
            const hashedPassword = await bcrypt.hash(password, 10);
            const firstName = credentials.firstName?.trim() || null;
            const lastName = credentials.lastName?.trim() || null;
            const name =
              [firstName, lastName].filter(Boolean).join(" ") || null;

            user = await prisma.user.create({
              data: {
                email,
                password: hashedPassword,
                firstName,
                lastName,
                name,
                id: randomUUID(),
              },
            });

            // Création du client Stripe
            try {
              const customer = await stripe.customers.create({
                email: user.email!,
                metadata: { userId: user.id },
              });
              await prisma.user.update({
                where: { id: user.id },
                data: { stripeCustomerId: customer.id },
              });
            } catch (error) {
              console.error("Erreur création stripe customer", error);
            }
          } else {
            // Vérification du mot de passe
            if (
              !user.password ||
              !(await bcrypt.compare(password, user.password))
            ) {
              return null;
            }
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      // Rafraîchir les infos d'abonnement depuis la DB
      if (token.id) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: { stripeSubscriptionId: true, isAdmin: true },
        });
        if (dbUser) {
          token.isActive = !!dbUser.stripeSubscriptionId;
          token.isAdmin = !!dbUser.isAdmin;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;

        // Fetch the latest user data from the database
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
        });

        if (dbUser) {
          session.user.stripeCustomerId = dbUser.stripeCustomerId;
          session.user.isActive = !!dbUser.stripeSubscriptionId;
          session.user.isAdmin = !!dbUser.isAdmin;
          session.user.firstName = dbUser.firstName;
          session.user.lastName = dbUser.lastName;
          session.user.phone = dbUser.phone;
          session.user.city = dbUser.city;
          session.user.country = dbUser.country;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
