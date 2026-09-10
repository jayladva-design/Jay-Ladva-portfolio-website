import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  onOpenCustomizer?: () => void;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mumbaiTime, setMumbaiTime] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setMumbaiTime(formatter.format(now));
      } catch {
        setMumbaiTime('13:00');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'What I Do', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'SEO', href: '#seo' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-[5%] py-4 md:py-6 flex justify-between items-center ${
          scrolled
            ? 'bg-[#f4f1eb]/90 backdrop-blur-md border-b border-[#111111]/10'
            : 'bg-transparent'
        }`}
      >
        {/* Brand Logo / Monogram */}
        <div className="flex items-center gap-4">
          <a
            id="nav-brand-logo"
            href="#"
            className="text-2xl font-extrabold tracking-tighter text-[#111111] hover:opacity-75 transition-opacity"
          >
            {PERSONAL_INFO.monogram}
          </a>

          {/* Real-time Mumbai Time Indicator */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#111111]/15 text-[11px] uppercase tracking-wider text-[#111111]/70 bg-[#f4f1eb]">
            <Clock className="w-3 h-3 text-[#111111]" />
            <span>Mumbai {mumbaiTime} IST</span>
          </div>

          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/60 border border-emerald-500/20 text-[11px] font-medium text-emerald-900">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Available for Opportunities</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-1 text-[#111111] hover:text-[#111111]/60 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#111111] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}

          <a
            id="nav-cta-talk"
            href="#contact"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 border border-[#111111] text-xs uppercase tracking-wider font-bold bg-[#111111] text-[#f4f1eb] hover:bg-transparent hover:text-[#111111] transition-all duration-300"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-md text-[#111111] hover:bg-[#111111]/5 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#f4f1eb] flex flex-col justify-between px-[6%] pt-28 pb-10 md:hidden"
        >
          <div className="flex flex-col gap-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#111111]/50 pb-2 border-b border-[#111111]/15">
              Menu Navigation
            </div>
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-3xl font-extrabold uppercase tracking-tight text-[#111111] hover:pl-2 transition-all border-b border-[#111111]/10 pb-3"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#111111]/40 font-mono">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#111111]/20 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs text-[#111111]/70">
              <span>Mumbai, India</span>
              <span className="font-mono font-medium">{mumbaiTime} IST</span>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full py-4 text-center bg-[#111111] text-[#f4f1eb] text-sm uppercase tracking-widest font-bold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
};
