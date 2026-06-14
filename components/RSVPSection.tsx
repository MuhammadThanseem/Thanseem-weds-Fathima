"use client";

import { useState } from "react";

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-28 px-6 text-center">
        <h2 className="font-heading text-5xl">
          Thank You!
        </h2>

        <p className="mt-6">
          Your RSVP has been received.
        </p>
      </section>
    );
  }

  return (
    <section className="py-28 px-6 floral-bg">
      <div className="max-w-xl mx-auto invitation-card p-10">
        <p className="uppercase tracking-[5px] text-center text-[#A67C52]">
          RSVP
        </p>

        <h2 className="font-heading text-5xl text-center mt-4 mb-10">
          Will You Join Us?
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full border rounded-xl p-4"
          />

          <select
            required
            className="w-full border rounded-xl p-4"
          >
            <option value="">
              Select Response
            </option>

            <option>
              Joyfully Accept
            </option>

            <option>
              Regretfully Decline
            </option>
          </select>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-[#A67C52] text-white"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  );
}