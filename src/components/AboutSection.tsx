import React from "react";
import { COMPANY_PROFILE } from "../data";
import { ShieldCheck, MapPin, CheckCircle2, Award, Factory, Globe, Building2, FileCheck, Users2 } from "lucide-react";
import { IMAGES } from "../imageAssets";

export default function AboutSection() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="h-4 w-4" />
            <span>Corporate Profile & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
            Building Africa’s Most Trusted <br />
            <span className="text-amber-500">Industrial Chemical Supply Chain</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-sans">
            OILDROP Chemical Ltd operates as an integrated industrial procurement partner and technical distributor, supplying premium process chemicals, specialized adsorbents, and heavy industrial consumables to high-demand sectors.
          </p>
        </div>

        {/* Core Narrative & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
              <p>
                Founded with a deliberate focus on industrial excellence, OILDROP addresses the chronic challenges of chemical supply in Africa: inconsistent product purity, protracted lead times, and opaque technical specifications.
              </p>
              <p>
                By maintaining direct, verified procurement relationships with primary global chemical manufacturers in North America, Western Europe, and Asia, we eliminate intermediaries and guarantee that every drum, IBC, and bulk consignment meets certified manufacturer standards.
              </p>
              <p>
                Our operational model pairs international sourcing reach from our Houston liaison desk with deep local execution and dedicated physical warehousing in Port Harcourt, Nigeria.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded">
                <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-sm uppercase mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Uncompromising Quality</span>
                </div>
                <p className="text-xs text-slate-300">
                  100% batch traceability with original manufacturer Certificates of Analysis (COA) and independent lab verification.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded">
                <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-sm uppercase mb-1">
                  <Factory className="h-4 w-4" />
                  <span>Plant-Ready Inventory</span>
                </div>
                <p className="text-xs text-slate-300">
                  Strategic buffer inventory in Port Harcourt enabling rapid dispatch for continuous operations and unexpected plant shutdowns.
                </p>
              </div>
            </div>

          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="col-span-2 relative h-56 rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
              <img
                src={IMAGES.logisticsHub}
                alt="Port Harcourt Logistics Center"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded border border-slate-700">
                Port Harcourt Distribution Hub
              </span>
            </div>

            <div className="relative h-40 rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
              <img
                src={IMAGES.imgWA0007}
                alt="Laboratory testing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white bg-slate-950/80 backdrop-blur px-2 py-0.5 rounded border border-slate-700">
                QA / QC Lab Station
              </span>
            </div>

            <div className="relative h-40 rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
              <img
                src={IMAGES.sievedDesiccant}
                alt="Desiccant inspection"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white bg-slate-950/80 backdrop-blur px-2 py-0.5 rounded border border-slate-700">
                Sieved Desiccant Stock
              </span>
            </div>
          </div>

        </div>

        {/* Operational Geography & Locations */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
            <Globe className="h-5 w-5 text-amber-400" />
            <h3 className="text-xl font-display font-bold text-white uppercase">
              Global Sourcing & Local Execution Network
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Nigeria Operational Base */}
            <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <MapPin className="h-4 w-4" />
                  <span>Nigeria Operations Center</span>
                </div>
                <h4 className="text-lg font-display font-bold text-white uppercase">
                  Port Harcourt Logistics Hub
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Strategically positioned in the Trans-Amadi / Onne industrial corridor. Manages bonded stockpiles, palletized handling, local packaging, and expedited road haulage across the Niger Delta and Nigerian manufacturing clusters.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-850 space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span className="font-semibold">Facility Role:</span>
                  <span className="text-slate-200">Warehousing, Staging, Rapid Dispatch</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Port Proximity:</span>
                  <span className="text-slate-200">Direct Access to Onne Port & Apapa Terminal</span>
                </div>
              </div>
            </div>

            {/* Houston Procurement Desk */}
            <div className="bg-slate-950 p-6 rounded-lg border border-slate-850 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-wider">
                  <Globe className="h-4 w-4" />
                  <span>International Procurement</span>
                </div>
                <h4 className="text-lg font-display font-bold text-white uppercase">
                  Houston Coordination Desk
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Located in Texas, USA—the epicenter of global energy chemicals. Interfaces directly with primary chemical synthesizers across the US Gulf Coast, Western Europe, and Asia for volume allocation, quality validation, and export freight.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-850 space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span className="font-semibold">Facility Role:</span>
                  <span className="text-slate-200">OEM Direct Contracting & QC Inspections</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Corridor:</span>
                  <span className="text-slate-200">US Gulf Coast • Antwerp • Singapore • Africa</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
