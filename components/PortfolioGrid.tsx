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

// Design Direction items (image + optional Figma links)
type DesignItem = { id: number; title: string; image: string; figmaUrl?: string; protoUrl?: string };

const videoItems: Record<Exclude<Specialization, "design-direction">, VideoItem[]> = {
  "ai-artist": [
    { id: 1, title: "AI Film 01", youtubeId: "DHgKvHn3k_Y" },
    { id: 2, title: "AI Film 02", youtubeId: "Xp2o1ESWm58" },
    { id: 3, title: "AI Film 03", youtubeId: "xqx9JyjktIo" },
    { id: 4, title: "AI Film 04", youtubeId: "RWPzi78PJ3M" },
    { id: 5, title: "AI Film 05", youtubeId: "TnS2xhRhKsc" },
    { id: 6, title: "AI Film 06", youtubeId: "X6UKG5q_kQM" },
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

const designItems: DesignItem[] = [
  {
    id: 1,
    title: "Site Graffitone",
    image: "/portfolio/design-direction/graffitone.jpg",
    figmaUrl: "https://www.figma.com/design/qloilFTlahewSEfyjbiymO/Site-Graffitone?node-id=0-1",
    protoUrl: "https://www.figma.com/proto/qloilFTlahewSEfyjbiymO/Site-Graffitone?node-id=1-2&scaling=scale-down-width&content-scaling=fixed",
  },
  {
    id: 3,
    title: "Взаємо.ua",
    image: "/portfolio/design-direction/Desktop 1920.jpg",
    figmaUrl: "https://www.figma.com/design/d0UHGXYgOqWCqMl592DNNZ/%D0%92%D0%B7%D0%B0%D1%94%D0%BC%D0%BE.ua?node-id=1-985",
    protoUrl: "https://www.figma.com/proto/d0UHGXYgOqWCqMl592DNNZ/%D0%92%D0%B7%D0%B0%D1%94%D0%BC%D0%BE.ua?page-id=0%3A1&node-id=1-533&viewport=-3022%2C-1621%2C0.75&t=Dj2VWEtMGahWRrwk-1&scaling=scale-down-width&content-scaling=fixed",
  },
  {
    id: 2,
    title: 'Site "Go" Тури',
    image: "/portfolio/design-direction/Slide 16_9 - 1080.jpg",
    figmaUrl: "https://www.figma.com/design/wHCVELNUZbEMRPyFzvKjv2/Site-%22Go%22-%D0%A2%D1%83%D1%80%D0%B8?node-id=0-1",
    protoUrl: "https://www.figma.com/proto/wHCVELNUZbEMRPyFzvKjv2/Site-%22Go%22-%D0%A2%D1%83%D1%80%D0%B8?page-id=0%3A1&node-id=1-649&viewport=-1174%2C202%2C0.39&t=nY2R3yNecMof1dYv-1&scaling=scale-down-width&content-scaling=fixed",
  },
  {
    id: 4,
    title: "Site Зачаїлися",
    image: "/portfolio/design-direction/Site зачаїлися.jpg",
  },
  {
    id: 5,
    title: "Smoki Portfolio",
    image: "/portfolio/design-direction/Smoki Portfolio.jpg",
  },
  {
    id: 6,
    title: "Lovito",
    image: "/portfolio/design-direction/Lovito.jpg",
  },
];

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

// --- Design Direction Item Component ---
function DesignItemCard({ title, image, figmaUrl, protoUrl, onImageClick }: DesignItem & { onImageClick: () => void }) {
  const hasFigma = !!figmaUrl;

  return (
    <div className="group relative aspect-video bg-zinc-950 overflow-hidden cursor-pointer" onClick={!hasFigma ? onImageClick : undefined}>
      {/* Image with scroll effect on hover */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full object-cover object-top transition-all duration-[3000ms] ease-in-out group-hover:object-bottom"
          style={{ height: "100%", minHeight: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/65 transition-colors duration-500" />

      {/* Buttons on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {hasFigma ? (
          <>
            <a
              href={figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-5 py-2 border border-white/60 text-white text-xs tracking-[0.15em] uppercase hover:border-white hover:bg-white/10 transition-colors duration-200 w-48 text-center"
            >
              Open in Figma
            </a>
            <a
              href={protoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-5 py-2 border border-white/60 text-white text-xs tracking-[0.15em] uppercase hover:border-white hover:bg-white/10 transition-colors duration-200 w-48 text-center"
            >
              View Design
            </a>
          </>
        ) : (
          <button
            onClick={onImageClick}
            className="px-5 py-2 border border-white/60 text-white text-xs tracking-[0.15em] uppercase hover:border-white hover:bg-white/10 transition-colors duration-200 w-48 text-center"
          >
            View Project
          </button>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-4 px-4">
        <span className="text-xs tracking-[0.15em] uppercase text-white font-light">{title}</span>
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
        alt=""
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

// --- Image Modal ---
function ImageModal({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-start justify-center overflow-y-auto py-16"
      onClick={onClose}
    >
      <button className="fixed top-6 right-6 text-white/40 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase z-10">
        Close ✕
      </button>
      <span className="fixed top-6 left-8 text-white/40 text-xs tracking-[0.2em] uppercase">{title}</span>
      <img
        src={src}
        alt={title}
        className="w-[85vw] max-w-5xl h-auto"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// --- Main Grid ---
interface PortfolioGridProps {
  active: Specialization;
}

export default function PortfolioGrid({ active }: PortfolioGridProps) {
  const [modal, setModal] = useState<{ youtubeId: string; title: string } | null>(null);
  const [imageModal, setImageModal] = useState<{ src: string; title: string } | null>(null);

  const isDesignDirection = active === "design-direction";
  const items = isDesignDirection ? [] : videoItems[active as Exclude<Specialization, "design-direction">];
  const allIds = useMemo(() => items.map((i) => i.youtubeId), [active]); // eslint-disable-line react-hooks/exhaustive-deps
  const meta = useYoutubeMeta(allIds);

  // Design Direction
  if (isDesignDirection) {
    if (designItems.length === 0) {
      return (
        <section className="relative bg-black px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.2em] uppercase text-white/20">Coming soon</p>
          </div>
        </section>
      );
    }
    return (
      <section className="relative bg-black px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-12">Selected Work</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {designItems.map((item) => (
              <DesignItemCard
                key={item.id}
                {...item}
                onImageClick={() => setImageModal({ src: item.image, title: item.title })}
              />
            ))}
          </div>
          {imageModal && (
            <ImageModal
              src={imageModal.src}
              title={imageModal.title}
              onClose={() => setImageModal(null)}
            />
          )}
        </div>
      </section>
    );
  }

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
      <section className="relative bg-black px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-12">Selected Work</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
        <section className="relative bg-black px-8 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="border-t border-white/5 pt-16 mb-12">
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
