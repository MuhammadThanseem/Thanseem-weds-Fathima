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
    <section className="py-20 px-4 sm:px-6 lg:px-8 floral-bg">
      <div className="max-w-xl mx-auto invitation-card p-6 md:p-10">
        <p className="uppercase tracking-[5px] text-center text-primary">
          RSVP
        </p>

        <h2 className="font-heading text-3xl md:text-5xl text-center mt-4 mb-6">
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
            className="w-full border border-neutral-200 rounded-xl p-4 bg-white"
          />

          <select
            required
            className="w-full border border-neutral-200 rounded-xl p-4 bg-white"
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
            className="w-full py-4 rounded-full bg-primary text-white btn-modern"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  );
}