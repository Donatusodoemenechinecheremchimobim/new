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
          <span className="font-mono text-sm font-black text-cyan-400 uppercase tracking-widest block mb-1">
            REQUEST SPECIFICATIONS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            PROCUREMENT & QUOTATION SYSTEM
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-200 mt-2 max-w-2xl leading-relaxed">
            Submit your technical specs and delivery schedules. Our commercial desk in Port Harcourt and Houston will review and draft an official formulation pricing slate.
          </p>
        </div>

        {submittedId && (
          <div className="bg-green-950/40 border-2 border-green-500/30 p-5 rounded-none mb-8 flex items-start gap-4 animate-in fade-in duration-350">
            <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-black text-sm text-green-300 uppercase tracking-wide">
                Specification Logged Successfully
              </h4>
              <p className="text-sm font-bold text-green-400 mt-1">
                Your request has been logged with reference tag <strong className="font-mono">#{submittedId}</strong>. We are initiating formulation matching and shipper carrier calculations.
              </p>
            </div>
          </div>
        )}

        {/* Form and Preview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-slate-900 border-2 border-slate-800 p-6 md:p-8 rounded-none space-y-6">
            <h3 className="font-display font-black text-lg text-white uppercase tracking-wide border-b-2 border-slate-800 pb-3 flex justify-between items-center">
              <span>Sourcing Specification Manifest</span>
              <button
                type="button"
                onClick={handleClearForm}
                className="font-mono text-xs font-black text-slate-400 hover:text-cyan-400 uppercase"
              >
                CLEAR DATA
              </button>
            </h3>

            {/* Section 1: Customer Coordinates */}
            <div className="space-y-4">
              <span className="block font-mono text-xs font-black text-cyan-400 uppercase tracking-wider">
                [01] CLIENT DETAILS
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Niger Delta Refining Corp"
                    className="w-full bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-bold placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Engr. Chibundu Sadiq"
                    className="w-full bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-bold placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="procurement@corp.com"
                    className="w-full bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-bold placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Telephone Contacts *
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 803 123 4567"
                    className="w-full bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-bold placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Specialty Parameters */}
            <div className="space-y-4 border-t-2 border-slate-800 pt-5">
              <span className="block font-mono text-xs font-black text-cyan-400 uppercase tracking-wider">
                [02] PROCESS REQUIREMENT DETAILS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Material Group Sourcing
                  </label>
                  <select
                    value={chemicalGroup}
                    onChange={(e) => setChemicalGroup(e.target.value)}
                    className="w-full bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-black focus:outline-none focus:ring-2 focus:ring-cyan-500/20 cursor-pointer"
                  >
                    <option>Water Treatment Chemicals</option>
                    <option>Industrial Filtration Materials</option>
                    <option>Oil & Gas Process Chemicals</option>
                    <option>Industrial Maintenance Chemicals</option>
                    <option>Custom Industrial Compound Sourcing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Target Application
                  </label>
                  <select
                    value={industrialApplication}
                    onChange={(e) => setIndustrialApplication(e.target.value)}
                    className="w-full bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-black focus:outline-none focus:ring-2 focus:ring-cyan-500/20 cursor-pointer"
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
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Product / Material Name Required *
                  </label>
                  <input
                    type="text"
                    required
                    value={productRequired}
                    onChange={(e) => setProductRequired(e.target.value)}
                    placeholder="e.g. Triethylene Glycol (TEG) 99.5% purity"
                    className="w-full bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-bold placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                  />
                  {prefilledProduct && (
                    <span className="text-xs font-mono font-black text-cyan-400 mt-1.5 block">
                      ✔ Loaded from product selector prefill selection
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Section 3: Quantity, Time, and Logistics details */}
            <div className="space-y-4 border-t-2 border-slate-800 pt-5">
              <span className="block font-mono text-xs font-black text-cyan-400 uppercase tracking-wider">
                [03] QUANTITIES & ROUTING DESTINATIONS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Estimated Quantity Required *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      required
                      min="1"
                      value={estimatedQuantity}
                      onChange={(e) => setEstimatedQuantity(e.target.value)}
                      placeholder="e.g. 24"
                      className="w-1/2 bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-bold focus:outline-none transition-colors"
                    />
                    <select
                      value={quantityUnit}
                      onChange={(e) => setQuantityUnit(e.target.value)}
                      className="w-1/2 bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-2.5 py-3 text-xs font-mono font-black text-white focus:outline-none cursor-pointer"
                    >
                      <option>Metric Tons (MT)</option>
                      <option>IBC Pallet Drums (1000L)</option>
                      <option>Standard Steel Barrels (200L)</option>
                      <option>Kilograms (KG)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Delivery Destination *
                  </label>
                  <input
                    type="text"
                    required
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    placeholder="e.g. Onne Free Zone Depot, Port Harcourt"
                    className="w-full bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-bold placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Required Supply Timeline
                  </label>
                  <select
                    value={requiredTimeline}
                    onChange={(e) => setRequiredTimeline(e.target.value)}
                    className="w-full bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-black focus:outline-none focus:ring-2 focus:ring-cyan-500/20 cursor-pointer"
                  >
                    <option value="Urgent_15_Days">Urgent (Within 15 Days)</option>
                    <option value="30_Days">Standard (30 Days)</option>
                    <option value="60_Days">Planned Logistics (60 Days+)</option>
                    <option value="Continuous_Contract">Continuous Blanket Supply Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-3">
                    Requisition Certifications
                  </label>
                  <div className="flex gap-4 pt-1.5 text-sm font-bold">
                    <label className="flex items-center gap-1.5 text-slate-200">
                      <input type="radio" defaultChecked name="coa" className="accent-cyan-500 scale-110" />
                      COA Required
                    </label>
                    <label className="flex items-center gap-1.5 text-slate-200">
                      <input type="radio" name="coa" className="accent-cyan-500 scale-110" />
                      REACH Compliant
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono font-black text-slate-350 uppercase mb-2">
                    Special Specifications / Instructions
                  </label>
                  <textarea
                    rows={3}
                    value={technicalSpecs}
                    onChange={(e) => setTechnicalSpecs(e.target.value)}
                    placeholder="Specify viscosity limits, packaging sizes, purity, or ASTM standards..."
                    className="w-full bg-slate-950 border-2 border-slate-800 focus:border-cyan-500 rounded-none px-3.5 py-3 text-sm text-white font-bold placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors font-mono"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submission triggers */}
            <div className="pt-6 border-t-2 border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xs font-mono font-bold text-slate-400 max-w-sm text-center sm:text-left">
                * Our technical team will generate a pricing proposal matching industrial standards.
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-none font-display font-black text-sm tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-95"
              >
                SUBMIT SPECIFICATION
                <Send className="h-4.5 w-4.5 stroke-[2.5]" />
              </button>
            </div>

          </form>

          {/* Right Column Interactive Dynamic Blueprint Preview */}
          <div className="lg:col-span-5 space-y-6">
                       {/* Dynamic Sourcing visualizer panel & estimated containers */}
            <div className="bg-slate-900 border-2 border-slate-800 p-5 rounded-none">
              <h4 className="font-display font-black text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2 border-b-2 border-slate-800 pb-3">
                <Gauge className="h-5 w-5 text-cyan-400 shrink-0" />
                PACKAGING & LOGISTICS ASSESSOR
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-950 p-4 border-2 border-slate-800">
                  <div>
                    <span className="block text-xs font-mono font-bold text-slate-400 uppercase">ESTIMATED STORAGE FOOTPRINT</span>
                    <strong className="text-base font-display font-black text-white">{estimatedIBCPackCount || "0"} STANDARD UNITS</strong>
                  </div>
                  <div className="text-right font-mono text-xs font-black text-cyan-400">
                    {estimatedIBCPackCount > 0 ? "IBC UNITS DETECTED" : "NO VALUE LOADED"}
                  </div>
                </div>

                <div className="text-xs space-y-2 font-mono font-bold text-slate-300 bg-slate-950 p-4 border-2 border-slate-800">
                  <div className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="text-slate-400 font-black">REGULATORY HAZARD:</span>
                    <span className="text-slate-200 uppercase font-black">{activeHazard.class}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-400 font-black">PACKING STANDARD:</span>
                    <span className="text-slate-200 uppercase font-black text-right">{activeHazard.packing}</span>
                  </div>
                </div>

                {/* Simulated Packing graphic */}
                {estimatedIBCPackCount > 0 && (
                  <div className="bg-slate-950 border-2 border-slate-800 p-4 text-center">
                    <span className="block font-mono text-xs font-black text-slate-400 mb-2">Simulated Container Consolidation</span>
                    <div className="flex flex-wrap justify-center gap-1.5 max-w-xs mx-auto">
                      {Array.from({ length: Math.min(estimatedIBCPackCount, 24) }).map((_, idx) => (
                        <div
                          key={idx}
                          className="h-5 w-5 bg-cyan-950 border border-cyan-550 flex items-center justify-center text-[10px] font-mono font-black text-cyan-400"
                          title="Volumetric Unit PACK"
                        >
                          U
                        </div>
                      ))}
                      {estimatedIBCPackCount > 24 && (
                        <div className="text-xs font-black text-slate-400 self-center font-mono">+{estimatedIBCPackCount - 24} Units</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sourcing Draft Board Sheet (Dynamic Manifest representation) */}
            <div className="bg-slate-900 border-2 border-dashed border-slate-700 p-6 rounded-none relative overflow-hidden">
              {/* Background circular flask watermarked design */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none scale-150">
                <svg className="h-48 w-48 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 19.5v-1l-2.6-3.8V7a1 1 0 0 0-1-1H11V3.5a1.5 1.5 0 0 0-3 0V6H8.6a1 1 0 0 0-1 1v7.7L5 18.5v1A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5z" />
                </svg>
              </div>

              {/* Watermark label */}
              <div className="absolute -right-12 top-6 rotate-45 bg-amber-500/10 text-amber-500 border-2 border-amber-500/20 px-10 py-1.5 text-xs font-mono font-black tracking-widest uppercase">
                SPECIFICATION SHEET
              </div>

              <div className="space-y-4 relative z-10 font-mono text-xs text-slate-300">
                {/* Draft Document Header */}
                <div className="border-b border-slate-800 pb-3 text-center space-y-1">
                  <h4 className="font-display font-black text-sm text-white uppercase tracking-wider">ODCL SOURCING PROPOSAL</h4>
                  <p className="text-xs font-black text-slate-500">STANDARD SUPPLY CHAIN LOGISTICS PROTOCOL</p>
                </div>

                {/* Form fields representation */}
                <div className="space-y-3 text-xs font-bold leading-normal">
                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-450 uppercase font-black">CLIENT REF:</span>
                    <span className="col-span-2 text-white uppercase font-black">{companyName || "NOT PROVIDED"}</span>
                  </div>

                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-455 uppercase font-black">CONTACT REP:</span>
                    <span className="col-span-2 text-slate-200 uppercase font-black">{contactPerson || "NOT PROVIDED"}</span>
                  </div>

                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-450 uppercase font-black">PRODUCT REQ:</span>
                    <span className="col-span-2 text-cyan-400 font-black uppercase">{productRequired || "PENDING PRODUCT SOURCING"}</span>
                  </div>

                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-450 uppercase font-black">QTY PARAMS:</span>
                    <span className="col-span-2 text-slate-200 font-black">{estimatedQuantity ? `${estimatedQuantity} ${quantityUnit}` : "NOT CHOSEN"}</span>
                  </div>

                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-450 uppercase font-black">DESTINATION:</span>
                    <span className="col-span-2 text-white uppercase font-black">{deliveryLocation || "NO LOCATION SPECIFIED"}</span>
                  </div>

                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-450 uppercase font-black">TIMELINE:</span>
                    <span className="col-span-2 text-slate-200 uppercase font-black">{requiredTimeline.replace("_", " ")}</span>
                  </div>

                  <div className="py-2">
                    <span className="text-slate-450 uppercase font-black block mb-1.5">SPECIAL LOG NOTES:</span>
                    <p className="p-3 bg-slate-950 rounded-none text-slate-300 font-medium font-mono border border-slate-800 leading-relaxed">
                      {technicalSpecs || "Standard analytical purity thresholds required."}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4 flex gap-4 text-xs font-black text-slate-450">
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
          <div className="mt-16 bg-slate-900 border-2 border-slate-800 p-6 rounded-none">
            <h3 className="font-display font-black text-xl text-white uppercase tracking-wide mb-6 border-b-2 border-slate-800 pb-4 flex items-center gap-2">
              <ClipboardList className="h-5.5 w-5.5 text-cyan-400" />
              ACTIVE CLIENT INQUIRY JOURNAL
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b-2 border-slate-800 text-slate-200 font-mono text-xs font-black uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-black">REQUEST ID</th>
                    <th className="py-3.5 px-4 font-black">COMPANY / PERSON</th>
                    <th className="py-3.5 px-4 font-black">PRODUCT SOURCED</th>
                    <th className="py-3.5 px-4 font-black">EST. QUANTITY</th>
                    <th className="py-3.5 px-4 font-black">DESTINATION DOCK</th>
                    <th className="py-3.5 px-4 text-center font-black">SOURCING STATUS</th>
                    <th className="py-3.5 px-4 text-right font-black">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-slate-800/80">
                  {requestHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-950/50 text-slate-200 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-cyan-400 font-black text-xs">{item.id}</td>
                      <td className="py-3.5 px-4">
                        <span className="block font-black text-sm text-white uppercase tracking-wide">{item.companyName}</span>
                        <span className="text-xs font-bold text-slate-400 block mt-0.5">{item.contactPerson}</span>
                      </td>
                      <td className="py-3.5 px-4 uppercase font-mono text-xs text-white font-black">
                        {item.productRequired}
                      </td>
                      <td className="py-3.5 px-4 text-white font-mono font-black text-xs">{item.estimatedQuantity}</td>
                      <td className="py-3.5 px-4 text-slate-305 font-bold text-xs">{item.deliveryLocation}</td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-3 py-1 bg-slate-950 border-2 border-cyan-500 text-cyan-400 text-xs font-mono font-black rounded-none uppercase animate-pulse">
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDeleteRequest(item.id)}
                          className="p-1.5 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                          title="Purge Spec from Browser Session"
                        >
                          <Trash2 className="h-4.5 w-4.5 stroke-[2.5]" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => {
                  localStorage.removeItem("odcl_quote_history");
                  setRequestHistory([]);
                }}
                className="text-xs font-mono font-black text-red-400 hover:text-red-300 transition-colors uppercase cursor-pointer"
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
