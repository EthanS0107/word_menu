'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import SectionReveal from '../../components/SectionReveal';

export default function BeninMenu() {
  return (
    <PageTransition className="min-h-screen font-sans text-gray-800 bg-white overflow-x-hidden">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-white overflow-hidden">
        
        {/* Background - Benin Flag Layout */}
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
            {/* Green Vertical Band (Left) */}
            <motion.div 
               initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ duration: 1, ease: 'easeOut' }}
               className="w-full md:w-[40%] h-1/2 md:h-full bg-[#008751]"
            ></motion.div>
            
            {/* Right Side: Yellow and Red */}
            <div className="w-full md:w-[60%] h-1/2 md:h-full flex flex-col">
                <motion.div 
                   initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                   className="w-full h-1/2 bg-[#FCD116]"
                ></motion.div>
                <motion.div 
                   initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                   className="w-full h-1/2 bg-[#E8112D]"
                ></motion.div>
            </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center h-full">
          
          {/* Text Area - Left (Green area mainly) */}
          <div className="w-full md:w-1/2 p-8 text-white md:text-white mb-8 md:mb-0">
            <motion.h1 
               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
               className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-md"
            >
              Menu typique <br />
              <span>du Bénin</span>
            </motion.h1>
            <motion.div 
               initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.8 }}
               className="w-20 h-2 bg-[#FCD116] mb-8"
            ></motion.div>
          </div>

          {/* Slogan - Right (Yellow/Red area) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-8">
             <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }} animate={{ opacity: 1, scale: 1, rotate: 2 }} transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ rotate: 0 }}
                className="bg-white/90 backdrop-blur-sm p-10 rounded-[40px] shadow-2xl transform rotate-2 transition-all duration-500"
             >
                <p className="text-2xl md:text-4xl font-black uppercase text-center leading-relaxed text-[#E8112D]">
                   Entrez, goûtez, voyagez :<br/>
                   <span className="text-[#008751]">Le Bénin s'invite</span><br/>
                   dans votre assiette
                </p>
             </motion.div>
          </div>

        </div>
      </section>


      {/* --- SECTION 2: HISTORY --- */}
      <section className="relative py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center max-w-6xl">
           
           {/* Text Content */}
           <SectionReveal className="w-full md:w-2/3 relative z-10 order-2 md:order-1">
             <div className="bg-[#1a1a1a] text-white p-10 md:p-16 rounded-3xl shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 text-[#FCD116] border-b-4 border-[#E8112D] inline-block pb-2">Le Bénin</h2>
                <p className="text-lg leading-relaxed font-light opacity-90 mb-4">
                  Le Bénin, pays d'Afrique de l'ouest, est bordé par le Togo, le Nigéria le Burkina Faso, le Niger et le golf du Guinée. 
                  Ancien royaume du Dahomey et colonie Française, il a obtenu son indépendance en 1960 et est aujourd'hui une démocratie stable.
                </p>
                <p className="text-lg leading-relaxed font-light opacity-90">
                  Le pays est riche en culture et traditions, notamment le vaudou, la musique, la danse et l'artisanat. 
                  Son économie repose sur l'agriculture (coton, noix de cajou, maïs) le commerce via le port de Cotonou et le tourisme, 
                  avec des parcs nationaux comme le Pendjari et des sites historiques liés à la traite négrière.
                </p>
             </div>
           </SectionReveal>
           
           {/* Image */}
           <div className="w-full md:w-1/3 mb-8 md:mb-0 md:-mr-12 relative z-20 order-1 md:order-2">
              <SectionReveal delay={0.3}>
                  <div className="rounded-r-2xl md:rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-64 md:h-80 relative">
                      <motion.img 
                        whileHover={{ scale: 1.1 }} transition={{ duration: 0.7 }}
                        src="/benin_plage_1.jpg" alt="Plage du Bénin" className="w-full h-full object-cover transform scale-110"
                      />
                  </div>
              </SectionReveal>
           </div>
        </div>
      </section>

      {/* --- SECTION 3: MENU --- */}
      <section className="relative py-24 bg-[#008751] text-white overflow-hidden">
        {/* Background Flag Style Overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FCD116] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-[#E8112D]/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <h2 className="text-6xl font-black mb-16 text-center text-white drop-shadow-lg font-sans">MENU</h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Entrée */}
            <SectionReveal delay={0.2}>
              <motion.div 
                 whileHover={{ y: -10 }}
                 className="group bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src="/ata.jpg" alt="Atâ" className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 text-gray-900">
                  <h3 className="text-2xl font-black uppercase mb-3 text-[#008751]">Entrée</h3>
                  <h4 className="text-xl font-bold mb-2">ATÂ</h4>
                  <p className="text-gray-600 leading-snug">
                     Beignet de haricots blancs croustillants, accompagnés d'une sauce pimentée.
                  </p>
                </div>
                <div className="h-2 w-full bg-[#FCD116]"></div>
              </motion.div>
            </SectionReveal>

            {/* Plat */}
            <SectionReveal delay={0.4}>
              <motion.div 
                 whileHover={{ y: -10 }}
                 className="group bg-white rounded-3xl overflow-hidden shadow-xl md:-mt-8"
              >
                 <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src="/wassa_wassa.jpg" alt="Wassa-Wassa" className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 text-gray-900">
                  <h3 className="text-2xl font-black uppercase mb-3 text-[#E8112D]">Plat</h3>
                  <h4 className="text-xl font-bold mb-2">WASSA-WASSA</h4>
                  <p className="text-gray-600 leading-snug">
                     Semoule de Manioc accompagnée de sauce tomate pimentée et d'un poisson braisé à la Béninoise.
                  </p>
                </div>
                <div className="h-2 w-full bg-[#E8112D]"></div>
              </motion.div>
            </SectionReveal>

            {/* Dessert */}
            <SectionReveal delay={0.6}>
              <motion.div 
                 whileHover={{ y: -10 }}
                 className="group bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                 <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src="/salade_de_fruits_tropicaux.jpeg" alt="Salade de fruits" className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 text-gray-900">
                  <h3 className="text-2xl font-black uppercase mb-3 text-[#FCD116]">Dessert</h3>
                  <h4 className="text-xl font-bold mb-2">SALADE DE FRUITS</h4>
                  <p className="text-gray-600 leading-snug">
                     Mangue, ananas, papaye et banane, légèrement parfumés au citron vert et servis bien frais.
                  </p>
                </div>
                <div className="h-2 w-full bg-[#008751]"></div>
              </motion.div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* --- SECTION 4: DRINK --- */}
      <section className="relative py-24 bg-[#FCD116] flex flex-col items-center overflow-hidden">
        {/* Decorative Circles */}
        <motion.div 
           animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity }}
           className="absolute -left-20 top-20 w-64 h-64 border-8 border-[#008751] rounded-full opacity-20"
        ></motion.div>
        <motion.div 
           animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }}
           className="absolute -right-20 bottom-20 w-80 h-80 bg-[#E8112D] rounded-full opacity-10"
        ></motion.div>

        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center max-w-5xl">
          
          {/* Drink Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
             <SectionReveal>
               <div className="relative">
                  <div className="absolute inset-0 bg-[#008751] transform translate-x-4 translate-y-4 rounded-3xl"></div>
                  <motion.img 
                    whileHover={{ rotate: 0 }}
                    src="/bouye.jpg" alt="Bouye" 
                    className="relative z-10 rounded-3xl shadow-xl w-full max-w-md mx-auto transform -rotate-2 transition-transform duration-500"
                  />
               </div>
             </SectionReveal>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-left bg-white/80 p-10 rounded-3xl shadow-lg backdrop-blur-sm">
            <SectionReveal delay={0.2}>
              <h2 className="text-5xl font-black mb-6 text-[#754c24]">
                BOUYE
              </h2>
              <div className="w-24 h-2 bg-[#E8112D] mb-6"></div>
              <p className="text-xl font-medium leading-relaxed text-gray-800">
                Rafraichissante, légèrement acidulée et naturellement sucrée, cette boisson à base de pulpe de Baobab allie saveur exotique et bienfaits santé, pour un voyage gustatif unique.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
