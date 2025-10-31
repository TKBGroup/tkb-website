"use client";

// import { useRef } from "react";
import React from "react";
import { motion, Variants } from "framer-motion";
 
const statsData = [
  { number: "25+", caption: "Years" },
  { number: "1000+", caption: "Projects" },
  { number: "24/7", caption: "Support" },
  { number: "99%", caption: "On-time" },
];
 
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.3,
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
 
const numberVariant: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const captionVariant: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0, 
    transition: { duration: 0.5, delay: 0.2 },
  },
};

export default function Numbers() {
//   const ref = useRef(null);

  return (
    <section className="bg-white py-20 sm:py-32 overflow-x-hidden">
    {/* <section ref={ref} className="bg-white py-20 sm:py-32 overflow-x-hidden"> */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center"> 
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-16 sm:gap-x-8"
          variants={containerVariants}
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {statsData.map((stat, index) => ( 
            <motion.li key={index} variants={itemVariants} className="relative">
              {/* Animated Number */}
              <motion.h2
                variants={numberVariant}
                className="text-6xl sm:text-8xl font-black uppercase max-w-min"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px var(--color-gold)",
                  fontFamily: "poppins",
                }}
              >
                {stat.number}
              </motion.h2>

              {/* Animated Caption */}
              <motion.h3
                variants={captionVariant}
                className=" inset-0 flex items-center justify-center text-3xl sm:text-5xl font-chivo font-bold text-gray-900 max-w-max"
              >
                {stat.caption}
              </motion.h3>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
