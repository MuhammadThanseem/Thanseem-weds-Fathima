"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const STORAGE_KEY = "wedding-notify-seen-v1";

const INSTAGRAM_URL = "https://www.instagram.com/alhawajbuilders?igsh=MWlkaXNyNzlmNXI3ZQ%3D%3D&utm_source=qr";

// 11:00 AM IST = 05:30 UTC on 2026-08-08
const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=Saneed+%26+Barza+Wedding" +
  "&dates=20260808T053000Z%2F20260808T163000Z" +
  "&details=Nikah+Ceremony+of+Muhammed+Saneed+%26+Fathima+Barza.+08+August+2026+at+11%3A00+AM" +
  "&location=Sree+Gokulam+Convention+Centre%2C+Balussery%2C+Kerala+673612";

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
                Muhammed Saneed &amp; Fathima Barza
              </p>
              <p
                className="text-xs font-light mb-6 tracking-wide"
                style={{ color: "rgba(203,183,140,0.5)" }}
              >
                08 August 2026 · Balussery, Kerala
              </p>

              <div
                className="h-px w-12 mx-auto mb-6"
                style={{ background: "linear-gradient(to right, transparent, rgba(203,183,140,0.4), transparent)" }}
              />

              <p
                className="text-xs font-light mb-5 leading-relaxed"
                style={{ color: "rgba(232,223,208,0.55)" }}
              >
                Don't miss a moment — save the date or follow us on Instagram for updates &amp; surprises.
              </p>

              <div className="space-y-3">
                {/* Save to Calendar */}
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-xs uppercase tracking-[3px] font-light transition-all hover:opacity-90 active:scale-98"
                  style={{
                    background: "linear-gradient(135deg, #1a1a1a, #2c2c2c)",
                    color: "var(--beige-light)",
                    border: "1px solid rgba(203,183,140,0.25)",
                  }}
                >
                  <span>📅</span>
                  <span>Save the Date</span>
                </a>

                {/* Follow on Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-xs uppercase tracking-[3px] font-light transition-all hover:opacity-90 active:scale-98"
                  style={{
                    background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
                    color: "#fff",
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Follow on Instagram</span>
                </a>

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
