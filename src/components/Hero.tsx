import React, { useState } from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight, Sparkles, Building2 } from "lucide-react";
import { IMAGES } from "../imageAssets";

interface HeroProps {
  onQuoteClick: () => void;
  onExploreProducts: () => void;
}

export default function Hero({ onQuoteClick, onExploreProducts }: HeroProps) {
  const showcaseSlides = [
    { 
      src: IMAGES.heroOildrop, 
      title: "Gas Dehydration & Refining Systems", 
      location: "Industrial Process Operations",
      description: "Supply of high-purity triethylene glycol (TEG) and active process chemicals for continuous gas processing."
    },
    { 
      src: IMAGES.bluePallet, 
      title: "Direct Palletized Chemical Inventory", 
      location: "Port Harcourt Distribution Center",
      description: "Secure, weather-controlled staging and ready-dispatch stock for regional energy and manufacturing plants."
    },
    { 
      src: IMAGES.sievedDesiccant, 
      title: "Sieved Desiccant & Adsorbent Media", 
      location: "Quality Inspection Facility",
      description: "Precision-graded silica gel, molecular sieves, and adsorbent beds for industrial gas and air drying units."
    },
    { 
      src: IMAGES.waterTreatment, 
      title: "Water Treatment & Clarification", 
      location: "Process Water Infrastructure",
      description: "Scale inhibitors, biocides, coagulants, and pH regulators engineered for municipal and plant-loop systems."
    },
    { 
      src: IMAGES.imgWA0007, 
      title: "Quality Assurance & COA Verification", 
      location: "Analytical Lab & Sampling Desk",
      description: "Every batch is verified against manufacturer certificates of analysis and OEM technical specifications."
    },
    { 
      src: IMAGES.imgWA0015, 
      title: "Heavy Vessel & Filtration Maintenance", 
      location: "Field Engineering Services",
      description: "Supporting turnarounds, plant shutdowns, and bed change-outs with certified industrial media."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseSlides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length);
  };

  const current = showcaseSlides[activeIndex];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 lg:py-20 border-b border-slate-800">
      {/* Background Subtle Industrial Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Main Grid: Left Value Proposition / Right Physical Asset Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-5 lg:col-span-7">
            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-700/90 rounded text-amber-400 text-xs font-bold tracking-wider uppercase">
              <ShieldCheck className="h-4 w-4 text-amber-400 shrink-0" />
              <span>Certified Industrial Chemical Partner • Sub-Saharan Africa & Global</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-white leading-[1.12] uppercase">
              Engineered Chemical <br />
              <span className="text-amber-500">Sourcing & Supply Chain</span> <br />
              For Heavy Industry
            </h1>

            {/* Direct Value Description */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl font-sans">
              OILDROP Chemical delivers mission-critical process chemicals, filtration adsorbents, and bulk industrial materials to oil & gas operators, refining complexes, power utilities, and industrial manufacturers.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Tier-1 Global OEM Manufacturer Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Port Harcourt Warehousing & Rapid Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Full COA & OEM Technical Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Critical Plant Shutdown & Turnaround Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onQuoteClick}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 text-xs font-display font-black tracking-wider uppercase rounded shadow-lg hover:shadow-amber-500/20 transition-all duration-150 flex items-center gap-2 cursor-pointer active:scale-98"
              >
                REQUEST A TECHNICAL QUOTE
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </button>
              
              <button
                onClick={onExploreProducts}
                className="bg-slate-900 hover:bg-slate-850 text-white border border-slate-700 hover:border-slate-600 px-5 py-3 text-xs font-display font-bold tracking-wider uppercase rounded transition-all duration-150 cursor-pointer"
              >
                VIEW PRODUCT PORTFOLIO
              </button>
            </div>

            {/* Corporate Proof Numbers */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-5 mt-4">
              <div>
                <div className="text-xl sm:text-2xl font-display font-black text-amber-500">45+</div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Industrial Formulations</div>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <div className="text-xl sm:text-2xl font-display font-black text-white">100%</div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">COA & Lab Verified</div>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <div className="text-xl sm:text-2xl font-display font-black text-amber-500">24/7</div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Shutdown Dispatch</div>
              </div>
            </div>

          </div>

          {/* Right Media Carousel showcasing real facilities & products */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
              
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-slate-950">
                <img
                  src={current.src}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
                />

                {/* Dark Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Location & Title Overlay */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <span className="text-xs font-semibold bg-slate-950/85 backdrop-blur border border-slate-700/80 text-amber-400 px-2.5 py-0.5 rounded">
                    {current.location}
                  </span>
                  <span className="text-xs font-bold text-slate-300 bg-slate-950/85 backdrop-blur px-2 py-0.5 rounded border border-slate-800">
                    {activeIndex + 1} / {showcaseSlides.length}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h2 className="text-sm sm:text-base font-display font-bold text-white leading-snug">
                    {current.title}
                  </h2>
                  <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">
                    {current.description}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-slate-950/80 hover:bg-slate-900 border border-slate-700 text-white rounded-full transition-all cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-slate-950/80 hover:bg-slate-900 border border-slate-700 text-white rounded-full transition-all cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Thumbnails Navigation Row */}
              <div className="p-3 bg-slate-950/90 border-t border-slate-800">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Physical Inventory & Field Operations</span>
                  <span className="text-amber-500 text-[10px]">Select to view</span>
                </div>
                <div className="grid grid-cols-6 gap-1.5">
                  {showcaseSlides.map((slide, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative h-11 rounded overflow-hidden border transition-all cursor-pointer ${
                        idx === activeIndex
                          ? "border-amber-500 ring-2 ring-amber-500/30 scale-102"
                          : "border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600"
                      }`}
                      title={slide.title}
                    >
                      <img 
                        src={slide.src} 
                        alt={slide.title} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
