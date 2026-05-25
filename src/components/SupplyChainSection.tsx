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
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-1">
            GLOBAL FLOW ASSURANCE TIMELINE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            SUPPLY CHAIN STRUCTURE
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Oil Drop Chemical Ltd maintains structured procurement coordination for engagement with international chemical manufacturers and suppliers.
          </p>
        </div>

        {/* Linear Step Progression Visualizer - Bold typography, direct information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Straight Talk */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-display font-black text-2xl text-slate-100 uppercase tracking-tight">
              INTERNATIONAL PROCUREMENT COORDINATION
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              To assure technical consistency, we maintain a central procurement liaison desk in Houston, Texas. Houston operates as the direct link to world-leading chemical synthesis centers in the United States, Europe, and Asia.
            </p>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded">
              <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block mb-2">OPERATIONAL METRICS:</span>
              <ul className="space-y-3 text-[11px] font-mono text-slate-300">
                <li className="flex justify-between">
                  <span>VENDOR AUDITS:</span>
                  <span className="text-slate-100 font-bold">100% LOT-MATCHED</span>
                </li>
                <li className="flex justify-between border-t border-slate-850/80 pt-2">
                  <span>TRANSIT TRACKING:</span>
                  <span className="text-slate-100 font-bold">TELEX/OCEAN MANIFEST</span>
                </li>
                <li className="flex justify-between border-t border-slate-850/80 pt-2">
                  <span>DISCHARGE POINT:</span>
                  <span className="text-cyan-400 font-bold">PORT HARCOURT DOCKS</span>
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
              <span className="absolute bottom-2 left-2 bg-slate-950/90 border border-slate-800 px-1.5 py-0.5 rounded-none font-mono text-[9px] text-slate-400 uppercase">
                VOLUMETRIC OCEAN FREIGHT • TAP TO ZOOM
              </span>
            </div>

          </div>

          {/* Right Block - Progressive flow card timeline */}
          <div className="lg:col-span-8 space-y-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.id}
                className="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-750 p-5 rounded-sm transition-all duration-150 flex flex-col sm:flex-row items-start gap-4"
              >
                {/* Node Step bubble */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-lg font-black text-cyan-500 bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-1 rounded">
                    {step.id}
                  </span>
                  
                  {/* Icon Block */}
                  <div className="p-2 bg-slate-950 border border-slate-800 rounded">
                    {step.icon}
                  </div>
                </div>

                {/* Technical Description */}
                <div>
                  <h4 className="font-display font-extrabold text-sm text-slate-100 uppercase tracking-wide">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1.5">
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
