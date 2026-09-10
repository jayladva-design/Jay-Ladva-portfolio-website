import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeExpanded, setActiveExpanded] = useState<string | null>(null);

  const toggleExpand = (num: string) => {
    setActiveExpanded(activeExpanded === num ? null : num);
  };

  return (
    <section
      id="services"
      className="py-24 md:py-36 px-[5%] border-t border-[#111111] bg-[#f4f1eb]"
    >
      {/* Section Label */}
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.25em] text-[#111111] mb-16">
        <span>02 — What I Do</span>
        <span className="font-mono text-[#111111]/50">[Core Capabilities]</span>
      </div>

      {/* Services Grid with 1px Borders */}
      <div className="border-t border-[#111111] grid grid-cols-1 md:grid-cols-2">
        {SERVICES.map((service, idx) => {
          const isOdd = idx % 2 === 0;
          const isExpanded = activeExpanded === service.number;

          return (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`py-12 border-b border-[#111111] flex flex-col justify-between group transition-colors duration-300 ${
                isOdd ? 'md:pr-12 md:border-r border-[#111111]' : 'md:pl-12'
              } hover:bg-[#111111]/[0.02]`}
            >
              <div>
                {/* Top Row: Number and Expand Toggle */}
                <div className="flex items-center justify-between text-xs font-mono text-[#111111]/60 mb-8">
                  <span className="font-bold tracking-widest">{service.number}</span>
                  <button
                    onClick={() => toggleExpand(service.number)}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-mono text-[#111111]/60 hover:text-[#111111] transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Less' : 'Deliverables'}</span>
                    {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-[-0.03em] uppercase leading-[1.05] text-[#111111] mb-5 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-base sm:text-lg text-[#111111]/80 leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List (always previewable or expandable) */}
              <div className={`mt-8 pt-6 border-t border-[#111111]/10 ${isExpanded ? 'block' : 'hidden md:block'}`}>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#111111]/40 block mb-3">
                  Scope & Deliverables
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 border border-[#111111]/20 rounded-full font-medium text-[#111111]/80 bg-[#f4f1eb]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
