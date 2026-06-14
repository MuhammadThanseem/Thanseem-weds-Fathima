"use client";

import { motion } from "framer-motion";

import { weddingData } from "@/data/wedding";

export default function StorySection() {
  return (
    <section className="py-28 px-6 floral-bg">
      <div className="max-w-4xl mx-auto">
        <p className="text-center uppercase tracking-[5px] text-[#A67C52]">
          Our Journey
        </p>

        <h2 className="font-heading text-5xl text-center mt-4 mb-20">
          A Story Written By Allah
        </h2>

        <div className="space-y-14">
          {weddingData.story.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="invitation-card p-10"
            >
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-[#A67C52] text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-heading text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-700 leading-8">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}