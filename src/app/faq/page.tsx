'use client';

import React from 'react';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { useBooking } from '@/components/layout/AppShell';
import { Sparkles, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import ConversionCTA from '@/components/home/ConversionCTA';

export default function FAQPage() {
  const { openBooking } = useBooking();

  return (
    <div className="bg-[#0C1016]">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#252B34]">
        <div className="absolute inset-0 automotive-grid pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clarity, Timelines & Procedures</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              FREQUENTLY ASKED <br />
              <span className="text-gradient-cyan">QUESTIONS.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#738CAC] leading-relaxed">
              Find transparent answers regarding vehicle turnaround durations, paint-safe chemistry, vehicle classifications, and appointment scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Signboard Notice Callout */}
        <div className="p-6 rounded-3xl bg-[#13171D] border border-[#252B34] space-y-3 shadow-xl">
          <div className="flex items-center gap-2.5 text-accent font-bold text-sm">
            <Clock className="w-5 h-5" />
            <span>Advertised Workshop Notice: 45-Minute Minimum Standard</span>
          </div>
          <p className="text-xs sm:text-sm text-[#738CAC] leading-relaxed">
            Our physical workshop signboard advertises: <em>&ldquo;Minimum car & bike washing time — 45 minutes.&rdquo;</em> Please understand this is an advertised baseline minimum to ensure that safe pre-rinsing, wheel arch degreasing, and dual-bucket washing are never rushed. Total duration varies depending on surface dirt, tar accumulation, and specialized treatments chosen.
          </p>
        </div>

        <FAQAccordion />
      </section>

      {/* Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </div>
  );
}
