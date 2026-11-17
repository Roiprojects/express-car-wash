/**
 * Formats a number to Indian Rupee (INR) currency format (e.g. ₹14,999)
 */
export function formatINR(amount?: number | null): string {
  if (amount === undefined || amount === null) {
    return 'Price on request';
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Clean phone number for tel: links
 */
export function sanitizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, '');
}
