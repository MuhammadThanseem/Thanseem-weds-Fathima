"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroParticles from "@/components/HeroParticles";
import MusicPlayer from "@/components/MusicPlayer";
import CountdownSection from "@/components/CountdownSection";
import CoupleSection from "@/components/CoupleSection";
import VenueSection from "@/components/VenueSection";
import RSVPSection from "@/components/RSVPSection";
import FooterSection from "@/components/FooterSection";
import HeroNotifyModal from "@/components/HeroNotifyModal";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="floral-bg">
      <HeroNotifyModal />
      <MusicPlayer />

      {/* HERO */}
      <section
        ref={heroRef}
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#3a3520" }}
      >
        {/* ── Full-screen background — curtain reveal top → bottom ── */}
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero1.png"
            alt="Al Hawaj Builders"
            fill
            className="object-cover"
            style={{ objectPosition: "50% 40%" }}
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Subtle vignette — darkens only the very edges/bottom for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 40%, rgba(13,13,13,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 100%)" }}
        />

        <div className="absolute inset-0 hero-grain pointer-events-none" />
        <HeroParticles />

        {/* Content — dark glass card so text is always readable over the logo bg */}
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 1.4 }}
            className="rounded-3xl px-6 sm:px-10 py-10 sm:py-12 text-center flex flex-col items-center"
            style={{
              background: "rgba(10,9,6,0.68)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(203,183,140,0.18)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(203,183,140,0.1)",
            }}
          >
            {/* ── Bismillah ── */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.7 }}
              className="mb-5"
            >
              <motion.p
                animate={{
                  textShadow: [
                    "0 0 0px rgba(203,183,140,0)",
                    "0 0 28px rgba(203,183,140,0.8)",
                    "0 0 0px rgba(203,183,140,0)",
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                className="font-heading gold-gradient"
                style={{
                  fontSize: "clamp(1.3rem, 3.5vw, 2rem)",
                  direction: "rtl",
                  letterSpacing: "0.06em",
                  lineHeight: 1.6,
                }}
              >
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ width: 0 }} animate={{ width: "40px" }}
              transition={{ duration: 0.8, delay: 2 }}
              className="decorative-line shimmer-line mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="tracking-[5px] sm:tracking-[7px] uppercase text-[10px] sm:text-xs font-light mb-7"
              style={{ color: "rgba(203,183,140,0.75)" }}
            >
              We Request Your Gracious Presence
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl leading-tight gold-gradient"
            >
              Muhammed Saneed
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.35 }}
              className="text-2xl sm:text-3xl my-3 font-light"
              style={{ color: "var(--beige)" }}
            >
              &
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2.45 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl leading-tight gold-gradient"
            >
              Fathima Barza
            </motion.h1>

            <motion.div
              initial={{ width: 0 }} animate={{ width: "56px" }}
              transition={{ duration: 0.9, delay: 2.6 }}
              className="decorative-line shimmer-line mx-auto my-6"
            />

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.7 }}
            >
              <p
                className="uppercase tracking-[5px] text-[10px] sm:text-xs font-light mb-2"
                style={{ color: "rgba(232,223,208,0.55)" }}
              >
                Save The Date
              </p>
              <h2
                className="font-heading text-2xl sm:text-3xl md:text-4xl tracking-wide"
                style={{ color: "var(--beige-light)" }}
              >
                08 August 2026
              </h2>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[4px] uppercase font-light" style={{ color: "rgba(203,183,140,0.6)" }}>
            Scroll
          </span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--beige), transparent)" }} />
        </motion.div>
      </section>

      <CoupleSection />
      <CountdownSection />
      <VenueSection />
      <RSVPSection />
      <FooterSection />
    </main>
  );
}
