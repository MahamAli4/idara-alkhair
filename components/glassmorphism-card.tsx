'use client';

import React from 'react';
import { cn } from '@/lib/utils'; // I'll check if lib/utils exists, if not I'll just use template literal

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({ children, className }) => {
  return (
    <div className={`
      backdrop-blur-md bg-white/70 dark:bg-black/30 
      border border-white/20 dark:border-white/10 
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      rounded-2xl
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassmorphismCard;
