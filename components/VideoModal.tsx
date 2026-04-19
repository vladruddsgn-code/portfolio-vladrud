"use client";

import { useEffect } from "react";

interface VideoModalProps {
  youtubeId: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({ youtubeId, title, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase z-10"
        onClick={onClose}
      >
        Close ✕
      </button>

      {/* Title */}
      <span className="absolute top-6 left-8 text-white/40 text-xs tracking-[0.2em] uppercase">
        {title}
      </span>

      {/* YouTube embed */}
      <div
        className="w-[90vw] max-w-5xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
