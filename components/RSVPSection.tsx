"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionPetals from "@/components/SectionPetals";

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    response: "",
    dietary: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.response) {
      setSubmitted(true);
    }
  };

  const inputClass =
    "w-full border rounded-2xl p-4 focus:outline-none transition-all duration-300 font-light placeholder:opacity-50";

  const inputStyle = {
    borderColor: "rgba(203,183,140,0.25)",
    background: "rgba(255,255,255,0.6)",
    color: "var(--foreground)",
  };

  if (submitted) {
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="section-light py-24 sm:py-32 px-4 sm:px-6 text-center flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] relative overflow-hidden"
      >
        <SectionPetals count={8} seed={8} variant="light" />
        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center text-3xl"
            style={{
              background: "linear-gradient(135deg, var(--black), var(--black-muted))",
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
            className="mt-6 text-muted font-light text-lg"
          >
            Your RSVP has been received. We look forward to celebrating with you!
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-primary font-light text-sm"
          >
            A confirmation has been sent to {formData.email}
          </motion.p>
        </div>
      </motion.section>
    );
  }

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
        className="relative z-10 max-w-2xl mx-auto glass-effect rounded-3xl sm:rounded-[36px] md:rounded-[40px] p-6 sm:p-8 md:p-12 premium-shadow animated-border"
      >
        <SectionHeader label="RSVP" title="Will You Join Us?" />

        <form onSubmit={handleSubmit} className="space-y-5 -mt-4">
          {[
            { name: "name", label: "Full Name *", type: "text", placeholder: "Enter your name", required: true },
            { name: "email", label: "Email Address *", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 00000 00000", required: true },
          ].map((field, i) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              viewport={{ once: true }}
            >
              <label className="block text-xs font-light text-muted mb-2 uppercase tracking-wider">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required={field.required}
                placeholder={field.placeholder}
                className={inputClass}
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--beige)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(203,183,140,0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(203,183,140,0.25)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <label className="block text-xs font-light text-muted mb-2 uppercase tracking-wider">
              Number of Guests
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            >
              {["1", "2", "3", "4", "5", "6+"].map((n) => (
                <option key={n} value={n}>
                  {n === "6+" ? "6 or More" : `${n} Guest${n !== "1" ? "s" : ""}`}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label className="block text-xs font-light text-muted mb-2 uppercase tracking-wider">
              Your Response *
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <label className="block text-xs font-light text-muted mb-2 uppercase tracking-wider">
              Dietary Preferences
            </label>
            <input
              type="text"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              placeholder="Vegetarian, Vegan, Halal, etc."
              className={inputClass}
              style={inputStyle}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 rounded-full font-light btn-modern transition-all tracking-wider uppercase text-sm"
            style={{
              background: "linear-gradient(135deg, var(--black), var(--black-muted))",
              color: "var(--beige-light)",
            }}
          >
            Submit RSVP
          </motion.button>

          <p className="text-xs text-muted/60 text-center font-light">* Required fields</p>
        </form>
      </motion.div>
    </motion.section>
  );
}
