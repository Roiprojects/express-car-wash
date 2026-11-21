'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ChevronDown, Car } from 'lucide-react';
import MobileNavigation from './MobileNavigation';
import { BUSINESS_CONFIG } from '@/data/business';
import BrandLogo from '@/components/ui/BrandLogo';

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
        WARM CREAM THEME NAVIGATION BAR
        Background: #FFF9EF, Border: #DDD6CB, Text: #202C2C, Accent: #087F75
      */}
      <header className="sticky top-0 z-50 w-full h-[64px] sm:h-[70px] lg:h-[78px] bg-[#FFF9EF] border-b border-[#DDD6CB] flex items-center shadow-[0_2px_12px_rgba(32,44,44,0.04)]">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-3 xl:gap-6 flex-nowrap">
            {/* Brand Logo & Title with HD Logo */}
            <BrandLogo size="md" animate />

            {/* Desktop Navigation Links - High Contrast & 15px readable text */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#F5EBDD] text-[#087F75] font-bold shadow-sm'
                        : 'text-[#202C2C] hover:text-[#087F75] hover:bg-[#F5EBDD]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 ${isActive ? 'text-[#087F75]' : 'text-[#52615E]'}`} />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: Phone Pill & Book Wash */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href="tel:7022338693"
                className="hidden xl:flex items-center gap-2 text-xs xl:text-sm font-semibold text-[#202C2C] hover:text-[#087F75] px-3.5 py-2 rounded-full border border-[#DDD6CB] bg-white hover:border-[#087F75]/50 hover:bg-[#F5EBDD] shadow-sm transition-all whitespace-nowrap"
                title={`Call ${BUSINESS_CONFIG.brandName} (${BUSINESS_CONFIG.phoneFormatted})`}
              >
                <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#087F75]" />
                <span>+91 70223 38693</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-[#087F75] hover:bg-[#06665F] text-white font-bold text-xs xl:text-sm tracking-wide shadow-md shadow-[#087F75]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                <span>Book Wash</span>
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3.5 py-2 min-h-[40px] rounded-full bg-[#087F75] text-white font-bold text-xs shadow-sm hover:bg-[#06665F] active:scale-95 transition-all flex items-center justify-center"
              >
                Book
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-11 h-11 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] hover:text-[#087F75] hover:border-[#087F75]/40 transition-colors shadow-sm flex items-center justify-center active:scale-95"
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
        onOpenBooking={() => {
          setIsMobileMenuOpen(false);
          onOpenBooking?.();
        }}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
