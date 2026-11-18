export interface FAQItem {
  id: string;
  category: 'general' | 'car-wash' | 'bike-wash' | 'ceramic' | 'ppf' | 'wrapping-films' | 'bodywork' | 'accessories' | 'branches' | 'pricing' | 'duration';
  question: string;
  answer: string;
}

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & Booking' },
  { id: 'car-wash', label: 'Car Wash & Spa' },
  { id: 'bike-wash', label: 'Bike Washing' },
  { id: 'ceramic', label: 'Ceramic & Graphene' },
  { id: 'ppf', label: 'Paint Protection Film (PPF)' },
  { id: 'wrapping-films', label: 'Wrapping & Sun Films' },
  { id: 'bodywork', label: 'Tinkering & Painting' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'branches', label: '2 Branch Network' },
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
  {
    id: 'faq-11',
    category: 'ppf',
    question: 'What is Paint Protection Film (PPF) and how does self-healing work?',
    answer: 'PPF is an optically clear, heavy-duty thermoplastic polyurethane (TPU) film (180–200 microns thick) installed over high-impact body panels or the entire car. It acts as a physical barrier against highway gravel chips, keys, road debris, and swirl marks. Its elastomeric topcoat self-heals swirl marks automatically under engine warmth or ambient sunlight.',
  },
  {
    id: 'faq-12',
    category: 'ceramic',
    question: 'What is the difference between Ceramic and Graphene Coating?',
    answer: 'While ceramic coating utilizes nano-SiO2 to create an ultra-glossy glass layer, graphene coating introduces an atom-thin honeycomb carbon matrix. Graphene offers superior heat dissipation, exceptional resistance to mineral water spotting, lower surface friction, and extended longevity under severe tropical sunlight.',
  },
  {
    id: 'faq-13',
    category: 'wrapping-films',
    question: 'Are window films and sun tints legal in India?',
    answer: 'Under the Indian Motor Vehicles Act and Supreme Court directives, dark blackout sun films that block required visibility are restricted. Safety glass must maintain at least 70% Visual Light Transmission (VLT) on front and rear windshields, and 50% on side windows. We install certified high-rejection solar films compliant with applicable regulations to block infrared heat and UV without violating legal visibility norms.',
  },
  {
    id: 'faq-14',
    category: 'wrapping-films',
    question: 'How long does a vehicle wrap last, and will it damage original paint?',
    answer: 'Premium cast vinyl vehicle wraps typically last 3 to 5 years when properly cared for. Premium wraps protect the original OEM clear coat from sun fading and minor scuffs. When removed professionally, high-grade wrap vinyl leaves no adhesive residue or clear coat damage.',
  },
  {
    id: 'faq-15',
    category: 'bodywork',
    question: 'What is Tinkering & Painting and how are dents repaired?',
    answer: 'Tinkering involves precision metal realignment, paintless dent repair (where feasible), or panel reshaping for accident or collision damage. Painting involves computerised spectrophotometer color matching, anti-rust epoxy priming, multi-stage base coating, and high-solid clear coat curing inside a pressurized bake booth.',
  },
  {
    id: 'faq-16',
    category: 'accessories',
    question: 'Do aftermarket electrical accessories void my car’s manufacturer warranty?',
    answer: 'We prioritize OEM-standard coupler-to-coupler, plug-and-play wiring harnesses with dedicated fuses for all lighting, audio, and camera installations. By avoiding splicing or cutting original factory wires, your vehicle\'s electrical architecture and warranty eligibility remain protected.',
  },
  {
    id: 'faq-17',
    category: 'branches',
    question: 'Where are the 2 Express Car Wash branches located in Bengaluru?',
    answer: 'We operate 2 specialized branches across Bengaluru: Branch 01 (Main Detailing Studio & Paint Protection Coatings) and Branch 02 (Express Wash & Maintenance Bay). Please connect with us on WhatsApp or call +91 70223 38693 to verify exact landmark directions and current bay availability before driving in.',
  },
];
