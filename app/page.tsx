import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import SubscribeButton from "./components/SubscribeButton";

const AUTH_DISABLED = true;

type LandingSession = {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
    isActive?: boolean;
    isAdmin?: boolean;
  };
};

export default async function LandingPage() {
  const session: LandingSession | null = AUTH_DISABLED
    ? {
        user: {
          id: "guest-user",
          name: "Invité",
          email: "invite@worldmenu.local",
          isActive: true,
          isAdmin: false,
        },
      }
    : ((await getServerSession(authOptions)) as LandingSession | null);

  const isActive = !!session?.user?.isActive;
  const isAdmin = !!session?.user?.isAdmin;
  const isSubscribed = isActive || isAdmin;

  const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFFBF5]">
      {/* Warm colorful background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-5rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(224,122,95,0.25),_rgba(224,122,95,0)_70%)] blur-3xl" />
        <div className="absolute -bottom-40 left-[-6rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(61,139,139,0.2),_rgba(61,139,139,0)_72%)] blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,_rgba(242,204,143,0.3),_rgba(242,204,143,0)_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-14 pb-16 text-center lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E07A5F]/20 bg-[#E07A5F]/8 px-4 py-1.5 text-sm font-medium text-[#C96040] backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#E07A5F]" />
          Explorez les cuisines du monde
        </div>

        <h1 className="mb-6 font-display text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="gradient-text-white">World</span>{" "}
          <span className="gradient-text">Menu</span>
        </h1>

        <p className="mx-auto mb-12 mt-2 max-w-2xl text-lg leading-relaxed text-[#5C5F77] sm:text-xl">
          Découvrez les saveurs du monde entier. Abonnez-vous pour accéder à nos
          menus exclusifs et nos propositions culinaires.
        </p>

        <div className="mb-10 flex items-center justify-center gap-6 text-3xl">
          {["🇫🇷", "🇯🇵", "🇲🇽", "🇮🇹", "🇮🇳", "🇧🇯", "🇸🇨"].map((flag, i) => (
            <span
              key={i}
              className="cursor-default transition-all duration-300 hover:scale-125"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {flag}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-6 w-full">
          {!session ? (
            <div className="glass card-shadow w-full max-w-sm rounded-3xl border border-[#E07A5F]/10 p-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E07A5F]/20 bg-[#E07A5F]/10 text-[#E07A5F]">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div className="mb-5 text-center">
                <h3 className="mb-1 font-display text-2xl text-[#2D3047]">
                  Commencez l&apos;aventure
                </h3>
                <p className="text-sm text-[#5C5F77]">
                  Créez votre compte en quelques secondes.
                </p>
              </div>

              <Link
                href="/auth/signin"
                className="block w-full rounded-2xl bg-gradient-to-r from-[#E07A5F] to-[#F4A261] px-5 py-3.5 text-center text-sm font-bold text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(224,122,95,0.35)]"
              >
                Se connecter avec Email
              </Link>

              <p className="mt-4 text-center text-xs text-[#8E90A6]">
                Pas encore de compte ? Il sera créé automatiquement.
              </p>
            </div>
          ) : (
            <div className="glass card-shadow w-full max-w-md overflow-hidden rounded-3xl border border-[#E07A5F]/10">
              <div className="relative overflow-hidden border-b border-[#E07A5F]/10 bg-gradient-to-r from-[#E07A5F] via-[#F4A261] to-[#F2CC8F] px-8 py-6 text-white">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20" />
                <div className="absolute bottom-0 left-0 h-20 w-20 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/20" />
                <div className="relative z-10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-xl font-bold">
                    {(
                      session.user.name?.[0] ||
                      session.user.email?.[0] ||
                      "U"
                    ).toUpperCase()}
                  </div>
                  <p className="text-lg font-bold text-white">
                    Bienvenue,{" "}
                    {session.user.name || session.user.email?.split("@")[0]} !
                  </p>
                  <p className="mt-1 break-all text-sm text-white/75">
                    {session.user.email}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Link
                    href="/profile"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#E07A5F] transition-colors hover:text-[#C96040]"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Mon profil
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  {isSubscribed && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#81B29A]/30 bg-[#81B29A]/10 px-3 py-1 text-xs font-bold text-[#5A8F73]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#81B29A]" />
                      Abonné
                    </span>
                  )}
                </div>

                {!isSubscribed ? (
                  <div className="rounded-2xl border border-[#E07A5F]/15 bg-[#E07A5F]/5 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#E07A5F] to-[#F4A261] text-white shadow-[0_8px_24px_rgba(224,122,95,0.3)]">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <p className="mb-1 text-sm text-[#5C5F77]">
                      Débloquez tous les menus
                    </p>
                    <p className="mb-1 text-3xl font-black text-[#2D3047]">
                      9.99€
                      <span className="text-base font-medium text-[#8E90A6]">
                        /mois
                      </span>
                    </p>
                    <p className="mb-5 text-xs text-[#8E90A6]">
                      Accès illimité à toutes les destinations
                    </p>
                    {STRIPE_PRICE_ID ? (
                      <SubscribeButton priceId={STRIPE_PRICE_ID} />
                    ) : (
                      <p className="text-xs text-red-400">
                        Erreur de configuration (ID Prix Stripe manquant)
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#81B29A]/30 bg-[#81B29A]/10">
                      <svg
                        className="h-8 w-8 text-[#81B29A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="mb-1 text-lg font-bold text-[#81B29A]">
                      Vous êtes abonné !
                    </p>
                    <p className="mb-6 text-sm text-[#8E90A6]">
                      Toutes les destinations sont débloquées.
                    </p>
                    <Link
                      href="/menu"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E07A5F] to-[#F4A261] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(224,122,95,0.35)]"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                        />
                      </svg>
                      Accéder au Menu
                    </Link>
                  </div>
                )}

                <div className="mt-6 border-t border-[#2D3047]/8 pt-5 text-center">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-xs text-[#8E90A6] transition-colors duration-200 hover:text-[#2D3047]"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Continuer la visite
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
