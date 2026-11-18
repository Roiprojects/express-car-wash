'use client';

import React from 'react';
import { SERVICES_DATA, ServiceCategory, VehicleType } from '@/data/services';
import { formatINR } from '@/lib/formatting';
import { generateBikeServiceWhatsAppUrl } from '@/lib/whatsapp';
import { MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';

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
  const showCarTable = vehicleType === 'car';
  const showBikeTable = vehicleType === 'bike';

  const carServices = SERVICES_DATA.filter((s) => s.vehicleType === 'car' && (activeCategory === 'all' || s.category === activeCategory));
  const bikeServices = SERVICES_DATA.filter((s) => s.vehicleType === 'bike' && (activeCategory === 'all' || s.category === activeCategory));

  return (
    <div className="space-y-12">
      {/* Bike Detailing Price Matrix */}
      {showBikeTable && (
        <div className="animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E3EBE7] gap-2 mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#438E88] font-bold mb-1">
                <span>Signboard Menu</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#253C42]">Two-Wheeler &amp; Motorcycle Services</h3>
              <p className="text-xs text-[#62747A]">
                Includes chain degrease, sensor-safe wash, compressed air blow-dry, and paint finish.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#438E88] bg-[#E4F2EF] px-3 py-1 rounded-full border border-[#438E88]/20 self-start sm:self-auto font-bold">
              Handwritten rates: Confirm on WhatsApp
            </span>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E3EBE7] bg-white shadow-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E3EBE7] bg-[#F1F7F3] text-[#62747A] font-mono text-[11px] uppercase tracking-wider font-bold">
                  <th className="py-4 px-4 sm:px-6">Motorcycle Treatment</th>
                  <th className="py-4 px-4">Rate</th>
                  <th className="py-4 px-4">Estimated Time</th>
                  <th className="py-4 px-4">Signboard Status</th>
                  <th className="py-4 px-4 sm:px-6 text-right">Enquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3EBE7] text-[#253C42]">
                {bikeServices.map((service) => (
                  <tr key={service.id} className="hover:bg-[#F1F7F3]/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-serif font-bold text-[#253C42]">{service.name}</div>
                      <div className="text-[11px] text-[#62747A] line-clamp-1">
                        {service.shortDescription}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-[#438E88]">
                      {service.pricing.bike ? formatINR(service.pricing.bike) : 'Contact for Price'}
                    </td>
                    <td className="py-4 px-4 text-xs text-[#62747A]">
                      {service.estimatedDuration}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <AlertCircle className="w-3 h-3 text-amber-700" />
                        Verify on WhatsApp
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <a
                        href={generateBikeServiceWhatsAppUrl(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#438E88] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#32766F] transition-colors shadow-sm"
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

      {/* Car & SUV Master Price Matrix */}
      {showCarTable && (
        <div className="animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E3EBE7] gap-2 mb-4">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#253C42]">Car &amp; SUV Workshop Price Matrix</h3>
              <p className="text-xs text-[#62747A]">
                Baseline rates calibrated directly from the physical workshop signboard.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#438E88] bg-[#E4F2EF] px-3 py-1 rounded-full border border-[#438E88]/20 self-start sm:self-auto font-bold">
              Currency: INR (₹)
            </span>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E3EBE7] bg-white shadow-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E3EBE7] bg-[#F1F7F3] text-[#62747A] font-mono text-[11px] uppercase tracking-wider font-bold">
                  <th className="py-4 px-4 sm:px-6">Treatment Service</th>
                  <th className="py-4 px-4">Small</th>
                  <th className="py-4 px-4">M SUV</th>
                  <th className="py-4 px-4">SUV XL</th>
                  <th className="py-4 px-4 hidden md:table-cell">Duration</th>
                  <th className="py-4 px-4">Verification</th>
                  <th className="py-4 px-4 sm:px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3EBE7] text-[#253C42]">
                {carServices.map((service) => (
                  <tr key={service.id} className="hover:bg-[#F1F7F3]/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-serif font-bold text-[#253C42]">{service.name}</div>
                      <div className="text-[11px] text-[#62747A] line-clamp-1">
                        {service.shortDescription}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-[#253C42]">
                      {formatINR(service.pricing.small)}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-[#253C42]">
                      {formatINR(service.pricing.m_suv)}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-[#438E88]">
                      {formatINR(service.pricing.suv_xl)}
                    </td>
                    <td className="py-4 px-4 hidden md:table-cell text-xs text-[#62747A]">
                      {service.estimatedDuration}
                    </td>
                    <td className="py-4 px-4">
                      {service.pricing.isVerified ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Signboard Matched
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200" title={service.pricing.statusNote}>
                          <AlertCircle className="w-3 h-3 text-amber-700" />
                          Handwritten check
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <button
                        onClick={() => onOpenBookingWithService && onOpenBookingWithService(service.id)}
                        className="px-4 py-1.5 rounded-full bg-[#438E88] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#32766F] transition-colors shadow-sm"
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
