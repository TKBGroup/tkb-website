"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, Variants } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { quotes } from "./lib/quotes";
import { useWindowSize } from "./lib/hooks/useWindowSize";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/component_styles/Testimonials.module.css";

const cards = [
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
    service: "Residential Woodwork",
  }, 
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
    service: "Residential Woodwork",
  }, 
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
    service: "Residential Woodwork",
  }, 
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
    service: "Residential Woodwork",
  }, 
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
    service: "Residential Woodwork",
  }, 
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
    service: "Residential Woodwork",
  }, 
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
    service: "Residential Woodwork",
  }, 
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
    service: "Residential Woodwork",
  }, 
];


type ReviewCardProps = {
  name: string;
  desc: string;
  index: number;
  service?: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
   

const ReviewCard: React.FC<ReviewCardProps> = ({ name, desc, index, service }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`bg-light h-auto  p-3 lg:p-6 rounded-lg shadow-lg max-w-md mx-0 my-10 md:my-23 flex flex-col justify-end xl:justify-between min-h-[200px] lg:min-h-[280px]`}
    >
      <Image
        src={index % 2 == 0 ? quotes[0].src : quotes[1].src}
        className={`${quotes[0].styles} absolute top-4 sm:top-4 md:top-13 right-4 sm:right-15 md:right-5`}
        alt="User"
        width={50}
        height={50}
      />
      
      <h3 className="text-lg font-bold">{service}</h3>
      <p className="text-xs xs:text-lg md:text-xs lg:text-base xl:text-lg mt-2 mb-6 xl:mb-0">
        {desc}
      </p>

      <div className="mt-4 flex flex-col items-end justify-end">
        <h3 className="text-xs sm:text-base lg:text-xs xl:text-base font-bold">{name}</h3>
        <div className="text-gold">★★★★★</div>
      </div>
    </motion.div>
  );
};

export default function Testimonials(): JSX.Element {

  const { width } = useWindowSize();
  const isMdScreen = width && width >= 768;
  const isLgScreen = width && width >= 1024;
  const isXxsScreen = width && width >= 360;

  return (
    <div className="w-full min-h-[450px] h-full flex flex-col px-10 bg-gray-3 bg-[url('/images/reviews-bg.png')] bg-cover bg-center py-20" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/reviews-bg.png)`}}>
      {/* <h2 className="text-3xl font-bold mb-8">Testimonials</h2> */}
      <div className="w-full flex flex-col md:flex-row max-w-[1420px] h-full min-h-[300px] mx-auto max-h-full justify-center gap-2 md:gap-8 xl:gap-0">
        <div className="md:min-w-30% xl:min-w-[35%] text-3xl xxs:text-5xl lg:text-5xl xl:text-6xl font-black text-darkgrey font-chivo flex-start my-5 md:my-25">
          <h3 className="text-light">
            Read <span className="text-gold">Reviews</span>,
          </h3>
          <h3 className="text-light">Build with</h3>
          <h3 className="text-gold">Confidence</h3>
        </div>
        <motion.div className="hidden md:flex relative h-auto w-18  md:w-32 aspect-square bg-light/60 rounded-full xl:mr-18  justify-center items-center hover:scale-110 transition-all cursor-pointer shadow-lg shadow-dark/10 my-auto">
          <GoArrowRight className="absolute h-auto w-8 " />
        </motion.div>
        {/* <span className={` ${isXxsScreen ? styles.swiperContainer : {}} w-full max-w-6xl h-full min-h-[450px] max-h-full`}>  */}
        <Swiper
          modules={[Autoplay]}
          pagination={{ clickable: false }}
          autoplay={{ delay: 3000 }}
          spaceBetween={isLgScreen ? 35 : 15} 
          slidesPerView={isLgScreen ? 2.3 : (isMdScreen  ? 1.3 : (isXxsScreen ? 1.2 : 1))}
          className={` ${isXxsScreen ? styles.swiperContainer : {}} w-full max-w-6xl h-full min-h-[450px] max-h-full`}
        >
          {cards.map((card, index) => (
            <SwiperSlide className="min-h-[450px]" key={index}>
              <ReviewCard name={card.name} desc={card.desc} index={index} service={card.service}/>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </span> */}
      </div>
    </div>
  );
}
