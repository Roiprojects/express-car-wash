'use client';

import React from 'react';
import Link from 'next/link';
import { X, Phone, MessageSquare, Calendar, ChevronRight, ShieldCheck, Clock } from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
  onOpenBooking: () => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
  navLinks,
  onOpenBooking,
}: MobileNavigationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#202C2C]/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FFF9EF] border-l border-[#DDD6CB] p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#DDD6CB]">
            <div onClick={onClose}>
              <BrandLogo size="sm" href="/" />
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] hover:text-[#087F75] transition-colors shadow-sm"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm text-[#202C2C] hover:text-[#087F75] hover:bg-[#F5EBDD] transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#52615E]" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Actions & Info */}
        <div className="pt-6 border-t border-[#DDD6CB] space-y-4">
          <button
            onClick={onOpenBooking}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#087F75] hover:bg-[#06665F] text-white font-bold text-sm tracking-wide shadow-md shadow-[#087F75]/20 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Wash / Spa</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={generateQuickWhatsAppUrl('Mobile menu booking enquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-white border border-[#DDD6CB] text-[#202C2C] text-xs font-semibold hover:border-[#087F75]/50 hover:text-[#087F75] transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#087F75]" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:7022338693"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-white border border-[#DDD6CB] text-[#202C2C] text-xs font-semibold hover:border-[#087F75]/50 hover:text-[#087F75] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#087F75]" />
              <span>Call Us</span>
            </a>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] space-y-2 text-xs text-[#445452]">
            <div className="flex items-center gap-2 text-[#202C2C] font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#087F75] flex-shrink-0" />
              <span>Open Daily: 8:00 AM – 8:30 PM</span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#087F75] flex-shrink-0 mt-0.5" />
              <span>Advertised 45m+ precision wash. 3 Branches across Bengaluru.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
