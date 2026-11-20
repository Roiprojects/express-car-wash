'use client';

import React from 'react';
import { ACCESSORIES_CATEGORIES, ACCESSORIES_SECTION_CONFIG } from '@/data/accessories';
import { Disc, Speaker, Lightbulb, Armchair, Shield, Sparkles, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { generateAccessoryWhatsAppUrl } from '@/lib/whatsapp';

export default function AccessoriesPreview() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Disc,
    Speaker,
    Lightbulb,
    Armchair,
    Shield,
  };

  return (
    <section className="py-10 md:py-12 lg:py-14 bg-[#FFF9EF] border-t border-[#DDD6CB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>{ACCESSORIES_SECTION_CONFIG.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              More Than a Wash. <br />
              <span className="text-[#087F75] italic font-serif">Accessories &amp; Upgrades.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#445452] leading-relaxed">
              {ACCESSORIES_SECTION_CONFIG.subtitle}
            </p>
          </div>

          <a
            href={generateAccessoryWhatsAppUrl('General Accessories')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start lg:self-end inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#087F75] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#06665F] transition-all duration-300 shadow-md shadow-[#087F75]/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Ask About Accessories</span>
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ACCESSORIES_CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.iconName] || Sparkles;
            return (
              <div
                key={category.id}
                className="group p-8 rounded-3xl bg-white border border-[#DDD6CB] hover:border-[#087F75] flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(32,44,44,0.05)] hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5EBDD] text-[#087F75] flex items-center justify-center group-hover:bg-[#087F75] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] border border-[#DDD6CB]">
                      Upgrade
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-[#202C2C] group-hover:text-[#087F75] transition-colors duration-300 leading-snug">
                    {category.name}
                  </h3>

                  <p className="mt-3 text-sm text-[#445452] leading-relaxed">
                    {category.shortDesc}
                  </p>

                  {/* Items List */}
                  <div className="mt-5 space-y-2.5 pt-4 border-t border-[#DDD6CB]">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202C2C]">
                        <CheckCircle2 className="w-4 h-4 text-[#087F75] shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-6 pt-4 border-t border-[#DDD6CB] flex items-center justify-between">
                  <span className="text-xs text-[#087F75] font-bold">
                    {category.highlight}
                  </span>

                  <a
                    href={generateAccessoryWhatsAppUrl(category.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#087F75] hover:text-[#06665F] transition-colors uppercase tracking-wider"
                  >
                    <span>Check Fitment</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice on OEM wiring */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] text-xs sm:text-sm text-[#445452] flex items-center justify-between flex-wrap gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#087F75]" />
            <span>
              <strong className="text-[#202C2C]">OEM-Standard Fitment Notice:</strong> All electrical lighting, audio, and camera fitments use plug-and-play couplers without wire splicing to protect your vehicle warranty.
            </span>
          </div>
          <span className="text-[#087F75] font-mono text-xs font-bold px-3.5 py-1.5 rounded-full bg-white border border-[#DDD6CB]">
            Coupler Wiring Only
          </span>
        </div>
      </div>
    </section>
  );
}
