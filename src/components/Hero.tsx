import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroVideo from "../assets/video1.mp4";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lumen-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lumen-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <span className="font-space text-lumen-purple text-sm tracking-[0.3em] uppercase mb-6 block">
            Bienvenido a Lumen
          </span>

          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
            Ideas que <span className="text-lumen-purple">iluminan</span> el cambio
          </h1>

          <p className="font-space text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Creamos estrategias, identidad y experiencias digitales que ayudan
a las marcas a destacar en un mundo cada vez más competitivo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* BOTÓN QUE SOLO MUESTRA EL TOAST */}
            <motion.button
              id="start-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-lumen-black px-10 py-4 rounded-full font-bold text-lg hover:bg-lumen-purple hover:text-white transition-all flex items-center gap-2"
            >
              Comienza ahora
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* BOTÓN QUE SÍ BAJA A FEATURES */}
            <a href="#features">
              <button className="px-10 py-4 rounded-full font-bold text-lg border border-white/10 hover:bg-white/5 transition-all">
                Leer más
              </button>
            </a>

          </div>

        </motion.div>
      </div>

      {/* Hero Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-20 relative max-w-5xl mx-auto px-6"
      >

        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 glass">

          <div className="relative overflow-hidden rounded-xl">

            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl"
            />

          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-lumen-black via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-lumen-purple/30 rounded-full blur-3xl animate-pulse" />
          </div>

        </div>

      </motion.div>

    </section>
  );
};