"use client";

import { useState } from "react";

import SplashScreen from "@/components/SplashScreen";
import OpenInvitation from "@/components/OpenInvitation";
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
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return (
      <>
        <SplashScreen />
        <OpenInvitation onOpen={() => setOpened(true)} />
      </>
    );
  }

  return (
    <main className="floral-bg">
      <FloatingPetals />

      <MusicPlayer />

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <p className="tracking-[8px] uppercase text-sm text-primary">
          Wedding Invitation
        </p>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl mt-6">
          Fathima Barza
        </h1>

        <p className="text-2xl md:text-3xl my-6 text-accent">&</p>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl">Muhammed Saneed</h1>

        <div className="mt-12">
          <p className="uppercase tracking-[6px] text-sm">Save The Date</p>

          <h2 className="font-heading text-2xl md:text-4xl mt-4">08 August 2026</h2>
        </div>
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
