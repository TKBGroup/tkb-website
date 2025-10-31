// "use client";

// import { motion } from "framer-motion";

// const InfoBlock1 = () => {
//   return (
//     <section className="relative flex flex-col md:flex-row items-start justify-between mx-auto max-w-[1240px] px-6 py-20 overflow-hidden md:gap-12 lg:gap-0">
//       {/* Background Title */}
//       <motion.h1
//         className="absolute top-1/2 -translate-y-1/2 text-[4rem] md:text-[8rem] lg:text-[10rem] font-extrabold text-[#315FC2]/10 select-none leading-none z-0"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         Who We Are
//       </motion.h1>

//       {/* Left Section */}
//       <motion.div
//         className="relative z-10 max-w-[400px] lg:ml-32 mb-6 md:mb-0"
//         initial={{ opacity: 0, x: -40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold text-darkblue mb-4">Who We Are</h2>
//         <motion.a
//           href="/about"
//           className="text-sm font-semibold text-gold tracking-wider uppercase hover:underline inline-block"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           Learn More About Us &gt;
//         </motion.a>
//       </motion.div>

//       {/* Right Section */}
//       <motion.p
//         className="relative z-10 text-gray-700 max-w-[550px] leading-relaxed"
//         initial={{ opacity: 0, x: 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
//         viewport={{ once: true }}
//       >
//         We are shaping the future of custom manufacturing in Canada. By leading
//         with trust and innovation, we engineer timeless spaces that enhance the
//         lives and businesses of our clients for generations to come.
//       </motion.p>
//     </section>
//   );
// };

// export default InfoBlock1;


// components/sections/InfoSection.tsx

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// --- TYPES AND PROPS ---

type InfoSectionProps = {
  backgroundTitle?: string;
  title?: string;
  linkHref?: string;
  linkText?: string;
  description?: React.ReactNode; // Use React.ReactNode for flexible content
  // Prop to control alignment and layout variations
  layout?: 'default' | 'reversed'; 
};

// --- DEFAULT PROPS ---
// These values will be used if no props are passed, matching your original component.
const defaultProps: Required<InfoSectionProps> = {
  backgroundTitle: "Who We Are",
  title: "Who We Are",
  linkText: "Learn More About Us >",
  linkHref: "/about",
  description: `We are shaping the future of custom manufacturing in Canada. By leading with trust and innovation, we engineer timeless spaces that enhance the lives and businesses of our clients for generations to come.`,
  layout: 'default',
};

// --- MAIN COMPONENT ---
export default function InfoSection(props: InfoSectionProps) {
  // Merge incoming props with defaults
  const {
    backgroundTitle,
    title,
    linkText,
    linkHref,
    description,
    layout,
  } = { ...defaultProps, ...props };

  // Determine flex direction based on layout prop
  const flexDirection = layout === 'reversed' ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className={`relative flex flex-col ${flexDirection} items-start justify-between mx-auto max-w-[1240px] px-6 py-20 overflow-hidden md:gap-12 lg:gap-0`}>
      {/* Background Title */}
      <motion.h1
        className="absolute top-1/2 -translate-y-1/2 text-[4rem] md:text-[8rem] lg:text-[10rem] font-extrabold text-[#315FC2]/10 select-none leading-none z-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {backgroundTitle}
      </motion.h1>

      {/* Left Section (or Right in 'reversed' layout) */}
      <motion.div
        className="relative z-10 max-w-[400px] lg:ml-32 mb-6 md:mb-0"
        initial={{ opacity: 0, x: layout === 'reversed' ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-darkblue mb-4">{title}</h2>
        {linkHref && linkText && (
          <Link href={linkHref} legacyBehavior>
            <motion.a
              className="text-sm font-semibold text-gold tracking-wider uppercase hover:underline inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {linkText}
            </motion.a>
          </Link>
        )}
      </motion.div>

      {/* Right Section (or Left in 'reversed' layout) */}
      <motion.p
        className="relative z-10 text-gray-700 max-w-[550px] leading-relaxed"
        initial={{ opacity: 0, x: layout === 'reversed' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </section>
  );
}
