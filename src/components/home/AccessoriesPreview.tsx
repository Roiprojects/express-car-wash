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
    <section className="py-24 bg-[#0C1016] border-t border-[#252B34] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>{ACCESSORIES_SECTION_CONFIG.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              MORE THAN A WASH. <br />
              <span className="text-gradient-cyan">ACCESSORIES & UPGRADES.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#738CAC] leading-relaxed">
              {ACCESSORIES_SECTION_CONFIG.subtitle}
            </p>
          </div>

          <a
            href={generateAccessoryWhatsAppUrl('General Accessories')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start lg:self-end inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-white font-extrabold text-xs uppercase tracking-wider hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/25 hover:scale-[1.02] active:scale-[0.98]"
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
                className="group p-7 sm:p-8 rounded-3xl bg-[#13171D] border border-[#252B34] hover:border-accent flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(6,157,173,0.12)] relative overflow-hidden"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0C1016] border border-[#252B34] text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0C1016] text-[#738CAC] border border-[#252B34]">
                      Upgrade
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 leading-snug">
                    {category.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#738CAC] leading-relaxed">
                    {category.shortDesc}
                  </p>

                  {/* Items List */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-[#252B34]">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-6 pt-4 border-t border-[#252B34] flex items-center justify-between">
                  <span className="text-[11px] text-accent font-semibold">
                    {category.highlight}
                  </span>

                  <a
                    href={generateAccessoryWhatsAppUrl(category.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-accent transition-colors uppercase tracking-wider"
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
        <div className="mt-12 p-5 rounded-2xl bg-[#13171D] border border-[#252B34] text-xs text-[#738CAC] shadow-md flex items-center justify-between flex-wrap gap-4">
          <p>{ACCESSORIES_SECTION_CONFIG.disclaimer}</p>
          <span className="text-accent font-mono text-[11px] font-semibold whitespace-nowrap">
            Coupler-to-Coupler Wiring
          </span>
        </div>
      </div>
    </section>
  );
}
