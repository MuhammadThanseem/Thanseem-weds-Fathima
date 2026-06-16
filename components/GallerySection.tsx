"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import SectionPetals from "@/components/SectionPetals";

const images = [
  { src: "/images/couple1.avif", alt: "Wedding moment 1" },
  { src: "/images/couple2.avif", alt: "Wedding moment 2" },
  { src: "/images/couple3.avif", alt: "Wedding moment 3" },
  { src: "/images/couple4.avif", alt: "Wedding moment 4" },
];

export default function GallerySection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      id="gallery"
      className="section-dark py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionPetals count={10} seed={5} variant="dark" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader label="Gallery" title="Moments To Cherish" dark />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                type: "spring",
                stiffness: 90,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer relative h-56 sm:h-72 md:h-96"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden premium-shadow">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 60%)",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(203,183,140,0.3)" }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <p
                    className="font-light text-sm tracking-wide"
                    style={{ color: "var(--beige-light)" }}
                  >
                    {image.alt}
                  </p>
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(203,183,140,0.12) 50%, transparent 70%)",
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 4 + index,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 text-center text-sm font-light tracking-widest uppercase"
          style={{ color: "rgba(203,183,140,0.5)" }}
        >
          {images.length} Cherished Moments
        </motion.p>
      </div>
    </motion.section>
  );
}
