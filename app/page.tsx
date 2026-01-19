'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import rocket from '../public/rocket.svg'; // Assure-toi que le chemin est bon selon ton dossier
import DarkVeil from "../components/DarkVeil";

export default function Home() {
  // --- CONFIGURATION DES ANIMATIONS ---
  
  // Le chef d'orchestre (le conteneur)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 } // Délai entre chaque ligne
    },
  };

  // Les musiciens (les lignes de texte)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
  };

  // La fusée (l'image)
  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.8, delay: 0.5 }
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-slate-950 text-white flex items-center justify-center p-8 overflow-hidden">
      
      {/* --- COUCHE 1 : ARRIÈRE-PLAN (DarkVeil) --- */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}      // <--- MODIFICATION ICI : 0 = Pas de neige
          scanlineIntensity={0.2} // Garde un léger effet "écran" (tu peux mettre 0 aussi si tu veux un fond pur)
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          className="w-full h-full"
        />
      </div>

      {/* --- COUCHE 2 : CONTENU PRINCIPAL --- */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        
        {/* BLOC GAUCHE : TEXTE */}
        <motion.div 
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="font-bold text-xl block  text-gray-400">
            Bonjour, je suis
          </motion.span> 
          
          <motion.span 
            variants={itemVariants} 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-200 to-blue-900 bg-clip-text text-transparent block py-2"
          >
            Paul ESPINASSE
          </motion.span> 
          
          <motion.span variants={itemVariants} className="text-3xl md:text-5xl font-bold block text-gray-200 mb-6">
            Développeur junior
          </motion.span> 
          
          <motion.span variants={itemVariants} className="font-bold text-lg text-gray-500 block">
            et prêt à collaborer avec vous !
          </motion.span>
        </motion.div>

        {/* BLOC DROITE : IMAGE */}
        <motion.div 
          className="flex-shrink-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
            
        </motion.div>

      </div>
    </main>
  );
}