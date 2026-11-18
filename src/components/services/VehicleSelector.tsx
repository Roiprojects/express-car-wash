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
    <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#DDD6CB] space-y-4 shadow-[0_8px_30px_rgba(32,44,44,0.05)]">
      {/* Top Toggle: Car vs Bike */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#DDD6CB]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#087F75] block font-bold">
            Vehicle Specification
          </span>
          <h4 className="text-lg font-serif font-bold text-[#202C2C] mt-0.5">
            Calibrate Catalog &amp; Prices
          </h4>
        </div>

        <div className="flex items-center gap-2 p-1 bg-[#F5EBDD] rounded-full border border-[#DDD6CB] self-start sm:self-auto">
          <button
            onClick={() => onSelectVehicleType('car')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
              vehicleType === 'car'
                ? 'bg-[#087F75] text-white shadow-sm'
                : 'text-[#202C2C] hover:text-[#087F75]'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Automobile</span>
          </button>

          <button
            onClick={() => onSelectVehicleType('bike')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
              vehicleType === 'bike'
                ? 'bg-[#087F75] text-white shadow-sm'
                : 'text-[#202C2C] hover:text-[#087F75]'
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
                    ? 'bg-[#FFF9EF] border-2 border-[#087F75] text-[#202C2C] shadow-sm'
                    : 'bg-[#F5EBDD] border border-[#DDD6CB] text-[#445452] hover:text-[#202C2C] hover:border-[#087F75]/50'
                }`}
              >
                <div className="text-sm font-serif font-bold text-[#202C2C]">{cat.label}</div>
                <div className="text-xs text-[#52615E] mt-1 line-clamp-1 font-medium">
                  {cat.examples}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Sub-selector / Banner for Two-Wheelers */}
      {vehicleType === 'bike' && (
        <div className="p-5 rounded-2xl bg-[#F5EBDD] border border-[#DDD6CB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CB] text-[#087F75] flex items-center justify-center flex-shrink-0">
              <Bike className="w-5 h-5 text-[#087F75]" />
            </div>
            <div>
              <div className="text-[#202C2C] font-serif font-bold text-base">Two-Wheeler &amp; Motorcycle Bay</div>
              <div className="text-[#445452] text-xs sm:text-sm mt-0.5">
                Calibrated low-pressure rinse, switchgear safety, chain degrease &amp; blow-dry for all scooters &amp; motorcycles (Activa, Jupiter, Pulsar, Splendor, Royal Enfield).
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs font-mono text-amber-900 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 whitespace-nowrap font-bold">
              45m+ Standard Protocol
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
