'use client';

import React, { useState } from 'react';
import { VEHICLE_TERMS_DATA } from '@/data/terms';
import { BUSINESS_CONFIG } from '@/data/business';
import { CAR_CATEGORIES } from '@/data/services';
import { useBooking } from '@/components/layout/AppShell';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';
import ConversionCTA from '@/components/home/ConversionCTA';
import {
  FileText,
  Car,
  Bike,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  CheckCircle2,
  Sliders,
} from 'lucide-react';

export default function TermsAndConditionsPage() {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState<string>('cars-suvs');
  const [expandedTermId, setExpandedTermId] = useState<string | null>(null);

  const toggleTerm = (termId: string) => {
    setExpandedTermId((prev) => (prev === termId ? null : termId));
  };

  const currentPolicy =
    VEHICLE_TERMS_DATA.find((p) => p.category === activeCategory) ||
    VEHICLE_TERMS_DATA[0];

  return (
    <div className="bg-[#FFF9EF]">
      {/* Page Hero */}
      <section className="relative py-10 sm:py-12 overflow-hidden border-b border-[#DDD6CB] bg-[#F5EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EF] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Workshop Service Agreements &amp; Policy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              Vehicle-Specific <br />
              <span className="text-[#087F75] italic font-serif">Terms &amp; Conditions.</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#445452] leading-relaxed">
              Automotive detailing protocols, warranty validations, and bay operating terms calibrated specifically to your car, motorcycle, or specialized coating treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-12 lg:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2.5 p-1.5 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] shadow-sm">
          {VEHICLE_TERMS_DATA.map((policy) => {
            const isSelected = activeCategory === policy.category;
            const Icon =
              policy.category === 'cars-suvs'
                ? Car
                : policy.category === 'motorcycles-bikes'
                ? Bike
                : policy.category === 'ppf-ceramic-coatings'
                ? ShieldCheck
                : FileText;

            return (
              <button
                key={policy.category}
                onClick={() => {
                  setActiveCategory(policy.category);
                  setExpandedTermId(null);
                }}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#087F75] text-white shadow-md'
                    : 'bg-white text-[#445452] hover:text-[#202C2C] hover:bg-[#FFF9EF] border border-[#DDD6CB]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#087F75]'}`} />
                <span>{policy.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Current Category Context Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DDD6CB] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#087F75]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#087F75] font-bold">
                Applicable Vehicles
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#202C2C]">
              {currentPolicy.targetVehicles}
            </h2>
            <p className="text-xs sm:text-sm text-[#52615E] mt-0.5">
              Service Tiers: {currentPolicy.applicableTiers}
            </p>
          </div>

          <a
            href={generateQuickWhatsAppUrl(`Query regarding terms for ${currentPolicy.badge}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5EBDD] hover:bg-[#DDD6CB] text-[#087F75] font-bold text-xs uppercase tracking-wider transition-colors shrink-0 border border-[#DDD6CB]"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Clarify with Technician</span>
          </a>
        </div>

        {/* Vehicle Classification Matrix Reference (Only shown when Cars & SUVs is selected) */}
        {activeCategory === 'cars-suvs' && (
          <div className="p-5 sm:p-6 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#202C2C]">
              <Sliders className="w-4 h-4 text-[#087F75]" />
              <h3 className="font-serif font-bold text-base sm:text-lg">
                Four-Wheeler Sizing &amp; Classification Reference
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#445452] leading-relaxed">
              To guarantee transparent pricing, vehicle rates strictly adhere to outer dimensions. Refer to standard classifications below:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
              {CAR_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="p-4 rounded-xl bg-white border border-[#DDD6CB] space-y-2 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-sm text-[#202C2C]">
                      {cat.label}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F5EBDD] text-[#087F75] font-bold uppercase">
                      {cat.id.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-xs text-[#52615E] leading-snug">
                    <strong className="text-[#445452]">Common Models:</strong> {cat.examples}
                  </p>
                  <p className="text-[11px] text-[#087F75] font-medium pt-1 border-t border-[#DDD6CB]">
                    Standard bay footprint calibration
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Terms Accordion Cards */}
        <div className="space-y-4">
          {currentPolicy.keyTerms.map((term, index) => {
            const isExpanded = expandedTermId === term.id || expandedTermId === null;

            return (
              <div
                key={term.id}
                className="rounded-2xl bg-white border border-[#DDD6CB] hover:border-[#087F75]/60 transition-all duration-200 overflow-hidden shadow-xs"
              >
                {/* Header Row */}
                <button
                  type="button"
                  onClick={() => toggleTerm(term.id)}
                  className="w-full p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 text-left focus:outline-none bg-white hover:bg-[#FFF9EF]/50 transition-colors"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F5EBDD] text-[#087F75] font-mono font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#202C2C] leading-snug">
                        {term.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#445452] mt-1 leading-relaxed">
                        {term.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-1 rounded-lg text-[#087F75] hover:bg-[#F5EBDD] shrink-0 mt-1 sm:mt-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-[#DDD6CB]/70 space-y-3.5 bg-white">
                    <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#445452]">
                      {term.details.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#087F75] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {term.importantNote && (
                      <div className="p-3.5 rounded-xl bg-[#FFF9EF] border border-amber-200 text-xs text-[#202C2C] flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-900 block font-bold mb-0.5">
                            Customer Notice:
                          </strong>
                          <span className="text-[#445452]">{term.importantNote}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 45-Minute Minimum Commitment Callout */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#087F75] shrink-0 mt-0.5" />
            <div>
              <span className="font-serif font-bold text-sm sm:text-base text-[#202C2C] block">
                {BUSINESS_CONFIG.serviceNotice.minimumWashTime}
              </span>
              <p className="text-xs text-[#52615E] mt-0.5 leading-relaxed">
                {BUSINESS_CONFIG.serviceNotice.disclaimer}
              </p>
            </div>
          </div>

          <button
            onClick={() => openBooking()}
            className="px-5 py-2.5 rounded-full bg-[#087F75] hover:bg-[#06665F] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm shrink-0 whitespace-nowrap"
          >
            Book Wash Bay
          </button>
        </div>
      </section>

      {/* Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </div>
  );
}
