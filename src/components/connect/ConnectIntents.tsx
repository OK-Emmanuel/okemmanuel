"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "../motion/Reveal";
import ConnectFormModal from "./ConnectFormModal";

const INTENTS = [
  {
    title: "Work with me",
    description: "For consulting, strategy, technology and product development.",
    formReason: "Work with me",
  },
  {
    title: "Invite me",
    description: "For speaking, workshops and panels.",
    formReason: "Invite me to speak",
  },
  {
    title: "Collaborate",
    description: "For ventures, initiatives, research or partnerships.",
    formReason: "Collaborate",
  },
  {
    title: "Learn from me",
    description: "For mentorship, education and development.",
    formReason: "Learn from me / mentorship",
  },
  {
    title: "Support an initiative",
    description: "For Tech Catalyst and future impact projects.",
    formReason: "Support an initiative",
  },
  {
    title: "Have a strategic conversation",
    description: "For people who simply believe there may be meaningful alignment.",
    formReason: "A strategic conversation",
  },
];

export default function ConnectIntents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<string | undefined>();

  const handleIntentClick = (intent: (typeof INTENTS)[0]) => {
    setSelectedIntent(intent.formReason);
    setIsModalOpen(true);
  };

  return (
    <>
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
                <motion.button
                  onClick={() => handleIntentClick(intent)}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group w-full text-left flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-gold/40 cursor-pointer"
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
                </motion.button>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ConnectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedReason={selectedIntent}
      />
    </>
  );
}
