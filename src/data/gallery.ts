export interface GalleryItem {
  id: string;
  title: string;
  category: 'car-washing' | 'bike-washing' | 'interior-detailing' | 'polishing-ceramic' | 'ppf-protection' | 'wrapping-films' | 'accessories' | 'tinkering-painting';
  categoryLabel: string;
  vehicle: string;
  service: string;
  image: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  description: string;
  isAuthenticWorkshopAsset: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  subtitle: string;
  vehicle: string;
  service: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  transformationDetails: string;
  isAuthenticWorkshopAsset: boolean;
}

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'car-washing', label: 'Car Washing' },
  { id: 'bike-washing', label: 'Bike Washing' },
  { id: 'interior-detailing', label: 'Interior Detailing' },
  { id: 'polishing-ceramic', label: 'Polishing & Ceramic' },
  { id: 'ppf-protection', label: 'PPF Protection' },
  { id: 'wrapping-films', label: 'Wrapping & Films' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'tinkering-painting', label: 'Tinkering & Painting' },
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'High-Gloss Paint Restoration',
    subtitle: 'Swirl Mark & Oxidation Correction',
    vehicle: 'Tata Nexon Compact SUV',
    service: 'Paint Polish / Scratch Correction',
    beforeImage: '/images/before-after/polish-before.jpg',
    afterImage: '/images/before-after/polish-after.jpg',
    beforeLabel: 'Before: Road Mud & Splatters',
    afterLabel: 'After: High-Gloss Mirror Polish',
    transformationDetails: 'Heavy road mud and grime eliminated through pH-neutral snow foam bath, active decontamination, and high-gloss machine polishing.',
    isAuthenticWorkshopAsset: true,
  },
  {
    id: 'ba-2',
    title: 'Deep Interior Steam & Extraction',
    subtitle: 'Fabric Seat & Floor Stain Rejuvenation',
    vehicle: 'Hyundai Creta Cabin Interior',
    service: 'Deep Interior Steam Cleaning',
    beforeImage: '/images/before-after/interior-before.jpg',
    afterImage: '/images/before-after/interior-after.jpg',
    beforeLabel: 'Before: Stains, Dirt & Grimy Plastics',
    afterLabel: 'After: Sanitized & Showroom Fresh',
    transformationDetails: 'High-temperature antibacterial steam extraction lifted beverage stains and dust, leaving upholstery and trim deeply conditioned.',
    isAuthenticWorkshopAsset: true,
  },
  {
    id: 'ba-3',
    title: 'Ceramic Coating Hydrophobic Shield',
    subtitle: 'Water Sheet & Self-Cleaning Contact Angle',
    vehicle: 'Hyundai Creta Urban SUV',
    service: 'Ceramic Coating 9H / 10H',
    beforeImage: '/images/before-after/ceramic-before.jpg',
    afterImage: '/images/before-after/ceramic-after.jpg',
    beforeLabel: 'Before: Hard Water Spots & Dull Film',
    afterLabel: 'After: 9H Glass Armor & Ultra Hydrophobic',
    transformationDetails: 'Molecular 9H ceramic glass matrix creates an ultra-slick barrier that repels road grime, rain streaks, and mineral water etchings.',
    isAuthenticWorkshopAsset: true,
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Thick Snow Foam Pre-Wash Bathe',
    category: 'car-washing',
    categoryLabel: 'Car Washing',
    vehicle: 'Maruti Suzuki Swift (Hatchback)',
    service: 'Full Car Foam Wash',
    image: '/images/maruti-swift.jpg',
    aspectRatio: 'landscape',
    description: 'High-density pH-balanced clinging foam breaking down daily city dust without touching the clear coat.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-2',
    title: 'Underbody & Alloy Wheel Decontamination',
    category: 'car-washing',
    categoryLabel: 'Car Washing',
    vehicle: 'Tata Punch (Sub-Compact SUV)',
    service: 'Deep Car Foam Wash',
    image: '/images/tata-punch.jpg',
    aspectRatio: 'square',
    description: 'pH-neutral iron fallout remover removing burnt brake dust from intricate wheel spokes.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-3',
    title: 'Commuter Bike Chain & Engine De-Grease',
    category: 'bike-washing',
    categoryLabel: 'Bike Washing',
    vehicle: 'Royal Enfield / 150cc Commuter Bike',
    service: 'Bike Foam Wash',
    image: '/images/maruti-brezza.jpg',
    aspectRatio: 'landscape',
    description: 'Targeted drivetrain cleaning followed by synthetic O-ring chain lubrication and low-pressure sensor rinse.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-4',
    title: 'Cabin Deep Extraction & Seat Shampoo',
    category: 'interior-detailing',
    categoryLabel: 'Interior Detailing',
    vehicle: 'Everyday Family Passenger Car',
    service: 'Deep Interior Cleaning',
    image: '/images/hyundai-grandi10.jpg',
    aspectRatio: 'portrait',
    description: 'Full extraction of child-seat spills, food crumbs, and antibacterial sanitization of air conditioning vents.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-5',
    title: 'Dual Action Swirl Elimination Polish',
    category: 'polishing-ceramic',
    categoryLabel: 'Polishing & Ceramic',
    vehicle: 'Honda City / Maruti Dzire (Sedan)',
    service: 'Rubbing Polish / Teflon Coating',
    image: '/images/maruti-dzire.jpg',
    aspectRatio: 'square',
    description: 'Microscopic leveling of clear coat imperfections and dry cloth wiper marks under inspection lamps.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-6',
    title: 'Ceramic Cured Wet-Look Gloss',
    category: 'polishing-ceramic',
    categoryLabel: 'Polishing & Ceramic',
    vehicle: 'Hyundai Creta / Kia Seltos (Family SUV)',
    service: 'Ceramic Coating 9H / 10H',
    image: '/images/hyundai-creta.jpg',
    aspectRatio: 'landscape',
    description: 'Deep mirror reflection with hydrophobic water repelling barrier after final panel wipe and curing.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-7',
    title: 'Heavy Mud & Tar Diesel Wash',
    category: 'car-washing',
    categoryLabel: 'Car Washing',
    vehicle: 'Tata Nexon (Compact SUV)',
    service: 'Full Car Diesel Wash',
    image: '/images/tata-nexon.jpg',
    aspectRatio: 'square',
    description: 'Emulsifying sticky bitumen, clay, and highway tar deposits from suspension links and wheel wells.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-8',
    title: 'Two-Wheeler Detail & Tank Polish',
    category: 'bike-washing',
    categoryLabel: 'Bike Washing',
    vehicle: 'Hyundai i20 (Everyday Hatchback Detail)',
    service: 'Bike Waxing & Detailing',
    image: '/images/hyundai-i20.jpg',
    aspectRatio: 'portrait',
    description: 'Restoring fuel tank luster, jacket zipper scratch reduction, and applying hydrophobic wax to fairings.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-9',
    title: 'Self-Healing TPU Paint Protection Film',
    category: 'ppf-protection',
    categoryLabel: 'PPF Protection',
    vehicle: 'Hyundai Creta (Family SUV)',
    service: 'Paint Protection Film (PPF)',
    image: '/images/hyundai-creta.jpg',
    aspectRatio: 'landscape',
    description: 'Bumper-to-bumper 180-200 micron TPU film shielding against gravel chips, scratches, and harsh sun fading.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-10',
    title: 'Custom Dual-Tone Vehicle Wrap',
    category: 'wrapping-films',
    categoryLabel: 'Wrapping & Films',
    vehicle: 'Maruti Suzuki Baleno (Hatchback)',
    service: 'Vehicle Wrapping & Styling',
    image: '/images/maruti-baleno.jpg',
    aspectRatio: 'square',
    description: 'Cast vinyl wrap with edge-wrapping precision and chrome-delete satin accents.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-11',
    title: 'High-Lumen Projector Headlight Upgrades',
    category: 'accessories',
    categoryLabel: 'Accessories',
    vehicle: 'Kia Sonet (Compact SUV)',
    service: 'Automotive Accessories & Fitment',
    image: '/images/kia-sonet.jpg',
    aspectRatio: 'portrait',
    description: 'Precision projector retrofit and plug-and-play wiring harnesses for enhanced nighttime illumination.',
    isAuthenticWorkshopAsset: false,
  },
  {
    id: 'g-12',
    title: 'Precision Dent Tinkering & Panel Painting',
    category: 'tinkering-painting',
    categoryLabel: 'Tinkering & Painting',
    vehicle: 'Maruti Suzuki Brezza (Sub-Compact SUV)',
    service: 'Tinkering & Painting',
    image: '/images/maruti-brezza.jpg',
    aspectRatio: 'landscape',
    description: 'Sheet metal straightening, primer leveling, computerised color matching, and heated oven finish.',
    isAuthenticWorkshopAsset: false,
  },
];
