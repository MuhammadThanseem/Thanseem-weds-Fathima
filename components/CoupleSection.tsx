"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import SectionPetals from "@/components/SectionPetals";

export default function CoupleSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      id="couple"
      className="section-light py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionPetals count={12} seed={2} variant="light" />
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: -8 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="relative max-w-xs sm:max-w-sm mx-auto md:max-w-none md:mx-0 w-full"
        >
          <motion.div
            className="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-[48px] pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(203,183,140,0.15), rgba(13,13,13,0.05))" }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative rounded-[40px] overflow-hidden premium-shadow animated-border">
            <Image
              src="/images/couples.jpg"
              alt="Couple"
              width={600}
              height={700}
              className="w-full h-auto object-cover"
              loading="eager"
              priority
            />
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(45deg, transparent 40%, rgba(203,183,140,0.08) 50%, transparent 60%)",
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <SectionHeader label="The Couple" title="Two Hearts, One Journey" />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground -mt-6 sm:-mt-8 mb-2"
          >
            Muhammed Thanseem C
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-accent text-xl sm:text-2xl my-3 font-light"
          >
            &
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 sm:mb-8"
          >
            Fathima
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="leading-7 sm:leading-8 md:leading-9 text-muted text-sm sm:text-base md:text-lg font-light max-w-md mx-auto md:mx-0 md:max-w-none md:border-l-2 md:pl-6 px-2 sm:px-4 md:px-0"
            style={{ borderColor: "var(--beige)" }}
          >
            With the blessings of Allah and our families, we joyfully invite you to celebrate our wedding
            and share in the beginning of our forever.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
