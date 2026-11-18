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
    <section className="py-20 lg:py-28 bg-[#F1F7F3] border-t border-[#E3EBE7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-3 font-semibold border border-[#438E88]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
              <span>Real Detailing Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#253C42] leading-tight tracking-tight">
              The Difference Is <br />
              <span className="text-[#438E88] italic font-serif">In The Finish.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#62747A] leading-relaxed">
              Drag the interactive slider horizontally or use left/right arrow keys to reveal the optical depth, swirl correction, and deep interior extraction our bays achieve.
            </p>
          </div>

          {/* Transformation Switchers */}
          <div className="flex flex-wrap gap-2">
            {BEFORE_AFTER_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeIndex === idx
                    ? 'bg-[#438E88] text-white shadow-sm'
                    : 'bg-white text-[#62747A] hover:text-[#253C42] border border-[#E3EBE7]'
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
            className="inline-flex items-center gap-2 text-sm font-bold text-[#438E88] uppercase tracking-wider hover:text-[#32766F] transition-colors group"
          >
            <span>Explore Complete Workshop Photo Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
