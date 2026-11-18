'use client';

import React, { useState } from 'react';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import BeforeAfterSlider from '@/components/gallery/BeforeAfterSlider';
import { BEFORE_AFTER_ITEMS } from '@/data/gallery';
import { useBooking } from '@/components/layout/AppShell';
import { Sparkles, SlidersHorizontal, AlertCircle } from 'lucide-react';
import ConversionCTA from '@/components/home/ConversionCTA';

export default function GalleryPage() {
  const { openBooking } = useBooking();
  const [selectedBAIndex, setSelectedBAIndex] = useState(0);

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#E3EBE7] bg-[#F1F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-4 font-semibold border border-[#438E88]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
              <span>Workshop Detailing Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#253C42] leading-tight tracking-tight">
              Precision Craft. <br />
              <span className="text-[#438E88] italic font-serif">Visual Proof.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#62747A] leading-relaxed">
              Explore real-world paint transformations, thick foam pre-washes, hot-water cabin extractions, and two-wheeler restorations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Before & After Interactive Showcase */}
      <section className="py-16 bg-white border-b border-[#E3EBE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-2 font-bold border border-[#438E88]/20">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#438E88]" />
                <span>Interactive Split-Screen Sliders</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#253C42]">
                Before &amp; After Transformations
              </h2>
              <p className="text-xs sm:text-sm text-[#62747A] mt-1">
                Drag the center divider to inspect the depth of swirl correction and interior dirt extraction.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {BEFORE_AFTER_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedBAIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedBAIndex === idx
                      ? 'bg-[#438E88] text-white shadow-sm'
                      : 'bg-[#F1F7F3] text-[#62747A] hover:text-[#253C42] border border-[#E3EBE7]'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider item={BEFORE_AFTER_ITEMS[selectedBAIndex]} />
          </div>
        </div>
      </section>

      {/* Full Gallery Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-[#F1F7F3]">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#253C42]">
            Workshop Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#62747A] mt-1">
            Browse our bays in action across car washing, superbike detailing, interior extraction, and ceramic curing.
          </p>
        </div>

        <GalleryGrid />

        <div className="p-4 rounded-2xl bg-white border border-[#E3EBE7] flex items-start gap-3 text-xs text-[#62747A] shadow-sm">
          <AlertCircle className="w-4 h-4 text-[#438E88] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#253C42]">Portfolio Disclosure:</strong> High-resolution illustrative placeholders are used during website development. Actual in-bay photos of customer vehicles will be uploaded directly as completed workshop projects are documented.
          </p>
        </div>
      </section>

      {/* Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </div>
  );
}
