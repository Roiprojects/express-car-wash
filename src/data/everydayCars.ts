export interface EverydayCarCard {
  id: string;
  name: string;
  brand: string;
  category: string;
  treatmentTag: string;
  image: string;
  altText: string;
}

/**
 * ROW ONE: Swift, Baleno, i20, Dzire, Nexon (Direction: RIGHT TO LEFT)
 * Real Indian passenger vehicle photography generated specifically for Indian car detailing.
 */
export const HERO_ROW_1_CARS: EverydayCarCard[] = [
  {
    id: 'car-swift',
    name: 'Maruti Suzuki Swift',
    brand: 'Maruti Suzuki',
    category: 'Hatchback',
    treatmentTag: 'Active Foam Wash',
    image: '/images/maruti-swift.jpg',
    altText: 'Maruti Suzuki Swift white hatchback in Indian detailing bay covered in snow foam',
  },
  {
    id: 'car-baleno',
    name: 'Maruti Suzuki Baleno',
    brand: 'Maruti Suzuki',
    category: 'Premium Hatchback',
    treatmentTag: 'Snow Foam Bathe',
    image: '/images/maruti-baleno.jpg',
    altText: 'Maruti Suzuki Baleno hatchback covered in dense snow foam',
  },
  {
    id: 'car-i20',
    name: 'Hyundai i20',
    brand: 'Hyundai',
    category: 'Hatchback',
    treatmentTag: 'Swirl-Safe Hand Wash',
    image: '/images/hyundai-i20.jpg',
    altText: 'Hyundai i20 red passenger hatchback receiving hand wash',
  },
  {
    id: 'car-dzire',
    name: 'Maruti Suzuki Dzire',
    brand: 'Maruti Suzuki',
    category: 'Compact Sedan',
    treatmentTag: 'Chamois Dry & Gloss',
    image: '/images/maruti-dzire.jpg',
    altText: 'Maruti Suzuki Dzire white compact sedan with streak-free finish',
  },
  {
    id: 'car-nexon',
    name: 'Tata Nexon',
    brand: 'Tata Motors',
    category: 'Compact SUV',
    treatmentTag: 'Underbody Mud Decon',
    image: '/images/tata-nexon.jpg',
    altText: 'Tata Nexon compact SUV receiving full underbody and paint clean',
  },
];

/**
 * ROW TWO: Creta, Punch, Sonet, Brezza, Grand i10 (Direction: LEFT TO RIGHT)
 */
export const HERO_ROW_2_CARS: EverydayCarCard[] = [
  {
    id: 'car-creta',
    name: 'Hyundai Creta',
    brand: 'Hyundai',
    category: 'Mid-Size SUV',
    treatmentTag: 'Ceramic Paint Shield',
    image: '/images/hyundai-creta.jpg',
    altText: 'Hyundai Creta urban family SUV with ceramic gloss',
  },
  {
    id: 'car-punch',
    name: 'Tata Punch',
    brand: 'Tata Motors',
    category: 'Sub-Compact SUV',
    treatmentTag: 'High-Pressure Wheel Blast',
    image: '/images/tata-punch.jpg',
    altText: 'Tata Punch micro-SUV getting wheel and arch decontamination',
  },
  {
    id: 'car-sonet',
    name: 'Kia Sonet',
    brand: 'Kia',
    category: 'Compact SUV',
    treatmentTag: 'Deep Exterior Decon',
    image: '/images/kia-sonet.jpg',
    altText: 'Kia Sonet compact SUV receiving paint decontamination',
  },
  {
    id: 'car-brezza',
    name: 'Maruti Suzuki Brezza',
    brand: 'Maruti Suzuki',
    category: 'Compact SUV',
    treatmentTag: 'Full Body Foam Spa',
    image: '/images/maruti-brezza.jpg',
    altText: 'Maruti Suzuki Brezza SUV undergoing complete snow foam wash',
  },
  {
    id: 'car-grandi10',
    name: 'Hyundai Grand i10',
    brand: 'Hyundai',
    category: 'City Hatchback',
    treatmentTag: 'Interior & Exterior Detail',
    image: '/images/hyundai-grandi10.jpg',
    altText: 'Hyundai Grand i10 passenger car vacuum and interior cleaning',
  },
];
