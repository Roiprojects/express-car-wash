'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CAR_CATEGORIES, CarCategory, SERVICES_DATA } from '@/data/services';
import { formatINR } from '@/lib/formatting';
import { Check, Sparkles, ArrowRight, Calendar, AlertCircle } from 'lucide-react';

interface PricingPreviewProps {
  onOpenBookingWithService?: (serviceId: string) => void;
}

export default function PricingPreview({ onOpenBookingWithService }: PricingPreviewProps) {
  const [selectedCategory, setSelectedCategory] = useState<CarCategory>('m_suv');

  // Selected services representing key price tiers from the signboard
  const highlightedServiceIds = [
    'full-car-foam-wash',
    'outer-wash',
    'full-car-diesel-wash',
    'deep-interior-cleaning',
    'rubbing-polish-teflon',
    'ceramic-wash',
  ];

  const carServices = SERVICES_DATA.filter((s) => highlightedServiceIds.includes(s.id));

  return (
    <section className="py-24 bg-[#0C1016] border-t border-[#252B34] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Workshop Rates</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              PREMIUM CARE. <br />
              <span className="text-gradient-cyan">CLEAR PRICING.</span>
            </h2>
            <p className="mt-3 text-sm text-[#738CAC] max-w-xl">
              Zero ambiguity. Toggle your vehicle size to see calibrated baseline prices derived straight from our workshop service board.
            </p>
          </div>

          {/* Vehicle Category Switcher Pills */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#13171D] border border-[#252B34] self-start md:self-auto shadow-sm">
            {CAR_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isSelected
                      ? 'bg-accent text-white shadow-sm shadow-accent/25'
                      : 'text-[#738CAC] hover:text-white'
                  }`}
                >
                  {cat.id === 'small' && 'Small Hatch'}
                  {cat.id === 'm_suv' && 'Mid-SUV'}
                  {cat.id === 'suv_xl' && 'SUV XL / Full Size'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Info Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#13171D] border border-[#252B34] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-bold text-white">
              Showing rates for: {CAR_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
            </span>
            <span className="text-[#738CAC] hidden sm:inline">
              ({CAR_CATEGORIES.find((c) => c.id === selectedCategory)?.examples})
            </span>
          </div>

          <Link
            href="/services"
            className="text-accent hover:underline font-semibold flex items-center gap-1"
          >
            <span>See full catalog & bike rates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carServices.map((service) => {
            const price = service.pricing[selectedCategory];
            const isVerified = service.pricing.isVerified;

            return (
              <div
                key={service.id}
                className="p-6 rounded-3xl bg-[#13171D] border border-[#252B34] hover:border-accent flex flex-col justify-between transition-all duration-300 group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white px-2.5 py-1 rounded-md bg-[#19212A] font-semibold">
                      {service.category.replace('-', ' ')}
                    </span>
                    {!isVerified && (
                      <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        Signboard check
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs text-[#738CAC] leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mt-4 pt-4 border-t border-[#252B34] space-y-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                        <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-6 pt-4 border-t border-[#252B34] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#738CAC] block">
                      Price ({selectedCategory.replace('_', ' ').toUpperCase()})
                    </span>
                    <div className="text-2xl font-black text-white tracking-tight">
                      {price ? formatINR(price) : 'Enquire'}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBookingWithService && onOpenBookingWithService(service.id)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-sm shadow-accent/20"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Policy Disclaimer */}
        <div className="mt-10 p-4 rounded-2xl bg-[#13171D] border border-[#252B34] flex items-start gap-3 text-xs text-[#738CAC] shadow-sm">
          <AlertCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Transparency Notice:</strong> All figures above reflect the printed workshop price board. Where handwritten revisions exist on the physical board (e.g. recent full foam wash updates), our team confirms the exact final quote over WhatsApp prior to service commencement.
          </p>
        </div>
      </div>
    </section>
  );
}
