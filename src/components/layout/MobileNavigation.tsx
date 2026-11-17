'use client';

import React from 'react';
import Link from 'next/link';
import { BUSINESS_CONFIG } from '@/data/business';
import { X, Phone, MessageSquare, Calendar, ChevronRight, ShieldCheck, Clock } from 'lucide-react';
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
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0C1016] border-l border-[#252B34] p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#252B34]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center font-black text-white text-lg shadow-sm">
                EX
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight block">
                  {BUSINESS_CONFIG.brandName}
                </span>
                <span className="text-[10px] text-[#738CAC] uppercase tracking-wider block font-medium">
                  Car & Bike Detailing Spa
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#13171D] border border-[#252B34] text-[#738CAC] hover:text-white transition-colors"
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
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                    isActive
                      ? 'bg-accent text-white font-bold shadow-sm shadow-accent/20'
                      : 'text-[#738CAC] hover:text-white hover:bg-[#13171D]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'opacity-40'}`} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions & Info */}
        <div className="pt-6 border-t border-[#252B34] space-y-4">
          <button
            onClick={onOpenBooking}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-accent text-white font-bold text-sm uppercase tracking-wider shadow-md shadow-accent/25 hover:bg-accent-hover transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Wash / Spa</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={generateQuickWhatsAppUrl('Mobile menu booking enquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#13171D] border border-[#252B34] text-white text-xs font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-accent" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#13171D] border border-[#252B34] text-white text-xs font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call Us</span>
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-[#13171D] border border-[#252B34] space-y-2 text-[11px] text-[#738CAC]">
            <div className="flex items-center gap-2 text-white font-medium">
              <Clock className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>{BUSINESS_CONFIG.operatingHours.days}: {BUSINESS_CONFIG.operatingHours.timing}</span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
              <span>{BUSINESS_CONFIG.serviceNotice.minimumWashTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
