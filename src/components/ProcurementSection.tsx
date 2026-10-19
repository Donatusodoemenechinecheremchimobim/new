import React, { useState, useEffect } from "react";
import { QuoteRequest } from "../types";
import { Send, FileText, Trash2, ClipboardList, Gauge, CheckCircle2, ShieldCheck, HelpCircle, PackageCheck, AlertCircle, Building2 } from "lucide-react";

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
      alert("Please populate all required fields before submitting your RFQ.");
      return;
    }

    const nextId = "RFQ-OD-" + Math.floor(100000 + Math.random() * 900000);
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
      technicalSpecs: technicalSpecs || "Standard analytical purity and batch COA required.",
      status: "Evaluation Pending",
      createdAt: new Date().toISOString(),
    };

    const newHistory = [newRequest, ...requestHistory];
    setRequestHistory(newHistory);
    localStorage.setItem("odcl_quote_history", JSON.stringify(newHistory));

    setSubmittedId(nextId);
    handleClearForm();

    setTimeout(() => {
      setSubmittedId(null);
    }, 8000);
  };

  const handleDeleteRequest = (id: string) => {
    const nextHistory = requestHistory.filter((item) => item.id !== id);
    setRequestHistory(nextHistory);
    localStorage.setItem("odcl_quote_history", JSON.stringify(nextHistory));
  };

  const quantityValue = parseFloat(estimatedQuantity) || 0;
  
  // Calculate Standard IBC or drum pack units
  const estimatedUnits = quantityValue > 0 
    ? Math.ceil(quantityValue * (quantityUnit.startsWith("Metric") ? 1.05 : 0.85)) 
    : 0;

  return (
    <section id="procurement-desk" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="h-4 w-4" />
            <span>Commercial & Technical RFQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
            Procurement Desk & <br />
            <span className="text-amber-500">Request For Quotation (RFQ)</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-sans">
            Submit your material specifications, required packaging, and delivery schedule. Our technical team in Port Harcourt and Houston will review availability, calculate landed logistics, and provide a formal quotation.
          </p>
        </div>

        {submittedId && (
          <div className="bg-emerald-950/60 border border-emerald-500/40 p-5 rounded-lg mb-8 flex items-start gap-4 animate-in fade-in duration-300">
            <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-base text-emerald-300 uppercase">
                RFQ Submitted Successfully
              </h4>
              <p className="text-sm text-slate-300 mt-1">
                Your quotation request has been logged under reference tag <strong className="font-mono text-emerald-300">#{submittedId}</strong>. Our commercial sourcing desk is initiating batch verification and landed freight calculations.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* RFQ Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-lg space-y-6 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h3 className="font-display font-bold text-lg text-white uppercase">
                Material Requisition Parameters
              </h3>
              <button
                type="button"
                onClick={handleClearForm}
                className="text-xs font-bold text-slate-400 hover:text-amber-400 uppercase transition-colors"
              >
                Reset Form
              </button>
            </div>

            {/* Section 1: Client Details */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                01. Company & Contact Information
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. NLNG / TotalEnergies / Seplat"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Contact Person & Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Engr. T. Balogun, Lead Chemist"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="procurement@company.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 803 000 0000"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Technical Specifications */}
            <div className="space-y-4 border-t border-slate-800 pt-5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                02. Chemical Formulation & Industry Requirements
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Product Category
                  </label>
                  <select
                    value={chemicalGroup}
                    onChange={(e) => setChemicalGroup(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3 py-2.5 text-sm text-white focus:outline-none cursor-pointer"
                  >
                    <option>Water Treatment Chemicals</option>
                    <option>Industrial Filtration Materials</option>
                    <option>Oil & Gas Process Chemicals</option>
                    <option>Industrial Maintenance Chemicals</option>
                    <option>Custom Industrial Compound Sourcing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Operating Industry / Application
                  </label>
                  <select
                    value={industrialApplication}
                    onChange={(e) => setIndustrialApplication(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3 py-2.5 text-sm text-white focus:outline-none cursor-pointer"
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
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Product / Material Name Required *
                  </label>
                  <input
                    type="text"
                    required
                    value={productRequired}
                    onChange={(e) => setProductRequired(e.target.value)}
                    placeholder="e.g. Triethylene Glycol (TEG) 99.5% or Molecular Sieve 4A"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                  {prefilledProduct && (
                    <span className="text-xs text-amber-400 mt-1 block">
                      ✔ Automatically populated from catalog selection
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Section 3: Quantity & Delivery */}
            <div className="space-y-4 border-t border-slate-800 pt-5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                03. Volume & Logistics Specifications
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Estimated Quantity *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      required
                      min="1"
                      value={estimatedQuantity}
                      onChange={(e) => setEstimatedQuantity(e.target.value)}
                      placeholder="e.g. 20"
                      className="w-1/2 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3 py-2 text-sm text-white focus:outline-none"
                    />
                    <select
                      value={quantityUnit}
                      onChange={(e) => setQuantityUnit(e.target.value)}
                      className="w-1/2 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-2 py-2 text-xs text-white focus:outline-none cursor-pointer"
                    >
                      <option>Metric Tons (MT)</option>
                      <option>IBC Totes (1000L)</option>
                      <option>Steel Drums (200L / 210L)</option>
                      <option>25kg Bags / Super Sacks</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Delivery Destination / Port *
                  </label>
                  <input
                    type="text"
                    required
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    placeholder="e.g. Port Harcourt Depot / Onne Port"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Required Delivery Timeline
                  </label>
                  <select
                    value={requiredTimeline}
                    onChange={(e) => setRequiredTimeline(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3 py-2.5 text-sm text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Urgent_15_Days">Urgent (Within 15 Days - Staged Inventory)</option>
                    <option value="30_Days">Standard (30 Days)</option>
                    <option value="60_Days">Scheduled Project Turnaround (60 Days+)</option>
                    <option value="Continuous_Contract">Long-Term Annual Blanket Supply</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Quality Assurance Documentation
                  </label>
                  <div className="flex gap-4 pt-1 text-xs text-slate-300">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-amber-500" />
                      COA Required
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-amber-500" />
                      TDS & MSDS
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Special Specifications / Operating Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={technicalSpecs}
                    onChange={(e) => setTechnicalSpecs(e.target.value)}
                    placeholder="Provide specific ASTM criteria, density, active ingredient percentage, or unique site access protocols..."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors font-sans"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submission Action */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xs text-slate-400">
                All requests receive formal commercial review within 24–48 hours.
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-3.5 rounded font-display font-black text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                SUBMIT RFQ SPECIFICATION
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Right Column: Interactive Requisition Preview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Logistics Footprint */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg space-y-4">
              <h4 className="font-display font-bold text-sm uppercase text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Gauge className="h-4 w-4 text-amber-500" />
                Packaging & Sourcing Estimation
              </h4>

              <div className="bg-slate-950 p-4 rounded border border-slate-850 flex justify-between items-center">
                <div>
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase">Estimated Handling Units:</span>
                  <span className="text-lg font-display font-bold text-white">
                    {estimatedUnits > 0 ? `${estimatedUnits} Packaging Units` : "Enter quantity for estimate"}
                  </span>
                </div>
                <PackageCheck className="h-6 w-6 text-amber-400" />
              </div>

              <div className="bg-slate-950 p-4 rounded border border-slate-850 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Category:</span>
                  <span className="text-slate-200 font-semibold">{chemicalGroup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Lead Sourcing Node:</span>
                  <span className="text-amber-400 font-semibold">Houston OEM Desk / PH Hub</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Quality Standard:</span>
                  <span className="text-emerald-400 font-semibold">100% COA Batch-Matched</span>
                </div>
              </div>
            </div>

            {/* Spec Sheet Watermark Preview */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">ODCL COMMERCIAL DESK</span>
                  <h5 className="text-sm font-display font-bold text-white uppercase">Requisition Summary</h5>
                </div>
                <span className="text-[10px] bg-slate-950 border border-slate-700 text-slate-400 px-2 py-1 rounded">
                  DRAFT SPEC
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 font-sans">
                <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                  <span className="text-slate-400">Requester:</span>
                  <span className="text-white font-semibold">{companyName || "—"}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                  <span className="text-slate-400">Contact:</span>
                  <span className="text-slate-200">{contactPerson || "—"}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                  <span className="text-slate-400">Chemical Required:</span>
                  <span className="text-amber-400 font-semibold">{productRequired || "—"}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                  <span className="text-slate-400">Volume:</span>
                  <span className="text-white">{estimatedQuantity ? `${estimatedQuantity} ${quantityUnit}` : "—"}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                  <span className="text-slate-400">Delivery Node:</span>
                  <span className="text-white">{deliveryLocation || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Timeline:</span>
                  <span className="text-slate-200">{requiredTimeline.replace("_", " ")}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Local Requisition Log for User Reference */}
        {requestHistory.length > 0 && (
          <div className="mt-16 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-lg">
            <h3 className="font-display font-bold text-xl text-white uppercase mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
              <ClipboardList className="h-5 w-5 text-amber-500" />
              Active Client Requisition History ({requestHistory.length})
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
                    <th className="py-3 px-4">RFQ Ref</th>
                    <th className="py-3 px-4">Company</th>
                    <th className="py-3 px-4">Material Required</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Destination</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {requestHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-950/40 text-slate-300 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-amber-400 font-bold">{item.id}</td>
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-white block">{item.companyName}</span>
                        <span className="text-[11px] text-slate-400">{item.contactPerson}</span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-white">{item.productRequired}</td>
                      <td className="py-3.5 px-4">{item.estimatedQuantity}</td>
                      <td className="py-3.5 px-4">{item.deliveryLocation}</td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded text-[11px] font-semibold">
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDeleteRequest(item.id)}
                          className="text-slate-400 hover:text-red-400 transition-colors p-1"
                          title="Remove from history"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
