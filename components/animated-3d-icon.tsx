'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Animated3DIconProps {
  Icon: LucideIcon;
  color?: string;
  delay?: number;
}

const Animated3DIcon: React.FC<Animated3DIconProps> = ({ Icon, color = "text-blue-500", delay = 0 }) => {
  return (
    <motion.div
      initial={{ rotateY: 0, scale: 0.8, opacity: 0 }}
      whileInView={{ rotateY: 360, scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 1.5, 
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      className={`p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-inner ${color}`}
    >
      <Icon size={32} strokeWidth={1.5} />
    </motion.div>
  );
};

export default Animated3DIcon;
