'use client';

import React from 'react';
import { ShieldCheck, Gem, Sparkles, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
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
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F7F3] border-t border-[#E3EBE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-4 font-semibold border border-[#438E88]/20">
            <ShieldAlert className="w-3.5 h-3.5 text-[#438E88]" />
            <span>Advanced Paint Preservation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#253C42] leading-tight tracking-tight">
            Protection Beyond <br />
            <span className="text-[#438E88] italic font-serif">The Everyday Wash.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#62747A] leading-relaxed">
            Preserve your vehicle’s factory clear coat against stone chips, harsh sun oxidation, swirl marks, and environmental contamination with multi-year paint armor.
          </p>
        </div>

        {/* Protection Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {protectionCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group p-8 rounded-3xl bg-white border border-[#E3EBE7] hover:border-[#438E88] flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(37,60,66,0.06)] hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#E4F2EF] text-[#438E88] flex items-center justify-center group-hover:bg-[#438E88] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F1F7F3] text-[#438E88] border border-[#E3EBE7]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-[#253C42] group-hover:text-[#438E88] transition-colors duration-300 leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-3.5 text-xs sm:text-sm text-[#62747A] leading-relaxed">
                    {card.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-2.5 pt-4 border-t border-[#E3EBE7]">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#253C42]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#438E88] shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer & Enquiry Link */}
                <div className="mt-8 pt-5 border-t border-[#E3EBE7] flex items-center justify-between">
                  <div className="text-[11px] text-[#62747A] max-w-[65%] line-clamp-1">
                    <span className="text-[#253C42] font-semibold">Ideal for: </span>
                    {card.recommended}
                  </div>

                  <a
                    href={generateProtectionWhatsAppUrl(card.type)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#438E88] group-hover:text-[#32766F] transition-colors uppercase tracking-wider shrink-0"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Standard Notice Box */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-[#E3EBE7] text-xs text-[#62747A] flex items-center justify-between flex-wrap gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#438E88]" />
            <span>
              <strong className="text-[#253C42]">Transparent Quality Standard:</strong> We provide detailed vehicle pre-inspection before applying PPF or ceramic coatings. Package coverage (Full Front, High-Impact, or Complete Wrap) and verified curing timelines are agreed with the owner upfront.
            </span>
          </div>
          <span className="text-[#438E88] font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-[#E4F2EF] border border-[#438E88]/20">
            Dust-Controlled Bays
          </span>
        </div>
      </div>
    </section>
  );
}
