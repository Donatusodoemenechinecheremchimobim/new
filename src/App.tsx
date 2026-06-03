import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";
import ApplicationsSection from "./components/ApplicationsSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import ProcurementSection from "./components/ProcurementSection";
import SupplyChainSection from "./components/SupplyChainSection";
import { AnimatePresence, motion } from "motion/react";
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Table, 
  LayoutGrid, 
  Layers,
  ArrowRight,
  ClipboardList,
  X
} from "lucide-react";
import { CONTACT_INFO } from "./data";
import { IMAGES } from "./imageAssets";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  
  // Sourcing prefill parameters
  const [prefilledProduct, setPrefilledProduct] = useState("");
  const [prefilledCategory, setPrefilledCategory] = useState("");
  const [prefilledApplication, setPrefilledApplication] = useState("");

  // Zoomed image state for global lightbox viewer
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  // Keyboard escape and window listeners for zoom modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Dynamic global listener to capture clicks on any image tagged with cursor-zoom-in style
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === "IMG" && target.classList.contains("cursor-zoom-in")) {
        const img = target as HTMLImageElement;
        e.preventDefault();
        setZoomedImage({
          src: img.getAttribute("src") || img.src,
          alt: img.getAttribute("alt") || "Industrial Sourcing Illustration"
        });
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // Smooth scroll top-ups when changing page states
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const handleSelectItemForQuote = (productName: string, categoryName: string) => {
    setPrefilledProduct(productName);
    setPrefilledCategory(categoryName);
    setPrefilledApplication(""); // clear application when selecting product specifically
    setActiveTab("quotation");
  };

  const handleSelectApplication = (appName: string) => {
    setPrefilledApplication(appName);
    setPrefilledProduct(""); // clear specific product
    setPrefilledCategory("");
    setActiveTab("quotation");
  };

  const handleClearPrefills = () => {
    setPrefilledProduct("");
    setPrefilledCategory("");
    setPrefilledApplication("");
  };

  const openQuoteModalDirectly = () => {
    setActiveTab("quotation");
  };

  return (
    <div id="odcl-app-root" className="min-h-screen bg-slate-950 flex flex-col text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden w-full max-w-full relative">
      {/* Header element */}
      <Header 
        activeTab={activeTab === "quotation" ? "quotation" : activeTab} 
        setActiveTab={setActiveTab} 
        openQuoteModal={openQuoteModalDirectly}
      />

      {/* Primary Routing Container with AnimatePresence */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="tab-home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-0"
            >
              {/* Hero header */}
              <Hero 
                onQuoteClick={openQuoteModalDirectly} 
                onExploreProducts={() => setActiveTab("products")}
              />

              {/* Home operating model / Straight Talk */}
              <section className="py-16 bg-slate-900 border-b border-slate-950 text-slate-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Direct info */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex gap-2 items-center font-mono text-xs font-black text-cyan-400 bg-cyan-950/40 border-2 border-cyan-500/25 px-2.5 py-1 rounded">
                      <span>PROCESS STABILITY CODES</span>
                    </div>
                    
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                      CORE COORD INTERFACE & DISTRIBUTION
                    </h2>

                    <p className="text-sm leading-relaxed text-slate-350 font-sans">
                      Oil Drop Chemical Ltd operates as a procurement and distribution interface between global chemical manufacturers and industrial end-users.
                    </p>

                    <div className="space-y-3.5 text-xs text-slate-300">
                      {[
                        { title: "Industrial Chemical Sourcing", desc: "Forging direct communication loops to secure strict specification clearances for hard-to-find process reagents." },
                        { title: "Process Material Supply", desc: "Maintaining stable material shipments of dehydrators, descaling compounds, and filtration media." },
                        { title: "Application-Based Product Matching", desc: "Reviewing reactor temperature, water pH, and loop fluid speed parameters to supply exact chemical equivalents." },
                        { title: "Supply Chain Coordination & Logistics", desc: "Handling ocean clearing, bonded warehousing buffers, and road freight haulage direct to upstream processing heads." }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-3 bg-slate-950 p-4 border border-slate-850 rounded">
                          <span className="font-mono text-cyan-400 font-extrabold text-xs sm:text-sm">{idx + 1}.</span>
                          <div>
                            <strong className="block text-white uppercase tracking-wide font-display text-xs sm:text-sm font-black">{item.title}</strong>
                            <p className="text-slate-300 text-xs sm:text-sm font-bold leading-relaxed mt-1">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Multiple pictures layout space to meet tons of pictures target */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                    <div className="relative h-44 rounded-none overflow-hidden border-2 border-slate-800 group cursor-pointer bg-slate-950">
                      <img
                        src={IMAGES.labTesting}
                        alt="Process scientist validation"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute bottom-2 left-2 bg-slate-950/90 px-2 py-1 border border-slate-800 text-xs font-mono font-black text-slate-300 uppercase">
                        01 / TECHNICAL LAB TESTING • TAP TO VIEW
                      </span>
                    </div>

                    <div className="relative h-44 rounded-none overflow-hidden border-2 border-slate-800 group cursor-pointer bg-slate-950">
                      <img
                        src={IMAGES.processWater}
                        alt="Water treatment facility clarifier"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute bottom-2 left-2 bg-slate-950/90 px-2 py-1 border border-slate-800 text-xs font-mono font-black text-slate-300 uppercase">
                        02 / PROCESS WATER LOOP • TAP TO VIEW
                      </span>
                    </div>

                    <div className="col-span-2 relative h-48 rounded-none overflow-hidden border-2 border-slate-800 group cursor-pointer bg-slate-950">
                      <img
                        src={IMAGES.bulkStock}
                        alt="Chemical drums storage rows"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-3 bg-slate-950/90 px-2.5 py-1.5 border border-slate-800 text-xs font-mono text-orange-500 font-black uppercase">
                        03 / CONSOLIDATED BULK STOCK DEPOT • TAP TO ZOOM
                      </span>
                    </div>
                  </div>

                </div>
              </section>

              {/* Industrial Sectors section */}
              <ApplicationsSection onSelectApplication={handleSelectApplication} />

              {/* Operating model structure block */}
              <section className="py-16 bg-slate-950 text-slate-350 border-b border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    
                    {/* Nigeria operations */}
                    <div className="bg-slate-900 border border-slate-850 p-6 rounded-sm flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="h-10 w-10 bg-cyan-950 border border-cyan-500/20 rounded flex items-center justify-center text-cyan-450 font-mono font-bold text-xs uppercase shadow">
                          NGA
                        </div>
                        <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                          Nigeria Operations Base
                        </h3>
                        <p className="text-sm text-slate-300 font-sans leading-relaxed">
                          Our local base coordinates local warehousing buffer stocks, custom manifest clearances in coastal ports, heavy packaging splitting, and prompt delivery directly to production client yards in Port Harcourt.
                        </p>
                      </div>
                      
                      <div className="bg-slate-950 border border-slate-850 p-4 rounded text-sm font-mono text-slate-350 mt-6 md:mt-12">
                        <strong className="block text-slate-200 uppercase mb-1">LOCAL HUB STRATS:</strong>
                        Port Harcourt Logistics Terminal, Port Onne Customs Access, road haulage coordination.
                      </div>
                    </div>

                    {/* US operations */}
                    <div className="bg-slate-900 border border-slate-850 p-6 rounded-sm flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="h-10 w-10 bg-amber-950 border border-amber-500/20 rounded flex items-center justify-center text-amber-500 font-mono font-bold text-xs uppercase shadow">
                          USA
                        </div>
                        <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                          International Procurement Coordination
                        </h3>
                        <p className="text-sm text-slate-300 font-sans leading-relaxed">
                          Located in the Houston energy belt, our coordination desk maintains direct contact with global raw-material manufacturers, evaluating purity sheets and managing deep-ocean packing containers.
                        </p>
                      </div>

                      <div className="bg-slate-950 border border-slate-850 p-4 rounded text-sm font-mono text-slate-350 mt-6 md:mt-12">
                        <strong className="block text-slate-200 uppercase mb-1">GLOBAL COORD STRATS:</strong>
                        International supplier contract negotiations, technical validation, telex clearance, freight bulk consolidation.
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Quick Quote Prompt banner */}
              <section className="bg-gradient-to-r from-slate-950 via-cyan-950/20 to-slate-950 py-12 text-center border-b border-slate-900">
                <div className="max-w-4xl mx-auto px-4 space-y-4">
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                    CRITICAL FLUID FORMULATIONS REQUIRED ASAP?
                  </h3>
                  <p className="text-sm text-slate-350 font-sans max-w-xl mx-auto leading-relaxed">
                    Evaluate sourcing feasibilities on complex descaling chemicals, adsorbents, dehydration glycols, or custom flocculant structures instantly.
                  </p>
                  <button
                    onClick={() => setActiveTab("quotation")}
                    className="bg-cyan-500 hover:bg-cyan-450 text-slate-950 font-display font-bold text-xs tracking-widest px-6 py-3 rounded cursor-pointer transition-all"
                  >
                    LAUNCH INTERACTIVE QUOTE BOARD
                  </button>
                </div>
              </section>

            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div
              key="tab-about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.15 }}
            >
              <AboutSection />
            </motion.div>
          )}

          {activeTab === "products" && (
            <motion.div
              key="tab-products"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.15 }}
            >
              <ProductsSection onSelectItemForQuote={handleSelectItemForQuote} />
            </motion.div>
          )}

          {activeTab === "applications" && (
            <motion.div
              key="tab-applications"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.15 }}
            >
              <ApplicationsSection onSelectApplication={handleSelectApplication} />
            </motion.div>
          )}

          {activeTab === "supply-chain" && (
            <motion.div
              key="tab-supply-chain"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.15 }}
            >
              <SupplyChainSection />
            </motion.div>
          )}

          {activeTab === "gallery" && (
            <motion.div
              key="tab-gallery"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.15 }}
            >
              <GallerySection />
            </motion.div>
          )}

          {activeTab === "quotation" && (
            <motion.div
              key="tab-quotation"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.15 }}
            >
              <ProcurementSection 
                prefilledProduct={prefilledProduct}
                prefilledCategory={prefilledCategory}
                prefilledApplication={prefilledApplication}
                onClearPrefills={handleClearPrefills}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Structured contact coordinates section */}
      <section className="py-16 bg-slate-900 border-t border-slate-950 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block coordinates cards */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-display font-black text-xl text-white uppercase tracking-tight border-b border-slate-800 pb-3">
              OFFICIAL SYSTEM OFFICES
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Nigeria Office details */}
              <div className="bg-slate-950 border-2 border-cyan-500/30 p-6 rounded-md shadow-lg space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2.5">
                  <h4 className="font-display font-black text-sm uppercase tracking-wider text-cyan-400">
                    {CONTACT_INFO.nigeriaOffice.title}
                  </h4>
                  <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_#22c55e]"></span>
                </div>
                <div className="space-y-1">
                  <div className="text-sm uppercase font-black text-white">{CONTACT_INFO.nigeriaOffice.company}</div>
                  <div className="text-xs text-slate-300 font-bold">{CONTACT_INFO.nigeriaOffice.address}</div>
                </div>
                <div className="bg-slate-900/80 p-4 rounded-md border border-slate-800 space-y-3 mt-3">
                  <a href={`tel:${CONTACT_INFO.nigeriaOffice.phone}`} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-400 text-xs font-black tracking-wide uppercase">LINE 1:</span>
                    <span className="text-base font-mono font-black text-white group-hover:text-cyan-400 transition-colors tracking-widest">{CONTACT_INFO.nigeriaOffice.phone}</span>
                  </a>
                  <a href={`tel:${CONTACT_INFO.nigeriaOffice.phone2}`} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-400 text-xs font-black tracking-wide uppercase">LINE 2 (ALT):</span>
                    <span className="text-base font-mono font-black text-white group-hover:text-cyan-400 transition-colors tracking-widest">{CONTACT_INFO.nigeriaOffice.phone2}</span>
                  </a>
                </div>
              </div>

              {/* US Office liaison details */}
              <div className="bg-slate-950 border-2 border-amber-500/30 p-6 rounded-md shadow-lg space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2.5">
                  <h4 className="font-display font-black text-sm uppercase tracking-wider text-amber-400">
                    {CONTACT_INFO.houstonOffice.title}
                  </h4>
                  <span className="h-2.5 w-2.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_12px_#f59e0b]"></span>
                </div>
                <div className="space-y-1">
                  <div className="text-sm uppercase font-black text-white">Houston Coordination Desk</div>
                  <div className="text-xs text-slate-300 font-bold">{CONTACT_INFO.houstonOffice.address}</div>
                </div>
                <div className="bg-slate-900/80 p-4 rounded-md border border-slate-800 space-y-3 mt-3">
                  <a href={`tel:${CONTACT_INFO.houstonOffice.phone}`} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-400 text-xs font-black tracking-wide uppercase">US DIRECT:</span>
                    <span className="text-sm sm:text-base font-mono font-black text-white group-hover:text-amber-400 transition-colors tracking-wider">{CONTACT_INFO.houstonOffice.phone}</span>
                  </a>
                  <a href={`mailto:${CONTACT_INFO.houstonOffice.email}`} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-400 text-xs font-black tracking-wide uppercase">EMAIL DESK:</span>
                    <span className="text-xs font-mono font-black text-white group-hover:text-amber-400 transition-colors truncate pl-2">{CONTACT_INFO.houstonOffice.email}</span>
                  </a>
                </div>
              </div>

            </div>

            <div className="bg-slate-950 border border-slate-850 p-5 rounded-sm grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
                <div>
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-wide">PROCUREMENT EMAIL DESK</span>
                  <a href={`mailto:${CONTACT_INFO.generalContacts.email}`} className="text-slate-200 hover:text-cyan-400 font-bold">
                    {CONTACT_INFO.generalContacts.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
                <div>
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-wide">TECHNICAL ADVISORY PANEL</span>
                  <a href={`mailto:${CONTACT_INFO.generalContacts.technicalSupport}`} className="text-slate-200 hover:text-cyan-400 font-bold">
                    {CONTACT_INFO.generalContacts.technicalSupport}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Block static map mock rendering - Satisfies tons of pictures constraint */}
          <div className="lg:col-span-4 bg-slate-950 border border-slate-850 p-5 rounded-sm space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-300">
              Port Harcourt Depot Coordinates
            </h4>
            
            {/* Visual map rendering box */}
            <div className="h-44 bg-slate-900 border border-slate-800 rounded relative overflow-hidden flex items-center justify-center">
              {/* Complex industrial radar visual background */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
              
              {/* Concentric chemical-radar lines */}
              <div className="absolute h-36 w-36 border border-cyan-500/10 rounded-full animate-ping pointer-events-none"></div>
              <div className="absolute h-20 w-20 border border-cyan-500/20 rounded-full pointer-events-none"></div>
              <div className="absolute h-8 w-8 border border-cyan-500/30 rounded-full pointer-events-none"></div>

              {/* Focal Location pin coordinate dots */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-1">
                <span className="h-3.5 w-3.5 bg-red-500 rounded-full animate-pulse border-2 border-slate-950"></span>
                <span className="font-mono text-xs font-black text-slate-200 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                  4.8156° N, 7.0498° E
                </span>
                <span className="text-xs font-mono font-black text-cyan-400 uppercase tracking-wide">PORT HARCOURT DOCK A</span>
              </div>
            </div>

            <div className="text-xs sm:text-sm font-bold text-slate-400 leading-relaxed font-sans">
              Our central storage depot is strategically positioned inside the industrial sector of Port Harcourt, permitting expedited access to raw distribution lines and deepwater harbors.
            </div>
          </div>

        </div>
      </section>

      {/* Footer element */}
      <Footer setActiveTab={setActiveTab} openQuoteModal={openQuoteModalDirectly} />

      {/* Universal High-Fidelity Image Zoom Lightbox Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            id="global-image-zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-6 select-none"
            onClick={() => setZoomedImage(null)}
          >
            {/* Close instruction top bar */}
            <div className="w-full max-w-5xl flex justify-between items-center mb-2 text-slate-400 z-10 px-1">
              <span className="font-mono text-xs font-black text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <span className="h-2 w-2 bg-cyan-400 rounded-full animate-ping"></span>
                TAP BACKDROP OR PRESS ESC TO DISMISS
              </span>
              <button
                onClick={() => setZoomedImage(null)}
                className="h-10 w-10 bg-slate-900 border-2 border-slate-800 text-slate-300 hover:text-white flex items-center justify-center rounded-none shadow-lg transition-transform hover:scale-105 active:scale-95"
                title="Close Zoom"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Picture Frame */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full border-2 border-slate-800 bg-slate-900 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col"
              onClick={(e) => e.stopPropagation()} // stop click propagation to prevent dismissal
            >
              {/* Image View */}
              <div className="relative w-full overflow-hidden flex items-center justify-center bg-slate-950">
                <img
                  src={zoomedImage.src}
                  alt={zoomedImage.alt}
                  className="max-w-full max-h-[70vh] object-contain select-none cursor-zoom-out"
                  onClick={() => setZoomedImage(null)}
                />
              </div>

              {/* Caption Footer */}
              <div className="bg-slate-950 border-t border-slate-800 p-4 font-mono flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
                <div className="flex gap-2.5 items-center">
                  <div className="h-1.5 w-1.5 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-200 font-medium uppercase tracking-wide">
                    {zoomedImage.alt}
                  </span>
                </div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-wider">
                  OIL DROP CHEMICAL LTD • SECURED SPEC clearance
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
