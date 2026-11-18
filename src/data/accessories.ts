export interface AccessoryCategory {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  items: string[];
  highlight: string;
  image: string;
}

export const ACCESSORIES_CATEGORIES: AccessoryCategory[] = [
  {
    id: 'wheels-tyres',
    name: 'Alloy Wheels & Tyres',
    shortDesc: 'Diamond-cut alloys, performance radial tyres, wheel balancing, and tyre care products.',
    iconName: 'Disc',
    items: [
      'Alloy wheels in multiple PCD sizes for Swift, i20, Creta, Nexon & XL SUVs',
      'All-terrain and highway tubeless tyre options',
      'Anti-theft wheel lock nuts & valve caps',
      'Ceramic wheel coating & deep alloy rim restoration',
    ],
    highlight: 'Available on enquiry based on your car wheel specification',
    image: '/images/maruti-baleno.jpg',
  },
  {
    id: 'audio-electronics',
    name: 'Audio Systems & Electronics',
    shortDesc: 'Touchscreen infotainment units, high-fidelity door speakers, subwoofers, and steering remotes.',
    iconName: 'Speaker',
    items: [
      'Android touchscreen displays with Apple CarPlay & Android Auto',
      'Coaxial & component speaker upgrades',
      'Under-seat subwoofers & compact amplifier installations',
      'Steering wheel mounted audio controls & reversing camera kits',
    ],
    highlight: 'Professional coupler-to-coupler installation with wire protection',
    image: '/images/hyundai-creta.jpg',
  },
  {
    id: 'lighting',
    name: 'Headlights, Fog Lamps & LEDs',
    shortDesc: 'High-intensity LED headlamp bulbs, projector fog lamps, DRL styling, and headlight restoration.',
    iconName: 'Lightbulb',
    items: [
      'High-lumen LED headlight conversion kits (plug-and-play)',
      'Weather-resistant projector fog lamps with dual-beam modes',
      'Sequential LED turn indicators & daytime running lights (DRL)',
      'Headlight buffing & UV-cured yellowing oxidation removal',
    ],
    highlight: 'Improved nighttime visibility for highway & city driving',
    image: '/images/kia-sonet.jpg',
  },
  {
    id: 'interior-accessories',
    name: 'Interior Comfort & Accessories',
    shortDesc: 'Custom-fit leatherette seat covers, 7D floor mats, steering wraps, and ambient cabin lighting.',
    iconName: 'Armchair',
    items: [
      'Custom tailored bucket-fit seat covers with breathable foam',
      'All-weather 7D molded floor mats & boot liners',
      'Hand-stitched leather steering wheel wraps',
      'App-controlled ambient cabin LED lighting strips & air purifiers',
    ],
    highlight: 'Made-to-order fitment for Indian hatchbacks, sedans and SUVs',
    image: '/images/maruti-dzire.jpg',
  },
  {
    id: 'exterior-accessories',
    name: 'Exterior Styling & Mirrors',
    shortDesc: 'Side foot steps, roof rails, door visors, auto-fold mirror kits, and body protective trims.',
    iconName: 'Shield',
    items: [
      'Heavy-duty side steps for Creta, Nexon, Brezza & XL SUVs',
      'Aerodynamic door rain visors & chrome beltline garnishes',
      'Functional and aesthetic roof rails & shark fin antennas',
      'Side-mirror auto-folding modules & blind spot mirror attachments',
    ],
    highlight: 'Protection against city scratches & parking scuffs',
    image: '/images/tata-nexon.jpg',
  },
];

export const ACCESSORIES_SECTION_CONFIG = {
  eyebrow: 'Automotive Accessories & Upgrades',
  title: 'MORE THAN A WASH.',
  subtitle:
    'Explore genuine accessories, audio enhancements, alloy wheels, and cabin styling upgrades for your vehicle. All fitments are handled by specialized technicians with warranty-safe coupler wiring.',
  ctaText: 'Ask About Accessories on WhatsApp',
  disclaimer:
    'Notice: Accessories are procured and fitted based on vehicle make, year and trim. Please enquire via WhatsApp to check compatible stock, brand options, and current pricing.',
};
