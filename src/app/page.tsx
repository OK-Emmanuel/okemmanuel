import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OnePersonManyExpressions from "@/components/OnePersonManyExpressions";
import Domains from "@/components/Domains";
import HomeInitiatives from "@/components/HomeInitiatives";
// import CaseStudyPreview from "@/components/CaseStudyPreview";
import HomeCta from "@/components/HomeCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <OnePersonManyExpressions />
        <Domains />
        {/* <CurrentWork /> */}
        <HomeInitiatives />
        {/* <CaseStudyPreview /> */}
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
