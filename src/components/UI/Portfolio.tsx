"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { projects } from "@/lib/portfolioProjects";
function PortfolioCard({ project }: { project: (typeof projects)[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const magneticButtonPos = {
    x: (mousePos.x - 150) * 0.15,
    y: (mousePos.y - 150) * 0.15,
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-black"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover opacity-75"
      />

      <div className="absolute top-0 left-0 p-6 text-white z-999">
        <p className="text-xs uppercase tracking-wider">{project.location}</p>
        <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
      </div>

      <motion.div
        className="absolute top-0 right-0 h-0 w-0 rounded-full bg-black/50"
        style={{ x: "50%", y: "-50%" }}
        animate={{
          height: isHovered ? "400%" : "0%",
          width: isHovered ? "400%" : "0%",
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.button
          className="flex h-32 w-32 items-center justify-center rounded-full border border-white bg-transparent text-white transition-colors duration-300 hover:bg-white hover:text-black"
          style={{ x: magneticButtonPos.x, y: magneticButtonPos.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          VIEW
        </motion.button>
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  const titleVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 4000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      stopOnFocusIn: true,
    }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-darkblue py-20 sm:py-32 text-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.p
            variants={titleVariant}
            className="text-sm font-semibold uppercase tracking-wider text-gold"
          >
            Signature Projects
          </motion.p>
          <motion.h2
            variants={titleVariant}
            className="mt-2 text-4xl sm:text-5xl font-chivo font-bold tracking-tight"
          >
            Portfolio
          </motion.h2>
        </motion.div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((project, index) => (
              <div className="embla__slide" key={index}>
                <PortfolioCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={scrollPrev}
            className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Prev
          </button>

          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button key={index} onClick={() => emblaApi?.scrollTo(index)}>
                <div
                  className={`h-2 w-2 rounded-full transition-colors ${selectedIndex === index ? "bg-white" : "bg-gray-600"
                    }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400 hover:text-white"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
