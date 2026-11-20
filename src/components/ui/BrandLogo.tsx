'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS_CONFIG } from '@/data/business';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  animate?: boolean;
  className?: string;
  href?: string;
}

export default function BrandLogo({
  size = 'md',
  showText = true,
  animate = false,
  className = '',
  href = '/',
}: BrandLogoProps) {
  const shouldReduceMotion = useReducedMotion();

  // Dimensions based on trimmed 929:763 aspect ratio (~1.2175:1)
  // md is tuned for the main navbar: 52px mobile, 60px tablet, 70px desktop (within 64-78px navbar)
  const imageDimensions = {
    sm: { width: 58, height: 48, className: 'w-[52px] h-[42px] sm:w-[58px] sm:h-[48px]' },
    md: { width: 86, height: 70, className: 'w-[64px] h-[52px] sm:w-[73px] sm:h-[60px] lg:w-[86px] lg:h-[70px]' },
    lg: { width: 110, height: 90, className: 'w-[90px] h-[74px] md:w-[110px] md:h-[90px]' },
    xl: { width: 244, height: 200, className: 'w-[180px] sm:w-[220px] md:w-[244px] h-auto' },
  }[size];

  const logoImage = (
    <div className="relative shrink-0 flex items-center justify-center">
      <Image
        src="/images/express-car-wash-logo.png"
        alt="Express Car Wash Official HD Logo"
        width={imageDimensions.width}
        height={imageDimensions.height}
        className={`${imageDimensions.className} object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(8,127,117,0.22)]`}
        priority
      />
    </div>
  );

  const brandText = showText && (
    <div className="flex flex-col text-left shrink-0 whitespace-nowrap">
      <span className="font-serif font-bold text-base sm:text-lg lg:text-xl tracking-tight text-[#202C2C] group-hover:text-[#087F75] transition-colors leading-tight whitespace-nowrap">
        {BUSINESS_CONFIG.brandName}
      </span>
      <span className="text-[11px] sm:text-xs text-[#52615E] tracking-wide font-medium whitespace-nowrap">
        Car, Bike, PPF &amp; Detailing
      </span>
    </div>
  );

  const content = (
    <div className={`group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none rounded-xl shrink-0 ${className}`}>
      {logoImage}
      {brandText}
    </div>
  );

  const motionWrapper = animate && !shouldReduceMotion ? (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center shrink-0"
    >
      {content}
    </motion.div>
  ) : (
    <div className="inline-flex items-center shrink-0">
      {content}
    </div>
  );

  if (!href) return motionWrapper;

  return (
    <Link href={href} aria-label={`${BUSINESS_CONFIG.brandName} Home`} className="inline-flex items-center shrink-0">
      {motionWrapper}
    </Link>
  );
}
