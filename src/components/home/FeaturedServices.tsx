'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data/services';
import { ArrowRight, Clock, Sparkles, Calendar, ChevronRight, MessageSquare } from 'lucide-react';
import { formatINR } from '@/lib/formatting';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';

interface FeaturedServicesProps {
  onOpenBookingWithService?: (serviceId: string) => void;
}

export default function FeaturedServices({ onOpenBookingWithService }: FeaturedServicesProps) {
  const featuredIds = [
    'full-car-foam-wash',
    'ceramic-coating',
    'graphene-coating',
    'paint-protection-film-ppf',
    'deep-interior-cleaning',
    'rubbing-and-polishing',
    'vehicle-wrapping',
    'automotive-accessories-fitment',
  ];

  const featuredServices = SERVICES_DATA.filter((s) => featuredIds.includes(s.id));

  return (
    <section className="py-20 lg:py-28 bg-[#FFF9EF] border-t border-[#DDD6CB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Comprehensive Automotive Care Spectrum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              Featured Services &amp; <br />
              <span className="text-[#087F75] italic font-serif">Detailing Packages.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#445452] leading-relaxed">
              Explore specialized treatments for daily hatchbacks, sedans, SUVs, and commuter two-wheelers.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#087F75] uppercase tracking-wider hover:text-[#06665F] transition-colors group self-start md:self-end"
          >
            <span>View All Services &amp; Category Explorer</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => {
            const startingPrice =
              service.vehicleType === 'bike'
                ? service.pricing.bike
                : service.pricing.small || service.pricing.m_suv;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#DDD6CB] hover:border-[#087F75] overflow-hidden shadow-[0_4px_20px_rgba(32,44,44,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Service Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5EBDD]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white border border-[#DDD6CB] text-[#202C2C] font-bold shadow-sm">
                      {service.category.replace('-', ' ')}
                    </span>
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#087F75] text-white shadow-sm">
                        {service.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#202C2C] group-hover:text-[#087F75] transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#445452] line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="mt-3.5 flex items-center gap-2 text-xs sm:text-sm text-[#52615E]">
                      <span className="flex items-center gap-1 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-[#087F75]" />
                        {service.estimatedDuration}
                      </span>
                      <span>•</span>
                      <span className="text-[#202C2C] font-semibold capitalize">
                        {service.vehicleType === 'bike' ? 'Two-Wheeler' : service.vehicleType === 'both' ? 'Car & Bike' : 'Car & SUV'}
                      </span>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-6 pt-4 border-t border-[#DDD6CB] flex items-center justify-between gap-2">
                    <div>
                      <span className="block text-xs uppercase font-mono tracking-wider text-[#52615E] font-semibold">
                        Baseline
                      </span>
                      <div className="text-lg font-bold text-[#202C2C]">
                        {service.pricing.isCustomQuote
                          ? 'Quote on Req.'
                          : startingPrice
                          ? formatINR(startingPrice)
                          : 'Inquire Rate'}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/services?highlight=${service.id}`}
                        className="p-2.5 rounded-xl bg-[#F5EBDD] hover:bg-[#DDD6CB] text-[#202C2C] transition-colors"
                        title="View Full Details"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                      {service.pricing.isCustomQuote ? (
                        <a
                          href={generateQuickWhatsAppUrl(`Quote enquiry for ${service.name}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-[#087F75] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#06665F] transition-colors shadow-sm flex items-center gap-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-current" />
                          <span>Quote</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => onOpenBookingWithService && onOpenBookingWithService(service.id)}
                          className="px-4 py-2.5 rounded-xl bg-[#087F75] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#06665F] transition-colors shadow-sm flex items-center gap-1.5"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
