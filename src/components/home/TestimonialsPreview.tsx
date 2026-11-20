'use client';

import React from 'react';
import Link from 'next/link';
import { REVIEWS_DATA, TESTIMONIALS_CONFIG, CustomerReview } from '@/data/reviews';
import { Star, ShieldCheck, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

function TestimonialCard({
  review,
  isDuplicate = false,
}: {
  review: CustomerReview;
  isDuplicate?: boolean;
}) {
  return (
    <div
      className="w-[85vw] max-w-[340px] sm:w-[360px] md:w-[380px] lg:w-[410px] shrink-0 p-5 sm:p-6 rounded-2xl bg-white border border-[#DDD6CB] flex flex-col justify-between shadow-[0_8px_30px_rgba(32,44,44,0.05)] min-h-[240px] sm:min-h-[250px] select-none transition-colors duration-300"
      {...(isDuplicate ? { tabIndex: -1 } : {})}
    >
      <div>
        {/* Star Rating & Verified Indicator */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-[#087F75]" />
            ))}
          </div>
          <div className="flex items-center gap-1 text-xs text-[#087F75] font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#087F75]" />
            <span>Verified Driver</span>
          </div>
        </div>

        {/* Review Quote - Comfortable 15px font size */}
        <p className="text-sm sm:text-base text-[#202C2C] leading-relaxed line-clamp-4 font-normal">
          &ldquo;{review.content}&rdquo;
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="mt-4 pt-3 border-t border-[#DDD6CB]">
        <div className="font-serif font-bold text-base text-[#202C2C]">{review.author}</div>
        <div className="text-sm text-[#087F75] mt-0.5 font-bold">
          {review.vehicle}
        </div>
        <div className="text-xs text-[#52615E] mt-0.5 font-medium">
          {review.serviceReceived}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPreview() {
  const sequence = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section
      className="py-10 md:py-12 lg:py-14 bg-[#FFF9EF] border-t border-[#DDD6CB] relative overflow-hidden"
      aria-label="What Our Drivers Say"
    >
      {/* Stationary Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Customer Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              What Our <span className="text-[#087F75] italic font-serif">Drivers Say.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#445452] leading-relaxed">
              Real feedback from local car and motorcycle owners who rely on our bays for regular maintenance and deep restorative detailing.
            </p>
          </div>

          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#087F75] uppercase tracking-wider hover:text-[#06665F] transition-colors group self-start md:self-end"
          >
            <span>Read All Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Continuously Scrolling Testimonial Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Soft Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-r from-[#FFF9EF] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-l from-[#FFF9EF] to-transparent z-10" />

        {/* Dual Sequence Infinite Conveyor */}
        <div className="animate-testimonials-marquee flex items-stretch">
          <div className="flex gap-4 sm:gap-5 shrink-0 pr-4 sm:pr-5 items-stretch">
            {sequence.map((review, idx) => (
              <TestimonialCard
                key={`primary-${review.id}-${idx}`}
                review={review}
              />
            ))}
          </div>

          <div
            className="flex gap-4 sm:gap-5 shrink-0 pr-4 sm:pr-5 items-stretch"
            aria-hidden="true"
          >
            {sequence.map((review, idx) => (
              <TestimonialCard
                key={`duplicate-${review.id}-${idx}`}
                review={review}
                isDuplicate
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stationary Review Honesty & Submission Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DDD6CB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-base font-serif font-bold text-[#202C2C]">
              {TESTIMONIALS_CONFIG.sectionNotice}
            </h4>
            <p className="text-sm text-[#445452]">
              {TESTIMONIALS_CONFIG.feedbackPrompt}
            </p>
          </div>

          <Link
            href="/testimonials#submit-review"
            className="px-5 py-3 rounded-full bg-[#F5EBDD] border border-[#DDD6CB] text-[#202C2C] hover:bg-[#087F75] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Share Feedback</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
