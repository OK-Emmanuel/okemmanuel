"use client";

import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "../motion/Reveal";

const INTENTS = [
  {
    title: "Work with me",
    description: "For consulting, strategy, technology and product engagements.",
  },
  {
    title: "Invite me",
    description: "For speaking, workshops and panels.",
  },
  {
    title: "Collaborate",
    description: "For ventures, initiatives, research or partnerships.",
  },
  {
    title: "Learn from me",
    description: "For mentorship, education and development.",
  },
  {
    title: "Support an initiative",
    description: "For Tech Catalyst and future impact projects.",
  },
  {
    title: "Have a strategic conversation",
    description: "For people who simply believe there may be meaningful alignment.",
  },
];

export default function ConnectIntents() {
  return (
    <section className="relative py-4 md:py-8">
      <div className="section-shell">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-gold">
            You want to...
          </p>
        </Reveal>
        <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INTENTS.map((intent) => (
            <RevealItem key={intent.title}>
              <motion.a
                href="#form"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-gold/40"
              >
              <div>
                <h3 className="font-serif text-xl text-foreground">
                  {intent.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {intent.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors group-hover:text-gold-soft">
                Start here
                <span aria-hidden>→</span>
              </span>
              </motion.a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
