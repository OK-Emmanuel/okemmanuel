import StagesCarousel from "./StagesCarousel";

const STAGES = [
  {
    title: "The Builder",
    description:
      "How technology became one of my primary instruments for creating solutions.",
    color: "from-amber-950 to-amber-900",
  },
  {
    title: "The Strategist",
    description:
      "How engineering evolved into broader product, business and systems thinking.",
    color: "from-slate-950 to-slate-900",
  },
  {
    title: "The Developer",
    description:
      "How my focus expanded from building things to developing people.",
    color: "from-blue-950 to-blue-900",
  },
  {
    title: "The Catalyst",
    description:
      "How leadership, education, innovation and social impact became increasingly important.",
    color: "from-emerald-950 to-emerald-900",
  },
  {
    title: "The Evolving Man",
    description:
      "I am still becoming. This identity is not a final destination — it's where I am, on the way to where I'm going.",
    color: "from-purple-950 to-purple-900",
  },
];

export default function Stages() {
  return <StagesCarousel items={STAGES} autoPlayInterval={5000} />;
}
