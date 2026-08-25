import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import PurposeVisionMission from "@/components/vision/PurposeVisionMission";
import Beliefs from "@/components/vision/Beliefs";
import Philosophy from "@/components/Philosophy";
import Faith from "@/components/vision/Faith";
import Questions from "@/components/vision/Questions";
import LongTermVision from "@/components/vision/LongTermVision";
import HomeCta from "@/components/HomeCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vision — O.K. Emmanuel",
  description:
    "My purpose, vision, mission, beliefs, philosophy and the questions I'm still exploring.",
};

export default function VisionPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Vision"
          title="What I believe, and where I'm going."
          variant="beam"
        />
        <PurposeVisionMission />
        <Beliefs />
        <Philosophy />
        <Faith />
        <Questions />
        <LongTermVision />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
