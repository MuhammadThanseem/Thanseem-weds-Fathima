"use client";

import { motion } from "framer-motion";

export default function WelcomingArch() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-12 md:py-20"
    >
      {/* Welcoming Arch SVG - using decorative pattern */}
      <motion.svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        className="mb-8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* Outer arch */}
        <motion.path
          d="M 20 80 Q 60 20 100 80"
          stroke="var(--primary, #BFA789)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Inner arch */}
        <motion.path
          d="M 30 70 Q 60 35 90 70"
          stroke="var(--primary, #BFA789)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Decorative dots */}
        <motion.circle cx="40" cy="60" r="2" fill="var(--accent, #CBB78E)" />
        <motion.circle cx="60" cy="30" r="2" fill="var(--accent, #CBB78E)" />
        <motion.circle cx="80" cy="60" r="2" fill="var(--accent, #CBB78E)" />
      </motion.svg>

      {/* Welcoming text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <p className="text-sm md:text-base tracking-[4px] uppercase text-primary font-light">
          Welcome
        </p>
        <h2 className="font-heading text-2xl md:text-3xl mt-2 text-foreground">
          to Our Celebration
        </h2>
      </motion.div>
    </motion.div>
  );
}
