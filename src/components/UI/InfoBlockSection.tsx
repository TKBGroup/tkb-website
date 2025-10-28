 
"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
 
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  
    },
  },
};
 
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// --- Reusable Sub-component for the content blocks ---
const InfoBlock = ({ label, title, children }: { label: string; title: string; children: React.ReactNode }) => (
  <motion.div variants={itemVariants}>
    <p className="text-sm font-semibold uppercase text-gold tracking-wider">{label}</p>
    <h3 className="mt-1 text-xl font-bold text-darkblue">{title}</h3>
    <p className="mt-4 text-gray-600 leading-relaxed">
      {children}
    </p>
  </motion.div>
);


// --- Main Component ---
const InfoBlockSection = () => {
  return (
    <motion.section 
      className="bg-slate-50 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
    >
      <div className="max-w-[1240px] mx-auto">
        
  
        <div className="px-4 sm:px-6 lg:px-8 pt-0 pb-16">
       
          <div className="w-full h-1  mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
          
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <p className="text-sm font-semibold uppercase text-gold tracking-wider">
                Designed for you. Built for life
              </p>
              <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-darkblue leading-tight">
                Designed for You. Built for Life
              </h2>
            </motion.div>
 
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8">
              <InfoBlock label="Who We Serve:" title="Your Vision, Our Expertise">
                Whether you are a homeowner envisioning your dream kitchen or a business looking to create an unforgettable brand environment, TKB Group is your partner. We speak your language and understand your unique goals.
              </InfoBlock>
              <InfoBlock label="Our Core Values:" title="The TKB Promise">
                We are shaping the future of custom manufacturing in Canada. By leading with trust and innovation, we engineer timeless spaces that enhance the lives and businesses of our clients for generations.
              </InfoBlock>
            </div>

          </div>
        </div>
 
        <motion.div 
          className="relative w-full h-80 md:h-[32rem]"
          variants={itemVariants}
        >
          <Image
            src="/images/about/team-meeting.png"  
            alt="A design team collaborating around a table with blueprints and material samples"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InfoBlockSection;
