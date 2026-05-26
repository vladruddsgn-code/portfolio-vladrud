"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Specialization } from "./PortfolioPage";
import VideoModal from "./VideoModal";
import { useYoutubeMeta } from "@/hooks/useYoutubeDurations";

// Video items (YouTube)
type VideoItem = { id: number; title: string; youtubeId: string };

const bigScreenItems = [
  { id: 1, youtubeId: "QKa3xdeh2Ps" },
  { id: 2, youtubeId: "9exPPJQuPIU" },
  { id: 3, youtubeId: "PFG4LL_MGjQ" },
  { id: 4, youtubeId: "FECC93eG-Pk" },
  { id: 5, youtubeId: "WTJDKhalhGY" },
];

const videoItems: Record<Specialization, VideoItem[]> = {
  "ai-artist": [
    { id: 1, title: "AI Film 01", youtubeId: "DHgKvHn3k_Y" },
    { id: 2, title: "AI Film 02", youtubeId: "Xp2o1ESWm58" },
    { id: 3, title: "AI Film 03", youtubeId: "xqx9JyjktIo" },
    { id: 4, title: "AI Film 04", youtubeId: "RWPzi78PJ3M" },
    { id: 5, title: "AI Film 05", youtubeId: "TnS2xhRhKsc" },
    { id: 6, title: "AI Film 06", youtubeId: "X6UKG5q_kQM" },
    { id: 7, title: "AI Film 07", youtubeId: "Z1MpbijV-Cg" },
    { id: 8, title: "AI Film 08", youtubeId: "I4k6bC7w78Q" },
  ],
  "video-editor": [
    { id: 1, title: "Edit 01", youtubeId: "0Qv_Zl8IiqM" },
    { id: 2, title: "Edit 02", youtubeId: "Q3qeBG8rNsg" },
    { id: 3, title: "Edit 03", youtubeId: "pVIeMMCIsJo" },
    { id: 4, title: "Edit 04", youtubeId: "1yniWMtigzA" },
    { id: 5, title: "Edit 05", youtubeId: "SjwElknQ9d4" },
    { id: 6, title: "Edit 06", youtubeId: "CUeI6kKoxSQ" },
    { id: 7, title: "Edit 07", youtubeId: "ADJCo_KKfVs" },
    { id: 8, title: "Edit 08", youtubeId: "6ki023p1i1k" },
    { id: 9, title: "Edit 09", youtubeId: "Bwu2xYMsK88" },
  ],
  "video-production": [
    { id: 1, title: "Film 01", youtubeId: "L08eMTzA7WA" },
    { id: 2, title: "Film 02", youtubeId: "INgBxJoIr30" },
    { id: 3, title: "Film 03", youtubeId: "dTsefmDCPbA" },
    { id: 4, title: "Film 04", youtubeId: "-58Qx0reuUE" },
    { id: 5, title: "Film 05", youtubeId: "3LZi9eYOKS0" },
    { id: 6, title: "Film 06", youtubeId: "Cf8_gHd633M" },
    { id: 7, title: "Film 07", youtubeId: "echBGs8c5iQ" },
    { id: 8, title: "Film 08", youtubeId: "_6v7eZsxEOs" },
    { id: 9, title: "Film 09", youtubeId: "-gXsGbXvTgg" },
    { id: 10, title: "Film 10", youtubeId: "tZRC2GAMgiM" },
    { id: 11, title: "Film 11", youtubeId: "W8TaPoNMFrY" },
    { id: 12, title: "Film 12", youtubeId: "fLCNg4hg77Q" },
    { id: 13, title: "Film 13", youtubeId: "cjcvnx55UKQ" },
    { id: 14, title: "Film 14", youtubeId: "FZkXWQy2uKk" },
    { id: 15, title: "Film 15", youtubeId: "fOSLIVgpRxY" },
    { id: 16, title: "Film 16", youtubeId: "h55MS3_cprk" },
    { id: 17, title: "Film 17", youtubeId: "W1AdnxKVdlg" },
    { id: 18, title: "Film 18", youtubeId: "M9ifJcmgpJc" },
    { id: 19, title: "Film 19", youtubeId: "KhXtpUQ_tSY" },
    { id: 20, title: "Film 20", youtubeId: "COVK5hYP0S8" },
    { id: 21, title: "Film 21", youtubeId: "x5TVC30qeaw" },
    { id: 22, title: "Film 22", youtubeId: "Pl4h9LtkP6s" },
  ],
};

// --- Video Item Component ---
function VideoItem({
  title,
  youtubeId,
  duration,
  onClick,
}: {
  title: string;
  youtubeId: string;
  duration?: string;
  onClick: () => void;
}) {
  const thumb = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div
      className="group relative aspect-video bg-zinc-950 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={thumb}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-1" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-4 px-4 flex items-end justify-between">
        <span className="text-xs tracking-[0.15em] uppercase text-white font-light">{title}</span>
        {duration && <span className="text-xs text-white/60 font-light tabular-nums">{duration}</span>}
      </div>
    </div>
  );
}

// --- Vertical (Shorts) Item ---
function ShortsItem({ youtubeId, onClick }: { youtubeId: string; onClick: () => void }) {
  const thumb = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  return (
    <div
      className="group relative bg-zinc-950 overflow-hidden cursor-pointer"
      style={{ aspectRatio: "9/16" }}
      onClick={onClick}
    >
      <Image
        src={thumb}
        alt="On The Big Screen video thumbnail"
        fill
        className="object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-1" />
        </div>
      </div>
    </div>
  );
}

// --- Main Grid ---
interface PortfolioGridProps {
  active: Specialization;
}

export default function PortfolioGrid({ active }: PortfolioGridProps) {
  const [modal, setModal] = useState<{ youtubeId: string; title: string } | null>(null);

  const items = videoItems[active];
  const allIds = useMemo(() => items.map((i) => i.youtubeId), [items]);
  const meta = useYoutubeMeta(allIds);

  // Video sections
  if (items.length === 0) {
    return (
      <section className="relative bg-black px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-white/20">Coming soon</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative bg-black px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-8 md:mb-12">Selected Work</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {items.map((item) => (
              <VideoItem
                key={item.id}
                title={meta[item.youtubeId]?.title || item.title}
                youtubeId={item.youtubeId}
                duration={meta[item.youtubeId]?.duration}
                onClick={() => setModal({ youtubeId: item.youtubeId, title: meta[item.youtubeId]?.title || item.title })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* On The Big Screen — тільки для Videography */}
      {active === "video-production" && (
        <section className="relative bg-black px-4 md:px-8 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="border-t border-white/5 pt-12 md:pt-16 mb-8 md:mb-12">
              <p className="text-xs tracking-[0.2em] uppercase text-white/30">On The Big Screen</p>
              <p className="text-white/20 text-xs mt-2">Works featured on city LED screens</p>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {bigScreenItems.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-48">
                  <ShortsItem
                    youtubeId={item.youtubeId}
                    onClick={() => setModal({ youtubeId: item.youtubeId, title: "On The Big Screen" })}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {modal && (
        <VideoModal
          youtubeId={modal.youtubeId}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
