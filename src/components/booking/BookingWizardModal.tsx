'use client';

import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Calendar, Clock, Car, Bike, Sparkles, MessageSquare, AlertCircle, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, CAR_CATEGORIES, CarCategory, VehicleType } from '@/data/services';
import { BUSINESS_CONFIG } from '@/data/business';
import { generateWhatsAppBookingUrl } from '@/lib/whatsapp';
import { formatINR } from '@/lib/formatting';

interface BookingWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialVehicleType?: VehicleType;
}

export default function BookingWizardModal({
  isOpen,
  onClose,
  initialServiceId,
  initialVehicleType = 'car',
}: BookingWizardModalProps) {
  const [step, setStep] = useState<number>(1);
  const [vehicleType, setVehicleType] = useState<VehicleType>(initialVehicleType);
  const [carCategory, setCarCategory] = useState<CarCategory>('m_suv');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || (initialVehicleType === 'bike' ? 'bike-foam-wash' : 'full-car-foam-wash')
  );
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('10:00 AM');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  if (!isOpen) return null;

  // Filter services by vehicle type
  const availableServices = SERVICES_DATA.filter(
    (s) => s.vehicleType === vehicleType || s.vehicleType === 'both'
  );

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || availableServices[0];

  // Calculate price estimate based on vehicle type and category
  let calculatedPrice: number | undefined;
  let isPriceVerified = true;
  let priceNote: string | undefined;

  if (selectedService) {
    if (vehicleType === 'car') {
      calculatedPrice = selectedService.pricing[carCategory];
      isPriceVerified = selectedService.pricing.isVerified;
      priceNote = selectedService.pricing.statusNote;
    } else {
      calculatedPrice = selectedService.pricing.bike;
      isPriceVerified = selectedService.pricing.isVerified;
      priceNote = selectedService.pricing.statusNote;
    }
  }

  const selectedCarCategoryObj = CAR_CATEGORIES.find((c) => c.id === carCategory);

  const handleNextStep = () => {
    setValidationError('');
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!selectedServiceId) {
        setValidationError('Please select a detailing service to continue.');
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (!preferredDate) {
        setValidationError('Please select your preferred visit date.');
        return;
      }
      setStep(5);
    } else if (step === 5) {
      if (!customerName.trim()) {
        setValidationError('Please enter your name.');
        return;
      }
      setStep(6);
    }
  };

  const handleLaunchWhatsApp = () => {
    const bookingPayload = {
      vehicleType,
      carCategoryLabel: vehicleType === 'car' ? selectedCarCategoryObj?.label : undefined,
      serviceName: selectedService?.name || 'Detailing Wash',
      preferredDate,
      preferredTime,
      customerName,
      customerPhone,
      customerNotes,
      estimatedPriceFormatted: calculatedPrice ? formatINR(calculatedPrice) : 'Quote on Request',
    };

    const whatsappUrl = generateWhatsAppBookingUrl(bookingPayload);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202C2C]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-[#DDD6CB] shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DDD6CB] bg-[#FFF9EF]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#087F75] animate-pulse" />
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#202C2C] tracking-wide">
              Schedule Detailing Appointment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#52615E] hover:text-[#202C2C] hover:bg-white transition-colors border border-transparent hover:border-[#DDD6CB]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Tracker */}
        <div className="px-6 pt-4 pb-2 bg-white">
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#445452] mb-2">
            <span className="font-bold text-[#202C2C]">Step {step} of 6</span>
            <span className="font-mono text-[#087F75] font-bold">
              {step === 1 && 'Vehicle Selection'}
              {step === 2 && 'Category & Size'}
              {step === 3 && 'Choose Treatment'}
              {step === 4 && 'Date & Timing'}
              {step === 5 && 'Customer Info'}
              {step === 6 && 'Review & WhatsApp'}
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#DDD6CB] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#087F75] transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Wizard Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {validationError && (
            <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* STEP 1: Vehicle Type */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-xl font-serif font-bold text-[#202C2C]">What vehicle are we detailing today?</h4>
              <p className="text-sm text-[#445452]">
                Select your vehicle type to see specific wash procedures, chemical specs, and accurate pricing tiers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setVehicleType('car');
                    setSelectedServiceId('full-car-foam-wash');
                  }}
                  className={`p-6 rounded-2xl border text-left transition-all ${
                    vehicleType === 'car'
                      ? 'bg-[#FFF9EF] border-2 border-[#087F75] text-[#202C2C] shadow-sm'
                      : 'bg-[#F5EBDD] border border-[#DDD6CB] text-[#445452] hover:border-[#087F75]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DDD6CB] flex items-center justify-center text-[#087F75]">
                      <Car className="w-6 h-6" />
                    </div>
                    {vehicleType === 'car' && (
                      <span className="w-6 h-6 rounded-full bg-[#087F75] text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <h5 className="font-serif font-bold text-base text-[#202C2C]">Car / SUV / MUV</h5>
                  <p className="text-xs sm:text-sm text-[#445452] mt-1">
                    Swift, i20, Baleno, Dzire, City, Nexon, Creta, Brezza, Ertiga, Scorpio, XUV700.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setVehicleType('bike');
                    setSelectedServiceId('bike-foam-wash');
                  }}
                  className={`p-6 rounded-2xl border text-left transition-all ${
                    vehicleType === 'bike'
                      ? 'bg-[#FFF9EF] border-2 border-[#087F75] text-[#202C2C] shadow-sm'
                      : 'bg-[#F5EBDD] border border-[#DDD6CB] text-[#445452] hover:border-[#087F75]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DDD6CB] flex items-center justify-center text-[#087F75]">
                      <Bike className="w-6 h-6" />
                    </div>
                    {vehicleType === 'bike' && (
                      <span className="w-6 h-6 rounded-full bg-[#087F75] text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <h5 className="font-serif font-bold text-base text-[#202C2C]">Bike / Scooter</h5>
                  <p className="text-xs sm:text-sm text-[#445452] mt-1">
                    Activa, Jupiter, Splendor, Pulsar, Apache, Shine, Classic 350, and all daily two-wheelers.
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Category & Size */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-xl font-serif font-bold text-[#202C2C]">
                {vehicleType === 'car' ? 'Select your car classification' : 'Confirm bike specifications'}
              </h4>
              <p className="text-sm text-[#445452]">
                Pricing is determined by vehicle body volume, clear coat area, and required foam quantity.
              </p>

              {vehicleType === 'car' ? (
                <div className="space-y-3 pt-2">
                  {CAR_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCarCategory(cat.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        carCategory === cat.id
                          ? 'bg-[#FFF9EF] border-2 border-[#087F75] text-[#202C2C] shadow-sm'
                          : 'bg-[#F5EBDD] border border-[#DDD6CB] text-[#445452] hover:border-[#087F75]/50'
                      }`}
                    >
                      <div>
                        <div className="font-serif font-bold text-base text-[#202C2C]">{cat.label}</div>
                        <div className="text-xs sm:text-sm text-[#445452] mt-0.5">
                          e.g., {cat.examples}
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          carCategory === cat.id
                            ? 'border-[#087F75] bg-[#087F75] text-white'
                            : 'border-[#DDD6CB] bg-white'
                        }`}
                      >
                        {carCategory === cat.id && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] space-y-2">
                  <div className="flex items-center gap-2 text-[#202C2C] font-semibold text-sm sm:text-base">
                    <Sparkles className="w-4 h-4 text-[#087F75]" />
                    <span>Two-Wheeler Detailing Protocols</span>
                  </div>
                  <p className="text-sm text-[#445452] leading-relaxed">
                    All bike services include safe low-pressure sensor rinse, chain degrease, compressed air crevices drying, and anti-static surface dressing.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Choose Service */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-xl font-serif font-bold text-[#202C2C]">Select detailing treatment</h4>
              <p className="text-sm text-[#445452]">
                Select your required wash or preservation package:
              </p>

              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {availableServices.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  const price = vehicleType === 'car' ? service.pricing[carCategory] : service.pricing.bike;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'bg-[#FFF9EF] border-2 border-[#087F75] shadow-sm'
                          : 'bg-[#F5EBDD] border border-[#DDD6CB] hover:border-[#087F75]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-serif font-bold text-base text-[#202C2C]">{service.name}</span>
                            {service.badge && (
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#087F75] text-white font-bold">
                                {service.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-[#445452] mt-1 line-clamp-2">
                            {service.shortDescription}
                          </p>
                          <div className="mt-2 text-xs text-[#52615E] flex items-center gap-3 font-medium">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[#087F75]" />
                              {service.estimatedDuration}
                            </span>
                            {!service.pricing.isVerified && (
                              <span className="text-amber-800 font-mono text-xs font-semibold">
                                * Price to confirm
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <div className="font-bold text-lg text-[#202C2C]">
                            {price ? formatINR(price) : 'Enquire'}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Date & Timing */}
          {step === 4 && (
            <div className="space-y-4">
              <h4 className="text-xl font-serif font-bold text-[#202C2C]">Preferred date &amp; time slot</h4>
              <p className="text-sm text-[#445452]">
                Please indicate your preferred appointment timing. Bay availability is locked in upon WhatsApp confirmation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] text-sm focus:outline-none focus:border-[#087F75]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] text-sm focus:outline-none focus:border-[#087F75]"
                  >
                    <option value="08:30 AM">08:30 AM (Early Bird)</option>
                    <option value="10:00 AM">10:00 AM (Morning)</option>
                    <option value="11:30 AM">11:30 AM (Late Morning)</option>
                    <option value="01:30 PM">01:30 PM (Afternoon)</option>
                    <option value="03:30 PM">03:30 PM (Mid Afternoon)</option>
                    <option value="05:00 PM">05:00 PM (Evening)</option>
                    <option value="06:30 PM">06:30 PM (Sunset Slot)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] text-xs sm:text-sm text-[#445452] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#087F75] flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#202C2C]">Advertised Workshop Standard:</strong> {BUSINESS_CONFIG.serviceNotice.minimumWashTime}. We carefully take our time to detail every panel properly.
                </p>
              </div>
            </div>
          )}

          {/* STEP 5: Customer Details */}
          {step === 5 && (
            <div className="space-y-4">
              <h4 className="text-xl font-serif font-bold text-[#202C2C]">Your details</h4>
              <p className="text-sm text-[#445452]">
                Let our detailing team know who to greet and prepare the bay for:
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-sm focus:outline-none focus:border-[#087F75]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-sm focus:outline-none focus:border-[#087F75]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#202C2C] mb-1.5">
                    Special Vehicle Requests or Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Heavy bug stains on front bumper / child seat spill in back..."
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD6CB] text-[#202C2C] placeholder:text-[#52615E] text-sm focus:outline-none focus:border-[#087F75]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Review & Final WhatsApp Action */}
          {step === 6 && (
            <div className="space-y-4">
              <h4 className="text-xl font-serif font-bold text-[#202C2C]">Review your booking enquiry</h4>
              <p className="text-sm text-[#445452]">
                Clicking the button below will open an official pre-filled WhatsApp conversation with our detailing workshop to lock in your appointment.
              </p>

              <div className="p-5 rounded-2xl bg-[#FFF9EF] border border-[#DDD6CB] space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-[#DDD6CB]">
                  <span className="text-[#52615E]">Service:</span>
                  <span className="font-bold text-[#202C2C]">{selectedService?.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#DDD6CB]">
                  <span className="text-[#52615E]">Vehicle:</span>
                  <span className="font-bold text-[#202C2C]">
                    {vehicleType === 'car' ? `Car (${selectedCarCategoryObj?.label})` : 'Two-Wheeler'}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#DDD6CB]">
                  <span className="text-[#52615E]">Preferred Date &amp; Slot:</span>
                  <span className="font-bold text-[#202C2C]">{preferredDate} at {preferredTime}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#DDD6CB]">
                  <span className="text-[#52615E]">Name:</span>
                  <span className="font-bold text-[#202C2C]">{customerName}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#DDD6CB]">
                  <span className="text-[#52615E]">Baseline Rate:</span>
                  <span className="font-bold text-[#202C2C] text-lg">
                    {calculatedPrice ? formatINR(calculatedPrice) : 'Price on request'}
                  </span>
                </div>

                {!isPriceVerified && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
                    <strong>Rate Verification Note:</strong> {priceNote || 'Physical workshop signboard contains handwritten revisions for this service. Latest rate will be confirmed directly on WhatsApp.'}
                  </div>
                )}
              </div>

              <div className="text-xs text-[#445452] leading-relaxed bg-[#F5EBDD] p-3.5 rounded-2xl border border-[#DDD6CB] space-y-1.5">
                <div>
                  ℹ️ <strong>Booking Policy:</strong> Submitting this enquiry communicates your preferred slot to our staff. No payment is taken online; appointment is confirmed directly via WhatsApp. Payment is settled at the workshop after inspection.
                </div>
                <div className="pt-1.5 border-t border-[#DDD6CB] text-[11px] text-[#52615E]">
                  <strong>Vehicle Terms Apply:</strong>{' '}
                  {vehicleType === 'bike'
                    ? 'Engine cool-down period and sensor-safe wash procedures observed.'
                    : 'Rates calibrated to outer vehicle size. Personal valuables must be removed.'}{' '}
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#087F75] underline font-bold hover:text-[#06665F]"
                  >
                    Read Terms &amp; Conditions
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#DDD6CB] bg-[#FFF9EF]">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => {
                setValidationError('');
                setStep(step - 1);
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#202C2C] hover:bg-[#F5EBDD] transition-colors border border-[#DDD6CB] bg-white shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 6 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#087F75] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#06665F] transition-colors shadow-sm"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleLaunchWhatsApp}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#087F75] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#06665F] transition-all duration-300 shadow-md hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send WhatsApp Enquiry</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
