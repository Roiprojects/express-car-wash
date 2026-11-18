import { BUSINESS_CONFIG } from '@/data/business';

export interface BookingEnquiryPayload {
  vehicleType: 'car' | 'bike' | 'both';
  carCategoryLabel?: string;
  serviceName: string;
  preferredDate?: string;
  preferredTime?: string;
  customerName: string;
  customerPhone?: string;
  customerNotes?: string;
  estimatedPrice?: string;
  isPriceVerified?: boolean;
  branchName?: string;
}

/**
 * Generates an official WhatsApp booking enquiry link with prefilled, formatted message.
 */
export function generateWhatsAppBookingUrl(payload: BookingEnquiryPayload): string {
  const brand = BUSINESS_CONFIG.brandName;
  const targetNumber = BUSINESS_CONFIG.whatsapp;

  const vehicleDesc =
    payload.vehicleType === 'car'
      ? `Car (${payload.carCategoryLabel || 'Standard'})`
      : payload.vehicleType === 'bike'
      ? 'Bike / Two-Wheeler'
      : 'Vehicle (Car / Bike)';

  const dateStr = payload.preferredDate || 'Earliest available date';
  const timeStr = payload.preferredTime || 'Preferred slot';
  const nameStr = payload.customerName?.trim() || 'Customer';

  let message = `Hello ${brand},\n\n`;
  message += `I would like to enquire about scheduling an appointment for detailing/service:\n\n`;
  message += `• Service: ${payload.serviceName}\n`;
  message += `• Vehicle: ${vehicleDesc}\n`;
  if (payload.branchName) {
    message += `• Preferred Branch: ${payload.branchName}\n`;
  }
  message += `• Preferred Date: ${dateStr}\n`;
  message += `• Preferred Time: ${timeStr}\n`;
  message += `• Client Name: ${nameStr}\n`;

  if (payload.customerPhone) {
    message += `• Contact Number: ${payload.customerPhone}\n`;
  }

  if (payload.estimatedPrice) {
    message += `• Quoted Baseline: ${payload.estimatedPrice}${
      payload.isPriceVerified ? '' : ' (Requires confirmation)'
    }\n`;
  }

  if (payload.customerNotes && payload.customerNotes.trim().length > 0) {
    message += `• Specific Request: ${payload.customerNotes.trim()}\n`;
  }

  message += `\nPlease confirm bay availability, branch location and current rates. Thank you!`;

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * WhatsApp enquiry specifically for Bike Services.
 */
export function generateBikeServiceWhatsAppUrl(serviceName: string): string {
  const brand = BUSINESS_CONFIG.brandName;
  const targetNumber = BUSINESS_CONFIG.whatsapp;

  const message = `Hello ${brand}, I would like to enquire about ${serviceName} for my motorcycle/scooter. Please share the latest price and availability.`;

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Direct WhatsApp enquiry for general questions, protection packages, accessories, or quick CTA clicks.
 */
export function generateQuickWhatsAppUrl(customSubject?: string): string {
  const brand = BUSINESS_CONFIG.brandName;
  const targetNumber = BUSINESS_CONFIG.whatsapp;

  let message = `Hello ${brand}, I'm visiting your website and would like to enquire about your services and bay availability.`;
  if (customSubject) {
    message = `Hello ${brand}, I would like to enquire about: ${customSubject}. Please share your package options, pricing, and nearest branch availability.`;
  }

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * WhatsApp enquiry specifically for Paint Protection Film (PPF), Ceramic, or Graphene coating.
 */
export function generateProtectionWhatsAppUrl(serviceType: 'PPF' | 'Ceramic' | 'Graphene'): string {
  const brand = BUSINESS_CONFIG.brandName;
  const targetNumber = BUSINESS_CONFIG.whatsapp;

  const message = `Hello ${brand}, I am interested in ${serviceType} paint protection for my car. Please share package details, warranty info, process timeline, and quotation.`;

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * WhatsApp enquiry for automotive accessories by category.
 */
export function generateAccessoryWhatsAppUrl(categoryName: string): string {
  const brand = BUSINESS_CONFIG.brandName;
  const targetNumber = BUSINESS_CONFIG.whatsapp;

  const message = `Hello ${brand}, I would like to check availability and pricing for automotive accessories in '${categoryName}' for my vehicle.`;

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * WhatsApp enquiry for branch location and directions.
 */
export function generateBranchWhatsAppUrl(branchName: string): string {
  const brand = BUSINESS_CONFIG.brandName;
  const targetNumber = BUSINESS_CONFIG.whatsapp;

  const message = `Hello ${brand}, please send me the exact GPS location and directions for ${branchName}.`;

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}
