'use client';

import React from 'react';
import { SERVICE_CATEGORIES, ServiceCategory, VehicleType } from '@/data/services';
import {
  Sparkles,
  Car,
  Bike,
  Armchair,
  ShieldAlert,
  Gem,
  ShieldCheck,
  Layers,
  Wrench,
  Sliders,
} from 'lucide-react';

interface ServiceFilterProps {
  activeCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  vehicleType?: VehicleType;
}

export default function ServiceFilter({ activeCategory, onSelectCategory, vehicleType = 'car' }: ServiceFilterProps) {
  const availableCategories = SERVICE_CATEGORIES.filter((cat) => {
    if (vehicleType === 'bike') {
      return cat.id === 'all' || cat.id === 'bike-wash' || cat.id === 'ceramic';
    }
    return cat.id !== 'bike-wash' && (cat.id as string) !== 'bike-washing';
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-4 h-4" />;
      case 'Bike':
        return <Bike className="w-4 h-4" />;
      case 'Armchair':
        return <Armchair className="w-4 h-4" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-4 h-4" />;
      case 'Gem':
        return <Gem className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      case 'Sliders':
        return <Sliders className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex items-center gap-2.5 overflow-x-auto pb-4 no-scrollbar">
      {availableCategories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 min-h-[42px] rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 active:scale-95 ${
              isActive
                ? 'bg-[#087F75] text-white shadow-sm'
                : 'bg-white text-[#202C2C] hover:text-[#087F75] hover:bg-[#FFF9EF] border border-[#DDD6CB] hover:border-[#087F75] shadow-sm'
            }`}
          >
            {getIcon(cat.iconName)}
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
