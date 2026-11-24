'use client';

import React from 'react';
import { BUSINESS_CONFIG } from '@/data/business';
import ContactForm from '@/components/contact/ContactForm';
import { Phone, MessageSquare, Clock, ShieldCheck, Sparkles, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';
import { useBooking } from '@/components/layout/AppShell';

export default function ContactPage() {
  const { openBooking } = useBooking();

  return (
    <div className="bg-[#FFF9EF]">
      {/* Page Hero */}
      <section className="relative py-10 sm:py-12 overflow-hidden border-b border-[#DDD6CB] bg-[#F5EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EF] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Workshop Access &amp; Bay Booking</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              Get in Touch. <br />
              <span className="text-[#087F75] italic font-serif">Visit Our Bays.</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#445452] leading-relaxed">
              Connect directly with our detailing master technicians via WhatsApp, telephone, or schedule your vehicle visit using our interactive planner.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-10 sm:py-12 lg:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFF9EF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            {/* Quick Contact Cards */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DDD6CB] space-y-4 shadow-[0_8px_30px_rgba(32,44,44,0.05)]">
              <h3 className="text-2xl font-serif font-bold text-[#202C2C]">Direct Communications</h3>

              <div className="space-y-4">
                <a
                  href={generateQuickWhatsAppUrl('General contact page enquiry')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#F5EBDD] hover:bg-[#ebdcc7] text-[#202C2C] border border-[#DDD6CB] transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#087F75] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                    <MessageSquare className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#087F75] block font-bold">
                      Primary Channel (WhatsApp)
                    </span>
                    <span className="text-lg font-bold text-[#202C2C]">Chat &amp; Book Slots</span>
                    <span className="text-sm text-[#445452] block font-medium">
                      +91 70223 38693
                    </span>
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:7022338693"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFF9EF] hover:bg-[#F5EBDD] text-[#202C2C] border border-[#DDD6CB] transition-all shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-[#087F75] border border-[#DDD6CB] flex items-center justify-center font-bold flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#52615E] block font-medium">
                        Primary (Posters)
                      </span>
                      <span className="text-sm font-bold text-[#202C2C]">70223 38693</span>
                    </div>
                  </a>

                  <a
                    href="tel:9741074019"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFF9EF] hover:bg-[#F5EBDD] text-[#202C2C] border border-[#DDD6CB] transition-all shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-[#087F75] border border-[#DDD6CB] flex items-center justify-center font-bold flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#52615E] block font-medium">
                        Secondary (Signboard)
                      </span>
                      <span className="text-sm font-bold text-[#202C2C]">97410 74019</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Channels: Facebook & Instagram */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DDD6CB] space-y-4 shadow-[0_8px_30px_rgba(32,44,44,0.05)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#087F75] font-bold">
                  Official Social Channels
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#087F75] bg-[#F5EBDD] px-2.5 py-0.5 rounded-full border border-[#DDD6CB] font-semibold">
                  Daily Bay Updates
                </span>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-[#202C2C]">
                  Follow Us Online
                </h3>
                <p className="text-xs sm:text-sm text-[#445452] mt-1 leading-relaxed">
                  Catch everyday car &amp; bike transformations, active foam washes, customer reviews, and detailing reels fresh from our bays.
                </p>
              </div>

              <div className="space-y-3">
                {/* Facebook Card */}
                <a
                  href={BUSINESS_CONFIG.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={BUSINESS_CONFIG.social.facebook.label}
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#FFF9EF] hover:bg-[#F5EBDD] border border-[#DDD6CB] hover:border-[#1877F2] text-[#202C2C] transition-all duration-300 group shadow-sm active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-offset-2"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-[1.08] transition-transform duration-300 shrink-0">
                      <Facebook className="w-5 h-5 text-white stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#52615E] block font-semibold">
                        Follow Us on Facebook
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#202C2C] group-hover:text-[#1877F2] transition-colors">
                        {BUSINESS_CONFIG.social.facebook.handle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1877F2] uppercase tracking-wider pr-1">
                    <span className="hidden sm:inline">Follow</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>

                {/* Instagram Card */}
                <a
                  href={BUSINESS_CONFIG.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={BUSINESS_CONFIG.social.instagram.label}
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#FFF9EF] hover:bg-[#F5EBDD] border border-[#DDD6CB] hover:border-[#E1306C] text-[#202C2C] transition-all duration-300 group shadow-sm active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#E1306C] focus:ring-offset-2"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      style={{ background: 'linear-gradient(135deg, #833AB4, #C13584, #E1306C, #F77737, #FCAF45)' }}
                      className="w-11 h-11 rounded-xl text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-[1.08] transition-transform duration-300 shrink-0"
                    >
                      <Instagram className="w-5 h-5 text-white stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#52615E] block font-semibold">
                        Follow Us on Instagram
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#202C2C] group-hover:text-[#E1306C] transition-colors">
                        {BUSINESS_CONFIG.social.instagram.handle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#E1306C] uppercase tracking-wider pr-1">
                    <span className="hidden sm:inline">Follow</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </div>
            </div>

            {/* Hours & Minimum Time */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] space-y-3.5 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-[#202C2C]">Workshop Operating Hours</h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#087F75] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#202C2C] font-bold">
                      {BUSINESS_CONFIG.operatingHours.days}
                    </span>
                    <span className="text-xs text-[#52615E]">
                      {BUSINESS_CONFIG.operatingHours.timing}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#DDD6CB]">
                  <ShieldCheck className="w-5 h-5 text-[#087F75] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#202C2C] font-bold">
                      {BUSINESS_CONFIG.serviceNotice.minimumWashTime}
                    </span>
                    <span className="text-xs text-[#52615E]">
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
