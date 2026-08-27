"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { weddingData } from "@/data/wedding";

const socialLinks = [
  { name: "Instagram", icon: FaInstagram, url: weddingData.contact.instagram },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: `https://wa.me/${weddingData.contact.whatsapp}`,
  },
  { name: "Location", icon: FaMapMarkerAlt, url: weddingData.nikah.mapLink },
];

const navLinks = [
  { label: "Couple", href: "#couple" },
  { label: "Story", href: "#story" },
  { label: "Blessing", href: "#blessing" },
  { label: "Events", href: "#events" },
  { label: "RSVP", href: "#rsvp" },
];

export default function FooterSection() {
  return (
    <footer className="footer-gradient relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-40 footer-glow pointer-events-none" />

      {/* Decorative lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--beige), transparent)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-10 sm:gap-12 md:gap-12 items-start">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-1 text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl gold-gradient leading-tight"
            >
              Thank You
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-5 font-light leading-relaxed text-sm"
              style={{ color: "rgba(232,223,208,0.65)" }}
            >
              We look forward to celebrating this special day with you. Your presence is the greatest gift we could ask for.
            </motion.p>
          </motion.div>

          {/* Couple names + date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="decorative-line shimmer-line h-px w-16 mx-auto mb-8 md:hidden" />

            <p
              className="font-heading text-lg sm:text-xl md:text-2xl tracking-normal whitespace-nowrap"
              style={{ color: "var(--beige-light)" }}
            >
              Er. Muhammed Thanseem C
            </p>
            <p
              className="text-lg my-2 font-light"
              style={{ color: "var(--beige)" }}
            >
              &
            </p>
            <p
              className="font-heading text-lg sm:text-xl md:text-2xl tracking-normal whitespace-nowrap"
              style={{ color: "var(--beige-light)" }}
            >
              Dr. Fathima
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 inline-block px-6 py-3 rounded-full text-sm font-light tracking-widest uppercase"
              style={{
                border: "1px solid rgba(203,183,140,0.3)",
                color: "var(--beige)",
                background: "rgba(203,183,140,0.06)",
              }}
            >
              19 · December · 2026
            </motion.div>
          </motion.div>

          {/* Quick links + social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p
              className="text-xs uppercase tracking-[5px] font-light mb-6"
              style={{ color: "rgba(203,183,140,0.6)" }}
            >
              Connect With Us
            </p>

            <div className="flex justify-center md:justify-end gap-4 mb-10">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300"
                    style={{
                      background: "rgba(203,183,140,0.08)",
                      border: "1px solid rgba(203,183,140,0.25)",
                      color: "var(--beige)",
                    }}
                    title={social.name}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ color: "var(--beige-light)" }}
                  className="text-xs font-light tracking-wider uppercase transition-colors duration-300"
                  style={{ color: "rgba(232,223,208,0.45)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(203,183,140,0.12)" }}
        >
          <p
            className="text-xs font-light tracking-wide"
            style={{ color: "rgba(232,223,208,0.35)" }}
          >
            © 2026 Thanseem & Fathima. All blessings to our union.
          </p>

          <p
            className="text-xs font-light tracking-[3px] uppercase"
            style={{ color: "rgba(203,183,140,0.4)" }}
          >
            Crafted by{" "}
            <a
              href="https://www.penaqure.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[color:var(--beige-light)]"
              style={{ color: "rgba(203,183,140,0.7)" }}
            >
              Penaqure
            </a>
          </p>
        </motion.div>
      </div>

      {/* Bottom decorative orb */}
      <motion.div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(203,183,140,0.06) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </footer>
  );
}
