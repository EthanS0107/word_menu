"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<
    "loading" | "success" | "error" | "info"
  >(token ? "loading" : "info");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) return;

    fetch(`/api/auth/verify-email?token=${token}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setStatus("error");
          setMessage(data.error);
        } else {
          setStatus("success");
          setTimeout(() => router.push("/auth/signin"), 3000);
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Une erreur est survenue. Réessayez plus tard.");
      });
  }, [token, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10 text-center">
        <Link href="/" className="inline-block group mb-8">
          <h1 className="text-5xl font-black">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              World
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Menu
            </span>
          </h1>
        </Link>

        <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-white/80">
          {!token && (
            <>
              <div className="text-5xl mb-4">📧</div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Vérifiez votre email
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Un email de confirmation a été envoyé à votre adresse.
                <br />
                Cliquez sur le lien dans l&apos;email pour activer votre compte.
              </p>
              <Link
                href="/auth/signin"
                className="inline-block mt-6 text-sm text-indigo-600 hover:underline font-semibold"
              >
                Retour à la connexion
              </Link>
            </>
          )}

          {status === "loading" && (
            <>
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full border-4 border-teal-200 border-t-teal-500 animate-spin" />
              </div>
              <p className="text-gray-500 text-sm">Vérification en cours…</p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Email confirmé !
              </h2>
              <p className="text-gray-500 text-sm">
                Votre compte est activé. Vous allez être redirigé vers la page
                de connexion…
              </p>
            </>
          )}

          {status === "error" && (
            <>
              <div className="text-5xl mb-4">❌</div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Lien invalide ou expiré
              </h2>
              <p className="text-gray-500 text-sm mb-6">{message}</p>
              <Link
                href="/auth/signin"
                className="inline-block text-sm text-indigo-600 hover:underline font-semibold"
              >
                Retour à la connexion
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
