'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-lightgray pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div className="lg:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center font-montserrat text-lg text-white font-bold">
                  CJP
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat font-bold text-lg leading-tight text-brand-black">
                    Cockroach Janata Party
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                A peaceful democratic public movement that supports constitutional values, youth participation, and genuine public leadership.
              </p>
              
              <div className="flex gap-4">
                <a href="https://instagram.com/cockroachjanataparty.2026" className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors text-gray-600">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors text-gray-600">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors text-gray-600">
                  <Twitter size={18} />
                </a>
              </div>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-lg text-brand-black mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About CJP', href: '/about' },
                { name: 'Leadership', href: '/leadership' },
                { name: 'Mission & Vision', href: '/mission' },
                { name: 'Volunteers', href: '/volunteers' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-brand-red font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-lg text-brand-black mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Phone size={18} className="text-brand-red shrink-0 mt-0.5" />
                <a href="tel:+919899868777" className="hover:text-brand-black transition-colors">+91 98998 68777</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Mail size={18} className="text-brand-red shrink-0 mt-0.5" />
                <a href="mailto:info@cjp.org.in" className="hover:text-brand-black transition-colors">contact@cjp.org.in</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
                <span>Delhi Dehat, National Capital Region, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-lg text-brand-black mb-6">Join Us</h4>
            <p className="text-sm text-gray-600 mb-4">Be a part of a peaceful constitutional movement for change.</p>
            <a 
              href="https://forms.gle/ukc43h4upr7PhN2d6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-red hover:bg-brand-red/90 text-white px-6 py-3 rounded font-semibold text-sm transition-all text-center w-full shadow-sm"
            >
              Become A Volunteer
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Cockroach Janata Party (CJP). All Rights Reserved. Created by hbworksindia[8510823577)
          </p>
          <div className="flex items-center gap-2 text-xs text-brand-red font-medium">
             Cockroach Janata Party (CJP) is a peaceful public movement that supports constitutional and democratic participation.
          </div>
        </div>
      </div>
    </footer>
  );
}
