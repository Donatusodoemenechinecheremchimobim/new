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
          <p className="text-xs sm:text-sm font-bold leading-relaxed text-slate-305">
            Oil Drop Chemical Ltd operates as an industrial chemical procurement company serving energy, manufacturing, and process industries through structured coordinate sourcing.
          </p>
        </div>

        {/* Product Portfolios Links */}
        <div>
          <h4 className="font-display font-black text-xs tracking-widest text-white uppercase mb-4 border-b-2 border-slate-800 pb-2.5">
            PRODUCTS
          </h4>
          <ul className="space-y-2 text-xs font-bold text-slate-300">
            {[
              { id: "water-treatment", name: "Water Treatment" },
              { id: "filtration-materials", name: "Filtration Materials" },
              { id: "oil-gas-chemicals", name: "Oil & Gas Chemicals" },
              { id: "maintenance-chemicals", name: "Industrial Maintenance" },
            ].map((prod) => (
              <li key={prod.id}>
                <button
                  onClick={() => setActiveTab("products")}
                  className="hover:text-cyan-400 flex items-center gap-1 group text-left cursor-pointer uppercase"
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
          <h4 className="font-display font-black text-xs tracking-widest text-white uppercase mb-4 border-b-2 border-slate-800 pb-2.5">
            SECTORS
          </h4>
          <ul className="space-y-2 text-xs font-bold text-slate-300">
            {[
              "Oil & Gas Production",
              "Natural Gas & LNG Processing",
              "Petrochemicals & Refining",
              "Industrial Water Treatment",
              "Advanced Process Industries",
            ].map((sec) => (
              <li key={sec} className="flex items-center gap-2 uppercase">
                <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full"></span>
                <span>{sec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Geographic Coordinates Pillar */}
        <div>
          <h4 className="font-display font-black text-xs tracking-widest text-white uppercase mb-4 border-b-2 border-slate-800 pb-2.5">
            OFFICES
          </h4>
          <div className="space-y-4 text-xs font-bold text-slate-300">
            <div className="flex gap-2.5">
              <MapPin className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
              <div>
                <strong className="block text-slate-100 uppercase font-black">Nigeria Operations</strong>
                <p className="text-slate-400">Port Harcourt, Rivers State</p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <MapPin className="h-4.5 w-4.5 text-amber-500 shrink-0" />
              <div>
                <strong className="block text-slate-100 uppercase font-black">Houston Liaison</strong>
                <p className="text-slate-400">Houston, Texas, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mid Technical Grid (Engineering Certifications) */}
      <div className="bg-slate-900 border-y-2 border-slate-800 py-6 px-4 md:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-300 font-mono font-black">
          <div className="flex flex-wrap justify-center gap-4 uppercase">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-cyan-550" />
              SPECIFICATION: ISO CERTIFIED SUPPLY
            </span>
            <span>•</span>
            <span>MANDATORY COA LOGISTICS</span>
            <span>•</span>
            <span>COMPLIANT GLOBAL FREIGHT</span>
          </div>
          <button
            onClick={openQuoteModal}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-black tracking-widest uppercase flex items-center gap-1.5 cursor-pointer"
          >
            Sourcing Portal
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Footer Bottom Base */}
      <div className="bg-slate-950 py-6 px-4 md:px-8 text-center text-xs text-slate-400 font-mono font-bold">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div>
            &copy; {currentYear} Oil Drop Chemical Ltd. All rights reserved. Sourced & distributed globally.
          </div>
        </div>
      </div>
    </footer>
  );
}
