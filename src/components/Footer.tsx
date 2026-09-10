import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="border-t border-[#111111] px-[5%] py-8 bg-[#f4f1eb] flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-wider font-medium text-[#111111]"
    >
      <div className="flex items-center gap-4">
        <span>© {PERSONAL_INFO.currentYear} {PERSONAL_INFO.name}</span>
        <span className="hidden md:inline text-[#111111]/30">|</span>
        <span className="text-[#111111]/70">
          Digital Marketing · Social Media · Performance
        </span>
      </div>

      <div className="flex items-center gap-6">
        <a
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="hover:opacity-60 transition-opacity"
        >
          Email
        </a>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity cursor-pointer border-b border-current pb-0.5"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
};
