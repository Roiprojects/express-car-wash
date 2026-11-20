'use client';

import React from 'react';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { useBooking } from '@/components/layout/AppShell';
import { Sparkles, Clock } from 'lucide-react';
import ConversionCTA from '@/components/home/ConversionCTA';

export default function FAQPage() {
  const { openBooking } = useBooking();

  return (
    <div className="bg-[#FFF9EF]">
      {/* Page Hero */}
      <section className="relative py-10 sm:py-12 overflow-hidden border-b border-[#DDD6CB] bg-[#F5EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EF] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Clarity, Timelines &amp; Procedures</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              Frequently Asked <br />
              <span className="text-[#087F75] italic font-serif">Questions.</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#445452] leading-relaxed">
              Find transparent answers regarding vehicle turnaround durations, paint-safe chemistry, vehicle classifications, and appointment scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-10 sm:py-12 lg:py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Signboard Notice Callout */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DDD6CB] space-y-2.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-[#087F75] font-bold text-sm sm:text-base">
            <Clock className="w-5 h-5 text-[#087F75]" />
            <span className="text-[#202C2C]">Advertised Workshop Notice: 45-Minute Minimum Standard</span>
          </div>
          <p className="text-sm text-[#445452] leading-relaxed">
            Our physical workshop signboard advertises: <em>&ldquo;Minimum car &amp; bike washing time — 45 minutes.&rdquo;</em> Please understand this is an advertised baseline minimum to ensure that safe pre-rinsing, wheel arch degreasing, and dual-bucket washing are never rushed. Total duration varies depending on surface dirt, tar accumulation, and specialized treatments chosen.
          </p>
        </div>

        <FAQAccordion />
      </section>

      {/* Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </div>
  );
}
