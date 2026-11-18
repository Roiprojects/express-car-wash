'use client';

import React from 'react';
import { BUSINESS_CONFIG } from '@/data/business';
import ContactForm from '@/components/contact/ContactForm';
import { Phone, MessageSquare, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';
import { useBooking } from '@/components/layout/AppShell';

export default function ContactPage() {
  const { openBooking } = useBooking();

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#E3EBE7] bg-[#F1F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-4 font-semibold border border-[#438E88]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
              <span>Workshop Access &amp; Bay Booking</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#253C42] leading-tight tracking-tight">
              Get in Touch. <br />
              <span className="text-[#438E88] italic font-serif">Visit Our Bays.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#62747A] leading-relaxed">
              Connect directly with our detailing master technicians via WhatsApp, telephone, or schedule your vehicle visit using our interactive planner.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Cards */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBE7] space-y-6 shadow-[0_8px_30px_rgba(37,60,66,0.06)]">
              <h3 className="text-xl font-serif font-bold text-[#253C42]">Direct Communications</h3>

              <div className="space-y-4">
                <a
                  href={generateQuickWhatsAppUrl('General contact page enquiry')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#E4F2EF] hover:bg-[#d8ece8] text-[#253C42] border border-[#438E88]/20 transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#438E88] text-white flex items-center justify-center font-bold flex-shrink-0">
                    <MessageSquare className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#438E88] block font-bold">
                      Primary Channel (WhatsApp)
                    </span>
                    <span className="text-base font-bold text-[#253C42]">Chat &amp; Book Slots</span>
                    <span className="text-xs text-[#62747A] block font-medium">
                      +91 70223 38693
                    </span>
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:7022338693"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#F1F7F3] hover:bg-[#E4F2EF] text-[#253C42] border border-[#E3EBE7] transition-all shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-[#438E88] border border-[#E3EBE7] flex items-center justify-center font-bold flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#62747A] block font-medium">
                        Primary (Posters)
                      </span>
                      <span className="text-sm font-bold text-[#253C42]">70223 38693</span>
                    </div>
                  </a>

                  <a
                    href="tel:9741074019"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#F1F7F3] hover:bg-[#E4F2EF] text-[#253C42] border border-[#E3EBE7] transition-all shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-[#438E88] border border-[#E3EBE7] flex items-center justify-center font-bold flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#62747A] block font-medium">
                        Secondary (Signboard)
                      </span>
                      <span className="text-sm font-bold text-[#253C42]">97410 74019</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours & Minimum Time */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F1F7F3] border border-[#E3EBE7] space-y-4 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-[#253C42]">Workshop Operating Hours</h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#438E88] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#253C42] font-semibold">
                      {BUSINESS_CONFIG.operatingHours.days}
                    </span>
                    <span className="text-xs text-[#62747A]">
                      {BUSINESS_CONFIG.operatingHours.timing}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#E3EBE7]">
                  <ShieldCheck className="w-4 h-4 text-[#438E88] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#253C42] font-semibold">
                      {BUSINESS_CONFIG.serviceNotice.minimumWashTime}
                    </span>
                    <span className="text-xs text-[#62747A]">
                      {BUSINESS_CONFIG.serviceNotice.disclaimer}
                    </span>
                  </div>
                </div>
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
