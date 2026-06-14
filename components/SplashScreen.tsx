"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-10 floral-bg flex items-center justify-center"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="text-center"
      >
        <p className="uppercase tracking-[8px] text-[#A67C52] text-sm">
          Bismillahir Rahmanir Raheem
        </p>

        <div className="my-8 text-7xl">
          🌙
        </div>

        <h1 className="font-heading text-5xl text-[#4B2E2E]">
          Wedding Invitation
        </h1>
      </motion.div>
    </motion.div>
  );
}