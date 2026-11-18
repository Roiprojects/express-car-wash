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
    <div className="bg-[#FFF9EF]">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#DDD6CB] bg-[#F5EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EF] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-4 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Workshop Detailing Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              Precision Craft. <br />
              <span className="text-[#087F75] italic font-serif">Visual Proof.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#445452] leading-relaxed">
              Explore real-world paint transformations, thick foam pre-washes, hot-water cabin extractions, and two-wheeler restorations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Before & After Interactive Showcase */}
      <section className="py-16 bg-[#FFF9EF] border-b border-[#DDD6CB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-2 font-bold border border-[#DDD6CB]">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#087F75]" />
                <span>Interactive Split-Screen Sliders</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#202C2C]">
                Before &amp; After Transformations
              </h2>
              <p className="text-sm text-[#445452] mt-1">
                Drag the center divider to inspect the depth of swirl correction and interior dirt extraction.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {BEFORE_AFTER_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedBAIndex(idx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                    selectedBAIndex === idx
                      ? 'bg-[#087F75] text-white shadow-sm'
                      : 'bg-white text-[#202C2C] hover:text-[#087F75] border border-[#DDD6CB]'
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
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-[#F5EBDD] rounded-3xl my-12 border border-[#DDD6CB]">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#202C2C]">
            Workshop Gallery
          </h2>
          <p className="text-sm text-[#445452] mt-1">
            Browse our bays in action across car washing, superbike detailing, interior extraction, and ceramic curing.
          </p>
        </div>

        <GalleryGrid />

        <div className="p-5 rounded-2xl bg-white border border-[#DDD6CB] flex items-start gap-3.5 text-xs sm:text-sm text-[#445452] shadow-sm">
          <AlertCircle className="w-4 h-4 text-[#087F75] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#202C2C]">Portfolio Disclosure:</strong> High-resolution illustrative placeholders are used during website development. Actual in-bay photos of customer vehicles will be uploaded directly as completed workshop projects are documented.
          </p>
        </div>
      </section>

      {/* Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </div>
  );
}
