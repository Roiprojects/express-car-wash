'use client';

import React from 'react';
import { BUSINESS_CONFIG } from '@/data/business';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';
import { MessageSquare, Phone, Calendar, Sparkles, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface ConversionCTAProps {
  onOpenBooking: () => void;
}

export default function ConversionCTA({ onOpenBooking }: ConversionCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#F5EBDD] border-t border-[#DDD6CB] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9EF] border border-[#DDD6CB] text-[#087F75] font-mono text-xs uppercase tracking-widest mb-6 shadow-sm font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
          <span>{BUSINESS_CONFIG.brandName} • 3 Branches in Bengaluru</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#202C2C] max-w-3xl mx-auto leading-tight">
          Your Complete Auto Care <br />
          <span className="text-[#087F75] italic font-serif">Starts Here.</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#445452] max-w-xl mx-auto leading-relaxed">
          From quick foam washes to multi-year ceramic shields, PPF wraps, and automotive accessories. Connect with our bays to schedule your visit.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={generateQuickWhatsAppUrl('Booking enquiry from Homepage CTA')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#087F75] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#087F75]/25 hover:bg-[#06665F] transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Book on WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-[#DDD6CB] text-[#202C2C] font-bold text-sm uppercase tracking-wider hover:border-[#087F75] hover:text-[#087F75] transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4 text-[#087F75]" />
            <span>Interactive Planner</span>
          </button>

          <a
            href="tel:7022338693"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white border border-[#DDD6CB] text-[#202C2C] hover:text-[#087F75] hover:border-[#087F75] transition-colors font-bold text-sm uppercase tracking-wider shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#087F75]" />
            <span>Call +91 70223 38693</span>
          </a>
        </div>

        {/* Secondary Contact Line */}
        <div className="mt-6 text-xs sm:text-sm text-[#445452]">
          <span>Secondary Line: </span>
          <a href="tel:9741074019" className="text-[#202C2C] hover:text-[#087F75] font-bold transition-colors">
            +91 97410 74019
          </a>
          <span className="mx-2">•</span>
          <span>We have 3 branches across Bengaluru</span>
        </div>

        {/* Workshop reassurance badges */}
        <div className="mt-12 pt-8 border-t border-[#DDD6CB] flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#445452] font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#087F75]" />
            <span>{BUSINESS_CONFIG.serviceNotice.minimumWashTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#087F75]" />
            <span>Dust-controlled bays for PPF &amp; Coatings</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#087F75]" />
            <span>Open: {BUSINESS_CONFIG.operatingHours.days} ({BUSINESS_CONFIG.operatingHours.timing})</span>
          </div>
        </div>
      </div>
    </section>
  );
}
