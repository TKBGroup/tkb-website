"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
 
const timelineData = [
  { year: 1999, image: '/images/about/team.png', alt: 'The founding team in 1999' },
  { year: 2010, image: '/images/about/award.png', alt: 'Receiving an award in 2010' },
  { year: 2020, image: '/images/about/covid.png', alt: 'Design meeting in 2020' },
  { year: 2025, image: '/images/about/meeting.png', alt: 'Team collaborating on a project in 2025' },
];
 
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

 
const OurStoryTimeline = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  border-r-1 border-darkblue/80 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >  
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-darkblue">
            Our Story:
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gold">
            A Legacy of Growth
          </h3>
        </motion.div>
 
        <motion.blockquote 
          className="relative max-w-4xl mx-auto text-center px-8 mb-16"
          variants={itemVariants}
        >
          <span className="absolute -top-4 left-0 text-6xl text-gold font-montserrat opacity-50">“</span>
          <p className="text-xl sm:text-2xl italic text-gray-700">
            We are shaping the future of custom manufacturing in Canada. By leading with <span className="text-gold">trust and innovation</span>, we engineer timeless spaces that enhance the lives and businesses of our clients for generations to come.
          </p>
          <span className="absolute -bottom-8 right-0 text-6xl text-gold font-serif opacity-50">”</span>
          <footer className="mt-6 text-sm text-gray-500">— Jose De Sa - TKB Group President</footer>
        </motion.blockquote>
 
        <motion.div className="relative mb-8 px-4" variants={itemVariants}>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300" />
          <div className="relative flex justify-between">
            {timelineData.map((item) => (
              <div key={item.year} className="flex flex-col items-center">
                <div className="w-4 h-4 bg-darkblue rounded-full border-2 border-white shadow-md z-10" />
                <p className="mt-2 font-semibold text-darkblue">{item.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
 
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12"
          variants={containerVariants}  
        >
          {timelineData.map((item) => (
            <motion.div 
              key={item.image} 
              className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
 
        <motion.div variants={itemVariants}>
            <p className="max-w-4xl mx-auto text-center text-gray-600 ">
                We are shaping the future of custom manufacturing in Ontario. By leading with trust and innovation, we engineer timeless spaces that enhance the lives and businesses of our clients for generations to come.
            </p> 
        </motion.div>

      </motion.div>
    </section>
  );
};

export default OurStoryTimeline;
