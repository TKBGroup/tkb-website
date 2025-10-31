"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const MagneticButton = ({ children, className, ...props }: any) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
            e.currentTarget.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.1;
        const y = (clientY - (top + height / 2)) * 0.1;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default MagneticButton; 