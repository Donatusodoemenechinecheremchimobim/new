import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Shield, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openQuoteModal: () => void;
}

export default function Header({ activeTab, setActiveTab, openQuoteModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    // Update real-time operational clock
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toUTCString().replace("GMT", "UTC"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT US" },
    { id: "products", label: "PROD SELECTION" },
    { id: "applications", label: "SYS APPLICATIONS" },
    { id: "supply-chain", label: "SUPPLY CHAIN" },
    { id: "gallery", label: "PHOTO GALLERY" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-xl">
      {/* Top Technical Wire Strip */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-400 font-mono py-2 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            SYS: STABLE
          </span>
          <span className="text-slate-500">|</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-slate-500" />
            NGA DEV: +234 PORT HARCOURT
          </span>
          <span className="text-slate-500">|</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-slate-500" />
            US COORD: HOUSTON, TX
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-500">UTC:</span>
          <span className="text-slate-300 font-semibold">{timeStr || "2026-05-25 14:11:00 UTC"}</span>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div
        className={`w-full transition-all duration-300 py-4 px-4 sm:px-6 md:px-8 border-b-2 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md border-cyan-500/80 shadow-[0_4px_30px_rgba(6,182,212,0.1)] py-3"
            : "bg-slate-950 border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Industrial Brand Typography */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab("home")}
          >
            {/* Boxed Industrial Logo matching mockup */}
            <div className="w-10 h-10 bg-orange-500 rounded-sm flex items-center justify-center font-black text-slate-900 text-xl italic group-hover:bg-orange-400 transition-all duration-250">
              OD
            </div>

            <div>
              <div className="font-display font-black text-xl tracking-tighter text-slate-100 uppercase sm:text-2xl flex items-center gap-1 leading-none">
                OIL DROP<span className="text-orange-500">.</span>
              </div>
              <div className="text-xs font-mono tracking-wider text-slate-405 font-black uppercase leading-none mt-1.5">
                PROCUREMENT & LOGISTICS
              </div>
            </div>
          </div>

          {/* Desktop Sourcing Menu Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-xs font-display font-extrabold tracking-widest uppercase transition-all duration-150 rounded-sm border ${
                  activeTab === item.id
                    ? "text-orange-500 border-none underline decoration-2 underline-offset-4 font-black"
                    : "text-slate-300 border-transparent hover:text-orange-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Main Action Block */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="cta-proc-request"
              onClick={openQuoteModal}
              className="bg-orange-500 text-slate-900 border-2 border-orange-500 px-4 py-2 text-xs font-display font-black tracking-widest uppercase rounded-none hover:bg-slate-950 hover:text-orange-500 transition-all duration-150 flex items-center gap-2 cursor-pointer"
            >
              REQUEST QUOTE
              <ArrowRight className="h-3.5 w-3.5 stroke-[3]" />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center lg:hidden gap-3">
            <button
              onClick={() => setActiveTab("quotation")}
              className="bg-orange-500 text-slate-900 px-3.5 py-1.5 text-xs font-display font-black tracking-widest rounded-none uppercase"
            >
              QUOTE
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 px-2 border border-slate-700 bg-slate-900 rounded-none text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-700 shadow-2xl z-40 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="p-4 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-3 text-left px-4 font-display font-black text-sm tracking-widest uppercase transition-all rounded-none ${
                  activeTab === item.id
                    ? "bg-orange-950/30 text-orange-500 border-l-4 border-orange-500 font-black"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setActiveTab("quotation");
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-orange-500 text-slate-950 text-center font-display font-black text-xs tracking-widest uppercase rounded-none hover:bg-orange-400 shadow-md flex items-center justify-center gap-1 cursor-pointer"
              >
                REQUEST TECHNICAL QUOTE
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
