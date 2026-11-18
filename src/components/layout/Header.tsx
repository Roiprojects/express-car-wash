'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ChevronDown, Sparkles, Car } from 'lucide-react';
import MobileNavigation from './MobileNavigation';

interface HeaderProps {
  onOpenBooking?: () => void;
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasDropdown: true },
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
        PREMIUM LIGHT-THEME HEADER
        Solid pure white background, subtle mint/slate border, soft elevation shadow.
        Completely separate container in normal flow above the hero.
      */}
      <header className="sticky top-0 z-50 w-full h-[72px] md:h-[80px] bg-white border-b border-[#E3EBE7] flex items-center shadow-[0_2px_14px_rgba(37,60,66,0.06)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Title */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 focus:outline-none rounded-xl"
            >
              {/* Teal Icon Badge */}
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-[#438E88] flex items-center justify-center shadow-md shadow-[#438E88]/25 group-hover:scale-105 group-hover:bg-[#32766F] transition-all duration-300">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base md:text-lg tracking-tight text-[#253C42] group-hover:text-[#438E88] transition-colors leading-tight">
                  Kousalya&apos;s Express Car Wash
                </span>
                <span className="text-[11px] md:text-xs text-[#62747A] tracking-wide font-medium">
                  Car, Bike, PPF &amp; Detailing
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-1 ${
                      isActive
                        ? 'bg-[#E4F2EF] text-[#438E88] font-bold shadow-sm'
                        : 'text-[#253C42] hover:text-[#438E88] hover:bg-[#F1F7F3]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 ${isActive ? 'text-[#438E88]' : 'text-[#62747A]'}`} />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: Phone Pill & Book Wash */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:7022338693"
                className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#253C42] hover:text-[#438E88] px-4 py-2 rounded-full border border-[#E3EBE7] bg-white hover:border-[#438E88]/40 hover:bg-[#F1F7F3] shadow-sm transition-all"
                title="Call Kousalya's Express Car Wash (+91 70223 38693)"
              >
                <Phone className="w-3.5 h-3.5 text-[#438E88]" />
                <span>+91 70223 38693</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#438E88] hover:bg-[#32766F] text-white font-bold text-xs md:text-sm tracking-wide shadow-md shadow-[#438E88]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Wash</span>
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3.5 py-1.5 rounded-full bg-[#438E88] text-white font-bold text-xs shadow-sm"
              >
                Book
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-[#F1F7F3] border border-[#E3EBE7] text-[#253C42] hover:text-[#438E88] hover:border-[#438E88]/40 transition-colors"
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
