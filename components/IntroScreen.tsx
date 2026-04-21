"use client";

import { useState } from "react";
import { Specialization } from "./PortfolioPage";

const options: { id: Specialization; label: string; sub: string }[] = [
  { id: "ai-artist",        label: "AI Filmmaker",      sub: "Generative worlds & visual AI" },
  { id: "video-production", label: "Video Production",  sub: "Real moments, sharp eye" },
  { id: "design-direction", label: "Design Direction",  sub: "Shaping vision, guiding craft" },
  { id: "video-editor",     label: "Video Editor",      sub: "Rhythm. Pacing. Meaning." },
];

interface IntroScreenProps {
  onSelect: (s: Specialization) => void;
}

export default function IntroScreen({ onSelect }: IntroScreenProps) {
  const [hovered, setHovered] = useState<Specialization | null>(null);
  const [leaving, setLeaving] = useState(false);

  const handleSelect = (id: Specialization) => {
    setLeaving(true);
    setTimeout(() => onSelect(id), 600);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col justify-between px-6 md:px-8 py-8 md:py-10 transition-opacity duration-600 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: "600ms" }}
    >
      {/* Top */}
      <div className="flex justify-between items-center">
        <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-light">
          Vladislav Rudnitskiy
        </span>
        <span className="text-xs tracking-[0.2em] uppercase text-white/20">
          Portfolio
        </span>
      </div>

      {/* Center — вибір */}
      <div className="flex flex-col gap-0 w-full max-w-4xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-8 md:mb-10">
          Select specialization
        </p>
        {options.map((opt, i) => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt.id)}
            onMouseEnter={() => setHovered(opt.id)}
            onMouseLeave={() => setHovered(null)}
            className={`group w-full flex items-baseline justify-between py-5 md:py-6 border-t border-white/8 last:border-b transition-all duration-300 text-left ${
              hovered && hovered !== opt.id ? "opacity-25" : "opacity-100"
            }`}
          >
            <div className="flex items-baseline gap-5 md:gap-8">
              <span className="text-[10px] text-white/20 tracking-widest w-5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-3xl md:text-5xl font-light tracking-tight transition-colors duration-300 ${
                  hovered === opt.id ? "text-white" : "text-white/70"
                }`}
              >
                {opt.label}
              </span>
            </div>
            <span
              className={`hidden md:block text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                hovered === opt.id ? "text-white/50 translate-x-0" : "text-white/0 translate-x-2"
              }`}
            >
              {opt.sub}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom */}
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/15">
          Designer & Filmmaker
        </p>
      </div>
    </div>
  );
}
