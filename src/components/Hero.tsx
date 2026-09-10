import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <header
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen pt-32 pb-16 px-[5%] flex flex-col justify-between overflow-hidden"
    >
      {/* Top Meta Line */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]/80 pb-6 border-b border-[#111111]/15 gap-2"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#111111]"></span>
          <span>{PERSONAL_INFO.location}</span>
        </div>
        <div className="flex items-center gap-2 text-[#111111]/70">
          <Compass className="w-3.5 h-3.5 text-[#111111]" />
          <span>{PERSONAL_INFO.title}</span>
        </div>
      </motion.div>

      {/* Monumental Headline */}
      <div className="my-auto py-8 md:py-12 select-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold uppercase leading-[0.8] tracking-[-0.06em] text-[#111111]"
        >
          <div className="text-[clamp(4.5rem,15vw,14.5rem)] hover:tracking-[-0.05em] transition-all duration-500">
            JAY
          </div>
          <div className="text-[clamp(4.5rem,15vw,14.5rem)] text-[#111111]/90 hover:text-[#111111] transition-colors duration-300">
            LADVA
          </div>
        </motion.div>
      </div>

      {/* Bottom Information Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8 border-t border-[#111111]/20"
      >
        {/* Description */}
        <div className="md:col-span-7 lg:col-span-8">
          <p className="text-xl md:text-2xl lg:text-3xl font-normal leading-[1.35] text-[#111111] max-w-2xl">
            {PERSONAL_INFO.headline}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-[#f4f1eb] text-xs uppercase font-bold tracking-widest hover:bg-[#111111]/85 transition-colors"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#111111] text-xs uppercase font-bold tracking-widest text-[#111111] hover:bg-[#111111] hover:text-[#f4f1eb] transition-all"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Roles List */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start md:items-end justify-end">
          <span className="text-[10px] uppercase font-mono text-[#111111]/50 tracking-[0.2em] mb-3">
            Core Competencies
          </span>
          <div className="flex flex-col gap-1 text-left md:text-right">
            {PERSONAL_INFO.roles.map((role) => (
              <span
                key={role}
                className="text-xs md:text-sm font-bold uppercase tracking-[0.16em] text-[#111111]"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
};
