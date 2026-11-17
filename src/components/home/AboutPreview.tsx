'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/data/business';

export default function AboutPreview() {
  return (
    <section className="py-24 bg-[#0C1016] border-t border-[#252B34] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Detailing Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              DETAILING IS IN <br />
              <span className="text-gradient-cyan">THE DETAILS.</span>
            </h2>

            <div className="space-y-4 text-[#738CAC] text-sm sm:text-base leading-relaxed">
              <p>
                At {BUSINESS_CONFIG.brandName}, we see automotive cleaning not as a rushed assembly line, but as a deliberate craft. From microscopic brake dust embedded in alloy barrels to light clear coat swirls that rob your paint of its showroom luster, true finish requires calculated technique.
              </p>
              <p>
                Whether bringing in a daily commuter hatchback, a rugged compact SUV, or a fine two-wheeler scooter, our dedicated bays provide calibrated water pressures, pH-balanced snow foam baths, and meticulous hand drying to safeguard your finish.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                'Advertised 45m+ care timeline',
                'Dual-bucket grit-guard hand washing',
                'Emulsified chassis diesel cleaning',
                'Dedicated two-wheeler detailing protocols',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider group hover:text-[#10B6C5] transition-colors"
              >
                <span>Read Full Brand Story & Workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#252B34] shadow-2xl bg-[#13171D]">
                <Image
                  src="/images/tata-punch.jpg"
                  alt="Precision detailing by hand on passenger car"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1016]/80 via-transparent to-transparent" />
              </div>

              {/* Inset Secondary Detail Card */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-8 max-w-xs p-5 rounded-2xl bg-[#13171D] border border-[#252B34] backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      Paint Safe Assurance
                    </h4>
                    <p className="text-[11px] text-[#738CAC] mt-0.5">
                      pH-neutral foam formulas safe for ceramic & factory coats
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
