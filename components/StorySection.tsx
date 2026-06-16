"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import SectionHeader from "@/components/SectionHeader";

export default function StorySection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      id="story"
      className="section-light py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader label="Our Journey" title="A Story Written By Allah" />

        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute left-7 md:left-8 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, var(--beige), transparent)" }}
          />

          <div className="space-y-8">
            {weddingData.story.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true, margin: "-40px" }}
                className="group invitation-card hover-lift p-6 sm:p-8 md:p-10 relative"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.12 + 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-heading text-lg sm:text-xl md:text-2xl font-bold shadow-lg relative z-10"
                    style={{
                      background: "linear-gradient(135deg, var(--black), var(--black-muted))",
                      color: "var(--beige)",
                      border: "1px solid rgba(203,183,140,0.3)",
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  <div className="flex-grow w-full sm:w-auto">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.12 + 0.15 }}
                      viewport={{ once: true }}
                      className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground"
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
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
      </div>
    </motion.section>
  );
}
