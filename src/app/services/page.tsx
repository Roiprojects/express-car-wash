'use client';

import React, { useState } from 'react';
import { SERVICES_DATA, ServiceCategory, CarCategory, VehicleType } from '@/data/services';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceFilter from '@/components/services/ServiceFilter';
import VehicleSelector from '@/components/services/VehicleSelector';
import PricingTable from '@/components/services/PricingTable';
import { useBooking } from '@/components/layout/AppShell';
import { Sparkles, TableProperties, LayoutGrid, AlertCircle, Calendar } from 'lucide-react';
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
    } else if (cat === 'car-wash') {
      setVehicleType('car');
    }
  };

  // Intelligent vehicle selector with auto-switch
  const handleSelectVehicleType = (type: VehicleType) => {
    setVehicleType(type);
    if (type === 'bike' && activeCategory === 'car-wash') {
      setActiveCategory('bike-wash');
    } else if (type === 'car' && (activeCategory === 'bike-wash' || (activeCategory as string) === 'bike-washing')) {
      setActiveCategory('car-wash');
    }
  };

  // Robust filtering logic ensuring bike washing is NEVER empty
  const isBikeCategory = activeCategory === 'bike-wash' || (activeCategory as string) === 'bike-washing';
  const isCarCategory = activeCategory === 'car-wash';

  const filteredServices = SERVICES_DATA.filter((service) => {
    // 1. If Bike Washing category is selected, match all bike services
    if (isBikeCategory) {
      return service.category === 'bike-wash' || (service.category as string) === 'bike-washing' || service.vehicleType === 'bike';
    }

    // 2. If Car Washing category is selected, match car wash services
    if (isCarCategory) {
      return (service.category === 'car-wash' || (service.category as string) === 'car-washing') && (service.vehicleType === 'car' || service.vehicleType === 'both');
    }

    // 3. Category matching for other tabs
    const matchesCategory =
      activeCategory === 'all' || service.category === activeCategory;

    // 4. Vehicle type matching
    const matchesVehicle =
      service.vehicleType === 'both' ||
      (vehicleType === 'bike' ? service.vehicleType === 'bike' : service.vehicleType === 'car');

    return matchesCategory && matchesVehicle;
  });

  return (
    <div className="bg-[#0C1016]">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#252B34]">
        <div className="absolute inset-0 automotive-grid pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kousalya's Express — Complete Automotive Menu</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              EVERY SERVICE. <br />
              <span className="text-gradient-cyan">ONE DESTINATION.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#738CAC] leading-relaxed">
              From everyday foam washes to self-healing PPF, 9H/10H ceramic shields, vehicle wrapping, bodywork tinkering & painting, and performance accessories.
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

        {/* Category Filters and View Toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
          <ServiceFilter
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />

          <div className="flex items-center gap-2 self-start md:self-auto p-1 rounded-xl bg-[#13171D] border border-[#252B34]">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === 'cards'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-[#738CAC] hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === 'table'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-[#738CAC] hover:text-white'
              }`}
            >
              <TableProperties className="w-3.5 h-3.5" />
              <span>Signboard Table</span>
            </button>
          </div>
        </div>

        {/* Pricing Transparency Banner */}
        <div className="p-4 rounded-2xl bg-[#13171D] border border-[#252B34] flex items-start gap-3 text-xs text-[#738CAC] shadow-sm">
          <AlertCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Workshop Pricing Integrity:</strong> All prices below represent the confirmed workshop signboard. Any handwritten notes or revisions (including full foam wash updates) are prominently flagged so you receive 100% transparent quotes over WhatsApp before work begins.
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
              <div className="p-16 text-center rounded-3xl bg-[#13171D] border border-[#252B34] space-y-4">
                <p className="text-[#738CAC] text-sm">
                  No treatments match the selected category for this vehicle type.
                </p>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="px-4 py-2 rounded-xl bg-accent text-white font-bold text-xs uppercase"
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
