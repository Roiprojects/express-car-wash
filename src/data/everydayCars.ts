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
  {
    id: 'car-creta',
    name: 'Hyundai Creta',
    brand: 'Hyundai',
    category: 'Mid-Size SUV',
    treatmentTag: 'Ceramic Paint Shield',
    image: '/images/hyundai-creta.jpg',
    altText: 'Hyundai Creta urban family SUV with ceramic gloss finish',
  },
];

/**
 * ROW TWO: MOTORCYCLES & SCOOTERS (Direction: LEFT TO RIGHT)
 * Dedicated Indian two-wheeler care photography (Splendor, Pulsar, Apache, Shine, Activa, Two-Wheeler Armor).
 */
export const HERO_ROW_2_BIKES: EverydayCarCard[] = [
  {
    id: 'bike-splendor',
    name: 'Hero Splendor Plus',
    brand: 'Hero MotoCorp',
    category: 'Commuter Bike',
    treatmentTag: 'Snow Foam Wash & Rinse',
    image: '/images/bikes/hero-splendor-foam.jpg',
    altText: 'Hero Splendor Plus commuter motorcycle receiving active snow foam wash',
  },
  {
    id: 'bike-pulsar',
    name: 'Bajaj Pulsar 150',
    brand: 'Bajaj Auto',
    category: 'Sports Commuter',
    treatmentTag: 'Wheel & Chain Degrease',
    image: '/images/bikes/bajaj-pulsar-cleaning.jpg',
    altText: 'Bajaj Pulsar 150 bike getting rim, sprocket and chain degreased',
  },
  {
    id: 'bike-apache',
    name: 'TVS Apache RTR',
    brand: 'TVS Motor',
    category: 'Performance Bike',
    treatmentTag: 'Tank & Fairing Wax Polish',
    image: '/images/bikes/tvs-apache-polishing.jpg',
    altText: 'TVS Apache RTR bike receiving high-gloss polymer wax polish',
  },
  {
    id: 'bike-shine',
    name: 'Honda CB Shine',
    brand: 'Honda',
    category: 'Executive Commuter',
    treatmentTag: 'Engine Bay & Chrome Detail',
    image: '/images/bikes/honda-shine-detailing.jpg',
    altText: 'Honda CB Shine motorcycle getting engine block and chrome restored',
  },
  {
    id: 'bike-activa',
    name: 'Honda Activa 6G',
    brand: 'Honda',
    category: 'Everyday Scooter',
    treatmentTag: 'Deep Underbody & Footboard Wash',
    image: '/images/bikes/honda-activa-cleaning.jpg',
    altText: 'Honda Activa scooter receiving complete mud extraction and body wash',
  },
  {
    id: 'bike-ceramic',
    name: 'Two-Wheeler Ceramic Armor',
    brand: 'All Bikes & Scooters',
    category: 'Two-Wheeler Spa',
    treatmentTag: 'Hydrophobic Shield & UV Guard',
    image: '/images/bikes/bike-ceramic-coating.jpg',
    altText: 'Motorcycle receiving 9H ceramic coating protection against rain and UV fade',
  },
];

/**
 * Backward compatibility alias
 */
export const HERO_ROW_2_CARS: EverydayCarCard[] = HERO_ROW_2_BIKES;
