"use client";

import { useEffect, useRef } from "react";
import { Specialization } from "./PortfolioPage";

const videos: Record<Specialization, string> = {
  "ai-artist": "/videos/hero-ai.mp4",
  "video-editor": "/videos/hero-ed.mp4",
  "design-direction": "/videos/Design Port.mp4",
  "video-production": "/videos/hero-vd.mp4",
};

const headlines: Record<Specialization, { title: string; sub: string }> = {
  "ai-artist": { title: "AI Filmmaker", sub: "Generating worlds that don't exist yet" },
  "video-editor": { title: "Video Editor", sub: "Rhythm. Pacing. Meaning." },
  "design-direction": { title: "Design Direction", sub: "Shaping vision, guiding craft" },
  "video-production": { title: "Video Production", sub: "Real moments, sharp eye" },
};

interface HeroSectionProps {
  active: Specialization;
}

export default function HeroSection({ active }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [active]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        key={active}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videos[active]} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

      {/* Text */}
      <div className="absolute bottom-12 md:bottom-16 left-6 md:left-8 right-6 md:right-8">
        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/40 mb-2 md:mb-3 transition-all duration-500">
          {headlines[active].sub}
        </p>
        <h1 className="text-4xl md:text-8xl font-light tracking-tight text-white leading-none transition-all duration-500">
          {headlines[active].title}
        </h1>
      </div>

      {/* Scroll hint — тільки десктоп */}
      <div className="hidden md:flex absolute bottom-8 right-8 flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 rotate-90 origin-center">
          scroll
        </span>
      </div>
    </section>
  );
}
