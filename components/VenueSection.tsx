"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import SectionHeader from "@/components/SectionHeader";
import SectionPetals from "@/components/SectionPetals";

export default function VenueSection() {
  const { nikah } = weddingData;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      id="events"
      className="section-dark py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionPetals count={8} seed={7} variant="dark" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader label="Events & Venue" title="Join Our Celebration" dark />

        {/* Single combined card: details left, map right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="invitation-card overflow-hidden rounded-2xl premium-shadow animated-border"
        >
          <div className="grid md:grid-cols-2">
            {/* Left — event details */}
            <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-between">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs uppercase tracking-[4px] font-light mb-4"
                  style={{ color: "var(--beige-warm)" }}
                >
                  Nikkah &amp; Reception
                </motion.span>

                <h3
                  className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight"
                  style={{ color: "var(--beige-light)" }}
                >
                  {nikah.title}
                </h3>

                <div className="decorative-line shimmer-line h-px my-6 w-14" />

                <div className="space-y-4">
                  <Row label="Date" value={nikah.date} delay={0.2} />
                  <Row label="Hijri" value={nikah.hijri} delay={0.25} />
                  <Row label="Nikkah" value={nikah.time} delay={0.3} />
                  <Row label="Reception" value={nikah.reception} delay={0.35} />
                  <Row label="Venue" value={nikah.venue} delay={0.4} />
                  <Row label="Address" value={nikah.address} delay={0.45} />
                </div>
              </div>

              <motion.a
                href={nikah.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                viewport={{ once: true }}
                className="mt-10 inline-block text-center px-8 py-4 rounded-full font-light btn-modern text-sm tracking-widest uppercase transition-all"
                style={{
                  background: "linear-gradient(135deg, var(--beige), var(--beige-warm))",
                  color: "var(--black)",
                }}
              >
                Get Directions
              </motion.a>
            </div>

            {/* Right — map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative min-h-[300px] md:min-h-0"
            >
              <iframe
                src={nikah.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
                className="w-full h-full grayscale-[20%] contrast-[1.1]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function Row({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay }}
      viewport={{ once: true }}
      className="flex gap-3 items-baseline"
    >
      <span
        className="font-light uppercase tracking-[3px] text-xs flex-shrink-0 w-16"
        style={{ color: "rgba(203,183,140,0.55)" }}
      >
        {label}
      </span>
      <span className="font-light text-sm" style={{ color: "var(--beige-light)" }}>
        {value}
      </span>
    </motion.div>
  );
}
