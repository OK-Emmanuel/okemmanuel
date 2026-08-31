"use client";

import { motion } from "framer-motion";

const FLOW = [
  "Human Potential",
  "Thinking",
  "Technology",
  "Ventures",
  "Leadership",
  "Systems",
  "Impact",
];

const RADIUS = 40;
const CENTER = 50;
const ANGLE_STEP = 360 / FLOW.length;

// Round to avoid server/client floating-point mismatches (React hydration errors).
function round(n: number) {
  return Math.round(n * 1000) / 1000;
}

function pointAt(angleDeg: number, radius = RADIUS) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: round(CENTER + radius * Math.cos(rad)),
    y: round(CENTER + radius * Math.sin(rad)),
  };
}

export default function FlowOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {/* radial spokes connecting each expression to the core */}
        {FLOW.map((step, i) => {
          const angle = -90 + i * ANGLE_STEP;
          const { x, y } = pointAt(angle);
          return (
            <line
              key={`spoke-${step}`}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth={0.3}
              className="text-line"
            />
          );
        })}

        {/* static ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={0.3}
          className="text-line"
        />

        {/* animated flow ring, suggesting motion moving clockwise through the stages */}
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth={0.6}
          strokeLinecap="round"
          strokeDasharray="6 10"
          opacity={0.6}
          animate={{ strokeDashoffset: [0, -160] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* directional arrows between consecutive stages */}
        {FLOW.map((step, i) => {
          const midAngle = -90 + (i + 0.5) * ANGLE_STEP;
          const { x, y } = pointAt(midAngle);
          return (
            <text
              key={`arrow-${step}`}
              x={x}
              y={y}
              fontSize={4}
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${round(midAngle + 90)}, ${x}, ${y})`}
              className="fill-gold"
              opacity={0.7}
            >
              →
            </text>
          );
        })}
      </svg>

      {/* pulsing core representing the one person behind every expression */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-gold/40 bg-surface px-3 py-3 text-center shadow-[0_0_40px_-8px_var(--color-gold)]"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-serif text-xs leading-tight text-gold-soft sm:text-sm">
          O.K.
          <br />
          Emmanuel
        </span>
      </motion.div>

      {/* the expressions themselves, positioned around the core */}
      {FLOW.map((step, i) => {
        const angle = -90 + i * ANGLE_STEP;
        const { x, y } = pointAt(angle);
        return (
          <div
            key={step}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="whitespace-nowrap rounded-full border border-line bg-surface-raised px-3 py-1.5 text-[0.7rem] font-medium text-foreground shadow-sm sm:text-xs">
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}
