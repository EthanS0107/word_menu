"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionReveal from "../components/SectionReveal";

export default function About() {
  return (
    <PageTransition className="relative min-h-screen overflow-hidden bg-[#FFFBF5] text-[#2D3047]">
      {/* Warm colorful background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-5rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(224,122,95,0.2),_rgba(224,122,95,0)_72%)] blur-3xl" />
        <div className="absolute -bottom-44 left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(61,139,139,0.18),_rgba(61,139,139,0)_72%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(242,204,143,0.25),_rgba(242,204,143,0)_70%)] blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-24 pt-24 sm:pt-28">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#F4A261]/15 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#3D8B8B]/15 blur-3xl"
        />

        <div className="container relative z-10 mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E07A5F]/15 bg-[#E07A5F]/8 px-4 py-1.5 text-sm text-[#C96040] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#E07A5F]" />
            Notre vision culinaire
          </div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 pb-2 font-display text-5xl font-bold md:text-7xl"
          >
            <span className="gradient-text-white">World</span>{" "}
            <span className="gradient-text">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-4xl text-xl font-light leading-relaxed text-[#5C5F77] md:text-3xl"
          >
            Plus qu&apos;un repas, une invitation au{" "}
            <span className="font-bold text-[#E07A5F]">voyage</span>.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="overflow-hidden px-4 py-24">
        <div className="container mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-shadow relative aspect-square rotate-2 overflow-hidden rounded-3xl border border-[#E07A5F]/10 bg-white transition-transform duration-700 hover:rotate-0">
              <Image
                src="/globe.svg"
                alt="Monde"
                width={600}
                height={600}
                className="h-full w-full object-contain p-16 opacity-90 drop-shadow-md"
              />
            </div>
          </motion.div>

          <div className="w-full md:w-1/2">
            <SectionReveal>
              <h2 className="mb-8 border-l-4 border-[#E07A5F] pl-5 font-display text-4xl text-[#2D3047]">
                Notre Mission
              </h2>
              <p className="mb-8 text-xl font-light leading-relaxed text-[#5C5F77]">
                Chez <span className="font-bold text-[#2D3047]">World Menu</span>,
                nous croyons que la cuisine est le meilleur moyen de découvrir
                une culture. Notre objectif est de briser les frontières
                culinaires et de vous transporter, le temps d&apos;un repas, sur
                les plages des Seychelles, dans les marchés colorés du Bénin, et
                bien au-delà.
              </p>
              <p className="text-xl font-light leading-relaxed text-[#5C5F77]">
                Chaque menu est conçu comme une escale authentique, respectant
                les produits, les épices et les traditions de chaque pays mis à
                l&apos;honneur.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2D3047_1px,transparent_1px)] bg-size-[16px_16px]" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="mb-20 font-display text-4xl gradient-text">
              Nos Valeurs
            </h2>
          </SectionReveal>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <SectionReveal delay={0.2} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full rounded-3xl border border-[#E07A5F]/10 bg-white p-10 card-shadow"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E07A5F]/20 bg-[#E07A5F]/8 text-[#E07A5F]">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
                    <path d="M3 12h18" />
                    <path d="M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21" />
                    <path d="M12 3c-2.5 2.4-3.8 5.4-3.8 9S9.5 18.6 12 21" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#2D3047]">
                  Authenticité
                </h3>
                <p className="text-lg text-[#5C5F77]">
                  Des recettes fidèles aux traditions, sans compromis sur le
                  goût original.
                </p>
              </motion.div>
            </SectionReveal>

            <SectionReveal delay={0.4} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full rounded-3xl border border-[#3D8B8B]/10 bg-white p-10 card-shadow"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#3D8B8B]/20 bg-[#3D8B8B]/8 text-[#3D8B8B]">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M8 12l3 3a2 2 0 002.8 0l5.2-5.2" />
                    <path d="M3.5 9.5l3.2-3.2a2 2 0 012.8 0l3.5 3.5" />
                    <path d="M14.5 12.5l1.8 1.8a2 2 0 002.8 0l1.4-1.4" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#2D3047]">Partage</h3>
                <p className="text-lg text-[#5C5F77]">
                  La cuisine rassemble. Nos plats sont pensés pour créer des
                  moments de convivialité.
                </p>
              </motion.div>
            </SectionReveal>

            <SectionReveal delay={0.6} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full rounded-3xl border border-[#81B29A]/10 bg-white p-10 card-shadow"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#81B29A]/20 bg-[#81B29A]/8 text-[#81B29A]">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M6 15c2.2-5.5 8-8.5 13-9-1 5-4 10.8-9.5 13" />
                    <path d="M5 19c2.5-3.5 6.5-5.5 11.5-6" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#2D3047]">
                  Découverte
                </h3>
                <p className="text-lg text-[#5C5F77]">
                  L&apos;éveil des sens par la découverte de saveurs méconnues
                  et d&apos;ingrédients exotiques.
                </p>
              </motion.div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 text-center">
        <div className="container mx-auto max-w-4xl rounded-3xl border border-[#E07A5F]/10 bg-gradient-to-br from-white to-[#FFF7EE] p-10 card-shadow sm:p-14">
          <SectionReveal>
            <h2 className="mb-8 font-display text-4xl text-[#2D3047]">
              Prêt à embarquer ?
            </h2>
            <p className="mb-10 text-2xl font-light text-[#5C5F77]">
              Rejoignez-nous dans cette aventure culinaire et laissez vos
              papilles explorer le monde.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/menu"
                  className="inline-flex rounded-2xl bg-gradient-to-r from-[#E07A5F] to-[#F4A261] px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_12px_30px_rgba(224,122,95,0.35)]"
                >
                  Voir nos destinations
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/propose"
                  className="inline-flex rounded-2xl border border-[#3D8B8B]/20 bg-[#3D8B8B]/5 px-8 py-3 text-sm font-semibold text-[#3D8B8B] transition-colors hover:bg-[#3D8B8B]/10"
                >
                  Proposer une idée
                </Link>
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
