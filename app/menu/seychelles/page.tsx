"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import SectionReveal from "../../components/SectionReveal";

const flagImage = "/drapeau_Seychelles.png";

const slides = [
  {
    image: "/seychelles_plage_1.webp",
    title: "Anse turquoise",
    caption: "Eaux claires et sable fin.",
  },
  {
    image: "/seychelles_plage_2.webp",
    title: "Lagons",
    caption: "Reflets marins et lumiere douce.",
  },
  {
    image: "/seychelles_plage_3.jpg",
    title: "Cote sauvage",
    caption: "Nature dense et roche granitique.",
  },
  {
    image: "/seychelles_plage_4.jpg",
    title: "Coucher",
    caption: "Couleurs chaudes et brise oceanique.",
  },
];

const menuItems = [
  {
    course: "Entree",
    name: "Salade de Palmiste",
    text: "Coeur de palmier et legumes croquants au citron.",
    image: "/salade_de_fruits_tropicaux.jpeg",
  },
  {
    course: "Plat",
    name: "Chutney de Requin",
    text: "Poisson mijote, gingembre, ail, tomates et piment.",
    image: "/chutney_de_requin.webp",
  },
  {
    course: "Dessert",
    name: "Ladob",
    text: "Banane, patate douce et lait de coco vanille.",
    image: "/le_ladob.jpg",
  },
];

const signatureDrink = {
  name: "Jus tropical des Seychelles",
  desc: "Fruits presses minute, tres frais et parfumes pour prolonger la touche creole.",
  image: "/seychelles_plage_5.jpg",
};

export default function SeychellesMenu() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 3300);
    return () => window.clearInterval(id);
  }, []);

  return (
    <PageTransition className="min-h-screen overflow-x-hidden bg-[#071428] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(46,168,255,0.22),transparent_40%),radial-gradient(circle_at_84%_20%,rgba(14,165,160,0.24),transparent_34%),radial-gradient(circle_at_70%_84%,rgba(255,153,110,0.2),transparent_36%)]" />
      <div className="noise pointer-events-none absolute inset-0" />

      <section className="relative mx-auto max-w-7xl px-6 pb-12 pt-22 md:px-8 md:pt-24">
        <SectionReveal>
          <div className="text-center">
            <p className="mx-auto mb-6 w-fit rounded-full border border-[#63d7ff]/35 bg-[#0f2946]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b7eeff]">
              Seychelles
            </p>
            <h1 className="font-display text-5xl leading-[1.03] sm:text-6xl md:text-7xl">
              Archipel lumineux,
              <span className="block bg-gradient-to-r from-[#88ecff] via-[#6cf2c7] to-[#ffb59b] bg-clip-text text-transparent">
                energie oceanique
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/76">
              Composition immersive en axe central: drapeau totem, diaporama
              filmstrip et cartes menu flottantes pour un style resort premium.
            </p>

            <motion.div
              className="mx-auto mt-8 w-fit [perspective:1200px]"
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                animate={{
                  rotateY: [0, 14, 0, -14, 0],
                  rotateX: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-[1.6rem] border border-[#63d7ff]/45 bg-[#10314f]/65 p-3 shadow-[0_24px_80px_rgba(14,165,160,0.35)]"
              >
                <img
                  src={flagImage}
                  alt="Drapeau seychellois"
                  className="h-28 w-48 rounded-[1.2rem] object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </SectionReveal>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-14 md:px-8">
        <SectionReveal>
          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-3">
            <div className="relative h-[370px] overflow-hidden rounded-[1.45rem] border border-white/10 md:h-[510px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[active].image}
                  src={slides[active].image}
                  alt={slides[active].title}
                  initial={{ opacity: 0, y: 18, scale: 1.03 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#071428]/82 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em]">
                  {slides[active].title}
                </p>
                <p className="mt-1 text-sm text-white/75">
                  {slides[active].caption}
                </p>
              </div>
              <p className="absolute right-5 top-5 rounded-full bg-black/45 px-3 py-1 text-xs text-white/75">
                {active + 1}/{slides.length}
              </p>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`overflow-hidden rounded-xl border ${i === active ? "border-[#88ecff]" : "border-white/20"}`}
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <SectionReveal>
            <div className="rounded-2xl border border-[#63d7ff]/30 bg-[#0e2743]/70 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#b7eeff]">
                Capitale
              </p>
              <p className="mt-2 text-lg">Victoria</p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="rounded-2xl border border-[#63d7ff]/30 bg-[#0e2743]/70 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#b7eeff]">
                Cadre
              </p>
              <p className="mt-2 text-lg">Ocean Indien</p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="rounded-2xl border border-[#63d7ff]/30 bg-[#0e2743]/70 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#b7eeff]">
                Identite
              </p>
              <p className="mt-2 text-lg">Bleu, turquoise, corail</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-16 md:px-8">
        <SectionReveal>
          <h2 className="font-display mb-8 text-center text-5xl">
            Menu seychellois
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
                whileHover={{ y: -10, rotateX: 6 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col rounded-3xl border border-[#63d7ff]/30 bg-[#0d243d]/80 p-4 [transform-style:preserve-3d]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full rounded-2xl object-cover"
                />
                <div className="flex-1 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#88ecff]">
                    {item.course}
                  </p>
                  <h3 className="font-display mt-2 text-3xl md:min-h-[5.5rem]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.75] text-white/75 md:min-h-[5.25rem]">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-8 md:pb-32">
        <SectionReveal>
          <div className="overflow-hidden rounded-[2rem] border border-[#63d7ff]/30 bg-[#0d243d]/80">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.05fr]">
              <img
                src={signatureDrink.image}
                alt={signatureDrink.name}
                className="h-72 w-full object-cover md:h-full"
              />
              <div className="p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b7eeff]">
                  Boisson signature
                </p>
                <h2 className="font-display mt-3 text-4xl sm:text-5xl">
                  {signatureDrink.name}
                </h2>
                <p className="mt-5 text-white/75">{signatureDrink.desc}</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>
    </PageTransition>
  );
}
