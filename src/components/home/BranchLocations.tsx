'use client';

import React from 'react';
import { BRANCHES_DATA, BRANCHES_SECTION_CONFIG } from '@/data/branches';
import { MapPin, Phone, Sparkles, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { generateBranchWhatsAppUrl } from '@/lib/whatsapp';

export default function BranchLocations() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#E3EBE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-3 font-semibold border border-[#438E88]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
            <span>{BRANCHES_SECTION_CONFIG.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#253C42] leading-tight tracking-tight">
            Find Your <span className="text-[#438E88] italic font-serif">Nearest Branch.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#62747A] leading-relaxed">
            {BRANCHES_SECTION_CONFIG.subtitle}
          </p>
        </div>

        {/* 3 Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANCHES_DATA.map((branch) => (
            <div
              key={branch.id}
              className="group p-8 rounded-3xl bg-white border border-[#E3EBE7] hover:border-[#438E88] flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(37,60,66,0.06)] hover:-translate-y-1 hover:shadow-xl relative"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] border border-[#438E88]/20">
                    {branch.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#62747A]">
                    <Clock className="w-3.5 h-3.5 text-[#438E88]" />
                    <span>8:00 AM – 8:30 PM</span>
                  </div>
                </div>

                {/* Branch Name & Role */}
                <h3 className="text-xl font-serif font-bold text-[#253C42] group-hover:text-[#438E88] transition-colors duration-300 leading-snug">
                  {branch.name}
                </h3>
                <p className="text-xs text-[#438E88] font-bold mt-1">
                  {branch.role}
                </p>

                {/* Address Placeholder & Notice */}
                <div className="mt-5 p-3.5 rounded-2xl bg-[#F1F7F3] border border-[#E3EBE7] flex items-start gap-2.5 text-xs text-[#62747A]">
                  <MapPin className="w-4 h-4 text-[#438E88] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {branch.addressPlaceholder}
                  </span>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-2 pt-4 border-t border-[#E3EBE7]">
                  {branch.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#253C42]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#438E88] mt-1.5 shrink-0" />
                      <span className="leading-snug font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Call & WhatsApp Location Pin */}
              <div className="mt-8 pt-5 border-t border-[#E3EBE7] space-y-2.5">
                <a
                  href={generateBranchWhatsAppUrl(branch.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#438E88] hover:bg-[#32766F] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Live Location Pin</span>
                </a>

                <a
                  href={`tel:${branch.contactNumber}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white border border-[#E3EBE7] text-[#253C42] hover:text-[#438E88] hover:border-[#438E88] font-bold text-xs tracking-wider transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#438E88]" />
                  <span>Call {branch.phoneFormatted}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Disclaimer */}
        <div className="mt-12 p-5 rounded-2xl bg-[#F1F7F3] border border-[#E3EBE7] flex items-center justify-between flex-wrap gap-4 text-xs text-[#62747A] shadow-sm">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#438E88] shrink-0" />
            <span>{BRANCHES_SECTION_CONFIG.verificationNotice}</span>
          </div>
          <span className="text-[#438E88] font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-[#E4F2EF] border border-[#438E88]/20">
            3 Workshop Locations
          </span>
        </div>
      </div>
    </section>
  );
}
