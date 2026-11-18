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
    <div className="p-4 sm:p-6 rounded-3xl bg-[#13171D] border border-[#252B34] space-y-4 shadow-xl">
      {/* Top Toggle: Car vs Bike */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#252B34]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent block font-semibold">
            Vehicle Specification
          </span>
          <h4 className="text-base font-bold text-white mt-0.5">
            Calibrate Catalog & Prices
          </h4>
        </div>

        <div className="flex items-center gap-2 p-1 bg-[#0C1016] rounded-2xl border border-[#252B34] self-start sm:self-auto">
          <button
            onClick={() => onSelectVehicleType('car')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              vehicleType === 'car'
                ? 'bg-accent text-white shadow-sm shadow-accent/20'
                : 'text-[#738CAC] hover:text-white'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Automobile</span>
          </button>

          <button
            onClick={() => onSelectVehicleType('bike')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              vehicleType === 'bike'
                ? 'bg-accent text-white shadow-sm shadow-accent/20'
                : 'text-[#738CAC] hover:text-white'
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
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#19212A] border-accent text-white shadow-sm'
                    : 'bg-[#0C1016] border-[#252B34] text-[#738CAC] hover:text-white hover:border-white/20'
                }`}
              >
                <div className="text-xs font-bold text-white">{cat.label}</div>
                <div className="text-[11px] text-[#738CAC] mt-1 line-clamp-1">
                  {cat.examples}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Sub-selector / Banner for Two-Wheelers */}
      {vehicleType === 'bike' && (
        <div className="p-4 rounded-2xl bg-[#0C1016] border border-[#252B34] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Two-Wheeler & Motorcycle Bay</div>
              <div className="text-[#738CAC] text-[11px] mt-0.5">
                Calibrated low-pressure rinse, switchgear safety, chain degrease & blow-dry for all scooters & motorcycles (Activa, Jupiter, Pulsar, Splendor, Royal Enfield).
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 whitespace-nowrap">
              Handwritten checks on board: Contact on WhatsApp
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
