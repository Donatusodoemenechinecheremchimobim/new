import React, { useState } from "react";
import { ArrowRight, Drill, Database, RefreshCw, Layers, ShieldCheck, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "../imageAssets";

interface HeroProps {
  onQuoteClick: () => void;
  onExploreProducts: () => void;
}

export default function Hero({ onQuoteClick, onExploreProducts }: HeroProps) {
  // Configured list of premium pictures the user provided to load dynmically in Hero
  const heroImages = [
    { 
      src: IMAGES.heroOildrop, 
      alt: "Industrial distillation system", 
      ref: "PORT: PH_NGA / INCOMING SHIPMENTS", 
      feed: "FEED STOCK: ACTIVE AMINE & TEG",
      disc: "TEG DEHYDRATOR",
      strength: "UNIFORM ≥85 N"
    },
    { 
      src: IMAGES.plantDehydrator, 
      alt: "Midstream purification vessels", 
      ref: "WAREHOUSE: PORT HARCOURT BULK STORAGE", 
      feed: "TEG & DEG GLYCOLS LOT 26",
      disc: "PURITY FEED SYSTEM",
      strength: "CERTIFIED COMPONENT"
    },
    { 
      src: IMAGES.bulkStock, 
      alt: "Consolidated raw chemical bulk stock yard", 
      ref: "LOGISTICS: SHIPPED CARGOES DEPOT", 
      feed: "PACKED BARRELS STOCKED IN NIGERIA",
      disc: "STOCK DISTRIBUTION",
      strength: "BATCH STABILITY LEVEL 1"
    },
    { 
      src: IMAGES.filtrationMedia, 
      alt: "Industrial filtration materials testing", 
      ref: "FILTER LAB: ACTIVATED CARBON & ANTHRACITE", 
      feed: "FOR DEEP-BED PROCESS FILTERS",
      disc: "FILTRATION POROSITY",
      strength: "IODINE INDEX ≥1000 mg/g"
    },
    { 
      src: IMAGES.oilSourcing, 
      alt: "Upstream chemicals sourcing pipeline", 
      ref: "SOURCE HUB: SECURED DIRECT CHANNELS", 
      feed: "COA COMPLIANT DOSING REAGENTS",
      disc: "REAGENT FEED PIPELINE",
      strength: "HPLC LAB VERIFIED"
    },
    { 
      src: IMAGES.logisticsHub, 
      alt: "Volumetric ocean freight logistics container hub", 
      ref: "CLEARING CAPABILITY: HUB DIRECT ONNE", 
      feed: "CUSTOM CLEARED BULK SHIPPING",
      disc: "FORWARD DISTRIBUTION",
      strength: "EXPEDITED SEA ROUTING"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextHero = () => {
    setActiveIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrevHero = () => {
    setActiveIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const activeHero = heroImages[activeIndex];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24 border-b border-slate-800">
      {/* Structural Graphic Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"></div>
      
      {/* Light Blur Glow behind Heading */}
      <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Main Split Layout: Left Text / Right Heavy Industrial Media Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Textual Spec Pillar */}
          <div className="space-y-6 lg:col-span-7">
            {/* Tag Alert */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border-l-4 border-orange-500 border border-slate-850 rounded-none text-orange-400 font-mono text-sm font-black tracking-wider uppercase">
              <span className="h-2 w-2 rounded-none bg-orange-500 animate-pulse"></span>
              TRUSTED REGIONAL SUPPLIER
            </div>

            {/* Title: Thick, Rugged, High-contrast, Bold Typography */}
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter uppercase text-white leading-[0.85] mt-3 mb-4">
              Oil Drop <br />
              Chemical <span className="text-orange-500 italic block sm:inline">Ltd.</span>
            </h1>

            {/* Subtitle: High-clarity Industrial Spec */}
            <p className="font-display text-lg sm:text-xl font-extrabold tracking-wider text-slate-200 uppercase">
              Industrial Chemical Sourcing & Supply Chain
            </p>

            {/* Concise Core Statement */}
            <p className="text-sm sm:text-base text-slate-200 font-bold leading-relaxed max-w-2xl font-sans">
              We provide straight-forward chemical procurement, bulk distribution, and optimized shipping logistics. We supply high-quality process additives, premium filtration media, and industrial consumables directly to power, energy, water treatment, and manufacturing facilities.
            </p>

            {/* Dual CTA Block */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onQuoteClick}
                className="bg-orange-500 text-slate-900 px-6 py-3.5 text-xs font-display font-black tracking-widest uppercase rounded-none border-2 border-orange-500 hover:bg-slate-950 hover:text-orange-500 transition-all cursor-pointer active:scale-95 flex items-center gap-2 group"
              >
                REQUEST TECHNICAL QUOTE
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={onExploreProducts}
                className="bg-slate-900 hover:bg-slate-850 hover:text-white border-2 border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3.5 text-xs font-display font-black tracking-widest uppercase rounded-none cursor-pointer transition-all flex items-center gap-1"
              >
                PRODUCT PORTFOLIO
              </button>
            </div>

            {/* Quick Sourcing Ticker Stats / Live metrics */}
            <div className="grid grid-cols-3 gap-4 border-t-4 border-slate-800 pt-8 mt-8">
              <div>
                <dt className="text-sm font-black text-slate-100 uppercase tracking-widest">Sourced Materials</dt>
                <dd className="text-4xl font-display font-black text-orange-500 mt-1">42+</dd>
                <div className="text-xs text-slate-300 font-bold mt-1 uppercase">PORT GRADES</div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <dt className="text-sm font-black text-slate-100 uppercase tracking-widest">Global Nodes</dt>
                <dd className="text-4xl font-display font-black text-white mt-1">PH / HOU</dd>
                <div className="text-xs text-slate-300 font-bold mt-1 uppercase">NIGERIA & USA</div>
              </div>
              <div className="border-l-4 border-white pl-4">
                <dt className="text-sm font-black text-slate-100 uppercase tracking-widest">Verification</dt>
                <dd className="text-4xl font-display font-black text-orange-500 mt-1">100%</dd>
                <div className="text-xs text-slate-300 font-bold mt-1 uppercase">COA VERIFIED</div>
              </div>
            </div>

          </div>

          {/* Right Visual Frame - Spaces for picture and professional engineering blueprints */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 w-full overflow-hidden rounded-none border-2 border-slate-800 bg-slate-900 p-2.5 shadow-2xl">
              
              {/* Main Sourcing Picture Container */}
              <div className="relative h-64 sm:h-80 lg:h-[350px] w-full overflow-hidden rounded-none bg-slate-950 group/img cursor-pointer">
                <img
                  src={activeHero.src}
                  alt={activeHero.alt}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105 cursor-zoom-in brightness-110"
                />
                
                {/* Visual Technical Tags Overlay */}
                <div className="absolute top-4 left-4 font-mono text-xs font-black bg-slate-950/95 backdrop-blur border-2 border-slate-700 text-white px-2 py-1.5 rounded-none shadow">
                  {activeHero.ref}
                </div>
                
                <div className="absolute bottom-4 right-4 font-mono text-xs font-black bg-slate-950/95 backdrop-blur border-2 border-orange-500 text-orange-400 px-2.5 py-1.5 rounded-none shadow">
                  {activeHero.feed}
                </div>

                {/* Left/Right Slides Quick Touch Clickers */}
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrevHero(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-slate-950/95 hover:bg-slate-900 border-2 border-slate-700 text-slate-100 hover:text-white rounded-none cursor-pointer opacity-100 sm:opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="h-5 w-5 font-bold" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleNextHero(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-950/95 hover:bg-slate-900 border-2 border-slate-700 text-slate-100 hover:text-white rounded-none cursor-pointer opacity-100 sm:opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
                  aria-label="Next Image"
                >
                  <ChevronRight className="h-5 w-5 font-bold" />
                </button>

                {/* Main Swipe Hint strip in top right */}
                <div className="absolute top-4 right-4 font-mono text-[10px] font-black bg-cyan-950/95 border-2 border-cyan-500 text-cyan-400 px-2 py-1.5 uppercase tracking-wider">
                  IMAGE {activeIndex + 1} OF {heroImages.length}
                </div>

                {/* Left Solid Accent Line */}
                <div className="absolute inset-y-0 left-0 w-2 bg-orange-500"></div>
              </div>

              {/* Decorative Thumbnail Selector Grid to allow clicking tons of pictures */}
              <div className="mt-3">
                <span className="font-mono text-xs font-black text-slate-200 block mb-2 uppercase tracking-wide">
                  IMAGES GALLERY (TAP THUMBNAIL TO SWITCH, TAP IMAGE TO ZOOM)
                </span>
                <div className="grid grid-cols-6 gap-1.5 bg-slate-950 p-2 border-2 border-slate-800">
                  {heroImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative h-11 sm:h-12 border-2 transition-all overflow-hidden ${
                        idx === activeIndex 
                          ? "border-orange-500 ring-4 ring-orange-500/30" 
                          : "border-slate-800 hover:border-slate-500 opacity-70 hover:opacity-100"
                      }`}
                      title={img.alt}
                    >
                      <img 
                        src={img.src} 
                        alt="Preview Thumbnail" 
                        className="w-full h-full object-cover scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Decorative Tech Specs base */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono text-slate-350 border-t-2 border-slate-800 pt-3">
                <div className="flex justify-between">
                  <span className="font-bold text-slate-400">TYPE:</span>
                  <span className="text-white font-black uppercase">{activeHero.disc}</span>
                </div>
                <div className="flex justify-between pl-2 border-l-2 border-slate-800">
                  <span className="font-bold text-slate-400">STATUS:</span>
                  <span className="text-white font-black uppercase">{activeHero.strength}</span>
                </div>
              </div>
            </div>

            {/* Visual Floating Graphic behind Frame */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-72 h-72 border border-slate-800/10 rounded-full [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none hidden lg:block"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
