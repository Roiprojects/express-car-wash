'use client';

import React from 'react';
import CarMarqueeRow from './CarMarqueeRow';
import { HERO_ROW_1_CARS, HERO_ROW_2_CARS } from '@/data/everydayCars';
import { Sparkles } from 'lucide-react';

export default function EverydayCarsStrip() {
  return (
    <section className="relative w-full pt-8 pb-10 sm:pt-9 sm:pb-12 bg-[#F5EBDD] border-t border-b border-[#DDD6CB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EF] border border-[#DDD6CB] text-xs font-mono uppercase tracking-widest text-[#087F75] mb-3 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
          <span>Everyday Vehicle Specialists</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#202C2C] tracking-tight">
          Everyday Vehicles Serviced Daily Across Bengaluru
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#445452] max-w-xl mx-auto leading-relaxed">
          From Maruti Swift, Baleno, and Dzire to Nexon, Creta, Pulsar, and Activa — crafted detailing for everyday Indian roads.
        </p>
      </div>

      {/* Row 1: Left */}
      <div className="w-full hero-marquee-mask">
        <CarMarqueeRow cars={HERO_ROW_1_CARS} direction="left" speedSeconds={34} />
      </div>

      {/* Row 2: Right */}
      <div className="w-full hero-marquee-mask mt-4">
        <CarMarqueeRow cars={HERO_ROW_2_CARS} direction="right" speedSeconds={38} />
      </div>
    </section>
  );
}
