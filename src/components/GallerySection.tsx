import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";
import { Filter, Eye, X, ZoomIn, SlidersHorizontal, Info, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "ALL" },
    { id: "oil-gas", label: "OIL & GAS" },
    { id: "water-treatment", label: "WATER TREATMENT" },
    { id: "industrial-filtration", label: "FILTRATION" },
    { id: "logistics-procurement", label: "LOGISTICS" },
    { id: "technical-facilities", label: "FACILITIES" },
  ];

  const filteredItems = activeFilter === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleCopySpecCode = (id: string) => {
    navigator.clipboard.writeText(`ODCL-SPEC-IMG-${id.toUpperCase()}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <section id="photo-gallery" className="py-16 md:py-24 bg-slate-900 border-b border-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Gallery Section Header */}
        <div className="border-t-4 border-cyan-500 pt-4 mb-8">
          <span className="font-mono text-sm font-black text-cyan-400 uppercase tracking-widest block mb-1">
            FACILITY MEDIA
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            ASSETS & MEDIA GALLERY
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-205 mt-2 max-w-2xl leading-relaxed">
            Sourcing pipelines, physical storage warehouses, quality verification laboratories, and logistics terminals.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950 border-2 border-slate-800 p-4 rounded-none mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-black text-slate-300 uppercase">
            <SlidersHorizontal className="h-4 w-4 text-cyan-400 stroke-[2.5]" />
            <span>SORT CATEGORY:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-display font-black tracking-wider uppercase rounded-none border-2 transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-cyan-500 text-slate-950 border-cyan-500"
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-750"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-grid Photo Matrix (12 Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950 border-2 border-slate-800 rounded-none overflow-hidden group hover:border-cyan-500 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              {/* Image Segment */}
              <div className="relative aspect-video sm:aspect-square overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 cursor-zoom-in"
                />
                
                {/* Visual Hover Mask */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-none bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform border-2 border-cyan-500">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>

                {/* Left Category Indicator Tag */}
                <span className="absolute bottom-2.5 left-2.5 font-mono text-xs font-black bg-slate-950/95 border border-slate-700 text-cyan-400 px-2 py-1 shadow rounded-none leading-none uppercase">
                  {item.category.replace("-", " ")}
                </span>
              </div>

              {/* Technical Description Segment */}
              <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-sm uppercase tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-bold mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Diagnostic technical reference */}
                <div className="border-t border-slate-900 pt-3 flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-slate-500">
                    ID: OD-{item.id.toUpperCase()}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopySpecCode(item.id);
                    }}
                    className={`font-mono text-xs font-black px-1.5 py-0.5 rounded transition-colors ${copiedId === item.id ? "text-green-400 bg-green-950/20" : "text-slate-400 hover:text-cyan-400"}`}
                  >
                    {copiedId === item.id ? "COPIED CODE" : "COPY CODE"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-slate-950 border-2 border-slate-800 rounded-none">
            <p className="text-slate-400 text-xs font-mono font-black uppercase tracking-widest">
              NO METRICS MATCHING ACTIVE FILTERED GRADES
            </p>
          </div>
        )}

        {/* Fullscreen Luminous Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            {/* Tap Mask */}
            <div className="absolute inset-0 cursor-default" onClick={() => setSelectedImage(null)}></div>

            <div className="relative bg-slate-950 border-2 border-slate-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto md:overflow-visible rounded-none overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-150">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 h-8 w-8 bg-slate-900/90 backdrop-blur hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white rounded-none flex items-center justify-center cursor-pointer z-30 font-black"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Slider Jumper Buttons (Responsive: only display on sm breakpoint and above to avoid cluttering mobile images) */}
              <button
                onClick={handlePrevImage}
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-slate-900/80 hover:bg-slate-800 border-2 border-slate-750 text-slate-300 rounded-none items-center justify-center cursor-pointer z-20"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNextImage}
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-slate-900/80 hover:bg-slate-800 border-2 border-slate-750 text-slate-300 rounded-none items-center justify-center cursor-pointer z-20"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Image Split Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Immersive View */}
                <div className="md:col-span-8 bg-slate-900 aspect-video md:aspect-auto md:h-[450px]">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Specification Panel */}
                <div className="md:col-span-4 p-6 flex flex-col justify-between bg-slate-950 max-h-[450px] overflow-y-auto">
                  <div className="space-y-4">
                    <span className="font-mono text-xs font-black bg-cyan-950 border border-cyan-500/30 text-cyan-400 px-2.5 py-1.5 rounded-none inline-block uppercase leading-none">
                      {selectedImage.category.replace("-", " ")} SPECIFICATION
                    </span>

                    <h2 className="font-display font-black text-xl text-white uppercase tracking-tight">
                      {selectedImage.title}
                    </h2>

                    <p className="text-sm font-bold text-slate-200 leading-relaxed font-sans">
                      {selectedImage.description}
                    </p>

                    <div className="border-t-2 border-slate-800 pt-4 space-y-2 text-xs font-mono font-bold text-slate-400">
                      <div className="flex justify-between">
                        <span className="font-black">ASSET CODE:</span>
                        <span className="text-slate-100 font-black">OD_SPEC_{selectedImage.id.toUpperCase()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-black">VERIFIED DOCK:</span>
                        <span className="text-slate-100 font-black">PORT HARCOURT</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-black">COA SPEC:</span>
                        <span className="text-green-400 font-black uppercase">PASSED INSPECTION</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t font-mono border-slate-900 flex flex-col gap-2">
                    <button
                      onClick={() => handleCopySpecCode(selectedImage.id)}
                      className="w-full py-2.5 bg-slate-900 border-2 border-slate-800 text-slate-350 font-black text-xs rounded-none hover:bg-slate-850 cursor-pointer"
                    >
                      {copiedId === selectedImage.id ? "COPIED SPEC CODE" : "COPY CODE"}
                    </button>
                    <button
                      onClick={() => {
                        window.print();
                      }}
                      className="w-full py-2.5 bg-cyan-500 text-slate-950 font-display font-black text-xs tracking-widest uppercase rounded-none hover:bg-cyan-400 cursor-pointer border-2 border-cyan-500"
                    >
                      PRINT TECHNICAL MANIFEST
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
