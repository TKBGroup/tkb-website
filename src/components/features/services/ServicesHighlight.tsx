

"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// --- Reusable Data and Type Definitions ---
type ServiceHighlightProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean; // Optional prop to reverse the layout
};

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger the animation of the two main blocks
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HighlightBlock: React.FC<ServiceHighlightProps> = ({ title, description, imageUrl, imageAlt, reverse = false }) => {
  const containerFlexDirection = reverse ? "lg:flex-row-reverse" : "lg:flex-row";
  const textAlignment = reverse ? "lg:text-left" : "lg:text-right";
  
  return (
    <motion.div
      className={`flex flex-col ${containerFlexDirection} items-center gap-8 lg:gap-12`}
      variants={itemVariants}
    >
      {/* Text Content (no changes needed here) */}
      <div className={`w-full lg:w-1/3 flex-shrink-0 text-center ${textAlignment}`}>
        <h3 className="text-2xl sm:text-3xl font-bold text-darkblue mb-8">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* 
        KEY FIX: The Image and Border are now siblings inside a relative container.
        This allows us to layer and offset them properly.
      */}
      <div className="relative w-full lg:w-2/3 h-72 sm:h-96">
        {/* The Golden Border */}
        <div 
            className="
              absolute inset-0 
              border-2 border-gold 
              transform translate-x-4 translate-y-4 
              sm:translate-x-6 sm:translate-y-6
            "
        />
        
        {/* The Image */}
        <div className="relative w-full h-full  overflow-hidden shadow-lg">
            <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
            />
        </div>
      </div>
    </motion.div>
  );
};


// --- Main Section Component ---
const ServicesHighlight = () => {
  const residentialData = {
    title: "Residential Cabinetry",
    description: "TKB Group provides Canadian definitive all-in-one solution for custom cabinetry and millwork. We transform residential and commercial spaces by uniting collaborative design with superior craftsmanship and flawless execution, turning every project into a lasting partnership.",
    imageUrl: "/images/services/kitchen.png", // IMPORTANT: Replace with your image path
    imageAlt: "A beautiful residential kitchen with custom white and wood cabinetry.",
    reverse: true,  
  };

  const commercialData = {
    title: "Commercial Millwork",
    description: "TKB Group provides Canadian definitive all-in-one solution for custom cabinetry and millwork. We transformk residential and commercial spaces by uniting collaborative design with superior craftsmanship and flawless execution, turning every project into a lasting partnership.",
    imageUrl: "/images/services/display.png", // IMPORTANT: Replace with your image path
    imageAlt: "A modern commercial showroom featuring JennAir appliances and custom millwork.", 
  }

  return (
    <motion.section
      className="bg-white py-10 sm:py-12 mt-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='h-2 w-60 xxs:w-80 md:w-100 lg:w-128 mx-auto border-t-2 border-t-gold mb-12' />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <HighlightBlock {...residentialData} />
        <HighlightBlock {...commercialData} />
      <div className='h-2 w-60 xxs:w-80 md:w-100 lg:w-128 mx-auto border-t-2 border-t-gold mt-12' />
      </div>
    </motion.section>
  );
};

export default ServicesHighlight;

