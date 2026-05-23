'use client';

import { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function ScrollVideo({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted, but we might fail autoplay

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().then(() => setIsPlaying(true)).catch(() => {
              // Autoplay failed (likely due to not being muted or user not interacting yet)
              setIsPlaying(false);
            });
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-brand-black w-full flex justify-center" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full max-h-[80vh] object-contain"
        loop
        playsInline
      />
      <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <button className="bg-white/90 hover:bg-white text-brand-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105">
          {isPlaying ? <Pause className="fill-current" /> : <Play className="fill-current ml-1" />}
        </button>
      </div>
      <div className={`absolute bottom-4 right-4 z-10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <button 
          onClick={toggleMute}
          className="bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
}
