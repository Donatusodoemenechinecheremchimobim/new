import React from "react";
import { ShieldCheck, MapPin, Mail, Phone, ChevronRight, ArrowUpRight, Building2, Globe } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openQuoteModal: () => void;
}

export default function Footer({ setActiveTab, openQuoteModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 font-sans mt-auto">
      {/* Upper Footer: Strategic Index */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              <svg className="h-5 w-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <span className="font-display font-black tracking-tight text-white uppercase text-lg">
              OILDROP <span className="text-amber-500">CHEMICAL</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Oil Drop Chemical Ltd is a specialized industrial chemical procurement partner and technical distributor supplying upstream oil & gas, LNG processing, refinery complexes, and manufacturing facilities across Africa.
          </p>
          <div className="pt-2">
            <button
              onClick={openQuoteModal}
              className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider cursor-pointer"
            >
              <span>Submit Commercial RFQ</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Product Catalog Links */}
        <div>
          <h4 className="font-display font-bold text-xs tracking-wider text-white uppercase mb-4 border-b border-slate-800 pb-2">
            Chemical Portfolios
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {[
              { id: "products", name: "Oil & Gas Process Chemicals" },
              { id: "products", name: "Molecular Sieves & Adsorbents" },
              { id: "products", name: "Water Treatment Formulations" },
              { id: "products", name: "Industrial Descaling & Cleaning" },
              { id: "capabilities", name: "Analytical Testing & QA Services" },
            ].map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className="hover:text-amber-400 flex items-center gap-1.5 transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="h-3 w-3 text-amber-500" />
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sector Solutions */}
        <div>
          <h4 className="font-display font-bold text-xs tracking-wider text-white uppercase mb-4 border-b border-slate-800 pb-2">
            Industries Served
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {[
              "Natural Gas Dehydration & LNG",
              "Crude Refining & Petrochemicals",
              "Thermal Power Generation",
              "Heavy Manufacturing & Steel",
              "Municipal & Industrial Effluent",
            ].map((sector, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-amber-500 rounded-full shrink-0"></span>
                <span>{sector}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Operational Locations */}
        <div>
          <h4 className="font-display font-bold text-xs tracking-wider text-white uppercase mb-4 border-b border-slate-800 pb-2">
            Operating Locations
          </h4>
          <div className="space-y-4 text-xs text-slate-300">
            <div className="flex gap-2.5">
              <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">Nigeria Operations Hub</strong>
                <p className="text-slate-400">Trans-Amadi / Onne Corridor, Port Harcourt, Nigeria</p>
              </div>
            </div>

            <div className="flex gap-2.5">
              <Globe className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">Houston Procurement Desk</strong>
                <p className="text-slate-400">Houston, Texas, United States</p>
              </div>
            </div>

            <div className="flex gap-2.5 pt-2 border-t border-slate-850">
              <Mail className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">Commercial Inquiries</strong>
                <p className="text-slate-400">info@oildropchem.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Compliance & Quality Assurance Banner */}
      <div className="bg-slate-900 border-y border-slate-800 py-4 px-4 sm:px-6 md:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-300">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <ShieldCheck className="h-4 w-4 text-amber-500" />
              100% Verified Manufacturer COA
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>ASTM / ISO Compliant Testing</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>UN / DOT Standard Export Packaging</span>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Direct OEM Supply Chains
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 py-6 px-4 sm:px-6 md:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div>
            &copy; {currentYear} Oil Drop Chemical Ltd. All rights reserved. Registered Industrial Chemical Supplier & Distributor.
          </div>
          <div className="flex gap-6 text-slate-400">
            <button onClick={() => setActiveTab("about")} className="hover:text-slate-200">About Us</button>
            <button onClick={() => setActiveTab("capabilities")} className="hover:text-slate-200">Capabilities</button>
            <button onClick={() => setActiveTab("infrastructure")} className="hover:text-slate-200">Infrastructure</button>
            <button onClick={openQuoteModal} className="hover:text-amber-400">RFQ Portal</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
