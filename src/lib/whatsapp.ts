import { BUSINESS_CONFIG } from '@/data/business';

export interface BookingEnquiryPayload {
  vehicleType: 'car' | 'bike';
  carCategoryLabel?: string;
  serviceName: string;
  preferredDate?: string;
  preferredTime?: string;
  customerName: string;
  customerPhone?: string;
  customerNotes?: string;
  estimatedPrice?: string;
  isPriceVerified?: boolean;
}

/**
 * Generates an official WhatsApp enquiry link with prefilled, formatted message.
 */
export function generateWhatsAppBookingUrl(payload: BookingEnquiryPayload): string {
  const brand = BUSINESS_CONFIG.brandName;
  const targetNumber = BUSINESS_CONFIG.whatsapp;

  const vehicleDesc = payload.vehicleType === 'car'
    ? `Car (${payload.carCategoryLabel || 'Standard'})`
    : 'Bike / Two-Wheeler';

  const dateStr = payload.preferredDate || 'Earliest available date';
  const timeStr = payload.preferredTime || 'Preferred slot';
  const nameStr = payload.customerName?.trim() || 'Customer';

  let message = `Hello ${brand},\n\n`;
  message += `I would like to enquire about scheduling an appointment for detailing/wash:\n\n`;
  message += `• Service: ${payload.serviceName}\n`;
  message += `• Vehicle: ${vehicleDesc}\n`;
  message += `• Preferred Date: ${dateStr}\n`;
  message += `• Preferred Time: ${timeStr}\n`;
  message += `• Client Name: ${nameStr}\n`;

  if (payload.customerPhone) {
    message += `• Contact Number: ${payload.customerPhone}\n`;
  }

  if (payload.estimatedPrice) {
    message += `• Quoted Baseline: ${payload.estimatedPrice}${payload.isPriceVerified ? '' : ' (Requires confirmation)'}\n`;
  }

  if (payload.customerNotes && payload.customerNotes.trim().length > 0) {
    message += `• Specific Request: ${payload.customerNotes.trim()}\n`;
  }

  message += `\nPlease confirm bay availability and current workshop rates. Thank you!`;

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Direct WhatsApp enquiry for general questions or quick button clicks.
 */
export function generateQuickWhatsAppUrl(customSubject?: string): string {
  const brand = BUSINESS_CONFIG.brandName;
  const targetNumber = BUSINESS_CONFIG.whatsapp;

  let message = `Hello ${brand}, I'm visiting your website and would like to enquire about your detailing services and workshop availability.`;
  if (customSubject) {
    message = `Hello ${brand}, I would like to enquire about: ${customSubject}. Please let me know your latest pricing and bay availability.`;
  }

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}
