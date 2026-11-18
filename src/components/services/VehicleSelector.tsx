'use client';

import React from 'react';
import { CAR_CATEGORIES, CarCategory, VehicleType } from '@/data/services';
import { Car, Bike } from 'lucide-react';

interface VehicleSelectorProps {
  vehicleType: VehicleType;
  onSelectVehicleType: (type: VehicleType) => void;
  carCategory: CarCategory;
  onSelectCarCategory: (category: CarCategory) => void;
}

export default function VehicleSelector({
  vehicleType,
  onSelectVehicleType,
  carCategory,
  onSelectCarCategory,
}: VehicleSelectorProps) {
  return (
    <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#E3EBE7] space-y-4 shadow-[0_8px_30px_rgba(37,60,66,0.06)]">
      {/* Top Toggle: Car vs Bike */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E3EBE7]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#438E88] block font-bold">
            Vehicle Specification
          </span>
          <h4 className="text-base font-serif font-bold text-[#253C42] mt-0.5">
            Calibrate Catalog &amp; Prices
          </h4>
        </div>

        <div className="flex items-center gap-2 p-1 bg-[#F1F7F3] rounded-full border border-[#E3EBE7] self-start sm:self-auto">
          <button
            onClick={() => onSelectVehicleType('car')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              vehicleType === 'car'
                ? 'bg-[#438E88] text-white shadow-sm'
                : 'text-[#62747A] hover:text-[#253C42]'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Automobile</span>
          </button>

          <button
            onClick={() => onSelectVehicleType('bike')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              vehicleType === 'bike'
                ? 'bg-[#438E88] text-white shadow-sm'
                : 'text-[#62747A] hover:text-[#253C42]'
            }`}
          >
            <Bike className="w-4 h-4" />
            <span>Motorcycle</span>
          </button>
        </div>
      </div>

      {/* Sub-selector for Cars */}
      {vehicleType === 'car' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {CAR_CATEGORIES.map((cat) => {
            const isSelected = carCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCarCategory(cat.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#E4F2EF] border-[#438E88] text-[#253C42] shadow-sm'
                    : 'bg-[#F1F7F3] border-[#E3EBE7] text-[#62747A] hover:text-[#253C42] hover:border-[#438E88]/40'
                }`}
              >
                <div className="text-xs font-serif font-bold text-[#253C42]">{cat.label}</div>
                <div className="text-[11px] text-[#62747A] mt-1 line-clamp-1">
                  {cat.examples}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Sub-selector / Banner for Two-Wheelers */}
      {vehicleType === 'bike' && (
        <div className="p-4 rounded-2xl bg-[#F1F7F3] border border-[#E3EBE7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E4F2EF] text-[#438E88] flex items-center justify-center flex-shrink-0">
              <Bike className="w-5 h-5 text-[#438E88]" />
            </div>
            <div>
              <div className="text-[#253C42] font-serif font-bold text-sm">Two-Wheeler &amp; Motorcycle Bay</div>
              <div className="text-[#62747A] text-[11px] mt-0.5">
                Calibrated low-pressure rinse, switchgear safety, chain degrease &amp; blow-dry for all scooters &amp; motorcycles (Activa, Jupiter, Pulsar, Splendor, Royal Enfield).
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 whitespace-nowrap font-medium">
              Handwritten checks on board: Contact on WhatsApp
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
