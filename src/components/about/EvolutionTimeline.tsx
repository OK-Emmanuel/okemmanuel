"use client";

import { motion } from "framer-motion";
import Reveal from "../motion/Reveal";

const STAGES = [
  {
    title: "Design",
    description:
      "It started with visual communication — learning to see how an idea could be shaped before it was ever built.",
  },
  {
    title: "Engineering",
    description:
      "That eye for design pulled me into code. I taught myself to build the systems behind the interfaces I once only designed.",
  },
  {
    title: "Strategy",
    description:
      "As the products got bigger, the questions changed. It stopped being about how to build, and started being about what to build, and why.",
  },
  {
    title: "Leadership",
    description:
      "Building things well eventually meant leading people well. I started carrying responsibility for outcomes beyond my own work.",
  },
  {
    title: "Human Development",
    description:
      "I realized the biggest lever wasn't another feature — it was the people around me. So I turned toward mentorship and education.",
  },
  {
    title: "Venture Building",
    description:
      "Individual projects gave way to institutions — companies and platforms built to outlast any single contract.",
  },
  {
    title: "Catalysis",
    description:
      "Now the work is less about what I build myself, and more about the systems that let other people build.",
  },
];

const rowVariants = {
  hidden: (isRight: boolean) => ({ opacity: 0, x: isRight ? 24 : -24 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function EvolutionTimeline() {
  return (
    <section className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <h2 className="max-w-2xl mx-auto text-center font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            From making things to building ecosystems.
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-center text-muted">
            I picked up my career in computing and technology in 2015, and
            have been building products, systems and businesses ever since.
            Over the years, I have evolved from a maker of things to a
            builder of systems that enable other people to make things.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-line md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-12 md:gap-4">
            {STAGES.map((stage, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={stage.title}
                  custom={isRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={rowVariants}
                  className="relative flex gap-6 md:grid md:grid-cols-2 md:items-center md:gap-10"
                >
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-surface font-serif text-sm text-gold md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    {i + 1}
                  </div>
                  <div
                    className={
                      isRight
                        ? "md:col-start-2 md:pl-14 md:text-left"
                        : "md:col-start-1 md:pr-14 md:text-right"
                    }
                  >
                    <h3 className="font-serif text-xl text-foreground md:text-2xl">
                      {stage.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted md:ml-auto md:mr-0">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
