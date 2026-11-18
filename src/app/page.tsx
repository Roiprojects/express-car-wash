'use client';

import React from 'react';
import LightHeroSection from '@/components/home/LightHeroSection';
import EverydayCarsStrip from '@/components/home/EverydayCarsStrip';
import AboutPreview from '@/components/home/AboutPreview';
import PaintProtectionSection from '@/components/home/PaintProtectionSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AccessoriesPreview from '@/components/home/AccessoriesPreview';
import PricingPreview from '@/components/home/PricingPreview';
import BranchLocations from '@/components/home/BranchLocations';
import InteractiveBeforeAfter from '@/components/home/InteractiveBeforeAfter';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import ConversionCTA from '@/components/home/ConversionCTA';
import { useBooking } from '@/components/layout/AppShell';

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <>
      {/* 01: Light-Theme Hero Section matching user design reference */}
      <LightHeroSection onOpenBooking={() => openBooking()} />

      {/* 02: Subtle Secondary Everyday Cars Counter-Scrolling Rows */}
      <EverydayCarsStrip />

      {/* 03: Brand Overview & Philosophy */}
      <AboutPreview />

      {/* 04: Dedicated Paint Protection Section (PPF, Ceramic, Graphene) */}
      <PaintProtectionSection />

      {/* 05: Featured Services Grid */}
      <FeaturedServices onOpenBookingWithService={(id) => openBooking(id)} />

      {/* 06: Why Vehicle Owners Choose Us Carousel */}
      <WhyChooseUs />

      {/* 07: Automotive Accessories Preview */}
      <AccessoriesPreview />

      {/* 08: Pricing Preview & Vehicle Tiers */}
      <PricingPreview onOpenBookingWithService={(id) => openBooking(id)} />

      {/* 09: 3-Branch Network Section */}
      <BranchLocations />

      {/* 10: Before / After Transformations */}
      <InteractiveBeforeAfter />

      {/* 11: Infinite Scrolling Customer Testimonials */}
      <TestimonialsPreview />

      {/* 12: Final Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </>
  );
}
