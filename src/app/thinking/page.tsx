import type { Metadata } from "next";
import Nav from "@/components/Nav";
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
        <section className="relative border-b border-line bg-surface pt-32 pb-16 md:pt-48 md:pb-24">
          <div className="section-shell">
            <h1 className="max-w-4xl font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Thinking &amp; Notes
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
              Essays, frameworks, and observations on building systems, leading people, and shaping society.
            </p>
          </div>
        </section>
        <ThinkingLibrary />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
