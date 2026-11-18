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
  // Highlight full spectrum: Washing, Coatings, PPF, Interior, Polishing, Wrapping, Accessories
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
    <section className="py-24 bg-[#0C1016] border-t border-[#252B34] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Automotive Care Spectrum</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              FEATURED SERVICES & <br />
              <span className="text-gradient-cyan">DETAILING PACKAGES.</span>
            </h2>
            <p className="mt-3 text-sm text-[#738CAC] leading-relaxed">
              Explore specialized treatments for daily hatchbacks, sedans, SUVs, and commuter two-wheelers.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider hover:text-[#10B6C5] transition-colors group self-start md:self-end"
          >
            <span>View All Services & Category Explorer</span>
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
                className="group relative flex flex-col justify-between rounded-3xl bg-[#13171D] border border-[#252B34] hover:border-accent overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(6,157,173,0.12)]"
              >
                {/* Service Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#19212A]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13171D] via-[#13171D]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase bg-[#0C1016]/90 backdrop-blur-md border border-[#252B34] text-white font-semibold">
                      {service.category.replace('-', ' ')}
                    </span>
                    {service.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-accent text-white shadow-sm">
                        {service.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#738CAC] line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-[11px] text-[#738CAC]">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-accent" />
                        {service.estimatedDuration}
                      </span>
                      <span>•</span>
                      <span className="text-white/80 font-medium capitalize">
                        {service.vehicleType === 'bike' ? 'Two-Wheeler' : service.vehicleType === 'both' ? 'Car & Bike' : 'Car & SUV'}
                      </span>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-5 pt-3 border-t border-[#252B34] flex items-center justify-between gap-2">
                    <div>
                      <span className="block text-[9px] uppercase font-mono tracking-wider text-[#738CAC] font-medium">
                        Baseline
                      </span>
                      <div className="text-base font-extrabold text-white">
                        {service.pricing.isCustomQuote
                          ? 'Quote on Req.'
                          : startingPrice
                          ? formatINR(startingPrice)
                          : 'Inquire Rate'}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Link
                        href={`/services?highlight=${service.id}`}
                        className="p-2 rounded-lg bg-[#19212A] hover:bg-[#252B34] text-white transition-colors"
                        title="View Full Details"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                      {service.pricing.isCustomQuote ? (
                        <a
                          href={generateQuickWhatsAppUrl(`Quote enquiry for ${service.name}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-lg bg-accent text-white font-bold text-[11px] uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-sm flex items-center gap-1"
                        >
                          <MessageSquare className="w-3 h-3 fill-current" />
                          <span>Quote</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => onOpenBookingWithService && onOpenBookingWithService(service.id)}
                          className="px-3 py-2 rounded-lg bg-accent text-white font-bold text-[11px] uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-sm flex items-center gap-1"
                        >
                          <Calendar className="w-3 h-3" />
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
