"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AmbientBackgroundProps = {
  variant?: "grid" | "orbit" | "beam";
  className?: string;
};

export default function AmbientBackground({
  variant = "grid",
  className = "",
}: AmbientBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yGold = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yBlue = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y: yGold }}
        className="absolute -top-40 left-1/2 h-144 w-xl -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <motion.div
        style={{ y: yBlue }}
        className="absolute top-1/3 -right-32 h-104 w-104 rounded-full bg-accent-blue/10 blur-[110px]"
      />

      {variant === "grid" && (
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]">
          <defs>
            <pattern
              id="grid-pattern"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 56 0 L 0 0 0 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      )}

      {variant === "orbit" && (
        <svg
          className="absolute left-1/2 top-1/2 h-168 w-2xl -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
          viewBox="0 0 400 400"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="200"
            r="130"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="200"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      )}

      {variant === "beam" && (
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />
      )}
    </div>
  );
}
