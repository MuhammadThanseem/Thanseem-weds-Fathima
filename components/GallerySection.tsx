"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/images/couple1.avif",
    alt: "Wedding moment 1",
  },
  {
    src: "/images/couple2.avif",
    alt: "Wedding moment 2",
  },
  {
    src: "/images/couple3.avif",
    alt: "Wedding moment 3",
  },
  {
    src: "/images/couple4.avif",
    alt: "Wedding moment 4",
  },
];

export default function GallerySection() {
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

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-center text-primary font-light text-sm"
        >
          Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-center mt-6 mb-4"
        >
          Moments To Cherish
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="decorative-line h-1 mx-auto mb-16"
        />

        {/* Modern Image Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="group cursor-pointer relative h-80 md:h-96"
              >
                {/* Image Container with Modern Shadow */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden premium-shadow hover-lift">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Shaded frame effect */}
                  <div className="absolute inset-0 ring-2 ring-inset ring-white/20 rounded-2xl" />

                  {/* Text overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent"
                  >
                    <p className="text-white font-light text-sm tracking-wide">
                      {image.alt}
                    </p>
                  </motion.div>
                </div>

                {/* Shine effect on image */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Gallery stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted font-light text-sm">
              {images.length} Cherished Moments Captured
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}