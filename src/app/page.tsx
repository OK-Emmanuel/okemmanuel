import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Offers from "@/components/Offers";
import WhyMe from "@/components/WhyMe";
import CaseStudies from "@/components/CaseStudies";
import Philosophy from "@/components/Philosophy";
import Speaking from "@/components/Speaking";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <Offers />
        <WhyMe />
        <CaseStudies />
        <Philosophy />
        <Speaking />
        <About />
        <Ventures />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
