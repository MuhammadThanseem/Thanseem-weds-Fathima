"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import SectionPetals from "@/components/SectionPetals";

export default function BlessingSection() {
  const { blessing } = weddingData;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      id="blessing"
      className="section-light py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionPetals count={8} seed={11} variant="light" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tracking-[6px] uppercase text-xs font-light text-primary"
        >
          From the Holy Qur&apos;an
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "56px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="decorative-line shimmer-line h-px mx-auto mt-6 mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            animate={{
              textShadow: [
                "0 0 0px rgba(191,167,137,0)",
                "0 0 22px rgba(191,167,137,0.35)",
                "0 0 0px rgba(191,167,137,0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="font-heading text-accent"
            style={{
              fontSize: "clamp(1.5rem, 4.5vw, 2.4rem)",
              direction: "rtl",
              lineHeight: 2,
              letterSpacing: "0.02em",
            }}
          >
            {blessing.arabic}
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-10 text-muted font-light italic leading-8 text-sm sm:text-base md:text-lg"
        >
          &ldquo;{blessing.translation}&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 tracking-[4px] uppercase text-[11px] font-light"
          style={{ color: "var(--beige-warm)" }}
        >
          {blessing.reference}
        </motion.p>
      </div>
    </motion.section>
  );
}
