import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Globe, Menu, X, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { CONTACT_INFO } from "../data";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openQuoteModal: () => void;
}

export default function Header({ activeTab, setActiveTab, openQuoteModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "capabilities", label: "CAPABILITIES" },
    { id: "products", label: "PRODUCTS" },
    { id: "industries", label: "INDUSTRIES" },
    { id: "infrastructure", label: "INFRASTRUCTURE" },
    { id: "global-network", label: "GLOBAL NETWORK" },
    { id: "gallery", label: "MEDIA" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Upper Executive Corporate Bar */}
      <div className="bg-slate-950 border-b border-slate-800/80 text-xs text-slate-300 py-2.5 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Direct Office Lines */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-amber-500 shrink-0" />
              <span className="font-semibold text-slate-300">Port Harcourt:</span>
              <a href="tel:09134959214" className="font-bold text-white hover:text-amber-400 transition-colors">
                {CONTACT_INFO.nigeriaOffice.phone}
              </a>
              <span className="text-slate-600">/</span>
              <a href="tel:07041109414" className="font-bold text-white hover:text-amber-400 transition-colors">
                {CONTACT_INFO.nigeriaOffice.phone2}
              </a>
            </div>

            <span className="hidden sm:inline text-slate-700">|</span>

            <div className="hidden sm:flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-sky-400 shrink-0" />
              <span className="font-semibold text-slate-300">Houston Desk:</span>
              <span className="font-bold text-slate-200">Houston, Texas, USA</span>
            </div>
          </div>

          {/* Quick Email & Assurance */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-amber-500 shrink-0" />
              <a href={`mailto:${CONTACT_INFO.generalContacts.email}`} className="font-semibold text-slate-300 hover:text-white transition-colors">
                {CONTACT_INFO.generalContacts.email}
              </a>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="hidden md:flex items-center gap-1 text-slate-300 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>COA & ISO Verified Supply</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div
        className={`w-full transition-all duration-200 px-4 sm:px-6 md:px-8 border-b ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md border-slate-800 py-3 shadow-lg"
            : "bg-slate-900 border-slate-800/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Authoritative Industrial Brand Identity */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab("home")}
          >
            {/* Geometric Industrial Crest */}
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 font-black rounded flex items-center justify-center text-lg tracking-tighter shadow-md group-hover:scale-105 transition-transform duration-200">
              OD
            </div>

            <div className="flex flex-col">
              <div className="font-display font-black text-xl tracking-tight text-white uppercase sm:text-2xl flex items-center gap-1 leading-none">
                OILDROP <span className="text-amber-500">CHEMICAL</span>
              </div>
              <div className="text-[11px] font-sans tracking-wider text-slate-300 font-semibold uppercase leading-none mt-1">
                Industrial Supply Partner for Africa
              </div>
            </div>
          </div>

          {/* Desktop Executive Menu Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-xs font-display font-bold tracking-wider uppercase transition-all duration-150 rounded cursor-pointer ${
                    isActive
                      ? "text-amber-400 bg-slate-800/90 font-black shadow-inner"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Block */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="cta-proc-request"
              onClick={openQuoteModal}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 text-xs font-display font-black tracking-wider uppercase rounded font-sans transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-amber-500/20 active:scale-98"
            >
              REQUEST A QUOTE
              <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center xl:hidden gap-2">
            <button
              onClick={openQuoteModal}
              className="bg-amber-500 text-slate-950 px-3 py-1.5 text-xs font-display font-black tracking-wider rounded uppercase"
            >
              RFQ
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-slate-700 bg-slate-800 rounded text-slate-200 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Panel */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 max-h-[80vh] overflow-y-auto">
          <div className="p-4 space-y-1 flex flex-col max-w-7xl mx-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-3 text-left px-4 font-display font-bold text-xs tracking-wider uppercase transition-all rounded ${
                  activeTab === item.id
                    ? "bg-amber-500/10 text-amber-400 border-l-4 border-amber-500 font-black pl-3"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  openQuoteModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-amber-500 text-slate-950 text-center font-display font-black text-xs tracking-wider uppercase rounded hover:bg-amber-400 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                REQUEST A TECHNICAL QUOTE
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

