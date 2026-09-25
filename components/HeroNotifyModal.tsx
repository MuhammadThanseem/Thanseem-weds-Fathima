"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const STORAGE_KEY = "wedding-notify-seen-v1";

export default function HeroNotifyModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 4800);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
            onClick={dismiss}
          />

          {/* Modal — bottom-sheet on mobile, centered on sm+ */}
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none px-4 pb-4 sm:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.05 }}
              className="pointer-events-auto w-full max-w-sm rounded-3xl p-7 sm:p-8 text-center"
              style={{
                background: "rgba(10,9,6,0.93)",
                border: "1px solid rgba(203,183,140,0.22)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(203,183,140,0.12)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Ornament */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-5 flex items-center justify-center gap-2"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M11 2C7.5 2 5 5 5 8.5C5 13 9 17 11 20C13 17 17 13 17 8.5C17 5 14.5 2 11 2Z"
                    fill="#CBB78E"
                    fillOpacity="0.15"
                    stroke="#CBB78E"
                    strokeWidth="1.2"
                  />
                  <circle cx="11" cy="9" r="2.5" fill="#CBB78E" fillOpacity="0.7" />
                </svg>
                <span
                  className="font-heading"
                  style={{
                    fontSize: "1.5rem",
                    background: "linear-gradient(135deg, #CBB78E, #E8DFD0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  بِسْمِ اللّٰهِ
                </span>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M11 2C7.5 2 5 5 5 8.5C5 13 9 17 11 20C13 17 17 13 17 8.5C17 5 14.5 2 11 2Z"
                    fill="#CBB78E"
                    fillOpacity="0.15"
                    stroke="#CBB78E"
                    strokeWidth="1.2"
                    transform="scale(-1,1) translate(-22,0)"
                  />
                  <circle cx="11" cy="9" r="2.5" fill="#CBB78E" fillOpacity="0.7" />
                </svg>
              </motion.div>

              <p
                className="font-heading mb-1"
                style={{
                  fontSize: "1.55rem",
                  background: "linear-gradient(135deg, #CBB78E, #E8DFD0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                You're Invited!
              </p>
              <p
                className="text-sm font-light mb-1"
                style={{ color: "rgba(232,223,208,0.75)" }}
              >
                Muhammed Thanseem C &amp; Fathima
              </p>
              <p
                className="text-xs font-light mb-6 tracking-wide"
                style={{ color: "rgba(203,183,140,0.5)" }}
              >
                19 December 2026 · Villiappally, Vatakara
              </p>

              <div
                className="h-px w-12 mx-auto mb-6"
                style={{ background: "linear-gradient(to right, transparent, rgba(203,183,140,0.4), transparent)" }}
              />

              <div className="space-y-3">
                {/* RSVP — scrolls to RSVP section */}
                <button
                  onClick={() => {
                    dismiss();
                    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-xs uppercase tracking-[3px] font-light transition-all hover:opacity-90 active:scale-98"
                  style={{
                    background: "linear-gradient(135deg, #CBB78E, #E8DFD0)",
                    color: "#0a0906",
                  }}
                >
                  <span>RSVP Now</span>
                </button>

                {/* Dismiss */}
                <button
                  onClick={dismiss}
                  className="w-full py-2 text-xs uppercase tracking-[2px] font-light transition-opacity hover:opacity-70"
                  style={{ color: "rgba(203,183,140,0.35)" }}
                >
                  I'll check back later
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
