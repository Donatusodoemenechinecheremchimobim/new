import React from "react";
import { Warehouse, MapPin, Globe, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { INFRASTRUCTURE_ASSETS } from "../data";

interface InfrastructureSectionProps {
  onQuoteClick?: () => void;
}

export default function InfrastructureSection({ onQuoteClick }: InfrastructureSectionProps) {
  return (
    <section className="bg-slate-950 py-16 lg:py-24 border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Warehouse className="h-4 w-4" />
            <span>Physical Assets & Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
            Strategic Infrastructure <br />
            <span className="text-amber-500">& Distribution Network</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-sans">
            Real physical facilities, bonded staging yards, certified testing stations, and trans-Atlantic sourcing desks underpin our guarantee of seamless chemical supply.
          </p>
        </div>

        {/* Infrastructure Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INFRASTRUCTURE_ASSETS.map((asset) => (
            <div 
              key={asset.id}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-200 shadow-xl"
            >
              {/* Asset Media Frame */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <img 
                  src={asset.image} 
                  alt={asset.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur border border-slate-700 text-amber-400 px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />
                  <span>{asset.location}</span>
                </div>
              </div>

              {/* Asset Content */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-white uppercase mb-2">
                    {asset.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-4">
                    {asset.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 border-t border-slate-800 pt-4 mb-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Operational Features:</span>
                    {asset.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capacity Metric Pill */}
                {asset.capacity && (
                  <div className="bg-slate-950 p-3 rounded border border-slate-850 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-semibold">Handling / Throughput:</span>
                    <span className="text-amber-400 font-mono font-bold">{asset.capacity}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Global Coordination Bar */}
        <div className="mt-12 bg-slate-900/60 border border-slate-800 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-display font-bold text-white uppercase">
                Trans-Atlantic Logistics Pipeline
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Coordinating direct sea-freight and chartered air-cargo between Houston (USA), Antwerp/Rotterdam (EU), Singapore (APAC), and Port Onne / Port Harcourt (Nigeria).
              </p>
            </div>
          </div>
          <button
            onClick={onQuoteClick}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 text-xs font-display font-bold tracking-wider uppercase rounded transition-all shrink-0 cursor-pointer shadow"
          >
            DISCUSS PROJECT LOGISTICS
          </button>
        </div>

      </div>
    </section>
  );
}
