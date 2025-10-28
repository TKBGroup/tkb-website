"use client"

import { motion, Variants } from "framer-motion";

const headingVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    },
};

const buttonVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    },
};

const SeekingHelp = () => {
    return (

        <section className="w-full bg-darkblue py-20 px-4">
            {/* 
        This is the main container.
        - max-w-[1240px] sets the maximum width as requested.
        - mx-auto centers it on the page.
        - flex, flex-col, and md:flex-row make it responsive: stacked on mobile, side-by-side on larger screens.
        - justify-between pushes the heading and button to opposite ends.
        - items-center vertically aligns them.
        - gap-8 adds space between them on mobile.
      */}
            <div className="max-w-[1240px] mx-auto flex flex-col justify-between gap-8">
                <motion.h1
                    // className="text-4xl lg:text-5xl font-bold text-center md:text-left stroke-gold text-transparent bg-clip-text bg-gradient-to-r from-[#D3A14C] to-[#F0E68C]"
                    className="md:ml-24 text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left"
                    style={{
                        color: "transparent",
                        WebkitTextStroke: "1px var(--color-gold)",
                        fontFamily: "poppins",
                    }}
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Seeking Help? Let's Talk
                </motion.h1>

                <motion.div
                    className="md:mr-24 md:self-end self-center"
                    variants={buttonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <button className="border-2 border-gold text-gold px-8 py-3 font-semibold transition-colors duration-300 hover:bg-gold hover:text-light-1">
                        Get in Touch with Our Expert
                    </button>
                </motion.div>
            </div>
        </section>);
}

export default SeekingHelp;