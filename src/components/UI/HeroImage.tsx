"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const heroVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const HeroImage: React.FC<{ src: string; alt: string, title: string, path: string }> = ({ src, alt, title, path }) => {
    return (
        <motion.div
            className="min-w-full text-light  w-full h-128 overflow-hidden shadow-lg  bg-cover bg-center items-end flex justify-between px-24 py-6"
            initial="hidden"
            animate="visible"
            style={{
                backgroundImage: src,
            }}
        > 
            <div className="max-w-[1240px] w-full overflow-hidden py-6 flex justify-self-center justify-between mx-auto">
                <motion.h1 className="text-7xl mt-24 z-2">
                    {title}
                </motion.h1>
                <motion.p className="z-2 font-bold">
                    {path}
                </motion.p>
            </div>
            <div className="absolute inset-0 bg-black/50 z-0 max-h-128" />
        </motion.div>)
};

export default HeroImage;