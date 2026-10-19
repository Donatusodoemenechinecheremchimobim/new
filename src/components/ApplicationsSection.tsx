import React, { useState } from "react";
import { INDUSTRY_APPLICATIONS } from "../data";
import { Flame, Wind, Cpu, Activity, Settings, Leaf, CheckCircle2, ArrowRight, Factory } from "lucide-react";
import { IMAGES } from "../imageAssets";

interface ApplicationsSectionProps {
  onSelectApplication: (appName: string) => void;
}

export default function ApplicationsSection({ onSelectApplication }: ApplicationsSectionProps) {
  const [selectedAppId, setSelectedAppId] = useState(INDUSTRY_APPLICATIONS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame":
        return <Flame className="h-5 w-5" />;
      case "Wind":
        return <Wind className="h-5 w-5" />;
      case "Cpu":
        return <Cpu className="h-5 w-5" />;
      case "Activity":
        return <Activity className="h-5 w-5" />;
      case "Settings":
        return <Settings className="h-5 w-5" />;
      case "Leaf":
        return <Leaf className="h-5 w-5" />;
      default:
        return <Factory className="h-5 w-5" />;
    }
  };

  const appImages: Record<string, string> = {
    "oil-gas-systems": IMAGES.oilSourcing,
    "gas-lng-processing": IMAGES.plantDehydrator,
    "petrochemical-refining": IMAGES.petrochemicalRefining,
    "water-treatment-systems": IMAGES.processWater,
    "manufacturing-process": IMAGES.maintenanceSystem,
    "environmental-waste": IMAGES.gal7,
  };

  const activeApp = INDUSTRY_APPLICATIONS.find((a) => a.id === selectedAppId) || INDUSTRY_APPLICATIONS[0];

  return (
    <section id="system-applications" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Factory className="h-4 w-4" />
            <span>Industrial Sector Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
            Industries We <br />
            <span className="text-amber-500">Power & Support</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-sans">
            Delivering chemical consistency, process integrity, and uninterrupted supply chains to upstream exploration, LNG liquefaction, refinery complexes, power stations, and manufacturing plants.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sector List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">
              Select Operating Industry
            </span>

            {INDUSTRY_APPLICATIONS.map((app, index) => {
              const matches = app.id === selectedAppId;
              return (
                <button
                  key={app.id}
                  onClick={() => setSelectedAppId(app.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer ${
                    matches
                      ? "bg-slate-900 border-amber-500 text-white shadow-lg ring-1 ring-amber-500/40"
                      : "bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded shrink-0 ${matches ? "bg-amber-500/15 text-amber-400 border border-amber-500/30" : "bg-slate-950 text-slate-400 border border-slate-800"}`}>
                      {getIcon(app.icon)}
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm uppercase tracking-wide block text-white">
                        {app.name}
                      </span>
                      <span className="text-xs text-slate-400 line-clamp-1 font-sans mt-0.5">
                        {app.description}
                      </span>
                    </div>
                  </div>
                  <span className={`font-mono text-xs font-bold shrink-0 ${matches ? "text-amber-400" : "text-slate-600"}`}>
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Immersive Details Panel */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex flex-col justify-between shadow-xl">
            
            {/* Header Image */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
              <img
                src={appImages[activeApp.id]}
                alt={activeApp.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur border border-slate-700 text-amber-400 px-3 py-1 rounded text-xs font-bold uppercase">
                SECTOR SPECIFICATION • 0{INDUSTRY_APPLICATIONS.indexOf(activeApp) + 1}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  {activeApp.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans mt-2">
                  {activeApp.description}
                </p>
              </div>

              {/* Requirement Profile */}
              <div className="border-t border-slate-800 pt-5 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5">
                    Operating Environment & Technical Challenges:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {activeApp.details}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                    Core Supplied Formulations & Consumables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeApp.keyProducts.map((prod, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950 border border-slate-800 px-3 py-2 rounded text-xs text-slate-200 flex items-center gap-2"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                        <span>{prod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Quote Action */}
              <div className="border-t border-slate-800 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Ready for project staging & volume pricing
                </span>
                
                <button
                  onClick={() => onSelectApplication(activeApp.name)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-2.5 text-xs font-display font-black tracking-wider uppercase rounded cursor-pointer transition-all flex items-center justify-center gap-2 shadow"
                >
                  REQUEST SECTOR QUOTE
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
