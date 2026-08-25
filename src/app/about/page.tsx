import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import AboutBio from "@/components/about/AboutBio";
import Stages from "@/components/about/Stages";
import EvolutionTimeline from "@/components/about/EvolutionTimeline";
import HomeCta from "@/components/HomeCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — O.K. Emmanuel",
  description:
    "Who I am beneath the job title: builder, strategist, developer of people, and catalyst — still evolving.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="About"
          title="I'm O.K. Emmanuel."
          variant="orbit"
        />
        <AboutBio />
        <Stages />
        <EvolutionTimeline />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
