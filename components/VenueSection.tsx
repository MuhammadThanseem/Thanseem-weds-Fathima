"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import SectionHeader from "@/components/SectionHeader";
import SectionPetals from "@/components/SectionPetals";

export default function VenueSection() {
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8474845326743!2d75.78412!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6599999999999%3A0x123456789!2sCalicut%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      id="venue"
      className="section-dark py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionPetals count={10} seed={7} variant="dark" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader label="Venue" title="Find Your Way" dark />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {[weddingData.nikah, weddingData.reception].map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="invitation-card hover-lift p-6 sm:p-8 md:p-10 text-center md:text-left"
            >
              <h3
                className="font-heading text-xl sm:text-2xl md:text-3xl"
                style={{ color: "var(--beige-light)" }}
              >
                {event.title}
              </h3>

              <div className="decorative-line h-px my-5 sm:my-6 w-12 mx-auto md:mx-0" />

              <p className="font-light leading-relaxed" style={{ color: "var(--beige-light)" }}>
                {event.venue}
              </p>

              <p className="mt-3 text-sm font-light" style={{ color: "rgba(232,223,208,0.6)" }}>
                {event.address}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <motion.a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 text-center px-6 py-4 rounded-full font-light btn-modern transition-all"
                  style={{
                    background: "linear-gradient(135deg, var(--beige), var(--beige-warm))",
                    color: "var(--black)",
                  }}
                >
                  Get Directions
                </motion.a>
                <div
                  className="px-6 py-4 rounded-full text-center font-light text-sm"
                  style={{
                    background: "rgba(203,183,140,0.1)",
                    color: "var(--beige)",
                    border: "1px solid rgba(203,183,140,0.2)",
                  }}
                >
                  {event.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden premium-shadow animated-border">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
              className="w-full h-80 md:h-[480px] grayscale-[30%] contrast-[1.1]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center font-light text-sm tracking-wide"
            style={{ color: "rgba(203,183,140,0.6)" }}
          >
            Calicut, Kerala &nbsp;·&nbsp; 08 August 2026
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
