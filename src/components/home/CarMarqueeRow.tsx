'use client';

import React from 'react';
import Image from 'next/image';
import { EverydayCarCard } from '@/data/everydayCars';

interface CarMarqueeRowProps {
  cars: EverydayCarCard[];
  direction: 'left' | 'right';
  className?: string;
  speedSeconds?: number;
}

export default function CarMarqueeRow({
  cars,
  direction,
  className = '',
  speedSeconds = 28,
}: CarMarqueeRowProps) {
  const baseSet = [...cars, ...cars];
  const marqueeItems = [...baseSet, ...baseSet];

  return (
    <div className={`overflow-hidden select-none py-2 w-full ${className}`}>
      <div
        className={
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {marqueeItems.map((car, index) => (
          <div
            key={`${car.id}-${index}`}
            className="flex-shrink-0 mx-2.5 sm:mx-3.5 w-[260px] sm:w-[320px] md:w-[360px]"
          >
            <div className="group relative rounded-2xl overflow-hidden bg-white border border-[#DDD6CB] hover:border-[#087F75] transition-all duration-300 shadow-md hover:shadow-xl">
              {/* Image Container with Crisp 16/10 Ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5EBDD]">
                <Image
                  src={car.image}
                  alt={car.altText}
                  fill
                  sizes="(max-width: 768px) 260px, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={index < 5 ? 'eager' : 'lazy'}
                  priority={index < 3}
                />

                {/* Subtle bottom gradient for card badge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                {/* Vehicle Brand & Category Badge */}
                <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DDD6CB] text-xs font-mono uppercase tracking-wider text-[#087F75] font-bold shadow-sm">
                  <span>{car.category}</span>
                </div>
              </div>

              {/* Vehicle Model & Detailing Service Tag */}
              <div className="p-4 bg-white border-t border-[#DDD6CB] flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#202C2C] group-hover:text-[#087F75] transition-colors truncate">
                    {car.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#445452] font-medium mt-0.5 truncate">
                    {car.treatmentTag}
                  </p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#087F75] flex-shrink-0 group-hover:scale-125 transition-transform shadow-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
