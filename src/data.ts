import { ProductGroup, IndustryApplication, GalleryItem, CapabilityItem, InfrastructureItem } from "./types";
import { IMAGES } from "./imageAssets";

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "chemical-procurement",
    title: "Industrial Chemical Procurement",
    subtitle: "Direct Global Manufacturer Sourcing",
    description: "Sourcing qualified industrial chemicals, processing additives, and raw materials directly from audited global manufacturers according to rigorous client specifications.",
    features: [
      "Direct relationships with primary chemical synthesizers",
      "Strict batch-level Certificate of Analysis (COA) verification",
      "Transparent lot tracing and manufacturer compliance documentation",
      "Flexible packaging options: Bulk tankers, IBC totes (1000L), 200L drums, and bags"
    ],
    icon: "Boxes",
    image: IMAGES.bulkStock
  },
  {
    id: "spec-matching",
    title: "Product & Specification Matching",
    subtitle: "Technical Equivalents & Alternatives",
    description: "Assisting engineering and procurement teams in identifying certified chemical equivalents, alternative formulations, and grade upgrades to resolve supply constraints without compromising plant integrity.",
    features: [
      "Equivalents mapping based on CAS number and active purity",
      "TDS & SDS review and operating parameter alignment",
      "Compatibility testing for process loops and pipeline metallurgy",
      "Formulation optimization to reduce dosage and lifecycle costs"
    ],
    icon: "Microscope",
    image: IMAGES.labTesting
  },
  {
    id: "global-sourcing",
    title: "Global Sourcing Network",
    subtitle: "Americas, Europe & Asia Procurement Channels",
    description: "Coordinating multi-regional chemical procurement through established manufacturer channels across North America, Europe, and Asia to secure competitive pricing and reliable supply.",
    features: [
      "Houston, Texas coordination desk for North American synthesizers",
      "European and Asian manufacturer engagement and auditing",
      "Bulk volume aggregation for favorable commercial terms",
      "Mitigation of geopolitical and shipping lane disruptions"
    ],
    icon: "Globe2",
    image: IMAGES.oilSourcing
  },
  {
    id: "logistics-execution",
    title: "Logistics & Supply Chain Coordination",
    subtitle: "End-to-End Freight, Clearance & Delivery",
    description: "Managing the complete supply chain lifecycle from international port departure and customs clearance to bonded warehousing and on-site industrial delivery.",
    features: [
      "Ocean freight forwarding and container tracking",
      "Rapid customs clearance through Port Onne and Apapa / Tin Can",
      "Hazmat-certified handling, packaging, and multimodal road transport",
      "Just-in-time delivery scheduling for continuous operations"
    ],
    icon: "Truck",
    image: IMAGES.logisticsHub
  },
  {
    id: "warehousing-infrastructure",
    title: "Warehousing & Secure Containment",
    subtitle: "Strategic Regional Storage Hubs",
    description: "Operating modern warehousing infrastructure in Port Harcourt with specialized storage for hazardous liquids, moisture-sensitive molecular sieves, and bulk filtration media.",
    features: [
      "Strategically located along the Port Harcourt / Aba industrial corridor",
      "Segregated, ventilated, and spill-contained storage zones",
      "Climate-controlled inventory storage for sensitive desiccants",
      "Safety compliant loading docks and certified material handling"
    ],
    icon: "Warehouse",
    image: IMAGES.bluePallet
  },
  {
    id: "specialty-sourcing",
    title: "Custom & Specialty Sourcing",
    subtitle: "Bespoke & Hard-to-Source Formulations",
    description: "Leveraging international manufacturer partnerships to source specialized chemicals, bespoke blends, and custom-granulated media tailored to unique plant operating parameters.",
    features: [
      "Custom particle size grading for filtration sand and catalysts",
      "Dedicated sourcing campaigns for legacy plant chemicals",
      "Small-batch specialty imports for pilots and trials",
      "Direct access to technical chemists for formulation advisory"
    ],
    icon: "Cpu",
    image: IMAGES.sievedDesiccant
  }
];

export const INFRASTRUCTURE_ASSETS: InfrastructureItem[] = [
  {
    id: "ph-warehouse",
    title: "Port Harcourt Central Warehouse & Distribution Hub",
    category: "warehousing",
    location: "Plot 36 Boskel Road, Port Harcourt Expressway, Rivers State",
    capacity: "5,000+ MT Bulk & Palletized Storage",
    description: "Our primary West African distribution facility equipped with heavy racking, high-load concrete flooring, and dedicated docks for simultaneous container de-stuffing and dispatch.",
    highlights: [
      "Strategically situated with immediate expressway access to Trans-Amadi, Onne, and regional oil & gas facilities",
      "Heavy forklift and mechanical handling fleet for 200L drums, 1000L IBCs, and 25kg/1000kg bulk bags",
      "Comprehensive perimeter security, fire suppression, and environmental containment bunds"
    ],
    image: IMAGES.bluePallet
  },
  {
    id: "desiccant-containment",
    title: "Moisture-Controlled Desiccant & Media Storage",
    category: "handling",
    location: "Port Harcourt Distribution Center",
    capacity: "Dedicated Climate-Protected Bays",
    description: "Engineered storage environments designed to prevent pre-activation and moisture absorption of synthetic zeolites, molecular sieves, activated alumina, and sieved filtration sand.",
    highlights: [
      "Sealed hermetic containment and moisture-barrier over-wrapping",
      "Lot-tracked inventory ensuring first-in, first-out (FIFO) freshness",
      "Certified crush-strength and dust-attrition testing before dispatch"
    ],
    image: IMAGES.sievedDesiccant
  },
  {
    id: "lab-validation",
    title: "Quality Assurance & Batch Screening Center",
    category: "laboratory",
    location: "Technical Services Desk",
    capacity: "Comprehensive Analytical Testing",
    description: "Rigorous quality control protocols ensuring that every incoming lot matches international ASTM standards, manufacturer specifications, and the customer's purchase order COA.",
    highlights: [
      "Assay concentration, specific gravity, and pH verification",
      "Moisture content determination and Karl Fischer titration checks",
      "Cross-referencing batch samples with verified technical data sheets (TDS)"
    ],
    image: IMAGES.labTesting
  },
  {
    id: "port-logistics",
    title: "Port Onne & Apapa Maritime Sourcing Conduits",
    category: "port",
    location: "Port Onne Free Zone & Lagos Maritime Gates",
    capacity: "High-Volume Ocean Container Clearance",
    description: "Established freight and bonded terminal access points facilitating rapid customs clearance, container demurrage minimization, and direct port-to-plant haulage.",
    highlights: [
      "Direct coordination with international shipping lines (Maersk, CMA CGM, MSC)",
      "Streamlined customs inspection and regulatory clearance protocols",
      "Dedicated heavy-duty logistics fleet for direct delivery to plant gates"
    ],
    image: IMAGES.logisticsHub
  }
];

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: "water-treatment",
    name: "Water Treatment Chemicals",
    icon: "Droplets",
    description: "High-grade coagulants, flocculants, biocides, and pH modulators formulated for industrial clarification, cooling towers, boiler systems, and municipal water circuits.",
    items: [
      {
        name: "Inorganic & Organic Coagulants",
        chemicalFormula: "Al2(SO4)3 / Fe2(SO4)3 / Polyaluminium Chloride (PAC)",
        description: "High-charge inorganic metal salts and polyaluminium compounds engineered to neutralize colloidal electrical charges and initiate rapid micro-floc formation.",
        specifications: [
          "Active Content: 10% - 48% basis specific grades",
          "Specific Gravity: 1.20 - 1.35 g/cm³",
          "pH Range suitability: 4.5 - 9.0"
        ],
        typicalApplications: ["Raw water clarification", "Effluent treatment plants (ETP)", "Industrial process water"]
      },
      {
        name: "Polyacrylamide (PAM) Flocculants",
        chemicalFormula: "Anionic, Cationic & Non-Ionic PAM Series",
        description: "Ultra-high molecular weight synthetic polymers in linear and branched structures, designed to bridge micro-floc into robust, fast-settling macroscopic flocs.",
        specifications: [
          "Available in Anionic, Cationic, and Non-Ionic powder/emulsion forms",
          "Bulk Density: Approx. 0.75 g/cm³",
          "Rapid dissolution rate: < 60 minutes"
        ],
        typicalApplications: ["Sludge dewatering", "Centrifuge thickening", "Mining & industrial effluent"]
      },
      {
        name: "pH Control & Neutralization Agents",
        chemicalFormula: "NaOH / Ca(OH)2 / HCl / H2SO4",
        description: "Industrial-grade alkalis and acids tailored for raw water neutralizing manifolds, boiler feed conditioning, and wastewater neutralization.",
        specifications: [
          "Concentrations: Standard industrial solutions or concentrated technical grades",
          "UN-approved packaging for hazardous material transport compliance"
        ],
        typicalApplications: ["Boiler feed water", "Cooling towers", "Effluent neutralization"]
      },
      {
        name: "Disinfection, Oxidation & Biocides",
        chemicalFormula: "NaOCl / Ca(OCl)2 / Isothiazolinone / Glutaraldehyde",
        description: "Highly stable oxidizing and non-oxidizing biocides formulated to prevent microbiological fouling, algae bloom, and slime accumulation in circulating cooling loops.",
        specifications: [
          "Broad-spectrum efficacy against aerobic and anaerobic bacteria",
          "High thermal stability under continuous recirculating conditions"
        ],
        typicalApplications: ["Cooling towers", "Closed recirculating loops", "Paper & process circuits"]
      }
    ]
  },
  {
    id: "filtration-materials",
    name: "Industrial Filtration & Adsorption Media",
    icon: "Filter",
    description: "Crystalline synthetic zeolites, desiccants, activated alumina, granular activated carbon, and graded sand media engineered for deep dehydration and particulate removal.",
    items: [
      {
        name: "Synthetic Molecular Sieves (Type 3A / 4A / 13X)",
        chemicalFormula: "Potassium/Sodium/Calcium Aluminosilicate",
        description: "Uniform crystalline pore structures designed for deep gas dehydration, dynamic moisture extraction to dew points below -100°C, and selective hydrocarbon separation.",
        specifications: [
          "Available in 1.6mm - 2.5mm (1/8\") and 3.0mm - 5.0mm (1/16\") spherical beads",
          "High crush strength (> 85 N per bead) for high bed heights",
          "Ultra-low attrition loss (< 0.1 wt%)"
        ],
        typicalApplications: ["Natural gas dehydration", "LNG pre-cooling trains", "Cryogenic air separation"]
      },
      {
        name: "Activated Alumina & Desiccant Media",
        chemicalFormula: "Al2O3 · xH2O",
        description: "High surface area spherical alumina adsorbents engineered for compressed air drying, catalyst support, and fluoride/arsenic removal in water streams.",
        specifications: [
          "BET Surface Area: ≥ 320 m²/g",
          "Static Adsorption Capacity: ≥ 17.5% at 60% RH",
          "Uniform bead sizing minimizing pressure drop across vessels"
        ],
        typicalApplications: ["Instrument air dryers", "Acid scavenger beds", "Claus tail gas treatment"]
      },
      {
        name: "Granular Activated Carbon (GAC) & Pellets",
        chemicalFormula: "Coal, Coconut Shell & Wood Matrix",
        description: "Porous carbonaceous matrices with optimized micro- and meso-pore distribution for liquid-phase decolorization, VOC removal, and hydrocarbon adsorption.",
        specifications: [
          "Iodine Number: 900 - 1150 mg/g",
          "Hardness Number: ≥ 95%",
          "Low ash content (< 5%)"
        ],
        typicalApplications: ["Amine solvent purification", "Condensate polishing", "Drinking & process water purification"]
      },
      {
        name: "Sieved Filtration Sand & Multi-Grade Media",
        chemicalFormula: "High-Purity Quartz Silica & Anthracite",
        description: "Precision-sieved, washed, and kiln-dried quartz sand, garnet, and anthracite tailored for multi-layer rapid gravity and pressure filter beds.",
        specifications: [
          "Effective Size (d10): 0.45mm - 1.20mm (custom fractions)",
          "Uniformity Coefficient (UC): ≤ 1.35",
          "Acid Solubility: < 1.5% in compliance with AWWA B100"
        ],
        typicalApplications: ["Industrial water filtration", "Tertiary effluent polishers", "Borehole well gravel packs"]
      }
    ]
  },
  {
    id: "oil-gas-chemicals",
    name: "Oil & Gas Process Chemicals",
    icon: "Layers",
    description: "Flow assurance chemicals, dehydration glycols, demulsifiers, corrosion inhibitors, and gas sweetening agents engineered for harsh production environments.",
    items: [
      {
        name: "Liquid Glycols (TEG, MEG, DEG)",
        chemicalFormula: "Triethylene / Monoethylene / Diethylene Glycol",
        description: "High-purity liquid glycols engineered for continuous-contact absorption towers, eliminating water vapor from natural gas streams to prevent pipeline hydrate formation.",
        specifications: [
          "Purity: ≥ 99.5 wt%",
          "Water Content: ≤ 0.15 wt%",
          "High thermal stability resisting thermal degradation up to 204°C in reboilers"
        ],
        typicalApplications: ["Natural gas dehydration towers", "Pipeline hydrate inhibition", "Chiller loops"]
      },
      {
        name: "Demulsifiers & Emulsion Breakers",
        chemicalFormula: "Polyol & Oxyalkylated Phenolic Resin Blends",
        description: "Fast-acting surface-active formulations structured to break tough water-in-oil and oil-in-water emulsions, yielding pipeline-spec crude and clean separated water.",
        specifications: [
          "Effective at low ppm dosages across wide temperature ranges (25°C - 85°C)",
          "Rapid water drop rate and sharp interface resolution"
        ],
        typicalApplications: ["Crude oil separation trains", "Desalter units", "Produced water treatment"]
      },
      {
        name: "Corrosion & Scale Inhibitors",
        chemicalFormula: "Imidazoline / Phosphate Ester / Phosphonate Blends",
        description: "Film-forming and threshold inhibitors formulated to protect carbon steel pipelines, downhole tubulars, and heat exchangers from CO2/H2S corrosion and mineral scale deposition.",
        specifications: [
          "Thermal stability up to 180°C under high salinity and sour gas conditions",
          "Partitioning optimized for water-wet and mixed hydrocarbon systems"
        ],
        typicalApplications: ["Flowlines & gathering networks", "Water injection wells", "Subsea tiebacks"]
      },
      {
        name: "Hydrogen Sulfide (H2S) & Gas Scavengers",
        chemicalFormula: "Triazine Derivatives & Non-Triazine Formulations",
        description: "Direct-injection chemical scavengers that irreversibly convert toxic, corrosive H2S into non-hazardous, water-soluble byproducts in gas and liquid streams.",
        specifications: [
          "Fast reaction kinetics with minimal foaming or solid byproduct fallout",
          "Available in oil-soluble, water-soluble, and dual-phase formulations"
        ],
        typicalApplications: ["Natural gas processing lines", "Crude storage tanks", "Marine vessel loading"]
      }
    ]
  },
  {
    id: "maintenance-chemicals",
    name: "Industrial Maintenance & Specialty Chemicals",
    icon: "ShieldAlert",
    description: "Heavy-duty cleaning formulations, scale dissolvers, heat transfer fluids, and protective chemicals designed to maximize plant uptime and equipment reliability.",
    items: [
      {
        name: "Heavy-Duty Degreasers & Safety Solvents",
        chemicalFormula: "Bio-Surfactant Blends / High-Flash Solvent Systems",
        description: "Industrial-strength degreasing agents engineered to dissolve polymerized crude oil, heavy greases, asphaltic residues, and drilling muds from metallic surfaces.",
        specifications: [
          "High Flash Point (> 65°C) or non-flammable water-based systems",
          "Non-corrosive to yellow metals, gaskets, and pump seals"
        ],
        typicalApplications: ["Rig washing & platform maintenance", "Engine bay cleaning", "Tank & vessel cleaning"]
      },
      {
        name: "Chemical Cleaning & Scale Descalers (CIP)",
        chemicalFormula: "Inhibited Hydrochloric, Sulfamic & Organic Acids",
        description: "Formulated cleaning systems with multi-metal corrosion inhibitors designed to circulate through heat exchangers, boilers, and cooling loops to dissolve hard mineral scale.",
        specifications: [
          "Inhibitor efficiency: > 99% protection on mild steel, stainless, and copper alloys",
          "Rapid dissolution of calcium carbonate, iron oxides, and silica scale"
        ],
        typicalApplications: ["Heat exchanger bundle cleaning", "Boiler descaling", "Pipe spools & cooling jackets"]
      },
      {
        name: "Inhibited Heat Transfer Fluids & Antifreeze",
        chemicalFormula: "Formulated Ethylene & Propylene Glycol Solutions",
        description: "Engineered thermal fluids containing long-life organic corrosion inhibitor packages for secondary refrigeration, HVAC, and industrial process cooling loops.",
        specifications: [
          "Operating temperature range: -45°C to +160°C",
          "Pre-diluted with deionized water or concentrated for on-site blending"
        ],
        typicalApplications: ["Gas chilling systems", "Compressor station cooling", "Industrial refrigeration"]
      }
    ]
  }
];

export const INDUSTRY_APPLICATIONS: IndustryApplication[] = [
  {
    id: "oil-gas-systems",
    name: "Oil & Gas Production and Processing",
    icon: "Flame",
    description: "Chemical supply and flow assurance solutions for upstream extraction, gathering networks, separation trains, and field export pipelines.",
    details: "We ensure continuous flow assurance and asset integrity by supplying high-purity dehydration glycols (TEG/MEG), high-efficiency demulsifiers, scale inhibitors, and film-forming corrosion inhibitors. Our logistics network ensures reliable inventory replenishment across land, swamp, and offshore facilities.",
    keyProducts: ["Triethylene Glycol (TEG 99.5%)", "Scale & Corrosion Inhibitors", "Crude Oil Demulsifiers", "H2S Scavengers"]
  },
  {
    id: "gas-lng-processing",
    name: "Natural Gas Processing and LNG Systems",
    icon: "Wind",
    description: "Cryogenic dehydration media, molecular sieves, and solvents for gas processing, NGL fractionation, and LNG liquefaction trains.",
    details: "Gas processing facilities require ultra-low water dew points (< -100°C) to prevent catastrophic hydrate freezing in cryogenic liquefaction units. We supply high-crush-strength Molecular Sieve beads (3A and 4A), activated alumina, and TEG matching international gas transmission specifications.",
    keyProducts: ["Molecular Sieve 3A / 4A Beads", "High-Purity TEG", "Activated Alumina Adsorbents", "MDEA Solvent Additives"]
  },
  {
    id: "petrochemical-refining",
    name: "Petrochemical and Refining Operations",
    icon: "Cpu",
    description: "Process additives, descaling formulations, thermal fluids, and adsorbent media for downstream distillation, cracking, and utility loops.",
    details: "Refinery and petrochemical operations require continuous thermal efficiency and minimal fouling in critical heat exchangers and reboilers. We supply high-grade descaling agents, antifoams, specialty solvents, and catalyst support media that protect unit availability and reduce turnaround intervals.",
    keyProducts: ["Inhibited Cleaning Descalers", "Process Antifoams", "Granular Activated Carbon", "Heat Transfer Fluids"]
  },
  {
    id: "water-treatment-systems",
    name: "Industrial Water Treatment Systems",
    icon: "Activity",
    description: "Specialty coagulants, flocculants, biocides, and conditioning agents for heavy industrial water circuits, cooling towers, and effluent treatment.",
    details: "From cooling tower scale prevention to heavy industrial wastewater clarification, our chemical sourcing programs deliver certified polyaluminium chloride (PAC), polyacrylamide polymers (PAM), and broad-spectrum biocides that maintain operational compliance and protect heat exchange surfaces.",
    keyProducts: ["Polyaluminium Chloride (PAC)", "Polyacrylamide (PAM Series)", "Biocides & Algaecides", "pH Control Alkalis/Acids"]
  },
  {
    id: "manufacturing-process",
    name: "Manufacturing and Process Industries",
    icon: "Settings",
    description: "Industrial cleaning chemicals, degreasers, cooling fluids, and specialty consumables for food & beverage, metallurgy, and manufacturing plants.",
    details: "Providing manufacturing plants with reliable bulk supplies of safety solvents, Clean-In-Place (CIP) chemicals, boiler water conditioning agents, and specialty media that extend equipment life and ensure product quality consistency.",
    keyProducts: ["Safety Solvent Degreasers", "CIP Cleaning Formulations", "Inhibited Glycol Coolants", "Silica Sand Media"]
  },
  {
    id: "environmental-waste",
    name: "Environmental and Waste Treatment Systems",
    icon: "Leaf",
    description: "Sludge dewatering polymers, odor control oxidizers, and neutralizing chemicals for municipal and industrial environmental management.",
    details: "Supporting environmental engineers and waste treatment plants with high-charge dewatering polymers, neutralizing chemicals, and heavy metal precipitants that reduce sludge volume and ensure environmental compliance.",
    keyProducts: ["Cationic Dewatering Polymers", "Hydrogen Peroxide Oxidizers", "Hydrated Lime", "Granular Carbon Filters"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Triethylene Glycol (TEG) Dehydration Infrastructure",
    category: "oil-gas",
    description: "Industrial TEG absorption tower and gas contactor in midstream gas processing pipeline.",
    url: IMAGES.pic9,
    location: "Niger Delta Gas Processing Terminal"
  },
  {
    id: "gal-2",
    title: "Process Scientist Validation & Lab Verification",
    category: "technical-facilities",
    description: "Analytical screening of chemical batch lots and COA validation before warehouse release.",
    url: IMAGES.labTesting,
    location: "Quality Assurance Laboratory"
  },
  {
    id: "gal-3",
    title: "Process Water Clarification System",
    category: "water-treatment",
    description: "Primary clarifier settling basin using coagulants and flocculants for industrial turbidity reduction.",
    url: IMAGES.waterTreatment,
    location: "Industrial Effluent Treatment Facility"
  },
  {
    id: "gal-4",
    title: "Sieved Desiccant & Filtration Media Inventory",
    category: "industrial-filtration",
    description: "Vacuum-sealed packaging of synthetic zeolite molecular sieves and precision-sieved filtration sand.",
    url: IMAGES.sievedDesiccant,
    location: "Port Harcourt Distribution Center"
  },
  {
    id: "gal-5",
    title: "Maritime Freight & Logistics Infrastructure",
    category: "logistics-procurement",
    description: "Container handling and staging terminal coordinating international chemical shipments with regional depots.",
    url: IMAGES.logisticsHub,
    location: "Port Onne Maritime Terminal"
  },
  {
    id: "gal-6",
    title: "High-Pressure Process Pipeline Header",
    category: "oil-gas",
    description: "Stainless steel pressure manifold directing hydrocarbon gas through vertical separation stages.",
    url: IMAGES.imgWA0006,
    location: "Upstream Gathering Station"
  },
  {
    id: "gal-7",
    title: "Bulk Stock Packaging & Protective Containment",
    category: "logistics-procurement",
    description: "Multi-layered protective packaging and palletized chemical drums staged for industrial dispatch.",
    url: IMAGES.bluePallet1,
    location: "Central Warehouse, Port Harcourt"
  },
  {
    id: "gal-8",
    title: "Cryogenic Gas Liquefaction Train",
    category: "oil-gas",
    description: "Interstage high-pressure cryogenic heat exchangers in natural gas liquefaction circuit.",
    url: IMAGES.imgWA0015,
    location: "LNG Processing Facility"
  },
  {
    id: "gal-9",
    title: "Secure Chemical Warehouse Facility",
    category: "logistics-procurement",
    description: "Dedicated warehouse bays with certified racking for liquid drums and palletized chemical consumables.",
    url: IMAGES.imgWA0007,
    location: "Port Harcourt Logistics Hub"
  },
  {
    id: "gal-10",
    title: "Technical Specification & Sourcing Review",
    category: "technical-facilities",
    description: "Engineering and procurement coordinators reviewing technical data sheets and ASTM specifications.",
    url: IMAGES.imgWA0007_1,
    location: "Technical Services Desk"
  },
  {
    id: "gal-11",
    title: "Automated Chemical Injection Manifold",
    category: "oil-gas",
    description: "Precision chemical dosing pumps delivering corrosion and scale inhibitors to high-pressure flowlines.",
    url: IMAGES.oilSourcing,
    location: "Production Flowline Header"
  },
  {
    id: "gal-12",
    title: "Biological Effluent Aeration & Water Polishing",
    category: "water-treatment",
    description: "Secondary aeration and chemical polishing stage in multi-barrier industrial wastewater treatment plant.",
    url: IMAGES.processWater,
    location: "Wastewater Treatment Center"
  }
];

export const COMPANY_PROFILE = {
  name: "Oil Drop Chemical Ltd",
  tagline: "Building Reliable Industrial Supply Chains",
  heroSubtitle: "OILDROP provides industrial chemical sourcing, procurement, logistics, and distribution solutions to energy, manufacturing, water treatment, and process industries.",
  shortDescription: "An Industrial Supply Partner for Africa. We connect industrial customers with qualified global manufacturers and reliable supply chains. From technical sourcing and specification matching to import coordination, warehousing, and delivery, we help industries access the materials they need to operate.",
  vision: "To build one of Africa's most capable and reliable industrial chemical and materials supply networks, empowering continental industrialization through supply chain excellence.",
  mission: "To provide industries with reliable access to quality chemical products and process materials through global sourcing, technical understanding, and disciplined supply chain execution.",
  strategicPillars: [
    {
      title: "Chemicals & Process Materials",
      description: "Procurement, technical matching, and distribution of high-purity industrial chemicals and process consumables."
    },
    {
      title: "Specialty Materials & Media",
      description: "Molecular sieves, desiccants, activated alumina, filtration sand, and specialized adsorbents for critical applications."
    },
    {
      title: "End-to-End Supply Chain",
      description: "International sourcing, ocean freight, customs clearance, secure warehousing, and just-in-time site delivery."
    },
    {
      title: "Technical Solutions & Matching",
      description: "TDS/SDS alignment, certified equivalents identification, and application-specific formulation advisory."
    },
    {
      title: "Infrastructure & Containment",
      description: "Strategically located warehouses, certified hazmat handling, and climate-controlled storage facilities."
    }
  ],
  geographicStructure: {
    nigeria: {
      location: "Port Harcourt, Rivers State, Nigeria (Headquarters & Central Warehouse)",
      scope: "Primary distribution hub, bonded warehousing, customs clearance coordination, technical sales, and nationwide fleet dispatch."
    },
    houston: {
      location: "Houston, Texas, USA (International Procurement Desk)",
      scope: "Manufacturer liaison, North American synthesizers coordination, export compliance, batch auditing, and international trade desk."
    },
    global: {
      location: "Global Sourcing Channels (Americas, Europe & Asia)",
      scope: "Audited manufacturer partnerships, volume aggregation, quality benchmarking, and specialized chemical synthesizers."
    }
  }
};

export const CONTACT_INFO = {
  nigeriaOffice: {
    title: "Nigeria Operations & Headquarters",
    company: "OILDROP CHEMICAL LTD",
    address: "Plot 36 Boskel Road, Off Km 16, Port Harcourt - Aba Expressway, Port Harcourt, Rivers State, Nigeria.",
    phone: "+234 913 495 9214",
    phone2: "+234 704 110 9414",
    email: "procurement@oildropchemical.com"
  },
  houstonOffice: {
    title: "International Procurement Desk",
    address: "Houston, Texas, USA",
    phone: "+1 (713) 555-8902",
    email: "procurement@oildropchemical.com"
  },
  generalContacts: {
    email: "procurement@oildropchemical.com",
    technicalSupport: "tech@oildropchemical.com",
    workingHours: "Monday – Friday: 8:00 AM – 5:00 PM (WAT / CST)"
  }
};

