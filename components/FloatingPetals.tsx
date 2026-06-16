"use client";

import { useEffect, useState } from "react";

const particles = ["✦", "·", "✧", "·", "◆"];

function seededValue(index: number, seed: number) {
  const x = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const PARTICLE_CONFIG = Array.from({ length: 18 }, (_, index) => ({
  left: `${seededValue(index, 1) * 100}%`,
  animationDuration: `${10 + seededValue(index, 2) * 14}s`,
  animationDelay: `${seededValue(index, 3) * 12}s`,
  fontSize: `${8 + seededValue(index, 4) * 10}px`,
  symbol: particles[index % particles.length],
}));

export default function FloatingPetals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {PARTICLE_CONFIG.map((particle, index) => (
        <div
          key={index}
          className="particle"
          style={{
            left: particle.left,
            animationDuration: particle.animationDuration,
            animationDelay: particle.animationDelay,
            fontSize: particle.fontSize,
          }}
        >
          {particle.symbol}
        </div>
      ))}
    </>
  );
}
