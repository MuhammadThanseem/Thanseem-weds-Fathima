"use client";

import Countdown from "react-countdown";
import { weddingData } from "@/data/wedding";

export default function CountdownSection() {
  return (
    <section className="py-24 text-center floral-bg">
      <p className="tracking-[5px] uppercase text-sm text-[#A67C52]">
        Countdown
      </p>

      <h2 className="font-heading text-5xl mt-4 mb-12">
        Until Our Big Day
      </h2>

      <Countdown
        date={new Date(weddingData.weddingDate)}
        renderer={({
          days,
          hours,
          minutes,
          seconds,
        }) => (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto px-6">
            <TimeCard value={days} label="Days" />
            <TimeCard value={hours} label="Hours" />
            <TimeCard value={minutes} label="Minutes" />
            <TimeCard value={seconds} label="Seconds" />
          </div>
        )}
      />
    </section>
  );
}

function TimeCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="invitation-card p-8">
      <div className="font-heading text-5xl text-[#A67C52]">
        {value}
      </div>

      <div className="uppercase tracking-[3px] text-sm mt-3">
        {label}
      </div>
    </div>
  );
}