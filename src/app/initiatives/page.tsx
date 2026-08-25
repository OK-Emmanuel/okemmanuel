import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Ventures from "@/components/Ventures";
import EcosystemStatement from "@/components/initiatives/EcosystemStatement";
import TechCatalystDetail from "@/components/initiatives/TechCatalystDetail";
import HomeCta from "@/components/HomeCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Initiatives — O.K. Emmanuel",
  description:
    "Ventures and initiatives beyond client work — Techifice, Tech Catalyst, and what's next.",
};

export default function InitiativesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Initiatives"
          title="Building beyond client work."
          variant="orbit"
        />
        <EcosystemStatement />
        <Ventures />
        <div id="tech-catalyst">
          <TechCatalystDetail />
        </div>
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
