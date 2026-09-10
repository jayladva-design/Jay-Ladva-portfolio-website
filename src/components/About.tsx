import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Flame } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-[5%] border-t border-[#111111] bg-[#f4f1eb]"
    >
      {/* Section Label */}
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.25em] text-[#111111] mb-16 md:mb-24">
        <span>01 — About</span>
        <span className="font-mono text-[#111111]/50">[Profile & Thesis]</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Heading */}
        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display text-[clamp(3.5rem,7vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] text-[#111111]"
          >
            Hi,<br />
            I'm Jay.
          </motion.h2>

          <div className="mt-8 pt-8 border-t border-[#111111]/15 max-w-sm hidden lg:block">
            <span className="text-[11px] uppercase tracking-widest text-[#111111]/50 font-mono block mb-2">
              Current Brands Engaged
            </span>
            <p className="text-sm font-medium text-[#111111] leading-relaxed">
              Bajaj Pulsar · Dominar · KTM · Jehangir Art Gallery
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-xl md:text-2xl lg:text-[1.65rem] font-normal leading-[1.45] text-[#111111]"
          >
            {PERSONAL_INFO.bio.map((paragraph, index) => (
              <p key={index} className="text-[#111111]/90">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-[#111111]/20">
            <div>
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#111111]/50 block mb-1">
                Strategy
              </span>
              <p className="text-sm font-semibold text-[#111111]">
                Data-backed audience insights & platform-native content
              </p>
            </div>
            <div>
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#111111]/50 block mb-1">
                Execution
              </span>
              <p className="text-sm font-semibold text-[#111111]">
                Hands-on campaign production, creator vetting & tracking
              </p>
            </div>
            <div>
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#111111]/50 block mb-1">
                Outcome
              </span>
              <p className="text-sm font-semibold text-[#111111]">
                Elevated brand sentiment, organic search lift & performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
