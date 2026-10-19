import React from "react";
import { Search, ShieldCheck, FileCheck, Truck, Anchor, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { IMAGES } from "../imageAssets";

interface SupplyChainSectionProps {
  onQuoteClick?: () => void;
}

export default function SupplyChainSection({ onQuoteClick }: SupplyChainSectionProps) {
  const sourcingStages = [
    {
      step: "01",
      title: "Technical Specification & OEM Matching",
      description: "Our Houston engineering desk cross-references plant process parameters (operating temperatures, pressures, C.A.S registry numbers, and fluid dynamics) with certified Tier-1 manufacturer master lots.",
      icon: Search,
      deliverable: "Technical Data Sheet (TDS) & Equivalent Formulation Spec"
    },
    {
      step: "02",
      title: "Manufacturer Auditing & COA Verification",
      description: "Direct engagement with accredited chemical synthesis facilities across North America, Europe, and Asia. Every production run is audited for purity, active ingredient density, and batch homogeneity.",
      icon: ShieldCheck,
      deliverable: "Manufacturer Certificate of Analysis (COA)"
    },
    {
      step: "03",
      title: "Trans-Oceanic Freight & Cold-Chain Packing",
      description: "Export-grade packaging (certified UN/DOT IBC totes, steel drums with chemical-resistant liners, moisture-barrier super-sacks) routed via priority sea-lanes and chartered air freight.",
      icon: Anchor,
      deliverable: "Bill of Lading & Ocean Manifest Documentation"
    },
    {
      step: "04",
      title: "Port Clearance & Bonded Hub Staging",
      description: "Expedited port logistics via Onne Port and Lagos APMT corridors. Consolidated shipments move under bonded escort directly into our secure Port Harcourt distribution facility.",
      icon: FileCheck,
      deliverable: "Customs Clearance & Quality Seal Inspection"
    },
    {
      step: "05",
      title: "Field Dispatch & Turnaround Delivery",
      description: "Dedicated flatbed and tanker fleets deliver directly to customer yards, processing plants, and upstream production facilities across Nigeria and West Africa with full batch traceability.",
      icon: Truck,
      deliverable: "On-Site Delivery Note & Batch Traceability Sheet"
    }
  ];

  return (
    <section id="supply-chain-structure" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="h-4 w-4" />
            <span>Trans-Atlantic Procurement Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
            Global Sourcing Pipeline & <br />
            <span className="text-amber-500">Logistics Execution</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-sans">
            How we eliminate supply bottlenecks, guarantee chemical purity, and deliver certified industrial consumables from global manufacturing complexes directly to African plant gates.
          </p>
        </div>

        {/* Global Sourcing Corridors Map Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 sm:p-8 mb-14">
          <h3 className="text-xl font-display font-bold text-white uppercase mb-4">
            Primary Sourcing & Delivery Corridors
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">North America Corridor</span>
              <h4 className="text-base font-bold text-white mb-2">Houston, Texas (USA)</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Direct procurement of specialty glycols, process amines, high-performance descaling surfactants, and refinery catalysts from US Gulf Coast manufacturers.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">European Corridor</span>
              <h4 className="text-base font-bold text-white mb-2">Antwerp / Rotterdam Hub</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Sourcing of high-purity water treatment polymers, specialized industrial biocides, and fine laboratory analytical reagents.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Asia-Pacific Corridor</span>
              <h4 className="text-base font-bold text-white mb-2">Singapore / Industrial Asia</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Bulk procurement of premium activated alumina, molecular sieve adsorbents, granular activated carbon, and sieved desiccant beads.
              </p>
            </div>
          </div>
        </div>

        {/* 5-Step Linear Execution Timeline */}
        <div className="space-y-6">
          <h3 className="text-xl font-display font-bold text-white uppercase">
            5-Stage Quality & Supply Chain Protocol
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {sourcingStages.map((stage) => {
              const IconComp = stage.icon;
              return (
                <div 
                  key={stage.step}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-slate-700 transition-all duration-200"
                >
                  <div className="flex items-start gap-4 flex-grow">
                    <div className="w-12 h-12 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400 font-display font-black text-lg shrink-0">
                      {stage.step}
                    </div>

                    <div className="space-y-1.5 max-w-3xl">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-display font-bold text-white uppercase">
                          {stage.title}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded border border-slate-850 shrink-0 w-full md:w-auto text-xs">
                    <span className="text-slate-400 font-semibold block mb-0.5">Verification Output:</span>
                    <span className="text-amber-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      {stage.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-12 text-center bg-slate-900/40 border border-slate-800 rounded-lg p-8">
          <h4 className="text-xl font-display font-bold text-white uppercase mb-2">
            Schedule a Procurement Sourcing Review
          </h4>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Provide your material specifications, target volumes, and required delivery timeline. Our technical desk will evaluate international stock and issue a complete landed-cost proposal.
          </p>
          <button
            onClick={onQuoteClick}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-7 py-3 text-xs font-display font-black tracking-wider uppercase rounded transition-all cursor-pointer shadow-lg"
          >
            REQUEST SOURCING PROPOSAL
          </button>
        </div>

      </div>
    </section>
  );
}
