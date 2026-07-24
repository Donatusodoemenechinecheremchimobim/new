import React, { useState } from "react";
import { 
  Zap, 
  Activity, 
  Thermometer, 
  BatteryCharging, 
  Cable, 
  ShieldCheck, 
  CheckCircle2, 
  Gauge, 
  FileCheck, 
  Cpu, 
  Flame,
  Check,
  Award,
  Layers
} from "lucide-react";
import { IMAGES } from "../imageAssets";

export default function ElectricalTestingSection() {
  const [activeSubTab, setActiveSubTab] = useState<string>("all");

  const typicalTestingList = [
    "Insulation resistance testing.",
    "Earth continuity testing.",
    "Earth resistance measurements.",
    "Cable continuity verification.",
    "Voltage and current measurements.",
    "Battery capacity and discharge testing.",
    "Uninterruptible Power Supply (UPS) performance testing.",
    "Functional testing of protective relays.",
    "Verification of power supply redundancy.",
    "Thermal imaging inspections.",
    "Loop impedance testing where applicable.",
    "Power quality analysis.",
    "Verification of alarm and supervisory circuits."
  ];

  const thermalImagingList = [
    "Electrical switchboards.",
    "Motor Control Centres (MCCs).",
    "Distribution panels.",
    "Circuit breakers.",
    "Busbars.",
    "Cable terminations.",
    "Battery connections.",
    "UPS installations.",
    "Fire Alarm Control Panels.",
    "Power supply units."
  ];

  const batteryVerificationList = [
    "Battery voltage measurements.",
    "Charger output verification.",
    "Capacity testing.",
    "Internal resistance assessments.",
    "Visual inspection for corrosion or leakage.",
    "Terminal integrity checks.",
    "Load testing under simulated operating conditions."
  ];

  const cableIntegrityList = [
    "Continuity testing.",
    "Insulation resistance measurements.",
    "Shield continuity verification.",
    "Visual inspection of cable routes.",
    "Cable gland inspections.",
    "Junction box termination checks.",
    "Identification of damaged insulation or mechanical defects."
  ];

  return (
    <section id="electrical-testing-section" className="py-16 md:py-24 bg-slate-950 border-b border-slate-900 text-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        
        {/* Section Title Header */}
        <div className="border-t-4 border-amber-500 pt-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono text-xs font-black text-amber-500 bg-amber-950/60 border border-amber-500/30 px-3 py-1 uppercase tracking-widest">
              SECTION 3.6.4
            </span>
            <span className="font-mono text-xs font-black text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 uppercase tracking-widest flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" />
              SAFETY-CRITICAL ASSET INTEGRITY
            </span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            3.6.4 Electrical Testing, Diagnostics and Performance Verification
          </h1>

          <p className="text-sm sm:text-base font-bold text-slate-200 mt-3 max-w-4xl leading-relaxed">
            Verifying operational conditions, equipment performance, and continuous parameters of electrical assets supporting safety-critical industrial systems.
          </p>
        </div>

        {/* Executive Summary Card */}
        <div className="bg-slate-900 border-2 border-slate-800 p-6 sm:p-8 rounded-none space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="font-display font-black text-xl text-white uppercase tracking-tight flex items-center gap-2.5">
                <ShieldCheck className="h-6 w-6 text-amber-500 shrink-0" />
                OPERATIONAL CONDITION & PERFORMANCE VERIFICATION
              </h2>

              <p className="text-sm sm:text-base font-bold text-slate-200 leading-relaxed font-sans">
                Routine inspection alone cannot fully determine the operational condition of electrical assets supporting industrial fire protection systems. Comprehensive testing and diagnostic activities are essential for verifying equipment performance, identifying hidden defects, and confirming that electrical systems continue to operate within their designed parameters.
              </p>

              <p className="text-sm sm:text-base font-bold text-slate-200 leading-relaxed font-sans">
                Performance verification provides objective evidence that electrical installations remain capable of supporting Fire Detection and Alarm Systems (FDAS), Fire & Gas Detection Systems (FGS), Fire Suppression Systems, Emergency Shutdown (ESD) Systems, and other safety-critical equipment throughout their operational life.
              </p>
            </div>

            {/* Quick System Badge Side Column */}
            <div className="lg:col-span-4 bg-slate-950 border-2 border-slate-800 p-5 rounded-none space-y-3 font-mono text-xs">
              <div className="text-amber-500 font-black uppercase tracking-widest border-b border-slate-800 pb-2 flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                SUPPORTED SAFETY SYSTEMS
              </div>

              <ul className="space-y-2 text-slate-300 font-bold">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-cyan-400 rounded-full"></span>
                  Fire Detection & Alarm Systems (FDAS)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-amber-500 rounded-full"></span>
                  Fire & Gas Detection Systems (FGS)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                  Fire Suppression Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                  Emergency Shutdown (ESD) Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-purple-400 rounded-full"></span>
                  Safety-Critical Power Infrastructure
                </li>
              </ul>
            </div>
          </div>

          {/* Typical Testing Activities Grid */}
          <div className="border-t-2 border-slate-800 pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <h3 className="font-display font-black text-lg text-white uppercase tracking-tight flex items-center gap-2">
                <Activity className="h-5 w-5 text-cyan-400" />
                TYPICAL TESTING AND DIAGNOSTIC ACTIVITIES
              </h3>
              <span className="font-mono text-xs font-black text-slate-400 uppercase bg-slate-950 px-2.5 py-1 border border-slate-800">
                13 CALIBRATED PROCEDURES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {typicalTestingList.map((test, index) => (
                <div 
                  key={index} 
                  className="bg-slate-950 border border-slate-800 hover:border-cyan-500/50 p-3.5 rounded-none flex items-start gap-3 transition-colors"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-slate-200 leading-snug font-sans">
                    {test}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-slate-950 border border-cyan-500/30 p-4 rounded-none font-mono text-xs font-bold text-slate-300 flex items-center gap-3">
              <FileCheck className="h-5 w-5 text-cyan-400 shrink-0" />
              <span>
                Each test is performed using calibrated instruments in accordance with approved procedures, ensuring that measured values accurately reflect the condition of the electrical installation.
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Filter Sub-Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b-2 border-slate-800 pb-4">
          <span className="font-mono text-xs font-black text-slate-400 uppercase mr-2">MODULES:</span>
          {[
            { id: "all", label: "ALL DIAGNOSTIC MODULES" },
            { id: "thermal", label: "THERMAL IMAGING" },
            { id: "battery", label: "BATTERY & STANDBY POWER" },
            { id: "cable", label: "CABLE INTEGRITY" },
            { id: "perspective", label: "ENGINEERING PERSPECTIVE" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`px-3.5 py-2 font-mono text-xs font-black uppercase tracking-wider cursor-pointer border transition-all ${
                activeSubTab === tab.id
                  ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-850 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sub-Section 1: Thermal Imaging Inspections */}
        {(activeSubTab === "all" || activeSubTab === "thermal") && (
          <div className="bg-slate-900 border-2 border-slate-800 p-6 sm:p-8 rounded-none space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-slate-800 pb-4">
              <div className="p-2.5 bg-amber-950/80 border border-amber-500/40 text-amber-400">
                <Thermometer className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-black text-amber-500 uppercase tracking-widest block">
                  PREDICTIVE MAINTENANCE
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Thermal Imaging Inspections
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base font-bold text-slate-200 leading-relaxed font-sans">
              Infrared thermography is a valuable predictive maintenance technique used to identify abnormal heating within electrical equipment before failures occur. Excessive temperatures often indicate loose electrical connections, overloaded circuits, deteriorating insulation, unbalanced loads, or developing component failures that may not be visible during routine inspections.
            </p>

            <div className="space-y-3">
              <h3 className="font-mono text-xs font-black text-amber-400 uppercase tracking-widest">
                THERMAL IMAGING SURVEY TARGETS:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {thermalImagingList.map((item, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-3 rounded-none font-mono text-xs font-bold text-slate-200 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-amber-500 rounded-full shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm font-bold text-slate-300 leading-relaxed font-sans bg-slate-950 p-4 border border-slate-800">
              By identifying thermal anomalies at an early stage, corrective actions can be planned before equipment failure results in system downtime or loss of fire protection capability.
            </p>
          </div>
        )}

        {/* Sub-Section 2: Battery and Standby Power Verification */}
        {(activeSubTab === "all" || activeSubTab === "battery") && (
          <div className="bg-slate-900 border-2 border-slate-800 p-6 sm:p-8 rounded-none space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-slate-800 pb-4">
              <div className="p-2.5 bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                <BatteryCharging className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-black text-cyan-400 uppercase tracking-widest block">
                  STANDBY POWER ASSURANCE
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Battery and Standby Power Verification
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base font-bold text-slate-200 leading-relaxed font-sans">
              Many fire protection systems rely upon standby power sources to maintain operation during utility power interruptions. Fire Alarm Control Panels, emergency communication systems, gas detection panels, and suppression control systems typically incorporate battery backup or UPS installations designed to sustain continuous operation during emergency conditions.
            </p>

            <div className="space-y-3">
              <h3 className="font-mono text-xs font-black text-cyan-400 uppercase tracking-widest">
                ROUTINE VERIFICATION ACTIVITIES:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {batteryVerificationList.map((item, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-3.5 rounded-none font-mono text-xs font-bold text-slate-200 flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm font-bold text-slate-300 leading-relaxed font-sans bg-slate-950 p-4 border border-slate-800">
              These activities confirm that standby power systems remain capable of supporting safety-critical equipment throughout the required emergency operating period.
            </p>
          </div>
        )}

        {/* Sub-Section 3: Cable Integrity Assessment */}
        {(activeSubTab === "all" || activeSubTab === "cable") && (
          <div className="bg-slate-900 border-2 border-slate-800 p-6 sm:p-8 rounded-none space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-slate-800 pb-4">
              <div className="p-2.5 bg-purple-950/80 border border-purple-500/40 text-purple-400">
                <Cable className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-black text-purple-400 uppercase tracking-widest block">
                  SIGNAL & POWER CONDUIT ASSURANCE
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Cable Integrity Assessment
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base font-bold text-slate-200 leading-relaxed font-sans">
              Electrical cables represent one of the most critical elements of industrial fire protection systems, providing power, communication, and signalling between field devices and control equipment. Environmental exposure, vibration, moisture ingress, mechanical damage, ageing, and corrosion can progressively degrade cable performance if left undetected.
            </p>

            <div className="space-y-3">
              <h3 className="font-mono text-xs font-black text-purple-400 uppercase tracking-widest">
                CABLE INTEGRITY ASSESSMENT SCOPE:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cableIntegrityList.map((item, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-3.5 rounded-none font-mono text-xs font-bold text-slate-200 flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm font-bold text-slate-300 leading-relaxed font-sans bg-slate-950 p-4 border border-slate-800">
              Where deficiencies are identified, corrective actions are undertaken to restore system reliability while maintaining compliance with engineering standards and client requirements.
            </p>
          </div>
        )}

        {/* Sub-Section 4: Engineering Perspective */}
        {(activeSubTab === "all" || activeSubTab === "perspective") && (
          <div className="bg-slate-900 border-2 border-amber-500/40 p-6 sm:p-8 rounded-none space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-slate-800 pb-4">
              <div className="p-2.5 bg-amber-500 text-slate-950 font-black">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-black text-amber-500 uppercase tracking-widest block">
                  ASSET INTEGRITY PHILOSOPHY
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Engineering Perspective
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base font-bold text-slate-200 leading-relaxed font-sans">
              <p>
                Electrical testing and diagnostic activities provide the technical evidence necessary to confirm the reliability of safety-critical electrical systems. At A.TopTechnical Limited, these activities form an integral part of our asset integrity philosophy, enabling informed maintenance decisions based on measured equipment condition rather than assumptions.
              </p>

              <p>
                Our engineers utilise calibrated test equipment, recognised diagnostic techniques, and structured inspection procedures to evaluate the condition of electrical assets supporting fire protection systems. This data-driven approach improves maintenance planning, reduces the likelihood of unexpected failures, enhances operational reliability, and contributes to the continued safe operation of industrial facilities.
              </p>
            </div>

            {/* Visual Photo Block */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-48 border-2 border-slate-800 bg-slate-950 overflow-hidden cursor-pointer">
                <img 
                  src={IMAGES.pic10} 
                  alt="Calibrated Testing and Lab Inspection" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/90 px-2.5 py-1 border border-slate-800 font-mono text-xs font-black text-white uppercase">
                  CALIBRATED DIAGNOSTIC TESTING • ZOOM
                </span>
              </div>

              <div className="relative h-48 border-2 border-slate-800 bg-slate-950 overflow-hidden cursor-pointer">
                <img 
                  src={IMAGES.imgWA0006} 
                  alt="Field Equipment and Control Manifold" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/90 px-2.5 py-1 border border-slate-800 font-mono text-xs font-black text-white uppercase">
                  SAFETY-CRITICAL FIELD CONTROL • ZOOM
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
