// components/features/process/OurProcessSection.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Or your preferred icon library

// --- Animation Variants ---
// This orchestrates the animation of the main sections.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// A consistent "fade in and slide up" animation for each item.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Reusable Sub-component for the bottom blocks ---
const ProcessBlock = ({ title, description, imageUrl, imageAlt }: { title: string; description: string; imageUrl: string; imageAlt: string; }) => (
  <motion.div className="flex flex-col text-center" variants={itemVariants}>
    <div className="relative w-full h-64 sm:h-72 overflow-hidden shadow-md mb-6">
      {/* <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
      /> */}
           <video className="relative justify-self-end w-full" src={imageUrl}  autoPlay loop muted></video>
    </div>
    <h3 className="text-xl font-bold text-darkblue mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </motion.div>
);
// // --- Reusable Sub-component for the bottom blocks ---
// const ProcessBlock = ({ title, description, imageUrl, imageAlt }: { title: string; description: string; imageUrl: string; imageAlt: string; }) => (
//   <motion.div className="flex flex-col text-center" variants={itemVariants}>
//     <div className="relative w-full h-64 sm:h-72 overflow-hidden shadow-md mb-6">
//       <Image
//         src={imageUrl}
//         alt={imageAlt}
//         fill
//         className="object-cover transition-transform duration-300 hover:scale-105"
//       />
//     </div>
//     <h3 className="text-xl font-bold text-darkblue mb-3">{title}</h3>
//     <p className="text-gray-600 leading-relaxed">
//       {description}
//     </p>
//   </motion.div>
// );


// --- Main Section Component ---
const ServicesSection = () => {
  return (
    <motion.section 
      className="bg-white pb-18 sm:pb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Top Hero Image Section --- */}
        <motion.div 
          className="relative w-full h-72 sm:h-96 overflow-hidden shadow-xl mb-16"
          variants={itemVariants}
        >
          {/* <Image
            src="/images/services/design.png" // IMPORTANT: Replace with your image path
            alt="A 3D design sketch of a modern kitchen"
            fill
            className="object-cover"
          /> */}
          
           <video className="relative justify-self-end w-full" src="/images/designDemo.mp4"  autoPlay loop muted></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <a href="/design" className="group inline-flex items-center gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold">TKB Design</h2>
              <ArrowRight className="h-7 w-7 transform transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </motion.div>
        
        {/* --- Middle Description Paragraph --- */}
        <motion.p 
          className="max-w-4xl mx-auto text-center text-gray-700 text-lg leading-relaxed mb-20"
          variants={itemVariants}
        >
          TKB Group provides Canadian definitive all-in-one solution for custom cabinetry and millwork. We transformk residential and commercial spaces by uniting collaborative design with superior craftsmanship and flawless execution, turning every project into a lasting partnership.
        </motion.p>

        {/* --- Bottom Two-Column Section --- */}
        {/* This container will stagger the two ProcessBlock components */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
        >
          <ProcessBlock 
            title="Times Installs"
            description="TKB Group provides Canadian definitive all-in-one solution for custom cabinetry and millwork. We transformk resi"
            imageUrl="/images/services/installs.mp4" // Replace with your path
            imageAlt="A craftsman installing a cabinet hinge."
          />
          <ProcessBlock 
            title="Times Exhibits"
            description="TKB Group provides Canadian definitive all-in-one solution for custom cabinetry and millwork. We transformk resi"
            imageUrl="/images/services/exhibits.mp4" // Replace with your path
            imageAlt="A finished commercial kitchen exhibit."
          />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ServicesSection;

