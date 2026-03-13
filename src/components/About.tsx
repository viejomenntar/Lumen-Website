import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-space text-lumen-purple text-sm tracking-widest uppercase mb-6 block">
            Lumen
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            ¿Quienes Somos?
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Lumen es un estudio creativo enfocado en el desarrollo de marcas,
estrategia y experiencias digitales.

Creemos que cada marca tiene una historia única que merece ser
contada con claridad, creatividad y propósito.

Nuestro objetivo es transformar ideas en experiencias que
conecten con las personas y generen valor real para las empresas.
          </p>
          
          <ul className="space-y-4">
            {[
              'Mision:Iluminar ideas y transformar la energía creativa en soluciones innovadoras y llamativas.',
              'Visión: Ser reconocida como una marca futurista, fresca y vanguardista que conecta con las personas através de la luz, la creatividad y la energía positiva.',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-lumen-purple" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="https://picsum.photos/seed/lumen-about/800/1000" 
              alt="About LUMEN" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-lumen-purple/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lumen-purple/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-lumen-purple/20 rounded-3xl rotate-6 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
