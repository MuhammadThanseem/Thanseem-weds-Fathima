"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  dark?: boolean;
}

export default function SectionHeader({ label, title, dark = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-10 sm:mb-12 md:mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`tracking-[6px] uppercase text-xs font-light ${dark ? "text-beige" : "text-primary"}`}
        style={dark ? { color: "var(--beige)" } : undefined}
      >
        {label}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-5 px-2 sm:px-0 ${dark ? "text-beige-light" : "text-foreground"}`}
        style={dark ? { color: "var(--beige-light)" } : undefined}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "80px", opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className="decorative-line shimmer-line h-px mx-auto mt-8"
      />
    </div>
  );
}
