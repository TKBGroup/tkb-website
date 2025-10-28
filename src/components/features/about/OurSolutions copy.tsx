// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, Variants } from "framer-motion";

// // Card data - can be moved to a separate file
// const cardsData = [
//   {
//     title: "Custom Cabinetry",
//     desc: "Solid-wood and engineered custom cabinets for kitchens, bathrooms, and built-ins, tailored to your space and lifestyle.",
//     img: "images/hero-1.jpg",
//     imgAlt: "Luxury custom kitchen cabinetry by TKB Group",
//     color: "#ffffff", // White card
//   },
//   {
//     title: "Architectural Millwork",
//     desc: "Durable and beautiful reception desks, retail fixtures, and wall panels that embody your brand’s standards.",
//     img: "images/millwork.jpg",
//     imgAlt: "Bespoke commercial architectural millwork",
//     color: "#f3f4f6", // Light gray card
//   },
//   {
//     title: "Exhibition & Displays",
//     desc: "Modular and custom booths, demo stations, and showroom environments for trade fairs across Canada.",
//     img: "images/exhibit.jpg",
//     imgAlt: "Custom trade show exhibition booth",
//     color: "#ffffff",
//   },
//   {
//     title: "Innovative Design",
//     desc: "Concept-to-detail support, from shop drawings to material selection, balancing look, function, and budget.",
//     img: "images/design.png",
//     imgAlt: "Designer reviewing architectural shop drawings",
//     color: "#f3f4f6",
//   },
//   {
//     title: "National Installs",
//     desc: "Skilled install teams for residential and commercial projects, handling logistics and coordination nationwide.",
//     img: "images/install.jpg",
//     imgAlt: "Professional team installing commercial retail fixtures",
//     color: "#000000ff",
//   },
// ];

// const cardVariants: Variants = {
//   hidden: { scale: 0.3, y: 30 },
//   visible: { scale: 1, y: 0, transition: { duration: 0.9 } },
// };

// const SolutionCard = ({ card, index, progress, range, targetScale }) => {
//   const scale = useTransform(progress, range, [targetScale, 0.75]);
//   const y = useTransform(progress, range, [0, -50]);

//   return (
//     <motion.div
//       style={{
//         scale,
//         y,
//         backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/${card.img})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         top: `calc(50% - 550px + ${index * 30}px)`,
//         marginTop: -120 + "px",
//       }}
//       className={`sticky w-full max-w-full h-[800px] mx-auto   shadow-2xl p-8 flex flex-col justify-center`}
//       variants={cardVariants}
//     >
//       <h3 className="mb-4 text-center text-3xl font-bold text-gray-900 text-white">
//         {card.title}
//       </h3>
//       <p className="mb-6 text-center text-lg text-gray-600 max-w-lg mx-auto text-white">
//         {card.desc}
//       </p>
//       <div className="w-full h-120 mt-4  overflow-hidden shadow-inner">
//         <img
//           src={card.img}
//           alt={card.imgAlt}
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </motion.div>
//   );
// };

// // Main Component
// export default function OurSolutions() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <section className="py-5 sm:py-32 max-w-full mx-auto bg-gray-300/60">
//       {/* <section className="py-5 sm:py-32 max-w-full mx-auto bg-[#111827]"> */}
//       <div className="max-w-full mx-auto text-center mb-15">
//         <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
//           Our Solutions
//         </h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Scroll to explore our integrated services
//         </p>
//       </div>

//       <div
//         ref={containerRef}
//         className="relative h-[315vh] max-w-[1420px] mx-auto"
//         // style={{ marginTop: -80 + "px" }}
//       >
//         {cardsData.map((card, i) => {
//           const targetScale = 1 - (cardsData.length - i) * 0.05;
//           const range = [i * (1 / cardsData.length), 1];

//           return (
//             <SolutionCard
//               key={`p_${i}`}
//               index={i}
//               card={card}
//               progress={scrollYProgress}
//               range={range}
//               targetScale={targetScale}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants, MotionValue } from "framer-motion";
import { cardsData } from "@/lib/SolutionCards";

type SolutionCardProps = {
    title: string; 
    desc: string;
    img: string;
    imgAlt: string;
};

const cardVariants: Variants = {
  hidden: { scale: 0.3, y: 30 },
  visible: { scale: 1, y: 0, transition: { duration: 0.9 } },
};

const SolutionCard: React.FC<({ card: SolutionCardProps, index: number, progress: MotionValue<number>, range: number[], targetScale: number })> = ({ card, index, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [targetScale, 0.75]);
  const y = useTransform(progress, range, [0, -50]);

  return (
    <motion.div
      style={{
        scale,
        y,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/${card.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="sticky top-0 w-full min-w-[265px] sm:min-w-[400px] h-[400px] mx-auto shadow-2xl flex items-center justify-center"
      variants={cardVariants}
    >
      <h3 className="text-3xl sm:text-4xl font-chivo font-bold text-light text-center px-4">
        {card.title}
      </h3>
    </motion.div>
  );
};

export default function OurSolutions() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <section className="p-5 sm:p-8 md:p-16 lg:p-24 max-w-full mx-auto bg-gray-50">
      <div className="max-w-full mx-auto text-center mb-15 sticky mt-4">
        <h2 className="text-3xl sm:text-5xl font-chivo font-bold tracking-tight">
          Our Solutions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-darkgrey">
          Scroll to explore our integrated services
        </p>
      </div>

      {/* Flex container: left static text, right scrolling cards */}
      <div className="max-w-[1420px] mx-auto grid grid-cols-3 md:grid-cols-12">
        {/* Left static text */}
        <div className=" md:col-span-5 col-span-3 md:sticky top-32 self-start mx-auto">
          <h3 className="text-2xl font-bold mb-4 font-chivo">Why TKB Group?</h3>
          <p className="text-sm sm:text-lg text-darkgrey sm:max-w-full w-full mb-4">
            We provide integrated solutions across cabinetry, millwork, design,
            exhibitions, and installations. Scroll to see our expertise in
            action.
          </p>
          <p className="text-sm sm:text-lg  sm:max-w-max text-darkgrey">
            Our team ensures seamless execution from concept to delivery,
            maintaining quality and consistency for every project. We provide
            integrated solutions across cabinetry, millwork, design,
            exhibitions, and installations. Scroll to see our expertise in
            action. Our team ensures seamless execution from concept to
            delivery, maintaining quality and consistency for every project.
          </p>
          <p className="text-sm sm:text-lg  sm:max-w-max text-darkgrey mb-4">
            We provide integrated solutions across cabinetry, millwork, design,
            exhibitions, and installations. Scroll to see our expertise in
            action.
          </p>
        </div>

        {/* Right scrolling cards */}
        <div
          className="flex flex-col md:w-full md:min-w-max  max-w-full  col-span-3 md:col-span-7 "
          ref={containerRef}
        >
          {cardsData.map((card, i) => {
            const targetScale = 1 - (cardsData.length - i) * 0.05;
            // const range = [i * (1 / cardsData.length), 1];
            const stepSize = 0.1; // Smaller than 0.2
            const range = [i * stepSize, 1];

            return (
              <SolutionCard
                key={i}
                index={i}
                card={card}
                progress={scrollYProgress}
                range={range}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const cardsData = [
//   { title: "Custom Cabinetry", img: "images/hero-1.jpg" },
//   { title: "Architectural Millwork", img: "images/millwork.jpg" },
//   { title: "Exhibition & Displays", img: "images/exhibit.jpg" },
//   { title: "Innovative Design", img: "images/design.png" },
//   { title: "National Installs", img: "images/install.jpg" },
// ];

// const SolutionCard = ({ card, progress, start, end }) => {
//   const y = useTransform(progress, [start, end], [300, 0]); // сдвиг снизу вверх
//   return (
//     <motion.div
//       style={{
//         y,
//         backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/${card.img})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//       className="w-full h-[400px] mb-10 shadow-2xl flex items-center justify-center text-white text-2xl font-bold"
//     >
//       {card.title}
//     </motion.div>
//   );
// };

// export default function OurSolutions() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"], // карта прокрутки
//   });

//   return (
//     <section className="py-20 max-w-full mx-auto bg-gray-100">
//       <div className="max-w-[1420px] mx-auto grid grid-cols-12 gap-8">
//         {/* Left static text */}
//         <div className="col-span-12 sm:col-span-4 sticky top-32 self-start">
//           <h2 className="text-4xl font-bold mb-4">Our Solutions</h2>
//           <p className="mb-4 text-gray-700">
//             We provide integrated solutions across cabinetry, millwork, design,
//             exhibitions, and installations. Scroll to see our expertise in
//             action.
//           </p>
//           <p className="text-gray-700">
//             Our team ensures seamless execution from concept to delivery,
//             maintaining quality and consistency for every project.
//           </p>
//         </div>

//         {/* Right scrolling cards */}
//         <div className="col-span-12 sm:col-span-8 relative" ref={containerRef}>
//           {cardsData.map((card, i) => {
//             const start = i * 0.1;
//             const end = start + 0.3;
//             return (
//               <SolutionCard
//                 key={i}
//                 card={card}
//                 progress={scrollYProgress}
//                 start={start}
//                 end={end}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
