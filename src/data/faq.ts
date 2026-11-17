export interface FAQItem {
  id: string;
  category: 'general' | 'car-wash' | 'bike-wash' | 'ceramic' | 'pricing' | 'duration';
  question: string;
  answer: string;
}

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & Booking' },
  { id: 'car-wash', label: 'Car Wash & Spa' },
  { id: 'bike-wash', label: 'Bike Washing' },
  { id: 'ceramic', label: 'Ceramic & Detailing' },
  { id: 'pricing', label: 'Pricing & Categories' },
  { id: 'duration', label: 'Duration & Timeline' },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'duration',
    question: 'How long does a car or bike wash take?',
    answer: 'As stated on our facility service board, our minimum car and bike washing time is 45 minutes. Please note this is an advertised baseline minimum: total turnaround time can vary from 45 to 90 minutes for comprehensive washes, and 3 to 5 hours for multi-stage interior steam extraction or machine paint polishing. We never rush a vehicle because proper decontamination demands meticulous attention to detail.',
  },
  {
    id: 'faq-2',
    category: 'pricing',
    question: 'Why does pricing vary by vehicle category (Small, M SUV, SUV XL)?',
    answer: 'Different vehicle form factors demand significantly different volumes of specialized pH-neutral chemicals, snow foam, microfibers, and technician labor. For example, an SUV XL requires twice the surface area coverage, taller ladders, and larger underbody degreasing than a compact hatchback.',
  },
  {
    id: 'faq-3',
    category: 'pricing',
    question: 'Why are some prices on the website marked "Price to confirm"?',
    answer: 'Our physical workshop service board contains handwritten amendments—particularly regarding recent adjustments to full foam washes and specialized bike packages. To maintain absolute integrity and ensure you never experience unexpected billing, we transparently flag unconfirmed rates so our team can provide you with the exact, up-to-date quote over WhatsApp prior to your visit.',
  },
  {
    id: 'faq-4',
    category: 'general',
    question: 'Do I need an appointment or can I drive in directly?',
    answer: 'While drive-ins are accepted subject to bay availability, we strongly recommend reserving your preferred slot via our interactive WhatsApp booking tool. This ensures our detailing bays, equipment, and master technicians are prepared for your arrival with zero unnecessary waiting.',
  },
  {
    id: 'faq-5',
    category: 'car-wash',
    question: 'What is the difference between an Outer Wash and a Full Foam Wash?',
    answer: 'An Outer Wash is a rapid exterior high-pressure rinse and hand wipe suited for dusty city drives. Our Full Car Foam Wash is a true restorative spa: it includes high-density active snow foam that encapsulates grit, underbody high-pressure spray, deep wheel and rim de-greasing, glass polishing, and rich tyre dressing.',
  },
  {
    id: 'faq-6',
    category: 'car-wash',
    question: 'What is a Diesel Wash and when should I choose it?',
    answer: 'A Diesel Wash is an intensive chassis and undercarriage degreasing treatment. It utilizes a safe emulsified wash to dissolve heavy highway tar, bitumen, caked grease, and corrosive monsoon grime from suspension components, axles, and wheel wells. It is particularly recommended after extensive highway journeys or off-road excursions.',
  },
  {
    id: 'faq-7',
    category: 'bike-wash',
    question: 'Is your high-pressure wash safe for sensitive superbike electronics and bearings?',
    answer: 'Yes. Our trained technicians use calibrated pressure settings and maintain safe nozzle distances around delicate components, electrical harnesses, digital instrument clusters, radiators, and wheel bearings. We also degrease drive chains with dedicated brushes and re-lubricate them properly.',
  },
  {
    id: 'faq-8',
    category: 'ceramic',
    question: 'What is Ceramic Coating and how does it protect my vehicle?',
    answer: 'Ceramic coating (such as 9H, 10H, or 12H formulations) is a liquid nano-ceramic polymer that chemically bonds with your vehicle\'s factory clear coat. Once cured, it forms a semi-permanent sacrificial glass layer that provides immense UV resistance, extreme hydrophobic water-beading, mirror-like gloss, and protection against chemical etching and bird droppings. Specific hardness grades and warranty options are evaluated during in-person vehicle paint inspection.',
  },
  {
    id: 'faq-9',
    category: 'ceramic',
    question: 'What is the difference between Ceramic Wash and Ceramic Coating?',
    answer: 'A Ceramic Wash is an SiO2-infused foaming wash that leaves a temporary hydrophobic boost lasting several weeks—ideal as a quick gloss enhancer or maintenance wash. A Ceramic Coating is a dedicated professional paint restoration process spanning 1–2 days, involving machine paint correction and multi-layer chemical bonding that lasts years.',
  },
  {
    id: 'faq-10',
    category: 'general',
    question: 'What payment methods do you accept at the detailing center?',
    answer: 'We accept all major UPI payment apps (Google Pay, PhonePe, Paytm), cash, and digital bank transfers. Payment is only settled after you inspect your vehicle and are 100% satisfied with the finish.',
  },
];
