"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function About() {
  const titleVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const subtitleVariant: Variants = {
    hidden: { opacity: 0, rotateY: -90, transformOrigin: "left" },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  return (
    <section className="relative">
      <motion.div
        className="relative min-h-max w-full  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(images/hero-1.jpg)" }}
      >
        <div className="bg-black/70">
          <div className="container  mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between p-8 sm:py-32">
            <span className="flex flex-col mx-auto ">
              <motion.p
                variants={subtitleVariant}
                className="text-sm font-semibold uppercase tracking-wider text-gold"
              >
                Canada-Wide One-Stop Turnkey Solution
              </motion.p>
              <motion.h2
                variants={titleVariant}
                className="mt-2 md:mb-4 text-3xl sm:text-4xl font-chivo font-bold text-light sm:max-w-lg max-w-xl"
              >
                TKB Group - Custom Millwork Experts
              </motion.h2>
              <p className="mt-4 text-[8px] sm:text-sm md:text-md text-light max-w-2xl justify-self-start md:px-10 text-left">
                We offer outstanding custom commercial millwork solutions of any
                scale. We have over 25 years of experience and knowledge in
                building supreme quality retail displays and furniture for
                various businesses. We always exceed customer's expectations by
                providing solid, durable and lasting solutions. TKB Group
                designs, builds, and installs custom cabinetry, architectural
                millwork, and exhibition displays for residential and commercial
                clients across Ontario — while delivering commercial rollouts
                nationwide. From luxury kitchens in Toronto to retail fixtures,
                trade show booths, and national installation teams, every
                project is engineered for precision, durability, and on-time
                delivery.
              </p>
            </span>
            <iframe
              className=" w-[80%]  min-w-[60%] md:w-[50%] h-auto sm:aspect-video sm:mx-auto mt-3"
              src="https://www.youtube.com/embed/rLFDHLixqCI?si=JXF1gsQUBHu1ujca"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
