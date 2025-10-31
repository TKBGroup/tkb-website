"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import FadeInOnScroll from "@/components/UI/FadeInOnScroll";
import LocationRow from "@/components/features/contact/LocationRow";
import { useState, useEffect } from "react";
import Link from "next/link";
import { images } from "@/lib/heroImages";
import ExpandableContactForm from "@/components/features/contact/ExpandableContactForm";
import InfoBlock1 from "@/components/features/about/InfoBlock1";
import SeekingHelp from "@/components/features/CTA/SeekingHelp";



// A new, more organized data structure for locations
const locationsData = [
  {
    id: 'showroom',
    name: "TKB Group - Showroom",
    address: "900 Caledonia Rd, Toronto, ON M6B 3Y1, Canada",
    contactPerson: "Jose De Sa – President, TKB Group",
    email: "info@tkbcabinetry.com",
    phone: "+1 (416) 675-6555",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.285826821145!2d-79.46760452323826!3d43.70460877109974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33c5ed0dfc63%3A0xf170c9c73c308ff2!2sTKB%20cabinetry!5e0!3m2!1sen!2sca!4v1761317441665!5m2!1sen!2sca",
  },
  {
    id: 'office',
    name: "TKB Group - Office",
    address: "112 Snidercroft Road, Unit 7 Concord, ON L4K 4S8",
    contactPerson: "Office Administration",
    email: "info@tkbmmillwork.com",
    phone: "+1 (416) 880-2055", // Example phone
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.498870196726!2d-79.5249603232342!3d43.82390317109594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e1f2b1d3d5b%3A0x6b8d3d9f3d9f3d5b!2s112%20Snidercroft%20Rd%2C%20Concord%2C%20ON%20L4K%202J8!5e0!3m2!1sen!2sca!4v1761317441665!5m2!1sen!2sca",
  },
];
const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export default function ContactPage() {
  const [index, setIndex] = useState(0); 

  const [contactPos, setContactPos] = useState({ x: 0, y: 0 });
  const [estimatePos, setEstimatePos] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);
 

  return (
    <>
      <main className="w-full min-h-screen bg-gray-50 mx-auto overflow-hidden">
        <FadeInOnScroll>
          {/* Hero Section */}
          <motion.div className="relative flex flex-col items-center justify-center text-center gap-4 bg-cover px-4 sm:px-10 lg:px-28 py-32 lg:py-64 bg-center w-full h-screen bg-[url('/images/contact/hero.png')] mb-20">
            <div className="absolute inset-0 bg-black/50 z-0" />
            <div className="relative z-10 max-w-4xl flex flex-col">
              <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat">Get in Touch.</h1>
              <p className="text-left max-w-128 text-gray-200 text-lg mt-8 font-chivo font-light">
                We partner with homeowners, designers, and architects to craft bespoke solutions that reflect a unique vision. Let's build something remarkable together.
              </p>
              {/* <motion.button variants={navVariants} onClick={() => {}} className="hover:bg-gold hover:text-darkblue text-center bg-transparent text-gold border-2 border-gold p-3 mt-3">Contact Form</motion.button> */}
              <div className="mt-10 mx-auto flex flex-wrap gap-4 flex-col xs:flex-row justify-center">
                <button
                  onMouseMove={(e) => handleMouseMove(e, setContactPos)}
                  onMouseLeave={() => handleMouseLeave(setContactPos)}
                  className="group relative overflow-hidden bg-darkblue/80 px-8 py-3 font-semibold uppercase tracking-wider text-light-1 transition-colors duration-600 ease-in-out 
  hover:bg-gold/80"
                >
                  <span
                    style={{
                      transform: `translate3d(${contactPos.x}px, ${contactPos.y}px, 0)`,
                    }}
                    className="relative z-10 inline-block transition-transform duration-150 ease-out"
                  >
                    <Link href="/contact">Visit Us</Link>
                  </span>
                </button>

                <button
                  onMouseMove={(e) => handleMouseMove(e, setEstimatePos)}
                  onMouseLeave={() => handleMouseLeave(setEstimatePos)}
                  className="group relative overflow-hidden bg-transparent px-8 py-3 font-semibold uppercase tracking-wider border border-light  text-light-1 transition-colors duration-600 ease-in-out 
  hover:bg-darkblue/80 hover:border-darkblue/0"
                >
                  <span
                    style={{
                      transform: `translate3d(${estimatePos.x}px, ${estimatePos.y}px, 0)`,
                    }}
                    className="relative z-10 inline-block transition-transform duration-150 ease-out"
                  >
                    <Link href="/estimate">Fill Our Contact Form</Link>
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <InfoBlock1 />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 pt-16 sm:pt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-darkblue z-10 font-montserrat mb-8 text-center">
              Visit Us
            </h2>

            <div className="flex flex-col">
              {locationsData.map((location) => (
                <LocationRow key={location.id} location={location} />
              ))}
            </div>

          </div>
        </FadeInOnScroll>


        <FadeInOnScroll>
          <ExpandableContactForm />
        </FadeInOnScroll> 

        <FadeInOnScroll>
          <SeekingHelp />
        </FadeInOnScroll>

      </main>
    </>
  );
}
