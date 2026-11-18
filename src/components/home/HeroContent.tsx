'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, MessageSquare, ChevronDown } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/data/business';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';

interface HeroContentProps {
  onOpenBooking: () => void;
}

export default function HeroContent({ onOpenBooking }: HeroContentProps) {
  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
      {/* Top Floating Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] text-white text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
        <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
        <span>{BUSINESS_CONFIG.brandName}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-accent font-bold">2 Branches in Bengaluru</span>
      </div>

      {/* Main Headline from User Specification */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white max-w-4xl leading-[0.94] select-none">
        <span className="block drop-shadow-md">
          COMPLETE CAR & BIKE CARE.
        </span>
        <span className="block mt-2 text-gradient-cyan drop-shadow-md">
          ALL IN ONE PLACE.
        </span>
      </h1>

      {/* Supporting Text from User Specification */}
      <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-[#738CAC] leading-relaxed font-normal bg-[#13171D]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#252B34] shadow-sm">
        From everyday foam washing to ceramic coatings, paint protection, detailing and accessories.
      </p>

      {/* Primary & Secondary Calls to Action from User Specification */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link
          href="/services"
          className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent text-white font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-accent/25 hover:bg-accent-hover transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>Explore Services</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        <a
          href={generateQuickWhatsAppUrl('General enquiry & bay booking')}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#13171D] border border-[#252B34] text-white font-bold text-sm tracking-wider uppercase hover:border-accent hover:text-accent hover:bg-[#19212A] transition-all shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-accent fill-current" />
          <span>Book on WhatsApp</span>
        </a>
      </div>

      {/* Everyday Vehicle Familiarity Badges */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-white/90">
        <span className="px-3.5 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] shadow-sm">
          Swift • i20 • Baleno • Dzire
        </span>
        <span className="px-3.5 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] shadow-sm">
          Creta • Nexon • Brezza • Punch
        </span>
        <span className="px-3.5 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] shadow-sm text-accent">
          Activa • Jupiter • Pulsar • Splendor
        </span>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-10 sm:mt-14 flex flex-col items-center gap-1.5 text-[#738CAC] text-[11px] font-mono uppercase tracking-widest animate-bounce">
        <span>Scroll down</span>
        <ChevronDown className="w-4 h-4 text-accent" />
      </div>
    </div>
  );
}
