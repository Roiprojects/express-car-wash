'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/data/business';

export default function AboutPreview() {
  return (
    <section className="py-10 md:py-12 lg:py-14 bg-[#FFF9EF] border-t border-[#DDD6CB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial & Story */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] text-xs font-mono uppercase tracking-widest font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Complete Automotive Care Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              More Than a Wash. <br />
              <span className="text-[#087F75] italic font-serif">Complete Craft.</span>
            </h2>

            <div className="space-y-3 text-[#445452] text-base sm:text-lg leading-relaxed">
              <p>
                At {BUSINESS_CONFIG.brandName}, we see automotive care not as a rushed 10-minute wipe, but as a comprehensive sanctuary for your vehicle. From everyday foam washing to self-healing Paint Protection Film (PPF), 9H/10H ceramic coatings, color change wraps, audio installations, and body tinkering — we bring all essential vehicle services under one trusted roof.
              </p>
              <p>
                Whether bringing in a daily commuter Swift or Baleno, a family Creta or Nexon, or a beloved Activa or Pulsar two-wheeler, our 2 branches in Bengaluru provide specialized bays, dust-controlled application rooms, and transparent pricing.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm sm:text-base">
              {[
                'Self-healing PPF & 9H/10H ceramic coatings',
                'Advertised 45m+ precision wash standards',
                'Alloy wheels, tyres, audio & styling upgrades',
                '2 branch network across Bengaluru',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-[#202C2C] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#087F75] flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#087F75] uppercase tracking-wider group hover:text-[#06665F] transition-colors"
              >
                <span>Read Our Story &amp; Workshop Standards</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#DDD6CB] shadow-xl bg-[#F5EBDD]">
                <Image
                  src="/images/tata-punch.jpg"
                  alt="Precision detailing by hand on passenger car"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Inset Secondary Detail Card */}
              <div className="absolute -bottom-4 left-2 sm:bottom-6 sm:-left-8 max-w-[calc(100%-1rem)] sm:max-w-xs p-3.5 sm:p-5 rounded-2xl bg-white border border-[#DDD6CB] shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EBDD] text-[#087F75] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5 text-[#087F75]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#202C2C] uppercase tracking-wide">
                      Paint Safe Assurance
                    </h4>
                    <p className="text-xs text-[#445452] mt-0.5">
                      Dust-controlled booths for coatings and PPF installation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
