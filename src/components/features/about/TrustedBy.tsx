"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { logos } from "@/lib/logos";

export default function TrustedBy() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const trustedByVariant: Variants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const PopularBrands: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="bg-white py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          className="relative mb-10 sm:mb-24"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={trustedByVariant}
            className="text-3xl sm:text-8xl font-black uppercase"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px  var(--color-gold)",
              fontFamily: "poppins",
            }}
          >
            Trusted By
          </motion.h2>

          <motion.h3
            variants={PopularBrands}
            className="absolute inset-0 flex items-center justify-center text-xl sm:text-5xl font-chivo font-bold text-gray-900 mt-8 sm:mt-12 ml-6 sm:ml-12"
          >
            POPULAR BRANDS
          </motion.h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 items-center gap-x-8 gap-y-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
        >
          {logos.map((logo: { name: string; src: string }) => (
            <motion.div
              key={logo.name}
              variants={logoVariants}
              className="col-span-1"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={40}
                className="max-h-18 w-full object-contain grayscale-100 hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
