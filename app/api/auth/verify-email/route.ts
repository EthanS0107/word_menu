import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token manquant." }, { status: 400 });
  }

  const verificationToken = await prisma.emailVerificationToken.findUnique({
    where: { token },
  });

  if (!verificationToken) {
    return NextResponse.json({ error: "Token invalide." }, { status: 400 });
  }

  if (verificationToken.expires < new Date()) {
    await prisma.emailVerificationToken.delete({ where: { token } });
    return NextResponse.json({ error: "Token expiré." }, { status: 400 });
  }

  await prisma.user.update({
    where: { email: verificationToken.email },
    data: { emailVerified: new Date() },
  });

  await prisma.emailVerificationToken.delete({ where: { token } });

  return NextResponse.json({ message: "Email vérifié avec succès." });
}
