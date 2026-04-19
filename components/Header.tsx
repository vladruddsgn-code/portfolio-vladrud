"use client";

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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      <span className="text-xs tracking-[0.2em] text-white/40 uppercase font-light">
        Vladislav Rudnitskiy
      </span>

      <nav className="flex items-center gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
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
    </header>
  );
}
