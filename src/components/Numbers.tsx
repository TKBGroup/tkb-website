"use client";

import { useRef } from "react";
import React from "react";
import { motion, Variants, useInView } from "framer-motion";

export default function Numbers() {
  const titleVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const numbers: Variants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const caption: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-white py-20 sm:py-32 max-h-min overflow-x-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ul className="flex gap-8 align-center justify-around md:flex-row flex-wrap  flex flex-col">
            <li className="">
              <motion.div
                className="relative"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.h2
                  variants={numbers}
                  className="text-6xl sm:text-8xl font-black uppercase"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px var(--color-gold)",
                    fontFamily: "poppins",
                  }}
                >
                  25+
                </motion.h2>
                <motion.h3
                  variants={caption}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl font-chivo font-bold text-gray-900 mt-12 ml-12"
                >
                  Years
                </motion.h3>
              </motion.div>
            </li>
            <li className="">
              <motion.div
                className="relative "
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.h2
                  variants={numbers}
                  className="text-6xl sm:text-8xl font-black uppercase"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px  var(--color-gold)",
                    fontFamily: "poppins",
                  }}
                >
                  1000+
                </motion.h2>
                <motion.h3
                  variants={caption}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl font-chivo font-bold text-gray-900 mt-12 ml-12"
                >
                  Projects
                </motion.h3>
              </motion.div>
            </li>
            <li className="">
              <motion.div
                className="relative "
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.h2
                  variants={numbers}
                  className="text-6xl sm:text-8xl font-black uppercase"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px var(--color-gold)",
                    fontFamily: "poppins",
                  }}
                >
                  24/7
                </motion.h2>
                <motion.h3
                  variants={caption}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl font-chivo font-bold text-gray-900 mt-12 ml-12"
                >
                  {" "}
                  Support
                </motion.h3>
              </motion.div>
            </li>
            <li className="">
              <motion.div
                className="relative "
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.h2
                  variants={numbers}
                  className="text-6xl sm:text-8xl font-black uppercase"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px var(--color-gold)",
                    fontFamily: "poppins",
                  }}
                >
                  99%
                </motion.h2>
                <motion.h3
                  variants={caption}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="absolute w-full inset-0 flex items-center justify-center text-3xl sm:text-5xl font-chivo font-bold text-gray-900 mt-12 ml-12"
                >
                  On-time
                </motion.h3>
              </motion.div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
