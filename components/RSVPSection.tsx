"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionPetals from "@/components/SectionPetals";
import { toast } from "sonner";

const INSTAGRAM_URL =
  "https://www.instagram.com/alhawajbuilders?igsh=MWlkaXNyNzlmNXI3ZQ%3D%3D&utm_source=qr";
const INSTAGRAM_HANDLE = "@alhawajbuilders";

type FollowStatus = "yes" | "no" | "";

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Persists the follow status across form reset so success screen can read it
  const followRef = useRef<FollowStatus>("");

  const initialFormData = {
    name: "",
    phone: "",
    response: "",
    message: "",
    instagramFollow: "" as FollowStatus,
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

  const setFollow = (val: FollowStatus) =>
    setFormData((prev) => ({ ...prev, instagramFollow: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    followRef.current = formData.instagramFollow;

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
    const didFollow = followRef.current === "yes";
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

          {/* ── Gift eligibility card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              type: "spring",
              stiffness: 80,
            }}
            className="mt-8 rounded-3xl p-6 text-left"
            style={
              didFollow
                ? {
                    background:
                      "linear-gradient(135deg, rgba(203,183,140,0.14), rgba(203,183,140,0.06))",
                    border: "1px solid rgba(203,183,140,0.35)",
                    boxShadow: "0 8px 32px rgba(203,183,140,0.1)",
                  }
                : {
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(203,183,140,0.18)",
                  }
            }
          >
            {didFollow ? (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎁</span>
                  <p
                    className="font-heading text-xl"
                    style={{ color: "var(--beige-warm)" }}
                  >
                    You're on the Surprise List!
                  </p>
                </div>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  Since you follow us on Instagram, you're eligible for a
                  special surprise gift on your arrival. We can't wait to see
                  you on{" "}
                  <span style={{ color: "var(--beige-warm)" }}>
                    08 August 2026
                  </span>
                  !
                </p>
                <p
                  className="mt-3 text-xs font-light"
                  style={{ color: "rgba(203,183,140,0.55)" }}
                >
                  Keep an eye on our Instagram stories for pre-wedding surprises
                  too.
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✨</span>
                  <p className="font-heading text-xl text-foreground">
                    Unlock a Surprise!
                  </p>
                </div>
                <p className="text-sm font-light leading-relaxed text-muted mb-4">
                  Follow us on Instagram before the wedding and get a special
                  surprise gift on your arrival — our little way of saying thank
                  you for being part of our journey.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[2px] font-light transition-all hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
                    color: "#fff",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Follow {INSTAGRAM_HANDLE}
                </a>
              </>
            )}
          </motion.div>
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
        <SectionHeader label="RSVP" title="Follow & Win Contest" />

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

          {/* Row 2 — Email  */}
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

          {/* ── Instagram Follow Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(203,183,140,0.22)",
              }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <p className="text-xs font-light text-muted uppercase tracking-wider mb-0.5">
                    Instagram
                  </p>
                  <p
                    className="text-sm font-light"
                    style={{ color: "var(--foreground)" }}
                  >
                    {INSTAGRAM_HANDLE}
                  </p>
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-light transition-all hover:opacity-85"
                  style={{
                    background:
                      "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
                    color: "#fff",
                  }}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Follow
                </a>
              </div>

              {/* Teaser text */}
              <p
                className="text-xs font-light leading-relaxed mb-4"
                style={{ color: "var(--muted)" }}
              >
                Selected 4 followers of {INSTAGRAM_HANDLE} receive a{" "}
                <span style={{ color: "var(--beige-warm)" }}>
                  special surprise gift
                </span>{" "}
                at the wedding — a small token of our appreciation for being
                part of our journey. 🎁
              </p>

              {/* Yes / No toggle */}
              <p className="text-xs font-light text-muted mb-2.5 uppercase tracking-wider">
                Are you following us?
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {(["yes", "no"] as FollowStatus[]).map((val) => {
                  const active = formData.instagramFollow === val;
                  const isYes = val === "yes";
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setFollow(val)}
                      className="py-3 rounded-xl text-sm font-light transition-all duration-200"
                      style={{
                        background: active
                          ? isYes
                            ? "linear-gradient(135deg, rgba(203,183,140,0.25), rgba(203,183,140,0.12))"
                            : "rgba(203,183,140,0.08)"
                          : "rgba(255,255,255,0.6)",
                        color: active
                          ? isYes
                            ? "var(--beige-warm)"
                            : "var(--muted)"
                          : "var(--muted)",
                        border: active
                          ? isYes
                            ? "1px solid rgba(203,183,140,0.55)"
                            : "1px solid rgba(203,183,140,0.2)"
                          : "1px solid rgba(203,183,140,0.18)",
                        boxShadow:
                          active && isYes
                            ? "0 0 0 3px rgba(203,183,140,0.1)"
                            : "none",
                      }}
                    >
                      {isYes ? "✓ Yes, I follow!" : "Not yet"}
                    </button>
                  );
                })}
              </div>

              {/* Hint after selection */}
              {formData.instagramFollow === "no" && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-xs font-light"
                  style={{ color: "rgba(203,183,140,0.6)" }}
                >
                  No worries — follow before 08 August to still be eligible!
                </motion.p>
              )}
              {formData.instagramFollow === "yes" && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-xs font-light"
                  style={{ color: "var(--beige-warm)" }}
                >
                  Wonderful! Your surprise awaits you at the venue.
                </motion.p>
              )}
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
