'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Vision', href: '/mission' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Volunteers', href: '/volunteers' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white/95 backdrop-blur-sm py-5 border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 relative z-50">
          <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center font-montserrat text-lg text-white font-bold">
            CJP
          </div>
          <div className="flex flex-col">
            <span className="font-montserrat font-bold text-xl tracking-tight leading-none text-brand-black">
              Cockroach Janata Party
            </span>
            <span className="text-[9px] uppercase tracking-wider text-brand-red font-semibold hidden md:block mt-[2px]">
              India First • Youth First
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isActive ? 'text-brand-red font-semibold' : 'text-gray-600 hover:text-brand-red'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="https://forms.gle/ukc43h4upr7PhN2d6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-2.5 rounded font-semibold text-sm transition-all shadow-sm"
          >
            Join The Movement
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 text-brand-black p-2 hover:bg-gray-50 rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-6 gap-4 z-40 lg:hidden"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-montserrat text-lg font-medium transition-colors w-full text-center py-2 ${isActive ? 'text-brand-red' : 'text-gray-700 hover:text-brand-red bg-gray-50'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="w-full px-6 pt-4">
                <a
                  href="https://forms.gle/ukc43h4upr7PhN2d6"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-brand-red text-white py-3 rounded font-semibold transition-all"
                >
                  Join The Movement
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
