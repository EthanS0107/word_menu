"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Une erreur est survenue.");
      } else {
        setSent(true);
      }
    } catch {
      setError("Une erreur est survenue. Réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#FFFBF5] px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-4rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(224,122,95,0.2),_rgba(224,122,95,0)_68%)] blur-2xl" />
        <div className="absolute -bottom-36 left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(61,139,139,0.18),_rgba(61,139,139,0)_72%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-md animate-fade-up">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block group">
            <h1 className="font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">
              <span className="gradient-text-white">World</span>{" "}
              <span className="gradient-text">Menu</span>
            </h1>
          </Link>
          <p className="mt-3 text-sm text-[#5C5F77]">
            Réinitialisation du mot de passe
          </p>
        </div>

        <div className="glass card-shadow rounded-3xl border border-[#E07A5F]/10 p-6 sm:p-8">
          {sent ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#81B29A]/30 bg-[#81B29A]/10">
                <svg className="h-8 w-8 text-[#81B29A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="mb-2 font-display text-2xl text-[#2D3047]">Email envoyé</h2>
              <p className="mb-5 text-sm leading-relaxed text-[#5C5F77]">
                Si un compte existe avec l&apos;adresse <strong>{email}</strong>, vous recevrez un lien de réinitialisation dans quelques instants.
              </p>
              <p className="mb-6 text-xs text-[#8E90A6]">Pensez à vérifier vos spams si vous ne trouvez pas l&apos;email.</p>
              <Link href="/auth/signin" className="inline-flex items-center gap-2 text-sm font-semibold text-[#E07A5F] transition-colors hover:text-[#C96040]">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour à la connexion
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#E07A5F]/20 bg-[#E07A5F]/8">
                  <svg className="h-8 w-8 text-[#E07A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h2 className="mb-1 font-display text-2xl text-[#2D3047]">Mot de passe oublié</h2>
                <p className="text-sm text-[#5C5F77]">Entrez votre email et nous vous enverrons un lien pour réinitialiser votre mot de passe.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#8E90A6]">Adresse email</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E90A6]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" className="w-full rounded-xl border border-[#2D3047]/10 bg-white py-3 pr-4 pl-10 text-sm text-[#2D3047] placeholder:text-[#8E90A6] outline-none transition focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20" />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-400/25 bg-red-50 px-4 py-3 text-sm text-red-600">
                    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {error}
                  </div>
                )}

                <button type="submit" disabled={loading} className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E07A5F] to-[#F4A261] px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(224,122,95,0.35)] disabled:cursor-not-allowed disabled:opacity-50">
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      Envoyer le lien
                    </>
                  )}
                </button>
              </form>
            </>
          )}

          {!sent && (
            <>
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#2D3047]/8" />
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#8E90A6]">ou</span>
                <div className="h-px flex-1 bg-[#2D3047]/8" />
              </div>
              <p className="text-center text-sm text-[#5C5F77]">
                Vous vous souvenez ?{" "}
                <Link href="/auth/signin" className="font-semibold text-[#E07A5F] transition-colors hover:text-[#C96040]">Se connecter</Link>
              </p>
            </>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#8E90A6] transition-colors hover:text-[#2D3047]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
