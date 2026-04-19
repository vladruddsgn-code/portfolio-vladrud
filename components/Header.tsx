"use client";

import { useState } from "react";
import { Specialization } from "./PortfolioPage";

const tabs: { id: Specialization; label: string }[] = [
  { id: "ai-artist", label: "AI Filmmaker" },
  { id: "video-production", label: "Video Production" },
  { id: "design-direction", label: "Design Direction" },
  { id: "video-editor", label: "Video Editor" },
];

interface HeaderProps {
  active: Specialization;
  setActive: (s: Specialization) => void;
}

export default function Header({ active, setActive }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (id: Specialization) => {
    setActive(id);
    setMenuOpen(false);
  };

  const activeLabel = tabs.find((t) => t.id === active)?.label;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 md:py-6">
        <span className="text-xs tracking-[0.2em] text-white/40 uppercase font-light">
          Vladislav Rudnitskiy
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleSelect(tab.id)}
              className={`
                px-4 py-2 text-xs tracking-[0.12em] uppercase transition-all duration-300 rounded-full
                ${active === tab.id
                  ? "text-white bg-white/10"
                  : "text-white/40 hover:text-white/70"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Mobile — активна таба + бургер */}
        <div className="flex md:hidden items-center gap-3">
          <span className="text-xs tracking-[0.12em] uppercase text-white/60">
            {activeLabel}
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1"
          >
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-6 md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleSelect(tab.id)}
              className={`text-2xl font-light tracking-wide transition-colors duration-200 ${
                active === tab.id ? "text-white" : "text-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
