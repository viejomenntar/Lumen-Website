import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfoCards } from './components/InfoCards';
import { Features } from './components/Features';
import { About } from './components/About';
import { Showcase } from './components/Showcase';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

import { GeometricPattern, GlowOrb, FloatingShape } from './components/Decorations';
import { Toast } from './components/Toast';

export default function App() {

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [toast, setToast] = useState<{ isVisible: boolean; message: string }>({
    isVisible: false,
    message: ''
  });

  const showToast = (message: string) => {
    setToast({ isVisible: true, message });

    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  // Global click handler
  useEffect(() => {

    const handleGlobalClick = (e: MouseEvent) => {

      const target = e.target as HTMLElement;
      const button = target.closest("button");

      if (!button) return;

      // BOTÓN COMIENZA AHORA
      if (button.id === "start-button") {
        e.preventDefault();
        e.stopPropagation();

        showToast("Bienvenido al ecosistema de LUMEN! redirigiendo...");
        return;
      }

      // BOTÓN LEER MÁS
      const text = button.innerText.toLowerCase();

      if (text.includes("learn more") || text.includes("leer más")) {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
      }

    };

    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };

  }, []);

  return (
    <div className="relative min-h-screen bg-lumen-black overflow-x-hidden">

      {/* Barra de progreso de scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-lumen-purple z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Efectos de fondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

        <GeometricPattern />

        <GlowOrb top="-10%" left="-10%" size="60vw" />

        <GlowOrb bottom="-10%" right="-10%" size="50vw" color="#6a24b3" />

        <FloatingShape
          className="top-[20%] right-[10%] w-64 h-64 bg-lumen-purple/20"
          delay={2}
        />

        <FloatingShape
          className="bottom-[30%] left-[5%] w-96 h-96 bg-lumen-purple/10"
          delay={5}
        />

      </div>

      <div className="relative z-10">

        <Navbar />

        <main>

          <Hero />

          <InfoCards />

          <Features />

          <About />

          <Showcase />

          <CTA />

        </main>

        <Footer />

      </div>

      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />

    </div>
  );
}