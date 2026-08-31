"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollBrightenProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "p" | "span";
};

/** Brightens and un-blurs content as it scrolls into view, used across vision sections. */
export default function ScrollBrighten({
  children,
  className,
  as = "div",
}: ScrollBrightenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 55%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [6, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  const props = {
    ref,
    style: { opacity, filter, y },
    className,
  };

  if (as === "p") {
    return <motion.p {...props}>{children}</motion.p>;
  }
  if (as === "span") {
    return <motion.span {...props}>{children}</motion.span>;
  }

  return <motion.div {...props}>{children}</motion.div>;
}
