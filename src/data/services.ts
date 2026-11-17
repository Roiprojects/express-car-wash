export type VehicleType = 'car' | 'bike';

export type CarCategory = 'small' | 'm_suv' | 'suv_xl';

export type ServiceCategory = 
  | 'all'
  | 'car-wash'
  | 'bike-wash'
  | 'interior'
  | 'polishing-waxing'
  | 'ceramic';

export interface PriceTier {
  small?: number;
  m_suv?: number;
  suv_xl?: number;
  bike?: number;
  isVerified: boolean;
  statusNote?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategory;
  vehicleType: VehicleType | 'both';
  shortDescription: string;
  fullDescription: string;
  estimatedDuration: string;
  pricing: PriceTier;
  features: string[];
  recommendedFor: string;
  popular?: boolean;
  badge?: string;
  image: string;
}

export const CAR_CATEGORIES: { id: CarCategory; label: string; examples: string }[] = [
  { id: 'small', label: 'Small Hatch / Sedan', examples: 'Swift, i20, Dzire, Baleno, Amaze, Grand i10, Tiago' },
  { id: 'm_suv', label: 'Mid-Size SUV / Crossover', examples: 'Creta, Seltos, Nexon, Brezza, Punch, Sonet, XUV300' },
  { id: 'suv_xl', label: 'Full SUV / XL / MUV', examples: 'Fortuner, Safari, XUV700, Scorpio-N, Innova, Carens' },
];

export const SERVICE_CATEGORIES: { id: ServiceCategory; label: string; iconName: string }[] = [
  { id: 'all', label: 'All Services', iconName: 'Sparkles' },
  { id: 'car-wash', label: 'Car Washing', iconName: 'Car' },
  { id: 'bike-wash', label: 'Bike Washing', iconName: 'Bike' },
  { id: 'interior', label: 'Interior Detailing', iconName: 'Armchair' },
  { id: 'polishing-waxing', label: 'Polishing & Waxing', iconName: 'ShieldAlert' },
  { id: 'ceramic', label: 'Ceramic Protection', iconName: 'Gem' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'full-car-foam-wash',
    name: 'Full Car Foam Wash',
    slug: 'full-car-foam-wash',
    category: 'car-wash',
    vehicleType: 'car',
    popular: true,
    badge: 'Most Popular',
    shortDescription: 'High-density pH-neutral active foam bath, underbody blast, wheels, tyre dress, and microfiber drying.',
    fullDescription: 'Our signature thorough foam spa treatment. Removes road grime, brake dust, and bug splatters using pH-balanced high-foaming suds that encapsulate dirt particles safely without scratching your clear coat.',
    estimatedDuration: '45 – 60 mins',
    pricing: {
      small: 400,
      m_suv: 500,
      suv_xl: 600,
      isVerified: false,
      statusNote: 'Handwritten update on signboard detected. Contact to re-verify latest charged rate.',
    },
    features: [
      'High-pressure pre-rinse & underbody wash',
      'Dual-bucket hand wash with active snow foam',
      'Wheel arches, rims & tyre degreasing',
      'Glass polishing & streak-free streak drying',
      'Exterior rubber & tyre gloss dressing',
    ],
    recommendedFor: 'Routine weekly or fortnightly vehicle decontamination for Swift, i20, Baleno, Creta, Nexon & family cars.',
    image: '/images/maruti-swift.jpg',
  },
  {
    id: 'outer-wash',
    name: 'Outer Wash',
    slug: 'outer-wash',
    category: 'car-wash',
    vehicleType: 'car',
    shortDescription: 'Swift high-pressure body wash, wheel decontamination, and clean microfiber wipe-down.',
    fullDescription: 'A focused exterior wash designed for drivers in a hurry who need an efficient clean without a full interior extraction.',
    estimatedDuration: '30 – 45 mins',
    pricing: {
      small: 350,
      m_suv: 400,
      suv_xl: 500,
      isVerified: true,
      statusNote: 'Printed signboard price matches current baseline.',
    },
    features: [
      'High-pressure exterior rinse',
      'Body shampoo wash & wheel rinse',
      'Microfiber chamois dry',
      'Tyre wipe',
    ],
    recommendedFor: 'Quick exterior spruce-up between detailed washes.',
    image: '/images/maruti-dzire.jpg',
  },
  {
    id: 'full-car-diesel-wash',
    name: 'Full Car Diesel Wash',
    slug: 'full-car-diesel-wash',
    category: 'car-wash',
    vehicleType: 'car',
    shortDescription: 'Deep underbody, chassis, and suspension degreasing using specialized emulsified wash blend.',
    fullDescription: 'Targeted chassis and heavy road salt/grease wash. Dissolves stubborn bitumen, tar deposits, engine bay splashes, and tough highway debris.',
    estimatedDuration: '60 – 75 mins',
    pricing: {
      small: 800,
      m_suv: 900,
      suv_xl: 1100,
      isVerified: true,
      statusNote: 'Printed signboard price.',
    },
    features: [
      'Full undercarriage & chassis chemical rinse',
      'Engine bay dust & grease emulsification',
      'Wheel wells & axle degreasing',
      'Full foam exterior wash to finish',
    ],
    recommendedFor: 'Vehicles returning from long highway road trips, rural roads, or muddy monsoons.',
    image: '/images/tata-nexon.jpg',
  },
  {
    id: 'deep-car-foam-wash',
    name: 'Deep Car Foam Wash',
    slug: 'deep-car-foam-wash',
    category: 'car-wash',
    vehicleType: 'car',
    badge: 'Deep Detail',
    shortDescription: 'Intensive snow foam bath, iron fallout decontamination, boot jambs, and deep wheel barrel cleaning.',
    fullDescription: 'An upgraded foam treatment with extended dwell time, soft-bristle brush detailing around badges, front grilles, and rubber seals, followed by door jamb extraction.',
    estimatedDuration: '75 – 90 mins',
    pricing: {
      small: 1500,
      m_suv: 2000,
      suv_xl: 2500,
      isVerified: true,
      statusNote: 'Printed signboard price.',
    },
    features: [
      'Extended dwell snow foam decon',
      'Soft detailing brush on grilles, badges & crevices',
      'Door jambs, boot shut & fuel flap cleaning',
      'Deep alloy wheel barrel scrub & iron purge',
      'Hydrophobic gloss spray sealant application',
    ],
    recommendedFor: 'Enthusiasts seeking a showroom-ready deep cleanse.',
    image: '/images/maruti-brezza.jpg',
  },
  {
    id: 'deep-interior-cleaning',
    name: 'Deep Interior Cleaning',
    slug: 'deep-interior-cleaning',
    category: 'interior',
    vehicleType: 'car',
    popular: true,
    badge: 'Customer Choice',
    shortDescription: 'Full upholstery steam vacuum, roof headliner, dashboard conditioning, carpet extraction, and sanitization.',
    fullDescription: 'Total cabin rejuvenation. We eliminate dust mites, stubborn seat stains, trapped odors, and sticky residue across your leather, fabric, door cards, and boot carpet.',
    estimatedDuration: '2.5 – 3.5 hours',
    pricing: {
      small: 2500,
      m_suv: 3500,
      suv_xl: 4500,
      isVerified: true,
      statusNote: 'Printed signboard price.',
    },
    features: [
      'Industrial wet & dry extraction vacuuming',
      'Fabric seat shampoo or premium leather conditioner',
      'Roof headliner dry-cleaning & stain treatment',
      'Dashboard, consoles & AC vent anti-bacterial purge',
      'Carpet & trunk compartment deep extraction',
      'Odor neutralizer & cabin freshener',
    ],
    recommendedFor: 'Family cars, pre-monsoon refresh, or post-road trip cabin restoration.',
    image: '/images/hyundai-grandi10.jpg',
  },
  {
    id: 'rubbing-polish-teflon',
    name: 'Rubbing Polish / Teflon Coating',
    slug: 'rubbing-polish-teflon',
    category: 'polishing-waxing',
    vehicleType: 'car',
    badge: 'Paint Rejuvenation',
    shortDescription: 'Multi-stage machine paint correction, swirl mark elimination, clear coat glaze, and Teflon sealant.',
    fullDescription: 'Restores the optical clarity of your clear coat by leveling micro-scratches, oxidation, and bird-drop etching using dual-action rotary polishers and compounds.',
    estimatedDuration: '3.5 – 5 hours',
    pricing: {
      small: 3500,
      m_suv: 4500,
      suv_xl: 5500,
      isVerified: true,
      statusNote: 'Printed signboard price.',
    },
    features: [
      'Clay bar mechanical surface decontamination',
      'Multi-stage compound buffing for swirl reduction',
      'Fine polish finishing to maximize paint depth',
      'Synthetic Teflon polymer sealant coat for gloss',
      'Plastic trim rejuvenation',
    ],
    recommendedFor: 'Cars with dull paint, visible spider-web swirls, or light brush scratches.',
    image: '/images/kia-sonet.jpg',
  },
  {
    id: 'ceramic-wash',
    name: 'Ceramic Wash',
    slug: 'ceramic-wash',
    category: 'ceramic',
    vehicleType: 'car',
    shortDescription: 'SiO2-infused ceramic foaming bath creating instant water beading, slickness, and UV protection.',
    fullDescription: 'Formulated with silicon dioxide (SiO2) nanoparticles that bond to the clear coat during the wash, boosting gloss and super-hydrophobic beading.',
    estimatedDuration: '60 – 75 mins',
    pricing: {
      small: 999,
      m_suv: 1499,
      suv_xl: 2000,
      isVerified: true,
      statusNote: 'Printed signboard price.',
    },
    features: [
      'SiO2 ceramic active foam wash',
      'Extreme water repelling & dirt-shedding barrier',
      'High-gloss mirror slickness booster',
      'Excellent maintenance for already coated cars',
    ],
    recommendedFor: 'Coated and non-coated vehicles wanting ceramic gloss without multi-day coating application.',
    image: '/images/maruti-baleno.jpg',
  },
  {
    id: 'ceramic-waxing',
    name: 'Ceramic Waxing',
    slug: 'ceramic-waxing',
    category: 'polishing-waxing',
    vehicleType: 'car',
    shortDescription: 'Hybrid ceramic carnauba hand-buffed wax providing warm mirror luster and weather resistance.',
    fullDescription: 'Combines the warm natural glow of premium carnauba with the durable hydrophobic shielding of ceramic polymer resins.',
    estimatedDuration: '1.5 – 2 hours',
    pricing: {
      small: 1800,
      m_suv: 2400,
      suv_xl: 2900,
      isVerified: false,
      statusNote: 'Price ambiguous on signboard. Estimated reference rate; please confirm on WhatsApp.',
    },
    features: [
      'Full exterior hand wash & surface prep',
      'Orbital hand applicator ceramic-wax spread',
      'Microfiber buff to deep wet-look shine',
      'Lasts up to 3 – 4 months of weather protection',
    ],
    recommendedFor: 'Drivers seeking deep optical gloss with minimal turnaround time.',
    image: '/images/maruti-dzire.jpg',
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating (9H / 10H / 12H)',
    slug: 'ceramic-coating',
    category: 'ceramic',
    vehicleType: 'car',
    popular: true,
    badge: 'Ultimate Armor',
    shortDescription: 'Permanent nano-ceramic crystalline shield protecting paint against oxidation, acid rain, bird lime, and chemical stains.',
    fullDescription: 'Our flagship paint preservation service. Includes full paint correction to eliminate defects, followed by precision hand application of genuine ceramic coating layers, heat cured for crystalline hardness and hydrophobic performance.',
    estimatedDuration: '1 – 2 Days (includes curing)',
    pricing: {
      small: 12999,
      m_suv: 14999,
      suv_xl: 16999,
      isVerified: true,
      statusNote: 'Signboard advertises 9H/10H/12H grades in this price tier. Specific hardness grade & layer packages confirmed upon physical paint inspection.',
    },
    features: [
      'Extensive multi-stage paint correction & swirl removal',
      'IPA panel wipe oil strip for optimal bonding',
      'Multi-layer nano-ceramic coating application',
      'Wheel face & windshield hydrophobic treatment',
      'Extreme scratch resistance & UV oxidation shield',
      'Showroom mirror reflection with self-cleaning effect',
    ],
    recommendedFor: 'Everyday passenger vehicles, family SUVs, and commuters seeking long-term paint defense against harsh weather and road fallout.',
    image: '/images/hyundai-creta.jpg',
  },

  // BIKE SERVICES
  {
    id: 'bike-foam-wash',
    name: 'Bike Foam Wash',
    slug: 'bike-foam-wash',
    category: 'bike-wash',
    vehicleType: 'bike',
    popular: true,
    badge: 'Biker Favorite',
    shortDescription: 'High-pressure foam bath, chain degrease, engine fin detailing, and streak-free blow dry.',
    fullDescription: 'Bespoke care for two-wheelers. Safe pressure wash tailored to delicate sensors, chain degreasing, silencer polish, and anti-static plastic trim dressing.',
    estimatedDuration: '45 mins minimum',
    pricing: {
      bike: 200,
      isVerified: false,
      statusNote: 'Signboard notes minimum 45 mins washing time; rate to be re-confirmed on WhatsApp.',
    },
    features: [
      'Gentle pressure wash safe for electronics & bearings',
      'Thick snow foam coating & soft brush spoke cleaning',
      'Drive chain degreasing & chain lube application',
      'Blow drying with compressed air to prevent trapped rust',
      'Tyre polish & matte/gloss body wax wipe',
    ],
    recommendedFor: 'Honda Activa, TVS Jupiter, Hero Splendor, Bajaj Pulsar, TVS Apache, Honda Shine & Royal Enfield.',
    image: '/images/honda-activa.jpg',
  },
  {
    id: 'bike-diesel-wash',
    name: 'Bike Diesel Wash',
    slug: 'bike-diesel-wash',
    category: 'bike-wash',
    vehicleType: 'bike',
    shortDescription: 'Aggressive chain, sprocket, crankcase, and undercarriage degreasing wash.',
    fullDescription: 'Designed for dirty off-road trails and greasy swingarms. Breaks down caked chain lube, tarmac tar, and crankcase grease without harming rubber O-rings.',
    estimatedDuration: '45 – 60 mins',
    pricing: {
      bike: 350,
      isVerified: false,
      statusNote: 'Signboard lists diesel washes; rate subject to vehicle engine displacement and confirmation.',
    },
    features: [
      'Heavy engine & swingarm grease removal',
      'Chain & sprocket deep cleaning',
      'Chassis & silencer decontamination',
      'Followed by full foam bath & chain re-lubrication',
    ],
    recommendedFor: 'Adventure tourers, monsoon riders, and bikes with heavy chain muck.',
    image: '/images/commuter-bike.jpg',
  },
  {
    id: 'bike-waxing-detailing',
    name: 'Bike Waxing & Detailing',
    slug: 'bike-waxing-detailing',
    category: 'bike-wash',
    vehicleType: 'bike',
    badge: 'Two-Wheeler Detail',
    shortDescription: 'Precision tank polishing, fairing buffing, chrome shine, and hydrophobic sealant.',
    fullDescription: 'Enhance your motorcycle tank and fairings with optical depth. Removes jacket zipper swirl marks and leaves a hydrophobic glass coat.',
    estimatedDuration: '60 – 90 mins',
    pricing: {
      bike: 650,
      isVerified: false,
      statusNote: 'Handwritten / unconfirmed on signboard; contact for custom quote based on bike model.',
    },
    features: [
      'Tank scratch reduction & dual-action light buff',
      'High-grade carnauba/synthetic wax hand buff',
      'Exhaust pipe chrome polishing',
      'All plastic fairing UV protectant',
    ],
    recommendedFor: 'Pulsar, Apache, Royal Enfield Classic/Hunter, Honda Shine, and everyday motorcycles.',
    image: '/images/honda-activa.jpg',
  },
];
