"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  return (
    <main className="floral-bg">
      <FloatingPetals />
      <MusicPlayer />

      {/* ENHANCED HERO WITH BACKGROUND IMAGE */}
      <section className="hero-background relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient layers */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(203, 183, 140, 0.4), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Background image with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96"
        >
          <Image
            src="/images/IMG_0213.JPG.jpeg"
            alt="Wedding Arch"
            width={400}
            height={400}
            className="w-full h-full object-contain filter drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Content container */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          {/* Welcome label */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="tracking-[8px] uppercase text-sm text-primary font-light"
          >
            We Request Your Gracious Presence
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="decorative-line mx-auto my-6"
          />

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl md:text-6xl lg:text-8xl leading-tight"
          >
            Fathima Barza
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl my-6 text-accent font-light"
          >
            &
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-4xl md:text-6xl lg:text-8xl leading-tight"
          >
            Muhammed Saneed
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="decorative-line mx-auto my-6"
          />

          {/* Date section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <p className="uppercase tracking-[6px] text-sm text-muted font-light">Save The Date</p>
            <h2 className="font-heading text-3xl md:text-4xl mt-4 text-foreground">08 August 2026</h2>
          </motion.div>
        </div>
      </section>

      {/* COUPLE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CoupleSection />
      </motion.div>

      {/* COUNTDOWN SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CountdownSection />
      </motion.div>

      {/* STORY SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <StorySection />
      </motion.div>

      {/* GALLERY SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <GallerySection />
      </motion.div>

      {/* EVENTS SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <EventsSection />
      </motion.div>

      {/* VENUE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <VenueSection />
      </motion.div>

      {/* RSVP SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <RSVPSection />
      </motion.div>

      {/* FOOTER SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FooterSection />
      </motion.div>
    </main>
  );
}
