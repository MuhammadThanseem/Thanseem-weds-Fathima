"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import SectionHeader from "@/components/SectionHeader";
import SectionPetals from "@/components/SectionPetals";

export default function StorySection() {
  const { story } = weddingData;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      id="story"
      className="section-dark py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionPetals count={9} seed={5} variant="dark" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionHeader label="Our Journey" title="How Our Story Unfolds" dark />

        <div className="relative -mt-2 pl-12 sm:pl-16">
          {/* vertical rail */}
          <div
            className="absolute top-3 bottom-3 left-[15px] sm:left-[19px] w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(203,183,140,0.45) 10%, rgba(203,183,140,0.45) 90%, transparent)",
            }}
          />

          <div className="space-y-10 sm:space-y-12">
            {story.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span
                  className="absolute -left-12 sm:-left-16 top-0 flex items-center justify-center w-8 h-8 rounded-full font-heading text-xs"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--beige), var(--beige-warm))",
                    color: "var(--black)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="font-heading text-2xl sm:text-3xl leading-tight"
                  style={{ color: "var(--beige-light)" }}
                >
                  {item.title}
                </h3>
                <div className="decorative-line shimmer-line h-px w-12 my-3" />
                <p
                  className="font-light text-sm sm:text-base leading-7"
                  style={{ color: "rgba(232,223,208,0.62)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
