import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import WorkAreas from "@/components/work/WorkAreas";
import WhyMe from "@/components/WhyMe";
import CaseStudies from "@/components/CaseStudies";
import Offers from "@/components/Offers";
import Speaking from "@/components/Speaking";
import HomeCta from "@/components/HomeCta";
import Footer from "@/components/Footer";

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
        <WorkAreas />
        <WhyMe />
        {/* <CaseStudies /> */}
        <Offers />
        <Speaking />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
