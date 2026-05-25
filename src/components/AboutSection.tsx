import React from "react";
import { COMPANY_PROFILE } from "../data";
import { ShieldAlert, MapPin, CheckCircle, Award, Factory, Globe } from "lucide-react";
import { IMAGES } from "../imageAssets";

export default function AboutSection() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* About Section Header */}
        <div className="border-t-4 border-cyan-500 pt-4 mb-12">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-1">
            CORPORATE PROFILE & METRICS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            ABOUT OIL DROP CHEMICAL LTD
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Linking global manufacturers to industrial end-users across Africa and intercontinental energy lanes.
          </p>
        </div>

        {/* Dynamic Dual Grid: text column and large physical layout images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Text Col */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-100 uppercase tracking-wider">
              Sourcing. Evaluation. Distribution.
            </h3>
            
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {COMPANY_PROFILE.aboutText}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              The company supports industrial clients requiring consistent and reliable supply of chemicals used in production systems, processing operations, and industrial maintenance. By building direct procurement loops, we eliminate material discrepancies and provide logistics transparency.
            </p>

            {/* Structured Functional Roles */}
            <div className="pt-6 border-t border-slate-800">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">
                FUNCTIONAL ROLES & ASSURANCES:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPANY_PROFILE.functionalGoal.roles.map((role, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-slate-800 p-4 rounded-sm flex items-start gap-3">
                    <CheckCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-display font-bold text-xs text-slate-200 uppercase tracking-wide">
                        {role.title}
                      </h5>
                      <p className="text-slate-400 text-[11px] mt-1 line-clamp-3">
                        {role.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Visual Image Col with double images */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Top Image Frame */}
            <div className="relative h-48 sm:h-64 rounded-none border-2 border-slate-800 overflow-hidden bg-slate-900 col-span-2 cursor-pointer">
              <img
                src={IMAGES.logisticsHub}
                alt="Cargo cargo shipping"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
              <span className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 px-2 py-0.5 rounded-none font-mono text-[9px] text-slate-300">
                CONTAINER COORDINATIONS • TAP TO ZOOM
              </span>
            </div>

            {/* Bottom Left Frame */}
            <div className="relative h-36 rounded-none border-2 border-slate-800 overflow-hidden bg-slate-900 cursor-pointer">
              <img
                src={IMAGES.plantDehydrator}
                alt="Refinery plant vessels"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute bottom-2 left-2 bg-slate-950/90 border border-slate-800 px-1.5 py-0.5 rounded-none font-mono text-[9px] text-slate-450">
                PROCESS CORRIDOR • ZOOM
              </span>
            </div>

            {/* Bottom Right Frame */}
            <div className="relative h-36 rounded-none border-2 border-slate-800 overflow-hidden bg-slate-900 cursor-pointer">
              <img
                src={IMAGES.labTesting}
                alt="Quality checking"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute bottom-2 left-2 bg-slate-950/90 border border-slate-800 px-1.5 py-0.5 rounded-none font-mono text-[9px] text-slate-400">
                COA VALIDATION • ZOOM
              </span>
            </div>

          </div>

        </div>

        {/* Twin Geographic Coordinates - Nigeria vs Houston */}
        <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-sm">
          <h3 className="font-display font-black text-xl text-white uppercase tracking-tight mb-6 border-b border-slate-800 pb-3 flex items-center gap-2">
            <Globe className="h-5 w-5 text-cyan-400" />
            GEOGRAPHIC STRUCTURE & LOGISTICS NODES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Nigeria Node */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] rounded">
                <MapPin className="h-3 w-3" />
                AFRICA HEADQUARTER STAGES
              </div>
              <h4 className="font-display font-black text-lg text-slate-100 uppercase tracking-wide leading-tight">
                {COMPANY_PROFILE.geographicStructure.nigeria.location}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {COMPANY_PROFILE.geographicStructure.nigeria.scope}
              </p>
              
              <div className="bg-slate-950 p-4 rounded text-xs font-mono text-slate-400 space-y-1.5 border border-slate-800/60">
                <div className="justify-between flex text-[10px]">
                  <span>DEPOT DOCKING:</span>
                  <span className="text-slate-200">PORT ONNE / APAPA ACCESS</span>
                </div>
                <div className="justify-between flex text-[10px]">
                  <span>WAREHOUSE STATUS:</span>
                  <span className="text-green-400">ACTIVE STORAGE SECURED</span>
                </div>
              </div>
            </div>

            {/* Houston Node */}
            <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-amber-950/50 border border-amber-500/20 text-amber-500 font-mono text-[10px] rounded">
                <MapPin className="h-3 w-3" />
                GLOBAL COORD DESK
              </div>
              <h4 className="font-display font-black text-lg text-slate-100 uppercase tracking-wide leading-tight">
                {COMPANY_PROFILE.geographicStructure.international.location}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {COMPANY_PROFILE.geographicStructure.international.scope}
              </p>

              <div className="bg-slate-950 p-4 rounded text-xs font-mono text-slate-400 space-y-1.5 border border-slate-800/60">
                <div className="justify-between flex text-[10px]">
                  <span>MANUFACTURER HUB:</span>
                  <span className="text-slate-200">TEXAS CHEMICAL BELT LIAISON</span>
                </div>
                <div className="justify-between flex text-[10px]">
                  <span>CLEARANCE SPEED:</span>
                  <span className="text-cyan-400">EXPEDITED AIR/FREIGHT</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
