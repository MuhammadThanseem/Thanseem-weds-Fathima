"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionPetals from "@/components/SectionPetals";
import { toast } from "sonner";

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const initialFormData = {
    name: "",
    phone: "",
    response: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        toast.success("RSVP submitted successfully!", {
          description: "Thank you for celebrating this special day with us.",
        });
        setSubmitted(true);
        setFormData(initialFormData);
      } else {
        toast.error("Unable to submit RSVP", { description: data.message });
      }
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border rounded-2xl p-4 focus:outline-none transition-all duration-300 font-light placeholder:opacity-50";
  const inputStyle = {
    borderColor: "rgba(203,183,140,0.25)",
    background: "rgba(255,255,255,0.6)",
    color: "var(--foreground)",
  };
  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = "var(--beige)";
      e.target.style.boxShadow = "0 0 0 3px rgba(203,183,140,0.15)";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = "rgba(203,183,140,0.25)";
      e.target.style.boxShadow = "none";
    },
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="section-light py-24 sm:py-32 px-4 sm:px-6 text-center flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] relative overflow-hidden"
      >
        <SectionPetals count={8} seed={8} variant="light" />
        <div className="relative z-10 max-w-md w-full">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center text-3xl"
            style={{
              background:
                "linear-gradient(135deg, var(--black), var(--black-muted))",
              color: "var(--beige)",
            }}
          >
            ✓
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-foreground"
          >
            Thank You!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-muted font-light text-lg"
          >
            Your RSVP has been received. We look forward to celebrating with
            you!
          </motion.p>
        </div>
      </motion.section>
    );
  }

  /* ── Form ── */
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      id="rsvp"
      className="section-light py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionPetals count={10} seed={9} variant="light" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto glass-effect rounded-3xl sm:rounded-[36px] md:rounded-[40px] p-6 sm:p-8 md:p-12 premium-shadow animated-border"
      >
        <SectionHeader label="RSVP" title="Will You Join Us?" />

        <form onSubmit={handleSubmit} className="space-y-4 -mt-4">
          {/* Row 1 — Name + Phone */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-xs font-light text-muted mb-2 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className={inputClass}
                style={inputStyle}
                {...focusHandlers}
              />
            </div>
            <div>
              <label className="block text-xs font-light text-muted mb-2 uppercase tracking-wider">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 00000 00000"
                className={inputClass}
                style={inputStyle}
                {...focusHandlers}
              />
            </div>
          </motion.div>

          {/* Row 2 — Response + Message */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-xs font-light text-muted mb-2 uppercase tracking-wider">
                Will you be there? *
              </label>
              <select
                name="response"
                value={formData.response}
                onChange={handleChange}
                required
                className={inputClass}
                style={inputStyle}
              >
                <option value="">Select your response</option>
                <option value="Accept">Joyfully Accept</option>
                <option value="Decline">Regretfully Decline</option>
                <option value="Maybe">Maybe</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-light text-muted mb-2 uppercase tracking-wider">
                Special Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your warm wishes..."
                rows={3}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl p-4 text-sm text-center"
              style={{
                background: "rgba(239,68,68,0.08)",
                color: "#dc2626",
                border: "1px solid rgba(239,68,68,0.2)",
              }}
            >
              {error}
            </motion.div>
          )}

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 rounded-full font-light btn-modern transition-all tracking-wider uppercase text-sm disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              background:
                "linear-gradient(135deg, var(--black), var(--black-muted))",
              color: "var(--beige-light)",
            }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit RSVP"}
          </motion.button>

          <p className="text-xs text-muted/60 text-center font-light">
            * Required fields
          </p>
        </form>
      </motion.div>
    </motion.section>
  );
}
