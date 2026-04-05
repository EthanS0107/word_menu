import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function getAppUrl(): string {
  if (process.env.APP_URL) return process.env.APP_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NEXTAUTH_URL) return process.env.NEXTAUTH_URL;
  return "http://localhost:3000";
}

export async function sendEmailVerification(email: string, token: string) {
  const verifyUrl = `${getAppUrl()}/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: email,
    subject: "Confirmez votre adresse email - World Menu",
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="font-size: 28px; font-weight: 900; margin: 0;">
            <span style="color: #111827;">World</span>
            <span style="color: #0d9488;"> Menu</span>
          </h1>
        </div>

        <div style="background: #ffffff; border-radius: 16px; padding: 32px; border: 1px solid #e5e7eb;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin-top: 0;">
            Confirmez votre adresse email
          </h2>

          <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
            Merci de vous être inscrit sur <strong>World Menu</strong> !<br/>
            Cliquez sur le bouton ci-dessous pour confirmer votre adresse email et activer votre compte.
          </p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${verifyUrl}"
               style="display: inline-block; background: linear-gradient(to right, #0d9488, #10b981); color: white; font-weight: 700; font-size: 14px; padding: 14px 32px; border-radius: 12px; text-decoration: none;">
              Confirmer mon email
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; line-height: 1.5;">
            Ce lien expire dans 24 heures. Si vous n'avez pas créé de compte, vous pouvez ignorer cet email.
          </p>

          <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 20px 0;" />

          <p style="color: #d1d5db; font-size: 11px;">
            Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :<br/>
            <a href="${verifyUrl}" style="color: #0d9488; word-break: break-all;">${verifyUrl}</a>
          </p>
        </div>
      </div>
    `,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${getAppUrl()}/auth/reset-password?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: email,
    subject: "Réinitialisation de votre mot de passe - World Menu",
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="font-size: 28px; font-weight: 900; margin: 0;">
            <span style="color: #111827;">World</span>
            <span style="color: #0d9488;"> Menu</span>
          </h1>
        </div>
        
        <div style="background: #ffffff; border-radius: 16px; padding: 32px; border: 1px solid #e5e7eb;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin-top: 0;">
            Réinitialisation de mot de passe
          </h2>
          
          <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
            Vous avez demandé la réinitialisation de votre mot de passe. 
            Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" 
               style="display: inline-block; background: linear-gradient(to right, #4f46e5, #2563eb); color: white; font-weight: 700; font-size: 14px; padding: 14px 32px; border-radius: 12px; text-decoration: none;">
              Réinitialiser mon mot de passe
            </a>
          </div>
          
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.5;">
            Ce lien expire dans 1 heure. Si vous n'avez pas demandé cette réinitialisation, 
            vous pouvez ignorer cet email en toute sécurité.
          </p>
          
          <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 20px 0;" />
          
          <p style="color: #d1d5db; font-size: 11px;">
            Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :<br/>
            <a href="${resetUrl}" style="color: #6366f1; word-break: break-all;">${resetUrl}</a>
          </p>
        </div>
      </div>
    `,
  });
}
