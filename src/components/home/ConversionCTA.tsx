'use client';

import React from 'react';
import { BUSINESS_CONFIG } from '@/data/business';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';
import { MessageSquare, Phone, Calendar, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface ConversionCTAProps {
  onOpenBooking: () => void;
}

export default function ConversionCTA({ onOpenBooking }: ConversionCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0C1016] via-[#10151D] to-[#0C1016] border-t border-[#252B34] relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] text-accent font-mono text-xs uppercase tracking-widest mb-6 shadow-sm font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Drive In or Book in Advance</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white max-w-3xl mx-auto leading-tight">
          YOUR NEXT WASH <br />
          <span className="text-gradient-cyan">STARTS HERE.</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#738CAC] max-w-xl mx-auto leading-relaxed">
          Choose your service and get in touch to arrange your visit. Experience the difference of dedicated detailing bays and paint-safe treatments.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={generateQuickWhatsAppUrl('Booking enquiry from Homepage CTA')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-accent/25 hover:bg-accent-hover transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Book on WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#13171D] border border-[#252B34] text-white font-bold text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4 text-accent" />
            <span>Interactive Booking Tool</span>
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-transparent border border-[#252B34] text-[#738CAC] hover:text-white hover:border-white/20 transition-colors font-bold text-sm uppercase tracking-wider"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Workshop reassurance badges */}
        <div className="mt-12 pt-8 border-t border-[#252B34] flex flex-wrap items-center justify-center gap-6 text-xs text-[#738CAC] font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            <span>{BUSINESS_CONFIG.serviceNotice.minimumWashTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>No advance payment needed to schedule</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Open: {BUSINESS_CONFIG.operatingHours.days}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
