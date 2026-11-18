'use client';

import React from 'react';
import {
  Bike,
  Sliders,
  ShieldCheck,
  ShieldAlert,
  Layers,
  MapPin,
} from 'lucide-react';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function WhyChooseUs() {
  const features: FeatureCard[] = [
    {
      id: 'bike-car',
      title: 'Dedicated Bike & Car Bays',
      description: 'Low-pressure washes, chain cleaning, and scratch-free detailing for both cars and daily two-wheelers.',
      icon: Bike,
    },
    {
      id: 'pricing',
      title: 'Tier-Based Pricing',
      description: 'Transparent rates calibrated directly to your exact hatchback, sedan, compact SUV, or XL vehicle class.',
      icon: Sliders,
    },
    {
      id: 'ppf-ceramic',
      title: 'PPF & Ceramic Armor',
      description: 'Self-healing optical TPU films and 9H/10H nano-ceramic coatings applied in dust-controlled studios.',
      icon: ShieldAlert,
    },
    {
      id: 'accessories',
      title: 'Styling & Accessories',
      description: 'Alloys, tyres, infotainment setups, and legal solar films installed with warranty-safe coupler wiring.',
      icon: Layers,
    },
    {
      id: 'duration',
      title: '45-Minute Minimum Care',
      description: 'Verified 45-minute minimum attention to ensure thorough crevice cleaning without rushed wipe-downs.',
      icon: ShieldCheck,
    },
    {
      id: 'branches',
      title: '3 Bengaluru Branches',
      description: 'Three convenient workshop bays across the city with real-time WhatsApp coordination and live pins.',
      icon: MapPin,
    },
  ];

  // Double the set to create a seamless infinite marquee loop
  const baseSet = [...features, ...features];
  const marqueeItems = [...baseSet, ...baseSet];

  return (
    <section
      className="py-8 sm:py-10 bg-[#F1F7F3] border-t border-[#E3EBE7] relative overflow-hidden select-none"
      aria-label="Why Choose Us"
    >
      {/* Compact Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#253C42] tracking-tight">
          WHY CHOOSE US
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#62747A]">
          Complete care for your everyday car and bike.
        </p>
      </div>

      {/* Auto-scrolling Infinite Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#F1F7F3] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#F1F7F3] to-transparent z-10" />

        {/* Continuous Right-to-Left Scrolling Track */}
        <div
          className="animate-marquee-left flex py-2"
          style={{ animationDuration: '30s' }}
        >
          {marqueeItems.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={`${feature.id}-${index}`}
                className="flex-shrink-0 mx-1.5 sm:mx-2 w-[220px] sm:w-[240px]"
              >
                <div className="h-[175px] p-4 sm:p-4.5 rounded-2xl bg-white border border-[#E3EBE7] flex flex-col justify-start transition-all duration-300 shadow-[0_4px_16px_rgba(37,60,66,0.04)]">
                  {/* Small Teal Icon */}
                  <div className="w-8 h-8 rounded-xl bg-[#E4F2EF] text-[#438E88] flex items-center justify-center mb-3 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Short Heading */}
                  <h3 className="text-sm font-serif font-bold text-[#253C42] leading-snug line-clamp-1">
                    {feature.title}
                  </h3>

                  {/* One or Two Lines of Description */}
                  <p className="mt-1.5 text-xs text-[#62747A] leading-relaxed line-clamp-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
