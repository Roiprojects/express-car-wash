'use client';

import React from 'react';
import Link from 'next/link';
import { X, Phone, MessageSquare, Calendar, ChevronRight, ShieldCheck, Clock, Car } from 'lucide-react';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  currentPath: string;
  onOpenBooking: () => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
  links,
  currentPath,
  onOpenBooking,
}: MobileNavigationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#253C42]/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white border-l border-[#E3EBE7] p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#E3EBE7]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#438E88] flex items-center justify-center text-white shadow-sm">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-serif font-bold text-[#253C42] text-base tracking-tight block">
                  Kousalya&apos;s
                </span>
                <span className="text-[10px] text-[#62747A] uppercase tracking-wider block font-medium">
                  Car, Bike, PPF &amp; Detailing
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#F1F7F3] border border-[#E3EBE7] text-[#62747A] hover:text-[#253C42] transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 flex flex-col gap-1.5">
            {links.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                    isActive
                      ? 'bg-[#E4F2EF] text-[#438E88] shadow-sm'
                      : 'text-[#253C42] hover:text-[#438E88] hover:bg-[#F1F7F3]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#438E88]' : 'text-[#62747A]/60'}`} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions & Info */}
        <div className="pt-6 border-t border-[#E3EBE7] space-y-4">
          <button
            onClick={onOpenBooking}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#438E88] hover:bg-[#32766F] text-white font-bold text-sm tracking-wide shadow-md shadow-[#438E88]/20 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Wash / Spa</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={generateQuickWhatsAppUrl('Mobile menu booking enquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-[#F1F7F3] border border-[#E3EBE7] text-[#253C42] text-xs font-semibold hover:border-[#438E88]/40 hover:text-[#438E88] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#438E88]" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:7022338693"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-[#F1F7F3] border border-[#E3EBE7] text-[#253C42] text-xs font-semibold hover:border-[#438E88]/40 hover:text-[#438E88] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#438E88]" />
              <span>Call Us</span>
            </a>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#F1F7F3] border border-[#E3EBE7] space-y-2 text-[11px] text-[#62747A]">
            <div className="flex items-center gap-2 text-[#253C42] font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#438E88] flex-shrink-0" />
              <span>Open Daily: 8:00 AM – 8:30 PM</span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#438E88] flex-shrink-0 mt-0.5" />
              <span>Advertised 45m+ precision wash. 3 Branches across Bengaluru.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
