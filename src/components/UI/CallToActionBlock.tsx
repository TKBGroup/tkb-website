// components/features/call-to-action/CallToAction.tsx

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import MagneticButton from "../UI/MagneticButton"; // Assuming this is in your UI folder

// --- TYPES AND PROPS ---

type CTAButton = {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
};

type CallToActionProps = {
  mediaType: 'image' | 'video';
  mediaSrc: string;
  alt?: string;  
  title?: string;
  description?: string;
  buttons?: CTAButton[];
};

// --- DEFAULT PROPS ---
// Provide sensible defaults to make the component reusable even with minimal props.
const defaultTitle = "Ready to Get Started?";
const defaultDescription = "Join us now and discover a world of possibilities. Click a button below to learn more or sign up.";
const defaultButtons: CTAButton[] = [
  { text: 'LEARN MORE', href: '/about', variant: 'primary' },
  { text: 'CONTACT US', href: '/contact', variant: 'secondary' },
];
const defaultType = "video"
const defaultSrc = "/images/designDemo.mp4";

// --- ANIMATION VARIANTS ---
// Unified animations for a consistent feel.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// --- HELPER COMPONENT FOR BACKGROUND ---
// This keeps the main component's return statement cleaner.
const BackgroundMedia = ({ mediaType, mediaSrc, alt }: Pick<CallToActionProps, 'mediaType' | 'mediaSrc' | 'alt'>) => {
  const commonClasses = "absolute top-0 left-0 w-full h-full object-cover z-0";

  if (mediaType === 'video') {
    return (
      <video
        className={commonClasses}
        src={mediaSrc}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <Image
      className={commonClasses}
      src={mediaSrc}
      alt={alt || "Decorative background"}
      fill  
      priority 
    />
  );
};


// --- MAIN COMPONENT ---
export default function CallToActionBlock({
  mediaType = defaultType,
  mediaSrc = defaultSrc,
  alt = "",
  title = defaultTitle,
  description = defaultDescription,
  buttons = defaultButtons,
}: CallToActionProps) {
  return (
    <motion.div
      className="relative w-full h-[80vh] min-h-[600px] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Conditionally Rendered Background */}
      <BackgroundMedia mediaType={mediaType} mediaSrc={mediaSrc} alt={alt} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
        variants={containerVariants} // Nested stagger for a smoother effect
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-white mb-8 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          {buttons.map((button) => (
            <MagneticButton key={button.text}>
              <Link
                href={button.href}
                className={`
                  inline-block px-8 py-3 font-semibold transition-colors duration-300
                  ${button.variant === 'primary'
                    ? 'bg-gold text-darkblue hover:bg-transparent hover:text-gold border-2 border-gold'
                    : 'bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-darkblue'
                  }
                `}
              >
                {button.text}
              </Link>
            </MagneticButton>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
