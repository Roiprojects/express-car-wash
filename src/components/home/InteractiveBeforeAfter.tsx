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
    <section className="py-24 bg-[#0C1016] border-t border-[#252B34] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Detailing Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              THE DIFFERENCE IS <br />
              <span className="text-gradient-cyan">IN THE FINISH.</span>
            </h2>
            <p className="mt-3 text-sm text-[#738CAC] leading-relaxed">
              Drag the interactive slider horizontally or use left/right arrow keys to reveal the optical depth, swirl correction, and deep interior extraction our bays achieve.
            </p>
          </div>

          {/* Transformation Switchers */}
          <div className="flex flex-wrap gap-2">
            {BEFORE_AFTER_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeIndex === idx
                    ? 'bg-accent text-white shadow-sm shadow-accent/20'
                    : 'bg-[#13171D] text-[#738CAC] hover:text-white border border-[#252B34]'
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
            className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider hover:text-[#10B6C5] transition-colors group"
          >
            <span>Explore Complete Workshop Photo Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
