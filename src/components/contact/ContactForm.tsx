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
    <form onSubmit={handleSubmit} className="p-7 sm:p-9 rounded-3xl bg-white border border-[#DDD6CB] space-y-6 shadow-[0_8px_30px_rgba(32,44,44,0.05)]">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EBDD] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-2 font-bold border border-[#DDD6CB]">
          <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
          <span>Workshop Enquiry</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-[#202C2C]">Send Detailing Query</h3>
        <p className="text-sm text-[#445452] mt-1">
          Fill in your details below. You will be smoothly connected to our WhatsApp line with your pre-filled inquiry.
        </p>
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Vehicle Type Choice */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-2">
          Vehicle Classification *
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setVehicleType('car')}
            className={`py-3 px-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider border transition-all ${
              vehicleType === 'car'
                ? 'bg-[#087F75] border-[#087F75] text-white shadow-sm'
                : 'bg-[#F5EBDD] border-[#DDD6CB] text-[#202C2C] hover:bg-[#FFF9EF]'
            }`}
          >
            Car / SUV
          </button>
          <button
            type="button"
            onClick={() => setVehicleType('bike')}
            className={`py-3 px-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider border transition-all ${
              vehicleType === 'bike'
                ? 'bg-[#087F75] border-[#087F75] text-white shadow-sm'
                : 'bg-[#F5EBDD] border-[#DDD6CB] text-[#202C2C] hover:bg-[#FFF9EF]'
            }`}
          >
            Bike / Superbike
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ramesh K."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-sm focus:outline-none focus:border-[#087F75]"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
            Phone Number (WhatsApp) *
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. +91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-sm focus:outline-none focus:border-[#087F75]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
            Email Address (Optional)
          </label>
          <input
            type="email"
            placeholder="e.g. ramesh@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-sm focus:outline-none focus:border-[#087F75]"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
            Desired Treatment *
          </label>
          <select
            value={interestedService}
            onChange={(e) => setInterestedService(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] text-sm focus:outline-none focus:border-[#087F75]"
          >
            {SERVICES_DATA.filter(
              (s) => s.vehicleType === vehicleType || s.vehicleType === 'both'
            ).map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
          Specific Needs or Vehicle Details
        </label>
        <textarea
          rows={3}
          placeholder="Mention vehicle model, color, specific concerns like swirls, interior spots, or preferred time..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-sm focus:outline-none focus:border-[#087F75]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-full bg-[#087F75] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#06665F] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#087F75]/20 hover:scale-[1.01] active:scale-[0.99]"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit to Workshop Line on WhatsApp'}</span>
      </button>

      <p className="text-xs text-[#52615E] text-center">
        🔒 We respect your privacy. Inquiries are dispatched directly to our workshop managers.
      </p>
    </form>
  );
}
