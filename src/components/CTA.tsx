import React from 'react';
import { motion } from 'motion/react';

export const CTA = () => {
  return (
    <section className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-lumen-purple to-[#6a24b3] p-12 md:p-24 text-center relative overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white">
            ¿Listo para llevar tu marca al siguiente nivel?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Cada gran proyecto comienza con una idea.
En Lumen queremos ayudarte a convertir esa idea
en algo extraordinario.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-lumen-black px-12 py-5 rounded-full font-bold text-xl hover:bg-lumen-black hover:text-white transition-all shadow-2xl"
          >
            Empieza Aquí
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
