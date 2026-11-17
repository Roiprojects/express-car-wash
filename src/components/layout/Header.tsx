'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BUSINESS_CONFIG } from '@/data/business';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import MobileNavigation from './MobileNavigation';

interface HeaderProps {
  onOpenBooking?: () => void;
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* 
        Dedicated Navbar Container in normal document flow.
        Sticky at top:0 with solid #13171D background and subtle #252B34 bottom border.
        Completely independent from the hero section.
      */}
      <header className="sticky top-0 z-50 w-full h-[64px] md:h-[80px] bg-[#13171D] border-b border-[#252B34] flex items-center shadow-lg shadow-black/25">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-accent flex items-center justify-center shadow-md shadow-accent/20 group-hover:scale-105 transition-transform duration-300">
                <span className="font-black text-white text-lg md:text-xl tracking-tighter">EX</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg md:text-xl tracking-tight text-white group-hover:text-accent transition-colors">
                    {BUSINESS_CONFIG.brandName}
                  </span>
                  <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 rounded-full bg-[#0C1016] text-accent font-bold border border-[#252B34]">
                    SPA & DETAIL
                  </span>
                </div>
                <span className="text-[10px] md:text-[11px] text-[#738CAC] tracking-wider uppercase font-medium">
                  Car & Bike Detailing
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#0C1016] border border-[#252B34] px-3.5 py-1.5 rounded-full shadow-inner">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-accent shadow-sm shadow-accent/30'
                        : 'text-[#738CAC] hover:text-white hover:bg-[#19212A]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Direct WhatsApp / Call / Book */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="flex items-center gap-2 text-xs font-semibold text-[#738CAC] hover:text-white px-3.5 py-2 md:py-2.5 rounded-xl border border-[#252B34] bg-[#0C1016] hover:bg-[#19212A] transition-colors"
                title="Call Workshop"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span className="hidden xl:inline">{BUSINESS_CONFIG.phone}</span>
                <span className="xl:hidden">Call</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 md:py-2.5 rounded-xl bg-accent text-white font-bold text-xs tracking-wider uppercase overflow-hidden shadow-md shadow-accent/25 hover:bg-accent-hover transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Wash</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3 py-1.5 rounded-xl bg-accent text-white font-bold text-xs tracking-wide shadow-sm"
              >
                Book
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-[#0C1016] border border-[#252B34] text-white hover:text-accent hover:border-accent transition-colors"
                aria-label="Toggle Mobile Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={NAV_LINKS}
        currentPath={pathname}
        onOpenBooking={() => {
          setIsMobileMenuOpen(false);
          if (onOpenBooking) onOpenBooking();
        }}
      />
    </>
  );
}
