import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Cpu } from 'lucide-react';

const cards = [
  {
    number: '01',
    title: 'Creatividad con propósito',
    description: 'Cada proyecto nace de una idea clara y una estrategia sólida que permite a las marcas comunicar con impacto.',
    icon: Zap,
  },
  {
    number: '02',
    title: 'Experiencias que conectan',
    description: 'Diseñamos soluciones digitales modernas que generan interacción, confianza y cercanía con las audiencias.',
    icon: Shield,
  },
  {
    number: '03',
    title: 'Innovación digital',
    description: 'Integramos tecnología y creatividad paracrear experiencias digitales modernas.',
    icon: Cpu,
  },
];

export const InfoCards = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group purple-glow-hover transition-all"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <card.icon className="w-24 h-24 text-lumen-purple" />
            </div>
            
            <span className="font-space text-5xl font-bold text-white/10 mb-6 block group-hover:text-lumen-purple/30 transition-colors">
              {card.number}
            </span>
            
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <card.icon className="w-6 h-6 text-lumen-purple" />
              {card.title}
            </h3>
            
            <p className="text-white/60 leading-relaxed">
              {card.description}
            </p>
            
            <div className="mt-8 w-12 h-1 bg-lumen-purple rounded-full group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
