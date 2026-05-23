'use client';

import { useRef, useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export function ScrollVideo({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of the video is visible
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

  return (
    <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-brand-black w-full aspect-video flex justify-center" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        loop
        muted // Muted is required for autoplay in modern browsers
        playsInline
      />
      <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <button className="bg-white/90 hover:bg-white text-brand-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105">
          {isPlaying ? <Pause className="fill-current" /> : <Play className="fill-current ml-1" />}
        </button>
      </div>
    </div>
  );
}
