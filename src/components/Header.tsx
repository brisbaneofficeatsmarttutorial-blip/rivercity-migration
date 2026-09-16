import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, MapPin, ChevronRight, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface HeaderProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'VISAS', href: '#visas' },
    { label: 'SERVICES', href: '#services' },
    { label: 'VISA FINDER', href: '#visa-finder' },
    { label: 'FREE ASSESSMENT', href: '#free-assessment' },
    { label: 'CLIENT EXPERIENCES', href: '#client-experiences' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Professional Bar */}
      <div id="top-bar" className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Registered Migration Agent: <strong className="text-white font-medium">Amit Verma</strong> (MARN {BUSINESS_INFO.marn})</span>
            </div>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>101 Wickham Terrace, Brisbane City QLD 4000</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              id="topbar-phone-link"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-medium tracking-wide">
              FREE INITIAL CONSULTATION
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Custom Rivercity Logo Icon */}
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center shadow-sm border border-slate-800 text-white p-2 relative overflow-hidden group-hover:border-blue-700 transition-colors">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-blue-400"
              >
                {/* Brisbane River abstract waves and architectural spire */}
                <path
                  d="M6 34C14 34 16 26 24 26C32 26 34 34 42 34"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M6 40C14 40 16 32 24 32C32 32 34 40 42 40"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeOpacity="0.7"
                />
                {/* Modern architectural tower motif */}
                <path
                  d="M19 23L24 10L29 23H19Z"
                  fill="#ffffff"
                  fillOpacity="0.9"
                />
                <circle cx="24" cy="7" r="2" fill="#34d399" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="font-serif tracking-widest text-lg font-bold text-slate-900 leading-none group-hover:text-blue-900 transition-colors">
                RIVERCITY
              </div>
              <div className="text-[11px] font-semibold tracking-[0.24em] text-slate-600 leading-tight uppercase mt-0.5">
                MIGRATION
              </div>
              <div className="text-[9px] text-slate-500 font-normal tracking-wide hidden sm:block">
                Australian Migration & Visa Services
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden xl:flex items-center gap-5 text-xs font-semibold tracking-wider text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-1 transition-colors relative whitespace-nowrap hover:text-blue-900 ${
                    isActive ? 'text-blue-900 font-bold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-900 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons (Right) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="header-whatsapp-btn"
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WHATSAPP US</span>
            </a>

            <button
              id="header-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-slate-900 text-white text-xs font-bold tracking-wide hover:bg-blue-900 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>FREE CONSULTATION</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              id="mobile-consultation-btn-quick"
              onClick={onOpenConsultation}
              className="md:inline-flex hidden items-center gap-1 px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-semibold"
            >
              Free Consult
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown / Drawer Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-drawer"
            className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200"
          >
            <div className="space-y-1 divide-y divide-slate-100">
              <div className="pb-3 grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-900"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-4 space-y-2.5">
                <button
                  id="mobile-menu-book-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-slate-900 text-white text-sm font-bold shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>BOOK FREE CONSULTATION</span>
                </button>

                <a
                  id="mobile-menu-whatsapp-btn"
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-emerald-600 text-white text-sm font-bold shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP US (+61 466 388 554)</span>
                </a>

                <a
                  id="mobile-menu-phone-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50"
                >
                  <Phone className="w-4 h-4 text-blue-900" />
                  <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
                </a>

                <div className="pt-2 text-center text-xs text-slate-500">
                  Registered Migration Agent Amit Verma · MARN 0851419
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
