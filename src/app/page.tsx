import FadeInOnScroll from "@/components/FadeInOnScroll";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Solutions from "@/components/Solutions";
import Portfolio from "@/components/Portfolio";
import Numbers from "@/components/Numbers";
import Stats from "@/components/Stats";
import About from "@/components/About";
import OurSolutions from "@/components/OurSolutions";

export default function HomePage() {
  return (
    <main className="w-full py-48 pt-14">
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
        <OurSolutions />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <></>
      </FadeInOnScroll>
    </main>
  );
}
