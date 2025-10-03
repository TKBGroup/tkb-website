"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, Variants } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { quotes } from "./lib/quotes";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
  },
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
  },
  {
    name: "Mary De Pompa",
    desc: "We had a very positive experience with designing, manufacturing and installation of our kitchen nstallation of our kitchen...",
  },
];

type ReviewCardProps = {
  name: string;
  desc: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ReviewCard: React.FC<ReviewCardProps> = ({ name, desc }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-light h-auto  p-6 rounded-lg shadow-lg max-w-md mx-auto flex flex-col justify-end xl:justify-between m-12 min-h-[260px] "
    >
      <Image
        src={quotes[0].src}
        className={`${quotes[0].styles}  mb-4 absolute top-6 right-6`}
        alt="User"
        width={50}
        height={50}
      />
      <p className="md:text-xs lg:text-xs xl:text-lg mt-2 mb-6 xl:mb-0">
        {desc}
      </p>

      <div className="mt-4 flex flex-col items-end justify-end">
        <h3 className="lg:text-xs xl:text-base font-bold">{name}</h3>
        <div className="text-gold">★★★★★</div>
      </div>
    </motion.div>
  );
};

export default function Testimonials(): JSX.Element {
  return (
    <div className="w-full min-h-[300px] h-full flex flex-col px-10  bg-gray-3">
      {/* <h2 className="text-3xl font-bold mb-8">Testimonials</h2> */}
      <div className="w-full flex max-w-[1420px] h-full min-h-[300px]  max-h-full justify-center gap-8 xl:gap-0">
        <div className="lg:min-w-30% xl:min-w-[35%] lg:text-5xl xl:text-6xl font-black text-darkgrey font-chivo flex-start">
          <h3>
            Read <span className="text-gold">Reviews</span>,
          </h3>
          <h3>Build with</h3>
          <h3 className="text-gold">Confidence</h3>
        </div>
        <motion.div className="relative h-auto w-32 aspect-square bg-light/60 rounded-full xl:mr-18 flex justify-center items-center hover:scale-110 transition-all cursor-pointer shadow-lg shadow-dark/10 my-auto">
          <GoArrowRight className="absolute h-auto w-8 " />
        </motion.div>
        <Swiper
          modules={[Autoplay]}
          pagination={{ clickable: false }}
          autoplay={{ delay: 3000 }}
          spaceBetween={40}
          slidesPerView={2.3}
          className="w-full max-w-6xl h-full min-h-[300px] max-h-full"
        >
          {cards.map((card, index) => (
            <SwiperSlide className="min-h-[300px]" key={index}>
              <ReviewCard name={card.name} desc={card.desc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
