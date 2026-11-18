'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BEFORE_AFTER_ITEMS } from '@/data/gallery';
import BeforeAfterSlider from '@/components/gallery/BeforeAfterSlider';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function InteractiveBeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = BEFORE_AFTER_ITEMS[activeIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#F5EBDD] border-t border-[#DDD6CB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EF] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Real Detailing Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              The Difference Is <br />
              <span className="text-[#087F75] italic font-serif">In The Finish.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#445452] leading-relaxed">
              Drag the interactive slider horizontally or use left/right arrow keys to reveal the optical depth, swirl correction, and deep interior extraction our bays achieve.
            </p>
          </div>

          {/* Transformation Switchers */}
          <div className="flex flex-wrap gap-2.5">
            {BEFORE_AFTER_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  activeIndex === idx
                    ? 'bg-[#087F75] text-white shadow-sm'
                    : 'bg-white text-[#202C2C] hover:text-[#087F75] border border-[#DDD6CB]'
                }`}
              >
                {idx === 0 && 'Paint Polish'}
                {idx === 1 && 'Interior Steam'}
                {idx === 2 && 'Ceramic Hydrophobic'}
              </button>
            ))}
          </div>
        </div>

        {/* The Interactive Slider Component */}
        <div className="max-w-5xl mx-auto">
          <BeforeAfterSlider item={activeItem} />
        </div>

        {/* Gallery Link */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#087F75] uppercase tracking-wider hover:text-[#06665F] transition-colors group"
          >
            <span>Explore Complete Workshop Photo Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
