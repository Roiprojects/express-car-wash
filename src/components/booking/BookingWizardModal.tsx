'use client';

import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Calendar, Clock, Car, Bike, Sparkles, MessageSquare, AlertCircle, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, CAR_CATEGORIES, CarCategory, VehicleType, ServiceItem } from '@/data/services';
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
      estimatedPrice: calculatedPrice ? formatINR(calculatedPrice) : 'To be confirmed on WhatsApp',
      isPriceVerified,
    };

    const url = generateWhatsAppBookingUrl(bookingPayload);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0C1016] border border-[#252B34] rounded-3xl shadow-2xl shadow-black overflow-hidden z-10 my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#252B34] bg-[#13171D]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <h3 className="font-extrabold text-sm sm:text-base text-white tracking-wide uppercase">
              Schedule Detailing Appointment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#738CAC] hover:text-white hover:bg-[#19212A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Tracker */}
        <div className="px-6 pt-4 pb-2 bg-[#0C1016]">
          <div className="flex items-center justify-between text-xs text-[#738CAC] mb-2">
            <span className="font-medium text-white">Step {step} of 6</span>
            <span className="text-[11px] font-mono text-accent font-semibold">
              {step === 1 && 'Vehicle Selection'}
              {step === 2 && 'Category & Size'}
              {step === 3 && 'Choose Treatment'}
              {step === 4 && 'Date & Timing'}
              {step === 5 && 'Customer Info'}
              {step === 6 && 'Review & WhatsApp'}
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#252B34] rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Wizard Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {validationError && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* STEP 1: Vehicle Type */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">What vehicle are we detailing today?</h4>
              <p className="text-xs text-[#738CAC]">
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
                      ? 'bg-[#19212A] border-accent text-white shadow-lg shadow-accent/15'
                      : 'bg-[#13171D] border-[#252B34] text-[#738CAC] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0C1016] border border-[#252B34] flex items-center justify-center text-accent">
                      <Car className="w-6 h-6" />
                    </div>
                    {vehicleType === 'car' && (
                      <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <h5 className="font-bold text-base text-white">Car / SUV / MUV</h5>
                  <p className="text-xs text-[#738CAC] mt-1">
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
                      ? 'bg-[#19212A] border-accent text-white shadow-lg shadow-accent/15'
                      : 'bg-[#13171D] border-[#252B34] text-[#738CAC] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0C1016] border border-[#252B34] flex items-center justify-center text-accent">
                      <Bike className="w-6 h-6" />
                    </div>
                    {vehicleType === 'bike' && (
                      <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <h5 className="font-bold text-base text-white">Bike / Scooter</h5>
                  <p className="text-xs text-[#738CAC] mt-1">
                    Activa, Jupiter, Splendor, Pulsar, Apache, Shine, Classic 350, and all daily two-wheelers.
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Category & Size */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">
                {vehicleType === 'car' ? 'Select your car classification' : 'Confirm bike specifications'}
              </h4>
              <p className="text-xs text-[#738CAC]">
                Pricing is determined by vehicle body volume, clear coat area, and required foam quantity.
              </p>

              {vehicleType === 'car' ? (
                <div className="space-y-3 pt-2">
                  {CAR_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCarCategory(cat.id)}
                      className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                        carCategory === cat.id
                          ? 'bg-[#19212A] border-accent text-white shadow-md'
                          : 'bg-[#13171D] border-[#252B34] text-[#738CAC] hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-white">{cat.label}</div>
                        <div className="text-xs text-[#738CAC] mt-0.5">
                          e.g., {cat.examples}
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          carCategory === cat.id
                            ? 'border-accent bg-accent text-white'
                            : 'border-[#252B34] bg-[#0C1016]'
                        }`}
                      >
                        {carCategory === cat.id && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#13171D] border border-[#252B34] space-y-2">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>Two-Wheeler Detailing Protocols</span>
                  </div>
                  <p className="text-xs text-[#738CAC] leading-relaxed">
                    All bike services include safe low-pressure sensor rinse, chain degrease, compressed air crevices drying, and anti-static surface dressing.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Choose Service */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Select detailing treatment</h4>
              <p className="text-xs text-[#738CAC]">
                Select your required wash or preservation package:
              </p>

              <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                {availableServices.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  const price = vehicleType === 'car' ? service.pricing[carCategory] : service.pricing.bike;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-[#19212A] border-accent shadow-md'
                          : 'bg-[#13171D] border-[#252B34] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-sm text-white">{service.name}</span>
                            {service.badge && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent text-white font-semibold">
                                {service.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#738CAC] mt-1 line-clamp-2">
                            {service.shortDescription}
                          </p>
                          <div className="mt-2 text-[11px] text-[#738CAC] flex items-center gap-3 font-medium">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-accent" />
                              {service.estimatedDuration}
                            </span>
                            {!service.pricing.isVerified && (
                              <span className="text-amber-300 font-mono text-[10px]">
                                * Price to confirm
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <div className="font-extrabold text-base text-white">
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
              <h4 className="text-lg font-bold text-white">Preferred date & time slot</h4>
              <p className="text-xs text-[#738CAC]">
                Please indicate your preferred appointment timing. Bay availability is locked in upon WhatsApp confirmation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#738CAC] mb-1.5">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#13171D] border border-[#252B34] text-white text-sm focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#738CAC] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#13171D] border border-[#252B34] text-white text-sm focus:outline-none focus:border-accent"
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

              <div className="p-3.5 rounded-xl bg-[#13171D] border border-[#252B34] text-xs text-[#738CAC] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Advertised Workshop Standard:</strong> {BUSINESS_CONFIG.serviceNotice.minimumWashTime}. We carefully take our time to detail every panel properly.
                </p>
              </div>
            </div>
          )}

          {/* STEP 5: Customer Details */}
          {step === 5 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Your details</h4>
              <p className="text-xs text-[#738CAC]">
                Let our detailing team know who to greet and prepare the bay for:
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#738CAC] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#13171D] border border-[#252B34] text-white placeholder:text-[#738CAC] text-sm focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#738CAC] mb-1.5">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#13171D] border border-[#252B34] text-white placeholder:text-[#738CAC] text-sm focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#738CAC] mb-1.5">
                    Special Vehicle Requests or Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Heavy bug stains on front bumper / child seat spill in back..."
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#13171D] border border-[#252B34] text-white placeholder:text-[#738CAC] text-sm focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Review & Final WhatsApp Action */}
          {step === 6 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Review your booking enquiry</h4>
              <p className="text-xs text-[#738CAC]">
                Clicking the button below will open an official pre-filled WhatsApp conversation with our detailing workshop to lock in your appointment.
              </p>

              <div className="p-4 rounded-2xl bg-[#13171D] border border-[#252B34] space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-[#252B34]">
                  <span className="text-[#738CAC]">Service:</span>
                  <span className="font-bold text-white">{selectedService?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#252B34]">
                  <span className="text-[#738CAC]">Vehicle:</span>
                  <span className="font-bold text-white">
                    {vehicleType === 'car' ? `Car (${selectedCarCategoryObj?.label})` : 'Two-Wheeler'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#252B34]">
                  <span className="text-[#738CAC]">Preferred Date & Slot:</span>
                  <span className="font-bold text-white">{preferredDate} at {preferredTime}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#252B34]">
                  <span className="text-[#738CAC]">Name:</span>
                  <span className="font-bold text-white">{customerName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#252B34]">
                  <span className="text-[#738CAC]">Baseline Rate:</span>
                  <span className="font-extrabold text-white text-base">
                    {calculatedPrice ? formatINR(calculatedPrice) : 'Price on request'}
                  </span>
                </div>

                {!isPriceVerified && (
                  <div className="p-2.5 rounded-lg bg-[#19212A] border border-[#252B34] text-amber-200 text-[11px] leading-relaxed">
                    <strong>Rate Verification Note:</strong> {priceNote || 'Physical workshop signboard contains handwritten revisions for this service. Latest rate will be confirmed directly on WhatsApp.'}
                  </div>
                )}
              </div>

              <div className="text-[11px] text-[#738CAC] leading-relaxed bg-[#13171D] p-3 rounded-xl border border-[#252B34]">
                ℹ️ <strong>Booking Policy:</strong> Submitting this enquiry communicates your preferred slot to our staff. No payment is taken online; appointment is confirmed directly via WhatsApp. Payment is settled at the workshop after inspection.
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#252B34] bg-[#13171D]">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => {
                setValidationError('');
                setStep(step - 1);
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#738CAC] hover:text-white hover:bg-[#19212A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 6 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-sm shadow-accent/25"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleLaunchWhatsApp}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-xs font-extrabold uppercase tracking-wider hover:bg-accent-hover transition-all duration-300 shadow-xl shadow-accent/30 hover:scale-[1.02]"
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
