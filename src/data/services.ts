export type VehicleType = 'car' | 'bike' | 'both';

export type CarCategory = 'small' | 'm_suv' | 'suv_xl';

export type ServiceCategory = 
  | 'all'
  | 'car-wash'
  | 'bike-wash'
  | 'interior'
  | 'polishing-waxing'
  | 'ceramic'
  | 'ppf'
  | 'wrapping-films'
  | 'bodywork'
  | 'accessories';

export interface PriceTier {
  small?: number;
  m_suv?: number;
  suv_xl?: number;
  bike?: number;
  isVerified: boolean;
  statusNote?: string;
  isCustomQuote?: boolean;
}

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategory;
  vehicleType: VehicleType;
  shortDescription: string;
  fullDescription: string;
  estimatedDuration: string;
  pricing: PriceTier;
  features: string[];
  recommendedFor: string;
  popular?: boolean;
  badge?: string;
  image: string;
  notice?: string;
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
  { id: 'ceramic', label: 'Ceramic & Graphene', iconName: 'Gem' },
  { id: 'ppf', label: 'Paint Protection Film (PPF)', iconName: 'ShieldCheck' },
  { id: 'wrapping-films', label: 'Wrapping & Window Films', iconName: 'Layers' },
  { id: 'bodywork', label: 'Tinkering & Painting', iconName: 'Wrench' },
  { id: 'accessories', label: 'Car Accessories', iconName: 'Sliders' },
];

export const SERVICES_DATA: ServiceItem[] = [
  // ==========================================
  // CATEGORY A — CAR WASHING
  // ==========================================
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
      statusNote: 'Signboard reference rate. Please re-verify latest charged rate upon arrival.',
    },
    features: [
      'High-pressure pre-rinse & underbody wash',
      'Dual-bucket hand wash with active snow foam',
      'Wheel arches, rims & tyre degreasing',
      'Glass polishing & streak-free drying',
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
      'Shampoo wash & road film removal',
      'Wheel face & tyre clean',
      'Streak-free microfiber dry',
    ],
    recommendedFor: 'Quick refreshes between deeper detailing appointments.',
    image: '/images/hyundai-i20.jpg',
  },
  {
    id: 'full-car-diesel-wash',
    name: 'Full Car Diesel Wash',
    slug: 'full-car-diesel-wash',
    category: 'car-wash',
    vehicleType: 'car',
    shortDescription: 'Specialized diesel emulsion rinse to dissolve stubborn asphalt tar, undercarriage grease, and monsoon mud.',
    fullDescription: 'Heavy-duty chassis wash using diesel-detergent emulsion. Formulated specifically to melt hardened road bitumen, suspension mud, and engine cradle grease without damaging suspension bushings.',
    estimatedDuration: '60 – 75 mins',
    pricing: {
      small: 800,
      m_suv: 900,
      suv_xl: 1100,
      isVerified: true,
      statusNote: 'Signboard baseline rate for underbody degreasing.',
    },
    features: [
      'High-pressure diesel chassis flush',
      'Wheel-well tar and bitumen removal',
      'Lower rocker-panel degreasing',
      'Neutralizing foam wash & rinse to eliminate diesel residue',
      'Underbody inspection for excessive rust or road salt',
    ],
    recommendedFor: 'Post-monsoon cleanup, highway road-trip recovery, or vehicles exposed to construction mud and industrial grime.',
    image: '/images/maruti-dzire.jpg',
  },
  {
    id: 'deep-car-foam-wash',
    name: 'Deep Car Foam Wash',
    slug: 'deep-car-foam-wash',
    category: 'car-wash',
    vehicleType: 'car',
    badge: 'Intensive Wash',
    shortDescription: 'Double active foam cycles, soft-bristle crevice detailing on badges, grille, and door jambs.',
    fullDescription: 'An elevated exterior wash that goes beyond normal bays: includes double active foam soaks, soft-bristle agitation around emblems and window trims, plus thorough door jamb and boot channel cleaning.',
    estimatedDuration: '60 – 80 mins',
    pricing: {
      small: 1500,
      m_suv: 2000,
      suv_xl: 2500,
      isVerified: true,
      statusNote: 'Signboard reference rate for multi-stage deep exterior wash.',
    },
    features: [
      'Double active snow foam pre-soak',
      'Emblem, grille & weatherstrip detailing with boar-hair brushes',
      'Door jambs, boot drainage channels & fuel door detailing',
      'Iron fallout de-ironizing treatment on alloy wheels',
      'Hydrophobic gloss wipe-down',
    ],
    recommendedFor: 'Cars that have accumulated grime in crevices, door jambs, and window seals.',
    image: '/images/tata-nexon.jpg',
  },
  {
    id: 'ceramic-wash',
    name: 'Ceramic Wash',
    slug: 'ceramic-wash',
    category: 'car-wash',
    vehicleType: 'car',
    shortDescription: 'SiO2-infused active wash that boosts surface water-beading, slickness, and gloss on ceramic coated or polished cars.',
    fullDescription: 'Gentle pH-neutral washing using ceramic silica (SiO2) infused shampoo. Enhances the hydrophobic properties of coated vehicles and leaves an instant protective barrier with high optical clarity.',
    estimatedDuration: '45 – 60 mins',
    pricing: {
      small: 999,
      m_suv: 1499,
      suv_xl: 2000,
      isVerified: true,
      statusNote: 'Signboard reference price for ceramic infused washing.',
    },
    features: [
      'De-ionized water pre-rinse',
      'SiO2 ceramic active foam wash',
      'Water-beading enhancement and paint slickness boost',
      'Gentle blow-dry and plush microfiber drying',
      'Hydrophobic top coat spray enhancement',
    ],
    recommendedFor: 'Maintaining ceramic coatings, Teflon glazes, or giving uncoated paint an instant water-repellent shine.',
    image: '/images/hyundai-creta.jpg',
  },
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning (Exterior & Bay Intensive)',
    slug: 'deep-cleaning',
    category: 'car-wash',
    vehicleType: 'car',
    shortDescription: 'Comprehensive decontamination covering underbody, wheel wells, exhaust tips, and paint prep.',
    fullDescription: 'Intensive top-to-bottom decontamination procedure that prepares vehicles for machine compounding, ceramic coatings, or seasonal restoration.',
    estimatedDuration: '90 – 120 mins',
    pricing: {
      small: 1800,
      m_suv: 2400,
      suv_xl: 3000,
      isVerified: false,
      statusNote: 'Contact for exact scope and customized quote.',
    },
    features: [
      'Complete chassis diesel blast & degreasing',
      'Wheel arch liners deep scrub & black trim dressing',
      'Engine bay dust blow-out & dressing (safe low moisture)',
      'Exhaust tips carbon cleaning & metal polish',
      'Chemical decontamination of bug & tar deposits',
    ],
    recommendedFor: 'Cars needing total exterior reset before monsoon, festivals, or resale.',
    image: '/images/tata-punch.jpg',
  },

  // ==========================================
  // CATEGORY B — BIKE WASHING
  // ==========================================
  {
    id: 'bike-foam-wash',
    name: 'Bike Foam Wash',
    slug: 'bike-foam-wash',
    category: 'bike-wash',
    vehicleType: 'bike',
    popular: true,
    badge: 'Two-Wheeler Special',
    shortDescription: 'Safe low-pressure foam wash, chain degreasing, compressed air drying, and mirror polish for scooters & motorcycles.',
    fullDescription: 'Dedicated two-wheeler spa protocol: delicate low pressures around handlebars and wiring looms, dual-bucket foam wash, chain cleaning, compressed air water extraction from switchgear, and tank polish.',
    estimatedDuration: '30 – 45 mins',
    pricing: {
      bike: 150,
      isVerified: true,
      statusNote: 'Baseline commuter scooter & motorcycle wash rate.',
    },
    features: [
      'Low-pressure rinse calibrated to protect electrical switchgear',
      'High-foaming active bike shampoo soak',
      'Drive chain degreasing & grime wash',
      'Compressed air drying for spark plugs, locks & switches',
      'Silicone polish on painted tank, mirrors & exhaust shield',
    ],
    recommendedFor: 'Honda Activa, TVS Jupiter, Hero Splendor, Bajaj Pulsar, TVS Apache, Royal Enfield & all daily commuter bikes.',
    image: '/images/honda-activa.jpg',
  },
  {
    id: 'bike-diesel-wash',
    name: 'Bike Diesel Wash',
    slug: 'bike-diesel-wash',
    category: 'bike-wash',
    vehicleType: 'bike',
    shortDescription: 'Heavy chain, sprocket, crankcase, and under-engine diesel wash to purge tar and chain lube muck.',
    fullDescription: 'Designed for motorcycles caked in sling wax, chain grease, and highway mud. Carefully clears the swingarm, rear wheel hub, engine fins, and center stand.',
    estimatedDuration: '40 – 50 mins',
    pricing: {
      bike: 250,
      isVerified: true,
      statusNote: 'Diesel emulsion degreasing for motorcycles.',
    },
    features: [
      'Diesel rinse for swingarm, chain cover & engine sump',
      'Sprocket degreasing & mud removal',
      'Neutralizing bike foam bath',
      'Compressed air water blow-out from joints',
      'Fresh chain lube application recommendation',
    ],
    recommendedFor: 'Motorcycles after touring, rainy season riding, or heavily greased drive chains.',
    image: '/images/commuter-bike.jpg',
  },
  {
    id: 'bike-waxing',
    name: 'Bike Waxing & Gloss Polish',
    slug: 'bike-waxing',
    category: 'bike-wash',
    vehicleType: 'bike',
    shortDescription: 'Carnauba wax protection on petrol tanks, fairings, visors, and matte/gloss trim preservation.',
    fullDescription: 'Hand application of synthetic polymer or carnauba wax to protect motorcycle paint against sun fade, fuel spills around the tank filler neck, and daily water spots.',
    estimatedDuration: '30 – 45 mins',
    pricing: {
      bike: 350,
      isVerified: false,
      statusNote: 'Hand waxing & polish baseline quote.',
    },
    features: [
      'Pre-wax surface decontamination',
      'Hand buffed carnauba / synthetic polymer wax',
      'Visor & headlamp lens clarity buffing',
      'Matte paint / satin safe trim conditioner',
    ],
    recommendedFor: 'Cruisers, sport commuters, and scooters wanting high paint gloss and UV protection.',
    image: '/images/honda-activa.jpg',
  },
  {
    id: 'motorcycle-detailing',
    name: 'Complete Motorcycle Detailing',
    slug: 'motorcycle-detailing',
    category: 'bike-wash',
    vehicleType: 'bike',
    badge: 'Full Bike Spa',
    shortDescription: 'Multi-stage wash, engine fin detailing, exhaust header polish, chrome brightwork, and Teflon tank seal.',
    fullDescription: 'Comprehensive detailing covering every visible nut, bolt, spoke, and cooling fin. Cleans oxidation from alloy rims, headers, and applies protective sealant across all components.',
    estimatedDuration: '90 – 120 mins',
    pricing: {
      bike: 800,
      isVerified: false,
      statusNote: 'Quoted on vehicle condition and engine complexity.',
    },
    features: [
      'Full diesel degrease + active snow foam',
      'Engine fin and crankcase crevice detailing',
      'Exhaust pipe de-bluing & metal polish',
      'Alloy spoke decontamination',
      'Teflon / ceramic spray paint protection',
    ],
    recommendedFor: 'Royal Enfield Classic / Hunter, KTM, Yamaha R15, Pulsar NS & premium commuter bikes.',
    image: '/images/commuter-bike.jpg',
  },
  {
    id: 'scooter-cleaning',
    name: 'Complete Scooter Cleaning & Floorboard Scrub',
    slug: 'scooter-cleaning',
    category: 'bike-wash',
    vehicleType: 'bike',
    shortDescription: 'Dedicated cleaning for Honda Activa, TVS Jupiter, Access & all automatic scooters.',
    fullDescription: 'Tailored specifically for commuter scooters: addresses grimy rubber floor mats, under-seat storage bay channels, center-stand grease, and restores weathered textured plastic aprons.',
    estimatedDuration: '35 – 45 mins',
    pricing: {
      bike: 180,
      isVerified: true,
      statusNote: 'Standard scooter foam wash and plastic rejuvenation.',
    },
    features: [
      'Textured floorboard scrubbing & mud removal',
      'Under-seat helmet box rim wipe & drain clean',
      'Safe low-pressure rinse around digital speedometer',
      'UV protective black dressing on faded plastic aprons',
    ],
    recommendedFor: 'All daily family scooters (Activa, Jupiter, Access, Fascino, Dio, Burgman).',
    image: '/images/honda-activa.jpg',
  },

  // ==========================================
  // CATEGORY C — INTERIOR DETAILING
  // ==========================================
  {
    id: 'deep-interior-cleaning',
    name: 'Deep Interior Cleaning & Steam Extraction',
    slug: 'deep-interior-cleaning',
    category: 'interior',
    vehicleType: 'car',
    popular: true,
    badge: 'Customer Favorite',
    shortDescription: 'Hot water steam extraction for seats, roof lining, carpet shampoo, dashboard UV dressing, and AC vent sanitization.',
    fullDescription: 'Comprehensive cabin restoration. Uses pressurized steam and hot-water injection extraction to draw deep perspiration, coffee spills, and dust mites out of upholstery without soaking the foam cushions.',
    estimatedDuration: '2.5 – 3.5 hours',
    pricing: {
      small: 2500,
      m_suv: 3500,
      suv_xl: 4500,
      isVerified: true,
      statusNote: 'Printed signboard price. Covers complete cabin extraction.',
    },
    features: [
      'High-power vacuuming of seats, floor mats, boot & parcel tray',
      'Upholstery foam scrub & hot-water steam extraction',
      'Roof headliner dry-cleaning without sagging risk',
      'Dashboard, door cards & console UV matte dressing',
      'AC vents anti-bacterial steam purge & cabin deodorization',
    ],
    recommendedFor: 'Eliminating stubborn odors, damp monsoon smell, food stains, and pet hair.',
    image: '/images/kia-sonet.jpg',
  },
  {
    id: 'interior-detailing',
    name: 'Interior Detailing & Leather Care',
    slug: 'interior-detailing',
    category: 'interior',
    vehicleType: 'car',
    shortDescription: 'Gentle leather pH cleaning, conditioning, crevice brush work on AC vents, steering wheel, and console buttons.',
    fullDescription: 'Fine interior detailing focusing on tactile surfaces: steering leather, seat stitching, infotainment screen fingerprint removal, door sill scuff buffing, and glovebox decontamination.',
    estimatedDuration: '2.0 – 2.5 hours',
    pricing: {
      small: 2200,
      m_suv: 2800,
      suv_xl: 3400,
      isVerified: false,
      statusNote: 'Contact for tailored leather conditioning quote.',
    },
    features: [
      'Leather cleaner & conditioner to prevent cracking and gloss sheen',
      'Delicate micro-brush agitation in cup holders and window switches',
      'Pedal box deep scrub & heel pad cleaning',
      'Interior glass streak-free optical buffing',
    ],
    recommendedFor: 'Cars with leatherette / leather seats needing deep conditioning and matte finish restoration.',
    image: '/images/maruti-baleno.jpg',
  },
  {
    id: 'exterior-detailing',
    name: 'Exterior Detailing & Decontamination',
    slug: 'exterior-detailing',
    category: 'interior',
    vehicleType: 'car',
    shortDescription: 'Chemical clay bar decontamination, iron particle purge, glass treatment, and multi-stage exterior prep.',
    fullDescription: 'Comprehensive exterior detailing removing embedded bonded contaminants from clear coat: industrial fallout, tree sap, rail dust, and mineral water marks.',
    estimatedDuration: '2.0 – 3.0 hours',
    pricing: {
      small: 2000,
      m_suv: 2600,
      suv_xl: 3200,
      isVerified: false,
      statusNote: 'Baseline decontamination quote prior to polishing.',
    },
    features: [
      'Active snow foam + iron remover reaction cycle',
      'Clay bar glide to remove rough embedded particulate',
      'Exterior chrome & rubber trim restoration',
      'Wheel drum & caliper detailing',
    ],
    recommendedFor: 'Cars that feel rough like sandpaper to the touch after washing.',
    image: '/images/hyundai-creta.jpg',
  },
  {
    id: 'interior-exterior-care',
    name: 'Interior & Exterior Care Combo',
    slug: 'interior-exterior-care',
    category: 'interior',
    vehicleType: 'car',
    badge: 'Complete Spa Combo',
    shortDescription: 'Combines full car foam wash with deep cabin vacuuming, dash polish, glass cleaning, and tyre gloss.',
    fullDescription: 'The ultimate monthly maintenance package giving equal attention to clean exterior paint and a hygienic cabin environment in one convenient bay visit.',
    estimatedDuration: '2.0 hours',
    pricing: {
      small: 1800,
      m_suv: 2300,
      suv_xl: 2800,
      isVerified: false,
      statusNote: 'Special combo pricing. Inquire on WhatsApp for slot booking.',
    },
    features: [
      'Full exterior active foam wash & underbody rinse',
      'Cabin vacuuming, dashboard polish & foot mat wash',
      'Door jambs, boot channels & glass streak-free cleaning',
      'Tyre gloss glaze & exterior trim dressing',
    ],
    recommendedFor: 'Monthly routine pampering for family everyday vehicles.',
    image: '/images/maruti-swift.jpg',
  },

  // ==========================================
  // CATEGORY D — POLISHING & WAXING
  // ==========================================
  {
    id: 'rubbing-and-polishing',
    name: 'Rubbing and Polishing (Machine Compound)',
    slug: 'rubbing-and-polishing',
    category: 'polishing-waxing',
    vehicleType: 'car',
    popular: true,
    badge: 'Paint Correction',
    shortDescription: 'Dual-action rotary machine compounding to eliminate swirl marks, light scratches, oxidation, and restore mirror reflection.',
    fullDescription: 'Precision multi-stage paint correction. Uses dual-action random orbital polishers and diminishing abrasive compounds to level microscopic clear-coat imperfections and swirl marks caused by dusty cloth wiping.',
    estimatedDuration: '4.0 – 6.0 hours',
    pricing: {
      small: 3500,
      m_suv: 4500,
      suv_xl: 5500,
      isVerified: true,
      statusNote: 'Printed signboard price. Multi-stage clear-coat correction.',
    },
    features: [
      'Paint thickness inspection & sensitive edge taping',
      'Heavy cutting compound stage for swirl marks & light scratches',
      'Refining polish stage for optical depth and mirror gloss',
      'IPA (Isopropyl alcohol) panel wipe to reveal true finish without fillers',
      'Protective sealant / glaze application',
    ],
    recommendedFor: 'Cars with spider-web swirl marks visible under sunlight, dull faded paint, or light branch scratches.',
    image: '/images/maruti-swift.jpg',
  },
  {
    id: 'teflon-coating',
    name: 'Teflon Coating (Polymer Sealant)',
    slug: 'teflon-coating',
    category: 'polishing-waxing',
    vehicleType: 'car',
    shortDescription: 'High-gloss synthetic fluoropolymer sealant layer that repels road dust, light swirl marks, and rainwater.',
    fullDescription: 'Traditional automotive fluoropolymer sealant. Creates an ultra-slippery synthetic barrier over clear coat that enhances surface reflection and prevents road dust from bonding stubbornly.',
    estimatedDuration: '2.5 – 3.5 hours',
    pricing: {
      small: 2800,
      m_suv: 3500,
      suv_xl: 4200,
      isVerified: true,
      statusNote: 'Signboard baseline reference for synthetic polymer protection.',
    },
    features: [
      'Pre-sealant surface chemical decontamination',
      'Dual-action machine application for uniform bonding',
      'High-hydrophobic water sheeting effect',
      'UV ray paint protection against city oxidation',
    ],
    recommendedFor: 'Cost-effective paint protection for new and pre-owned vehicles before ceramic investment.',
    image: '/images/maruti-dzire.jpg',
  },
  {
    id: 'ceramic-wax',
    name: 'Ceramic Wax Application',
    slug: 'ceramic-wax',
    category: 'polishing-waxing',
    vehicleType: 'car',
    shortDescription: 'SiO2 hybrid liquid wax providing 2 to 3 months of intense water beading, deep gloss, and sun defense.',
    fullDescription: 'Advanced hybrid paste/liquid wax blending carnauba depth with silica ceramic durability. Provides outstanding self-cleaning properties where rain washes away light dust automatically.',
    estimatedDuration: '60 – 90 mins',
    pricing: {
      small: 1200,
      m_suv: 1600,
      suv_xl: 2000,
      isVerified: false,
      statusNote: 'Ceramic hybrid waxing quote.',
    },
    features: [
      'High-contact angle water beading (>100°)',
      'Enhanced depth of gloss on metallic & dark paint shades',
      'Machine buffed to a slick streak-free finish',
    ],
    recommendedFor: 'Quick professional gloss boost before a family wedding, trip, or festival.',
    image: '/images/hyundai-i20.jpg',
  },
  {
    id: 'headlight-buffing',
    name: 'Headlight Buffing & Oxidation Restoration',
    slug: 'headlight-buffing',
    category: 'polishing-waxing',
    vehicleType: 'both',
    badge: 'Safety Upgrade',
    shortDescription: 'Restores cloudy, yellowed, fogged polycarbonate headlamps to crystal clear optical transparency.',
    fullDescription: 'Multi-stage wet sanding and optical compounding to remove oxidized UV coating on headlights and fog lamps, dramatically improving nighttime beam throw and vehicle appearance.',
    estimatedDuration: '45 – 60 mins',
    pricing: {
      small: 600,
      m_suv: 600,
      suv_xl: 700,
      bike: 300,
      isVerified: false,
      statusNote: 'Per-pair headlight restoration quote.',
    },
    features: [
      'Progressive wet sanding (1500 to 3000 grit) to remove yellowing',
      'Rotary optical compounding for mirror clarity',
      'UV blocker sealant coat applied to delay future oxidation',
      'Restores factory beam dispersion and nighttime safety',
    ],
    recommendedFor: 'Vehicles 3+ years old with dull, yellowish, or hazy headlamp covers.',
    image: '/images/kia-sonet.jpg',
  },

  // ==========================================
  // CATEGORY E — CERAMIC & GRAPHENE PROTECTION
  // ==========================================
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating (9H / 10H Options)',
    slug: 'ceramic-coating',
    category: 'ceramic',
    vehicleType: 'car',
    popular: true,
    badge: 'Signature Protection',
    shortDescription: 'Semi-permanent silica quartz (SiO2) glass shield delivering extreme gloss, chemical resistance, and self-cleaning hydrophobic action.',
    fullDescription: 'Our premier paint armor. Molecularly bonds with the clear coat to form a hard, glass-like sacrificial barrier. Repels road salts, acid rain, bird droppings, and UV-induced oxidation with rich liquid reflection.',
    estimatedDuration: '1.5 – 2 days (includes infrared curing)',
    pricing: {
      small: 12999,
      m_suv: 14999,
      suv_xl: 16999,
      isVerified: true,
      statusNote: 'Signboard package reference rate. Includes multi-stage compounding prep.',
    },
    features: [
      'Multi-stage machine paint correction to eliminate swirls prior to coating',
      'Dual layer 9H / 10H hard quartz silica crystal application',
      'Wheel face & exterior trim ceramic coating included',
      'Extreme water beading and self-cleaning hydrophobic surface',
      'Chemical resistance from pH 2 to pH 12 (acid rain, bird lime, tree sap)',
    ],
    recommendedFor: 'New car deliveries, recently repainted cars, or owners seeking long-term gloss and ease of washing.',
    image: '/images/hyundai-creta.jpg',
  },
  {
    id: 'graphene-coating',
    name: 'Graphene Coating (Advanced Matrix)',
    slug: 'graphene-coating',
    category: 'ceramic',
    vehicleType: 'car',
    badge: 'Next-Gen Shield',
    shortDescription: 'Graphene oxide infused nano-shield offering superior heat dissipation, anti-water spotting, and reduced dust attraction.',
    fullDescription: 'Next-generation carbon lattice technology. Features high electrical conductivity and low thermal retention, dramatically reducing water spot etching on dark colored cars parked under intense Indian sun.',
    estimatedDuration: '2 days (includes prep and curing)',
    pricing: {
      isCustomQuote: true,
      isVerified: false,
      statusNote: 'Custom inspection and package quotation via WhatsApp.',
    },
    features: [
      'Reduced surface temperature reduces baked-on mineral water spots',
      'Extreme slickness reduces static dust accumulation',
      'Deep, rich candy-like gloss on black, dark blue, and red paint',
      'Superior chemical resistance against harsh municipal water washes',
    ],
    recommendedFor: 'Dark-colored cars, black SUVs, and vehicles frequently parked in open outdoor conditions.',
    image: '/images/tata-nexon.jpg',
  },
  {
    id: 'ceramic-protection-package',
    name: 'Comprehensive Ceramic Protection Package',
    slug: 'ceramic-protection-package',
    category: 'ceramic',
    vehicleType: 'car',
    shortDescription: 'Full 360° coverage: Paint, windshield & glass rain repellent, alloy wheel rims, and exterior textured plastics.',
    fullDescription: 'Complete bumper-to-bumper coating package protecting paint, exterior glass, wheel faces, and unpainted plastic cladding against UV sun bleaching and road brake dust.',
    estimatedDuration: '2 – 3 days',
    pricing: {
      isCustomQuote: true,
      isVerified: false,
      statusNote: 'Custom quote based on vehicle size and package tier.',
    },
    features: [
      'Full body multi-stage paint compounding & ceramic armor',
      'Hydrophobic glass rain repellent on all windows & windscreen',
      'High-heat ceramic coating for alloy wheels & brake calipers',
      'Plastic trim ceramic restoration to prevent fading to grey',
    ],
    recommendedFor: 'Complete bumper-to-bumper vehicle preservation.',
    image: '/images/maruti-baleno.jpg',
  },

  // ==========================================
  // CATEGORY F — PAINT PROTECTION FILM (PPF)
  // ==========================================
  {
    id: 'paint-protection-film-ppf',
    name: 'Paint Protection Film (PPF)',
    slug: 'paint-protection-film-ppf',
    category: 'ppf',
    vehicleType: 'car',
    popular: true,
    badge: 'Ultimate Physical Defense',
    shortDescription: 'Optically clear thermoplastic polyurethane (TPU) film that shields clear coat against flying gravel, stone chips, keys, and self-heals swirl marks with heat.',
    fullDescription: 'The gold standard in automotive paint preservation. Unlike liquid coatings, PPF is a thick physical barrier (typically 180 to 200+ microns) with an elastomeric self-healing top layer that causes light scratches to disappear under hot water or sunlight.',
    estimatedDuration: '3 – 5 days (Clean room dust-free bay installation)',
    pricing: {
      isCustomQuote: true,
      isVerified: false,
      statusNote: 'Quoted upon vehicle inspection. Packages available: Front Bumper/High Impact, Full Front, or Complete Body Wrap.',
    },
    features: [
      'High-grade self-healing thermoplastic polyurethane (TPU) film',
      'Defense against flying stone chips, road debris, and abrasive bushes',
      'Protection against parking door dings, bumper scrapes, and acid staining',
      'Hydrophobic gloss or stealth satin finish options',
      'Precision plotter cut templates to avoid blade cuts on vehicle paint',
    ],
    recommendedFor: 'Brand new vehicles, high-speed highway drivers, and owners who want maximum physical protection for factory paint.',
    image: '/images/tata-punch.jpg',
    notice: 'Warranty duration and film tier are confirmed upon pre-installation vehicle inspection.',
  },

  // ==========================================
  // CATEGORY G — WRAPPING & WINDOW FILMS
  // ==========================================
  {
    id: 'vehicle-wrapping',
    name: 'Vehicle Wrapping & Color Change Vinyl',
    slug: 'vehicle-wrapping',
    category: 'wrapping-films',
    vehicleType: 'both',
    badge: 'Custom Styling',
    shortDescription: 'Full vehicle color change wraps, dual-tone roof blackening, chrome delete, and personalized aesthetic transformations.',
    fullDescription: 'Transform your vehicle without repainting. Premium cast vinyl wraps protect original factory paint underneath while providing unique matte, satin, gloss, or metallic finishes.',
    estimatedDuration: '2 – 4 days',
    pricing: {
      isCustomQuote: true,
      isVerified: false,
      statusNote: 'Quoted based on wrap scope (Roof only, Chrome delete, or Full body).',
    },
    features: [
      'Dual-tone gloss black roof & pillar wrap (Swift, Brezza, Creta style)',
      'Chrome delete packages on grilles, window surrounds & emblems',
      'Matte, satin, metallic, and gloss color change vinyls',
      'Completely reversible without residue when professionally removed',
    ],
    recommendedFor: 'Drivers seeking a personalized two-tone look, roof styling, or complete color transformation.',
    image: '/images/maruti-brezza.jpg',
  },
  {
    id: 'window-films-sun-tints',
    name: 'Window Films & Sun Protection Tints',
    slug: 'window-films-sun-tints',
    category: 'wrapping-films',
    vehicleType: 'car',
    badge: 'Heat Rejection',
    shortDescription: 'High heat-rejection ceramic window films that block infrared heat and 99% UV rays to keep the cabin cooler.',
    fullDescription: 'High-performance solar control films designed for intense Indian summers. Reduces cabin heat, protects leather and dashboard plastics from drying, and reduces load on the air conditioning.',
    estimatedDuration: '2.5 – 3.5 hours',
    pricing: {
      isCustomQuote: true,
      isVerified: false,
      statusNote: 'Quote based on film specification and glass coverage.',
    },
    features: [
      'High infrared (IR) heat rejection reduces AC cooling effort',
      '99% harmful ultraviolet (UV) ray rejection protecting skin & cabin trim',
      'Glare reduction during bright sunny driving conditions',
      'High optical clarity with zero signal interference for GPS and FASTag',
    ],
    recommendedFor: 'Reducing cabin greenhouse heat and protecting car interiors from sun damage.',
    image: '/images/hyundai-grandi10.jpg',
    notice: 'Notice: Window film specifications, visible light transmission (VLT), and legality must comply with applicable Indian Motor Vehicles rules and state regulations.',
  },

  // ==========================================
  // CATEGORY H — BODYWORK (TINKERING & PAINTING)
  // ==========================================
  {
    id: 'tinkering-dent-repair',
    name: 'Tinkering & Paintless Dent Repair',
    slug: 'tinkering-dent-repair',
    category: 'bodywork',
    vehicleType: 'both',
    shortDescription: 'Expert sheet metal tinkering, panel realignment, and dent pulling to restore body contours.',
    fullDescription: 'Restorative metalwork for daily fender benders, door dings, bumper misalignments, and fender creases before paint touchups or complete resprays.',
    estimatedDuration: '1 – 3 days (depending on panel damage)',
    pricing: {
      isCustomQuote: true,
      isVerified: false,
      statusNote: 'Estimated upon physical bay inspection of damaged panel.',
    },
    features: [
      'Dent pulling and contour reshaping on steel & aluminum panels',
      'Bumper crack welding and clip re-alignment',
      'Door gap and hood panel alignment',
      'Surface rust treatment on damaged edges',
    ],
    recommendedFor: 'Vehicles with minor accident dents, bumper dislodgement, or city traffic scuffs.',
    image: '/images/tata-nexon.jpg',
  },
  {
    id: 'automotive-painting',
    name: 'Automotive Painting & Scratch Touchups',
    slug: 'automotive-painting',
    category: 'bodywork',
    vehicleType: 'both',
    shortDescription: 'Color-matched booth painting, panel touchups, scratch blending, and 2K clear coat gloss finish.',
    fullDescription: 'Professional computerized color matching to your vehicle OEM paint code. Ensures seamless blending between repainted panels and factory paint with durable 2K clear coat.',
    estimatedDuration: '2 – 4 days',
    pricing: {
      isCustomQuote: true,
      isVerified: false,
      statusNote: 'Per-panel or bumper painting quote based on color code.',
    },
    features: [
      'Computerized OEM color formulation for Maruti, Hyundai, Tata, Kia, etc.',
      'Anti-corrosion epoxy primer application',
      'High-solids 2K polyurethane clear coat for factory shine and durability',
      'Post-paint machine compounding and orange-peel texture blending',
    ],
    recommendedFor: 'Deep scratched bumpers, faded panels, rusted sills, or post-dent repainting.',
    image: '/images/maruti-swift.jpg',
  },

  // ==========================================
  // CATEGORY I — CAR ACCESSORIES
  // ==========================================
  {
    id: 'automotive-accessories-fitment',
    name: 'Automotive Accessories & Styling Fitments',
    slug: 'automotive-accessories-fitment',
    category: 'accessories',
    vehicleType: 'both',
    badge: 'Fitment Center',
    shortDescription: 'Alloy wheels, tyres, Android touchscreen systems, speakers, LED headlights, seat covers, and styling parts.',
    fullDescription: 'One-stop automotive accessories fitting service. We source and professionally install high-quality upgrades tailored to your car model with safe, coupler-based wiring.',
    estimatedDuration: '1.0 – 4.0 hours (depending on fitment scope)',
    pricing: {
      isCustomQuote: true,
      isVerified: false,
      statusNote: 'Pricing depends on selected brand, specification, and vehicle model.',
    },
    features: [
      'Alloy wheels and radial tyres in multiple PCD patterns',
      'Android touchscreens, components & subwoofers with clean wiring',
      'High-lumen LED headlights & fog projector units',
      'Custom tailored 7D floor mats, seat covers & steering wraps',
      'Side steps, roof rails, door visors & exterior protective garnishes',
    ],
    recommendedFor: 'Upgrading base model cars, enhancing audio entertainment, or styling everyday vehicles.',
    image: '/images/kia-sonet.jpg',
    notice: 'Accessories availability, brand warranty, and prices are quoted on WhatsApp based on vehicle make and year.',
  },
];
