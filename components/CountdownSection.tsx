"use client";

import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { weddingData } from "@/data/wedding";

export default function CountdownSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tracking-[5px] uppercase text-sm text-primary font-light"
        >
          Countdown
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl mt-6 mb-2"
        >
          Until Our Big Day
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="decorative-line h-1 mx-auto my-8"
        />

        <Countdown
          date={new Date(weddingData.weddingDate)}
          renderer={({
            days,
            hours,
            minutes,
            seconds,
          }) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
            >
              <TimeCard value={days} label="Days" index={0} />
              <TimeCard value={hours} label="Hours" index={1} />
              <TimeCard value={minutes} label="Minutes" index={2} />
              <TimeCard value={seconds} label="Seconds" index={3} />
            </motion.div>
          )}
        />
      </div>
    </motion.section>
  );
}

function TimeCard({
  value,
  label,
  index,
}: {
  value: number;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      viewport={{ once: true }}
      className="group invitation-card hover-lift p-6 md:p-8 relative overflow-hidden"
    >
      {/* Animated background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-heading text-4xl md:text-5xl text-primary font-bold"
        >
          {String(value).padStart(2, "0")}
        </motion.div>

        <div className="uppercase tracking-[3px] text-xs md:text-sm mt-4 text-muted font-light">
          {label}
        </div>
      </div>
    </motion.div>
  );
}