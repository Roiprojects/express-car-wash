export interface BusinessConfig {
  brandName: string;
  legalEntityNotice: string;
  signboardAlternativeNames: string[];
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string | null;
  address: {
    display: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    isVerifiedLocation: boolean;
    googleMapsEmbedUrl?: string;
  };
  operatingHours: {
    days: string;
    timing: string;
    isVerifiedHours: boolean;
  };
  serviceNotice: {
    minimumWashTime: string;
    disclaimer: string;
  };
  currency: {
    symbol: string;
    code: string;
    locale: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  brandName: "Ex_press",
  legalEntityNotice: "Brand configured as Ex_press. Physical signboard displays 'ONE STOP Car & Bike Foam Wash SPA' and 'SLA GROUPS'. Update this configuration to switch brand presentation.",
  signboardAlternativeNames: [
    "ONE STOP Car & Bike Foam Wash SPA",
    "SLA GROUPS"
  ],
  tagline: "Professional Detailing for Everyday Cars & Bikes. Exceptional Finish. Honest Pricing.",
  heroHeadline: "EVERY CAR DESERVES\nA FRESH START.",
  heroSubheadline: "Professional car and bike washing, deep interior cleaning, polishing and ceramic care — for everyday hatchbacks, sedans, SUVs, bikes and scooters.",
  phone: "+91 7406322238",
  whatsapp: "917406322238",
  whatsappFormatted: "+91 74063 22238",
  email: null, // Configurable placeholder: verified email pending client confirmation
  address: {
    display: "Prime Automotive Care Hub (Location Details to be verified upon booking)",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    country: "India",
    isVerifiedLocation: false, // Flagged false to prevent fabricating an unconfirmed physical location
    googleMapsEmbedUrl: undefined,
  },
  operatingHours: {
    days: "Monday – Sunday",
    timing: "8:00 AM – 8:30 PM (Prior appointment recommended)",
    isVerifiedHours: false, // Flagged for business confirmation
  },
  serviceNotice: {
    minimumWashTime: "Minimum car & bike washing time: 45 minutes",
    disclaimer: "Advertised minimum wash duration. Total turnaround time may vary based on vehicle dimensions, surface dirt, and specialized detailing procedures.",
  },
  currency: {
    symbol: "₹",
    code: "INR",
    locale: "en-IN",
  },
};
