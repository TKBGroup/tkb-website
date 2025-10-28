"use client";

import React from "react"; 
import FadeInOnScroll from "@/components/UI/FadeInOnScroll";
import Mission from "@/components/features/about/Mission";
import HeroImage from "@/components/UI/HeroImage";
import Overview from "@/components/UI/Overview";
import OurStory from "@/components/features/about/OurStory";
import InfoBlockSection from "@/components/UI/InfoBlockSection";
import SeekingHelp from "@/components/features/CTA/SeekingHelp";

export default function AboutPage() {
  return (
    <main className="w-full">
      <FadeInOnScroll>
        <HeroImage src="/images/hero-1.jpg" alt="" title="About TKB Group" path="Home / About" />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Overview title="Where Vision and Craftsmanship Meet." description="For over 35 years, TKB Group has been the all-in-one partner for Canadian most discerning homeowners and businesses, turning ambitious ideas into tangible, masterfully-built realities." />
      </FadeInOnScroll>
      <FadeInOnScroll>

        <section
          id="second-section"
          className="w-full bg-gray-100  items-center justify-center"
        >
          <Mission />
        </section>
      </FadeInOnScroll>
          <FadeInOnScroll>
            <OurStory />
          </FadeInOnScroll>

         
          <FadeInOnScroll>
            <InfoBlockSection />
          </FadeInOnScroll> 
          
          <FadeInOnScroll>
            <SeekingHelp />
          </FadeInOnScroll>
    </main>
  );
}