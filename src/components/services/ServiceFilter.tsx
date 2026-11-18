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
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
      {availableCategories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
              isActive
                ? 'bg-[#438E88] text-white shadow-sm'
                : 'bg-[#F1F7F3] text-[#62747A] hover:text-[#253C42] border border-[#E3EBE7] hover:border-[#438E88]/40 shadow-sm'
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
