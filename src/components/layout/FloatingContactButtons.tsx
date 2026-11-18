'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS_CONFIG } from '@/data/business';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';

export default function FloatingContactButtons() {
  const shouldReduceMotion = useReducedMotion();

  // Primary business phone formatted for tel: protocol
  const phoneE164 = BUSINESS_CONFIG.primaryPhone.replace(/\s+/g, '');
  const whatsappUrl = generateQuickWhatsAppUrl('Instant enquiry from website');

  return (
    <div
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 flex flex-col items-start gap-3 pointer-events-none select-none pb-[env(safe-area-inset-bottom)]"
      role="region"
      aria-label="Quick Contact Actions"
    >
      {/* Button 1: Call (Icon Only) */}
      <motion.a
        href={`tel:${phoneE164}`}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#087F75] hover:bg-[#06655D] active:bg-[#05534C] text-white shadow-[0_4px_14px_rgba(8,127,117,0.35)] hover:shadow-[0_6px_20px_rgba(8,127,117,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F75]"
        aria-label="Call Express Car Wash"
      >
        <Phone className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

        {/* Desktop Hover Tooltip */}
        <span
          className="hidden md:block absolute left-14 px-3 py-1.5 rounded-lg bg-[#202C2C] text-white text-xs font-semibold whitespace-nowrap shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
          role="tooltip"
        >
          Call Express Car Wash
        </span>
      </motion.a>

      {/* Button 2: WhatsApp (Icon Only) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] text-white shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        aria-label="Chat with Express Car Wash on WhatsApp"
      >
        <svg
          className="w-5 h-5 fill-current text-white transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Desktop Hover Tooltip */}
        <span
          className="hidden md:block absolute left-14 px-3 py-1.5 rounded-lg bg-[#202C2C] text-white text-xs font-semibold whitespace-nowrap shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
          role="tooltip"
        >
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
