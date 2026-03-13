import React from 'react';
import { motion } from 'motion/react';
import { Globe, Layers, Lock, Zap, BarChart3, Users } from 'lucide-react';

const features = [
  {
    title: 'Estrategia de Marca',
    description: 'Definimos la esencia, el propósito y el posicionamiento de las marcas para construir identidades sólidas y memorables.  ',
    icon: Globe,
  },
  {
    title: 'Identidad Visual',
    description: 'Diseñamos logotipos, sistemas gráficos y estilos visuales que representan la personalidad única de cada marca.',
    icon: Layers,
  },
  {
    title: 'Desarrollo Web',
    description: 'Construimos sitios web rápidos, modernos y adaptados a cualquier dispositivo para fortalecer la presencia digital.',
    icon: Lock,
  },
  {
    title: 'Diseño Digital',
    description: 'Creamos interfaces modernas y experiencias digitales pensadas para conectar con las personas.',
    icon: Zap,
  },
  {
    title: 'Estrategia de Comunicación',
    description: 'Desarrollamos mensajes claros y coherentes que fortalecen la relación entre las marcas y su audiencia.',
    icon: BarChart3,
  },
  {
    title: 'Contenido Creativo',
    description: 'Creamos contenido visual y narrativo que comunica ideas, genera impacto y fortalece la identidad de marca.',
    icon: Users,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-32 bg-lumen-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Soluciones <br />
            <span className="text-lumen-purple">creativas </span>
          </motion.h2>
          <p className="font-space text-white/50 max-w-2xl mx-auto">
            Desarrollamos estrategias, identidades visuales y experiencias
digitales que permiten a las marcas destacar en un entorno competitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 hover:border-lumen-purple/30 transition-all hover:bg-white/5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-lumen-purple/10 flex items-center justify-center mb-6 group-hover:bg-lumen-purple transition-colors">
                <feature.icon className="w-7 h-7 text-lumen-purple group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
