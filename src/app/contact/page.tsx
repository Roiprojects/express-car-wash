'use client';

import React from 'react';
import { BUSINESS_CONFIG } from '@/data/business';
import ContactForm from '@/components/contact/ContactForm';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Sparkles, Navigation } from 'lucide-react';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';
import { useBooking } from '@/components/layout/AppShell';

export default function ContactPage() {
  const { openBooking } = useBooking();

  return (
    <div className="bg-[#0C1016]">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#252B34]">
        <div className="absolute inset-0 automotive-grid pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Workshop Access & Bay Booking</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              GET IN TOUCH. <br />
              <span className="text-gradient-cyan">VISIT OUR BAYS.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#738CAC] leading-relaxed">
              Connect directly with our detailing master technicians via WhatsApp, telephone, or schedule your vehicle visit using our interactive planner.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-3xl bg-[#13171D] border border-[#252B34] space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">Direct Communications</h3>

              <div className="space-y-4">
                <a
                  href={generateQuickWhatsAppUrl('General contact page enquiry')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0C1016] hover:bg-accent text-white border border-[#252B34] transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-[#0C1016] group-hover:text-accent transition-colors">
                    <MessageSquare className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent group-hover:text-white block font-semibold">
                      Primary Channel
                    </span>
                    <span className="text-base font-bold text-white">WhatsApp Booking</span>
                    <span className="text-xs text-[#738CAC] group-hover:text-white/90 block">
                      {BUSINESS_CONFIG.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0C1016] hover:bg-[#19212A] text-white border border-[#252B34] transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#19212A] text-accent flex items-center justify-center font-bold flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#738CAC] block">
                      Direct Voice Line
                    </span>
                    <span className="text-base font-bold text-white">Call Workshop</span>
                    <span className="text-xs text-[#738CAC] block">
                      {BUSINESS_CONFIG.phone}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Hours & Minimum Time */}
            <div className="p-6 rounded-3xl bg-[#13171D] border border-[#252B34] space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white">Workshop Operating Hours</h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-white font-medium">
                      {BUSINESS_CONFIG.operatingHours.days}
                    </span>
                    <span className="text-xs text-[#738CAC]">
                      {BUSINESS_CONFIG.operatingHours.timing}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#252B34]">
                  <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-white font-medium">
                      {BUSINESS_CONFIG.serviceNotice.minimumWashTime}
                    </span>
                    <span className="text-xs text-[#738CAC]">
                      {BUSINESS_CONFIG.serviceNotice.disclaimer}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Map Card */}
            <div className="p-6 rounded-3xl bg-[#13171D] border border-[#252B34] space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Workshop Location</h3>
                <span className="text-[10px] font-mono text-accent bg-[#0C1016] px-2.5 py-0.5 rounded border border-[#252B34] font-semibold">
                  Bay Access
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#738CAC]">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p>
                  {BUSINESS_CONFIG.address.display}, {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state}
                </p>
              </div>

              {/* Map Placeholder with Honest Pin */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0C1016] border border-[#252B34] flex flex-col items-center justify-center p-6 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#13171D] border border-[#252B34] flex items-center justify-center text-accent">
                  <Navigation className="w-5 h-5 animate-pulse" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Precise GPS Pin On Appointment
                </h4>
                <p className="text-[11px] text-[#738CAC] max-w-xs leading-normal">
                  Exact Google Maps pin and bay entry directions are immediately dispatched to your WhatsApp upon booking your slot.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
