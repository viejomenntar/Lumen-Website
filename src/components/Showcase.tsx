import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import imgColaboracion from './assets/colaboracion.jpeg';
import imgCreatividad from './assets/creatividad.png';
import imgEstrategia from './assets/estrategia.png';
import imgImpacto from './assets/impacto.png';

const products = [
  {
    title: 'Las mejores ideas nacen del trabajo en equipo.',
    category: 'Colaboración',
    image: 'src/assets/colaboracion.jpeg',
  },
  {
    title: 'Creemos en las ideas como motor del cambio.',
    category: 'Creatividad',
    image: 'src/assets/creatividad.png',
  },
  {
    title: 'Cada decisión de diseño tiene un propósito.',
    category: 'Estrategia',
    image: 'src/assets/estrategia.png',
  },
  {
    title: 'LUMEN Connect',
    category: 'Impacto',
    image: 'src/assets/impacto.png',
  },
];

export const Showcase = () => {
  return (
    <section id="products" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6"> Nuestros valores</h2>
            <p className="font-space text-white/50 max-w-xl">
              Nuestros valores guían cada decisión que tomamos
y nos inspiran a crear soluciones creativas con propósito.
            </p>
          </div>
    
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-video cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lumen-black via-lumen-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="font-space text-lumen-purple text-xs uppercase tracking-widest mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">{product.title}</h3>
                <div className="h-1 w-0 bg-lumen-purple group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
