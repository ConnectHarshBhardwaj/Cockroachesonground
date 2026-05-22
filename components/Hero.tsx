'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Flag, Users, Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-brand-black mb-6"
            >
              Cockroaches<br />
              <span className="text-brand-red">On Ground Now</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-montserrat text-lg md:text-xl font-semibold text-gray-700 mb-4 tracking-wide"
            >
              From Social Media Awareness To Ground-Level Public Movement
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-gray-600 mb-10 max-w-xl leading-relaxed"
            >
              Cockroach Janata Party (CJP) was first started as a digital public voice on social media. Now the time has come to bring this movement to the ground level and connect directly with the people of India. 
              <br/><br/>
              Social activist Shri Ravish Bhardwaj has taken the responsibility of building this movement on the ground by connecting youth, volunteers, and social workers who want real change through peaceful democratic participation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
            >
              <a
                href="https://forms.gle/ukc43h4upr7PhN2d6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-3.5 bg-brand-red hover:bg-brand-red/90 text-white font-semibold rounded transition-colors shadow-sm"
              >
                Join Movement
              </a>
              <Link
                href="/mission"
                className="inline-flex justify-center items-center px-8 py-3.5 bg-brand-lightgray hover:bg-gray-200 text-brand-black font-semibold rounded border border-gray-200 transition-colors"
              >
                Read Vision
              </Link>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
            >
              {[
                { icon: Scale, text: 'Constitution First' },
                { icon: ShieldCheck, text: 'Peaceful Movement' },
                { icon: Users, text: 'Youth Powered' },
                { icon: Flag, text: 'India First' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <item.icon size={16} className="text-brand-red" />
                  </div>
                  <span className="text-xs font-semibold text-brand-black transition-colors">{item.text}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Content / Image Area */}
          <div className="relative h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex items-center justify-center bg-brand-lightgray z-10 hidden md:flex">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 to-transparent z-10" />
             <Image 
                src="https://i.ibb.co/yn3mZGGh/Screenshot-2026-05-22-222857.png" 
                alt="Movement Volunteers"
                fill
                className="object-cover object-center mix-blend-multiply opacity-90"
                referrerPolicy="no-referrer"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent z-20 flex items-end p-8">
                 <div className="text-white">
                    <div className="font-montserrat font-bold text-2xl mb-1">Empowering Youth</div>
                    <div className="text-sm font-medium text-white/80">Ground-level participation for a stronger democracy</div>
                 </div>
              </div>
          </div>
          
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-lightgray -skew-x-12 translate-x-1/2 opacity-50 z-0"></div>
    </section>
  );
}
