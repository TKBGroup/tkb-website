"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import FadeInOnScroll from "@/components/UI/FadeInOnScroll";
import Stats from "@/components/features/about/Stats";
import HeroImage from "@/components/UI/HeroImage";
import Overview from "@/components/UI/Overview";

export default function AboutPage() {
  return (
    <main className="w-full">
      <FadeInOnScroll>
        <HeroImage src="url('/images/hero-1.jpg')" alt="" title="About TKB Group" path="Home / About" />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Overview title="Where Vision and Craftsmanship Meet." description="For over 35 years, TKB Group has been the all-in-one partner for Canadian most discerning homeowners and businesses, turning ambitious ideas into tangible, masterfully-built realities." />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Stats />
      </FadeInOnScroll>
    </main>
  );
}