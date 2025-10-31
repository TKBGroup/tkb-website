import FadeInOnScroll from "@/components/UI/FadeInOnScroll";
import Hero from "@/components/features/hero/Hero";
import TrustedBy from "@/components/features/about/TrustedBy";
import Solutions from "@/components/features/about/Solutions";
import Portfolio from "@/components/features/about/Portfolio";
import Numbers from "@/components/features/about/Numbers";
import Stats from "@/components/features/about/Stats";
import About from "@/components/features/about/About";
import OurSolutions from "@/components/features/about/OurSolutions";
import Testimonials from "@/components/features/about/Testimonials"; 
import CallToActionBlock from "@/components/UI/CallToActionBlock";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <section
        id="first-section"
        className="w-full bg-gray-100  items-center justify-center"
      >
        <Solutions />
      </section>

      <FadeInOnScroll>
        <TrustedBy />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Portfolio />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Numbers />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <About />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Stats />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Testimonials />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <OurSolutions />
      </FadeInOnScroll>


      <FadeInOnScroll>
        <CallToActionBlock />
      </FadeInOnScroll> 
    </main>
  );
}
