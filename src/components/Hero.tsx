"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AmbientBackground from "./AmbientBackground";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/olawuni-emmanuel-background.png"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/85 to-background" />
      </div>

      <AmbientBackground variant="orbit" />

      <motion.div
        className="section-shell relative w-full"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p
          variants={item}
          className="font-sans text-sm uppercase tracking-[0.3em] text-gold"
        >
          {/* O.K. Emmanuel */}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl font-serif text-4xl leading-[1.1]  tracking-tighter  text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          I build{" "}
          <span className="text-gold-soft">people, platforms and products</span>{" "}
          that expand opportunity and elevate livelihoods.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          I&apos;m a multidisciplinary builder, strategist and catalyst
          working at the intersection of technology, human capability,
          leadership and entrepreneurship.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <motion.a
            href="/work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold text-[white]"
          >
            Let&apos;s Work
          </motion.a>
          <motion.a
            href="/vision"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full border border-line px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-gold/60 hover:text-gold-soft"
          >
            Understand My Vision
          </motion.a>
        </motion.div>

        {/* <motion.div variants={item} className="mt-8">
          <a
            href="/thinking"
            className="text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
          >
            Read My Thinking →
          </a>
        </motion.div> */}

        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-muted/80 sm:text-sm"
        >
          <span>Software Engineer</span>
          <span className="text-gold">·</span>
          <span>Product Strategist</span>
          <span className="text-gold">·</span>
          <span>Educator &amp; Mentor</span>
          <span className="text-gold">·</span>
          <span>Founder</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
