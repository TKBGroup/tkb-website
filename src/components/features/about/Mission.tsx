"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- ANIMATION VARIANTS ---

// 1. The parent container variant. It doesn't move, but it orchestrates the children.
const containerVariants: Variants = {
  hidden: { opacity: 1 }, // Start fully visible to avoid a flash
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

// 2. The child item variant. This will be used by almost every element inside.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Start invisible and slightly down
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};


// --- REUSABLE COMPONENTS ---

// Add motion to the StatItem component
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <motion.div variants={itemVariants}>
    <p className="text-4xl lg:text-5xl font-bold text-gold">{value}</p>
    <p className="mt-1 text-base font-semibold text-light-2">{label}</p>
  </motion.div>
);


// --- MAIN COMPONENT ---

const MissionVisionSection = () => {
  return (
    <motion.section 
      className="bg-darkblue text-light py-20 sm:py-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12">
          
          {/* --- Left Column: Text Content --- */}
          <motion.div 
            className="md:col-span-12 lg:col-span-5 flex flex-col justify-center border-l-2 border-gold pl-6"
            variants={itemVariants} // Reusing the item variant
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-light">
              Our Mission & Vision:
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
              Our Driving Force
            </h3>
            <p className="text-light-2 leading-relaxed">
               TKB Group provides Canadian definitive all-in-one solution for custom cabinetry and millwork. We transform residential and commercial spaces by uniting collaborative design with superior craftsmanship and flawless execution, turning every project into a lasting partnership.
             </p>
          </motion.div>

          {/* --- Middle Column: Images & Link --- */}
          {/* We'll make the whole column a motion component to stagger it */}
          <motion.div 
            className="md:col-span-6 lg:col-span-4 flex flex-col gap-4"
            variants={itemVariants}
          >
            <div className="relative w-full h-64 rounded-md overflow-hidden shadow-lg">
              <Image src="/images/about/light-team.png" alt="..." fill className="object-cover" />
            </div>
            <a href="/process" className="group inline-flex items-center self-end ...">
              Explore Our Process
              <ArrowUpRight className="ml-2 h-5 w-5 ..." />
            </a>
          </motion.div>

          {/* --- Right Column: Stats & Second Image --- */}
          <motion.div 
            className="md:col-span-6 lg:col-span-3 flex flex-col justify-between gap-8"
            variants={itemVariants}
          >
            {/* This container for stats can also have its own stagger effect */}
            <motion.div 
              className="space-y-6 flex md:block justify-around"
              variants={containerVariants} // Nested stagger!
            >
              <StatItem value="25+" label="Years" />
              <StatItem value="1k+" label="Projects" />
              <StatItem value="99%" label="Satisfaction" />
            </motion.div>
            <div className="relative w-full h-48 rounded-md overflow-hidden shadow-lg">
              <Image src="/images/about/dark-img-team.png" alt="..." fill className="object-cover" />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default MissionVisionSection;
