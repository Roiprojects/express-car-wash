'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data/services';
import { ArrowRight, Clock, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { formatINR } from '@/lib/formatting';

interface FeaturedServicesProps {
  onOpenBookingWithService?: (serviceId: string) => void;
}

export default function FeaturedServices({ onOpenBookingWithService }: FeaturedServicesProps) {
  const featuredIds = [
    'full-car-foam-wash',
    'bike-foam-wash',
    'deep-interior-cleaning',
    'rubbing-polish-teflon',
    'ceramic-wash',
    'ceramic-coating',
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
              <span>Signature Workshop Treatments</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              PRECISION CRAFTED <br />
              <span className="text-gradient-cyan">DETAILING PACKAGES.</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider hover:text-[#10B6C5] transition-colors group"
          >
            <span>View All Services & Category Explorer</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredServices.map((service) => {
            const startingPrice =
              service.vehicleType === 'bike'
                ? service.pricing.bike
                : service.pricing.small || service.pricing.m_suv;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#13171D] border border-[#252B34] hover:border-accent overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Service Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#19212A]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13171D] via-[#13171D]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#0C1016]/85 backdrop-blur-md border border-[#252B34] text-white font-semibold">
                      {service.category.replace('-', ' ')}
                    </span>
                    {service.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-accent text-white shadow-sm">
                        {service.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#738CAC] line-clamp-2 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 flex items-center gap-3 text-xs text-[#738CAC]">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {service.estimatedDuration}
                      </span>
                      <span>•</span>
                      <span className="text-white/80 font-medium capitalize">
                        {service.vehicleType === 'bike' ? 'Motorcycle' : 'Car & SUV'}
                      </span>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-6 pt-4 border-t border-[#252B34] flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-[10px] uppercase font-mono tracking-wider text-[#738CAC] font-medium">
                        Starting From
                      </span>
                      <div className="text-xl font-black text-white">
                        {startingPrice ? formatINR(startingPrice) : 'To confirm'}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/services?highlight=${service.id}`}
                        className="p-2.5 rounded-xl bg-[#19212A] hover:bg-[#252B34] text-white transition-colors"
                        title="View Full Pricing"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                      <button
                        onClick={() => onOpenBookingWithService && onOpenBookingWithService(service.id)}
                        className="px-4 py-2.5 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-sm shadow-accent/20 flex items-center gap-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book</span>
                      </button>
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
