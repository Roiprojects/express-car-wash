'use client';

import React, { useEffect, useState } from 'react';
import { BUSINESS_CONFIG } from '@/data/business';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [curtainOut, setCurtainOut] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    const timer1 = setTimeout(() => {
      setCurtainOut(true);
    }, 1100);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0C1016] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        curtainOut ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Subtle glowing aura */}
        <div className="absolute -inset-10 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

        {/* Wordmark with mask animation */}
        <div className="relative mb-6 overflow-hidden">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-accent flex items-center justify-center font-black text-white text-3xl shadow-xl shadow-accent/20 animate-pulse">
            EX
          </div>
        </div>

        <div className="overflow-hidden">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tighter text-white uppercase">
            {BUSINESS_CONFIG.brandName}
          </h1>
        </div>

        <p className="mt-2 text-xs uppercase tracking-widest text-[#738CAC] font-mono">
          Automotive Detailing Spa
        </p>

        {/* Cyan loading bar */}
        <div className="w-48 h-1 bg-[#252B34] rounded-full mt-6 overflow-hidden relative">
          <div className="h-full bg-accent rounded-full animate-[shimmer_1.2s_ease-in-out_infinite] w-full origin-left" />
        </div>
      </div>
    </div>
  );
}
