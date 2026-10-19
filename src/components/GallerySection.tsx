import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";
import { X, ZoomIn, SlidersHorizontal, ChevronLeft, ChevronRight, Image as ImageIcon, ShieldCheck, MapPin } from "lucide-react";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "ALL ASSETS" },
    { id: "oil-gas", label: "OIL & GAS" },
    { id: "water-treatment", label: "WATER TREATMENT" },
    { id: "industrial-filtration", label: "ADSORBENTS & MEDIA" },
    { id: "logistics-procurement", label: "LOGISTICS & STOCK" },
    { id: "technical-facilities", label: "LABS & INFRASTRUCTURE" },
  ];

  const filteredItems = activeFilter === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

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
    <section id="photo-gallery" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ImageIcon className="h-4 w-4" />
            <span>Field & Facility Media</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
            Operational Media & <br />
            <span className="text-amber-500">Asset Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-sans">
            Explore authentic photographs of our physical chemical inventory, sieved desiccant media, quality control laboratories, and industrial distribution terminals.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-3.5 sm:p-4 rounded-lg mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase">
            <SlidersHorizontal className="h-4 w-4 text-amber-400" />
            <span>Filter By Domain:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-display font-bold tracking-wider uppercase rounded transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-amber-500 text-slate-950 font-black shadow"
                    : "bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden group hover:border-amber-500/50 hover:shadow-xl transition-all duration-200 flex flex-col cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video sm:aspect-[4/3] overflow-hidden bg-slate-950 shrink-0">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>

                {/* Category Pill */}
                <span className="absolute top-2.5 left-2.5 text-[11px] font-bold bg-slate-950/85 backdrop-blur border border-slate-700 text-amber-400 px-2 py-0.5 rounded uppercase">
                  {item.category.replace("-", " ")}
                </span>
              </div>

              {/* Caption & Location */}
              <div className="p-4 flex-grow flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-display font-bold text-sm text-white group-hover:text-amber-400 transition-colors uppercase leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1 line-clamp-2 font-sans">
                    {item.description}
                  </p>
                </div>

                {item.location && (
                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <MapPin className="h-3 w-3 text-amber-500 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0" onClick={() => setSelectedImage(null)}></div>

            <div className="relative bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl z-10 animate-in zoom-in-95 duration-150">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 h-8 w-8 bg-slate-950/90 border border-slate-700 text-slate-300 hover:text-white rounded-full flex items-center justify-center cursor-pointer z-30"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Prev / Next Controls */}
              <button
                onClick={handlePrevImage}
                className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-slate-950/90 border border-slate-700 text-slate-300 hover:text-white rounded-full items-center justify-center cursor-pointer z-20"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNextImage}
                className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-slate-950/90 border border-slate-700 text-slate-300 hover:text-white rounded-full items-center justify-center cursor-pointer z-20"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-8 bg-slate-950 flex items-center justify-center min-h-[300px] md:min-h-[450px]">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[60vh] md:max-h-[500px] w-full object-contain"
                  />
                </div>

                <div className="md:col-span-4 p-6 flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800">
                  <div className="space-y-4">
                    <span className="text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded inline-block uppercase">
                      {selectedImage.category.replace("-", " ")}
                    </span>

                    <h2 className="font-display font-bold text-xl text-white uppercase leading-snug">
                      {selectedImage.title}
                    </h2>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {selectedImage.description}
                    </p>

                    {selectedImage.location && (
                      <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-800">
                        <MapPin className="h-4 w-4 text-amber-500 shrink-0" />
                        <span>{selectedImage.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-slate-800 text-xs text-slate-400">
                    <span className="font-semibold text-slate-200">Quality Standard:</span> OEM Batch Traceable & COA Compliant
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
