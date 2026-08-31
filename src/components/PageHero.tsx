"use client";

import { motion } from "framer-motion";
import AmbientBackground from "./AmbientBackground";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  variant?: "grid" | "orbit" | "beam";
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = "grid",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      <AmbientBackground variant={variant} />
      <motion.div
        className="section-shell relative"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p
          variants={item}
          className="font-sans text-sm uppercase tracking-[0.3em] text-gold"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>

  );
}
