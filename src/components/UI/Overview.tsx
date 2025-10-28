// "use client";

// import React from "react";
// import { motion, Variants } from "framer-motion";
// import MagneticButton from "./MagneticButton";

// const overviewVariants: Variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };


//   const handleScrollDown = () => {
//     document
//       .getElementById("second-section")
//       ?.scrollIntoView({ behavior: "smooth" });
//   };


// const Overview: React.FC<{ title: string, description: string }> = ({ title, description }) => {
//     return (
//         <motion.section className="max-w-[1240px] lg:max-h-[690px] lg:min-h-[900px] w-full overflow-hidden py-16 lg:py-0 lg:pl-4 lg:pt-32 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:justify-items-start relative mx-auto">
//             <h2 className="text-lg md:text-4xl md:text-5xl lg:text-6xl text-center lg:text-right col-span-2 align-self-end lg:mt-20 justify-self-start max-h-min mx-auto mb-4 md:mb-10 lg:mb-12 lg:mb-0 lg:mr-6 font-chivo font-black italic">{title}</h2>
//             <img src="/images/hero-2.jpg" alt="divider" className="max-w-50 xxs:max-w-60 sm:max-w-80 xs:max-w-100 lg:max-w-156 col-span-2 mx-auto lg:mx-0 z-0" />
//             <motion.div className="relative bg-darkblue/58 max-w-[820px] py-6 md:py-12 px-7 md:px-14 z-4 align-self-end justify-self-start items-end text-right content-end col-start-2 col-end-5 max-h-[230px] mt-[-48px]">
//                 <p className="text-light text-sm sm:text-base md:text-xl lg:text-2xl mx-auto z-4">{description}</p>
//             </motion.div>
//             <MagneticButton className="hidden lg:flex col-start-0 col-end-2 row-start-2 row-end-3 flex h-40 w-40 justify-self-center items-center justify-center rounded-full border-3 border-darkblue transition-colors duration-300 hover:bg-light hover:text-black "
//                 onClick={handleScrollDown}>
//                 <svg
//                     className="h-10 w-10"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
//                     />
//                 </svg></MagneticButton>
//         </motion.section>
//         // <motion.section className="max-w-[1240px] min-h-[690px] w-full overflow-hidden pl-4 py-32 flex items-start justify-self-center justify-center relative">
//         //     <h2 className="text-5xl max-w-[40%] text-right">{title}</h2>
//         //     <img src="/images/hero-2.jpg" alt="divider" className="absolute max-w-156 right-0 top-0" />
//         //     <motion.div className="bg-darkblue/58 max-w-[820px] py-12 px-14 z-3 align-self-end justify-self-end items-end text-right content-end">
//         //         <p className="text-light mx-auto z-4">{description}</p>
//         //     </motion.div>
//         // </motion.section>
//     )
// };

// export default Overview;

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";  

const overviewVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const Overview: React.FC<{ title: string; description: string }> = ({ title, description }) => {
     
    const handleScrollDown = () => {
        document
            .getElementById("second-section")  
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.section 
            className="w-full max-w-[1240px] mx-auto py-24 px-4 sm:px-6 lg:px-8 "
            variants={overviewVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        > 
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
 
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black  italic text-darkblue leading-tight mb-6 md:mb-12">
                        {title}
                    </h2>
                    
                    <MagneticButton 
                        className="
                            hidden lg:flex  
                            group h-40 w-40 
                            items-center justify-center 
                            rounded-full 
                            ml-32
                            border-[3px]  
                            border-darkblue 
                            transition-colors duration-300 
                            hover:bg-darkblue hover:text-white"
                        onClick={handleScrollDown}
                    >
                         <svg
                    className="h-10 w-10"
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
 
                <div className="lg:block relative md:px-2 lg:mt-0">
                    <img 
                        src="/images/about/client.png" 
                        alt="A modern kitchen interior" 
                        className="w-full shadow-lg"
                    />
                     
                    <div className="
                        relative lg:absolute 
                        lg:bottom-0 lg:left-14
                        lg:-translate-x-1/4 lg:translate-y-1/4 
                        bg-darkblue/70
                        backdrop-blur-sm
                        text-light 
                        p-8 md:p-10
                         
                        max-w-xl
                        mt-[-80px] lg:mt-0 mx-auto lg:mx-0"
                    >
                        <p className="text-lg md:text-xl">
                            {description}
                        </p>
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default Overview;
