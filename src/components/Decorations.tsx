import React from 'react';
import { motion } from 'motion/react';

export const FloatingShape = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.1, 1],
      rotate: [0, 90, 0]
    }}
    transition={{ 
      duration: 10, 
      repeat: Infinity, 
      delay 
    }}
    className={`absolute rounded-full blur-3xl mix-blend-screen pointer-events-none ${className}`}
  />
);

export const GeometricPattern = () => (
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export const GlowOrb = ({ color = "#a03eff", size = "400px", top, left, right, bottom }: any) => (
  <div 
    className="absolute pointer-events-none blur-[120px] opacity-20 rounded-full"
    style={{ 
      backgroundColor: color, 
      width: size, 
      height: size,
      top, left, right, bottom
    }}
  />
);
