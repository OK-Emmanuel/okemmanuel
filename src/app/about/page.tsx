import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import AboutBio from "@/components/about/AboutBio";
import Stages from "@/components/about/Stages";
import EvolutionTimeline from "@/components/about/EvolutionTimeline";
import WorkAreas from "@/components/work/WorkAreas";
import MasonryGallery from "@/components/ui/MasonryGallery";
import HomeCta from "@/components/HomeCta";
import Footer from "@/components/Footer";
import { client } from "@/sanity/client";
import { GALLERY_QUERY } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "About — O.K. Emmanuel",
  description:
    "Who I am beneath the job title: builder, strategist, developer of people, and catalyst — still evolving.",
};

export default async function AboutPage() {
  const galleryImages = await client.fetch(GALLERY_QUERY, {}, { next: { revalidate: 60 } }).catch(() => []);

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
        <MasonryGallery images={galleryImages} />
        <WorkAreas />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
