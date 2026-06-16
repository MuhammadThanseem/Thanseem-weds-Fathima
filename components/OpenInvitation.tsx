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
        className="invitation-card p-6 md:p-10 text-center max-w-lg w-full mx-4 md:mx-0"
      >
        <div className="text-4xl md:text-6xl mb-6">
          💌
        </div>

        <h2 className="font-heading text-4xl mb-3">
          Muhammed Saneed
        </h2>

        <p className="text-accent mb-3">
          &
        </p>

        <h2 className="font-heading text-4xl">
          Fathima Barza
        </h2>

        <button
          onClick={onOpen}
          className="mt-6 md:mt-10 w-full md:inline-block md:w-auto px-6 md:px-10 py-3 md:py-4 rounded-full bg-primary text-white hover:scale-105 transition btn-modern"
        >
          Open Invitation
        </button>
      </motion.div>
    </div>
  );
}