"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- TYPES AND PROPS ---

type StatItem = {
    value: string;
    label: string;
};

type SplitBannerProps = {
    imageUrl: string;
    title?: string;
    stats?: StatItem[];
    tagline?: string | string[];
};

// --- DEFAULT PROPS ---
const defaultTitle = "Our Services";
const defaultStats: StatItem[] = [
    { value: "35+", label: "Years" },
    { value: "1k+", label: "Projects" },
    { value: "24/7", label: "Support" },
    { value: "99%", label: "Satisfaction" },
];
const defaultTagline = ["You ", "Name It", ". We Build It."];
const defaultUrl = "/images/fireplace.jpg";

// --- MAIN COMPONENT ---
export default function SplitBanner({
    imageUrl = defaultUrl,
    title = defaultTitle,
    stats = defaultStats,
    tagline = defaultTagline,
}: SplitBannerProps) {
    return (
        <section className="relative w-full h-86 lg:h-[32rem] overflow-hidden shadow-lg text-light p-8  md:p-12"> 
            <Image
                src={imageUrl}
                alt="Background of a busy office environment"
                fill
                className="object-cover z-0"
                priority
            />
 
            <div className="absolute inset-0 z-10 grid grid-cols-2"> 
                <div className="relative bg-gold/70">
                </div>
 
                <div className="relative bg-black/60">
                </div>
            </div>
 
            <div className="absolute inset-0 z-20 grid grid-cols-1 md:grid-cols-2 items-end "> 
                <div className="flex flex-col text-center md:text-left max-w-max justify-self-end px-12 py-6 items-end gap-x-10 mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-medium mb-6 mx-auto">{title}</h1>
                   
                </div>
 
                <div className="font-chivo tracking-wide hidden md:flex md:flex-col md:gap-y-6 items-center justify-center md:justify-start mt-8 md:mt-0  px-20 py-6" >
                    <p className="text-2xl xl:text-4xl 2xl:text-5xl font-bold">
                        <span>
                            {tagline[0]}
                        </span>
                        <span className="text-gold" >
                            {tagline[1]}
                        </span>
                        <span>
                            {tagline[2]}
                        </span>
                    </p> <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2 text-center md:text-left mx-auto">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">{stat.value}</p>
                                <p className="font-chivo font-medium text-sm xl:text-lg md:text-gold uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        // <section className="relative w-full h-86 lg:h-[32rem] overflow-hidden shadow-lg text-light p-8  md:p-12">
        //     {/* <section className="relative w-full h-[300px] md:h-[400px] text-white overflow-hidden"> */}
        //     {/* Background Image - This will be shared by both overlays */}
        //     <Image
        //         src={imageUrl}
        //         alt="Background of a busy office environment"
        //         fill
        //         className="object-cover z-0"
        //         priority
        //     />

        //     {/* --- Overlays Container --- */}
        //     {/* This div holds both the gold and dark overlays */}
        //     <div className="absolute inset-0 z-10 grid grid-cols-2">
        //         {/* Gold Overlay (Left Side) */}
        //         <div className="relative bg-gold/70">
        //         </div>

        //         {/* Dark Overlay (Right Side) */}
        //         <div className="relative bg-black/60">
        //         </div>
        //     </div>

        //     {/* --- Content Grid --- */}
        //     <div className="absolute inset-0 z-20 grid grid-cols-1 md:grid-cols-2 items-end ">
        //         {/* Left Side: Title and Stats */}
        //         <div className="flex flex-col text-center md:text-left max-w-max justify-self-end px-12 py-6 items-end gap-x-10 mx-auto">
        //             <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-medium mb-6 mx-auto">{title}</h1>
        //             <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2 text-center md:text-left mx-auto">
        //                 {stats.map((stat, index) => (
        //                     <motion.div
        //                         key={index}
        //                         initial={{ opacity: 0, y: 20 }}
        //                         whileInView={{ opacity: 1, y: 0 }}
        //                         viewport={{ once: true, amount: 0.5 }}
        //                         transition={{ delay: index * 0.1, duration: 0.5 }}
        //                     >
        //                         <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">{stat.value}</p>
        //                         <p className="font-chivo font-medium text-sm xl:text-lg md:text-black uppercase tracking-wider">{stat.label}</p>
        //                     </motion.div>
        //                 ))}
        //             </div>
        //         </div>

        //         {/* Right Side: Tagline */}
        //         <div className="font-chivo tracking-wide hidden md:flex items-center justify-center md:justify-start mt-8 md:mt-0  px-20 py-6" >
        //             <p className="text-2xl xl:text-4xl 2xl:text-5xl font-bold">
        //                 <span>
        //                     {tagline[0]}
        //                 </span>
        //                 <span className="text-gold" >
        //                     {tagline[1]}
        //                 </span>
        //                 <span>
        //                     {tagline[2]}
        //                 </span>
        //             </p>
        //         </div>
        //     </div>
        // </section>
    );
}
