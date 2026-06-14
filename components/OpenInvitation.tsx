"use client";

import { motion } from "framer-motion";

interface Props {
  onOpen: () => void;
}

export default function OpenInvitation({
  onOpen,
}: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="invitation-card p-10 text-center"
      >
        <div className="text-6xl mb-6">
          💌
        </div>

        <h2 className="font-heading text-4xl mb-3">
          Fathima Barza
        </h2>

        <p className="text-[#C9A227] mb-3">
          &
        </p>

        <h2 className="font-heading text-4xl">
          Muhammed Saneed
        </h2>

        <button
          onClick={onOpen}
          className="mt-10 px-10 py-4 rounded-full bg-[#A67C52] text-white hover:scale-105 transition"
        >
          Open Invitation
        </button>
      </motion.div>
    </div>
  );
}