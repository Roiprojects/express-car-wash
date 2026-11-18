export interface BusinessConfig {
  brandName: string;
  shortBrandName: string;
  displayHeadlineName: string;
  legalEntityNotice: string;
  establishedYear: number | null;
  establishedYearNote: string;
  signboardAlternativeNames: string[];
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string; // Alias for primaryPhone
  phoneFormatted: string; // Alias for primaryPhoneFormatted
  primaryPhone: string;
  secondaryPhone: string;
  primaryPhoneFormatted: string;
  secondaryPhoneFormatted: string;
  whatsapp: string;
  whatsappSecondary: string;
  email: string | null;
  branchCountAdvertised: number;
  branchCountNote: string;
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
  brandName: "Kousalya's Express Car Wash",
  shortBrandName: "Express Car Wash",
  displayHeadlineName: "KOUSALYA'S EXPRESS",
  legalEntityNotice:
    "Promotional branding displays 'Kousalya's Express Car Wash'. Original workshop signboard displays 'ONE STOP Car & Bike Foam Wash SPA', 'Ex_press', and 'SLA GROUPS'. Both contact lines are actively maintained.",
  establishedYear: 2015,
  establishedYearNote:
    "Business poster reflects 'SINS: 2015' (Established 2015). Flagged for formal business documentation verification.",
  signboardAlternativeNames: [
    "Kousalya's Car & Bike Services",
    "Ex_press Car & Bike Detailing",
    "ONE STOP Car & Bike Foam Wash SPA",
    "SLA GROUPS"
  ],
  tagline: "Complete Car & Bike Care, Detailing, Paint Protection & Accessories.",
  heroHeadline: "COMPLETE CAR & BIKE CARE.\nALL IN ONE PLACE.",
  heroSubheadline:
    "From everyday active foam washing to ceramic & graphene coatings, self-healing paint protection film (PPF), detailing and automotive accessories.",
  phone: "+91 7022338693", // Alias for primaryPhone
  phoneFormatted: "+91 70223 38693",
  primaryPhone: "+91 7022338693", // New promotional number from posters
  secondaryPhone: "+91 7406322238", // Original signboard number
  primaryPhoneFormatted: "+91 70223 38693",
  secondaryPhoneFormatted: "+91 74063 22238",
  whatsapp: "917022338693",
  whatsappSecondary: "917406322238",
  email: null,
  branchCountAdvertised: 3,
  branchCountNote:
    "Promotional poster advertises 3 branches ('WE HAVE 3 BRANCHES'). Individual branch addresses and locations are pending business confirmation.",
  address: {
    display: "Branch network across Bengaluru (Contact for exact bay locations & directions)",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    country: "India",
    isVerifiedLocation: false,
    googleMapsEmbedUrl: undefined,
  },
  operatingHours: {
    days: "Monday – Sunday",
    timing: "8:00 AM – 8:30 PM (Prior appointment recommended for Detailing & PPF)",
    isVerifiedHours: false,
  },
  serviceNotice: {
    minimumWashTime: "Minimum car & bike washing time: 45 minutes",
    disclaimer:
      "Advertised minimum wash duration. Total turnaround time may vary based on vehicle dimensions, surface dirt, and specialized detailing or coating procedures.",
  },
  currency: {
    symbol: "₹",
    code: "INR",
    locale: "en-IN",
  },
};
