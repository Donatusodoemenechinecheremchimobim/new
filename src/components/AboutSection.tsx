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
          <span className="font-mono text-sm font-black text-cyan-400 uppercase tracking-widest block mb-1">
            WHO WE ARE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            ABOUT OIL DROP CHEMICAL LTD
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-200 mt-2 max-w-2xl leading-relaxed">
            Linking global manufacturers to industrial end-users across critical energy lanes and manufacturing hubs.
          </p>
        </div>

        {/* Dynamic Dual Grid: text column and large physical layout images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Text Col */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wider">
              Sourcing • Supply • Logistics
            </h3>
            
            <p className="text-sm sm:text-base font-bold text-slate-200 leading-relaxed font-sans">
              {COMPANY_PROFILE.aboutText}
            </p>

            <p className="text-sm sm:text-base font-bold text-slate-200 leading-relaxed font-sans">
              We support industrial facilities requiring consistent operations. By building direct procurement loops with chemical synthesizers, we guarantee material authenticity and provide complete shipping logistics transparency.
            </p>

            {/* Structured Functional Roles */}
            <div className="pt-6 border-t-2 border-slate-800">
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-slate-300 mb-4">
                Core Assets & Guarantees:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPANY_PROFILE.functionalGoal.roles.map((role, idx) => (
                  <div key={idx} className="bg-slate-900 border-2 border-slate-800 p-4 rounded-none flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-display font-black text-xs text-white uppercase tracking-wide">
                        {role.title}
                      </h5>
                      <p className="text-slate-300 font-bold text-xs mt-1.5 leading-relaxed">
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
              <span className="absolute bottom-3 left-3 bg-slate-950/95 border border-slate-700 px-2.5 py-1 rounded-none font-mono text-xs font-black text-white shadow">
                DISTRIBUTION NETWORK • TAP TO ZOOM
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
              <span className="absolute bottom-2 left-2 bg-slate-950/95 border border-slate-700 px-2.5 py-1 rounded-none font-mono text-xs font-black text-white shadow">
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
              <span className="absolute bottom-2 left-2 bg-slate-950/95 border border-slate-700 px-2.5 py-1 rounded-none font-mono text-xs font-black text-white shadow">
                COA VALIDATION • ZOOM
              </span>
            </div>

          </div>

        </div>

        {/* Twin Geographic Coordinates - Nigeria vs Houston */}
        <div className="bg-slate-900 border-2 border-slate-800 p-6 md:p-8 rounded-none">
          <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-6 border-b-2 border-slate-800 pb-4 flex items-center gap-2">
            <Globe className="h-5.5 w-5.5 text-cyan-400" />
            OPERATIONAL BASES & NODES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Nigeria Node */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-cyan-950/80 border border-cyan-500/35 text-cyan-400 font-mono text-xs font-black uppercase tracking-wider rounded-none">
                <MapPin className="h-4.5 w-4.5" />
                AFRICA HEADQUARTERS
              </div>
              <h4 className="font-display font-black text-2xl text-white uppercase tracking-wide leading-none">
                {COMPANY_PROFILE.geographicStructure.nigeria.location}
              </h4>
              <p className="text-sm font-bold text-slate-200 leading-relaxed font-sans">
                {COMPANY_PROFILE.geographicStructure.nigeria.scope}
              </p>
              
              <div className="bg-slate-950 p-4 rounded-none font-mono text-xs font-bold text-slate-300 space-y-2 border-2 border-slate-800">
                <div className="justify-between flex">
                  <span className="text-slate-400 font-black">DEPOT ACCESS:</span>
                  <span className="text-white font-black uppercase">PORT ONNE / APAPA ACCESS</span>
                </div>
                <div className="justify-between flex">
                  <span className="text-slate-400 font-black">STORAGE STATUS:</span>
                  <span className="text-green-400 font-black uppercase">ACTIVE SECURED STORAGE</span>
                </div>
              </div>
            </div>

            {/* Houston Node */}
            <div className="space-y-4 border-t-2 md:border-t-0 md:border-l-2 border-slate-800 pt-6 md:pt-0 md:pl-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-950/80 border border-amber-500/35 text-amber-500 font-mono text-xs font-black uppercase tracking-wider rounded-none">
                <MapPin className="h-4.5 w-4.5" />
                INTERNATIONAL DESK
              </div>
              <h4 className="font-display font-black text-2xl text-white uppercase tracking-wide leading-none">
                {COMPANY_PROFILE.geographicStructure.international.location}
              </h4>
              <p className="text-sm font-bold text-slate-200 leading-relaxed font-sans">
                {COMPANY_PROFILE.geographicStructure.international.scope}
              </p>

              <div className="bg-slate-950 p-4 rounded-none font-mono text-xs font-bold text-slate-300 space-y-2 border-2 border-slate-800">
                <div className="justify-between flex">
                  <span className="text-slate-400 font-black">PROCUREMENT HUB:</span>
                  <span className="text-white font-black uppercase">TEXAS LIAISON DESK</span>
                </div>
                <div className="justify-between flex">
                  <span className="text-slate-400 font-black">DELIVERY DESK:</span>
                  <span className="text-cyan-400 font-black uppercase">DIRECT EXPORT DECLARED</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
