"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import SectionHeader from "@/components/SectionHeader";
import SectionPetals from "@/components/SectionPetals";

export default function EventsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      id="events"
      className="section-light py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionPetals count={12} seed={6} variant="light" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader label="Events" title="Join Our Celebration" />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {[weddingData.nikah, weddingData.reception].map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group invitation-card hover-lift p-6 sm:p-8 md:p-12 relative overflow-hidden text-center md:text-left"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--beige), transparent)",
                }}
              />

              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs uppercase tracking-[4px] font-light mb-4"
                  style={{ color: "var(--beige-warm)" }}
                >
                  Event {index + 1}
                </motion.span>

                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground">
                  {event.title}
                </h3>

                <div className="decorative-line shimmer-line h-px my-5 sm:my-6 w-16 mx-auto md:mx-0" />

                <div className="space-y-5 mt-6">
                  <EventDetail label="Date" value={event.date} index={index} delay={0.2} />
                  <EventDetail label="Time" value={event.time} index={index} delay={0.25} />
                  <EventDetail label="Venue" value={event.venue} index={index} delay={0.3} />
                  <EventDetail label="Address" value={event.address} index={index} delay={0.35} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function EventDetail({
  label,
  value,
  index,
  delay,
}: {
  label: string;
  value: string;
  index: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 + delay }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-1 md:gap-3 items-center md:items-baseline text-center md:text-left"
    >
      <strong
        className="font-light uppercase tracking-[3px] text-xs flex-shrink-0"
        style={{ color: "var(--black-muted)" }}
      >
        {label}
      </strong>
      <span className="text-muted font-light">{value}</span>
    </motion.div>
  );
}
