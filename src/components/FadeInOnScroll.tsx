'use client'; 

import { motion } from 'framer-motion';
import React from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

// reusable animated component
export default function FadeInOnScroll({ children, className }: FadeInOnScrollProps) {
  return (
    //  motion.div` is the core of Framer Motion 
    <motion.div
      //  The state of the component *before* it animates. Here it's invisible and slightly down.
      initial={{ opacity: 0, y: 20 }}

      //  The state to animate *to* when the component enters the viewport.
      whileInView={{ opacity: 1, y: 0 }}

      // Configures when the animation triggers. `once: true` means it only animates once.
      viewport={{ once: true }}
 
      transition={{ duration: 0.8, ease: 'easeInOut' }}
 
      className={className}
    >
      {children}
    </motion.div>
  );
}
