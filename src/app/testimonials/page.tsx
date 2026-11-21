'use client';

import React, { useState } from 'react';
import { REVIEWS_DATA } from '@/data/reviews';
import { Star, ShieldCheck, Sparkles, MessageSquare, AlertCircle, Check } from 'lucide-react';
import { useBooking } from '@/components/layout/AppShell';
import ConversionCTA from '@/components/home/ConversionCTA';

export default function TestimonialsPage() {
  const { openBooking } = useBooking();
  const [feedbackAuthor, setFeedbackAuthor] = useState('');
  const [feedbackVehicle, setFeedbackVehicle] = useState('');
  const [feedbackService, setFeedbackService] = useState('Full Car Foam Wash');
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackAuthor || !feedbackText) return;

    const message = `Hello Express Car Wash, here is my feedback on your service:\n\n• Name: ${feedbackAuthor}\n• Vehicle: ${feedbackVehicle}\n• Treatment: ${feedbackService}\n• Rating: ${feedbackRating}/5 Stars\n• Review: ${feedbackText}`;
    const url = `https://wa.me/917022338693?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSent(true);
  };

  return (
    <div className="bg-[#FFF9EF]">
      {/* Page Hero */}
      <section className="relative py-10 sm:py-12 overflow-hidden border-b border-[#DDD6CB] bg-[#F5EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EF] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Verified Client Stories</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              Driver Experiences. <br />
              <span className="text-[#087F75] italic font-serif">Honest Feedback.</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#445452] leading-relaxed">
              Read authentic impressions from owners who entrust their vehicles to our detailing and wash bays.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-10 sm:py-12 lg:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-[#FFF9EF]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DDD6CB] hover:border-[#087F75] flex flex-col justify-between shadow-[0_8px_30px_rgba(32,44,44,0.05)] hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#087F75]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#087F75]" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#087F75] bg-[#F5EBDD] px-3 py-1 rounded-full border border-[#DDD6CB] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#087F75]" />
                    Verified Customer
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#202C2C] leading-relaxed font-normal">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-[#DDD6CB] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-[#202C2C]">{review.author}</h4>
                  <div className="text-sm text-[#087F75] mt-0.5 font-bold">
                    {review.vehicle}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-[#202C2C] font-semibold block">
                    {review.serviceReceived}
                  </span>
                  <span className="text-xs text-[#52615E]">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integrity Disclaimer */}
        <div className="p-5 rounded-2xl bg-white border border-[#DDD6CB] flex items-start gap-3.5 text-xs sm:text-sm text-[#445452] shadow-sm">
          <AlertCircle className="w-4 h-4 text-[#087F75] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#202C2C]">Review Verification Policy:</strong> In strict compliance with our brand guidelines, we never fabricate fake online testimonials or aggregate review counts. All feedback reflects actual customer responses documented at our workshop.
          </p>
        </div>

        {/* Submit Review Card */}
        <div id="submit-review" className="p-6 sm:p-8 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] max-w-3xl mx-auto shadow-xl">
          <div className="text-center max-w-md mx-auto mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#087F75] block mb-1 font-bold">
              Feedback Channel
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#202C2C]">
              Share Your Detailing Experience
            </h3>
            <p className="text-xs sm:text-sm text-[#445452] mt-1.5">
              Visited our workshop recently? We welcome your candid comments on our active foam, interior steam, or motorcycle detailing.
            </p>
          </div>

          {isSent ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <Check className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-serif font-bold text-[#202C2C] text-lg">Feedback Dispatched to WhatsApp!</h4>
              <p className="text-sm text-[#445452]">
                Thank you for helping us continually raise the bar for car and bike detailing standards.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh K."
                    value={feedbackAuthor}
                    onChange={(e) => setFeedbackAuthor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-base sm:text-sm focus:outline-none focus:border-[#087F75]"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kia Sonet / TVS Apache"
                    value={feedbackVehicle}
                    onChange={(e) => setFeedbackVehicle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-base sm:text-sm focus:outline-none focus:border-[#087F75]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
                  Service Received
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full Foam Wash &amp; Interior Cleaning"
                  value={feedbackService}
                  onChange={(e) => setFeedbackService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-base sm:text-sm focus:outline-none focus:border-[#087F75]"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
                  Rating (1 to 5 Stars)
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFeedbackRating(star)}
                      className="p-1 focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= feedbackRating
                            ? 'text-[#087F75] fill-[#087F75]'
                            : 'text-[#DDD6CB]'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs sm:text-sm font-mono text-[#202C2C] font-bold ml-2">
                    {feedbackRating} of 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
                  Your Review &amp; Comments *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="How did your car or bike look after the service? Were the staff courteous?"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-base sm:text-sm focus:outline-none focus:border-[#087F75]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-[#087F75] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#06665F] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Submit Feedback to Workshop Line</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </div>
  );
}
