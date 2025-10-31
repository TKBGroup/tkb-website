// "use client";

// import React from "react";
// import { motion, Variants } from "framer-motion";

// const heroVariants: Variants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };
// const HeroImage: React.FC<{ src: string; alt: string, title: string, path: string }> = ({ src, alt, title, path }) => {
//     return (
//         <motion.div
//             className="relative w-full h-[32rem] overflow-hidden shadow-lg text-light"
//             // className="min-w-full text-light  w-full h-128 overflow-hidden shadow-lg  bg-cover bg-center items-end flex justify-between px-12 md:px-14 lg:px-18 xl:px-24 py-6"
//             initial="hidden"
//             animate="visible"
//             style={{
//                 backgroundImage: src,
//             }}
//         > 
//             <div className="max-w-[1240px] w-full overflow-hidden py-6 flex justify-self-center justify-between mx-auto">
//                 <motion.h1 className="text-lg xs:text-3xl md:text-4xl lg:text-5xl xl:text-7xl max-h-min mt-40 z-2">
//                     {title}
//                 </motion.h1>
//                 <motion.p className="text-xxs xs:text-xs md:text-sm lg:text-base z-2 font-bold max-h-min mt-48">
//                     {path}
//                 </motion.p>
//             </div>
//             <div className="absolute inset-0 bg-black/50 z-0 max-h-128" />
//         </motion.div>)
// };

// export default HeroImage;

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from 'next/image';  

const heroVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } },
}

const HeroImage: React.FC<{ src: string; alt: string; title: string; path: string }> = ({ src, alt, title, path }) => {
    return (
        <motion.div 
            className="relative w-full h-86 lg:h-[32rem] overflow-hidden shadow-lg text-light p-8  md:p-12"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
        > 
            <Image
                src={src}
                alt={alt}
                className="object-cover z-0"
                priority
                fill
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
cc
            <div className="relative z-20 h-full   flex flex-col justify-end">
                <div className="max-w-[1240px] w-full mx-auto flex justify-between items-end">
                    <motion.h1 
                        className="text-sm xxs:text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light"
                        variants={textVariants}
                    >
                        {title}
                    </motion.h1>
                    <motion.p 
                        className="text-[6px] xs:text-xxs sm:text-xs md:text-sm lg:text-base font-semibold"
                        variants={textVariants}
                    >
                        {path}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroImage;
