"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.response
    ) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="py-28 px-6 text-center flex items-center justify-center min-h-screen"
      >
        <div className="max-w-md">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-6xl mb-6"
          >
            ✅
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl text-foreground"
          >
            Thank You!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-muted font-light text-lg"
          >
            Your RSVP has been received. We look forward to celebrating with
            you!
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
      viewport={{ once: true }}
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto glass-effect backdrop-blur-md rounded-[40px] p-8 md:p-12 premium-shadow"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-center text-primary font-light text-sm"
        >
          RSVP
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-center mt-6 mb-4"
        >
          Will You Join Us?
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="decorative-line h-1 mx-auto mb-10"
        />

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-light text-muted mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full border-2 border-primary/20 rounded-2xl p-4 bg-white/50 backdrop-blur focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted/60"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-light text-muted mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full border-2 border-primary/20 rounded-2xl p-4 bg-white/50 backdrop-blur focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted/60"
            />
          </motion.div>

          {/* Phone Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.41 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-light text-muted mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 (555) 000-0000"
              className="w-full border-2 border-primary/20 rounded-2xl p-4 bg-white/50 backdrop-blur focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted/60"
            />
          </motion.div>

          {/* Number of Guests */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-light text-muted mb-2">
              Number of Guests
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full border-2 border-primary/20 rounded-2xl p-4 bg-white/50 backdrop-blur focus:outline-none focus:border-primary transition-colors font-light text-muted"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6+">6 or More</option>
            </select>
          </motion.div>

          {/* RSVP Response */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.47 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-light text-muted mb-2">
              Your Response *
            </label>
            <select
              name="response"
              value={formData.response}
              onChange={handleChange}
              required
              className="w-full border-2 border-primary/20 rounded-2xl p-4 bg-white/50 backdrop-blur focus:outline-none focus:border-primary transition-colors font-light text-muted"
            >
              <option value="">Select your response</option>
              <option value="Accept">Joyfully Accept</option>
              <option value="Decline">Regretfully Decline</option>
              <option value="Maybe">Maybe</option>
            </select>
          </motion.div>

          {/* Dietary Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-light text-muted mb-2">
              Dietary Preferences
            </label>
            <input
              type="text"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              placeholder="Vegetarian, Vegan, Halal, etc."
              className="w-full border-2 border-primary/20 rounded-2xl p-4 bg-white/50 backdrop-blur focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted/60"
            />
          </motion.div>

          {/* Special Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.53 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-light text-muted mb-2">
              Special Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your warm wishes..."
              rows={3}
              className="w-full border-2 border-primary/20 rounded-2xl p-4 bg-white/50 backdrop-blur focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted/60 resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-light btn-modern hover:shadow-xl transition-all"
          >
            Submit RSVP
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.59 }}
            viewport={{ once: true }}
            className="text-xs text-muted/70 text-center font-light"
          >
            * Required fields
          </motion.p>
        </form>
      </motion.div>
    </motion.section>
  );
}