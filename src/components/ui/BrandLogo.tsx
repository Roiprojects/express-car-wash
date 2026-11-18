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
  // md is tuned for the main navbar: 55px mobile, 68px tablet, 80px desktop
  const imageDimensions = {
    sm: { width: 67, height: 55, className: 'w-[55px] h-[45px] sm:w-[67px] sm:h-[55px]' },
    md: { width: 98, height: 80, className: 'w-[67px] h-[55px] md:w-[83px] md:h-[68px] lg:w-[98px] lg:h-[80px]' },
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
    <div className="flex flex-col text-left">
      <span className="font-serif font-bold text-base sm:text-lg lg:text-xl tracking-tight text-[#202C2C] group-hover:text-[#087F75] transition-colors leading-tight">
        {BUSINESS_CONFIG.brandName}
      </span>
      <span className="text-[11px] sm:text-xs text-[#52615E] tracking-wide font-medium">
        Car, Bike, PPF &amp; Detailing
      </span>
    </div>
  );

  const content = (
    <div className={`group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none rounded-xl ${className}`}>
      {logoImage}
      {brandText}
    </div>
  );

  const motionWrapper = animate && !shouldReduceMotion ? (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {content}
    </motion.div>
  ) : (
    content
  );

  if (!href) return motionWrapper;

  return (
    <Link href={href} aria-label={`${BUSINESS_CONFIG.brandName} Home`}>
      {motionWrapper}
    </Link>
  );
}
