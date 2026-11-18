'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  MessageSquare, 
  MapPin, 
  Gem, 
  Bike, 
  Droplets,
  LayoutGrid
} from 'lucide-react';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';

interface LightHeroSectionProps {
  onOpenBooking?: () => void;
}

export default function LightHeroSection({ onOpenBooking }: LightHeroSectionProps) {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Soft Ambient Mint Organic Background Shapes */}
      <div className="absolute top-0 right-0 w-[55%] h-[85%] bg-gradient-to-bl from-[#E4F2EF]/70 via-[#F1F7F3]/50 to-transparent rounded-bl-[160px] pointer-events-none -z-0" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#E4F2EF]/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TWO-COLUMN SPLIT SCREEN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: 45% (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Eyebrow with horizontal line */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 h-[2px] bg-[#438E88]/60 inline-block" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#62747A] uppercase">
                CAR &amp; BIKE CARE EXPERTS IN BENGALURU
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] text-[#253C42] leading-[1.12] tracking-tight">
              Your Vehicle Deserves <br />
              a <span className="text-[#438E88] italic font-serif">Fresh Start.</span>
            </h1>

            {/* Subtext Paragraph */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#62747A] leading-relaxed max-w-lg font-normal">
              Professional car and bike washing, detailing, ceramic coating, PPF, wrapping, and accessories — all under one roof for a cleaner, shinier and longer-lasting ride.
            </p>

            {/* Call To Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary CTA: Explore Services */}
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#438E88] hover:bg-[#32766F] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#438E88]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <LayoutGrid className="w-4 h-4 text-white/90" />
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: WhatsApp */}
              <a
                href={generateQuickWhatsAppUrl('Hello! I would like to book a wash/detailing service.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#F1F7F3] text-[#438E88] font-bold text-sm sm:text-base tracking-wide border border-[#438E88]/40 shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 fill-[#438E88] text-[#438E88]" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 55% (col-span-7) */}
          <div className="lg:col-span-7 relative w-full mt-4 lg:mt-0">
            {/* Floating Badge 1: Top-Left (Deep Cleaning & Detailing) */}
            <div className="absolute -top-4 sm:-top-5 left-4 sm:left-8 z-30 bg-white/95 backdrop-blur-md border border-[#E3EBE7] shadow-[0_10px_25px_rgba(37,60,66,0.10)] rounded-2xl px-4 py-2.5 flex items-center gap-3 animate-float pointer-events-none">
              <div className="w-9 h-9 rounded-xl bg-[#E4F2EF] text-[#438E88] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-[#438E88]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#253C42] leading-tight">Deep Cleaning</span>
                <span className="text-[11px] font-medium text-[#62747A] leading-tight">&amp; Detailing</span>
              </div>
            </div>

            {/* Floating Badge 2: Top-Right (PPF & Paint Protection) */}
            <div className="absolute -top-4 sm:-top-5 right-4 sm:right-8 z-30 bg-white/95 backdrop-blur-md border border-[#E3EBE7] shadow-[0_10px_25px_rgba(37,60,66,0.10)] rounded-2xl px-4 py-2.5 flex items-center gap-3 animate-float [animation-delay:1.5s] pointer-events-none">
              <div className="w-9 h-9 rounded-xl bg-[#E4F2EF] text-[#438E88] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#438E88]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#253C42] leading-tight">PPF &amp;</span>
                <span className="text-[11px] font-medium text-[#62747A] leading-tight">Paint Protection</span>
              </div>
            </div>

            {/* Organic Curved Photo Frame */}
            <div className="relative w-full rounded-[36px] sm:rounded-[44px] lg:rounded-[52px] bg-gradient-to-tr from-[#E4F2EF] via-[#F1F7F3] to-[#E4F2EF]/60 p-2 sm:p-3 border border-[#E3EBE7] shadow-xl shadow-[#253C42]/8">
              <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] aspect-[16/10] bg-[#F1F7F3]">
                <Image
                  src="/images/hero/kousalyas-hero-vehicles.jpg"
                  alt="Kousalya's Express Car Wash — Tata Nexon SUV, Bajaj Pulsar 150 Bike and Honda Activa Scooter in Bangalore Wash Bay"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle soft gradient reflection at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Badge 3: Bottom-Right (Ceramic Coating) */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-30 bg-white/95 backdrop-blur-md border border-[#E3EBE7] shadow-[0_10px_25px_rgba(37,60,66,0.10)] rounded-2xl px-4 py-2.5 flex items-center gap-3 animate-float [animation-delay:3s] pointer-events-none">
              <div className="w-9 h-9 rounded-xl bg-[#E4F2EF] text-[#438E88] flex items-center justify-center flex-shrink-0">
                <Gem className="w-4 h-4 text-[#438E88]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#253C42] leading-tight">Ceramic</span>
                <span className="text-[11px] font-medium text-[#62747A] leading-tight">Coating</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM HORIZONTAL SERVICE HIGHLIGHT STRIP */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="w-full bg-[#F1F7F3] border border-[#E3EBE7] rounded-3xl lg:rounded-full px-5 sm:px-8 py-4 sm:py-4.5 flex flex-wrap items-center justify-between gap-4 sm:gap-6 shadow-sm">
            {/* Service 1: Foam Wash */}
            <div className="flex items-center gap-2.5">
              <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-[#438E88]" />
              <span className="text-xs sm:text-sm font-bold text-[#253C42]">Foam Wash</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[#E3EBE7]" />

            {/* Service 2: Ceramic Coating */}
            <div className="flex items-center gap-2.5">
              <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-[#438E88]" />
              <span className="text-xs sm:text-sm font-bold text-[#253C42]">Ceramic Coating</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[#E3EBE7]" />

            {/* Service 3: PPF */}
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#438E88]" />
              <span className="text-xs sm:text-sm font-bold text-[#253C42]">PPF</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[#E3EBE7]" />

            {/* Service 4: Bike Wash */}
            <div className="flex items-center gap-2.5">
              <Bike className="w-4 h-4 sm:w-5 sm:h-5 text-[#438E88]" />
              <span className="text-xs sm:text-sm font-bold text-[#253C42]">Bike Wash</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[#E3EBE7]" />

            {/* Service 5: Accessories */}
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#438E88]" />
              <span className="text-xs sm:text-sm font-bold text-[#253C42]">Accessories</span>
            </div>

            {/* 3 Branches Pill */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-2 sm:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E4F2EF] hover:bg-[#d8ece8] text-[#438E88] font-bold text-xs sm:text-sm border border-[#438E88]/20 shadow-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#438E88] fill-[#438E88]/20" />
                <span>3 Branches in Bengaluru</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Bottom Mint Organic Wave */}
      <div className="relative w-full h-12 sm:h-16 mt-8 sm:mt-12 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
        >
          <path
            d="M0,32 C320,72 480,10 720,40 C960,70 1120,20 1440,50 L1440,80 L0,80 Z"
            fill="#F1F7F3"
            fillOpacity="0.7"
          />
          <path
            d="M0,45 C280,20 540,65 820,35 C1100,5 1280,55 1440,35 L1440,80 L0,80 Z"
            fill="#E4F2EF"
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </section>
  );
}
