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
    <div className="bg-[#0C1016]">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#252B34]">
        <div className="absolute inset-0 automotive-grid pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Workshop Detailing Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              PRECISION CRAFT. <br />
              <span className="text-gradient-cyan">VISUAL PROOF.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#738CAC] leading-relaxed">
              Explore real-world paint transformations, thick foam pre-washes, hot-water cabin extractions, and two-wheeler restorations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Before & After Interactive Showcase */}
      <section className="py-16 bg-[#10151D] border-b border-[#252B34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-2 font-semibold">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Interactive Split-Screen Sliders</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Before & After Transformations
              </h2>
              <p className="text-xs sm:text-sm text-[#738CAC] mt-1">
                Drag the center divider to inspect the depth of swirl correction and interior dirt extraction.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {BEFORE_AFTER_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedBAIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedBAIndex === idx
                      ? 'bg-accent text-white shadow-sm shadow-accent/20'
                      : 'bg-[#13171D] text-[#738CAC] hover:text-white border border-[#252B34]'
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
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-[#0C1016]">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Workshop Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#738CAC] mt-1">
            Browse our bays in action across car washing, superbike detailing, interior extraction, and ceramic curing.
          </p>
        </div>

        <GalleryGrid />

        <div className="p-4 rounded-2xl bg-[#13171D] border border-[#252B34] flex items-start gap-3 text-xs text-[#738CAC] shadow-xl">
          <AlertCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
          <p>
            <strong>Portfolio Disclosure:</strong> High-resolution illustrative placeholders are used during website development. Actual in-bay photos of customer vehicles will be uploaded directly as completed workshop projects are documented.
          </p>
        </div>
      </section>

      {/* Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </div>
  );
}
