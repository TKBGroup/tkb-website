"use client";

import React from "react";
import FadeInOnScroll from "@/components/UI/FadeInOnScroll";
import HeroImage from "@/components/UI/HeroImage";
import ServicesHighlight from "@/components/features/services/ServicesHighlight";
import ServicesSection from "@/components/features/services/ServicesSection";
import CallToActionBlock from "@/components/UI/CallToActionBlock";
import HeroSplitted from "@/components/UI/HeroSplitted";

export default function OurServicesPage() {
    const ctaButtons = [
        { text: "Fill the Form", href: "/contact-form", variant: 'primary' },
        { text: "Contact Us", href: "/contact", variant: 'secondary' },
    ];
    return (
        <main className="w-full">

            <FadeInOnScroll>
                <HeroSplitted imageUrl="/images/services/team.png"/>
            </FadeInOnScroll> 

            <FadeInOnScroll>
                <ServicesHighlight />
            </FadeInOnScroll>

            <FadeInOnScroll>
                <ServicesSection />
            </FadeInOnScroll>

            <FadeInOnScroll>
                <CallToActionBlock
                    mediaType="image"
                    mediaSrc="/images/fireplace.jpg"
                    alt=""
                    title="Ready to Transform Your Space?"
                    description="Contact us today for a free consultation and discover how we can bring your vision to life with our expert craftsmanship and personalized service."
                />
            </FadeInOnScroll>
        </main>
    );
}
