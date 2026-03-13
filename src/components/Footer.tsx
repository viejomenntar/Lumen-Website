import React from 'react';
import { LumenLogoText } from './Logo';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <LumenLogoText />
            <p className="mt-6 text-white/50 leading-relaxed">
              Impulsando a la próxima generación de creadores digitales a través de tecnología innovadora y diseño minimalista.
            </p>
            <div className="flex gap-4 mt-8">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lumen-purple hover:border-lumen-purple transition-all group"
                >
                  <Icon className="w-5 h-5 text-white/50 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-space text-sm uppercase tracking-widest mb-8 text-white">Navegación</h4>
            <ul className="space-y-4">
              {['inicio', 'Servicios', '¿Quiénes somos?', 'Valores', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-lumen-purple transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-space text-sm uppercase tracking-widest mb-8 text-white">Recursos</h4>
            <ul className="space-y-4">
              {['Documentación', 'API Reference', 'Comunidad', 'Estado', 'Seguridad'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-lumen-purple transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-space text-sm uppercase tracking-widest mb-8 text-white">CORREO</h4>
            <p className="text-white/50 mb-6 text-sm">Registrate para recibir todas nuestras novedades.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-lumen-purple transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-lumen-purple text-white px-4 py-1.5 rounded-full text-xs font-bold">
                Registrarte
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm">
            © 2026 LUMEN Corp. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
