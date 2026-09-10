import React from 'react';
import { motion } from 'motion/react';
import { SEO_STATS } from '../data/portfolioData';
import { TrendingUp, Search, BarChart2, Layers } from 'lucide-react';

export const SeoCaseStudy: React.FC = () => {
  return (
    <section
      id="seo"
      className="py-24 md:py-36 px-[5%] bg-[#111111] text-[#f4f1eb] border-t border-[#f4f1eb]/20"
    >
      {/* Section Label */}
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.25em] text-[#f4f1eb] mb-16 md:mb-24">
        <span>05 — SEO Strategy</span>
        <span className="font-mono text-[#f4f1eb]/50">[Performance Benchmark]</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Giant Left Title */}
        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.05em] text-[#f4f1eb]"
          >
            Search<br />
            Visibility
          </motion.h2>

          <div className="mt-8 pt-8 border-t border-[#f4f1eb]/20 max-w-sm hidden lg:block">
            <span className="text-xs font-mono uppercase tracking-widest text-[#f4f1eb]/50 block mb-2">
              Case Study Client
            </span>
            <p className="text-base font-semibold text-[#f4f1eb]">
              Peakfactory Search Growth Project
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl lg:text-[1.75rem] font-normal leading-relaxed text-[#f4f1eb]/90 max-w-2xl">
              Developed an SEO strategy focused on keyword research,
              competitor analysis, content gaps and on-page/off-page
              optimization.
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#f4f1eb]/20">
              <div className="space-y-1.5">
                <Search className="w-5 h-5 text-[#f4f1eb]/70 mb-2" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#f4f1eb]">
                  Search Intent
                </h4>
                <p className="text-xs text-[#f4f1eb]/70 leading-relaxed">
                  Deep audit of user search phrasing to eliminate keyword cannibalization.
                </p>
              </div>

              <div className="space-y-1.5">
                <Layers className="w-5 h-5 text-[#f4f1eb]/70 mb-2" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#f4f1eb]">
                  Content Gaps
                </h4>
                <p className="text-xs text-[#f4f1eb]/70 leading-relaxed">
                  Competitor gap analysis uncovering high-volume, low-competition queries.
                </p>
              </div>

              <div className="space-y-1.5">
                <TrendingUp className="w-5 h-5 text-[#f4f1eb]/70 mb-2" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#f4f1eb]">
                  Architecture
                </h4>
                <p className="text-xs text-[#f4f1eb]/70 leading-relaxed">
                  On-page schema, internal linking structure, and crawlability optimization.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-16 border-t border-[#f4f1eb]/20">
            {SEO_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="border-t border-[#f4f1eb] pt-5"
              >
                <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[#f4f1eb] leading-none mb-3">
                  {stat.number}
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-[#f4f1eb] mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#f4f1eb]/60 leading-relaxed">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
