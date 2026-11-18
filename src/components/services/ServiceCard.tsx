'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ServiceItem, CarCategory } from '@/data/services';
import { formatINR } from '@/lib/formatting';
import { generateQuickWhatsAppUrl, generateBikeServiceWhatsAppUrl } from '@/lib/whatsapp';
import { Clock, Check, MessageSquare, Calendar, ChevronDown, ChevronUp, AlertCircle, ShieldAlert } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  selectedCarCategory: CarCategory;
  onOpenBooking: (serviceId: string) => void;
}

export default function ServiceCard({
  service,
  selectedCarCategory,
  onOpenBooking,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Price determination
  const price =
    service.vehicleType === 'bike'
      ? service.pricing.bike
      : service.pricing[selectedCarCategory];

  const isVerified = service.pricing.isVerified;
  const isCustomQuote = service.pricing.isCustomQuote;

  return (
    <div className="group rounded-3xl bg-white border border-[#DDD6CB] hover:border-[#087F75] flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgba(32,44,44,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Top Image Banner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5EBDD]">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white border border-[#DDD6CB] text-[#202C2C] font-bold shadow-sm">
            {service.category.replace('-', ' ')}
          </span>
          {service.badge && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#087F75] text-white shadow-sm">
              {service.badge}
            </span>
          )}
        </div>

        {/* Time duration floating badge */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#202C2C] font-mono text-xs border border-[#DDD6CB] font-bold shadow-sm">
          <Clock className="w-3.5 h-3.5 text-[#087F75]" />
          <span>{service.estimatedDuration}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-7 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-serif font-bold text-[#202C2C] group-hover:text-[#087F75] transition-colors leading-snug">
              {service.name}
            </h3>
            <span className="text-xs font-mono text-[#087F75] uppercase px-3 py-1 rounded-full bg-[#F5EBDD] whitespace-nowrap font-bold border border-[#DDD6CB]">
              {service.vehicleType === 'bike' ? 'Two-Wheeler' : service.vehicleType === 'both' ? 'Car & Bike' : 'Automobile'}
            </span>
          </div>

          <p className="mt-3 text-sm text-[#445452] leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Regulatory / Service notice if present */}
          {service.notice && (
            <div className="mt-3 p-3 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] text-[#087F75] text-xs flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#087F75]" />
              <span className="font-semibold">{service.notice}</span>
            </div>
          )}

          {/* Expandable full description */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-[#DDD6CB] space-y-3 animate-in fade-in duration-200">
              <p className="text-sm text-[#445452] leading-relaxed">
                {service.fullDescription}
              </p>
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono text-[#087F75] uppercase tracking-wider block font-bold">
                  Package Inclusions:
                </span>
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#202C2C] font-medium">
                    <Check className="w-4 h-4 text-[#087F75] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-xs sm:text-sm font-bold text-[#087F75] hover:text-[#06665F] flex items-center gap-1 focus:outline-none"
          >
            <span>{isExpanded ? 'Show less' : 'View treatment details & steps'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Pricing & Booking Row */}
        <div className="mt-7 pt-5 border-t border-[#DDD6CB] space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#52615E] block font-semibold">
                {isCustomQuote
                  ? 'Quotation'
                  : service.vehicleType === 'bike'
                  ? 'Two-Wheeler Rate'
                  : `Car Rate (${selectedCarCategory.replace('_', ' ').toUpperCase()})`}
              </span>
              <div className="text-2xl font-bold text-[#202C2C] tracking-tight flex items-center gap-2">
                <span>
                  {isCustomQuote
                    ? 'Custom Quote'
                    : price
                    ? formatINR(price)
                    : service.vehicleType === 'bike'
                    ? 'Contact for Price'
                    : 'Enquire'}
                </span>
                {!isVerified && !isCustomQuote && (
                  <span className="text-xs font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-semibold">
                    {service.vehicleType === 'bike' ? 'Confirm rate' : 'Signboard ref'}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={
                  service.vehicleType === 'bike'
                    ? generateBikeServiceWhatsAppUrl(service.name)
                    : generateQuickWhatsAppUrl(`Enquiry for ${service.name}`)
                }
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-[#F5EBDD] text-[#087F75] border border-[#DDD6CB] hover:border-[#087F75] transition-colors shadow-sm"
                title="Direct WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>

              {service.vehicleType === 'bike' ? (
                <a
                  href={generateBikeServiceWhatsAppUrl(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#087F75] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#06665F] transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Enquire</span>
                </a>
              ) : isCustomQuote ? (
                <a
                  href={generateQuickWhatsAppUrl(`Quote enquiry for ${service.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#087F75] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#06665F] transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Enquire</span>
                </a>
              ) : (
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#087F75] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#06665F] transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Bay</span>
                </button>
              )}
            </div>
          </div>

          {!isVerified && service.pricing.statusNote && (
            <div className="p-3 rounded-xl bg-[#F5EBDD] border border-[#DDD6CB] text-[#445452] text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#087F75]" />
              <span>{service.pricing.statusNote}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
