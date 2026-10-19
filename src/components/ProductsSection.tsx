import React, { useState } from "react";
import { PRODUCT_GROUPS } from "../data";
import { Droplets, Filter, Layers, ShieldCheck, CheckCircle2, FileText, ArrowRight, Sparkles, Beaker, Tag } from "lucide-react";
import { IMAGES } from "../imageAssets";

interface ProductsSectionProps {
  onSelectItemForQuote: (productName: string, categoryName: string) => void;
}

export default function ProductsSection({ onSelectItemForQuote }: ProductsSectionProps) {
  const [selectedGroupId, setSelectedGroupId] = useState(PRODUCT_GROUPS[0].id);
  const [searchQuery, setSearchQuery] = useState("");

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
      case "ShieldCheck":
        return <ShieldCheck className="h-5 w-5" />;
      default:
        return <Beaker className="h-5 w-5" />;
    }
  };

  const groupImages: Record<string, string> = {
    "water-treatment": IMAGES.processWater,
    "filtration-materials": IMAGES.sievedDesiccant || IMAGES.filtrationMedia,
    "oil-gas-chemicals": IMAGES.plantDehydrator,
    "maintenance-chemicals": IMAGES.maintenanceSystem,
  };

  // Filter products across active group or global search
  const displayedItems = activeGroup.items.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      (item.chemicalFormula && item.chemicalFormula.toLowerCase().includes(q)) ||
      (item.casNumber && item.casNumber.toLowerCase().includes(q))
    );
  });

  return (
    <section id="products-selection" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Beaker className="h-4 w-4" />
            <span>Certified Material Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
            Industrial Chemical <br />
            <span className="text-amber-500">& Material Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-sans">
            Every material is sourced from accredited Tier-1 manufacturers, fully supported by certified Certificates of Analysis (COA), Technical Data Sheets (TDS), and strict batch traceability.
          </p>
        </div>

        {/* Category Navigation & Search */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Category Selector */}
          <div className="lg:col-span-4 space-y-3">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">
              Select Product Category
            </span>
            
            {PRODUCT_GROUPS.map((group) => {
              const isActive = group.id === selectedGroupId;
              return (
                <button
                  key={group.id}
                  onClick={() => {
                    setSelectedGroupId(group.id);
                    setSearchQuery("");
                  }}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-150 relative flex items-start gap-3.5 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 border-amber-500 text-white shadow-lg ring-1 ring-amber-500/40"
                      : "bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900"
                  }`}
                >
                  <div className={`p-2 rounded shrink-0 ${isActive ? "bg-amber-500/15 text-amber-400 border border-amber-500/30" : "bg-slate-950 text-slate-400 border border-slate-800"}`}>
                    {getIcon(group.icon)}
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-sm uppercase tracking-wide text-white">
                      {group.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 font-sans">
                      {group.description}
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-mono text-amber-400 font-semibold">
                      {group.items.length} Formulations Available
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Sourcing Support Banner */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg mt-6 space-y-2">
              <h4 className="font-display font-bold text-sm uppercase tracking-wide text-white flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-amber-500" />
                Custom Grade Sourcing
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Require specialized purity grades, alternative inhibitor formulations, or unique packaging (IBC totes vs bulk isotainers)? Our Houston sourcing desk procures custom syntheses on demand.
              </p>
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Category Banner Frame */}
            <div className="relative h-48 sm:h-56 w-full rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src={groupImages[activeGroup.id]}
                alt={activeGroup.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-[11px] font-mono font-bold text-amber-400 uppercase bg-slate-950/90 border border-slate-700 px-2.5 py-1 rounded inline-block mb-1.5">
                  ACTIVE CATEGORY • QUALITY ASSURED
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {activeGroup.name}
                </h3>
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {displayedItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-5 flex flex-col justify-between hover:border-slate-700 transition-all duration-150 shadow-md"
                >
                  <div className="space-y-3">
                    {/* Header: Name & CAS / Formula */}
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-display font-bold text-base text-white uppercase leading-snug">
                          {item.name}
                        </h4>
                        {item.chemicalFormula && (
                          <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded shrink-0">
                            {item.chemicalFormula}
                          </span>
                        )}
                      </div>
                      {item.casNumber && (
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          CAS: {item.casNumber}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Typical Specifications */}
                    {item.specifications && item.specifications.length > 0 && (
                      <div className="bg-slate-950 rounded p-3 border border-slate-850">
                        <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Standard Quality Specifications:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-200">
                          {item.specifications.map((spec, sidx) => (
                            <li key={sidx} className="flex items-center gap-1.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Typical Applications Tags */}
                    {item.typicalApplications && item.typicalApplications.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.typicalApplications.map((app, aidx) => (
                          <span key={aidx} className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Sourcing RFQ Button */}
                  <button
                    onClick={() => onSelectItemForQuote(item.name, activeGroup.name)}
                    className="w-full mt-5 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 py-2.5 rounded border border-amber-500/30 hover:border-amber-500 font-display font-bold text-xs tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    REQUEST SPEC & PRICE QUOTE
                    <ArrowRight className="h-3.5 w-3.5" />
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
