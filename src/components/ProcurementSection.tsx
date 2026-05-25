import React, { useState, useEffect } from "react";
import { QuoteRequest } from "../types";
import { Send, FileText, Trash2, ClipboardList, Gauge, HelpCircle, FileCheck, CheckCircle2 } from "lucide-react";

interface ProcurementSectionProps {
  prefilledProduct: string;
  prefilledCategory: string;
  prefilledApplication: string;
  onClearPrefills: () => void;
}

export default function ProcurementSection({
  prefilledProduct,
  prefilledCategory,
  prefilledApplication,
  onClearPrefills,
}: ProcurementSectionProps) {
  // Main form states
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [productRequired, setProductRequired] = useState("");
  const [chemicalGroup, setChemicalGroup] = useState("Water Treatment Chemicals");
  const [industrialApplication, setIndustrialApplication] = useState("Industrial Water Treatment Systems");
  const [estimatedQuantity, setEstimatedQuantity] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("Metric Tons (MT)");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [requiredTimeline, setRequiredTimeline] = useState("30_Days");
  const [technicalSpecs, setTechnicalSpecs] = useState("");

  // Storage states
  const [requestHistory, setRequestHistory] = useState<QuoteRequest[]>([]);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Prefill hook
  useEffect(() => {
    if (prefilledProduct) {
      setProductRequired(prefilledProduct);
    }
    if (prefilledCategory) {
      setChemicalGroup(prefilledCategory);
    }
    if (prefilledApplication) {
      setIndustrialApplication(prefilledApplication);
    }
  }, [prefilledProduct, prefilledCategory, prefilledApplication]);

  // Load request history
  useEffect(() => {
    const historical = localStorage.getItem("odcl_quote_history");
    if (historical) {
      try {
        setRequestHistory(JSON.parse(historical));
      } catch (e) {
        console.error("Failed parsing historical quotes", e);
      }
    }
  }, []);

  const handleClearForm = () => {
    setCompanyName("");
    setContactPerson("");
    setEmail("");
    setPhone("");
    setProductRequired("");
    setEstimatedQuantity("");
    setDeliveryLocation("");
    setTechnicalSpecs("");
    onClearPrefills();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!companyName || !contactPerson || !email || !phone || !productRequired || !estimatedQuantity || !deliveryLocation) {
      alert("Please populate all mandated technical fields before submitting.");
      return;
    }

    const nextId = "REQ-OD-" + Math.floor(100000 + Math.random() * 900000);
    const newRequest: QuoteRequest = {
      id: nextId,
      companyName,
      contactPerson,
      email,
      phone,
      productRequired,
      chemicalGroup,
      industrialApplication,
      estimatedQuantity: `${estimatedQuantity} ${quantityUnit}`,
      deliveryLocation,
      requiredTimeline: requiredTimeline.replace("_", " "),
      technicalSpecs: technicalSpecs || "No specialized custom specs supplied.",
      status: "Evaluation Pending",
      createdAt: new Date().toISOString(),
    };

    const newHistory = [newRequest, ...requestHistory];
    setRequestHistory(newHistory);
    localStorage.setItem("odcl_quote_history", JSON.stringify(newHistory));

    setSubmittedId(nextId);
    handleClearForm();

    // Auto clear submission notification alert after 7 seconds
    setTimeout(() => {
      setSubmittedId(null);
    }, 7000);
  };

  const handleDeleteRequest = (id: string) => {
    const nextHistory = requestHistory.filter((item) => item.id !== id);
    setRequestHistory(nextHistory);
    localStorage.setItem("odcl_quote_history", JSON.stringify(nextHistory));
  };

  // Live Calculations (Engineering Mock Calculations)
  const quantityValue = parseFloat(estimatedQuantity) || 0;
  
  // Calculate Standard IBC Containers (approx 1 Metric Ton = 1 IBC volume check)
  const estimatedIBCPackCount = quantityValue > 0 
    ? Math.ceil(quantityValue * (quantityUnit.startsWith("Metric") ? 1.1 : 0.8)) 
    : 0;
  
  // Logistics Hazard Footprint estimate based on chemical groups
  const getHazardSpecs = () => {
    if (chemicalGroup.includes("Water")) {
      return { class: "Class 8: Corrosive Fluid", packing: "IBC Composite, UN-approved" };
    }
    if (chemicalGroup.includes("Filtration")) {
      return { class: "Class 9: Solid Non-Hazardous", packing: "Heavy PP Multi-ply Woven Bags" };
    }
    if (chemicalGroup.includes("Oil")) {
      return { class: "Class 3: Flammable Liquid / Toxic", packing: "Carbon Steel Intermediate Drums" };
    }
    return { class: "Class 8 / Class 9 Mixed Compatibility", packing: "Standard High-density Polyethylene Containers" };
  };

  const activeHazard = getHazardSpecs();

  return (
    <section id="procurement-desk" className="py-16 md:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Verification Title Block */}
        <div className="border-t-4 border-cyan-500 pt-4 mb-12">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-1">
            VERIFIED PROCUREMENT PLATFORM LAYER
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            PROCUREMENT & QUOTATION SYSTEM
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Submit technical and commercial requirements for evaluation and sourcing support. All inquiries are reviewed for technical suitability, availability, and supply feasibility.
          </p>
        </div>

        {submittedId && (
          <div className="bg-green-950/40 border-2 border-green-500/30 p-5 rounded-sm mb-8 flex items-start gap-4 animate-in fade-in duration-350">
            <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-sm text-green-300 uppercase tracking-wide">
                Specification Logged Successfully
              </h4>
              <p className="text-xs text-green-400 mt-1">
                Your technical procurement request has been allocated reference tag <strong className="font-mono">#{submittedId}</strong>. Sourcing coordinators in our Port Harcourt and Houston offices are initiating formulation matching and carrier inquiries.
              </p>
            </div>
          </div>
        )}

        {/* Form and Preview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-sm space-y-6">
            <h3 className="font-display font-black text-lg text-slate-100 uppercase tracking-normal border-b border-slate-800 pb-3 flex justify-between items-center">
              <span>Sourcing Specification Manifest</span>
              <button
                type="button"
                onClick={handleClearForm}
                className="font-mono text-[9px] text-slate-400 hover:text-cyan-400 uppercase"
              >
                CLEAR DATA
              </button>
            </h3>

            {/* Section 1: Customer Coordinates */}
            <div className="space-y-4">
              <span className="block font-mono text-[10px] text-cyan-400 uppercase tracking-wider">
                [01] CLIENT DOCK COORDINATES
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Niger Delta Refining Corp"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Engr. Chibundu Sadiq"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="procurement@corp.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Telephone Contacts *
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 803 123 4567"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Specialty Parameters */}
            <div className="space-y-4 border-t border-slate-850 pt-5">
              <span className="block font-mono text-[10px] text-cyan-400 uppercase tracking-wider">
                [02] PROCESS COMPATIBILITY PARAMETERS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Material Group Sourcing
                  </label>
                  <select
                    value={chemicalGroup}
                    onChange={(e) => setChemicalGroup(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 cursor-pointer"
                  >
                    <option>Water Treatment Chemicals</option>
                    <option>Industrial Filtration Materials</option>
                    <option>Oil & Gas Process Chemicals</option>
                    <option>Industrial Maintenance Chemicals</option>
                    <option>Custom Industrial Compound Sourcing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Target Industrial Application
                  </label>
                  <select
                    value={industrialApplication}
                    onChange={(e) => setIndustrialApplication(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 cursor-pointer"
                  >
                    <option>Oil & Gas Production and Processing</option>
                    <option>Natural Gas Processing and LNG Systems</option>
                    <option>Petrochemical and Refining Operations</option>
                    <option>Industrial Water Treatment Systems</option>
                    <option>Manufacturing and Process Industries</option>
                    <option>Environmental and Waste Treatment Systems</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Product / Material Name Required *
                  </label>
                  <input
                    type="text"
                    required
                    value={productRequired}
                    onChange={(e) => setProductRequired(e.target.value)}
                    placeholder="e.g. Triethylene Glycol (TEG) 99.5% purity"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                  {prefilledProduct && (
                    <span className="text-[10px] font-mono text-cyan-400 mt-1 block">
                      ✔ Added from product selector prefill
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Section 3: Quantity, Time, and Logistics details */}
            <div className="space-y-4 border-t border-slate-850 pt-5">
              <span className="block font-mono text-[10px] text-cyan-400 uppercase tracking-wider">
                [03] QUANTITY, ROUTING, & TIMELINES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Estimated Quantity required *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      required
                      min="1"
                      value={estimatedQuantity}
                      onChange={(e) => setEstimatedQuantity(e.target.value)}
                      placeholder="e.g. 24"
                      className="w-1/2 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                    />
                    <select
                      value={quantityUnit}
                      onChange={(e) => setQuantityUnit(e.target.value)}
                      className="w-1/2 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-2.5 py-2 text-[10px] font-mono text-slate-300 focus:outline-none cursor-pointer"
                    >
                      <option>Metric Tons (MT)</option>
                      <option>IBC Pallet Drums (1000L)</option>
                      <option>Standard Steel Barrels (200L)</option>
                      <option>Kilograms (KG)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Delivery Destination Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    placeholder="e.g. Onne Free Zone Depot, Port Harcourt"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Required Procurement Timeline
                  </label>
                  <select
                    value={requiredTimeline}
                    onChange={(e) => setRequiredTimeline(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 cursor-pointer"
                  >
                    <option value="Urgent_15_Days">Urgent (Within 15 Days)</option>
                    <option value="30_Days">Standard (30 Days)</option>
                    <option value="60_Days">Planned Logistics (60 Days+)</option>
                    <option value="Continuous_Contract">Continuous Blanket Supply Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-2 font-bold">
                    Lot Certifications Mandatory?
                  </label>
                  <div className="flex gap-4 pt-1 text-xs">
                    <label className="flex items-center gap-1.5 text-slate-300">
                      <input type="radio" defaultChecked name="coa" className="accent-cyan-500" />
                      COA Required
                    </label>
                    <label className="flex items-center gap-1.5 text-slate-300">
                      <input type="radio" name="coa" className="accent-cyan-500" />
                      REACH Compliant
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Custom Technical Specifications / Special Instructions
                  </label>
                  <textarea
                    rows={3}
                    value={technicalSpecs}
                    onChange={(e) => setTechnicalSpecs(e.target.value)}
                    placeholder="Insert analytical targets, fluid viscosity caps, or packing size tolerances..."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-white placeholder-slate-650 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors font-mono"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submission triggers */}
            <div className="pt-6 border-t border-slate-850 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-[10px] font-mono text-slate-500 max-w-sm text-center sm:text-left">
                * By clicking submit, you authorize our technical desk to draft an official commercial pricing slate based on ASTM limits.
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-450 text-slate-950 px-6 py-3.5 rounded font-display font-black text-xs tracking-widest uppercase transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                SUBMIT FOR FEASIBILITY
                <Send className="h-4 w-4" />
              </button>
            </div>

          </form>

          {/* Right Column Interactive Dynamic Blueprint Preview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dynamic Sourcing visualizer panel & estimated containers */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-sm">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-2 border-b border-slate-850 pb-2">
                <Gauge className="h-4 w-4 text-cyan-400" />
                PACKAGING & LOGISTICS ASSESSOR
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-950/80 p-3 rounded border border-slate-850">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">ESTIMATED STORAGE FOOTPRINT</span>
                    <strong className="text-sm font-display text-white">{estimatedIBCPackCount || "---"} STANDARD UNITS</strong>
                  </div>
                  <div className="text-right font-mono text-xs text-cyan-400">
                    {estimatedIBCPackCount > 0 ? "IBC MOX UNIT" : "WAITING VALUE"}
                  </div>
                </div>

                <div className="text-xs space-y-2 font-mono text-slate-400 bg-slate-950 p-4 rounded border border-slate-850/60">
                  <div className="flex justify-between border-b border-slate-900/60 pb-1.5 text-[10px]">
                    <span>REGULATORY HAZARD Class:</span>
                    <span className="text-slate-200 uppercase font-semibold">{activeHazard.class}</span>
                  </div>
                  <div className="flex justify-between pt-1.5 text-[10px]">
                    <span>RECOMMENDED CONTAINER:</span>
                    <span className="text-slate-200 uppercase text-right">{activeHazard.packing}</span>
                  </div>
                </div>

                {/* Simulated Packing graphic */}
                {estimatedIBCPackCount > 0 && (
                  <div className="bg-slate-950 border border-slate-850 rounded p-4 text-center">
                    <span className="block font-mono text-[9px] text-slate-500 uppercase mb-2">Simulated Container Consolidation</span>
                    <div className="flex flex-wrap justify-center gap-1.5 max-w-xs mx-auto">
                      {Array.from({ length: Math.min(estimatedIBCPackCount, 24) }).map((_, idx) => (
                        <div
                          key={idx}
                          className="h-4 w-4 rounded bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-[8px] font-mono text-cyan-400"
                          title="Volumetric Unit PACK"
                        >
                          U
                        </div>
                      ))}
                      {estimatedIBCPackCount > 24 && (
                        <div className="text-[10px] text-slate-500 font-mono self-center">+{estimatedIBCPackCount - 24} units</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sourcing Draft Board Sheet (Dynamic Manifest representation) */}
            <div className="bg-slate-900 border-2 border-dashed border-slate-800 p-6 rounded relative overflow-hidden">
              {/* Background circular flask watermarked design */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none scale-150">
                <svg className="h-48 w-48 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 19.5v-1l-2.6-3.8V7a1 1 0 0 0-1-1H11V3.5a1.5 1.5 0 0 0-3 0V6H8.6a1 1 0 0 0-1 1v7.7L5 18.5v1A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5z" />
                </svg>
              </div>

              {/* Watermark label */}
              <div className="absolute -right-12 top-6 rotate-45 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-10 py-1.5 text-[10px] font-mono font-bold tracking-widest uppercase">
                DRAFT FORM
              </div>

              <div className="space-y-4 relative z-10 font-mono text-xs text-slate-400">
                {/* Draft Document Header */}
                <div className="border-b border-slate-850 pb-3 text-center space-y-1">
                  <h4 className="font-display font-black text-xs text-white uppercase tracking-wider">ODCL SOURCING MEMORANDUM</h4>
                  <p className="text-[9px] text-slate-500">ISO-9011 STANDARD ROUTING PROPOSAL</p>
                </div>

                {/* Form fields representation */}
                <div className="space-y-2 text-[10px] leading-tight">
                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-850/40">
                    <span className="text-slate-500 uppercase">CLIENT REF:</span>
                    <span className="col-span-2 text-slate-200 uppercase font-semibold">{companyName || "NOT POPULATED"}</span>
                  </div>

                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-850/40">
                    <span className="text-slate-500 uppercase">CONTACT REP:</span>
                    <span className="col-span-2 text-slate-200">{contactPerson || "NOT POPULATED"}</span>
                  </div>

                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-850/40">
                    <span className="text-slate-500 uppercase">PRODUCT REQ:</span>
                    <span className="col-span-2 text-cyan-400 font-bold uppercase">{productRequired || "NOT SOURCED YET"}</span>
                  </div>

                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-850/40">
                    <span className="text-slate-500 uppercase">QTY PARAMS:</span>
                    <span className="col-span-2 text-slate-200">{estimatedQuantity ? `${estimatedQuantity} ${quantityUnit}` : "EMPTY"}</span>
                  </div>

                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-850/40">
                    <span className="text-slate-500 uppercase">ROUTING DEST:</span>
                    <span className="col-span-2 text-slate-200 uppercase">{deliveryLocation || "EMPTY DEST"}</span>
                  </div>

                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-850/40">
                    <span className="text-slate-500 uppercase">TIMELINE REG:</span>
                    <span className="col-span-2 text-slate-200 uppercase">{requiredTimeline.replace("_", " ")}</span>
                  </div>

                  <div className="py-2">
                    <span className="text-slate-500 uppercase block mb-1">SPEC NOTES:</span>
                    <p className="p-2 bg-slate-950 rounded text-slate-400 border border-slate-850/60 line-clamp-2">
                      {technicalSpecs || "Standard analytical purity thresholds required."}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-850 pt-4 flex gap-4 text-[9px] text-slate-500">
                  <div className="w-1/2">
                    <span>Approved by Desk Analyst</span>
                    <div className="h-6 border-b border-slate-800 mt-1"></div>
                  </div>
                  <div className="w-1/2">
                    <span>Houston Coord Liaison</span>
                    <div className="h-6 border-b border-slate-800 mt-1"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Local Storage Records historical ledger */}
        {requestHistory.length > 0 && (
          <div className="mt-16 bg-slate-900 border border-slate-800 p-6 rounded-sm">
            <h3 className="font-display font-black text-lg text-slate-205 uppercase tracking-wide mb-6 border-b border-slate-800 pb-3 flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-cyan-400" />
              ACTIVE CLIENT INQUIRY JOURNAL
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500 font-mono text-[10px] uppercase tracking-wider">
                    <th className="py-3 px-4">REQUEST ID</th>
                    <th className="py-3 px-4">COMPANY / PERSON</th>
                    <th className="py-3 px-4">PRODUCT SOURCED</th>
                    <th className="py-3 px-4">EST. QUANTITY</th>
                    <th className="py-3 px-4">DESTINATION DOCK</th>
                    <th className="py-3 px-4 text-center">SOURCING STATUS</th>
                    <th className="py-3 px-4 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  {requestHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-950/40 text-slate-300">
                      <td className="py-3 px-4 font-mono text-cyan-400 font-semibold">{item.id}</td>
                      <td className="py-3 px-4">
                        <span className="block font-bold text-slate-200">{item.companyName}</span>
                        <span className="text-[10px] text-slate-500">{item.contactPerson}</span>
                      </td>
                      <td className="py-3 px-4 uppercase font-mono text-[11px] text-slate-200 font-medium">
                        {item.productRequired}
                      </td>
                      <td className="py-3 px-4 text-slate-100 font-mono">{item.estimatedQuantity}</td>
                      <td className="py-3 px-4 text-slate-400 limit-table">{item.deliveryLocation}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 bg-cyan-950/80 border border-cyan-500/20 text-cyan-400 text-[9.5px] font-mono rounded-full">
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleDeleteRequest(item.id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 transition-colors cursor-pointer"
                          title="Purge Spec from Browser Session"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-right">
              <button
                onClick={() => {
                  localStorage.removeItem("odcl_quote_history");
                  setRequestHistory([]);
                }}
                className="text-[10px] font-mono text-red-400 hover:text-red-300 transition-colors uppercase cursor-pointer"
              >
                Clear Sourcing Journal History
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
