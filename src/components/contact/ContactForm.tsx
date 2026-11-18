'use client';

import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '@/data/business';
import { SERVICES_DATA } from '@/data/services';
import { generateWhatsAppBookingUrl } from '@/lib/whatsapp';
import { MessageSquare, AlertCircle, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleType, setVehicleType] = useState<'car' | 'bike'>('car');
  const [interestedService, setInterestedService] = useState('Full Car Foam Wash');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!phone.trim()) {
      setErrorMessage('Please enter your phone number.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      vehicleType,
      serviceName: interestedService,
      customerName: name.trim(),
      customerPhone: phone.trim(),
      customerNotes: `${email ? `Email: ${email.trim()} | ` : ''}${message.trim() || 'General enquiry'}`,
    };

    const targetUrl = generateWhatsAppBookingUrl(payload);
    setTimeout(() => {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBE7] space-y-6 shadow-[0_8px_30px_rgba(37,60,66,0.06)]">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-2 font-bold border border-[#438E88]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
          <span>Workshop Enquiry</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-[#253C42]">Send Detailing Query</h3>
        <p className="text-xs text-[#62747A] mt-1">
          Fill in your details below. You will be smoothly connected to our WhatsApp line with your pre-filled inquiry.
        </p>
      </div>

      {errorMessage && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Vehicle Type Choice */}
      <div>
        <label className="block text-xs font-semibold text-[#62747A] mb-2">
          Vehicle Classification *
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setVehicleType('car')}
            className={`py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
              vehicleType === 'car'
                ? 'bg-[#E4F2EF] border-[#438E88] text-[#438E88]'
                : 'bg-[#F1F7F3] border-[#E3EBE7] text-[#62747A] hover:text-[#253C42]'
            }`}
          >
            Car / SUV
          </button>
          <button
            type="button"
            onClick={() => setVehicleType('bike')}
            className={`py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
              vehicleType === 'bike'
                ? 'bg-[#E4F2EF] border-[#438E88] text-[#438E88]'
                : 'bg-[#F1F7F3] border-[#E3EBE7] text-[#62747A] hover:text-[#253C42]'
            }`}
          >
            Bike / Superbike
          </button>
        </div>
      </div>

      {/* Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#62747A] mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#F1F7F3] border border-[#E3EBE7] text-[#253C42] placeholder:text-[#62747A]/60 text-xs sm:text-sm focus:outline-none focus:border-[#438E88] focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#62747A] mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#F1F7F3] border border-[#E3EBE7] text-[#253C42] placeholder:text-[#62747A]/60 text-xs sm:text-sm focus:outline-none focus:border-[#438E88] focus:bg-white"
          />
        </div>
      </div>

      {/* Email & Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#62747A] mb-1.5">
            Email Address (Optional)
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#F1F7F3] border border-[#E3EBE7] text-[#253C42] placeholder:text-[#62747A]/60 text-xs sm:text-sm focus:outline-none focus:border-[#438E88] focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#62747A] mb-1.5">
            Interested Service *
          </label>
          <select
            value={interestedService}
            onChange={(e) => setInterestedService(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#F1F7F3] border border-[#E3EBE7] text-[#253C42] text-xs sm:text-sm focus:outline-none focus:border-[#438E88] focus:bg-white"
          >
            {SERVICES_DATA.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name} ({s.vehicleType === 'bike' ? 'Bike' : 'Car'})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-[#62747A] mb-1.5">
          Your Message or Vehicle Queries
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about your vehicle model, current condition, or questions about wash timing..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[#F1F7F3] border border-[#E3EBE7] text-[#253C42] placeholder:text-[#62747A]/60 text-xs sm:text-sm focus:outline-none focus:border-[#438E88] focus:bg-white"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#438E88] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#32766F] transition-all duration-300 shadow-md shadow-[#438E88]/20 disabled:opacity-50"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit & Connect on WhatsApp'}</span>
      </button>

      <p className="text-[11px] text-[#62747A] text-center leading-normal">
        By submitting, you are directly routed to {BUSINESS_CONFIG.phone} on WhatsApp with your query details. No spam.
      </p>
    </form>
  );
}
