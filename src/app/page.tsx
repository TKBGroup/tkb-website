import FadeInOnScroll from "@/components/FadeInOnScroll";
import Hero from "@/components/UI/Hero";
import TrustedBy from "@/components/UI/TrustedBy";
import Solutions from "@/components/UI/Solutions";
import Portfolio from "@/components/UI/Portfolio";
import Numbers from "@/components/UI/Numbers";
import Stats from "@/components/UI/Stats";
import About from "@/components/UI/About";
import OurSolutions from "@/components/UI/OurSolutions";
import Testimonials from "@/components/UI/Testimonials";
import FooterCTA from "@/components/UI/FooterCTA";

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
        <FooterCTA />
      </FadeInOnScroll>
{/*  
      <FadeInOnScroll>
        <Slides />
      </FadeInOnScroll> */}
    </main>
  );
}
