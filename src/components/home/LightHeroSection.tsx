'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
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
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageRevealVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.2 },
    },
  };

  const secondaryCardVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 30, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.5 },
    },
  };

  return (
    <section className="relative w-full bg-[#FFF9EF] overflow-hidden pt-6 pb-6 sm:pt-8 sm:pb-7 lg:pt-10 lg:pb-7">
      {/* Soft Ambient Warm Beige Organic Shapes */}
      <div className="absolute top-0 right-0 w-[55%] h-[85%] bg-gradient-to-bl from-[#F5EBDD]/80 via-[#F5EBDD]/40 to-transparent rounded-bl-[160px] pointer-events-none -z-0" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#F5EBDD]/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TWO-COLUMN SPLIT SCREEN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: 45% (col-span-5) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow with horizontal line */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-[2px] bg-[#087F75] inline-block" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#52615E] uppercase">
                CAR &amp; BIKE CARE EXPERTS IN BENGALURU
              </span>
            </motion.div>

            {/* Main Headline - High Contrast Charcoal */}
            <motion.h1 
              variants={itemVariants} 
              className="font-serif font-bold text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] text-[#202C2C] leading-[1.14] tracking-tight"
            >
              Your Vehicle Deserves <br />
              a <span className="text-[#087F75] italic font-serif">Fresh Start.</span>
            </motion.h1>

            {/* Subtext Paragraph - Crisp 17px/18px readable text */}
            <motion.p 
              variants={itemVariants} 
              className="mt-3.5 sm:mt-4 text-base sm:text-lg text-[#445452] leading-relaxed max-w-lg font-normal"
            >
              Professional car and bike washing, detailing and protection for your everyday ride.
            </motion.p>

            {/* Call To Action Buttons - Solid and High Contrast */}
            <motion.div variants={itemVariants} className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-3.5">
              {/* Primary CTA: Explore Services */}
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#087F75] hover:bg-[#06665F] text-white font-bold text-sm sm:text-base tracking-wide shadow-md shadow-[#087F75]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <LayoutGrid className="w-4 h-4 text-white" />
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: WhatsApp */}
              <a
                href={generateQuickWhatsAppUrl('Hello! I would like to book a wash/detailing service.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F5EBDD] text-[#087F75] font-bold text-sm sm:text-base tracking-wide border-2 border-[#087F75] shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 fill-current text-[#087F75]" />
                <span>Book on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: 55% (col-span-7) - Cinematic Layered Automotive Visual */}
          <div className="lg:col-span-7 relative w-full mt-4 lg:mt-0">
            {/* Primary Car Wash Image Frame */}
            <motion.div 
              variants={imageRevealVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full rounded-[36px] sm:rounded-[44px] lg:rounded-[52px] bg-gradient-to-tr from-[#F5EBDD] via-[#FFF9EF] to-[#F5EBDD] p-2 sm:p-3 border border-[#DDD6CB] shadow-xl shadow-[#202C2C]/5"
            >
              <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] aspect-[16/10] bg-[#F5EBDD]">
                <Image
                  src="/images/hero/express-hero-vehicles.jpg"
                  alt="Express Car Wash — Tata Nexon SUV, Bajaj Pulsar 150 Bike and Honda Activa Scooter in Bangalore Wash Bay"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle soft gradient reflection at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge: Bay Status */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#DDD6CB] shadow-sm text-xs font-mono font-bold text-[#202C2C]">
                  <span className="w-2 h-2 rounded-full bg-[#087F75] animate-ping" />
                  <span>3 Bays Active Today</span>
                </div>
              </div>
            </motion.div>

            {/* Secondary Layer: Dedicated Two-Wheeler Detailing Card */}
            <motion.div
              variants={secondaryCardVariants}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-5 sm:-bottom-7 -left-3 sm:-left-6 z-30 bg-white border border-[#DDD6CB] shadow-[0_16px_35px_rgba(32,44,44,0.12)] rounded-3xl p-3 sm:p-3.5 flex items-center gap-3 sm:gap-4 max-w-[280px] sm:max-w-[320px] backdrop-blur-md"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-[#F5EBDD] shrink-0 border border-[#DDD6CB]">
                <Image
                  src="/images/bikes/honda-activa-cleaning.jpg"
                  alt="Honda Activa Scooter deep clean in two-wheeler bay"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Bike className="w-3.5 h-3.5 text-[#087F75]" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#087F75]">
                    Dedicated Bike Bays
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-[#202C2C] leading-snug truncate">
                  Bikes &amp; Scooters Detailing
                </h4>
                <p className="text-[11px] text-[#52615E] leading-tight mt-0.5">
                  Chain lube, foam bath &amp; wax
                </p>
              </div>
            </motion.div>

            {/* Floating Protection Badge (Top-Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-3 sm:-top-4 -right-2 sm:-right-4 z-30 bg-white border border-[#DDD6CB] shadow-[0_10px_25px_rgba(32,44,44,0.08)] rounded-2xl px-3.5 py-2 flex items-center gap-2.5 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-xl bg-[#F5EBDD] text-[#087F75] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#087F75]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#202C2C] leading-tight">PPF &amp; Ceramic</span>
                <span className="text-[10px] font-medium text-[#52615E] leading-tight">Clean Room Bays</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM HORIZONTAL SERVICE HIGHLIGHT STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 sm:mt-7 lg:mt-8"
        >
          <div className="w-full bg-[#F5EBDD] border border-[#DDD6CB] rounded-2xl lg:rounded-full px-4 sm:px-6 py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-3 sm:gap-5 shadow-sm">
            {/* Service 1: Foam Wash */}
            <div className="flex items-center gap-2.5">
              <Droplets className="w-5 h-5 text-[#087F75]" />
              <span className="text-sm font-bold text-[#202C2C]">Foam Wash</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[#DDD6CB]" />

            {/* Service 2: Ceramic Coating */}
            <div className="flex items-center gap-2.5">
              <Gem className="w-5 h-5 text-[#087F75]" />
              <span className="text-sm font-bold text-[#202C2C]">Ceramic Coating</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[#DDD6CB]" />

            {/* Service 3: PPF */}
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#087F75]" />
              <span className="text-sm font-bold text-[#202C2C]">PPF</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[#DDD6CB]" />

            {/* Service 4: Bike Wash */}
            <div className="flex items-center gap-2.5">
              <Bike className="w-5 h-5 text-[#087F75]" />
              <span className="text-sm font-bold text-[#202C2C]">Bike Wash</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[#DDD6CB]" />

            {/* Service 5: Accessories */}
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-[#087F75]" />
              <span className="text-sm font-bold text-[#202C2C]">Accessories</span>
            </div>

            {/* 2 Branches Pill */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-2 sm:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#FFF9EF] text-[#087F75] font-bold text-xs sm:text-sm border border-[#DDD6CB] shadow-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#087F75]" />
                <span>2 Branches in Bengaluru</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
