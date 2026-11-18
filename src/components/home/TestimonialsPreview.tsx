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
      className="w-[82vw] max-w-[340px] sm:w-[360px] md:w-[380px] lg:w-[410px] shrink-0 p-6 sm:p-7 rounded-3xl bg-white border border-[#E3EBE7] flex flex-col justify-between shadow-[0_8px_30px_rgba(37,60,66,0.06)] min-h-[270px] sm:min-h-[280px] select-none transition-colors duration-300"
      {...(isDuplicate ? { tabIndex: -1 } : {})}
    >
      <div>
        {/* Star Rating & 5-Star Index */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-[#F59E0B]">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-[#F59E0B]" />
            ))}
          </div>
          <span className="font-mono text-xs font-bold text-[#E3EBE7]">
            05
          </span>
        </div>

        {/* Review Quote */}
        <p className="text-xs sm:text-sm text-[#253C42] leading-relaxed italic line-clamp-4">
          &ldquo;{review.content}&rdquo;
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="mt-6 pt-4 border-t border-[#E3EBE7]">
        <div className="flex items-center justify-between">
          <div className="font-serif font-bold text-sm text-[#253C42]">{review.author}</div>
          <div className="flex items-center gap-1 text-[10px] text-[#438E88] font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#438E88]" />
            <span>Verified</span>
          </div>
        </div>

        <div className="text-xs text-[#438E88] mt-0.5 font-bold">
          {review.vehicle}
        </div>
        <div className="text-[10px] text-[#62747A] mt-0.5">
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
      className="py-20 lg:py-28 bg-[#F1F7F3] border-t border-[#E3EBE7] relative overflow-hidden"
      aria-label="What Our Drivers Say"
    >
      {/* Fixed Stationary Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-3 font-semibold border border-[#438E88]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
              <span>Customer Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#253C42] leading-tight tracking-tight">
              What Our <span className="text-[#438E88] italic font-serif">Drivers Say.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#62747A] leading-relaxed">
              Real feedback from local car and motorcycle owners who rely on our bays for regular maintenance and deep restorative detailing.
            </p>
          </div>

          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#438E88] uppercase tracking-wider hover:text-[#32766F] transition-colors group self-start md:self-end"
          >
            <span>Read All Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Continuously Scrolling Testimonial Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Soft Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-r from-[#F1F7F3] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-l from-[#F1F7F3] to-transparent z-10" />

        {/* Dual Sequence Infinite Conveyor */}
        <div className="animate-testimonials-marquee flex items-stretch">
          <div className="flex gap-6 shrink-0 pr-6 items-stretch">
            {sequence.map((review, idx) => (
              <TestimonialCard
                key={`primary-${review.id}-${idx}`}
                review={review}
              />
            ))}
          </div>

          <div
            className="flex gap-6 shrink-0 pr-6 items-stretch"
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

      {/* Fixed Stationary Review Honesty & Submission Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E3EBE7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-sm font-serif font-bold text-[#253C42]">
              {TESTIMONIALS_CONFIG.sectionNotice}
            </h4>
            <p className="text-xs text-[#62747A]">
              {TESTIMONIALS_CONFIG.feedbackPrompt}
            </p>
          </div>

          <Link
            href="/testimonials#submit-review"
            className="px-5 py-2.5 rounded-full bg-[#E4F2EF] border border-[#438E88]/20 text-[#438E88] hover:bg-[#438E88] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Share Feedback</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
