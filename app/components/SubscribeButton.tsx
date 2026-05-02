"use client";

import { useState } from "react";

export default function SubscribeButton({ priceId }: { priceId: string }) {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId,
        }),
      });

      if (res.ok) {
        const { url } = await res.json();
        window.location.href = url;
      } else {
        console.error("Failed to create checkout session");
        alert("Erreur lors de la création de la session de paiement");
      }
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      disabled={loading}
      className="w-full rounded-2xl bg-gradient-to-r from-[#E07A5F] to-[#F4A261] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_15px_rgba(224,122,95,0.3)] transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(224,122,95,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Redirection..." : "S'abonner pour 9.99€/mois"}
    </button>
  );
}
