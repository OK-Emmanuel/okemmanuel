"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INITIATIVES } from "@/lib/initiatives";
import Reveal, { RevealGroup, RevealItem } from "./motion/Reveal";
import ScrollBrighten from "./motion/ScrollBrighten";

export default function HomeInitiatives() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <section ref={sectionRef} id="initiatives" className="relative border-y border-line bg-surface py-28 md:py-36 overflow-hidden">
      {/* Background video with parallax */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        style={{ y }}
        className="absolute inset-0 h-full w-full object-cover opacity-5"
        aria-hidden="true"
      >
        <source src="/okemmanuel-video.mp4" type="video/mp4" />
      </motion.video>
      
      <div className="section-shell relative z-10">
        <div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                My Ecosystem
              </p>
              <ScrollBrighten as="h2" className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
                Ventures, communities and institutions
              </ScrollBrighten>
            </div>
            <Link
              href="/initiatives"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
            >
              Explore all initiatives
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>

        <RevealGroup className="mt-16 flex flex-col divide-y divide-line border-t border-line">
          {INITIATIVES.slice(0, 3).map((initiative, i) => (
            <RevealItem key={initiative.slug}>
              <Link
                href={initiative.href}
                target={initiative.href.startsWith("http") ? "_blank" : undefined}
                rel={initiative.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex flex-col gap-6 py-8 sm:flex-row sm:items-center ${
                  initiative.status === "soon" ? "pointer-events-none" : ""
                }`}
              >
                <span className="font-serif text-sm text-gold/50 sm:w-10 sm:shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-line bg-surface-raised sm:aspect-square sm:w-28">
                  {initiative.image ? (
                    <Image
                      src={initiative.image}
                      alt={initiative.name}
                      fill
                      sizes="112px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-surface-raised to-surface">
                      <span className="font-serif text-2xl text-gold/40">
                        {initiative.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <span
                    className={`text-[0.65rem] uppercase tracking-[0.2em] ${
                      initiative.category === "People"
                        ? "text-gold"
                        : "text-accent-blue"
                    }`}
                  >
                    {initiative.category}
                  </span>
                  <h3 className="mt-2 font-serif text-xl text-foreground transition-colors group-hover:text-gold-soft md:text-2xl">
                    {initiative.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {initiative.tagline}
                  </p>
                </div>

                <div className="sm:shrink-0">
                  {initiative.status === "soon" ? (
                    <span className="inline-flex w-fit items-center rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-wider text-muted">
                      Coming soon
                    </span>
                  ) : (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all group-hover:border-gold/50 group-hover:text-gold group-hover:translate-x-1">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </span>
                  )}
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
