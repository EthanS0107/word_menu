'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionReveal from "../components/SectionReveal";

export default function About() {
  return (
    <PageTransition className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-50 overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div 
           animate={{ x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"
        ></motion.div>
        <motion.div 
           animate={{ x: [0, -30, 0], y: [0, -50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"
        ></motion.div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-8 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pb-2"
          >
            Menus du Monde
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Plus qu'un repas, une invitation au <span className="text-blue-600 font-bold">voyage</span>.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <motion.div 
             className="w-full md:w-1/2"
             initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 bg-linear-to-br from-blue-50 to-white border border-blue-100">
              <Image
                src="/globe.svg"
                alt="Monde"
                width={600}
                height={600}
                className="object-contain w-full h-full p-16 drop-shadow-md"
              />
            </div>
          </motion.div>
          
          <div className="w-full md:w-1/2">
             <SectionReveal>
                <h2 className="text-4xl font-bold mb-8 text-gray-900 border-l-8 border-blue-500 pl-6">
                  Notre Mission
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                  Chez <span className="font-bold text-gray-900">Menus du Monde</span>, nous croyons que la cuisine est le meilleur moyen de découvrir une culture. 
                  Notre objectif est de briser les frontières culinaires et de vous transporter, le temps d'un repas, 
                  sur les plages des Seychelles, dans les marchés colorés du Bénin, et bien au-delà.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Chaque menu est conçu comme une escale authentique, respectant les produits, les épices et les traditions de chaque pays mis à l'honneur.
                </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px]"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <SectionReveal>
             <h2 className="text-4xl font-bold mb-20 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">Nos Valeurs</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            <SectionReveal delay={0.2} className="h-full">
              <motion.div whileHover={{ y: -10 }} className="p-10 bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 h-full flex flex-col items-center">
                <div className="text-6xl mb-6 bg-gray-900 w-24 h-24 flex items-center justify-center rounded-full shadow-lg">🌍</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Authenticité</h3>
                <p className="text-gray-400 text-lg">
                  Des recettes fidèles aux traditions, sans compromis sur le goût original.
                </p>
              </motion.div>
            </SectionReveal>

            <SectionReveal delay={0.4} className="h-full">
              <motion.div whileHover={{ y: -10 }} className="p-10 bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 h-full flex flex-col items-center">
                <div className="text-6xl mb-6 bg-gray-900 w-24 h-24 flex items-center justify-center rounded-full shadow-lg">🤝</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Partage</h3>
                <p className="text-gray-400 text-lg">
                  La cuisine rassemble. Nos plats sont pensés pour créer des moments de convivialité.
                </p>
              </motion.div>
            </SectionReveal>

            <SectionReveal delay={0.6} className="h-full">
              <motion.div whileHover={{ y: -10 }} className="p-10 bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 h-full flex flex-col items-center">
                <div className="text-6xl mb-6 bg-gray-900 w-24 h-24 flex items-center justify-center rounded-full shadow-lg">🌱</div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">Découverte</h3>
                <p className="text-gray-400 text-lg">
                  L'éveil des sens par la découverte de saveurs méconnues et d'ingrédients exotiques.
                </p>
              </motion.div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* Contact snippet */}
      <section className="py-24 px-4 text-center bg-blue-50">
        <div className="container mx-auto max-w-4xl">
           <SectionReveal>
             <h2 className="text-4xl font-black mb-8 text-gray-900">
               Prêt à embarquer ?
             </h2>
             <p className="text-2xl text-gray-600 mb-10 font-light">
               Rejoignez-nous dans cette aventure culinaire et laissez vos papilles explorer le monde.
             </p>
             <motion.a
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               href="/"
               className="inline-block px-10 py-5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all"
             >
               Voir nos destinations
             </motion.a>
           </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
