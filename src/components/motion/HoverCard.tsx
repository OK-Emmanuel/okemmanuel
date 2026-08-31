"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HoverCardProps = {
  children: ReactNode;
  className?: string;
};

export default function HoverCard({ children, className }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
