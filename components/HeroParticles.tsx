"use client";

import { useEffect, useState } from "react";

const SHAPES = ["✦", "✧", "◆", "·", "◇", "○"];

function seeded(index: number, seed: number) {
  const x = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const PARTICLE_CONFIG = Array.from({ length: 32 }, (_, index) => ({
  left: `${seeded(index, 1) * 100}%`,
  top: `${seeded(index, 5) * 100}%`,
  duration: `${7 + seeded(index, 2) * 14}s`,
  delay: `${seeded(index, 3) * 10}s`,
  size: `${4 + seeded(index, 4) * 10}px`,
  driftX: `${-40 + seeded(index, 6) * 80}px`,
  symbol: SHAPES[index % SHAPES.length],
  isDot: index % 3 === 0,
}));

export default function HeroParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {PARTICLE_CONFIG.map((particle, index) =>
        particle.isDot ? (
          <div
            key={index}
            className="hero-particle-dot"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              ["--drift-x" as string]: particle.driftX,
            }}
          />
        ) : (
          <div
            key={index}
            className="hero-particle"
            style={{
              left: particle.left,
              top: particle.top,
              fontSize: particle.size,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              ["--drift-x" as string]: particle.driftX,
            }}
          >
            {particle.symbol}
          </div>
        )
      )}
    </div>
  );
}
