"use client";

import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const MUSIC_SRC = "/music/background.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);

  const toggleMusic = async () => {
    if (available === false) return;

    if (!audioRef.current) {
      const music = new Audio(MUSIC_SRC);
      music.loop = true;

      const canPlay = await new Promise<boolean>((resolve) => {
        music.addEventListener("canplaythrough", () => resolve(true), { once: true });
        music.addEventListener("error", () => resolve(false), { once: true });
        music.load();
      });

      if (!canPlay) {
        setAvailable(false);
        return;
      }

      audioRef.current = music;
      setAvailable(true);
    }

    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {
      setAvailable(false);
      setPlaying(false);
    }
  };

  if (available === false) return null;

  return (
    <button
      onClick={toggleMusic}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg btn-modern transition-all"
      style={{
        background: "linear-gradient(135deg, var(--black), var(--black-muted))",
        color: "var(--beige)",
        border: "1px solid rgba(203,183,140,0.3)",
      }}
    >
      {playing ? <FaPause /> : <FaPlay />}
    </button>
  );
}
