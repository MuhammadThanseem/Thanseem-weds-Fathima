"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FloatingPetals from "@/components/FloatingPetals";
import MusicPlayer from "@/components/MusicPlayer";
import CountdownSection from "@/components/CountdownSection";
import CoupleSection from "@/components/CoupleSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import VenueSection from "@/components/VenueSection";
import RSVPSection from "@/components/RSVPSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <main className="floral-bg">
      <FloatingPetals />
      <MusicPlayer />

      {/* HERO — Ken Burns animated background */}
      <section
        ref={heroRef}
        className="hero-section relative min-h-screen flex items-center justify-center"
      >
        {/* Animated background image */}
        <motion.div
          style={{ scale: bgScale }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-[-15%] w-[130%] h-[130%] hero-ken-burns">
            <Image
              src="/images/couple1.avif"
              alt="Wedding"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 hero-grain pointer-events-none" />

        {/* Floating accent orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none hidden sm:block"
          style={{
            background: "radial-gradient(circle, rgba(203,183,140,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none hidden md:block"
          style={{
            background: "radial-gradient(circle, rgba(191,167,137,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Hero content */}
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="tracking-[4px] sm:tracking-[6px] md:tracking-[8px] uppercase text-[10px] sm:text-xs font-light"
            style={{ color: "var(--beige)" }}
          >
            We Request Your Gracious Presence
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="decorative-line shimmer-line mx-auto my-6 sm:my-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight gold-gradient px-2"
          >
            Fathima Barza
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-4xl my-4 sm:my-5 font-light"
            style={{ color: "var(--beige-light)" }}
          >
            &
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight gold-gradient px-2"
          >
            Muhammed Saneed
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="decorative-line shimmer-line mx-auto my-6 sm:my-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 sm:mt-10"
          >
            <p
              className="uppercase tracking-[4px] sm:tracking-[6px] text-[10px] sm:text-xs font-light mb-3 sm:mb-4"
              style={{ color: "rgba(232,223,208,0.7)" }}
            >
              Save The Date
            </p>
            <h2
              className="font-heading text-2xl sm:text-3xl md:text-5xl tracking-wide"
              style={{ color: "var(--beige-light)" }}
            >
              08 August 2026
            </h2>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator"
        >
          <span
            className="text-xs tracking-[4px] uppercase font-light"
            style={{ color: "rgba(203,183,140,0.6)" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, var(--beige), transparent)",
            }}
          />
        </motion.div>
      </section>

      <CoupleSection />
      <CountdownSection />
      <StorySection />
      <GallerySection />
      <EventsSection />
      <VenueSection />
      <RSVPSection />
      <FooterSection />
    </main>
  );
}
