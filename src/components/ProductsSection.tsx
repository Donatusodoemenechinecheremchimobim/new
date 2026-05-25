import React, { useState } from "react";
import { PRODUCT_GROUPS } from "../data";
import { Droplets, Filter, Layers, ShieldAlert, Check, FileText, ArrowRight } from "lucide-react";
import { IMAGES } from "../imageAssets";

interface ProductsSectionProps {
  onSelectItemForQuote: (productName: string, categoryName: string) => void;
}

export default function ProductsSection({ onSelectItemForQuote }: ProductsSectionProps) {
  const [selectedGroupId, setSelectedGroupId] = useState(PRODUCT_GROUPS[0].id);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const activeGroup = PRODUCT_GROUPS.find((g) => g.id === selectedGroupId) || PRODUCT_GROUPS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Droplets":
        return <Droplets className="h-5 w-5" />;
      case "Filter":
        return <Filter className="h-5 w-5" />;
      case "Layers":
        return <Layers className="h-5 w-5" />;
      case "ShieldAlert":
        return <ShieldAlert className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  // Static images map correlating to chemical groups for visual space
  const groupImages: Record<string, string> = {
    "water-treatment": IMAGES.processWater,
    "filtration-materials": IMAGES.filtrationMedia,
    "oil-gas-chemicals": IMAGES.plantDehydrator,
    "maintenance-chemicals": IMAGES.maintenanceSystem,
  };

  return (
    <section id="products-selection" className="py-16 md:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Title */}
        <div className="border-t-4 border-cyan-500 pt-4 mb-12">
          <span className="font-mono text-sm font-black text-cyan-400 uppercase tracking-widest block mb-1">
            OUR PRODUCT PORTFOLIO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            INDUSTRIAL CHEMICAL PRODUCTS
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-200 mt-2 max-w-2xl leading-relaxed">
            Sourced directly from verified global producers. Every shipment comes complete with verified Certificates of Analysis (COA) meeting strict operating specifications.
          </p>
        </div>

        {/* Industrial Sidebar/Tab Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Category Panels Selector */}
          <div className="lg:col-span-4 space-y-3.5">
            <span className="block font-mono text-xs font-bold text-slate-300 uppercase tracking-wider pl-2">
              SELECT CHEMICAL SERIES
            </span>
            {PRODUCT_GROUPS.map((group) => {
              const isActive = group.id === selectedGroupId;
              return (
                <button
                  key={group.id}
                  onClick={() => setSelectedGroupId(group.id)}
                  className={`w-full text-left p-4 rounded border-2 transition-all duration-150 relative overflow-hidden flex items-start gap-4 cursor-pointer ${
                    isActive
                      ? "bg-slate-900/95 border-cyan-500 text-white shadow-lg"
                      : "bg-slate-900/40 border-slate-800 text-slate-300 hover:text-slate-100 hover:border-slate-600 hover:bg-slate-900/70"
                  }`}
                >
                  {/* Highlight bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-cyan-500"></div>
                  )}

                  {/* Icon Block */}
                  <div className={`p-2.5 rounded shrink-0 ${isActive ? "bg-cyan-950 text-cyan-400 border border-cyan-500/30" : "bg-slate-950/80 text-slate-400 border border-slate-850"}`}>
                    {getIcon(group.icon)}
                  </div>

                  {/* Info Column */}
                  <div>
                    <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-100">
                      {group.name}
                    </h3>
                    <p className="text-slate-200 font-bold text-xs mt-1.5 line-clamp-2">
                      {group.description}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Quick Sourcing Prompt Box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-slate-800 p-5 rounded mt-6">
              <h4 className="font-display font-black text-sm uppercase tracking-wide text-white">
                Need a Custom Formulation?
              </h4>
              <p className="text-xs sm:text-sm font-bold text-slate-300 mt-2">
                If your process needs custom concentrations, grades, or pack-out configurations, our bulk sourcing desk is ready to respond.
              </p>
            </div>
          </div>

          {/* Right Product Grid - Straight to the point specifications */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Active Group Header banner Image Container - Large visual slot */}
            <div className="relative h-48 sm:h-64 w-full rounded-none overflow-hidden border-2 border-slate-800 bg-slate-950 cursor-pointer">
              <img
                src={groupImages[activeGroup.id]}
                alt={`${activeGroup.name} Chemicals Category`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-75 cursor-zoom-in transition-transform duration-500 hover:scale-105"
              />
              {/* Blur gradient cover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              {/* Info absolute overlay cards */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest bg-cyan-950/90 border border-cyan-500/20 px-2 py-0.5 rounded-none inline-block mb-2">
                  PORTFOLIO ACTIVE SERIES • TAP TO ZOOM IMAGE
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none">
                  {activeGroup.name}
                </h3>
              </div>
            </div>

            {/* Items Listing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeGroup.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/40 border-2 border-slate-800 rounded p-5 space-y-4 hover:border-slate-600 hover:bg-slate-900/60 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    {/* Item Title & Code */}
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-display font-black text-sm uppercase tracking-wider text-white">
                        {item.name}
                      </h4>
                      {item.chemicalFormula && (
                        <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/80 border-2 border-cyan-500/35 px-2 py-0.5 rounded-none shrink-0">
                          {item.chemicalFormula}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-bold text-slate-200 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* ASTM / Chemical Specs List */}
                    {item.specifications && item.specifications.length > 0 && (
                      <div className="bg-slate-950/80 rounded-none p-3 border-2 border-slate-800 mt-3">
                        <span className="block font-mono text-[10px] font-black text-slate-350 uppercase tracking-wider mb-1.5">
                          TYPICAL SPECIFICATIONS:
                        </span>
                        <ul className="space-y-1.5">
                          {item.specifications.map((spec, sidx) => (
                            <li key={sidx} className="font-mono text-xs font-bold text-slate-200 flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 bg-orange-500 rounded-none animate-pulse"></span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Sourcing Action Button */}
                  <button
                    onClick={() => onSelectItemForQuote(item.name, activeGroup.name)}
                    className="w-full mt-4 bg-slate-950 hover:bg-orange-500 text-slate-100 hover:text-slate-950 py-3 rounded-none border-2 border-slate-800 hover:border-orange-500 font-display font-black text-xs tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    SELECT FOR QUOTE ESTIMATION
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
