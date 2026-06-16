"use client";

import { useEffect, useMemo, useState } from "react";

const PETAL_SYMBOLS = ["❀", "✿", "🌸"];
const PETAL_COLORS_LIGHT = ["#BFA789", "#CBB78E", "#A89068", "#D4B896"];
const PETAL_COLORS_DARK = ["#CBB78E", "#E8DFD0", "#BFA789", "#D4C4A8"];

function seeded(index: number, seed: number) {
  const x = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

interface SectionPetalsProps {
  count?: number;
  seed?: number;
  variant?: "light" | "dark";
}

export default function SectionPetals({
  count = 10,
  seed = 1,
  variant = "light",
}: SectionPetalsProps) {
  const [petalCount, setPetalCount] = useState(count);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const updateCount = () => {
      setPetalCount(media.matches ? Math.max(5, Math.round(count * 0.55)) : count);
    };

    updateCount();
    media.addEventListener("change", updateCount);
    return () => media.removeEventListener("change", updateCount);
  }, [count]);

  const petals = useMemo(
    () =>
      Array.from({ length: petalCount }, (_, index) => {
        const rotate = Math.round(seeded(index, seed + 4) * 360);
        return {
          left: `${seeded(index, seed) * 100}%`,
          delay: `${seeded(index, seed + 1) * 6}s`,
          duration: `${10 + seeded(index, seed + 2) * 8}s`,
          swayX: `${-35 + seeded(index, seed + 3) * 70}px`,
          rotateEnd: `${rotate}deg`,
          rotateMid: `${Math.round(rotate * 0.5)}deg`,
          size: 12 + seeded(index, seed + 5) * 14,
          isSymbol: index % 3 === 0,
          symbol: PETAL_SYMBOLS[index % PETAL_SYMBOLS.length],
          color:
            (variant === "light" ? PETAL_COLORS_LIGHT : PETAL_COLORS_DARK)[index % 4],
        };
      }),
    [petalCount, seed, variant]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]" aria-hidden="true">
      {petals.map((petal, index) =>
        petal.isSymbol ? (
          <span
            key={index}
            className={`section-petal ${variant === "dark" ? "section-petal-dark" : "section-petal-light"}`}
            style={{
              left: petal.left,
              fontSize: `${petal.size}px`,
              animationDuration: petal.duration,
              animationDelay: petal.delay,
              ["--sway-x" as string]: petal.swayX,
              ["--rotate-end" as string]: petal.rotateEnd,
              ["--rotate-mid" as string]: petal.rotateMid,
            }}
          >
            {petal.symbol}
          </span>
        ) : (
          <span
            key={index}
            className={`section-petal-leaf ${variant === "dark" ? "section-petal-leaf-dark" : "section-petal-leaf-light"}`}
            style={{
              left: petal.left,
              width: `${petal.size * 0.9}px`,
              height: `${petal.size * 1.2}px`,
              background: `linear-gradient(145deg, ${petal.color} 0%, ${petal.color}88 45%, transparent 90%)`,
              animationDuration: petal.duration,
              animationDelay: petal.delay,
              ["--sway-x" as string]: petal.swayX,
              ["--rotate-end" as string]: petal.rotateEnd,
              ["--rotate-mid" as string]: petal.rotateMid,
            }}
          />
        )
      )}
    </div>
  );
}
