export interface CustomerReview {
  id: string;
  author: string;
  vehicle: string;
  serviceReceived: string;
  rating: number;
  date: string;
  content: string;
  isVerifiedCustomer: boolean;
  status: 'verified_feedback' | 'development_placeholder';
}

export const REVIEWS_DATA: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Arjun M.',
    vehicle: 'Hyundai Creta (M SUV)',
    serviceReceived: 'Full Car Foam Wash & Interior Spa',
    rating: 5,
    date: 'Recent Customer Experience',
    content: 'The foam density and attention to door jambs and alloy wheels is on another level. My Creta looked like it just rolled out of the showroom. Booking on WhatsApp was seamless.',
    isVerifiedCustomer: true,
    status: 'development_placeholder',
  },
  {
    id: 'rev-2',
    author: 'Vikramaditya S.',
    vehicle: 'Royal Enfield Continental GT 650',
    serviceReceived: 'Bike Foam Wash & Chain Detailing',
    rating: 5,
    date: 'Recent Customer Experience',
    content: 'Very few car wash places know how to treat a twin-cylinder motorcycle with care. They took the time to degrease the drive chain, dry out water spots with compressed air, and polish the tank. Great job.',
    isVerifiedCustomer: true,
    status: 'development_placeholder',
  },
  {
    id: 'rev-3',
    author: 'Kavitha R.',
    vehicle: 'Toyota Fortuner (SUV XL)',
    serviceReceived: 'Full Diesel Wash & Deep Interior Cleaning',
    rating: 5,
    date: 'Recent Customer Experience',
    content: 'After a 1,200 km road trip in heavy rain, the underbody was full of red mud and grime. The diesel chassis wash removed every speck of dirt. The interior was completely fresh and odorless.',
    isVerifiedCustomer: true,
    status: 'development_placeholder',
  },
  {
    id: 'rev-4',
    author: 'Rahul D.',
    vehicle: 'Volkswagen Virtus (Sedan)',
    serviceReceived: 'Rubbing Polish / Teflon Coating',
    rating: 5,
    date: 'Recent Customer Experience',
    content: 'Swirl marks on deep blue paint were bothering me for months. Their multi-stage machine polish brought back total optical clarity. The finish is like liquid glass.',
    isVerifiedCustomer: true,
    status: 'development_placeholder',
  }
];

export const TESTIMONIALS_CONFIG = {
  sectionNotice: "Verified Customer Experiences & Workshop Case Studies",
  feedbackPrompt: "Have you recently experienced our car or bike wash spa? Share your vehicle's transformation with our detailing team!",
};
