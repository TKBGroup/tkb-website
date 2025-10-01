// components/Stats.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, animate, Variants } from 'framer-motion';

// --- Data for each stat ---
const statsData = [
  { value: 100, label: 'RESPONSIBILITY', title: 'SUSTAINABLE', description: 'and high-quality raw materials used from the USA and Canada' },
  { value: 97, label: 'CONTENTEDNESS', title: 'SATISFACTION', description: 'Customer satisfaction rate for over a decade is our pride' },
  { value: 76, label: 'LOYALTY', title: 'REPEAT CUSTOMERS', description: 'Three-fourths of our revenue is generated from loyal, returning clients' },
];

// --- Reusable AnimatedCircle Component ---
function AnimatedCircle({ value, delay }: { value: number; delay: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // --- SVG & Arc Math ---
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  // Define the arc as 3/4 of the circle for a visually pleasing gauge
  const arcLength = circumference * (3 / 4);
  const gapLength = circumference - arcLength;

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, value, {
        duration: 2,
        delay: delay,
        ease: 'easeOut',
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = `${Math.round(latest)}%`;
          }
        },
      });
    }
  }, [isInView, value, delay]);

  const circleVariants : Variants = {
    hidden: { strokeDashoffset: arcLength }, // Start with the arc fully hidden
    visible: {
      strokeDashoffset: arcLength * (1 - value / 100), // Animate to the target percentage
      transition: {
        duration: 2,
        ease: 'easeOut',
        delay: delay,
      },
    },
  };

  return (
    <div className="relative h-40 w-40">
      <svg className="h-full w-full" viewBox="0 0 120 120">
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="dark-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D9A44D" />
            <stop offset="100%" stopColor="#A77E3D" />
          </linearGradient>
        </defs>
        
        {/* Background Arc */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#374151"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${gapLength}`} // Create the 3/4 arc
          transform="rotate(135 60 60)" // Rotate to position the gap at the bottom
        />
        
        {/* Animated Foreground Arc */}
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke="url(#dark-gold-gradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${gapLength}`} // Ensure this matches the background
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transform="rotate(135 60 60)" // Rotate to align perfectly with the background
        />
      </svg>
      
      {/* Animated Percentage Text */}
      <p ref={ref} className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
        0%
      </p>
    </div>
  );
}

// --- Main Stats Section Component ---
export default function Stats() {
  return (
    <section className="bg-[#111827] py-20 sm:py-24 text-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
          {statsData.map((stat, index) => (
            <div key={stat.title} className="flex flex-col items-center">
              <AnimatedCircle value={stat.value} delay={index * 0.3} />
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-gray-400">{stat.label}</p>
              <h3 className="mt-2 text-xl font-bold">{stat.title}</h3>
              <p className="mt-4 max-w-xs text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
