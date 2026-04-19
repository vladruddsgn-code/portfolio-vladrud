"use client";

import { useState } from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import PortfolioGrid from "./PortfolioGrid";
import ContactSection from "./ContactSection";

export type Specialization = "ai-artist" | "video-editor" | "design-direction" | "video-production";

export default function PortfolioPage() {
  const [active, setActive] = useState<Specialization>("ai-artist");

  return (
    <main className="relative min-h-screen bg-black">
      <HeroSection active={active} />
      <Header active={active} setActive={setActive} />
      <PortfolioGrid active={active} />
      <ContactSection />
    </main>
  );
}
