'use client';

import { motion } from "framer-motion";
import DarkVeil from "../components/DarkVeil";
import Navbar from "@/components/navbar";
import React from "react";
import About from "@/components/about";

export default function Home() {
  // --- CONFIGURATION DES ANIMATIONS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    // J'ai retiré 'overflow-hidden' pour permettre le scroll
    <main className="relative min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      
      {/* 1. NAVBAR (Fixe en haut) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* 2. ARRIÈRE-PLAN (Fixe, ne bouge pas au scroll) */}
      <div className="fixed inset-0 z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0.2}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          className="w-full h-full"
        />
      </div>

      {/* 3. CONTENU DÉFILANT */}
      <div className="relative z-10 flex flex-col w-full">
        
        {/* SECTION 1 : HERO (Prend tout l'écran : min-h-screen) */}
        <section id="home" className="min-h-screen flex items-center justify-center p-8">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full pt-20"> {/* Ajout pt-20 pour ne pas être caché par la navbar */}
            
            <motion.div 
              className="flex-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={itemVariants} className="font-bold font-mono text-xl block text-gray-400">
                Bonjour, je suis
              </motion.span> 
              
              <motion.span 
                variants={itemVariants} 
                className="text-6xl md:text-8xl font-extrabold font-bold bg-gradient-to-r from-blue-200 to-blue-900 bg-clip-text text-transparent block py-2"
              >
                PAUL ESPINASSE
              </motion.span> 
              
              <motion.span variants={itemVariants} className="text-3xl md:text-5xl font-mono font-bold block text-gray-200 mb-6">
                Développeur junior
              </motion.span> 
              
              <motion.span variants={itemVariants} className="font-bold text-lg font-mono text-gray-500 block">
                et prêt à collaborer avec vous !
              </motion.span>
            </motion.div>

          </div>    
        </section>

        {/* SECTION 2 : ABOUT (En dessous) */}
        <section id="about" className="w-full">
           <About />
        </section>

      </div>
    </main>   
  );
}