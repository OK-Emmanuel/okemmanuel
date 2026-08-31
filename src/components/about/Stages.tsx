import StagesCarousel from "./StagesCarousel";

const STAGES = [
  {
    title: "The Builder",
    description:
      "It started with code, because code was the fastest way to turn an idea into something real. Every problem became a system waiting to be built — and building became the instinct I've never lost.",
    color: "from-amber-950 to-amber-900",
  },
  {
    title: "The Strategist",
    description:
      "Writing good software wasn't enough. The real questions were bigger — what should we build, for whom, and why. Engineering sharpened into strategy: seeing the business, the market and the system all at once.",
    color: "from-slate-950 to-slate-900",
  },
  {
    title: "The Developer",
    description:
      "The most durable thing I could build wasn't a product — it was a person. My focus shifted from writing systems to developing the people who'd go on to build their own.",
    color: "from-blue-950 to-blue-900",
  },
  {
    title: "The Catalyst",
    description:
      "One mentee becomes a movement. Leadership, education and innovation stopped being side interests and became the work itself — multiplying impact far beyond what I could do alone.",
    color: "from-emerald-950 to-emerald-900",
  },
  {
    title: "The Evolving Man",
    description:
      "None of this is a finished story. I'm still building, still learning, still becoming — and that's exactly the point. This is a man in motion, not a monument.",
    color: "from-purple-950 to-purple-900",
  },
];

export default function Stages() {
  return <StagesCarousel items={STAGES} autoPlayInterval={5000} />;
}
