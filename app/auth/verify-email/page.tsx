"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"loading" | "success" | "error" | "info">(token ? "loading" : "info");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) return;

    let redirectTimer: ReturnType<typeof setTimeout> | null = null;

    fetch(`/api/auth/verify-email?token=${token}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setStatus("error");
          setMessage(data.error);
        } else {
          setStatus("success");
          redirectTimer = setTimeout(() => router.push("/auth/signin"), 3000);
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Une erreur est survenue. Réessayez plus tard.");
      });

    return () => {
      if (redirectTimer) clearTimeout(redirectTimer);
    };
  }, [token, router]);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#FFFBF5] px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-4rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(224,122,95,0.2),_rgba(224,122,95,0)_68%)] blur-2xl" />
        <div className="absolute -bottom-36 left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(61,139,139,0.18),_rgba(61,139,139,0)_72%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-md animate-fade-up text-center">
        <Link href="/" className="inline-block group mb-8">
          <h1 className="font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">
            <span className="gradient-text-white">World</span>{" "}
            <span className="gradient-text">Menu</span>
          </h1>
        </Link>

        <div className="glass card-shadow rounded-3xl border border-[#E07A5F]/10 p-6 sm:p-8">
          {!token && (
            <>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#E07A5F]/20 bg-[#E07A5F]/8">
                <svg className="h-8 w-8 text-[#E07A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="mb-3 font-display text-2xl text-[#2D3047]">Vérifiez votre email</h2>
              <p className="text-sm leading-relaxed text-[#5C5F77]">
                Un email de confirmation a été envoyé à votre adresse.
                <br />
                Cliquez sur le lien dans l&apos;email pour activer votre compte.
              </p>
              <Link href="/auth/signin" className="mt-6 inline-block text-sm font-semibold text-[#E07A5F] transition-colors hover:text-[#C96040]">
                Retour à la connexion
              </Link>
            </>
          )}

          {status === "loading" && (
            <>
              <div className="mb-4 flex justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#E07A5F]/20 border-t-[#E07A5F]" />
              </div>
              <p className="text-sm text-[#5C5F77]">Vérification en cours...</p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#81B29A]/30 bg-[#81B29A]/10">
                <svg className="h-8 w-8 text-[#81B29A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mb-3 font-display text-2xl text-[#2D3047]">Email confirmé !</h2>
              <p className="text-sm text-[#5C5F77]">Votre compte est activé. Vous allez être redirigé vers la page de connexion...</p>
            </>
          )}

          {status === "error" && (
            <>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-red-400/25 bg-red-50">
                <svg className="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="mb-3 font-display text-2xl text-[#2D3047]">Lien invalide ou expiré</h2>
              <p className="mb-6 text-sm text-[#5C5F77]">{message}</p>
              <Link href="/auth/signin" className="inline-block text-sm font-semibold text-[#E07A5F] transition-colors hover:text-[#C96040]">
                Retour à la connexion
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
