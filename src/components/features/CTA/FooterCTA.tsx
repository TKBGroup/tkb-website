"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { projects } from "@/lib/portfolioProjects";
const MagneticButton = ({ children, className, ...props }: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      e.currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.1;
    const y = (clientY - (top + height / 2)) * 0.1;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};


export default function FooterCTA() {
  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, rotateY: -90, transformOrigin: "left" },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 1.0, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  const [index, setIndex] = useState(0);

  const [contactPos, setContactPos] = useState({ x: 0, y: 0 });
  const [formPos, setFormPos] = useState({ x: 0, y: 0 }); 

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    setPosition: Function
  ) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      e.currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.15;
    const y = (clientY - (top + height / 2)) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = (setPosition: Function) => {
    setPosition({ x: 0, y: 0 });
  };
 

  return (
    <motion.div className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.15 }}>
      <video className="relative justify-self-end w-full" src="/images/designDemo.mp4" autoPlay loop muted></video>
      <div className="absolute inset-0 bg-black/40"></div>
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }}>
        <motion.h2 variants={buttonVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Transform Your Space?</motion.h2>
        <motion.p variants={cardVariant} className="text-white mb-6 max-w-2xl">Contact us today for a free consultation and discover how we can bring your vision to life with our expert craftsmanship and personalized service.</motion.p>

        <motion.div variants={cardVariant} className="flex flex-col sm:flex-row" >
          <button
            onMouseMove={(e) => handleMouseMove(e, setFormPos)}
            onMouseLeave={() => handleMouseLeave(setFormPos)}
            className="group relative overflow-hidden   px-8 py-3 font-semibold uppercase tracking-wider  transition-colors duration-600 ease-in-out"
          >
            <span
              style={{
                transform: `translate3d(${formPos.x}px, ${formPos.y}px, 0)`,
              }}
              className="relative z-10 inline-block transition-transform duration-150 ease-out"
            >
              <Link href="/contact" className="bg-gold text-light font-semibold px-6 py-3 hover:bg-transparent hover:border-2 hover:text-gold border-gold transition">
                Fill the Form
              </Link>
            </span>
          </button>

          <button
            onMouseMove={(e) => handleMouseMove(e, setContactPos)}
            onMouseLeave={() => handleMouseLeave(setContactPos)}
            className="group relative overflow-hidden   px-8 py-3 font-semibold uppercase tracking-wider  transition-colors duration-600 ease-in-out"
          >
            <span
              style={{
                transform: `translate3d(${contactPos.x}px, ${contactPos.y}px, 0)`,
              }}
              className="relative z-10 inline-block transition-transform duration-150 ease-out"
            >
              <Link href="/contact" className="bg-transparent border-2 border-gold text-gold font-semibold px-6 py-3 hover:bg-gold/90 hover:text-light transition">
                Contact Us
              </Link>
            </span>
          </button>
        </motion.div>
        {/* <div className="hidden lg:block absolute bottom-1/2 right-6 translate-y-44 z-10 mr-12">
        <MagneticButton
          onClick={handleScrollDown}
          className="group flex h-30 w-30 items-center justify-center rounded-full border border-light transition-colors duration-300 hover:bg-light hover:text-black"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </MagneticButton>
      </div> */}

      </motion.div>
    </motion.div>
  )
  // "use client";

  // import React, { useState } from "react";
  // import Link from "next/link";
  // import { motion, Variants } from "framer-motion";
  // import { projects } from "@/components/lib/portfolioProjects";


  // export default function FooterCTA() {
  //   const buttonVariants: Variants = {
  //     hidden: { opacity: 0, y: 50 },
  //     visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  //   };

  //   const cardVariant: Variants = {
  //     hidden: { opacity: 0, rotateY: -90, transformOrigin: "left" },
  //     visible: {
  //       opacity: 1,
  //       rotateY: 0,
  //       transition: { duration: 1.0, ease: [0.34, 1.56, 0.64, 1] },
  //     },
  //   };

  //   return (
  //     <motion.div className="relative"
  //       initial="hidden"
  //       whileInView="visible"
  //       viewport={{ once: true, amount: 0.1 }}
  //       transition={{ staggerChildren: 0.15 }}>
  //       <video className="relative justify-self-end w-full" src="/images/designDemo.mp4" autoPlay loop muted></video>
  //       <div className="absolute inset-0 bg-black/40"></div>
  //       <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16"
  //         initial="hidden"
  //         whileInView="visible"
  //         viewport={{ once: true, amount: 0.5 }}
  //         transition={{ staggerChildren: 0.2 }}>
  //         <motion.h2 variants={buttonVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Transform Your Space?</motion.h2>
  //         <motion.p variants={cardVariant} className="text-white mb-6 max-w-2xl">Contact us today for a free consultation and discover how we can bring your vision to life with our expert craftsmanship and personalized service.</motion.p>
  //         <motion.div variants={cardVariant} className="flex flex-col sm:flex-row gap-4" >
  //           <Link href="/contact" className="bg-gold text-light font-semibold px-6 py-3 hover:bg-transparent hover:border-2 hover:text-gold border-gold transition">
  //             Fill the Form
  //           </Link>
  //           <Link href="/contact" className="bg-transparent border-2 border-gold text-gold font-semibold px-6 py-3 hover:bg-gold/90 hover:text-light transition">
  //             Contact Us
  //           </Link>

  //         </motion.div>


  //       </motion.div>
  //     </motion.div>
  //   )
};
