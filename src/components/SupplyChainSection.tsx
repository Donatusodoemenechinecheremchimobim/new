import React from "react";
import { SearchCode, HelpCircle, GitCommit, FileSpreadsheet, ShieldAlert, HeartHandshake, Anchor, HelpCircle as Help } from "lucide-react";
import { IMAGES } from "../imageAssets";

export default function SupplyChainSection() {
  const processSteps = [
    {
      id: "01",
      title: "Technical Product Inquiries",
      desc: "Our Houston liaison maps system properties, checking C.A.S indices, concentration curves, and packing materials with international producers.",
      icon: <SearchCode className="h-5 w-5 text-cyan-400" />,
    },
    {
      id: "02",
      title: "Supplier Communication & Verification",
      desc: "Liaison engages with vetted chemical formulators to verify batch-level production volume, active ingredient purity, and regulatory status.",
      icon: <Help className="h-5 w-5 text-amber-500" />,
    },
    {
      id: "03",
      title: "Sourcing Evaluation & Audits",
      desc: "Engineers audit specific manufacturing lots. Certificates of Analysis (COA) are generated, cross-checking parameters with client system limits.",
      icon: <GitCommit className="h-5 w-5 text-cyan-400" />,
    },
    {
      id: "04",
      title: "Commercial Quotation Processing",
      desc: "Sourcing desks compile ocean/road carrier expenses to draft clear, all-inclusive, straight-to-the-point pricing proposals.",
      icon: <FileSpreadsheet className="h-5 w-5 text-amber-500" />,
    },
    {
      id: "05",
      title: "Supply Chain & Depot Coordination",
      desc: "Customs clearings and truck road haulage are routed securely from Port Harcourt hubs directly into individual upstream processing stations.",
      icon: <Anchor className="h-5 w-5 text-cyan-400" />,
    },
  ];

  return (
    <section id="supply-chain-structure" className="py-16 md:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Supply Chain Header */}
        <div className="border-t-4 border-cyan-500 pt-4 mb-12">
          <span className="font-mono text-sm font-black text-cyan-400 uppercase tracking-widest block mb-1">
            HOW WE SOURCE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            SUPPLY CHAIN STRUCTURE
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-200 mt-2 max-w-3xl leading-relaxed">
            We operate a structured sourcing pipeline directly connecting international synthesizers and chemical formulation plants in Houston with regional industrial sites.
          </p>
        </div>

        {/* Linear Step Progression Visualizer - Bold typography, direct information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Straight Talk */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
              Sourcing Liaison Office
            </h3>
            
            <p className="text-sm font-bold text-slate-200 leading-relaxed font-sans">
              To assure technical consistency and purity, we maintain a central chemical procurement desk in Houston, Texas. Houston acts as our direct gateway to world-leading synthesizers in the Americas, Europe, and Asia.
            </p>

            <div className="bg-slate-900 border-2 border-slate-800 p-5 rounded-none">
              <span className="font-mono text-xs font-black text-cyan-400 uppercase tracking-widest block mb-3">PROCUREMENT STANDARDS:</span>
              <ul className="space-y-2.5 text-xs font-mono font-black text-slate-200">
                <li className="flex justify-between">
                  <span className="text-slate-400">VENDOR AUDITS:</span>
                  <span className="text-white uppercase">100% LOT-MATCHED</span>
                </li>
                <li className="flex justify-between border-t-2 border-slate-800 pt-2.5">
                  <span className="text-slate-400">TRANSIT DETAIL:</span>
                  <span className="text-white uppercase">OCEAN MANIFEST</span>
                </li>
                <li className="flex justify-between border-t-2 border-slate-800 pt-2.5">
                  <span className="text-slate-400">DEPOT LOCATION:</span>
                  <span className="text-cyan-400 uppercase">PORT HARCOURT</span>
                </li>
              </ul>
            </div>

            {/* Picture under description */}
            <div className="relative h-44 rounded-none overflow-hidden border-2 border-slate-800 bg-slate-900 cursor-pointer">
              <img
                src={IMAGES.logisticsHub}
                alt="Logistics vessels container yard"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute bottom-2 left-2 bg-slate-950/95 border border-slate-705 px-2.5 py-1 rounded-none font-mono text-xs font-black text-white shadow uppercase">
                OCEAN FREIGHT LOGISTICS • ZOOM
              </span>
            </div>

          </div>

          {/* Right Block - Progressive flow card timeline */}
          <div className="lg:col-span-8 space-y-4">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="bg-slate-900 border-2 border-slate-800 hover:border-cyan-500 p-5 rounded-none transition-all duration-150 flex flex-col sm:flex-row items-start gap-4"
              >
                {/* Node Step bubble */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-lg font-black text-cyan-400 bg-cyan-950/60 border-2 border-cyan-500/25 px-3 py-1 rounded-none">
                    {step.id}
                  </span>
                  
                  {/* Icon Block */}
                  <div className="p-2 bg-slate-950 border border-slate-800 rounded-none">
                    {step.icon}
                  </div>
                </div>

                {/* Technical Description */}
                <div>
                  <h4 className="font-display font-black text-base text-white uppercase tracking-wide">
                    {step.title}
                  </h4>
                  <p className="text-sm font-bold text-slate-200 leading-relaxed font-sans mt-1.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
