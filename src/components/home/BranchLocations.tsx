'use client';

import React from 'react';
import { BRANCHES_DATA, BRANCHES_SECTION_CONFIG } from '@/data/branches';
import { MapPin, Phone, Sparkles, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { generateBranchWhatsAppUrl } from '@/lib/whatsapp';

export default function BranchLocations() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFF9EF] border-t border-[#DDD6CB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
            <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
            <span>{BRANCHES_SECTION_CONFIG.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
            Find Your <span className="text-[#087F75] italic font-serif">Nearest Branch.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#445452] leading-relaxed">
            {BRANCHES_SECTION_CONFIG.subtitle}
          </p>
        </div>

        {/* 2 Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {BRANCHES_DATA.map((branch) => (
            <div
              key={branch.id}
              className="group p-8 rounded-3xl bg-white border border-[#DDD6CB] hover:border-[#087F75] flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(32,44,44,0.05)] hover:-translate-y-1 hover:shadow-xl relative"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] border border-[#DDD6CB]">
                    {branch.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#52615E] font-medium">
                    <Clock className="w-4 h-4 text-[#087F75]" />
                    <span>8:00 AM – 8:30 PM</span>
                  </div>
                </div>

                {/* Branch Name & Role */}
                <h3 className="text-xl font-serif font-bold text-[#202C2C] group-hover:text-[#087F75] transition-colors duration-300 leading-snug">
                  {branch.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#087F75] font-bold mt-1">
                  {branch.role}
                </p>

                {/* Address Placeholder & Notice */}
                <div className="mt-5 p-4 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] flex items-start gap-2.5 text-xs sm:text-sm text-[#445452]">
                  <MapPin className="w-4 h-4 text-[#087F75] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {branch.addressPlaceholder}
                  </span>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-[#DDD6CB]">
                  {branch.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#202C2C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087F75] mt-2 shrink-0" />
                      <span className="leading-snug font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Call & WhatsApp Location Pin */}
              <div className="mt-8 pt-5 border-t border-[#DDD6CB] space-y-2.5">
                <a
                  href={generateBranchWhatsAppUrl(branch.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#087F75] hover:bg-[#06665F] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Live Location Pin</span>
                </a>

                <a
                  href={`tel:${branch.contactNumber}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white border border-[#DDD6CB] text-[#202C2C] hover:text-[#087F75] hover:border-[#087F75] font-bold text-xs sm:text-sm tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#087F75]" />
                  <span>Call {branch.phoneFormatted}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Disclaimer */}
        <div className="mt-12 p-5 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] flex items-center justify-between flex-wrap gap-4 text-xs sm:text-sm text-[#445452] shadow-sm">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#087F75] shrink-0" />
            <span>{BRANCHES_SECTION_CONFIG.verificationNotice}</span>
          </div>
          <span className="text-[#087F75] font-mono text-xs font-bold px-3 py-1 rounded-full bg-white border border-[#DDD6CB]">
            3 Workshop Locations
          </span>
        </div>
      </div>
    </section>
  );
}
