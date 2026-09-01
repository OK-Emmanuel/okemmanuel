import StagesCarousel from "./StagesCarousel";

const STAGES = [
  {
    title: "The Builder",
    description:
      "It started with a fascination for creating things. Technology became one of my most powerful instruments for turning ideas and problems into practical solutions. From software to digital products and systems, building taught me to think in terms of possibility, structure and execution.",
    color: "from-amber-950 to-amber-900",
  },
  {
    title: "The Strategist",
    description:
      "Building taught me that good technology is rarely the whole answer. I became interested in the problems behind the problems — how products create value, how businesses grow, how systems work, and how strategy determines what is worth building.",
    color: "from-slate-950 to-slate-900",
  },
  {
    title: "The Developer",
    description:
      "Eventually, I realized that the most valuable things I could build weren't always software. People are also systems with extraordinary potential. My work expanded into teaching, mentorship and leadership development.",
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
