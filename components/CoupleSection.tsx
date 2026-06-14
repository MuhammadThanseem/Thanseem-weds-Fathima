"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image with enhanced frame */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative frame background */}
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[40px] blur-2xl" />

          <div className="relative rounded-[40px] overflow-hidden premium-shadow">
            <Image
              src="/images/couple1.avif"
              alt="Couple"
              width={600}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="uppercase tracking-[5px] text-primary font-light text-sm"
          >
            The Couple
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="decorative-line h-1 my-6"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground"
          >
            Fathima Barza
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-accent text-2xl md:text-4xl my-4 font-light"
          >
            &
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground"
          >
            Muhammed Saneed
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-10 leading-8 md:leading-9 text-muted text-base md:text-lg font-light"
          >
            With the blessings of Allah and our families, we joyfully invite you to celebrate our wedding
            and share in the beginning of our forever.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}