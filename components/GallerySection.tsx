'use client';

import Image from 'next/image';
import { ScrollVideo } from './ScrollVideo';

const PHOTOS = [
  'https://i.ibb.co/7JD8bJWb/Screenshot-2026-05-23-100833.png',
  'https://i.ibb.co/VcvLLWFq/Screenshot-2026-05-23-100930.png',
  'https://i.ibb.co/Kjm5dKB5/Screenshot-2026-05-23-101019.png',
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-brand-lightgray border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2 block">Moments on Ground</span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-black mb-6">
            Event Gallery
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Main Video Section */}
          <div className="lg:col-span-2">
            {/* Replace /cjp-party-video.mp4 with the actual video uploaded to /public */}
            <ScrollVideo src="/cjp-party-video.mp4" />
            <div className="mt-4 px-2">
              <h3 className="font-montserrat font-bold text-brand-black text-lg">Youth Participation Drive</h3>
              <p className="text-sm text-gray-500">Auto-playing video highlights from our recent events.</p>
            </div>
          </div>
          
          {/* Side Photo */}
          <div className="flex flex-col gap-6 h-full">
            <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white">
              <Image src={PHOTOS[0]} alt="Event Photo" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
            </div>
          </div>
        </div>
        
        {/* Bottom Photos Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PHOTOS.slice(1, 3).map((src, idx) => (
            <div key={idx} className="relative w-full h-[340px] md:h-[400px] rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white">
              <Image src={src} alt="Event Photo" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

