'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Card data - can be moved to a separate file
const cardsData = [
    {
        title: 'Custom Cabinetry',
        desc: 'Solid-wood and engineered custom cabinets for kitchens, bathrooms, and built-ins, tailored to your space and lifestyle.',
        img: 'images/hero-1.jpg',
        imgAlt: 'Luxury custom kitchen cabinetry by TKB Group',
        color: '#ffffff', // White card
    },
    {
        title: 'Architectural Millwork',
        desc: 'Durable and beautiful reception desks, retail fixtures, and wall panels that embody your brand’s standards.',
        img: 'images/millwork.jpg',
        imgAlt: 'Bespoke commercial architectural millwork',
        color: '#f3f4f6', // Light gray card
    },
    {
        title: 'Exhibition & Displays',
        desc: 'Modular and custom booths, demo stations, and showroom environments for trade fairs across Canada.',
        img: 'images/exhibit.jpg',
        imgAlt: 'Custom trade show exhibition booth',
        color: '#ffffff',
    },
    {
        title: 'Innovative Design',
        desc: 'Concept-to-detail support, from shop drawings to material selection, balancing look, function, and budget.',
        img: 'images/design.png',
        imgAlt: 'Designer reviewing architectural shop drawings',
        color: '#f3f4f6',
    },
    {
        title: 'National Installs',
        desc: 'Skilled install teams for residential and commercial projects, handling logistics and coordination nationwide.',
        img: 'images/install.jpg',
        imgAlt: 'Professional team installing commercial retail fixtures',
        color: '#ffffff',
    },
];

// Single Card Component
const SolutionCard = ({ card, index, progress, range, targetScale }) => {
    const scale = useTransform(progress, range, [targetScale, 1]);
    const y = useTransform(progress, range, [0, -50]); // Move card up slightly as it becomes active

    return (
        <motion.div
            style={{
                scale,
                y,
                backgroundColor: card.color,
                top: `calc(50% - 250px + ${index * 30}px)`, // Stagger the cards vertically
            }}
            className="sticky w-full max-w-full h-[500px] mx-auto rounded-2xl shadow-2xl p-8 flex flex-col justify-center"
        >
            <h3 className="mb-4 text-center text-3xl font-bold text-gray-900">{card.title}</h3>
            <p className="mb-6 text-center text-lg text-gray-600 max-w-lg mx-auto">{card.desc}</p>
            <div className="w-full h-56 mt-4 rounded-lg overflow-hidden shadow-inner">
                <img src={card.img} alt={card.imgAlt} className="w-full h-full object-cover" />
            </div>
        </motion.div>
    );
};

// Main Component
export default function OurSolutions() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <section className="py-20 sm:py-32">
            <div className="max-w-full mx-auto text-center mb-24">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Solutions</h2>
                <p className="mt-4 text-lg text-gray-600">Scroll to explore our integrated services</p>
            </div>

            <div ref={containerRef} className="relative h-[300vh]">
                {cardsData.map((card, i) => {
                    const targetScale = 1 - (cardsData.length - i) * 0.05;
                    const range = [i * (1 / cardsData.length), 1];

                    return (
                        <SolutionCard
                            key={`p_${i}`}
                            index={i}
                            card={card}
                            progress={scrollYProgress}
                            range={range}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}

