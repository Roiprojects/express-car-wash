'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ServiceItem, CarCategory } from '@/data/services';
import { formatINR } from '@/lib/formatting';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';
import { Clock, Check, Sparkles, MessageSquare, Calendar, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

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

  return (
    <div className="group rounded-3xl bg-[#13171D] border border-[#252B34] hover:border-accent flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300">
      {/* Top Image Banner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#19212A]">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13171D] via-transparent to-transparent opacity-90" />

        {/* Badges */}
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

        {/* Time duration floating badge */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C1016]/85 backdrop-blur-md text-white font-mono text-[11px] border border-[#252B34] font-medium shadow-sm">
          <Clock className="w-3.5 h-3.5 text-accent" />
          <span>{service.estimatedDuration}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
              {service.name}
            </h3>
            <span className="text-[11px] font-mono text-[#738CAC] uppercase px-2.5 py-1 rounded-md bg-[#19212A] whitespace-nowrap font-medium">
              {service.vehicleType === 'bike' ? 'Motorcycle' : 'Automobile'}
            </span>
          </div>

          <p className="mt-2.5 text-xs sm:text-sm text-[#738CAC] leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Expandable full description */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-[#252B34] space-y-3 animate-in fade-in duration-200">
              <p className="text-xs text-white/90 leading-relaxed">
                {service.fullDescription}
              </p>
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider block font-semibold">
                  Package Inclusions:
                </span>
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white font-medium">
                    <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-xs font-semibold text-accent hover:text-accent-hover flex items-center gap-1 focus:outline-none"
          >
            <span>{isExpanded ? 'Show less' : 'View treatment details & steps'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Pricing & Booking Row */}
        <div className="mt-6 pt-5 border-t border-[#252B34] space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#738CAC] block">
                {service.vehicleType === 'bike'
                  ? 'Bike Rate'
                  : `Car Rate (${selectedCarCategory.replace('_', ' ').toUpperCase()})`}
              </span>
              <div className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span>{price ? formatINR(price) : 'Enquire'}</span>
                {!isVerified && (
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-normal">
                    To confirm
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={generateQuickWhatsAppUrl(`Booking Enquiry for ${service.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#19212A] hover:bg-[#252B34] text-accent border border-[#252B34] hover:border-accent transition-colors"
                title="Direct WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>

              <button
                onClick={() => onOpenBooking(service.id)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-sm shadow-accent/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Bay</span>
              </button>
            </div>
          </div>

          {!isVerified && service.pricing.statusNote && (
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200 text-[11px] flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-400" />
              <span>{service.pricing.statusNote}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
