"use client";

import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import SectionReveal from "../../components/SectionReveal";

export default function SeychellesMenu() {
  return (
    <PageTransition className="min-h-screen font-sans text-gray-800 bg-white overflow-x-hidden">
      {/* --- SECTION 1: HERO --- */}
      {/* Background stylized with Seychelles flag colors roughly */}
      <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-white overflow-hidden">
        {/* Abstract Background Shapes mimicking the flag rays */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-[60%] bg-[#003D88] origin-bottom-left -skew-y-6 transform scale-150 translate-x-[-20%]"
          ></motion.div>{" "}
          {/* Blue */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-0 right-0 w-[70%] h-full bg-[#D12421] origin-bottom-left skew-x-12 opacity-90"
          ></motion.div>{" "}
          {/* Red */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 left-[30%] w-[30%] h-full bg-[#FCD856] origin-bottom-left skew-x-12 opacity-90"
          ></motion.div>{" "}
          {/* Yellow */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 w-full h-[150px] bg-[#007A3D]"
          ></motion.div>{" "}
          {/* Green */}
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col md:flex-row items-center h-full">
          {/* Text Area */}
          <div className="w-full md:w-1/2 p-8 bg-white/90 rounded-[40px] shadow-xl backdrop-blur-sm md:mr-8 mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight"
            >
              Menu typique <br />
              <span className="text-black">seychellois</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl font-bold uppercase tracking-wide leading-relaxed text-gray-900"
            >
              Laissez-vous porter par les saveurs ensoleillées des Seychelles,
              là où l'océan rencontre l'excellence culinaire.
            </motion.p>
          </div>

          {/* Images Grid (Mockup) */}
          <div className="w-full md:w-1/2 flex flex-wrap gap-4 h-[500px]">
            <div className="w-full h-1/2 flex gap-4">
              {/* Replace with your beach/rock images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="flex-1 bg-gray-300 rounded-3xl bg-[url('/seychelles_plage_1.webp')] bg-cover bg-center border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="flex-1 bg-gray-300 rounded-3xl bg-[url('/seychelles_plage_2.webp')] bg-cover bg-center border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300 translate-y-8"
              ></motion.div>
            </div>
            <div className="w-full h-1/2 flex gap-4 mt-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="flex-1 bg-gray-300 rounded-3xl bg-[url('/seychelles_plage_3.jpg')] bg-cover bg-center border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
                className="flex-1 bg-gray-300 rounded-3xl bg-[url('/seychelles_plage_4.jpg')] bg-cover bg-center border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300 translate-y-8"
              ></motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: HISTORY --- */}
      <section className="relative py-20 px-4 bg-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#D12421] -skew-x-12 translate-x-1/4 z-0"></div>
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-[#003D88] -skew-y-3 z-0"></div>

        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center max-w-6xl">
          <SectionReveal className="w-full md:w-2/3">
            <div className="bg-white p-10 md:p-16 rounded-[50px] shadow-2xl relative">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 border-l-8 border-[#FCD856] pl-4">
                Les Seychelles
              </h2>
              <p className="text-lg leading-relaxed font-semibold text-gray-800">
                Les Seychelles étaient inhabitées avant l’arrivée des Européens.
                Colonisées par la France puis par le Royaume-Uni, elles
                deviennent indépendantes en 1976. Après une période de régime à
                parti unique, la démocratie est rétablie en 1993. Aujourd’hui,
                le pays est stable et doté d’institutions démocratiques solides,
                et son économie repose principalement sur le tourisme, la pêche
                et la protection de l’environnement.
              </p>
            </div>
          </SectionReveal>

          {/* Island Image */}
          <div className="w-full md:w-1/3 mt-10 md:mt-0 md:-ml-8 relative">
            <SectionReveal delay={0.3}>
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 h-64 md:h-80 bg-[url('/seychelles_plage_5.jpg')] bg-cover bg-center"
              ></motion.div>
            </SectionReveal>
            {/* Paper curl effect simulation */}
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-white skew-x-12 translate-y-6 translate-x-2 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MENU --- */}
      <section className="relative py-24 bg-[#003D88] text-white overflow-hidden">
        {/* Diagonal Slashes */}
        <div className="absolute top-0 right-0 w-[70%] h-full bg-[#D12421] transform -skew-x-[20deg] origin-top-right"></div>
        <div className="absolute top-0 left-[20%] w-[30%] h-full bg-[#FCD856] transform -skew-x-[20deg] opacity-100"></div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <h2 className="text-6xl font-black mb-16 text-left drop-shadow-md font-sans">
              MENU
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            {/* Entrée */}
            <SectionReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/95 rounded-b-[40px] rounded-t-full pb-8 pt-0 px-6 shadow-xl text-center"
              >
                <div className="w-48 h-48 mx-auto -mt-12 mb-6 rounded-full border-4 border-white shadow-lg bg-gray-200 overflow-hidden relative z-10">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src="/salade_de_fruits_tropicaux.jpeg"
                    alt="Salade de palmiste"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-black uppercase mb-4">Entrée</h3>
                <div className="font-bold text-sm md:text-base px-2">
                  <p className="uppercase mb-2">SALADE DE PALMISTE :</p>
                  <p className="leading-snug">
                    Coeur de palmier croquant, légumes frais nappés d'une
                    vinaigrette délicate aux notes citronnées.
                  </p>
                </div>
              </motion.div>
            </SectionReveal>

            {/* Plat */}
            <SectionReveal delay={0.4}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/95 rounded-b-[40px] rounded-t-full pb-8 pt-0 px-6 shadow-xl text-center mt-12 md:mt-0"
              >
                <div className="w-48 h-48 mx-auto -mt-12 mb-6 rounded-full border-4 border-white shadow-lg bg-gray-200 overflow-hidden relative z-10">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src="/chutney_de_requin.webp"
                    alt="Chutney de requin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-black uppercase mb-4">Plat</h3>
                <div className="font-bold text-sm md:text-base px-2">
                  <p className="uppercase mb-2">CHUTNEY DE REQUIN :</p>
                  <p className="leading-snug">
                    A base de requin tendre, mijoté avec oignons, ail,
                    gingembre, tomates, épices locales et une touche de piment.
                  </p>
                </div>
              </motion.div>
            </SectionReveal>

            {/* Dessert */}
            <SectionReveal delay={0.6}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/95 rounded-b-[40px] rounded-t-full pb-8 pt-0 px-6 shadow-xl text-center mt-12 md:mt-0"
              >
                <div className="w-48 h-48 mx-auto -mt-12 mb-6 rounded-full border-4 border-white shadow-lg bg-gray-200 overflow-hidden relative z-10">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src="/le_ladob.jpg"
                    alt="Le Ladob"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-black uppercase mb-4">Dessert</h3>
                <div className="font-bold text-sm md:text-base px-2">
                  <p className="uppercase mb-2">LE LADOB :</p>
                  <p className="leading-snug">
                    Banane et patates douces cuits dans du lait de coco parfumé
                    à la vanille, subtilement sucré et réconfortant.
                  </p>
                </div>
              </motion.div>
            </SectionReveal>
          </div>
        </div>

        {/* Bottom swoosh */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white transform skew-y-2 translate-y-12"></div>
      </section>

      {/* --- SECTION 4: DRINKS --- */}
      <section className="relative py-24 min-h-[600px] flex items-center bg-white overflow-hidden">
        {/* Circle background */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[#FCE7F3] rounded-full z-0 translate-x-1/4"
        ></motion.div>
        {/* Red diagonal */}
        <div className="absolute top-0 right-0 w-full h-[150%] bg-[#D12421] -z-10 origin-top-right rotate-[-15deg] translate-x-1/2"></div>

        {/* Green bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-[#007A3D] z-10"></div>

        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
          {/* Drink Image */}
          <SectionReveal className="w-full md:w-1/2 mb-10 md:mb-0 relative">
            <div className="w-64 md:w-80 h-[500px] mx-auto bg-gray-200 rounded-2xl shadow-2xl overflow-hidden border-8 border-white bg-[url('/seychelles_plage_2.webp')] bg-cover bg-center relative z-10"></div>
            {/* Decor */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 left-10 w-20 h-20 bg-red-500 rounded-full blur-xl opacity-50 z-0"
            ></motion.div>
          </SectionReveal>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left pl-8">
            <SectionReveal delay={0.2}>
              <h2
                className="text-5xl md:text-6xl font-black mb-8 text-black"
                style={{ fontFamily: "cursive, sans-serif" }}
              >
                JUS DES SEYCHELLES
              </h2>
              <p className="text-xl font-black uppercase leading-relaxed text-black/80 max-w-md">
                Fruits tropicaux frais pressés à la main, un véritable goût
                d'île dans chaque gorgée.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
