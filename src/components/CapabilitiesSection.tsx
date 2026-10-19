import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Beaker, Truck, FileCheck, Layers, Award, Boxes, Microscope, Globe2, Warehouse, Cpu } from "lucide-react";
import { CAPABILITIES } from "../data";

interface CapabilitiesSectionProps {
  onQuoteClick?: () => void;
  onExploreProducts?: () => void;
}

export default function CapabilitiesSection({ onQuoteClick, onExploreProducts }: CapabilitiesSectionProps) {
  const iconMap: Record<string, any> = {
    Boxes,
    Microscope,
    Globe2,
    Truck,
    Warehouse,
    Cpu,
    Factory,
    Beaker,
    FileCheck,
    Layers,
    Award
  };

  return (
    <section className="bg-slate-950 py-16 lg:py-24 border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="h-4 w-4" />
            <span>Industrial Service Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
            Integrated Chemical Procurement & <br />
            <span className="text-amber-500">Technical Field Services</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-sans">
            We bridge global Tier-1 manufacturing excellence with rapid on-the-ground execution in Africa. Our capabilities encompass end-to-end material sourcing, quality validation, vessel change-out services, and strategic stockpile management.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITIES.map((cap) => {
            const IconComponent = iconMap[cap.icon] || Factory;
            return (
              <div 
                key={cap.id}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 shadow-lg group"
              >
                <div>
                  {/* Icon & Subtitle Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:border-amber-500/40 transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      ODCL SPEC
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-display font-bold text-white uppercase mb-1 group-hover:text-amber-400 transition-colors">
                    {cap.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-500/90 mb-3">
                    {cap.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                    {cap.description}
                  </p>

                  {/* Key Highlights List */}
                  <div className="space-y-2 mb-6 border-t border-slate-800 pt-4">
                    {cap.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope Coverage Footer */}
                <div className="bg-slate-950 p-3 rounded border border-slate-850 text-xs">
                  <span className="text-slate-400 font-medium block mb-0.5">Execution Standard:</span>
                  <span className="text-white font-semibold">Tier-1 OEM Direct & Certified COA</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industrial Assurance Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-display font-bold text-white uppercase">
              Need a Custom Formulation or Emergency Plant Delivery?
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Our technical procurement specialists assess your plant parameters and expedite batch clearances directly from our Port Harcourt stockpile or international OEM network.
            </p>
          </div>
          <button
            onClick={onQuoteClick}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 text-xs font-display font-black tracking-wider uppercase rounded transition-all duration-150 flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            REQUEST TECHNICAL PROPOSAL
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
