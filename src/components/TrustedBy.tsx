// components/Clients.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';

// An array for the logos, similar to our last component
const clientLogos = [
  { name: 'LG', src: '/logos/lg.png' },
  { name: 'BOSCH', src: '/logos/bosch.png' },
  { name: 'Thermador', src: '/logos/thermador.png' },
  { name: 'Gaggenau', src: '/logos/gaggenau.png' },
  { name: 'Gennair', src: '/logos/jennair.png' },
  { name: 'KitchenAid', src: '/logos/kitchenaid.png' },
  // { name: 'SKS', src: '/logos/sks.png' },
  // { name: 'LaCornue', src: '/logos/lacornue.png' },
  // { name: 'Monogram', src: '/logos/monogram.png' },
];

export default function TrustedBy() {
  // 1. Create a ref to attach to our section element
  const ref = useRef(null);
  
  // 2. The useInView hook tracks if the ref is in the viewport.
  // `once: true` means the animation will only fire once.
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // 3. Define animation "variants" for our text elements.
  // We can define 'hidden' and 'visible' states.
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const trustedByVariant : Variants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const PopularBrands : Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const logoVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    // Attach the ref to the parent section
    <section ref={ref} className="bg-white py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
        
        {/* Animated Title Container */}
        <motion.div
          className="relative mb-24"
          // We use `animate` to conditionally apply the 'visible' or 'hidden' state
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* "TRUSTED BY" - Zooms out */}
          <motion.h2
            variants={trustedByVariant}
            className="text-6xl sm:text-8xl font-black uppercase"
            style={{ color: 'transparent', WebkitTextStroke: '1px #d2a53cb4' }} // Outline effect
          >
            Trusted By
          </motion.h2>

          {/* "OVER 1000+ CLIENTS" - Slides in from the right */}
          <motion.h3
            variants={PopularBrands}
            className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl font-bold text-gray-900 mt-12 ml-12"
          >
            POPULAR BRANDS
          </motion.h3>
        </motion.div>

        {/* Animated Logo Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 items-center gap-x-8 gap-y-10"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.1, delayChildren: 0.5 }} // Stagger and delay the children
        >
          {clientLogos.map((logo) => (
            <motion.div key={logo.name} variants={logoVariants} className="col-span-1">
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={40}
                className="max-h-18 w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
