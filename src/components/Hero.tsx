"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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

const images = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const [contactPos, setContactPos] = useState({ x: 0, y: 0 });
  const [estimatePos, setEstimatePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });

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

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handleScrollDown = () => {
    document
      .getElementById("first-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen p-8 xs:p-10 sm:p-18 md:p-22 lg:py-36 lg:px-20 w-full overflow-hidden text-white">
      <AnimatePresence>
        <motion.div
          key={index}
          style={{ backgroundImage: `url(${images[index]})` }}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" },
          }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col justify-center container mx-auto px-6">
        <div className="w-full max-w-full md:max-w-3xl">
          <p className="flex items-center gap-4 text-sm font-light uppercase tracking-widest">
            <span className="h-px w-8 bg-white" />
            Residential & Commercial Millwork
          </p>
          <h1 className="mt-4 text-2xl xs:text-4xl md:text-7xl font-semibold leading-tight">
            Elevate Your Space with TKB Group{" "}
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Decades of delivering custom cabinetry across Canada. Your
            all-in-one partner for precision-engineered kitchens, commercial
            fixtures, and bespoke millwork solutions.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onMouseMove={(e) => handleMouseMove(e, setContactPos)}
            onMouseLeave={() => handleMouseLeave(setContactPos)}
            className="group relative overflow-hidden bg-gray-900/80 px-8 py-3 font-semibold uppercase tracking-wider  transition-colors duration-600 ease-in-out 
  hover:bg-yellow-500/80"
          >
            <span
              style={{
                transform: `translate3d(${contactPos.x}px, ${contactPos.y}px, 0)`,
              }}
              className="relative z-10 inline-block transition-transform duration-150 ease-out"
            >
              <Link href="/contact">Contact Us</Link>
            </span>
          </button>

          <button
            onMouseMove={(e) => handleMouseMove(e, setEstimatePos)}
            onMouseLeave={() => handleMouseLeave(setEstimatePos)}
            className="group relative overflow-hidden bg-transparent px-8 py-3 font-semibold uppercase tracking-wider border border-white transition-colors duration-600 ease-in-out 
  hover:bg-gray-900/80 hover:border-gray-900/0"
          >
            <span
              style={{
                transform: `translate3d(${estimatePos.x}px, ${estimatePos.y}px, 0)`,
              }}
              className="relative z-10 inline-block transition-transform duration-150 ease-out"
            >
              <Link href="/estimate">Get a Free Estimate</Link>
            </span>
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-6 z-10 flex items-center gap-2 text-sm uppercase cursor-pointer"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Prev</span>
      </div>
      <div
        className="absolute bottom-6 right-6 z-10 flex items-center gap-2 text-sm uppercase cursor-pointer"
        onClick={handleNext}
      >
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>

      <div className="hidden lg:block absolute bottom-1/2 right-6 translate-y-44 z-10 mr-12">
        <MagneticButton
          onClick={handleScrollDown}
          className="group flex h-30 w-30 items-center justify-center rounded-full border border-white transition-colors duration-300 hover:bg-white hover:text-black"
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
      </div>
    </section>
  );
}
