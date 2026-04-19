"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    YT: {
      Player: new (
        el: HTMLElement,
        options: {
          videoId: string;
          events: {
            onReady: (e: {
              target: {
                getDuration: () => number;
                getVideoData: () => { title: string };
              };
            }) => void;
          };
          playerVars: Record<string, number>;
        }
      ) => void;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export interface VideoMeta {
  duration?: string;
  title?: string;
}

export function useYoutubeMeta(ids: string[]): Record<string, VideoMeta> {
  const [meta, setMeta] = useState<Record<string, VideoMeta>>({});

  useEffect(() => {
    if (!ids.length) return;

    const container = document.createElement("div");
    container.style.cssText = "position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;";
    document.body.appendChild(container);

    const initPlayers = () => {
      ids.forEach((id) => {
        const el = document.createElement("div");
        container.appendChild(el);

        new window.YT.Player(el, {
          videoId: id,
          playerVars: { autoplay: 0 },
          events: {
            onReady: (e) => {
              const dur = e.target.getDuration();
              const data = e.target.getVideoData();
              setMeta((prev) => ({
                ...prev,
                [id]: {
                  duration: dur > 0 ? formatDuration(dur) : undefined,
                  title: data?.title || undefined,
                },
              }));
            },
          },
        });
      });
    };

    if (window.YT?.Player) {
      initPlayers();
    } else {
      window.onYouTubeIframeAPIReady = initPlayers;

      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);
      }
    }

    return () => {
      document.body.removeChild(container);
    };
  }, [ids.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps

  return meta;
}
