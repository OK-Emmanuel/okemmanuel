import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import EcosystemStatement from "@/components/initiatives/EcosystemStatement";
import EcosystemMap from "@/components/initiatives/EcosystemMap";
import InitiativesGrid from "@/components/initiatives/InitiativesGrid";
import TechCatalystDetail from "@/components/initiatives/TechCatalystDetail";
import HomeCta from "@/components/HomeCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Initiatives — O.K. Emmanuel",
  description:
    "The O.K. Emmanuel ecosystem — Techifice, Tech-Catalyst, YourStore.NG, Dominus Institute, Mentorship and The Wealth Lab.",
};

export default function InitiativesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Initiatives"
          title="Building beyond client work."
          subtitle="A growing ecosystem of ventures and institutions built around one conviction: people and organizations become significantly more capable when equipped with the right knowledge, technology, leadership and opportunity."
          variant="orbit"
        />
        <EcosystemStatement />
        <InitiativesGrid />
        <EcosystemMap />
        <div id="tech-catalyst">
          <TechCatalystDetail />
        </div>
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
