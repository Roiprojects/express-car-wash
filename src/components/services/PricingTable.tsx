'use client';

import React from 'react';
import { SERVICES_DATA, ServiceItem, ServiceCategory, VehicleType } from '@/data/services';
import { formatINR } from '@/lib/formatting';
import { generateQuickWhatsAppUrl, generateBikeServiceWhatsAppUrl } from '@/lib/whatsapp';
import { MessageSquare, AlertCircle, CheckCircle2, Calendar } from 'lucide-react';

interface PricingTableProps {
  onOpenBookingWithService?: (serviceId: string) => void;
  activeCategory?: ServiceCategory;
  vehicleType?: VehicleType;
}

export default function PricingTable({
  onOpenBookingWithService,
  activeCategory = 'all',
  vehicleType = 'car',
}: PricingTableProps) {
  const isBikeWash = activeCategory === 'bike-wash' || (activeCategory as string) === 'bike-washing';
  const showCarTable = !isBikeWash;
  const showBikeTable = activeCategory === 'all' || isBikeWash || vehicleType === 'bike';

  const carServices = SERVICES_DATA.filter((s) => s.vehicleType === 'car' || s.vehicleType === 'both');
  const bikeServices = SERVICES_DATA.filter((s) => s.vehicleType === 'bike' || s.category === 'bike-wash' || (s.category as string) === 'bike-washing');

  return (
    <div className="space-y-12">
      {/* Bike Detailing Price Matrix (Shown when Bike Washing or Motorcycle is active) */}
      {showBikeTable && (
        <div className="animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#252B34] gap-2 mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-1">
                <span>Signboard Menu</span>
              </div>
              <h3 className="text-xl font-bold text-white">Two-Wheeler & Motorcycle Services</h3>
              <p className="text-xs text-[#738CAC]">
                Includes chain degrease, sensor-safe wash, compressed air blow-dry, and paint finish.
              </p>
            </div>
            <span className="text-[11px] font-mono text-accent bg-[#13171D] px-3 py-1 rounded-full border border-[#252B34] self-start sm:self-auto font-medium">
              Handwritten rates: Confirm on WhatsApp
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#252B34] bg-[#13171D] shadow-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#252B34] bg-[#19212A] text-[#738CAC] font-mono text-[11px] uppercase tracking-wider font-semibold">
                  <th className="py-4 px-4 sm:px-6">Motorcycle Treatment</th>
                  <th className="py-4 px-4">Rate</th>
                  <th className="py-4 px-4">Estimated Time</th>
                  <th className="py-4 px-4">Signboard Status</th>
                  <th className="py-4 px-4 sm:px-6 text-right">Enquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252B34] text-white">
                {bikeServices.map((service) => (
                  <tr key={service.id} className="hover:bg-[#19212A]/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-bold text-white">{service.name}</div>
                      <div className="text-[11px] text-[#738CAC] line-clamp-1">
                        {service.shortDescription}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-accent">
                      {service.pricing.bike ? formatINR(service.pricing.bike) : 'Contact for Price'}
                    </td>
                    <td className="py-4 px-4 text-xs text-[#738CAC]">
                      {service.estimatedDuration}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        <AlertCircle className="w-3 h-3" />
                        Verify on WhatsApp
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <a
                        href={generateBikeServiceWhatsAppUrl(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent text-white font-bold text-xs uppercase tracking-wide hover:bg-accent-hover transition-colors shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        <span>Enquire</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Car & SUV Master Price Matrix (Shown when not exclusively filtered to bike) */}
      {showCarTable && (
        <div className="animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#252B34] gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Car & SUV Workshop Price Matrix</h3>
              <p className="text-xs text-[#738CAC]">
                Baseline rates calibrated directly from the physical workshop signboard.
              </p>
            </div>
            <span className="text-[11px] font-mono text-accent bg-[#13171D] px-3 py-1 rounded-full border border-[#252B34] self-start sm:self-auto font-semibold">
              Currency: INR (₹)
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#252B34] bg-[#13171D] shadow-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#252B34] bg-[#19212A] text-[#738CAC] font-mono text-[11px] uppercase tracking-wider font-semibold">
                  <th className="py-4 px-4 sm:px-6">Treatment Service</th>
                  <th className="py-4 px-4">Small</th>
                  <th className="py-4 px-4">M SUV</th>
                  <th className="py-4 px-4">SUV XL</th>
                  <th className="py-4 px-4 hidden md:table-cell">Duration</th>
                  <th className="py-4 px-4">Verification</th>
                  <th className="py-4 px-4 sm:px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252B34] text-white">
                {carServices.map((service) => (
                  <tr key={service.id} className="hover:bg-[#19212A]/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-bold text-white">{service.name}</div>
                      <div className="text-[11px] text-[#738CAC] line-clamp-1">
                        {service.shortDescription}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-white">
                      {formatINR(service.pricing.small)}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-white">
                      {formatINR(service.pricing.m_suv)}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-accent">
                      {formatINR(service.pricing.suv_xl)}
                    </td>
                    <td className="py-4 px-4 hidden md:table-cell text-xs text-[#738CAC]">
                      {service.estimatedDuration}
                    </td>
                    <td className="py-4 px-4">
                      {service.pricing.isVerified ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3" />
                          Signboard Matched
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20" title={service.pricing.statusNote}>
                          <AlertCircle className="w-3 h-3" />
                          Handwritten check
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <button
                        onClick={() => onOpenBookingWithService && onOpenBookingWithService(service.id)}
                        className="px-3 py-1.5 rounded-lg bg-accent text-white font-bold text-xs uppercase tracking-wide hover:bg-accent-hover transition-colors shadow-sm"
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
