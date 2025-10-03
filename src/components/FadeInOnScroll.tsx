'use client'; 

import { motion } from 'framer-motion';
import React from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
}
 
export default function FadeInOnScroll({ children, className }: FadeInOnScrollProps) {
  return ( 
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
 
      whileInView={{ opacity: 1, y: 0 }}
 
      viewport={{ once: true }}
 
      transition={{ duration: 0.8, ease: 'easeInOut' }}
 
      className={className}
    >
      {children}
    </motion.div>
  );
}
