'use client';

import React, { useState, createContext, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import CustomCursor from '@/components/ui/CustomCursor';
import Preloader from '@/components/ui/Preloader';
import BookingWizardModal from '@/components/booking/BookingWizardModal';

interface BookingContextType {
  openBooking: (serviceId?: string) => void;
  closeBooking: () => void;
}

export const BookingContext = createContext<BookingContextType>({
  openBooking: () => {},
  closeBooking: () => {},
});

export const useBooking = () => useContext(BookingContext);

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | undefined>();

  const openBooking = (serviceId?: string) => {
    setActiveServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setActiveServiceId(undefined);
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      <Preloader />
      <CustomCursor />
      
      <div className="min-h-screen flex flex-col bg-[#FFF9EF] text-[#202C2C]">
        <Header onOpenBooking={() => openBooking()} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </div>

      <BookingWizardModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        initialServiceId={activeServiceId}
      />
    </BookingContext.Provider>
  );
}
