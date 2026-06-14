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
        <p className="uppercase tracking-[8px] text-primary text-xs md:text-sm">
          Bismillahir Rahmanir Raheem
        </p>

        <div className="my-8 text-5xl md:text-7xl">
          🌙
        </div>

        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground">
          Wedding Invitation
        </h1> 
      </motion.div>
    </motion.div>
  );
}