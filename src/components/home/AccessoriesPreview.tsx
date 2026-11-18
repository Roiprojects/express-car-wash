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
    <section className="py-20 lg:py-28 bg-white border-t border-[#E3EBE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-3 font-semibold border border-[#438E88]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
              <span>{ACCESSORIES_SECTION_CONFIG.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#253C42] leading-tight tracking-tight">
              More Than a Wash. <br />
              <span className="text-[#438E88] italic font-serif">Accessories &amp; Upgrades.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#62747A] leading-relaxed">
              {ACCESSORIES_SECTION_CONFIG.subtitle}
            </p>
          </div>

          <a
            href={generateAccessoryWhatsAppUrl('General Accessories')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start lg:self-end inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#438E88] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#32766F] transition-all duration-300 shadow-md shadow-[#438E88]/20 hover:scale-[1.02] active:scale-[0.98]"
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
                className="group p-7 sm:p-8 rounded-3xl bg-white border border-[#E3EBE7] hover:border-[#438E88] flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(37,60,66,0.06)] hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E4F2EF] text-[#438E88] flex items-center justify-center group-hover:bg-[#438E88] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F1F7F3] text-[#438E88] border border-[#E3EBE7]">
                      Upgrade
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-[#253C42] group-hover:text-[#438E88] transition-colors duration-300 leading-snug">
                    {category.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#62747A] leading-relaxed">
                    {category.shortDesc}
                  </p>

                  {/* Items List */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-[#E3EBE7]">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#253C42]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#438E88] shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-6 pt-4 border-t border-[#E3EBE7] flex items-center justify-between">
                  <span className="text-[11px] text-[#438E88] font-bold">
                    {category.highlight}
                  </span>

                  <a
                    href={generateAccessoryWhatsAppUrl(category.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#253C42] group-hover:text-[#438E88] transition-colors uppercase tracking-wider"
                  >
                    <span>Check Fitment</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer / Guidance */}
        <div className="mt-12 p-5 rounded-2xl bg-[#F1F7F3] border border-[#E3EBE7] text-xs text-[#62747A] shadow-sm flex items-center justify-between flex-wrap gap-4">
          <p>{ACCESSORIES_SECTION_CONFIG.disclaimer}</p>
          <span className="text-[#438E88] font-mono text-[11px] font-bold whitespace-nowrap px-3 py-1 rounded-full bg-[#E4F2EF] border border-[#438E88]/20">
            Coupler-to-Coupler Wiring
          </span>
        </div>
      </div>
    </section>
  );
}
