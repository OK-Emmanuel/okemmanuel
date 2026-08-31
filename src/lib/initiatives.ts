export type Initiative = {
  slug: string;
  name: string;
  category: "People" | "Enterprise";
  tagline: string;
  description: string;
  href: string;
  status: "live" | "soon";
};

export const INITIATIVES: Initiative[] = [
  {
    slug: "techifice",
    name: "Techifice",
    category: "Enterprise",
    tagline: "Turn product ambition into reliable technology.",
    description:
      "A product engineering company helping technology businesses close the gap between engineering capacity and business roadmap — combining product thinking, technical strategy and execution excellence.",
    href: "https://techifice.com",
    status: "live",
  },
  {
    slug: "tech-catalyst",
    name: "Tech-Catalyst Initiative",
    category: "People",
    tagline: "Beyond survival. Building future builders.",
    description:
      "A people-development and social-impact initiative helping young people develop the mindset, capabilities and exposure required to become problem-solvers, innovators and responsible leaders.",
    href: "/initiatives#tech-catalyst",
    status: "live",
  },
  {
    slug: "yourstore",
    name: "YourStore.NG",
    category: "Enterprise",
    tagline: "Your business deserves a store.",
    description:
      "An e-commerce technology platform helping Nigerian entrepreneurs move from social selling on WhatsApp and Instagram to structured, professional online commerce.",
    href: "#",
    status: "soon",
  },
  {
    slug: "dominus-institute",
    name: "Dominus Institute",
    category: "People",
    tagline: "Developing people for influence, enterprise, leadership and purpose.",
    description:
      "An institution for structured studies in business, leadership and faith — developing people intellectually, professionally, strategically and spiritually.",
    href: "#",
    status: "soon",
  },
  {
    slug: "mentorship",
    name: "O.K. Emmanuel Mentorship",
    category: "People",
    tagline: "Guidance for people building their future.",
    description:
      "A personal mentorship platform providing guidance, perspective, accountability and practical support to emerging professionals, entrepreneurs and young leaders.",
    href: "/connect",
    status: "live",
  },
  {
    slug: "wealth-lab",
    name: "The Wealth Lab",
    category: "Enterprise",
    tagline: "Where wealth builders think, build and execute.",
    description:
      "A private community and strategic execution platform for founders and serious builders committed to understanding and creating sustainable wealth.",
    href: "#",
    status: "soon",
  },
];
