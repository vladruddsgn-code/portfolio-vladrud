"use client";

import { useState } from "react";
import { Specialization } from "./PortfolioPage";

const tabs: { id: Specialization; label: string }[] = [
  { id: "ai-artist", label: "AI Filmmaker" },
  { id: "video-production", label: "Video Production" },
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

  return (
    <>
      <header className="fixed top-4 left-4 right-4 md:top-5 md:left-10 md:right-10 z-50">
        <div className="h-11 md:h-12 px-4 md:px-5 rounded-xl bg-black/55 border border-white/10 backdrop-blur-md shadow-[0_14px_36px_rgba(0,0,0,0.22)] flex items-center justify-between">
          <span className="min-w-0 text-base md:text-lg tracking-[-0.03em] text-white font-semibold">
            Vlad Rudnitskyi
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-16 absolute left-1/2 -translate-x-1/2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleSelect(tab.id)}
                className={`
                  text-[13px] font-bold tracking-[-0.02em] transition-all duration-300
                  ${active === tab.id
                    ? "text-white"
                    : "text-white/58 hover:text-white"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-lg bg-white px-5 text-[13px] font-bold tracking-[-0.02em] text-black/80 transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
          >
            Contact
          </a>

          {/* Mobile — активна таба + бургер */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-6 md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleSelect(tab.id)}
              className={`text-2xl font-bold tracking-[-0.02em] transition-colors duration-200 ${
                active === tab.id ? "text-white" : "text-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-xl bg-white px-7 py-3 text-sm font-bold tracking-[-0.02em] text-black/80 transition-all duration-200 active:scale-[0.98]"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}
