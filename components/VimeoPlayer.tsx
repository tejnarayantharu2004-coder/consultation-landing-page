"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const VIMEO_ORIGIN = "https://player.vimeo.com";

export default function VimeoPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hidePauseTimer = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPause, setShowPause] = useState(false);

  const sendVimeoCommand = (
    method: string,
    value?: number | string | boolean
  ) => {
    iframeRef.current?.contentWindow?.postMessage(
      value === undefined ? { method } : { method, value },
      VIMEO_ORIGIN
    );
  };

  const clearPauseTimer = () => {
    if (hidePauseTimer.current) {
      window.clearTimeout(hidePauseTimer.current);
      hidePauseTimer.current = null;
    }
  };

  const playVideo = () => {
    clearPauseTimer();
    sendVimeoCommand("setVolume", 1);
    sendVimeoCommand("setMuted", false);
    sendVimeoCommand("play");
    setIsPlaying(true);
    setShowPause(false);
  };

  const pauseVideo = () => {
    clearPauseTimer();
    sendVimeoCommand("pause");
    setIsPlaying(false);
    setShowPause(false);
  };

  const revealPauseButton = () => {
    if (!isPlaying) {
      return;
    }

    setShowPause(true);
    clearPauseTimer();
    hidePauseTimer.current = window.setTimeout(() => {
      setShowPause(false);
    }, 2200);
  };

  useEffect(() => {
    return clearPauseTimer;
  }, []);

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-md border border-gold-100 bg-ink shadow-soft"
      onClick={revealPauseButton}
      onMouseMove={revealPauseButton}
    >
      <iframe
        ref={iframeRef}
        id="consultation-vimeo-player"
        src="https://player.vimeo.com/video/1194918352?fl=ip&fe=ec&background=1&autoplay=0&muted=0&loop=0&controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&keyboard=0&pip=0&dnt=1&api=1&player_id=consultation-vimeo-player"
        title="Consultation next steps video"
        allow="autoplay; fullscreen; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="h-full w-full pointer-events-none"
        allowFullScreen
      />

      {!isPlaying ? (
        <button
          type="button"
          onClick={playVideo}
          className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft transition hover:scale-105 hover:bg-gold-50 focus:outline-none focus:ring-4 focus:ring-gold-200 sm:h-20 sm:w-20"
          aria-label="Play video"
        >
          <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
        </button>
      ) : null}

      {isPlaying && showPause ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            pauseVideo();
          }}
          className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft transition hover:scale-105 hover:bg-gold-50 focus:outline-none focus:ring-4 focus:ring-gold-200 sm:h-20 sm:w-20"
          aria-label="Pause video"
        >
          <Pause className="h-8 w-8 fill-current" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
