'use client';

import React, { useState } from 'react';
import { SERVICES_DATA, ServiceCategory, CarCategory, VehicleType } from '@/data/services';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceFilter from '@/components/services/ServiceFilter';
import VehicleSelector from '@/components/services/VehicleSelector';
import PricingTable from '@/components/services/PricingTable';
import { useBooking } from '@/components/layout/AppShell';
import { Sparkles, TableProperties, LayoutGrid, AlertCircle } from 'lucide-react';
import ConversionCTA from '@/components/home/ConversionCTA';

export default function ServicesPage() {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [vehicleType, setVehicleType] = useState<VehicleType>('car');
  const [carCategory, setCarCategory] = useState<CarCategory>('m_suv');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Intelligent category selection with automatic vehicle type calibration
  const handleSelectCategory = (cat: ServiceCategory) => {
    setActiveCategory(cat);
    if (cat === 'bike-wash' || (cat as string) === 'bike-washing') {
      setVehicleType('bike');
    } else if (
      cat === 'car-wash' ||
      cat === 'interior' ||
      cat === 'polishing-waxing' ||
      cat === 'wrapping-films' ||
      cat === 'bodywork' ||
      cat === 'accessories' ||
      cat === 'ppf'
    ) {
      setVehicleType('car');
    }
  };

  // Intelligent vehicle selector with auto-switch
  const handleSelectVehicleType = (type: VehicleType) => {
    setVehicleType(type);
    if (type === 'bike') {
      if (
        activeCategory === 'car-wash' ||
        activeCategory === 'interior' ||
        activeCategory === 'polishing-waxing' ||
        activeCategory === 'wrapping-films' ||
        activeCategory === 'bodywork' ||
        activeCategory === 'accessories' ||
        activeCategory === 'ppf'
      ) {
        setActiveCategory('all');
      }
    } else if (type === 'car') {
      if (activeCategory === 'bike-wash' || (activeCategory as string) === 'bike-washing') {
        setActiveCategory('car-wash');
      }
    }
  };

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (service.vehicleType !== vehicleType) {
      return false;
    }

    if (activeCategory === 'all') {
      return true;
    }

    if (activeCategory === 'bike-wash' || (activeCategory as string) === 'bike-washing') {
      return service.category === 'bike-wash' || (service.category as string) === 'bike-washing';
    }

    return service.category === activeCategory;
  });

  return (
    <div className="bg-[#FFF9EF]">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#DDD6CB] bg-[#F5EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EF] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-4 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Express Car Wash — Complete Automotive Menu</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              Every Service. <br />
              <span className="text-[#087F75] italic font-serif">One Destination.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#445452] leading-relaxed">
              From everyday foam washes to self-healing PPF, 9H/10H ceramic shields, vehicle wrapping, bodywork tinkering &amp; painting, and performance accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Catalog Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Vehicle Classification Controller */}
        <VehicleSelector
          vehicleType={vehicleType}
          onSelectVehicleType={handleSelectVehicleType}
          carCategory={carCategory}
          onSelectCarCategory={(cat) => setCarCategory(cat)}
        />

        {/* Category Filters, Divider, and View Switcher */}
        <div className="space-y-4 pt-2">
          {/* Row 1 — Service category filters */}
          <div className="w-full">
            <ServiceFilter
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
              vehicleType={vehicleType}
            />
          </div>

          {/* Divider — Full-width subtle horizontal separator (#DDD6CB) */}
          <div className="w-full border-t border-[#DDD6CB]" />

          {/* Row 2 — Display Mode switcher (aligned to right on desktop) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-0">
            <div className="text-xs sm:text-sm text-[#52615E] font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#087F75]" />
              <span>Showing {filteredServices.length} detailing treatments</span>
            </div>

            <div className="flex items-center gap-2.5 self-start sm:self-auto">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52615E]">
                Display Mode
              </span>

              <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white border border-[#DDD6CB] shadow-sm h-[44px] sm:h-[48px]">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`flex items-center gap-1.5 px-4 h-full rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    viewMode === 'cards'
                      ? 'bg-[#087F75] text-white shadow-sm'
                      : 'text-[#445452] hover:text-[#202C2C] hover:bg-[#FFF9EF]'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Grid View</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`flex items-center gap-1.5 px-4 h-full rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    viewMode === 'table'
                      ? 'bg-[#087F75] text-white shadow-sm'
                      : 'text-[#445452] hover:text-[#202C2C] hover:bg-[#FFF9EF]'
                  }`}
                >
                  <TableProperties className="w-3.5 h-3.5" />
                  <span>Signboard Table</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Transparency Banner */}
        <div className="p-5 rounded-2xl bg-white border border-[#DDD6CB] flex items-start gap-3.5 text-xs sm:text-sm text-[#445452] shadow-sm">
          <AlertCircle className="w-4 h-4 text-[#087F75] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#202C2C]">Workshop Pricing Integrity:</strong> All prices below represent the confirmed workshop signboard. Any handwritten notes or revisions (including full foam wash updates) are prominently flagged so you receive 100% transparent quotes over WhatsApp before work begins.
          </p>
        </div>

        {/* Catalog Content (Cards or Table) */}
        {viewMode === 'cards' ? (
          <div>
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    selectedCarCategory={carCategory}
                    onOpenBooking={(id) => openBooking(id)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-16 text-center rounded-3xl bg-white border border-[#DDD6CB] space-y-4">
                <p className="text-[#445452] text-base">
                  No treatments match the selected category for this vehicle type.
                </p>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="px-6 py-3 rounded-full bg-[#087F75] hover:bg-[#06665F] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm"
                >
                  Reset Category Filter
                </button>
              </div>
            )}
          </div>
        ) : (
          <PricingTable
            onOpenBookingWithService={(id) => openBooking(id)}
            activeCategory={activeCategory}
            vehicleType={vehicleType}
          />
        )}
      </section>

      {/* Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </div>
  );
}
