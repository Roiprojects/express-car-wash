'use client';

import React from 'react';
import Link from 'next/link';
import { BUSINESS_CONFIG } from '@/data/business';
import { Phone, MessageSquare, MapPin, Clock, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F5EBDD] text-[#445452] border-t border-[#DDD6CB] overflow-hidden">
      {/* Subtle top teal accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#087F75]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#DDD6CB]">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-3">
              <BrandLogo size="xl" showText={false} />
              <div>
                <span className="font-serif font-bold text-xl text-[#202C2C] tracking-tight block">
                  {BUSINESS_CONFIG.brandName}
                </span>
                <span className="text-xs text-[#52615E] uppercase tracking-wider block font-semibold">
                  Car, Bike, PPF &amp; Accessories Spa
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#445452] max-w-sm">
              Professional car and bike washing, detailing, ceramic coating, PPF, wrapping, and accessories — all under one roof across 2 branches in Bengaluru.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-[#DDD6CB] space-y-2 text-xs sm:text-sm shadow-sm">
              <div className="flex items-center gap-2 text-[#202C2C] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#087F75] flex-shrink-0" />
                <span>Notice on Brand &amp; Network</span>
              </div>
              <p className="text-xs text-[#52615E] leading-relaxed">
                {BUSINESS_CONFIG.legalEntityNotice} Established year 2015 and branch addresses are subject to business confirmation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={generateQuickWhatsAppUrl('Hello from website footer!')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#087F75] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#06665F] transition-colors shadow-sm shadow-[#087F75]/20"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:7022338693"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#DDD6CB] text-[#202C2C] font-semibold text-xs hover:border-[#087F75] hover:text-[#087F75] transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#087F75]" />
                <span>Call +91 70223 38693</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#202C2C]">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services & Pricing' },
                { href: '/gallery', label: 'Before & After Gallery' },
                { href: '/testimonials', label: 'Client Reviews' },
                { href: '/faq', label: 'Frequently Asked Questions' },
                { href: '/contact', label: 'Contact & Bay Visit' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#087F75] transition-colors flex items-center gap-1.5 group text-[#445452] font-medium"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#087F75]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Extended Service Catalog */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#202C2C]">
              Specialized Care
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Full Car Foam Wash', category: 'car-wash' },
                { name: 'Bike Foam Wash & Chain Care', category: 'bike-wash' },
                { name: 'Deep Interior Steam Cleaning', category: 'interior' },
                { name: 'Rubbing & Paint Correction', category: 'polishing-waxing' },
                { name: 'Ceramic Coating (9H/10H)', category: 'ceramic' },
                { name: 'Graphene Matrix Shield', category: 'ceramic' },
                { name: 'Paint Protection Film (PPF)', category: 'ppf' },
                { name: 'Vehicle Wrapping & Sun Film', category: 'wrapping-films' },
                { name: 'Car Accessories & Fitments', category: 'accessories' },
                { name: 'Tinkering & Bodywork Painting', category: 'bodywork' },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href="/services"
                    className="hover:text-[#087F75] transition-colors block text-xs sm:text-sm py-0.5 text-[#445452] font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact, Phone Lines & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#202C2C]">
              Contact &amp; Branches
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#087F75] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#202C2C] font-bold">
                    Primary: +91 70223 38693
                  </span>
                  <span className="block text-[#445452] font-medium">
                    Secondary: +91 97410 74019
                  </span>
                  <span className="text-xs text-[#52615E]">Direct calls &amp; WhatsApp booking</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#087F75] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#202C2C] font-bold">{BUSINESS_CONFIG.operatingHours.days}</span>
                  <span className="text-xs text-[#52615E]">{BUSINESS_CONFIG.operatingHours.timing}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#087F75] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#202C2C] font-bold">{BUSINESS_CONFIG.serviceNotice.minimumWashTime}</span>
                  <span className="text-xs text-[#52615E]">Advertised standard for thorough cleaning</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#087F75] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#202C2C] font-bold">2 Branches in Bengaluru</span>
                  <span className="text-xs text-[#52615E]">Live GPS location pins shared on WhatsApp</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#52615E]">
          <p>
            © {currentYear} {BUSINESS_CONFIG.brandName}. All rights reserved. Car &amp; Bike Detailing, Paint Protection &amp; Accessories.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/services" className="hover:text-[#087F75] transition-colors">
              Pricing Transparency
            </Link>
            <Link href="/faq" className="hover:text-[#087F75] transition-colors">
              Service FAQ
            </Link>
            <Link href="/contact" className="hover:text-[#087F75] transition-colors">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
