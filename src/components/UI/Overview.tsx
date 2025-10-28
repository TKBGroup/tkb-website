"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";

const overviewVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Overview: React.FC<{ title: string, description: string }> = ({ title, description }) => {
    return (
        <motion.section className="max-w-[1240px] lg:max-h-[690px] lg:min-h-[900px] w-full overflow-hidden py-24 lg:py-0 lg:pl-4 lg:pt-32 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:justify-items-start relative mx-auto">
            <h2 className="text-4xl md:text-6xl text-center lg:text-right col-span-2 align-self-end lg:mt-20 justify-self-start max-h-min mb-12 lg:mb-0 lg:mr-12 font-chivo font-black italic">{title}</h2>
            <img src="/images/hero-2.jpg" alt="divider" className="max-w-156 col-span-2 mx-auto lg:mx-0" />
            <motion.div className="bg-darkblue/58 max-w-[820px] py-12 px-14 z-3 align-self-end justify-self-start items-end text-right content-end col-start-2 col-end-5 row-start-2 row-end-3 max-h-[230px] ">
                <p className="text-light text-2xl mx-auto z-4">{description}</p>
            </motion.div>
            <MagneticButton className="hidden lg:visible group flex h-40 w-40 justify-self-center items-center justify-center rounded-full border-3 border-darkblue transition-colors duration-300 hover:bg-light hover:text-black mt-9">
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
                </svg></MagneticButton>
        </motion.section>
        // <motion.section className="max-w-[1240px] min-h-[690px] w-full overflow-hidden pl-4 py-32 flex items-start justify-self-center justify-center relative">
        //     <h2 className="text-5xl max-w-[40%] text-right">{title}</h2>
        //     <img src="/images/hero-2.jpg" alt="divider" className="absolute max-w-156 right-0 top-0" />
        //     <motion.div className="bg-darkblue/58 max-w-[820px] py-12 px-14 z-3 align-self-end justify-self-end items-end text-right content-end">
        //         <p className="text-light mx-auto z-4">{description}</p>
        //     </motion.div>
        // </motion.section>
    )
};

export default Overview;