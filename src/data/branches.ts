export interface BranchInfo {
  id: string;
  name: string;
  badge: string;
  role: string;
  features: string[];
  contactNumber: string;
  phoneFormatted: string;
  status: 'active_claim_pending_address' | 'verified';
  addressPlaceholder: string;
  directionsHelp: string;
}

export const BRANCHES_DATA: BranchInfo[] = [
  {
    id: 'branch-1',
    name: 'Branch 01 — Main Detailing & Protection Studio',
    badge: 'Flagship Bay',
    role: 'Full Foam Washes, Ceramic & Graphene Coating, PPF Application & Interior Steam',
    features: [
      'Twin dedicated car & bike foam wash bays',
      'Dust-free ceramic & PPF installation booth',
      'Hot water extraction & deep cabin sanitization',
      'Comfortable customer lounge with bay visibility',
    ],
    contactNumber: '+91 7022338693',
    phoneFormatted: '+91 70223 38693',
    status: 'active_claim_pending_address',
    addressPlaceholder: 'Bengaluru Detailing Hub (Exact GPS & address shared upon booking)',
    directionsHelp: 'Connect directly on WhatsApp to get the live location pin for Branch 01.',
  },
  {
    id: 'branch-2',
    name: 'Branch 02 — Express Wash & Maintenance Bay',
    badge: 'Express Hub',
    role: 'Quick Turnaround Foam Washes, Diesel Underbody Rinse & Motorcycle Care',
    features: [
      'High-pressure underbody diesel flush station',
      'Dedicated two-wheeler wire-safe washing area',
      'Fast 45-minute minimum attention standards',
      'Hydrophobic paint glaze & tyre dressing',
    ],
    contactNumber: '+91 7406322238',
    phoneFormatted: '+91 74063 22238',
    status: 'active_claim_pending_address',
    addressPlaceholder: 'Bengaluru Express Bay (Exact GPS & address shared upon booking)',
    directionsHelp: 'Connect directly on WhatsApp to get the live location pin for Branch 02.',
  },
];

export const BRANCHES_SECTION_CONFIG = {
  eyebrow: 'Workshop Network',
  title: 'FIND YOUR NEAREST BRANCH.',
  subtitle:
    'Operating across 2 branches in Bengaluru. Contact our team to confirm current bay availability and obtain the nearest verified location pin.',
  verificationNotice:
    'Notice: Branch addresses are pending formal physical signboard GPS confirmation. Please connect with our team before visiting to ensure bay readiness.',
};
