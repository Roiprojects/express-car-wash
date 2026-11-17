'use client';

import React from 'react';
import Link from 'next/link';
import { BUSINESS_CONFIG } from '@/data/business';
import { Phone, MessageSquare, MapPin, Clock, ArrowUpRight, Shield, Sparkles } from 'lucide-react';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0C1016] text-[#738CAC] border-t border-[#252B34] overflow-hidden">
      {/* Subtle top cyan line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#252B34]">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-black text-white text-xl shadow-md shadow-accent/20">
                EX
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white tracking-tight block">
                  {BUSINESS_CONFIG.brandName}
                </span>
                <span className="text-xs text-[#738CAC] uppercase tracking-wider block font-medium">
                  Car & Bike Detailing Spa
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#738CAC] max-w-sm">
              {BUSINESS_CONFIG.tagline}
            </p>

            <div className="p-4 rounded-2xl bg-[#13171D] border border-[#252B34] space-y-2 text-xs shadow-sm">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Shield className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Notice on Brand & Signboard</span>
              </div>
              <p className="text-[11px] text-[#738CAC] leading-normal">
                {BUSINESS_CONFIG.legalEntityNotice}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={generateQuickWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wide hover:bg-accent-hover transition-colors shadow-sm shadow-accent/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#13171D] border border-[#252B34] text-white font-semibold text-xs hover:border-accent hover:text-accent transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
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
                    className="hover:text-accent transition-colors flex items-center gap-1 group text-[#738CAC]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Core Treatments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Full Car Foam Wash', category: 'car-wash' },
                { name: 'Deep Car Foam Wash', category: 'car-wash' },
                { name: 'Full Car Diesel Wash', category: 'car-wash' },
                { name: 'Deep Interior Cleaning', category: 'interior' },
                { name: 'Rubbing Polish / Teflon', category: 'polishing-waxing' },
                { name: 'Ceramic Wash & Wax', category: 'ceramic' },
                { name: 'Ceramic Coating 9H / 10H', category: 'ceramic' },
                { name: 'Superbike Foam Wash', category: 'bike-wash' },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href="/services"
                    className="hover:text-accent transition-colors block text-xs py-0.5 text-[#738CAC]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Workshop Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">{BUSINESS_CONFIG.phone}</span>
                  <span className="text-[11px] text-[#738CAC]">Direct phone line & WhatsApp booking</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">{BUSINESS_CONFIG.operatingHours.days}</span>
                  <span className="text-[11px] text-[#738CAC]">{BUSINESS_CONFIG.operatingHours.timing}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">{BUSINESS_CONFIG.serviceNotice.minimumWashTime}</span>
                  <span className="text-[11px] text-[#738CAC]">Advisable baseline for safe detailing</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">{BUSINESS_CONFIG.address.display}</span>
                  <span className="text-[11px] text-[#738CAC]">Specific workshop coordinates shared on booking</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#738CAC]">
          <p>
            © {currentYear} {BUSINESS_CONFIG.brandName}. All rights reserved. Professional Automotive Care.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-accent transition-colors">
              Pricing Transparency
            </Link>
            <Link href="/faq" className="hover:text-accent transition-colors">
              Service FAQ
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
