export type Initiative = {
  slug: string;
  name: string;
  category: "People" | "Enterprise";
  tagline: string;
  description: string;
  highlights: string[];
  href: string;
  status: "live" | "soon";
  image?: string;
};

export const INITIATIVES: Initiative[] = [
  {
    slug: "tech-catalyst",
    name: "Tech-Catalyst Initiative",
    category: "People",
    tagline: "Beyond survival. Building future builders.",
    description:
      "Most young people are taught to compete for jobs that are disappearing. Tech-Catalyst exists to do something different — equip them to build, solve and lead in a world being reshaped by technology. This is where mindset meets capability: turning potential into problem-solvers, innovators and leaders who can compete anywhere in the world.",
    highlights: ["Leadership & mindset", "Innovation & problem solving", "AI-enabled productivity", "Global competitiveness"],
    href: "https://catalyst.okemmanuel.tech",
    status: "live",
    image: "/olawuni-emmanuel-background.png",
  },
  {
    slug: "techifice",
    name: "Techifice",
    category: "Enterprise",
    tagline: "Turn product ambition into reliable technology.",
    description:
      "Every ambitious product idea eventually meets the same wall: the gap between what the business wants and what engineering can reliably ship. Techifice closes that gap — pairing product thinking with technical execution so founders and teams stop losing momentum to bad architecture, missed roadmaps and fragile systems, and start shipping technology that actually holds up.",
    highlights: ["Think: discovery & architecture", "Build: product engineering & AI", "Scale: continuous partnership"],
    href: "https://techifice.com",
    status: "live",
    image: "/techifice-cover.webp",
  },
  {
    slug: "wealth-lab",
    name: "The Wealth Lab",
    category: "Enterprise",
    tagline: "Where wealth builders think, build and execute.",
    description:
      "Information about wealth is everywhere; disciplined execution is rare. The Wealth Lab is a private room for founders and serious builders who are done consuming content and ready to build — sharpening the thinking, strategy and systems that turn ambition into sustainable, compounding wealth.",
    highlights: ["Wealth creation & economic thinking", "Business strategy & positioning", "Technology & AI leverage", "Personal performance"],
    href: "https://wealthlab.techifice.com",
    status: "live",
    image: "/wealthlab-cover.jpg"
  },
  {
    slug: "yourstore",
    name: "YourStore.NG",
    category: "Enterprise",
    tagline: "Your business deserves a store.",
    description:
      "Thousands of Nigerian entrepreneurs are running real businesses through WhatsApp chats and Instagram DMs — powerful for reach, fragile for growth. YourStore.NG gives them what they've been missing: a professional storefront, local payments and order management built for how Nigerian commerce actually happens, so selling stops depending on screenshots and starts scaling.",
    highlights: ["Instant storefronts", "Local payments", "WhatsApp commerce", "Order & delivery management"],
    href: "https://yourstore.ng",
    status: "soon",
    image: "/yourstore-cover.png",
  },
  {
    slug: "mentorship",
    name: "O.K. Emmanuel Mentorship",
    category: "People",
    tagline: "Guidance for people building their future.",
    description:
      "Talent without direction stalls. This mentorship gives emerging professionals, entrepreneurs and young leaders what most never get access to — an honest sounding board, hard-won perspective and the accountability to actually act on it, so the right decisions get made sooner and with more confidence.",
    highlights: ["Identity & self-discovery", "Career & entrepreneurship", "Decision-making", "Long-term vision"],
    href: "/connect",
    status: "live",
    image: "/okemmanuel-mentorship.jpg",
  },
  {
    slug: "dominus-institute",
    name: "Dominus Institute",
    category: "People",
    tagline: "Developing people for influence, enterprise, leadership and purpose.",
    description:
      "Business skill without character, and leadership without conviction, rarely last. Dominus Institute is being built to form people fully — intellectually, professionally, strategically and spiritually — so that influence, enterprise and leadership are matched by depth and purpose.",
    highlights: ["Business & entrepreneurship", "Leadership & management", "Faith & Christian thought", "Purpose & calling"],
    href: "#",
    status: "soon",
    image: "/coming-soon.jpg",
  },
];
