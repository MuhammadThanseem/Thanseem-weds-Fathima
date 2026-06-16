"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { weddingData } from "@/data/wedding";
import SectionHeader from "@/components/SectionHeader";

export default function CountdownSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      className="section-dark py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(203,183,140,0.08) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeader label="Countdown" title="Until Our Big Day" dark />

        {mounted ? (
          <Countdown
            date={new Date(weddingData.weddingDate)}
            renderer={({ days, hours, minutes, seconds }) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
              >
                <TimeCard value={days} label="Days" index={0} />
                <TimeCard value={hours} label="Hours" index={1} />
                <TimeCard value={minutes} label="Minutes" index={2} />
                <TimeCard value={seconds} label="Seconds" index={3} />
              </motion.div>
            )}
          />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <TimeCard key={label} value={0} label={label} index={index} placeholder />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}

function TimeCard({
  value,
  label,
  index,
  placeholder = false,
}: {
  value: number;
  label: string;
  index: number;
  placeholder?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04, y: -4 }}
      className="group invitation-card p-4 sm:p-6 md:p-10 relative overflow-hidden text-center"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: "linear-gradient(135deg, rgba(203,183,140,0.08), rgba(203,183,140,0.02))",
        }}
      />

      <div className="relative z-10">
        <div className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gold-gradient">
          {placeholder ? "--" : String(value).padStart(2, "0")}
        </div>

        <div
          className="uppercase tracking-[4px] text-xs mt-4 font-light"
          style={{ color: "rgba(232,223,208,0.6)" }}
        >
          {label}
        </div>
      </div>
    </motion.div>
  );
}
