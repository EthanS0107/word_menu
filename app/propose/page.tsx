'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionReveal from "../components/SectionReveal";

export default function SuggestionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous connecterez plus tard votre backend ou service d'envoi d'email
    setSubmitted(true);
  };

  return (
    <PageTransition className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-20 font-sans">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
            <motion.div 
               initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
               className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Merci pour votre idée !</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Votre proposition a bien été enregistrée. Nous avons hâte de découvrir cette nouvelle destination culinaire.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSubmitted(false)}
              className="text-blue-600 font-bold hover:text-blue-800 underline text-lg"
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
            className="max-w-4xl w-full"
          >
            <div className="text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-5xl font-black text-gray-900 mb-6"
              >
                Proposez une Destination
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Vous rêvez de voir un pays en particulier ? Partagez vos idées de menus et aidez-nous à enrichir la carte du monde !
              </motion.p>
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-14 relative"
            >
              {/* Decoration */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
              
              <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                
                {/* Section Destination */}
                <SectionReveal>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-8 border-blue-500 pl-4">
                    La Destination
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="country" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Pays / Région
                      </label>
                      <input
                        type="text" id="country" required
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                        placeholder="Ex: Japon, Mexique..."
                      />
                    </div>
                    <div>
                      <label htmlFor="colors" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Couleurs Dominantes (Optionnel)
                      </label>
                      <input
                        type="text" id="colors"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                        placeholder="Ex: Rouge et Blanc"
                      />
                    </div>
                  </div>
                </SectionReveal>

                {/* Section Idées Culinaires */}
                <SectionReveal delay={0.1}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-8 border-orange-500 pl-4">
                    Vos Idées Gourmandes
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="dish" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                         Plat Phare
                      </label>
                      <input
                        type="text" id="dish"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300"
                        placeholder="Quel plat représente le mieux ce pays ?"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="starter" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                          Idée d'Entrée
                        </label>
                        <input
                          type="text" id="starter"
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300"
                          placeholder="..."
                        />
                      </div>
                      <div>
                        <label htmlFor="dessert" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                          Idée de Dessert
                        </label>
                        <input
                          type="text" id="dessert"
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300"
                          placeholder="..."
                        />
                      </div>
                    </div>
                  </div>
                </SectionReveal>

                {/* Section Details */}
                <SectionReveal delay={0.2}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-8 border-green-500 pl-4">
                    Pourquoi cette destination ?
                  </h2>
                  <textarea
                    id="description" rows={5}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 resize-none"
                    placeholder="Racontez-nous l'ambiance, une anecdote ou pourquoi ce pays vous tient à coeur..."
                  ></textarea>
                </SectionReveal>

                {/* Submit */}
                <SectionReveal delay={0.3} className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-slate-900 text-white font-bold text-xl py-5 rounded-2xl hover:bg-slate-800 transition-colors shadow-xl hover:shadow-2xl"
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
