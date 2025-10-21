"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants, MotionValue } from "framer-motion"; 
import { cardsData } from "@/components/lib/SolutionCards";

// --- Types ---

type SolutionCardProps = {
    title: string;
    desc: string;
    img: string;
    imgAlt: string;
};

// --- Components ---

// SolutionCard now needs the scroll progress, index, and number of cards
const SolutionCard: React.FC<{
    card: SolutionCardProps;
    index: number;
    scrollYProgress: MotionValue<number>;
    numCards: number;
}> = ({ card, index, scrollYProgress, numCards }) => {
    // 1. Define the input range for this specific card
    // Each card is visible for a segment of the total scroll (0 to 1).
    const start = index / numCards;
    // We want the card to hold for a moment, so the end is slightly past its segment.
    const end = (index + 1) / numCards;

    // 2. Define the output range for the opacity and translateY
    // Opacity: Fade in quickly, stay at 1, then fade out.
    // The range values should correspond to the input range (start, end).
    const opacityRange = [start, start + 0.02, end - 0.05, end];
    const opacityOutput = [0, 1, 1, 0];

    // The scale and y transforms from the original prompt are not used,
    // but opacity and vertical position are needed for a smooth transition.
    const opacity = useTransform(scrollYProgress, opacityRange, opacityOutput);
    
    // Y position: Start slightly below, move to 0, then move up (off-screen)
    const yRange = [start, start + 0.05, end];
    const yOutput = [50, 0, -50]; 
    const y = useTransform(scrollYProgress, yRange, yOutput);

    return (
        <motion.div
            style={{
                opacity,
                y, // Animate y position for a slide effect
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/${card.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            // Absolute positioning within the sticky container
            className="absolute top-0 left-0 w-full h-screen shadow-2xl flex items-center justify-center"
        >
            <h3 className="text-3xl sm:text-4xl font-chivo font-bold text-white text-center px-4">
                {card.title}
            </h3>
        </motion.div>
    );
};

// Component for the Dynamic Left-Side Content
const DynamicDescription: React.FC<{ card: SolutionCardProps }> = ({ card }) => {
    // Variants for the description text animation
    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            key={card.title} // Key ensures re-render and animation on card change
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
            className="md:sticky top-32 self-start mx-auto p-4 sm:p-0 w-full max-w-lg"
        >
            <h3 className="text-2xl font-bold mb-4 font-chivo text-light">
                {card.title}
            </h3>
            <p className="text-sm sm:text-lg text-gray-4 w-full mb-4">
                {card.desc}
            </p>
        </motion.div>
    );
};


export default function OurSolutions() {
    const containerRef = useRef<HTMLDivElement>(null);
    const numCards = cardsData.length;

    // scrollYProgress now tracks the scroll of the entire document
    // We use a custom offset to only track scroll while this component is visible.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Start tracking when the container starts and the viewport ends
        // Stop tracking when the container ends and the viewport ends
        offset: ["start end", "end end"],
    });

    // --- Active Card Tracking ---
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Map the 0-1 progress to an index
            // We use (latest * numCards) and adjust for the hold/transition effect
            const newIndex = Math.floor(latest * numCards);
            setActiveIndex(Math.min(newIndex, numCards - 1)); // Ensure index is not out of bounds
        });
        return () => unsubscribe();
    }, [scrollYProgress, numCards]);

    const activeCard = cardsData[activeIndex];

    // --- Height calculation for scroll effect ---
    // The right-side content needs a height that forces the page to scroll
    // for the entire duration of the animation (e.g., 100vh per card).
    // The container height is set to create enough scroll space for all cards.
    const scrollHeight = `${numCards * 100}vh`;

    return (
        // The main section is a standard block element
        <section className="max-w-full mx-auto bg-darkblue pt-16">
        {/* <section className="max-w-full mx-auto bg-gray-4/30 pt-16"> */}
            <div className="max-w-full mx-auto text-center mb-10 sticky top-0">
                <h2 className="text-3xl sm:text-5xl font-chivo font-bold tracking-tight text-light">
                    Our Solutions
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-4">
                    Scroll to explore our integrated services
                </p>
            </div>

            {/* Main Grid Container */}
            <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3">

                {/* Left Dynamic Text Container - STICKY and centered in its column */}
                <div className="md:col-span-1 col-span-1 flex justify-center items-start pt-16 md:pr-4 md:sticky md:top-0 h-screen">
                    <DynamicDescription card={activeCard} />
                </div>

                {/* Right Scrolling Cards Container - This container defines the scroll space */}
                <div
                    // Set the height to be N times the viewport height to create the scroll space
                    style={{ height: scrollHeight }}
                    className="md:col-span-2 col-span-1 relative" // relative is needed for absolute children
                    ref={containerRef}
                >
                    {/* Sticky Wrapper for the cards - This is the viewport for the animation */}
                    <div className="sticky top-0 h-screen w-full overflow-hidden">
                        {cardsData.map((card, i) => (
                            <SolutionCard
                                key={i}
                                card={card}
                                index={i}
                                scrollYProgress={scrollYProgress}
                                numCards={numCards}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}