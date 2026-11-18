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
    <section className="py-20 lg:py-28 bg-[#F1F7F3] border-t border-[#E3EBE7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-3 font-semibold border border-[#438E88]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
              <span>Transparent Workshop Rates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#253C42] leading-tight tracking-tight">
              Premium Care. <br />
              <span className="text-[#438E88] italic font-serif">Clear Pricing.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#62747A] max-w-xl leading-relaxed">
              Zero ambiguity. Toggle your vehicle size to see calibrated baseline prices derived straight from our workshop service board.
            </p>
          </div>

          {/* Vehicle Category Switcher Pills */}
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#E3EBE7] self-start md:self-auto shadow-sm">
            {CAR_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#438E88] text-white shadow-sm'
                      : 'text-[#62747A] hover:text-[#253C42]'
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
        <div className="mb-8 p-4 rounded-2xl bg-white border border-[#E3EBE7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#438E88]" />
            <span className="font-bold text-[#253C42]">
              Showing rates for: {CAR_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
            </span>
            <span className="text-[#62747A] hidden sm:inline">
              ({CAR_CATEGORIES.find((c) => c.id === selectedCategory)?.examples})
            </span>
          </div>

          <Link
            href="/services"
            className="text-[#438E88] hover:underline font-bold flex items-center gap-1"
          >
            <span>See full catalog &amp; bike rates</span>
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
                className="p-6 rounded-3xl bg-white border border-[#E3EBE7] hover:border-[#438E88] flex flex-col justify-between transition-all duration-300 group shadow-[0_8px_30px_rgba(37,60,66,0.06)] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#438E88] px-2.5 py-1 rounded-md bg-[#E4F2EF] font-bold">
                      {service.category.replace('-', ' ')}
                    </span>
                    {!isVerified && (
                      <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Signboard check
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#253C42] group-hover:text-[#438E88] transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs text-[#62747A] leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mt-4 pt-4 border-t border-[#E3EBE7] space-y-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#253C42] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#438E88] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-6 pt-4 border-t border-[#E3EBE7] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#62747A] block">
                      Price ({selectedCategory.replace('_', ' ').toUpperCase()})
                    </span>
                    <div className="text-2xl font-bold text-[#253C42] tracking-tight">
                      {price ? formatINR(price) : 'Enquire'}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBookingWithService && onOpenBookingWithService(service.id)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#438E88] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#32766F] transition-colors shadow-sm"
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
        <div className="mt-10 p-4 rounded-2xl bg-white border border-[#E3EBE7] flex items-start gap-3 text-xs text-[#62747A] shadow-sm">
          <AlertCircle className="w-4 h-4 text-[#438E88] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#253C42]">Transparency Notice:</strong> All figures above reflect the printed workshop price board. Where handwritten revisions exist on the physical board (e.g. recent full foam wash updates), our team confirms the exact final quote over WhatsApp prior to service commencement.
          </p>
        </div>
      </div>
    </section>
  );
}
