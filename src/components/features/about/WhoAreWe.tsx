// "use client"

// import React, { useState } from 'react';
// import { motion, Variants } from 'framer-motion';

// export default function WhoAreWe() {
//     return (
//         <motion.div className='h-48 my-auto mx-auto max-w-[1240px]'>
//             <div className='min-w-max mx-auto text-center relative w-full h-full flex flex-col justify-center items-center'>
//                 <h2 className='text-6xl text-[#315FC2]/10 absolute block mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Who Are We?</h2>
//                 <h2 className='text-xl text-darkblue block mx-auto '>Who Are We?</h2>
//             </div>


//         </motion.div>
//     );
// };\

"use client";

import { motion } from "framer-motion";

const WhoWeAreSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-start justify-between mx-auto max-w-[1240px] px-6 py-20 overflow-hidden md:gap-12 lg:gap-0">
      {/* Background Title */}
      <motion.h1
        className="absolute top-1/2 -translate-y-1/2 text-[4rem] md:text-[8rem] lg:text-[10rem] font-extrabold text-[#315FC2]/10 select-none leading-none z-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Who We Are
      </motion.h1>

      {/* Left Section */}
      <motion.div
        className="relative z-10 max-w-[400px] lg:ml-32 mb-6 md:mb-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-darkblue mb-4">Who We Are</h2>
        <motion.a
          href="/about"
          className="text-sm font-semibold text-gold tracking-wider uppercase hover:underline inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More About Us &gt;
        </motion.a>
      </motion.div>

      {/* Right Section */}
      <motion.p
        className="relative z-10 text-gray-700 max-w-[550px] leading-relaxed"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        We are shaping the future of custom manufacturing in Canada. By leading
        with trust and innovation, we engineer timeless spaces that enhance the
        lives and businesses of our clients for generations to come.
      </motion.p>
    </section>
  );
};

export default WhoWeAreSection;
