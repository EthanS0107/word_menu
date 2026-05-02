"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionReveal from "../components/SectionReveal";

export default function SuggestionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition className="relative min-h-screen overflow-hidden bg-[#FFFBF5] p-4 py-20">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 right-[-5rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(224,122,95,0.2),_rgba(224,122,95,0)_72%)] blur-3xl" />
        <div className="absolute -bottom-40 left-[-6rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(61,139,139,0.18),_rgba(61,139,139,0)_72%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,_rgba(242,204,143,0.25),_rgba(242,204,143,0)_70%)] blur-3xl" />
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="glass card-shadow relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-[#81B29A]/15 p-12 text-center mx-auto"
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E07A5F] via-[#F4A261] to-[#F2CC8F]" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#81B29A]/30 bg-[#81B29A]/10"
            >
              <svg
                className="h-12 w-12 text-[#81B29A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </motion.div>
            <h2 className="mb-4 font-display text-4xl text-[#2D3047]">
              Merci pour votre idée !
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-[#5C5F77]">
              Votre proposition a bien été enregistrée. Nous avons hâte de
              découvrir cette nouvelle destination culinaire.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSubmitted(false)}
              className="text-lg font-bold text-[#E07A5F] underline transition-colors hover:text-[#C96040]"
            >
              Proposer une autre destination
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10 w-full max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 font-display text-5xl text-[#2D3047]"
              >
                Proposez une Destination
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mx-auto max-w-2xl text-xl text-[#5C5F77]"
              >
                Vous rêvez de voir un pays en particulier ? Partagez vos idées
                de menus et aidez-nous à enrichir la carte du monde !
              </motion.p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="glass card-shadow relative overflow-hidden rounded-3xl border border-[#E07A5F]/10 p-8 md:p-14"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F4A261]/15 blur-2xl" />

              <form
                onSubmit={handleSubmit}
                className="space-y-12 relative z-10"
              >
                <SectionReveal>
                  <h2 className="mb-6 border-l-4 border-[#E07A5F] pl-4 font-display text-3xl text-[#2D3047]">
                    La Destination
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="country"
                        className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#5C5F77]"
                      >
                        Pays / Région
                      </label>
                      <input
                        type="text"
                        id="country"
                        required
                        className="w-full rounded-xl border border-[#2D3047]/10 bg-white px-4 py-4 text-[#2D3047] placeholder:text-[#8E90A6] outline-none transition-all duration-300 focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20"
                        placeholder="Ex: Japon, Mexique..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="colors"
                        className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#5C5F77]"
                      >
                        Couleurs Dominantes (Optionnel)
                      </label>
                      <input
                        type="text"
                        id="colors"
                        className="w-full rounded-xl border border-[#2D3047]/10 bg-white px-4 py-4 text-[#2D3047] placeholder:text-[#8E90A6] outline-none transition-all duration-300 focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20"
                        placeholder="Ex: Rouge et Blanc"
                      />
                    </div>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.1}>
                  <h2 className="mb-6 border-l-4 border-[#F4A261] pl-4 font-display text-3xl text-[#2D3047]">
                    Vos Idées Gourmandes
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="dish"
                        className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#5C5F77]"
                      >
                        Plat Phare
                      </label>
                      <input
                        type="text"
                        id="dish"
                        className="w-full rounded-xl border border-[#2D3047]/10 bg-white px-4 py-4 text-[#2D3047] placeholder:text-[#8E90A6] outline-none transition-all duration-300 focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20"
                        placeholder="Quel plat représente le mieux ce pays ?"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="starter"
                          className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#5C5F77]"
                        >
                          Idée d&apos;Entrée
                        </label>
                        <input
                          type="text"
                          id="starter"
                          className="w-full rounded-xl border border-[#2D3047]/10 bg-white px-4 py-4 text-[#2D3047] placeholder:text-[#8E90A6] outline-none transition-all duration-300 focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20"
                          placeholder="..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="dessert"
                          className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#5C5F77]"
                        >
                          Idée de Dessert
                        </label>
                        <input
                          type="text"
                          id="dessert"
                          className="w-full rounded-xl border border-[#2D3047]/10 bg-white px-4 py-4 text-[#2D3047] placeholder:text-[#8E90A6] outline-none transition-all duration-300 focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20"
                          placeholder="..."
                        />
                      </div>
                    </div>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                  <h2 className="mb-6 border-l-4 border-[#81B29A] pl-4 font-display text-3xl text-[#2D3047]">
                    Pourquoi cette destination ?
                  </h2>
                  <textarea
                    id="description"
                    rows={5}
                    className="w-full resize-none rounded-xl border border-[#2D3047]/10 bg-white px-4 py-4 text-[#2D3047] placeholder:text-[#8E90A6] outline-none transition-all duration-300 focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20"
                    placeholder="Racontez-nous l'ambiance, une anecdote ou pourquoi ce pays vous tient à coeur..."
                  ></textarea>
                </SectionReveal>

                <SectionReveal delay={0.3} className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-[#E07A5F] to-[#F4A261] py-5 text-xl font-bold text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(224,122,95,0.35)]"
                  >
                    Envoyer ma suggestion
                  </motion.button>
                </SectionReveal>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
