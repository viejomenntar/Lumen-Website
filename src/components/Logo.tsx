import React from 'react';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M30 20V80H70V70H40V20H30Z" 
      fill="currentColor" 
    />
    <path 
      d="M45 15L35 50H55L45 85L75 40H55L65 15H45Z" 
      fill="#a03eff" 
      className="drop-shadow-[0_0_8px_rgba(160,62,255,0.8)]"
    />
  </svg>
);

export const LumenLogoText = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
    <span className="font-bitter font-bold text-2xl tracking-tighter group-hover:text-lumen-purple transition-colors">
      LUMEN
    </span>
  </div>
);
