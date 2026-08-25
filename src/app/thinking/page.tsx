import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import ThinkingLibrary from "@/components/thinking/ThinkingLibrary";
import HomeCta from "@/components/HomeCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thinking — O.K. Emmanuel",
  description:
    "Essays, frameworks, theories and notes — the intellectual library behind the work.",
};

export default function ThinkingPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Thinking"
          title="Ideas, frameworks and the questions behind the work."
          subtitle="I don't publish content merely because I know something. I publish because it reveals how I think."
          variant="grid"
        />
        <ThinkingLibrary />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
