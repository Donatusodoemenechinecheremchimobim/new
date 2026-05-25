import React, { useState } from "react";
import { INDUSTRY_APPLICATIONS } from "../data";
import { Flame, Wind, Cpu, Activity, Settings, Leaf, ShieldAlert, Check } from "lucide-react";
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
        return <Settings className="h-5 w-5" />;
    }
  };

  // Curated local images map representing industrial fields for space
  const appImages: Record<string, string> = {
    "oil-gas-systems": IMAGES.oilSourcing,
    "gas-lng-processing": IMAGES.plantDehydrator,
    "petrochemical-refining": IMAGES.bulkStock,
    "water-treatment-systems": IMAGES.processWater,
    "manufacturing-process": IMAGES.maintenanceSystem,
    "environmental-waste": IMAGES.gal7,
  };

  const activeApp = INDUSTRY_APPLICATIONS.find((a) => a.id === selectedAppId) || INDUSTRY_APPLICATIONS[0];

  return (
    <section id="system-applications" className="py-16 md:py-24 bg-slate-900 border-b border-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Technical Alert header banner */}
        <div className="border-t-4 border-amber-500 pt-4 mb-12">
          <span className="font-mono text-sm font-black text-amber-500 uppercase tracking-widest block mb-1">
            WHAT WE DO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            INDUSTRIES WE SERVE
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-200 mt-2 max-w-3xl leading-relaxed">
            Ensuring reliable supply chains and consistent product formulations across power, energy, chemical processing, and water purification facilities.
          </p>
        </div>

        {/* Bento Grid with high visual contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Grid Panel: Selector list */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 h-fit">
            {INDUSTRY_APPLICATIONS.map((app, index) => {
              const matches = app.id === selectedAppId;
              return (
                <button
                  key={app.id}
                  onClick={() => setSelectedAppId(app.id)}
                  className={`text-left p-4 rounded-none border-2 transition-all duration-150 flex items-center justify-between gap-4 cursor-pointer relative ${
                    matches
                      ? "bg-slate-950 border-cyan-500 text-white shadow-lg"
                      : "bg-slate-950/45 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-950"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-none border ${matches ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" : "bg-slate-900 border-slate-800 text-slate-400"}`}>
                      {getIcon(app.icon)}
                    </div>
                    <span className="font-display font-black text-sm uppercase tracking-wide">
                      {app.name}
                    </span>
                  </div>
                  <span className={`font-mono text-xs font-black ${matches ? "text-cyan-400" : "text-slate-500"}`}>
                    Ref: 0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Immersive Sector Showcase - Highly detailed with massive image layout */}
          <div className="lg:col-span-7 bg-slate-950 border-2 border-slate-800 rounded-none overflow-hidden flex flex-col justify-between">
            
            {/* Visual Header Image Container */}
            <div className="relative h-64 w-full cursor-pointer overflow-hidden bg-slate-950">
              <img
                src={appImages[activeApp.id]}
                alt={`${activeApp.name} Industrial Sector`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-75 cursor-zoom-in transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
              
              {/* Category Identifier */}
              <div className="absolute top-4 left-4 font-mono text-xs font-black bg-slate-900/95 border border-slate-800 text-slate-100 px-3 py-1.5 rounded-none shadow">
                SECTOR SERIES 0{INDUSTRY_APPLICATIONS.indexOf(activeApp) + 1}
              </div>

              {/* Tap to Zoom indicator */}
              <div className="absolute top-4 right-4 font-mono text-xs font-black bg-slate-950/95 border-2 border-cyan-500 text-cyan-400 px-3 py-1.5 rounded-none shadow">
                TAP TO ZOOM IMAGE
              </div>
            </div>

            {/* Application Detail Column */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {activeApp.name}
                </h3>
                <p className="text-sm font-bold text-slate-100 leading-relaxed font-sans">
                  {activeApp.description}
                </p>
              </div>

              <div className="border-t-2 border-slate-800 pt-5 space-y-5">
                <div>
                  <h4 className="font-mono text-xs font-black text-cyan-400 uppercase tracking-widest mb-2">
                    PROCESS REQUIREMENT PROFILE
                  </h4>
                  <p className="text-sm font-bold text-slate-200 leading-relaxed font-sans">
                    {activeApp.details}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-black text-amber-500 uppercase tracking-widest mb-2">
                    SUGGESTED REQUISITION MATERIALS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeApp.keyProducts.map((prod, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-900 border-2 border-slate-800 px-3 py-2 rounded-none text-xs font-mono font-black text-slate-100 flex items-center gap-2"
                      >
                        <Check className="h-4 w-4 text-cyan-400 shrink-0 stroke-[3]" />
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Inquiry Jumper */}
              <div className="border-t-2 border-slate-800 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-xs text-slate-400 font-mono font-bold uppercase">
                  READY FOR COA VERIFIED SUPPLY
                </span>
                
                <button
                  onClick={() => onSelectApplication(activeApp.name)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 text-xs font-display font-black tracking-widest uppercase rounded-none cursor-pointer transition-all shrink-0 hover:scale-[1.02] active:scale-95 border-2 border-cyan-500"
                >
                  SET IN TECHNICAL QUOTE
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
