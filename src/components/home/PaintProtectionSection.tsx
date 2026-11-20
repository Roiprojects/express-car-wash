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
        'Liquid silica quartz (SiO2) formulation that molecularly cross-links with the clear coat to form a rigid, sacrificial glass matrix. Delivers extreme liquid reflection, self-cleaning water-beading contact angles, and UV chemical resistance.',
      features: [
        'Multi-year clear coat chemical bonding',
        '9H/10H pencil-scale hardness barrier against micro-swirls',
        'Extreme hydrophobic contact angle (>110° water beading)',
        'Defense against bird droppings, acid rain & industrial fallout',
        'Cured in climate-controlled detailing bays',
      ],
      icon: Gem,
      recommended: 'Daily city runners seeking effortless washing and permanent deep candy gloss.',
    },
    {
      id: 'graphene',
      title: 'Graphene Matrix Coating',
      badge: 'Next-Gen Heat Dissipation',
      type: 'Ceramic' as const,
      description:
        'Infused with reduced graphene oxide carbon lattice structures. Provides lower surface temperature absorption compared to standard ceramics, dramatically diminishing bake-in mineral water spot etchings in hot climates.',
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
    <section className="py-10 md:py-12 lg:py-14 bg-[#FFF9EF] border-t border-[#DDD6CB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-4 font-bold border border-[#DDD6CB]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#087F75]" />
            <span>Advanced Paint Preservation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
            Protection Beyond <br />
            <span className="text-[#087F75] italic font-serif">The Everyday Wash.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#445452] leading-relaxed">
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
                className="group p-8 rounded-3xl bg-white border border-[#DDD6CB] hover:border-[#087F75] flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(32,44,44,0.05)] hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5EBDD] text-[#087F75] flex items-center justify-center group-hover:bg-[#087F75] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] border border-[#DDD6CB]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-[#202C2C] group-hover:text-[#087F75] transition-colors duration-300 leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-3.5 text-sm sm:text-base text-[#445452] leading-relaxed">
                    {card.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3 pt-5 border-t border-[#DDD6CB]">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202C2C]">
                        <CheckCircle2 className="w-4 h-4 text-[#087F75] shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer & Enquiry Link */}
                <div className="mt-8 pt-5 border-t border-[#DDD6CB] flex items-center justify-between">
                  <div className="text-xs text-[#52615E] max-w-[65%] line-clamp-1">
                    <span className="text-[#202C2C] font-semibold">Ideal for: </span>
                    {card.recommended}
                  </div>

                  <a
                    href={generateProtectionWhatsAppUrl(card.type)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#087F75] group-hover:text-[#06665F] transition-colors uppercase tracking-wider shrink-0"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Standard Notice Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#DDD6CB] text-xs sm:text-sm text-[#445452] flex items-center justify-between flex-wrap gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#087F75]" />
            <span>
              <strong className="text-[#202C2C]">Transparent Quality Standard:</strong> We provide detailed vehicle pre-inspection before applying PPF or ceramic coatings. Package coverage (Full Front, High-Impact, or Complete Wrap) and verified curing timelines are agreed with the owner upfront.
            </span>
          </div>
          <span className="text-[#087F75] font-mono text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#F5EBDD] border border-[#DDD6CB]">
            Dust-Controlled Bays
          </span>
        </div>
      </div>
    </section>
  );
}
