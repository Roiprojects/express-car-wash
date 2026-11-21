'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA, CAR_CATEGORIES, CarCategory } from '@/data/services';
import { Check, ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import { formatINR } from '@/lib/formatting';

interface PricingPreviewProps {
  onOpenBookingWithService?: (serviceId: string) => void;
}

export default function PricingPreview({ onOpenBookingWithService }: PricingPreviewProps) {
  const [selectedCategory, setSelectedCategory] = useState<CarCategory>('m_suv');

  const highlightedServiceIds = [
    'full-car-foam-wash',
    'deep-interior-cleaning',
    'rubbing-polish-teflon',
    'ceramic-wash',
  ];

  const carServices = SERVICES_DATA.filter((s) => highlightedServiceIds.includes(s.id));

  return (
    <section className="py-10 md:py-12 lg:py-14 bg-[#FFF9EF] border-t border-[#DDD6CB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Transparent Workshop Rates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              Premium Care. <br />
              <span className="text-[#087F75] italic font-serif">Clear Pricing.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#445452] max-w-xl leading-relaxed">
              Zero ambiguity. Toggle your vehicle size to see calibrated baseline prices derived straight from our workshop service board.
            </p>
          </div>

          {/* Vehicle Category Switcher Pills */}
          <div className="max-w-full overflow-x-auto no-scrollbar inline-flex p-1 sm:p-1.5 rounded-full bg-white border border-[#DDD6CB] self-start md:self-auto shadow-sm relative">
            {CAR_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative z-10 whitespace-nowrap px-3 min-[380px]:px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] min-[380px]:text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                    isSelected
                      ? 'text-white'
                      : 'text-[#445452] hover:text-[#202C2C]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#087F75] rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat.id === 'small' && 'Small Hatch'}
                  {cat.id === 'm_suv' && 'Mid-SUV'}
                  {cat.id === 'suv_xl' && 'SUV XL / Full Size'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Info Banner */}
        <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#DDD6CB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#087F75]" />
            <span className="font-bold text-[#202C2C]">
              Showing rates for: {CAR_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
            </span>
            <span className="text-[#52615E] hidden sm:inline">
              ({CAR_CATEGORIES.find((c) => c.id === selectedCategory)?.examples})
            </span>
          </div>

          <Link
            href="/services"
            className="text-[#087F75] hover:text-[#06665F] font-bold flex items-center gap-1.5"
          >
            <span>See full catalog &amp; bike rates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {carServices.map((service) => {
            const price = service.pricing[selectedCategory];
            const isVerified = service.pricing.isVerified;

            return (
              <div
                key={service.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DDD6CB] hover:border-[#087F75] flex flex-col justify-between transition-all duration-300 group shadow-[0_8px_30px_rgba(32,44,44,0.05)] hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#087F75] px-3 py-1 rounded-full bg-[#F5EBDD] font-bold border border-[#DDD6CB]">
                      {service.category.replace('-', ' ')}
                    </span>
                    {!isVerified && (
                      <span className="text-xs font-mono text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 font-semibold">
                        Signboard check
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#202C2C] group-hover:text-[#087F75] transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#445452] leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mt-4 pt-3 border-t border-[#DDD6CB] space-y-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#202C2C] font-medium">
                        <Check className="w-4 h-4 text-[#087F75] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-5 pt-3.5 border-t border-[#DDD6CB] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#52615E] block font-semibold">
                      Price ({selectedCategory.replace('_', ' ').toUpperCase()})
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                        className="text-2xl sm:text-3xl font-extrabold text-[#202C2C] tracking-tight"
                      >
                        {price ? formatINR(price) : 'Contact for Price'}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => onOpenBookingWithService && onOpenBookingWithService(service.id)}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#087F75] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#06665F] transition-all hover:scale-105 shadow-sm"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
