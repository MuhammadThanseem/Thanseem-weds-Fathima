"use client";

import { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function MusicPlayer() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const music = new Audio("/music/background.mp3");
    music.loop = true;

    setAudio(music);

    return () => {
      music.pause();
    };
  }, []);

  const toggleMusic = async () => {
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg btn-modern"
    >
      {playing ? <FaPause /> : <FaPlay />}
    </button>
  );
}