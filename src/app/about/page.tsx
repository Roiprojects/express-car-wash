'use client';

import React from 'react';
import Image from 'next/image';
import { BUSINESS_CONFIG } from '@/data/business';
import { useBooking } from '@/components/layout/AppShell';
import { Sparkles, CheckCircle2, ShieldCheck, Clock, Award, Droplets } from 'lucide-react';
import ConversionCTA from '@/components/home/ConversionCTA';

export default function AboutPage() {
  const { openBooking } = useBooking();

  const processStages = [
    {
      step: '01',
      title: 'Select Treatment & Intake',
      subtitle: 'Clear vehicle sizing & upfront requirements',
      description: 'You select your desired service package (Wash, Interior Spa, Machine Rubbing, or Ceramic Armor). Our technicians log your vehicle classification (Small, M SUV, SUV XL, or Two-Wheeler) and review any paint swirls or sensitive electronic accessories.',
    },
    {
      step: '02',
      title: 'Vehicle Assessment & Pre-Rinse',
      subtitle: 'Decontamination before contact',
      description: 'We perform a touchless high-pressure rinse to remove abrasive grit, followed by iron fallout de-ironizing on wheels and undercarriage diesel wash for tar-covered suspension components.',
    },
    {
      step: '03',
      title: 'Active Foam Detailing & Extraction',
      subtitle: 'pH-neutral active snow foam bath',
      description: 'Dual-bucket hand wash using ultra-soft microfiber mitts, high-foaming pH-neutral shampoo, soft-bristle crevice detailing on emblems and grilles, followed by hot water extraction on cabin upholstery.',
    },
    {
      step: '04',
      title: 'Microfiber Drying & Final Inspection',
      subtitle: 'Showroom inspection with the owner',
      description: 'Compressed air blows moisture from mirrors and badge recesses. Exterior paint receives a slick hydrophobic wipe or ceramic sealant, tyres are dressed with non-sling satin glaze, and you inspect your vehicle before departure.',
    },
  ];

  return (
    <div className="bg-[#FFF9EF]">
      {/* Editorial Page Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#DDD6CB] bg-[#F5EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EF] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-4 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Brand Heritage &amp; Detailing Standards — Est. 2015</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              The Story Behind <br />
              <span className="text-[#087F75] italic font-serif">{BUSINESS_CONFIG.brandName}.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#445452] leading-relaxed">
              Founded in 2015, we began with a single conviction: vehicle care should not scratch paint or rush through dirty panels. Today, across 2 branches in Bengaluru, we have evolved into a comprehensive automotive hub spanning precision foam washes, self-healing PPF, ceramic shields, vehicle wrapping, bodywork (tinkering &amp; painting), and styling accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Clarification & Story */}
      <section className="py-20 bg-[#FFF9EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#202C2C] leading-snug">
                Crafted for Passionate Automotive Owners
              </h2>
              <div className="space-y-4 text-base text-[#445452] leading-relaxed">
                <p>
                  At {BUSINESS_CONFIG.brandName}, every wash bay is engineered around vehicle preservation. Road salt, brake iron filings, industrial fallout, and acidic bird droppings constantly degrade factory clear coats.
                </p>
                <p>
                  Most drive-thru or quick roadside washes recycle gritty water or use abrasive brushes that permanently swirl paint. We practice the two-bucket grit guard method, employ heavy foam cannons, and use clean microfiber towels on every single panel.
                </p>
              </div>

              {/* Transparent Signboard & Posters note */}
              <div className="p-6 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] space-y-3 text-xs sm:text-sm shadow-sm">
                <div className="flex items-center gap-2 text-[#202C2C] font-serif font-bold text-base">
                  <ShieldCheck className="w-4 h-4 text-[#087F75]" />
                  <span>Branding, Branches &amp; Physical Verification Note</span>
                </div>
                <p className="text-[#445452] leading-relaxed">
                  {BUSINESS_CONFIG.legalEntityNotice}
                </p>
                <div className="pt-3 border-t border-[#DDD6CB] flex flex-wrap gap-4 text-xs font-mono text-[#52615E]">
                  <span>Primary: <strong className="text-[#087F75] font-bold">{BUSINESS_CONFIG.primaryPhone}</strong></span>
                  <span>Secondary: <strong className="text-[#202C2C] font-bold">{BUSINESS_CONFIG.secondaryPhone}</strong></span>
                  <span>Network: <strong className="text-[#087F75] font-bold">2 Branches in Bengaluru</strong></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#DDD6CB] shadow-xl bg-[#F5EBDD]">
                <Image
                  src="/images/maruti-swift.jpg"
                  alt="Detailed snow foam application on passenger car"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                  <span>Precision Active Snow Foam</span>
                  <span className="text-white font-bold">pH-Balanced 7.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[#F5EBDD] border-t border-[#DDD6CB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#202C2C]">
              Our Detailing Core Values
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#445452]">
              The operational rules that govern every vehicle in our workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-[#DDD6CB] space-y-3 shadow-[0_8px_30px_rgba(32,44,44,0.05)]">
              <div className="w-10 h-10 rounded-2xl bg-[#F5EBDD] flex items-center justify-center text-[#087F75]">
                <Clock className="w-5 h-5 text-[#087F75]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#202C2C]">No Rushed Washing</h3>
              <p className="text-xs sm:text-sm text-[#445452] leading-relaxed">
                As advertised on our workshop board, we honor a minimum 45-minute washing standard. Clean work takes deliberate time.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#DDD6CB] space-y-3 shadow-[0_8px_30px_rgba(32,44,44,0.05)]">
              <div className="w-10 h-10 rounded-2xl bg-[#F5EBDD] flex items-center justify-center text-[#087F75]">
                <Droplets className="w-5 h-5 text-[#087F75]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#202C2C]">Paint-Safe Chemistry</h3>
              <p className="text-xs sm:text-sm text-[#445452] leading-relaxed">
                We strictly avoid aggressive industrial acids or caustic sodas that strip waxes, stain rubber mouldings, or etch chrome accents.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#DDD6CB] space-y-3 shadow-[0_8px_30px_rgba(32,44,44,0.05)]">
              <div className="w-10 h-10 rounded-2xl bg-[#F5EBDD] flex items-center justify-center text-[#087F75]">
                <Award className="w-5 h-5 text-[#087F75]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#202C2C]">Honest Pricing</h3>
              <p className="text-xs sm:text-sm text-[#445452] leading-relaxed">
                Clear vehicle-size matrices. If any handwritten revision exists on our workshop board, we inform you upfront before starting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Process Timeline */}
      <section className="py-24 bg-[#FFF9EF] border-t border-[#DDD6CB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Standard Operational Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#202C2C]">
              The 4-Stage <span className="text-[#087F75] italic font-serif">Treatment Process.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#445452]">
              A systematic approach ensuring no corner, wheel rim, or interior seam is overlooked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stage) => (
              <div
                key={stage.step}
                className="relative p-7 rounded-3xl bg-white border border-[#DDD6CB] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="font-mono text-3xl font-black text-[#087F75] mb-4">
                    {stage.step}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#202C2C]">{stage.title}</h3>
                  <div className="text-xs font-mono text-[#087F75] font-bold mt-0.5 mb-3">
                    {stage.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[#445452] leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DDD6CB] flex items-center gap-1.5 text-xs text-[#202C2C] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#087F75]" />
                  <span>Workshop Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </div>
  );
}
