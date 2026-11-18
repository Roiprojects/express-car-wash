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

  // Dimensions based on size (969:803 aspect ratio for HD logo)
  const imageDimensions = {
    sm: { width: 58, height: 48, className: 'w-[46px] sm:w-[54px] h-auto' },
    md: { width: 72, height: 60, className: 'w-[58px] md:w-[68px] h-auto' },
    lg: { width: 96, height: 80, className: 'w-[84px] md:w-[96px] h-auto' },
    xl: { width: 216, height: 180, className: 'w-[170px] sm:w-[210px] h-auto' },
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
      <span className="font-serif font-bold text-base md:text-lg tracking-tight text-[#202C2C] group-hover:text-[#087F75] transition-colors leading-tight">
        {BUSINESS_CONFIG.brandName}
      </span>
      <span className="text-xs text-[#52615E] tracking-wide font-medium">
        Car, Bike, PPF &amp; Detailing
      </span>
    </div>
  );

  const content = (
    <div className={`group flex items-center gap-3 focus:outline-none rounded-xl ${className}`}>
      {logoImage}
      {brandText}
    </div>
  );

  const motionWrapper = animate && !shouldReduceMotion ? (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
