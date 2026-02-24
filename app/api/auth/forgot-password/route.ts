import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendPasswordResetEmail } from "@/lib/email";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email requis." }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Toujours répondre OK pour ne pas révéler si l'email existe
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (user) {
      // Supprimer les anciens tokens pour cet email
      await prisma.passwordResetToken.deleteMany({
        where: { email: normalizedEmail },
      });

      // Créer un nouveau token (expire dans 1 heure)
      const token = randomUUID();
      await prisma.passwordResetToken.create({
        data: {
          email: normalizedEmail,
          token,
          expires: new Date(Date.now() + 3600 * 1000), // 1 heure
        },
      });

      // Envoyer l'email
      try {
        await sendPasswordResetEmail(normalizedEmail, token);
      } catch (emailError) {
        console.error("Erreur envoi email de réinitialisation:", emailError);
        // On ne renvoie pas d'erreur au client pour ne pas révéler d'info
      }
    }

    return NextResponse.json({
      message:
        "Si un compte existe avec cet email, un lien de réinitialisation a été envoyé.",
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 },
    );
  }
}
