'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/data/business';

interface HeroContentProps {
  onOpenBooking: () => void;
}

export default function HeroContent({ onOpenBooking }: HeroContentProps) {
  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
      {/* Top Floating Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] text-white text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
        <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
        <span>Everyday Car & Bike Detailing Spa</span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-accent font-bold">{BUSINESS_CONFIG.currency.code} Pricing</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white max-w-4xl leading-[0.94] select-none">
        <span className="block drop-shadow-md">
          EVERY CAR DESERVES
        </span>
        <span className="block mt-2 text-gradient-cyan drop-shadow-md">
          A FRESH START.
        </span>
      </h1>

      {/* Supporting Editorial Paragraph */}
      <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-[#738CAC] leading-relaxed font-normal bg-[#13171D]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#252B34] shadow-sm">
        Professional car and bike washing, deep interior cleaning, polishing and ceramic care — for everyday hatchbacks, sedans, SUVs, bikes and scooters.
      </p>

      {/* Calls to Action */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <button
          onClick={onOpenBooking}
          className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent text-white font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-accent/25 hover:bg-accent-hover transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Calendar className="w-4 h-4 stroke-[2.5]" />
          <span>Book Your Wash</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <Link
          href="/services"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#13171D] border border-[#252B34] text-white font-bold text-sm tracking-wider uppercase hover:border-accent hover:text-accent hover:bg-[#19212A] transition-all shadow-sm"
        >
          <span>Explore Services</span>
        </Link>
      </div>

      {/* Everyday Vehicle Familiarity Badges */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-white/90">
        <span className="px-3.5 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] shadow-sm">
          Swift • i20 • Baleno
        </span>
        <span className="px-3.5 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] shadow-sm">
          Nexon • Creta • Brezza
        </span>
        <span className="px-3.5 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] shadow-sm">
          Dzire • City • Amaze
        </span>
        <span className="px-3.5 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] shadow-sm text-accent">
          Bikes & Scooters
        </span>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 sm:mt-16 flex flex-col items-center gap-1.5 text-[#738CAC] text-[11px] font-mono uppercase tracking-widest animate-bounce">
        <span>Scroll down</span>
        <ChevronDown className="w-4 h-4 text-accent" />
      </div>
    </div>
  );
}
