import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import WhyMe from "@/components/WhyMe";
import Offers from "@/components/Offers";
import Speaking from "@/components/Speaking";
import HomeCta from "@/components/HomeCta";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
import CaseStudyPreview from "@/components/CaseStudyPreview";

export const metadata: Metadata = {
  title: "Work — O.K. Emmanuel",
  description:
    "Technology, strategy, advisory and speaking — the work I do, the case studies behind it, and how to engage me.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Work"
          title="What I currently build, lead and advise on."
          variant="grid"
        />
        <WhyMe />
        <CaseStudies />
        <CaseStudyPreview />
        <Offers />
        <Speaking />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
