"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroLogoAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: -40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.1, type: "spring", stiffness: 70, damping: 14 }}
      className="relative mx-auto mb-6 sm:mb-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
    >
      <motion.div
        className="absolute -inset-5 sm:-inset-6 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(203,183,140,0.25) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -inset-3 sm:-inset-4 rounded-3xl pointer-events-none"
        style={{
          border: "1px solid rgba(203,183,140,0.35)",
          background:
            "conic-gradient(from 0deg, transparent, rgba(203,183,140,0.2), transparent, rgba(203,183,140,0.1), transparent)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full rounded-2xl overflow-hidden bg-white/95 premium-shadow animated-border"
      >
        <Image
          src="/images/IMG_0213.JPG.jpeg"
          alt="Al Hawaj Builders"
          fill
          className="object-contain p-2 sm:p-3"
          priority
          sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
        />

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(203,183,140,0.3) 50%, transparent 65%)",
          }}
          animate={{ x: ["-120%", "220%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear", repeatDelay: 3.5 }}
        />
      </motion.div>
    </motion.div>
  );
}
