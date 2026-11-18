'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Gem, Sparkles, ArrowRight, ShieldAlert, CheckCircle2, MessageSquare } from 'lucide-react';
import { generateProtectionWhatsAppUrl } from '@/lib/whatsapp';

export default function PaintProtectionSection() {
  const protectionCards = [
    {
      id: 'ppf',
      title: 'Paint Protection Film (PPF)',
      badge: 'Physical Impact Armor',
      type: 'PPF' as const,
      description:
        'Optically clear, high-grade thermoplastic polyurethane (TPU) that forms an elastomeric physical shield over factory clear coat. Protects against flying gravel, road debris, bush scratches, and self-heals swirl marks under gentle warmth.',
      features: [
        '180 to 200+ micron thick physical barrier',
        'Self-healing elastomeric topcoat for light swirls',
        'High resistance to rock chips & road debris',
        'Hydrophobic stain-resistant high gloss finish',
        'Computerized pre-cut plotter templates',
      ],
      icon: ShieldCheck,
      recommended: 'New cars, high-speed highway drivers, and bumper scratch protection.',
      image: '/images/tata-punch.jpg',
    },
    {
      id: 'ceramic',
      title: 'Ceramic Coating (9H / 10H Options)',
      badge: 'Molecular Glass Shield',
      type: 'Ceramic' as const,
      description:
        'Liquid silica quartz (SiO2) formulation that molecularly cross-links with the clear coat to form a rigid, sacrificial glass matrix. Delivers extreme liquid reflection, self-cleaning water-beading, and chemical shielding.',
      features: [
        'Multi-stage machine paint correction included',
        'Hard 9H / 10H quartz sacrificial barrier',
        'Extreme contact-angle water beading (>110°)',
        'Shields against bird drop etching & tree sap',
        'Reduces dirt bonding for effortless washdowns',
      ],
      icon: Gem,
      recommended: 'Daily drivers, brand new hatchbacks, sedans and compact SUVs.',
      image: '/images/hyundai-creta.jpg',
    },
    {
      id: 'graphene',
      title: 'Graphene Matrix Coating',
      badge: 'Next-Gen Heat Dissipation',
      type: 'Graphene' as const,
      description:
        'Infused with reduced graphene oxide carbon lattice structures. Provides lower surface heat absorption compared to standard ceramic, dramatically diminishing baked-on hard water spot etchings in hot climates.',
      features: [
        'Advanced carbon nano-structure heat dispersion',
        'Significant reduction in water-spotting etchings',
        'Ultra-slick tactile feel with low dust static',
        'Deep wet candy-gloss on black and dark paint shades',
        'Enhanced chemical defense against municipal wash water',
      ],
      icon: Sparkles,
      recommended: 'Black, deep blue, dark red cars, and vehicles parked in open sunshine.',
      image: '/images/tata-nexon.jpg',
    },
  ];

  return (
    <section className="py-24 bg-[#0C1016] border-t border-[#252B34] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-3 font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-accent" />
              <span>Advanced Paint Preservation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              PROTECTION BEYOND <br />
              <span className="text-gradient-cyan">THE EVERYDAY WASH.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#738CAC] leading-relaxed">
              Preserve your vehicle’s factory clear coat against stone chips, harsh sun oxidation, swirl marks, and environmental contamination with multi-year paint armor.
            </p>
          </div>

          <a
            href={generateProtectionWhatsAppUrl('PPF')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start lg:self-end inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-white font-extrabold text-xs uppercase tracking-wider hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Enquire About Protection</span>
          </a>
        </div>

        {/* Protection Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {protectionCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group p-8 rounded-3xl bg-[#13171D] border border-[#252B34] hover:border-accent flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(6,157,173,0.12)] relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0C1016] border border-[#252B34] text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0C1016] text-accent border border-[#252B34]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-3.5 text-xs sm:text-sm text-[#738CAC] leading-relaxed">
                    {card.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-2.5 pt-4 border-t border-[#252B34]">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer & Enquiry Link */}
                <div className="mt-8 pt-5 border-t border-[#252B34] flex items-center justify-between">
                  <div className="text-[11px] text-[#738CAC] max-w-[65%] line-clamp-1">
                    <span className="text-white font-medium">Ideal for: </span>
                    {card.recommended}
                  </div>

                  <a
                    href={generateProtectionWhatsAppUrl(card.type)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent group-hover:text-[#10B6C5] transition-colors uppercase tracking-wider shrink-0"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Notice Box */}
        <div className="mt-12 p-5 rounded-2xl bg-[#13171D] border border-[#252B34] text-xs text-[#738CAC] flex items-center justify-between flex-wrap gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>
              <strong>Transparent Quality Standard:</strong> We provide detailed vehicle pre-inspection before applying PPF or ceramic coatings. Package coverage (Full Front, High-Impact, or Complete Wrap) and verified curing timelines are agreed with the owner upfront.
            </span>
          </div>
          <span className="text-accent font-mono text-[11px] font-semibold">
            Dust-Controlled Bays
          </span>
        </div>
      </div>
    </section>
  );
}
