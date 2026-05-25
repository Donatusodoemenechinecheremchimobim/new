import { ProductGroup, IndustryApplication, GalleryItem } from "./types";
import { IMAGES } from "./imageAssets";

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: "water-treatment",
    name: "Water Treatment Chemicals",
    icon: "Droplets",
    description: "Formulated process chemicals optimized for clarification, pH adjustments, and total suspended solids (TSS) reduction in high-throughput industrial and municipal water circuits.",
    items: [
      {
        name: "Coagulants",
        chemicalFormula: "Al2(SO4)3 / Fe2(SO4)3 / PAC",
        description: "High-charge inorganic metal salts (aluminum/iron based) and organic polymers engineered to neutralize colloidal electrical charges, initiating structural micro-floc formation.",
        specifications: [
          "Active Content: 10% - 48% basis specific grades",
          "Specific Gravity: 1.20 - 1.35 g/cm³",
          "pH Range suitability: 4.5 - 9.0"
        ]
      },
      {
        name: "Flocculants",
        chemicalFormula: "Polyacrylamide (PAM) series",
        description: "Ultra-high molecular weight synthetic polymers in linear and branched configurations, designed to bridge micro-floc into robust, fast-settling macroscopic solids.",
        specifications: [
          "Anionic, Cationic, and Non-Ionic physical forms",
          "Bulk Density: Approx. 0.75 g/cm³",
          "Dissolution rate: < 60 minutes"
        ]
      },
      {
        name: "pH Control Agents",
        chemicalFormula: "NaOH / Ca(OH)2 / HCl / H2SO4",
        description: "Industrial-grade acids and alkalis tailored for raw water neutralizing manifolds and stabilization phases in secondary process circuits.",
        specifications: [
          "Concentrations: Standard industrial dilutions or concentrated technical grades",
          "Safety: Packaged for hazardous material transit compliance"
        ]
      },
      {
        name: "Disinfection & Oxidation Chemicals",
        chemicalFormula: "NaOCl / Ca(OCl)2 / H2O2",
        description: "Highly stable chemical biocides and oxidizing agents formulated to eliminate biological fouling and degrade organic compounds in circulating cooling towers and effluent streams.",
        specifications: [
          "Available Chlorine equivalent matching",
          "High stability under elevated thermal process conditions"
        ]
      }
    ]
  },
  {
    id: "filtration-materials",
    name: "Industrial Filtration Materials",
    icon: "Filter",
    description: "Solid-phase desiccant matrices, selective adsorbents, and specialized filter beds engineered to extract vapor-phase contaminants and precise particulate streams.",
    items: [
      {
        name: "Desiccants",
        chemicalFormula: "Molecular Sieve 3A/4A/13X, Activated Alumina",
        description: "Highly crystalline aluminosilicates (synthetic zeolites) with uniform pore structures, designed for selective molecular sorting and deep dehydration of gases to ultra-low dew points (< -100°C).",
        specifications: [
          "Available in spherical bead or cylindrical extrudates",
          "High crush strength (> 80 N for 1/8\" beads)",
          "Low attrition rate (< 0.1 wt%)"
        ]
      },
      {
        name: "Adsorbents",
        chemicalFormula: "Activated Carbon, Silica Gel (Type A/B)",
        description: "High-surface-area porous carbonaceous and inorganic matrices optimized for capturing volatile organic compounds (VOCs), trace heavy metals, and targeted process fluids.",
        specifications: [
          "Iodine Number: 900 - 1100 mg/g (Carbon grades)",
          "Surface Area (BET): up to 1000+ m²/g"
        ]
      },
      {
        name: "Filtration Media",
        chemicalFormula: "Silica Sand, Anthracite, Garnet, Clinoptilolite",
        description: "Multi-graded particulate beds designed for multi-layer rapid gravity filters, stripping mechanical turbidity down to sub-micron tolerances.",
        specifications: [
          "Uniformity Coefficient: < 1.4",
          "Acid Solubility: < 2.0% compliance specs"
        ]
      },
      {
        name: "Gas & Moisture Control Materials",
        chemicalFormula: "Calcium Sulfate, Potassium Permanganate Alumina",
        description: "Chemical scavengers and reactive absorbent matrices designed to dry technical air systems and oxidize vaporous toxic sulfur/nitrogen compounds on contact.",
        specifications: [
          "Color-indicating formulations for depletion visualization",
          "Non-corrosive and mechanically stable during service cycles"
        ]
      }
    ]
  },
  {
    id: "oil-gas-chemicals",
    name: "Oil & Gas Process Chemicals",
    icon: "Layers",
    description: "High-performance processing chemicals formulated to suppress pipeline hydrates, eliminate dissolved acid gases, and optimize flow assurance configurations.",
    items: [
      {
        name: "Gas Dehydration Materials",
        chemicalFormula: "TEG / DEG / MEG / Molecular Sieves",
        description: "High-purity Liquid Glycols (Triethylene, Diethylene, Monoethylene) designed to scrub moisture from raw natural gas streams in continuous-contact absorbers.",
        specifications: [
          "Purity: ≥ 99.5 wt%",
          "Water Content: ≤ 0.2 wt%",
          "Optimized high thermal stability to withstand regenerator reboiler temp up to 204°C"
        ]
      },
      {
        name: "Moisture Removal Systems",
        chemicalFormula: "Deliquescent Salts / Molecular Sieves",
        description: "Solid-state absorbing matrices and specialized dry-bed configurations tailored for wellhead dehydration stations operating without regenerator systems.",
        specifications: [
          "High capacity per unit weight in wet gas regions",
          "Minimal downstream carrying risks"
        ]
      },
      {
        name: "Process Treatment Additives",
        chemicalFormula: "Demulsifiers, Corrosion Inhibitors, Scale Inhibitors",
        description: "High-affinity surface-active formulations structured to rapidly destabilize crude-water emulsions and protect downhole/surface metal alloys from chemical decay.",
        specifications: [
          "Excellent partition coefficient performance",
          "Thermal stability tested up to 180°C in high-salinity wells"
        ]
      },
      {
        name: "System Conditioning Chemicals",
        chemicalFormula: "H2S Scavengers, Defoamers, Biocides",
        description: "Reactive nitrogen-bearing polymers and silicone block-polymers designed to rapidly eliminate toxic hydrogen sulfide (H2S) in process streams and suppress mechanical foam.",
        specifications: [
          "Instantaneous hydrogen sulfide reaction dynamics",
          "Low dosing rate requirements (ppm level activation)"
        ]
      }
    ]
  },
  {
    id: "maintenance-chemicals",
    name: "Industrial Maintenance Chemicals",
    icon: "ShieldAlert",
    description: "Concentrated cleaning, scale dissolution, and preventive conditioning systems engineered to sustain thermal efficiency and protect flow loops.",
    items: [
      {
        name: "Industrial Cleaning Agents",
        chemicalFormula: "Surfactant Blends / Degreasers",
        description: "Heavy-duty solvent-free formulations engineered to dissolve polymerized crude oil, paraffin residues, and synthetic greases from metal substrates.",
        specifications: [
          "Flash Point: Non-flammable water-based systems, or High-flash organic solvents (> 65°C)",
          "Biodegradable formulation profiles"
        ]
      },
      {
        name: "System Flush Chemicals",
        chemicalFormula: "Acidic & Alkaline Descalers",
        description: "Engineered acid-base chemistry with multi-metal corrosion inhibitors, formulated for chemical cleaning (CIP loops) to digest hard carbonate, sulfate, and iron-oxide scale.",
        specifications: [
          "Inhibitor protection efficiency: > 98.5% on mild steel and yellow metals",
          "Compatible with automated dosing setups"
        ]
      },
      {
        name: "Process Support Chemicals",
        chemicalFormula: "Heat Transfer Fluids, Antifreeze, Heat Stabilizers",
        description: "Glycol-based thermal fluids engineered with high-efficiency corrosion inhibitors to facilitate heat transfer inside complex manufacturing loops.",
        specifications: [
          "Operating temperature range: -50°C to +175°C",
          "Low viscosity at sub-zero cycles for high circulation efficiency"
        ]
      }
    ]
  }
];

export const INDUSTRY_APPLICATIONS: IndustryApplication[] = [
  {
    id: "oil-gas-systems",
    name: "Oil & Gas Production and Processing",
    icon: "Flame",
    description: "Sourcing and supply of chemical systems for upstream extraction, pipeline transportation, and downstream refinery loops.",
    details: "We ensure continuous flow assurance by supplying premium dehydration glycols, scale inhibitors, and emulsion breakers. In downstream systems, our chemicals preserve vessel integrity and sustain gas scrubbing operations.",
    keyProducts: ["TEG / DEG Technical Glycols", "Scale and Corrosion Inhibitors", "Demulsification Additives"]
  },
  {
    id: "gas-lng-processing",
    name: "Natural Gas Processing and LNG Systems",
    icon: "Wind",
    description: "Process-critical adsorbents, molecular sieves, and solvents for cryogenic dehydration and sulfur/CO2 extraction.",
    details: "Gas processing infrastructures depend on ultra-low moisture parameters to prevent downstream clathrate hydrate formation. Our high-crush strength Molecular Sieves (type 3A and 4A) guarantee reliable deep dehydration (< 0.1 ppm H2O) in natural gas treatment headers.",
    keyProducts: ["Molecular Sieve 3A / 4A Beads", "Triethylene Glycols (TEG)", "Acid Gas Scavengers"]
  },
  {
    id: "petrochemical-refining",
    name: "Petrochemical and Refining Operations",
    icon: "Cpu",
    description: "Catalyst protection, thermal loop media, and system conditioning formulations for volatile refining processes.",
    details: "Refinery columns require continuous thermal containment and minimal foulant buildup. We supply specialized catalysts, desiccants, and in-line cleaning systems that prevent thermal fouling, saving megawatt hours across processing headers.",
    keyProducts: ["Activated Alumina", "Refinery Defoamers", "Heat Transfer Fluids"]
  },
  {
    id: "water-treatment-systems",
    name: "Industrial Water Treatment Systems",
    icon: "Activity",
    description: "High-tonnage chemicals for industrial water treatment circuits, cooling towers, and raw intakes.",
    details: "Our technical chemical sourcing provides reliable access to flocculation polymers, coagulant salts, and biocide formulations, preventing mineral precipitation and biological fouling in closed-loop cooling towers and heavy manufacturing recycle systems.",
    keyProducts: ["Polyacrylamide (PAM)", "Aluminum Sulfate / PAC", "Sodium Hypochlorite Biocides"]
  },
  {
    id: "manufacturing-process",
    name: "Manufacturing and Process Industries",
    icon: "Settings",
    description: "Cleaners, cooling media, and process chemicals to maximize machine availability and product quality.",
    details: "Providing heavy machinery loops, manufacturing systems, and metallurgy plants with custom solvent cleaners, pH modulators, and scale descaling compounds. Reduces manual breakdown labor through active chemical preventative mantenimiento.",
    keyProducts: ["Safety Solvent Degreasers", "Closed-Loop pH Stabilizers", "CIP Scalers"]
  },
  {
    id: "environmental-waste",
    name: "Environmental and Waste Treatment Systems",
    icon: "Leaf",
    description: "Sludge dewatering polymers, odor control oxidizers, and remediation chemicals for regulatory compliance.",
    details: "We supply chemical solutions for industrial wastewater centers, stabilizing pH and augmenting physical separation stages. This supports compliance with direct effluent disposal regulations.",
    keyProducts: ["Highly Charged DewateringPAM", "Hydrogen Peroxide Oxidizers", "Heavy Metal Precipitants"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Liquid Dehydration Columns",
    category: "oil-gas",
    description: "Industrial Triethylene Glycol (TEG) gas contact tower in midstream processing loop.",
    url: IMAGES.gal1
  },
  {
    id: "gal-2",
    title: "Analytical Quality Verification",
    category: "technical-facilities",
    description: "Active laboratory screening of newly sourced chemical batches to guarantee active ingredient compliance.",
    url: IMAGES.gal2
  },
  {
    id: "gal-3",
    title: "Primary Coagulation Clarifiers",
    category: "water-treatment",
    description: "Industrial-scale settler pool utilizing heavy cationic inorganic metal salts for turbidity reduction.",
    url: IMAGES.gal3
  },
  {
    id: "gal-4",
    title: "Sieved Desiccant Inventory",
    category: "industrial-filtration",
    description: "Vacuum-sealed packaging of synthetic zeolite molecular sieve beads ready for process load-in.",
    url: IMAGES.gal4
  },
  {
    id: "gal-5",
    title: "Port Logistics Infrastructure",
    category: "logistics-procurement",
    description: "Staged shipping loading terminal coordinating distribution between international supply chains and local warehouses.",
    url: IMAGES.gal5
  },
  {
    id: "gal-6",
    title: "Process Pipeline Manifold",
    category: "oil-gas",
    description: "Stainless steel pressure lines directing raw gases through vertical moisture separators.",
    url: IMAGES.gal6
  },
  {
    id: "gal-7",
    title: "Multi-layered Filtration Bed",
    category: "industrial-filtration",
    description: "Deep bed multi-media filter designed for removing mechanical solids from industrial process loops.",
    url: IMAGES.gal7
  },
  {
    id: "gal-8",
    title: "Gas Liquefaction Node",
    category: "oil-gas",
    description: "Interstage high-pressure heat exchangers designed for LNG purifications under cryogenic limits.",
    url: IMAGES.gal8
  },
  {
    id: "gal-9",
    title: "Bulk Cargo Depot",
    category: "logistics-procurement",
    description: "Secured customs warehousing handling dry and liquid chemical distributions.",
    url: IMAGES.gal9
  },
  {
    id: "gal-10",
    title: "Technical Supply Review",
    category: "technical-facilities",
    description: "Engineering panel and sourcing coordinators evaluating batch test sheets for local compliance.",
    url: IMAGES.gal10
  },
  {
    id: "gal-11",
    title: "Subsurface Flow Header",
    category: "oil-gas",
    description: "Pressure regulation valve station executing chemical dosage controls.",
    url: IMAGES.oilSourcing
  },
  {
    id: "gal-12",
    title: "Effluent Secondary Treatment",
    category: "water-treatment",
    description: "Large aeration chamber for chemical sludge treatment during final process safety step.",
    url: IMAGES.processWater
  }
];

export const COMPANY_PROFILE = {
  aboutText: "Oil Drop Chemical Ltd is an industrial chemical procurement and distribution company engaged in the sourcing, evaluation, and supply of industrial-grade chemicals and process materials. The company supports industrial clients requiring consistent and reliable supply of chemicals used in production systems, processing operations, and industrial maintenance.",
  functionalGoal: {
    title: "Our Functional Role",
    roles: [
      {
        title: "Sourcing & Sourcing Interface",
        desc: "Operating as an efficient technical interface between heavy industrial system operators and global chemical formulators."
      },
      {
        title: "Supply Chain Coordination & Delivery",
        desc: "Driving high-volume logistics and freight solutions to ensure chemical materials are delivered with structural and chemical specifications intact."
      },
      {
        title: "Product Verification & Matching",
        desc: "Performing deep technical assessment on batch certifications, matching specific materials to raw chemical demands of downstream processors."
      },
      {
        title: "Application Support Support Desk",
        desc: "Assisting users with technical literature, chemical compatibility charts, and dosing guidance for complex plant circuits."
      }
    ]
  },
  geographicStructure: {
    nigeria: {
      location: "Port Harcourt, Rivers State, Nigeria",
      scope: "Primary industrial storage hubs, local custom clearances, heavy warehousing, bulk repackaging, and local client servicing teams."
    },
    international: {
      location: "Houston, Texas, USA (Coordination Desk)",
      scope: "Global manufacturer liaison, international compliance, raw materials procurement, container coordination, and engineering verification Desk."
    }
  }
};

export const CONTACT_INFO = {
  nigeriaOffice: {
    title: "Nigeria Operations (HQ & Storage)",
    company: "Oil Drop Chemical Ltd",
    address: "Port Harcourt, Rivers State, Nigeria",
    phone: "+234 (0) 803 456 7890",
    phone2: "+234 (0) 708 123 4567"
  },
  houstonOffice: {
    title: "International Procurement Liaison Desk",
    address: "Houston, Texas, USA (Coordination Desk)",
    phone: "+1 (713) 555-8902",
    email: "procurement@oildropchemical.com"
  },
  generalContacts: {
    email: "procurement@oildropchemical.com",
    technicalSupport: "tech@oildropchemical.com"
  }
};
