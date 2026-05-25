import React from "react";
import { Droplets, Shield, ExternalLink, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openQuoteModal: () => void;
}

export default function Footer({ setActiveTab, openQuoteModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 font-sans mt-auto">
      {/* Upper Footer: Quick Sourcing Index */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Core Statement Pillar */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded bg-cyan-950/45 border border-cyan-500/20 flex items-center justify-center">
              <svg className="h-4 w-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <span className="font-display font-black tracking-tight text-white uppercase text-base">
              OILDROP <span className="text-cyan-400">CHEMICAL</span>
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            Oil Drop Chemical Ltd operates as an industrial chemical procurement and distribution company serving energy, manufacturing, and process industries through structured supply chain coordination and technical sourcing.
          </p>
          <div className="font-mono text-[10px] text-slate-500">
            REPRES: L-NGA/R-PH.8290-71
          </div>
        </div>

        {/* Product Portfolios Links */}
        <div>
          <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase mb-4 border-b border-slate-800 pb-2">
            PRODUCT PORTFOLIOS
          </h4>
          <ul className="space-y-2 text-xs">
            {[
              { id: "water-treatment", name: "Water Treatment Chemicals" },
              { id: "filtration-materials", name: "Industrial Filtration Materials" },
              { id: "oil-gas-chemicals", name: "Oil & Gas Process Chemicals" },
              { id: "maintenance-chemicals", name: "Industrial Maintenance Chemicals" },
            ].map((prod) => (
              <li key={prod.id}>
                <button
                  onClick={() => setActiveTab("products")}
                  className="hover:text-cyan-400 flex items-center gap-1 group text-left"
                >
                  <ChevronRight className="h-3 w-3 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                  {prod.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors Served Menu */}
        <div>
          <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase mb-4 border-b border-slate-800 pb-2">
            SECTORS SERVED
          </h4>
          <ul className="space-y-2 text-xs">
            {[
              "Oil & Gas Production",
              "Natural Gas & LNG Processing",
              "Petrochemicals & Refining",
              "Industrial Water Treatment",
              "Advanced Process Industries",
            ].map((sec) => (
              <li key={sec} className="flex items-center gap-2">
                <span className="h-1 w-1 bg-cyan-400 rounded-full"></span>
                <span>{sec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Geographic Coordinates Pillar */}
        <div>
          <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase mb-4 border-b border-slate-800 pb-2">
            SOCIETY COORDINATES
          </h4>
          <div className="space-y-4 text-xs">
            <div className="flex gap-2.5">
              <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
              <div>
                <strong className="block text-slate-200">Nigeria Operations Desk</strong>
                <p className="text-slate-500">Port Harcourt, Rivers State, Nigeria</p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <MapPin className="h-4 w-4 text-amber-500 shrink-0" />
              <div>
                <strong className="block text-slate-200">International Liaison</strong>
                <p className="text-slate-500">Houston, Texas, USA (Coordination Desk)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mid Technical Grid (Engineering Certifications) */}
      <div className="bg-slate-900 border-y border-slate-800 py-6 px-4 md:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 font-mono">
          <div className="flex flex-wrap justify-center gap-6">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-cyan-500" />
              SPECIFICATION: ASTM / ISO CERTIFIED BASE
            </span>
            <span>|</span>
            <span>COA: MANDATORY LOT DOCUMENTATION</span>
            <span>|</span>
            <span>LOGISTICS: ROAD & FREIGHT COMPLIANT</span>
          </div>
          <button
            onClick={openQuoteModal}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-bold tracking-widest uppercase flex items-center gap-1 cursor-pointer"
          >
            LAUNCH PORTAL
            <ExternalLink className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Footer Bottom Base */}
      <div className="bg-slate-950 py-6 px-4 md:px-8 text-center text-xs text-slate-600 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div>
            &copy; {currentYear} Oil Drop Chemical Ltd. All rights reserved. Sourced & supply coordinated globally.
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span>NIGERIAN OPERATIONS CODE: ODCL-NGA</span>
            <span>US COORD CODE: ODCL-USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
