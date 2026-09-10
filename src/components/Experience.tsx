import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE, BRANDS } from '../data/portfolioData';
import { ArrowUpRight, Briefcase, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  return (
    <section
      id="experience"
      className="py-24 md:py-36 px-[5%] border-t border-[#111111] bg-[#f4f1eb]"
    >
      {/* Section Label */}
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.25em] text-[#111111] mb-16">
        <span>03 — Experience</span>
        <span className="font-mono text-[#111111]/50">[Professional Journey]</span>
      </div>

      {/* Experience Timeline */}
      <div className="border-t border-[#111111]">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="py-12 border-b border-[#111111] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start group hover:bg-[#111111]/[0.015] transition-colors"
          >
            {/* Column 1: Date */}
            <div className="md:col-span-3">
              <span className="text-xs uppercase font-mono tracking-wider text-[#111111]/70 block mb-1">
                {exp.date}
              </span>
              {exp.current && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#111111] text-[#f4f1eb]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Engagement
                </span>
              )}
            </div>

            {/* Column 2: Company & Role */}
            <div className="md:col-span-5">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] uppercase text-[#111111] leading-none group-hover:translate-x-1 transition-transform duration-300">
                {exp.company}
              </h3>
              <div className="text-sm font-semibold uppercase tracking-wider text-[#111111]/80 mt-3">
                {exp.role}
              </div>

              {/* Specific highlights */}
              <ul className="mt-4 space-y-1.5 hidden sm:block">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="text-xs text-[#111111]/70 flex items-start gap-2">
                    <span className="text-[#111111] font-mono mt-0.5">↳</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Description */}
            <div className="md:col-span-4">
              <p className="text-sm sm:text-base text-[#111111]/80 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Brands Section */}
      <div className="mt-20 pt-12 border-t border-[#111111]/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
            Featured Brands & Projects Handled
          </span>
          <span className="text-[11px] font-mono text-[#111111]/50">
            Click brand to highlight in portfolio
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {BRANDS.map((brand) => {
            const isSelected = selectedBrand === brand;
            return (
              <button
                key={brand}
                onClick={() => setSelectedBrand(isSelected ? null : brand)}
                className={`border text-xs sm:text-sm uppercase font-semibold tracking-wider px-5 py-3 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#111111] text-[#f4f1eb] border-[#111111] scale-105 shadow-md'
                    : 'border-[#111111] text-[#111111] bg-transparent hover:bg-[#111111] hover:text-[#f4f1eb]'
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
