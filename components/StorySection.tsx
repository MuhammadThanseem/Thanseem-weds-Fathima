"use client";

import { motion } from "framer-motion";

import { weddingData } from "@/data/wedding";

export default function StorySection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[5px] text-primary font-light text-sm"
        >
          Our Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-center mt-6 mb-4"
        >
          A Story Written By Allah
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="decorative-line h-1 mx-auto mb-16"
        />

        {/* Timeline */}
        <div className="space-y-10">
          {weddingData.story.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="group invitation-card hover-lift p-8 md:p-10 relative"
            >
              {/* Timeline connector */}
              {index < weddingData.story.length - 1 && (
                <div className="absolute -bottom-10 left-1/2 w-1 h-10 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2" />
              )}

              <div className="flex gap-6 items-start">
                {/* Timeline number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-heading text-xl md:text-2xl font-bold shadow-lg"
                >
                  {index + 1}
                </motion.div>

                {/* Content */}
                <div className="flex-grow">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                    viewport={{ once: true }}
                    className="font-heading text-2xl md:text-3xl text-foreground"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.15 }}
                    viewport={{ once: true }}
                    className="mt-4 text-muted leading-8 font-light"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}