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
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  {BUSINESS_CONFIG.brandName}
                </span>
                <span className="text-xs text-[#738CAC] uppercase tracking-wider block font-medium">
                  Car, Bike, PPF & Accessories Spa
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#738CAC] max-w-sm">
              {BUSINESS_CONFIG.tagline} Advertised across 3 branches in Bengaluru with dust-free bays for ceramic coating and PPF application.
            </p>

            <div className="p-4 rounded-2xl bg-[#13171D] border border-[#252B34] space-y-2 text-xs shadow-sm">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Shield className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Notice on Brand & Network</span>
              </div>
              <p className="text-[11px] text-[#738CAC] leading-normal">
                {BUSINESS_CONFIG.legalEntityNotice} Established year 2015 and branch addresses are subject to business confirmation.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={generateQuickWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wide hover:bg-accent-hover transition-colors shadow-sm shadow-accent/20"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.primaryPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#13171D] border border-[#252B34] text-white font-semibold text-xs hover:border-accent hover:text-accent transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Call {BUSINESS_CONFIG.primaryPhoneFormatted}</span>
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

          {/* Extended Service Catalog */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
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
                    className="hover:text-accent transition-colors block text-xs py-0.5 text-[#738CAC]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact, Phone Lines & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Contact & Branches
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">
                    Primary: {BUSINESS_CONFIG.primaryPhoneFormatted}
                  </span>
                  <span className="block text-white/90 font-medium">
                    Secondary: {BUSINESS_CONFIG.secondaryPhoneFormatted}
                  </span>
                  <span className="text-[11px] text-[#738CAC]">Direct calls & WhatsApp booking</span>
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
                  <span className="text-[11px] text-[#738CAC]">Advertised standard for thorough cleaning</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">3 Branches in Bengaluru</span>
                  <span className="text-[11px] text-[#738CAC]">Live GPS location pins shared on WhatsApp</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#738CAC]">
          <p>
            © {currentYear} {BUSINESS_CONFIG.brandName}. All rights reserved. Car & Bike Detailing, Paint Protection & Accessories.
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
