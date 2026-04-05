"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import SectionReveal from "../../components/SectionReveal";

const flagImage = "/drapeau_Tunisie.webp";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=1200&q=80",
    title: "Tunis",
    caption: "Medina, ruelles et vie locale.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610737241336-371badac3b66?auto=format&fit=crop&w=1200&q=80",
    title: "Littoral",
    caption: "Mer claire et villages blancs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    title: "Oasis",
    caption: "Palmiers, ombre et fraicheur.",
  },
];

const menuItems = [
  {
    course: "Entree",
    name: "Salade Mechouia",
    text: "Legumes grilles, thon, oeufs et huile d'olive.",
    image:
      "https://images.unsplash.com/photo-1548943487-a2e4a6f68f88?auto=format&fit=crop&w=1000&q=80",
  },
  {
    course: "Plat",
    name: "Chapati",
    text: "Galette garnie, sauces relevees et textures moelleuses.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
  },
  {
    course: "Dessert",
    name: "Halkoum",
    text: "Confiserie tendre, fleur d'oranger et notes citronnees.",
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1000&q=80",
  },
];

const timeline = [
  "Heritage mediterraneen et maghrebin.",
  "Cuisine de partage entre terre et mer.",
  "Epices chaudes et douceur orientale.",
];

const signatureDrink = {
  name: "Cafe blanc tunisien",
  desc: "Infusion legere a l'eau de rose, servie tiede en fin de repas.",
  image:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1300&q=80",
};

export default function TunisieMenu() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <PageTransition className="min-h-screen overflow-x-hidden bg-[#12070a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(210,66,84,0.24),transparent_42%),radial-gradient(circle_at_85%_20%,rgba(255,175,80,0.18),transparent_35%)]" />
      <div className="noise pointer-events-none absolute inset-0" />

      <section className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-16 pt-24 md:grid-cols-[1fr_1.05fr] md:px-8">
        <SectionReveal>
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-[#f27f8d]/35 bg-[#3a111b]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd0d4]">
              Tunisie
            </p>

            <h1 className="font-display text-5xl leading-[1.03] sm:text-6xl md:text-7xl">
              Elegance chaude
              <span className="block bg-gradient-to-r from-[#ffb58a] via-[#ff7a88] to-[#ffb58a] bg-clip-text text-transparent">
                et saveurs profondes
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/72 md:text-xl">
              Structure editoriale: une ouverture forte, un recit en timeline et
              des cartes menu nettes pour une lecture plus premium.
            </p>

            <motion.div
              animate={{ rotateY: [8, -8, 8] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-fit [perspective:1000px]"
            >
              <motion.div
                whileHover={{ rotateX: 8, rotateY: -12, scale: 1.03 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-[#f27f8d]/40 bg-[#2b0f17]/80 p-2 shadow-[0_20px_60px_rgba(130,30,45,0.45)]"
              >
                <img
                  src={flagImage}
                  alt="Drapeau tunisien"
                  className="h-24 w-40 rounded-xl object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="rounded-[2rem] border border-[#f27f8d]/30 bg-black/30 p-3">
            <div className="mb-3 flex items-center justify-between px-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd0d4]">
                Diaporama
              </p>
              <p className="text-xs text-white/65">
                {active + 1}/{slides.length}
              </p>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-[1.45rem] border border-white/10 md:h-[520px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[active].image}
                  src={slides[active].image}
                  alt={slides[active].title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.65 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#12070a]/85 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em]">
                  {slides[active].title}
                </p>
                <p className="mt-1 text-sm text-white/75">
                  {slides[active].caption}
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-2 px-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full ${i === active ? "w-10 bg-[#ff8a93]" : "w-4 bg-white/35"}`}
                  aria-label={`Slide ${s.title}`}
                />
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-14 md:px-8">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl border border-[#f27f8d]/25 bg-[#2a0f16]/65 p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb7bf]">
                Histoire
              </p>
              <h2 className="font-display mt-3 text-4xl">Timeline</h2>
            </div>
            <div className="space-y-3">
              {timeline.map((item, idx) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#f27f8d]/20 bg-[#1f0b12]/70 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#ffb7bf]">
                    Etape {idx + 1}
                  </p>
                  <p className="mt-2 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-16 md:px-8">
        <SectionReveal>
          <h2 className="font-display mb-8 text-center text-5xl">
            Menu tunisien
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
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#f27f8d]/25 bg-[#1e0c12]/80"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />
                <div className="flex-1 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffb7bf]">
                    {item.course}
                  </p>
                  <h3 className="font-display mt-2 text-3xl md:min-h-[5.5rem]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.75] text-white/72 md:min-h-[5.25rem]">
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
          <div className="overflow-hidden rounded-[2rem] border border-[#f27f8d]/30 bg-[#1f0b12]/80">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
              <img
                src={signatureDrink.image}
                alt={signatureDrink.name}
                className="h-72 w-full object-cover md:h-full"
              />
              <div className="p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb7bf]">
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
