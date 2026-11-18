'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Car } from 'lucide-react';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';
import { BUSINESS_CONFIG } from '@/data/business';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 p-5 rounded-3xl bg-white border border-[#DDD6CB] shadow-2xl text-[#202C2C] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-[#DDD6CB]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#087F75] flex items-center justify-center font-bold text-white text-sm shadow-sm">
                <Car className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-serif font-bold text-sm block text-[#202C2C]">{BUSINESS_CONFIG.brandName}</span>
                <span className="text-xs text-[#087F75] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087F75] animate-ping" />
                  Bay Staff Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#52615E] hover:text-[#202C2C] p-1 rounded-lg hover:bg-[#F5EBDD] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs sm:text-sm text-[#445452] space-y-2">
            <p>
              Got a quick question about wash packages, bike detailing, or want to lock in a bay slot?
            </p>
            <p className="text-[#202C2C] font-semibold">
              We usually reply within 5 – 10 minutes on WhatsApp!
            </p>
          </div>

          <a
            href={generateQuickWhatsAppUrl('Instant enquiry from floating button')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#087F75] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#06665F] transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-white border border-[#DDD6CB] shadow-xl hover:border-[#087F75] hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Open WhatsApp conversation"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#087F75] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#087F75]" />
        </span>

        <span className="hidden sm:inline font-bold text-xs tracking-wider uppercase text-[#202C2C] group-hover:text-[#087F75] transition-colors">
          Instant WhatsApp
        </span>

        <div className="w-8 h-8 rounded-full bg-[#087F75] flex items-center justify-center text-white shadow-sm">
          <MessageSquare className="w-4 h-4 fill-current" />
        </div>
      </button>
    </div>
  );
}
