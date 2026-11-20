export interface VehicleConditionTerm {
  id: string;
  title: string;
  summary: string;
  details: string[];
  importantNote?: string;
}

export interface VehicleCategoryPolicy {
  category: string;
  badge: string;
  targetVehicles: string;
  applicableTiers: string;
  keyTerms: VehicleConditionTerm[];
}

export const VEHICLE_TERMS_DATA: VehicleCategoryPolicy[] = [
  {
    category: 'cars-suvs',
    badge: 'Automobiles',
    targetVehicles: 'Hatchbacks, Sedans, Compact SUVs, Mid-SUVs, and Full-Size XL Vehicles',
    applicableTiers: 'Small Hatch • Mid-SUV • SUV XL / Luxury',
    keyTerms: [
      {
        id: 'car-sizing',
        title: 'Vehicle Size Classification & Dimension Calibration',
        summary:
          'Service tiers and wash packages are calibrated strictly according to manufacturer vehicle footprint and body dimensions rather than model badge names.',
        details: [
          'Small Hatchbacks (e.g. Maruti Alto, Swift, WagonR, Hyundai i10, Renault Kwid, Tata Tiago) qualify for tier-1 baseline rates.',
          'Compact Sedans & Mid-SUVs (e.g. Maruti Dzire, Brezza, Tata Nexon, Hyundai Creta, Kia Seltos, Honda City) are categorized under tier-2.',
          'Full-Size SUVs, 7-Seaters & XL Luxury (e.g. Toyota Fortuner, Innova Crysta/Hycross, Mahindra XUV700, Tata Safari, MG Gloster) fall under tier-3.',
          'Vehicles fitted with aftermarket accessories (such as roof carriers, oversized off-road tyres, auxiliary bullbars, or lift kits) may be adjusted to the next higher size bracket due to supplementary surface area and wash bay time.',
        ],
        importantNote:
          'If you are uncertain of your vehicle class, our master technician will confirm your tier transparently over WhatsApp prior to bay entry.',
      },
      {
        id: 'car-paint-condition',
        title: 'Pre-Existing Paint, Clear-Coat & Glass Inspection',
        summary:
          'A pre-wash visual walkaround is conducted under high-CRI bay lighting to note existing paint conditions.',
        details: [
          'Swirl marks, clear-coat peeling, hairline spider-web scratches, deep key scratches to bare metal, and stone-chip craters are logged during check-in.',
          'Express Car Wash uses pH-neutral active snow foam and two-bucket grit guard techniques to protect factory finish, but is not liable for pre-existing defects, chips, or rust spots revealed once heavy road muck and tar are decontaminated.',
          'Repainted or non-OEM painted panels must have cured for at least 30 to 45 days before receiving pressure jet washes or machine compounding.',
          'Cracked windshields or chipped side mirrors must be reported in advance so high-pressure water jets do not exacerbate stress fractures.',
        ],
      },
      {
        id: 'car-engine-electrical',
        title: 'Engine Bay & Underbody Pressure Cleaning Protocol',
        summary:
          'Under-hood cleaning is executed with deliberate precautions around electronic control units and sensors.',
        details: [
          'High-pressure water is never sprayed directly at open air intakes, unsealed ECUs, alternators, battery terminals, or exposed fuse blocks.',
          'Low-pressure misting with non-conductive, dielectric-safe degreasers and compressed air blow-drying is practiced for safety.',
          'For vehicles with aftermarket electrical fitments (auxiliary lights, subwoofers, unsealed relay kits), customers must notify bay technicians to ensure dry masking.',
          'Diesel underbody washes are applied exclusively on metal chassis and suspension linkages, strictly avoiding rubber bushings, exhaust catalytic converters, and brake rotors.',
        ],
      },
      {
        id: 'car-interior-steam',
        title: 'Cabin Steam Extraction & Personal Belongings',
        summary:
          'Deep interior cleaning sanitizes upholstery, roof lining, and footwells while keeping electronic consoles safe.',
        details: [
          'Customers are required to remove all personal belongings, cash, wallets, sunglasses, electronic gadgets, toll cards, and loose valuables before handing over keys.',
          'Express Car Wash is not liable for items left unattended inside gloveboxes, boot storage, or door pockets.',
          'Child safety seats and aftermarket seat covers should be unclipped if deep extraction of original OEM seat fabric/leather is requested.',
          'Excessively soiled cabins (heavy pet hair, milk or chemical spills, vomit, mold/fungus) require supplementary decontamination time and an upfront quoted surcharge beyond standard wash packages.',
          'Sensitive touchscreen infotainment panels and digital cockpit clusters are hand-buffed with dry optical microfibers to prevent moisture ingress.',
        ],
      },
    ],
  },
  {
    category: 'motorcycles-bikes',
    badge: 'Two-Wheelers',
    targetVehicles: 'Commuter Scooters, Daily Geared Bikes, Cruisers, and High-CC Superbikes',
    applicableTiers: 'Scooters & Commuters (up to 125cc) • Performance & Cruisers (150cc–500cc) • Superbikes & Tourers (500cc+)',
    keyTerms: [
      {
        id: 'bike-engine-cooldown',
        title: 'Mandatory Engine & Exhaust Cool-Down Period',
        summary:
          'Vehicles driven directly to our workshop must undergo a cooling interval before cold pressurized water application.',
        details: [
          'Exposed air-cooled fins, liquid radiator cores, and exhaust header pipes reach 150°C to 300°C during Bengaluru traffic commutes.',
          'Spraying cold high-pressure water onto a scalding engine block can cause rapid thermal contraction, warped exhaust headers, or micro-cracks in engine aluminium casings.',
          'A mandatory 10–20 minute resting cool-down period will be observed in our holding bay before washing commences.',
        ],
        importantNote:
          'We will never rush a hot motorcycle directly under cold water pressure jets. Your patience ensures zero thermal fatigue to critical engine components.',
      },
      {
        id: 'bike-chain-care',
        title: 'Drive Chain Cleaning & O/X-Ring Gasket Safety',
        summary:
          'High-pressure water pinpoint nozzles are strictly prohibited on drive chain links to protect internal factory lubricant.',
        details: [
          'Direct pinpoint water pressure past 100 bar can dislodge or tear fragile rubber O-rings or X-rings and force grit inside chain roller pins.',
          'Chains are cleaned using specialized, solvent-free chain degreasers and three-sided grunge brushes before being washed off with gentle low-pressure flow.',
          'Following compressed-air moisture drying, high-adhesion synthetic chain lube is applied to inner and outer roller plates.',
          'Customers are advised to let the chain lubricant settle for 15 minutes before high-speed road riding to prevent fling onto rear wheel rims.',
        ],
      },
      {
        id: 'bike-sensors-electronics',
        title: 'Sensor Masking, TFT Screens & Exposed Electronics',
        summary:
          'Modern two-wheelers feature exposed switchgear, digital consoles, and spark plug recesses requiring tailored handling.',
        details: [
          'Digital TFT screens, USB charging ports, handlebar switches, and key barrels are protected from direct water ingress.',
          'Spark plug wells and exhaust tailpipes are capped or moisture-blown using compressed air prior to starting the engine.',
          'Motorcycles with exposed pod filters or aftermarket free-flow exhausts must be equipped with waterproof rain covers before washing.',
        ],
      },
      {
        id: 'bike-matte-finishes',
        title: 'Matte & Satin Paint Preservation',
        summary:
          'Gloss-enhancing silicones or carnauba waxes are never applied to matte, satin, or frozen-texture factory bodywork.',
        details: [
          'Two-wheelers with factory matte finishes (e.g. Royal Enfield Stealth Black/Gunmetal, Yamaha MT series, TVS Apache Matte) require dedicated matte shampoo.',
          'Abrasive polishing compounds and rotary buffers are strictly forbidden on matte surfaces, as they cause permanent uneven shiny patches.',
          'Specialist matte-safe hydrophobic sealants are available to provide UV protection without altering the intended non-reflective texture.',
        ],
      },
    ],
  },
  {
    category: 'ppf-ceramic-coatings',
    badge: 'Coating & Protection',
    targetVehicles: 'Vehicles Undergoing PPF, Ceramic (9H/10H), Graphene, or Vinyl Color-Change Wraps',
    applicableTiers: 'Bikes & Cars with High-End Surface Shields',
    keyTerms: [
      {
        id: 'ppf-curing',
        title: '7 to 10-Day Post-Application Curing Window',
        summary:
          'Freshly installed Paint Protection Film and ceramic glass coatings require strict initial care to allow complete polymer cross-linking.',
        details: [
          'Do NOT wash the vehicle with detergents, soaps, or high-pressure water for 7 to 10 days post-installation.',
          'Avoid parking under sap-dripping trees, industrial chimneys, or direct construction fallout during the initial 72 hours.',
          'If bird droppings or tree sap fall on freshly coated panels within the curing period, gently soften with room-temperature water and blot with clean microfiber — never rub aggressively.',
        ],
        importantNote:
          'Premature exposure to commercial car-wash detergents during the curing window can compromise coating bond strength and invalidate warranty guarantees.',
      },
      {
        id: 'paint-depth-inspection',
        title: 'Paint Gauge Inspection & Clear-Coat Thresholds',
        summary:
          'Multi-stage paint correction requires an initial ultrasonic paint depth gauge measurement.',
        details: [
          'Factory paint thickness typically ranges from 90 to 140 microns, with clear coats accounting for only 30 to 45 microns.',
          'Panels measuring below 75 microns or demonstrating clear-coat burnout will only receive single-stage glaze or finishing foam pad treatment rather than heavy rotary wool cutting.',
          'Customers are informed of thin factory paint boundaries before machine polishing commences.',
        ],
      },
      {
        id: 'warranty-maintenance',
        title: 'Warranty Validation & Maintenance Wash Standards',
        summary:
          'Coating and film longevity is contingent on proper touch-free maintenance procedures.',
        details: [
          'Automatic drive-thru friction washes or roadside single-bucket wiping will void hydrophobic coating warranties due to induced micro-marring.',
          'Routine periodic maintenance washes using pH-balanced shampoos (pH 6.5–7.5) and dedicated microfiber wash mitts must be practiced.',
          'Annual or semi-annual coating decontamination and silica topper rejuvenation visits are recommended to restore water-beading contact angles.',
        ],
      },
    ],
  },
  {
    category: 'general-workshop-policies',
    badge: 'General Workshop',
    targetVehicles: 'All Vehicles Serviced at Express Car Wash Bays',
    applicableTiers: 'Universal Policy',
    keyTerms: [
      {
        id: 'minimum-wash-time',
        title: 'Advertised 45-Minute Baseline Wash Time',
        summary:
          'We uphold our advertised workshop commitment: no hasty 10-minute wipe-downs.',
        details: [
          'Our facility signboard advertises: "Minimum car & bike washing time — 45 minutes".',
          'Total turnaround time varies between 45 and 90 minutes for detailed washes, and 3 to 6 hours for multi-stage interior steam or machine paint correction.',
          'Customers are encouraged to relax in our customer waiting lounge or coordinate via WhatsApp for exact vehicle ready notifications.',
        ],
      },
      {
        id: 'inspection-delivery',
        title: 'Joint Inspection at Handover & Quality Assurance',
        summary:
          'Customers are invited to inspect their vehicle inside our illuminated bays prior to gate release.',
        details: [
          'All panels, door jambs, glass, and alloy barrels are inspected under bright inspection lights.',
          'Any panel requiring additional touch-up or attention will be rectified on the spot before final invoice settlement.',
          'Once the vehicle departs the facility premises, issues arising from subsequent road dust, rain, or third-party handling cannot be attributed to the workshop.',
        ],
      },
      {
        id: 'custody-liability',
        title: 'Vehicle Movement & Workshop Custody',
        summary:
          'Vehicles are operated within our bays only by licensed and trained detailing technicians.',
        details: [
          'Vehicles are driven at speeds under 5 km/h strictly for positioning on wash ramps, hydraulic scissor lifts, or dust-free curing booths.',
          'Customers with specialized manual transmissions, vintage mechanisms, or non-standard clutch configurations should notify technicians in advance.',
          'The workshop is not liable for pre-existing mechanical, transmission, or battery drainage failures not caused by detailing operations.',
        ],
      },
    ],
  },
];
