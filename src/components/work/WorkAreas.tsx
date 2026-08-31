"use client";

import { motion } from "framer-motion";
import { Settings, Target, Lightbulb, Mic } from "lucide-react";
import HoverCard from "../motion/HoverCard";

const AREAS = [
  {
    title: "Technology",
    description:
      "Building systems that work. From software architecture to AI-powered solutions, I create technology that solves real problems and scales with purpose.",
    items: ["Software engineering", "Product development", "AI systems", "Architecture & digital infrastructure"],
    icon: Settings,
  },
  {
    title: "Strategy",
    description:
      "Connecting dots between possibility and execution. I help organizations and founders think clearly about technology, positioning, and competitive advantage.",
    items: ["Product strategy", "Business systems", "Digital transformation", "AI adoption & venture strategy"],
    icon: Target,
  },
  {
    title: "Advisory",
    description:
      "Strategic counsel for organizations, founders, and leaders navigating complex decisions around technology, innovation, and organizational transformation.",
    items: [
      "For organizations, founders and leaders requiring strategic thinking on technology and product decisions.",
    ],
    icon: Lightbulb,
  },
  {
    title: "Speaking",
    description:
      "Insights on what matters: technology's role in human progress, leadership in an AI-driven era, and building meaningful solutions.",
    items: [
      "Technology & innovation",
      "AI & the future of work",
      "Leadership & human potential",
      "Building in Africa",
    ],
    icon: Mic,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WorkAreas() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-shell">
        {/* Header section */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              How I Create Value
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              I work across technology, strategy, and leadership. Whether building
              systems, advising on critical decisions, or speaking to transform
              thinking—my focus is always on creating clarity, driving impact, and
              building for the future.
            </p>
          </motion.div>
        </div>

        {/* Areas grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {AREAS.map((area) => (
            <motion.div key={area.title} variants={itemVariants}>
              <HoverCard className="group h-full rounded-2xl border border-line bg-surface-raised p-8 transition-all hover:border-gold/50">
                {/* Icon and title */}
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground">
                      {area.title}
                    </h3>
                  </div>
                  <area.icon
                    className="h-7 w-7 shrink-0 text-gold/60 transition-colors group-hover:text-gold"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-muted">
                  {area.description}
                </p>

                {/* Divider */}
                <div className="mb-6 h-px bg-linear-to-r from-line to-transparent" />

                {/* Items list */}
                <ul className="flex flex-col gap-3">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-muted transition-colors group-hover:text-foreground"
                    >
                      <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-gold/60 group-hover:bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
