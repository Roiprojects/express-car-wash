'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_CONFIG } from '@/data/business';
import { useBooking } from '@/components/layout/AppShell';
import { Sparkles, CheckCircle2, ShieldCheck, Clock, ArrowRight, Layers, Award, Droplets } from 'lucide-react';
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
    <div className="bg-[#0C1016]">
      {/* Editorial Page Hero */}
      <section className="relative py-20 overflow-hidden border-b border-[#252B34]">
        <div className="absolute inset-0 automotive-grid pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brand Heritage & Detailing Standards — Est. 2015</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              THE STORY BEHIND <br />
              <span className="text-gradient-cyan">{BUSINESS_CONFIG.brandName.toUpperCase()}.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#738CAC] leading-relaxed">
              Founded in 2015, we began with a single conviction: vehicle care should not scratch paint or rush through dirty panels. Today, across 3 advertised branches in Bengaluru, we have evolved into a comprehensive automotive hub spanning precision foam washes, self-healing PPF, ceramic shields, vehicle wrapping, bodywork (tinkering & painting), and styling accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Clarification & Story */}
      <section className="py-20 bg-[#10151D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                CRAFTED FOR PASSIONATE AUTOMOTIVE OWNERS
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#738CAC] leading-relaxed">
                <p>
                  At {BUSINESS_CONFIG.brandName}, every wash bay is engineered around vehicle preservation. Road salt, brake iron filings, industrial fallout, and acidic bird droppings constantly degrade factory clear coats.
                </p>
                <p>
                  Most drive-thru or quick roadside washes recycle gritty water or use abrasive brushes that permanently swirl paint. We practice the two-bucket grit guard method, employ heavy foam cannons, and use clean microfiber towels on every single panel.
                </p>
              </div>

              {/* Transparent Signboard & Posters note */}
              <div className="p-4 rounded-2xl bg-[#13171D] border border-[#252B34] space-y-3 text-xs shadow-sm">
                <div className="flex items-center gap-2 text-white font-bold">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Branding, Branches & Physical Verification Note</span>
                </div>
                <p className="text-[#738CAC] leading-relaxed">
                  {BUSINESS_CONFIG.legalEntityNotice}
                </p>
                <div className="pt-2 border-t border-[#252B34] flex flex-wrap gap-4 text-[11px] font-mono text-white/80">
                  <span>Primary: <strong className="text-accent">{BUSINESS_CONFIG.primaryPhone}</strong></span>
                  <span>Secondary: <strong className="text-white">{BUSINESS_CONFIG.secondaryPhone}</strong></span>
                  <span>Network: <strong className="text-accent">3 Advertised Branches</strong></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#252B34] shadow-2xl bg-[#13171D]">
                <Image
                  src="/images/maruti-swift.jpg"
                  alt="Detailed snow foam application on passenger car"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1016]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white">
                  <span>Precision Active Snow Foam</span>
                  <span className="text-accent font-bold">pH-Balanced 7.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[#0C1016] border-t border-[#252B34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              OUR DETAILING CORE VALUES
            </h2>
            <p className="mt-2 text-sm text-[#738CAC]">
              The operational rules that govern every vehicle in our workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#13171D] border border-[#252B34] space-y-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#0C1016] border border-[#252B34] flex items-center justify-center text-accent">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">No Rushed Washing</h3>
              <p className="text-xs text-[#738CAC] leading-relaxed">
                As advertised on our workshop board, we honor a minimum 45-minute washing standard. Clean work takes deliberate time.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#13171D] border border-[#252B34] space-y-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#0C1016] border border-[#252B34] flex items-center justify-center text-accent">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Paint-Safe Chemistry</h3>
              <p className="text-xs text-[#738CAC] leading-relaxed">
                We strictly avoid aggressive industrial acids or caustic sodas that strip waxes, stain rubber mouldings, or etch chrome accents.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#13171D] border border-[#252B34] space-y-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#0C1016] border border-[#252B34] flex items-center justify-center text-accent">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Honest Pricing</h3>
              <p className="text-xs text-[#738CAC] leading-relaxed">
                Clear vehicle-size matrices. If any handwritten revision exists on our workshop board, we inform you upfront before starting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Process Timeline */}
      <section className="py-24 bg-[#10151D] border-t border-[#252B34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Standard Operational Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              THE 4-STAGE <span className="text-gradient-cyan">TREATMENT PROCESS.</span>
            </h2>
            <p className="mt-3 text-sm text-[#738CAC]">
              A systematic approach ensuring no corner, wheel rim, or interior seam is overlooked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stage) => (
              <div
                key={stage.step}
                className="relative p-6 rounded-3xl bg-[#13171D] border border-[#252B34] flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="font-mono text-3xl font-black text-accent mb-4">
                    {stage.step}
                  </div>
                  <h3 className="text-lg font-bold text-white">{stage.title}</h3>
                  <div className="text-[11px] font-mono text-accent font-semibold mt-0.5 mb-3">
                    {stage.subtitle}
                  </div>
                  <p className="text-xs text-[#738CAC] leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#252B34] flex items-center gap-1.5 text-[11px] text-white/80 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
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
