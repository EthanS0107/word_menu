"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import SectionReveal from "../../components/SectionReveal";

const flagImage = "/drapeau_Benin.png";

const slides = [
  { image: "/benin_plage_1.jpg", title: "Cotonou" },
  { image: "/ata.jpg", title: "Ata" },
  { image: "/wassa_wassa.jpg", title: "Wassa-Wassa" },
  { image: "/bouye.jpg", title: "Bouye" },
];

const menuItems = [
  {
    course: "Entree",
    name: "Ata",
    text: "Beignets croustillants de haricots blancs.",
    image: "/ata.jpg",
    accent: "#E8112D",
  },
  {
    course: "Plat",
    name: "Wassa-Wassa",
    text: "Semoule de manioc, poisson braise et sauce epicee.",
    image: "/wassa_wassa.jpg",
    accent: "#008751",
  },
  {
    course: "Dessert",
    name: "Salade tropicale",
    text: "Mangue, ananas et papaye bien fraiches.",
    image: "/salade_de_fruits_tropicaux.jpeg",
    accent: "#FCD116",
  },
];

const signatureDrink = {
  name: "Bouye",
  desc: "Boisson au fruit de baobab, veloutee, douce et tres rafraichissante.",
  image: "/bouye.jpg",
};

export default function BeninMenu() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <PageTransition className="min-h-screen overflow-x-hidden bg-[#07110a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(0,135,81,0.24),transparent_40%),radial-gradient(circle_at_84%_22%,rgba(232,17,45,0.2),transparent_35%),radial-gradient(circle_at_70%_84%,rgba(252,209,22,0.2),transparent_38%)]" />
      <div className="noise pointer-events-none absolute inset-0" />

      <section className="relative mx-auto max-w-7xl px-6 pb-8 pt-20 md:px-8">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-3">
            <div className="relative h-[370px] overflow-hidden rounded-[1.4rem] border border-white/10 md:h-[520px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[active].image}
                  src={slides[active].image}
                  alt={slides[active].title}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.55 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9ef2c3]">
                Benin
              </div>

              <motion.div
                whileHover={{ rotateX: 8, rotateY: -12, scale: 1.03 }}
                transition={{ duration: 0.35 }}
                className="absolute right-5 top-5 [perspective:1000px]"
              >
                <img
                  src={flagImage}
                  alt="Drapeau beninois"
                  className="h-24 w-40 rounded-xl border border-white/30 object-cover shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                />
              </motion.div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <h1 className="font-display text-4xl sm:text-5xl">
                    Benin en mouvement
                  </h1>
                  <p className="mt-2 text-white/80">
                    Couleurs franches, rythme fort, cuisine de caractere.
                  </p>
                </div>
                <p className="rounded-full bg-black/45 px-3 py-1 text-xs text-white/75">
                  {active + 1}/{slides.length}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`overflow-hidden rounded-xl border ${i === active ? "border-[#FCD116]" : "border-white/20"}`}
                  aria-label={`Slide ${s.title}`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-14 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-14 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.1fr]">
          <SectionReveal>
            <div className="rounded-3xl border border-white/15 bg-[#102116]/80 p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ef2c3]">
                Atmosphere
              </p>
              <h2 className="font-display mt-3 text-4xl">Tricolore vivant</h2>
              <p className="mt-4 text-white/75">
                Cette page adopte une structure hero panoramique puis des blocs
                compacts. Le contenu suit l'energie du drapeau: vert, rouge,
                jaune.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="h-2 w-14 rounded-full bg-[#008751]" />
                <span className="h-2 w-14 rounded-full bg-[#E8112D]" />
                <span className="h-2 w-14 rounded-full bg-[#FCD116]" />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#E8112D]/35 bg-[#1f1313]/75 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#ff9fa8]">
                  Capitale
                </p>
                <p className="mt-2 text-lg">Porto-Novo</p>
              </div>
              <div className="rounded-2xl border border-[#008751]/35 bg-[#112016]/75 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#9ef2c3]">
                  Culture
                </p>
                <p className="mt-2 text-lg">Rythmes et artisanat</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-[#FCD116]/35 bg-[#221d0f]/70 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#ffe999]">
                  Gout
                </p>
                <p className="mt-2 text-lg">
                  Cuisine franche, epicee et conviviale
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-16 md:px-8">
        <SectionReveal>
          <h2 className="font-display mb-8 text-center text-5xl">
            Menu beninois
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-fr">
          {menuItems.map((item, i) => (
            <SectionReveal
              key={item.name}
              delay={0.1 * (i + 1)}
              className="h-full"
            >
              <motion.article
                whileHover={{ y: -8 }}
                className="flex h-full flex-col overflow-hidden rounded-3xl border bg-[#102116]/85"
                style={{ borderColor: `${item.accent}66` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />
                <div className="flex-1 p-6">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{ color: item.accent }}
                  >
                    {item.course}
                  </p>
                  <h3 className="font-display mt-2 text-3xl md:min-h-[5.5rem]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.75] text-white/75 md:min-h-[5.25rem]">
                    {item.text}
                  </p>
                </div>
                <div className="h-1" style={{ backgroundColor: item.accent }} />
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-8 md:pb-32">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-5 rounded-[2rem] border border-white/15 bg-[#0f1f15]/85 p-3 md:grid-cols-[1fr_1fr]">
            <img
              src={signatureDrink.image}
              alt={signatureDrink.name}
              className="h-72 w-full rounded-[1.4rem] object-cover md:h-full"
            />
            <div className="rounded-[1.4rem] bg-[#102116]/85 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ef2c3]">
                Boisson signature
              </p>
              <h2 className="font-display mt-3 text-4xl sm:text-5xl">
                {signatureDrink.name}
              </h2>
              <p className="mt-5 text-white/75">{signatureDrink.desc}</p>
            </div>
          </div>
        </SectionReveal>
      </section>
    </PageTransition>
  );
}
