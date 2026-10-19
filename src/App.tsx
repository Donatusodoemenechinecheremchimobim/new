import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CapabilitiesSection from "./components/CapabilitiesSection";
import InfrastructureSection from "./components/InfrastructureSection";
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
  ArrowRight,
  Globe,
  Award,
  CheckCircle2,
  Warehouse,
  ChevronRight,
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
          alt: img.getAttribute("alt") || "Industrial Sourcing Asset"
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
    setPrefilledApplication("");
    setActiveTab("quotation");
  };

  const handleSelectApplication = (appName: string) => {
    setPrefilledApplication(appName);
    setPrefilledProduct("");
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
    <div id="odcl-app-root" className="min-h-screen bg-slate-950 flex flex-col text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden w-full max-w-full relative">
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-0"
            >
              {/* Hero header carousel */}
              <Hero 
                onQuoteClick={openQuoteModalDirectly} 
                onExploreProducts={() => setActiveTab("products")}
              />

              {/* Core Operating Model / Clean Industrial Value Section */}
              <section className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800 text-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Corporate Value Proposition */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Industrial Supply Integrity</span>
                    </div>
                    
                    <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight">
                      Direct OEM Sourcing & <br />
                      <span className="text-amber-500">Technical Distribution</span>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                      Oil Drop Chemical Ltd bridges international chemical synthesis plants with African industrial processing facilities. We eliminate supply disruptions, verify batch chemistries, and manage port-to-plant haulage with certified manufacturer documentation.
                    </p>

                    {/* Operational Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-sm uppercase">
                          <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                          <span>Direct Sourcing</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          Direct procurement from primary manufacturers in the US Gulf Coast, Europe, and Asia.
                        </p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-sm uppercase">
                          <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                          <span>Batch Purity Testing</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          Strict QA/QC with lot-specific Certificates of Analysis (COA) and sample validation.
                        </p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-sm uppercase">
                          <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                          <span>Strategic Warehousing</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          Stockpiled buffer inventory in Port Harcourt ready for plant turnaround dispatch.
                        </p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-sm uppercase">
                          <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                          <span>Landed Logistics</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          Customs clearance, port transit, and escorted fleet haulage directly to client sites.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <button
                        onClick={() => setActiveTab("capabilities")}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded text-xs font-display font-black tracking-wider uppercase transition-all cursor-pointer shadow"
                      >
                        EXPLORE FULL CAPABILITIES
                      </button>
                      <button
                        onClick={() => setActiveTab("infrastructure")}
                        className="bg-slate-950 hover:bg-slate-850 text-slate-200 border border-slate-700 px-6 py-3 rounded text-xs font-display font-bold tracking-wider uppercase transition-all cursor-pointer"
                      >
                        VIEW PHYSICAL FACILITIES
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Physical Facility Photo Showcase */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                    <div className="col-span-2 relative h-56 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 shadow-xl group cursor-pointer">
                      <img
                        src={IMAGES.bulkStock}
                        alt="Port Harcourt chemical staging inventory"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                      <span className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur border border-slate-700 text-amber-400 px-2.5 py-1 rounded text-xs font-bold uppercase">
                        Port Harcourt Staging Inventory
                      </span>
                    </div>

                    <div className="relative h-40 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 shadow-lg group cursor-pointer">
                      <img
                        src={IMAGES.imgWA0007}
                        alt="QA/QC Laboratory Testing"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                      <span className="absolute bottom-2 left-2 bg-slate-950/85 backdrop-blur border border-slate-700 text-white px-2 py-0.5 rounded text-[11px] font-bold uppercase">
                        QA Analysis Station
                      </span>
                    </div>

                    <div className="relative h-40 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 shadow-lg group cursor-pointer">
                      <img
                        src={IMAGES.sievedDesiccant}
                        alt="Sieved Desiccant Media"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                      <span className="absolute bottom-2 left-2 bg-slate-950/85 backdrop-blur border border-slate-700 text-white px-2 py-0.5 rounded text-[11px] font-bold uppercase">
                        Sieved Adsorbent Media
                      </span>
                    </div>
                  </div>

                </div>
              </section>

              {/* Capabilities Overview Section */}
              <CapabilitiesSection onQuoteClick={openQuoteModalDirectly} />

              {/* Infrastructure Section */}
              <InfrastructureSection onQuoteClick={openQuoteModalDirectly} />

              {/* Industries We Power Section */}
              <ApplicationsSection onSelectApplication={handleSelectApplication} />

              {/* Sourcing Hubs Overview (Nigeria & Houston) */}
              <section className="py-16 lg:py-24 bg-slate-950 text-slate-200 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  <div className="max-w-3xl mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                      <Globe className="h-4 w-4" />
                      <span>Trans-Atlantic Presence</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
                      Dual-Continent Operating Structure
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 mt-2 font-sans">
                      Our international presence pairs high-volume contracting at the global manufacturing source with agile on-the-ground execution in Africa.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    
                    {/* Nigeria Operations Hub */}
                    <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-lg flex flex-col justify-between shadow-xl">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="h-10 w-10 bg-amber-500/10 border border-amber-500/30 rounded flex items-center justify-center text-amber-400 font-bold text-xs uppercase">
                            NGA
                          </div>
                          <span className="text-xs font-bold text-slate-400 uppercase">Africa Operations Hub</span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-white uppercase">
                          Port Harcourt Logistics Terminal
                        </h3>
                        <p className="text-sm text-slate-300 font-sans leading-relaxed">
                          Serves as our primary reception and staging facility. Manages bonded stockpiles, custom lot re-packaging, local QA verification, and rapid-dispatch road haulage directly to refinery complexes and oilfields across the Niger Delta.
                        </p>
                      </div>
                      
                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-lg text-xs font-sans text-slate-300 mt-8 space-y-1">
                        <strong className="block text-amber-400 uppercase font-semibold">Strategic Access:</strong>
                        Port Harcourt Logistics Terminal • Onne Port Customs Corridor • Rapid Dispatch Fleet
                      </div>
                    </div>

                    {/* Houston Procurement Desk */}
                    <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-lg flex flex-col justify-between shadow-xl">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="h-10 w-10 bg-sky-500/10 border border-sky-500/30 rounded flex items-center justify-center text-sky-400 font-bold text-xs uppercase">
                            USA
                          </div>
                          <span className="text-xs font-bold text-slate-400 uppercase">Global Sourcing Desk</span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-white uppercase">
                          Houston Sourcing Liaison Desk
                        </h3>
                        <p className="text-sm text-slate-300 font-sans leading-relaxed">
                          Located in the heart of the global energy and chemical corridor in Texas. Interfaces directly with primary chemical synthesizers across the Americas, Western Europe, and Asia for volume contracting, manufacturer COA validation, and ocean container consolidation.
                        </p>
                      </div>

                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-lg text-xs font-sans text-slate-300 mt-8 space-y-1">
                        <strong className="block text-sky-400 uppercase font-semibold">Global Reach:</strong>
                        US Gulf Coast Synthesizers • Rotterdam Chemical Terminals • Direct Ocean Manifests
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Fast Quote Banner */}
              <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16 text-center border-b border-slate-800">
                <div className="max-w-4xl mx-auto px-4 space-y-4">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    Require Certified Process Chemicals for Your Plant?
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
                    Submit your material specifications, required purity grades, and delivery schedule. Our technical team in Port Harcourt and Houston will evaluate global inventory and issue a landed proposal.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveTab("quotation")}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-display font-black text-xs tracking-wider uppercase px-8 py-3.5 rounded cursor-pointer transition-all shadow-lg"
                    >
                      REQUEST COMMERCIAL RFQ
                    </button>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {activeTab === "capabilities" && (
            <motion.div
              key="tab-capabilities"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <CapabilitiesSection onQuoteClick={openQuoteModalDirectly} />
            </motion.div>
          )}

          {activeTab === "infrastructure" && (
            <motion.div
              key="tab-infrastructure"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <InfrastructureSection onQuoteClick={openQuoteModalDirectly} />
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div
              key="tab-about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <AboutSection />
            </motion.div>
          )}

          {activeTab === "products" && (
            <motion.div
              key="tab-products"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <ProductsSection onSelectItemForQuote={handleSelectItemForQuote} />
            </motion.div>
          )}

          {activeTab === "applications" && (
            <motion.div
              key="tab-applications"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <ApplicationsSection onSelectApplication={handleSelectApplication} />
            </motion.div>
          )}

          {activeTab === "supply-chain" && (
            <motion.div
              key="tab-supply-chain"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <SupplyChainSection onQuoteClick={openQuoteModalDirectly} />
            </motion.div>
          )}

          {activeTab === "gallery" && (
            <motion.div
              key="tab-gallery"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <GallerySection />
            </motion.div>
          )}

          {activeTab === "quotation" && (
            <motion.div
              key="tab-quotation"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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

      {/* Corporate Contact Coordinates Section */}
      <section className="py-16 lg:py-24 bg-slate-900 border-t border-slate-800 font-sans text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Operating Office Cards */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-display font-bold text-xl text-white uppercase">
                Operating Offices & Contact Desks
              </h3>
              <span className="text-xs text-amber-400 font-semibold uppercase">
                Direct Inquiries Welcome
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Nigeria Office details */}
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg shadow-xl space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <h4 className="font-display font-bold text-sm uppercase text-amber-400">
                    {CONTACT_INFO.nigeriaOffice.title}
                  </h4>
                  <span className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                </div>
                <div className="space-y-1">
                  <div className="text-sm uppercase font-bold text-white">{CONTACT_INFO.nigeriaOffice.company}</div>
                  <div className="text-xs text-slate-300 font-sans leading-relaxed">{CONTACT_INFO.nigeriaOffice.address}</div>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-slate-850 space-y-2 mt-3">
                  <a href={`tel:${CONTACT_INFO.nigeriaOffice.phone}`} className="flex justify-between items-center group cursor-pointer text-xs">
                    <span className="text-slate-400 uppercase font-semibold">Phone:</span>
                    <span className="font-mono font-bold text-white group-hover:text-amber-400 transition-colors">{CONTACT_INFO.nigeriaOffice.phone}</span>
                  </a>
                  {CONTACT_INFO.nigeriaOffice.phone2 && (
                    <a href={`tel:${CONTACT_INFO.nigeriaOffice.phone2}`} className="flex justify-between items-center group cursor-pointer text-xs">
                      <span className="text-slate-400 uppercase font-semibold">Alt Line:</span>
                      <span className="font-mono font-bold text-white group-hover:text-amber-400 transition-colors">{CONTACT_INFO.nigeriaOffice.phone2}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* US Office liaison details */}
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg shadow-xl space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <h4 className="font-display font-bold text-sm uppercase text-sky-400">
                    {CONTACT_INFO.houstonOffice.title}
                  </h4>
                  <span className="h-2.5 w-2.5 bg-sky-500 rounded-full animate-pulse"></span>
                </div>
                <div className="space-y-1">
                  <div className="text-sm uppercase font-bold text-white">Houston Liaison Desk</div>
                  <div className="text-xs text-slate-300 font-sans leading-relaxed">Houston, Texas, United States</div>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-slate-850 space-y-2 mt-3">
                  <a href={`tel:${CONTACT_INFO.houstonOffice.phone}`} className="flex justify-between items-center group cursor-pointer text-xs">
                    <span className="text-slate-400 uppercase font-semibold">US Direct:</span>
                    <span className="font-mono font-bold text-white group-hover:text-sky-400 transition-colors">{CONTACT_INFO.houstonOffice.phone}</span>
                  </a>
                  <a href={`mailto:${CONTACT_INFO.houstonOffice.email}`} className="flex justify-between items-center group cursor-pointer text-xs">
                    <span className="text-slate-400 uppercase font-semibold">Email:</span>
                    <span className="font-mono font-bold text-white group-hover:text-sky-400 transition-colors truncate pl-2">{CONTACT_INFO.houstonOffice.email}</span>
                  </a>
                </div>
              </div>

            </div>

            <div className="bg-slate-950 border border-slate-850 p-5 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400 shrink-0" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase">Commercial & Procurement</span>
                  <a href={`mailto:${CONTACT_INFO.generalContacts.email}`} className="text-white hover:text-amber-400 font-bold">
                    {CONTACT_INFO.generalContacts.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400 shrink-0" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase">Technical Support & QA</span>
                  <a href={`mailto:${CONTACT_INFO.generalContacts.technicalSupport}`} className="text-white hover:text-amber-400 font-bold">
                    {CONTACT_INFO.generalContacts.technicalSupport}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Port Harcourt Terminal Hub */}
          <div className="lg:col-span-4 bg-slate-950 border border-slate-800 p-6 rounded-lg space-y-4 shadow-xl flex flex-col justify-between">
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-2">
                Port Harcourt Distribution Hub
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Our central storage and staging terminal is strategically situated in the Port Harcourt industrial district with bonded corridor access to Onne Port.
              </p>
            </div>
            
            {/* Visual location card */}
            <div className="h-44 bg-slate-900 border border-slate-800 rounded relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:14px_14px] opacity-30"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-1.5 p-4">
                <MapPin className="h-6 w-6 text-amber-500 animate-bounce" />
                <span className="font-mono text-xs font-bold text-white bg-slate-950 px-3 py-1 rounded border border-slate-800">
                  4.8156° N, 7.0498° E
                </span>
                <span className="text-xs font-bold text-amber-400 uppercase">
                  Port Harcourt Logistics Hub
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-sans">
              Bonded storage, temperature-controlled staging, and heavy road freight loading docks.
            </div>
          </div>

        </div>
      </section>

      {/* Footer element */}
      <Footer setActiveTab={setActiveTab} openQuoteModal={openQuoteModalDirectly} />

      {/* Universal Image Zoom Lightbox Modal */}
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
            {/* Close top bar */}
            <div className="w-full max-w-5xl flex justify-between items-center mb-3 text-slate-400 z-10 px-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <span className="h-2 w-2 bg-amber-400 rounded-full animate-ping"></span>
                Click backdrop or press ESC to dismiss
              </span>
              <button
                onClick={() => setZoomedImage(null)}
                className="h-9 w-9 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
                title="Close Zoom"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Picture Frame */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full border border-slate-800 bg-slate-900 shadow-2xl rounded-lg overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full overflow-hidden flex items-center justify-center bg-slate-950">
                <img
                  src={zoomedImage.src}
                  alt={zoomedImage.alt}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] object-contain select-none cursor-zoom-out"
                  onClick={() => setZoomedImage(null)}
                />
              </div>

              <div className="bg-slate-950 border-t border-slate-800 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
                <div className="flex gap-2 items-center">
                  <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-200 font-semibold">
                    {zoomedImage.alt}
                  </span>
                </div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Oil Drop Chemical Ltd • Verified Asset
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
