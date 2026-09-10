import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Send, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Collaboration Inquiry — Jay Ladva Portfolio'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="min-h-[85vh] py-24 md:py-36 px-[5%] border-t border-[#111111] bg-[#f4f1eb] flex flex-col justify-between"
    >
      {/* Section Label */}
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.25em] text-[#111111] mb-12">
        <span>06 — Contact</span>
        <span className="font-mono text-[#111111]/50">[Get In Touch]</span>
      </div>

      {/* Monumental Headline */}
      <div className="my-auto py-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(4.5rem,14vw,12rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.06em] text-[#111111] select-none"
        >
          Let's<br />
          Work<br />
          Together.
        </motion.h2>
      </div>

      {/* Contact Grid & Quick Dispatch */}
      <div className="pt-12 border-t border-[#111111] grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        {/* Contact Info */}
        <div className="lg:col-span-6 space-y-4">
          <div className="text-xl sm:text-2xl font-normal leading-relaxed text-[#111111]">
            <p className="font-medium">{PERSONAL_INFO.location}</p>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="underline underline-offset-4 hover:opacity-70 transition-opacity font-semibold"
              >
                {PERSONAL_INFO.email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#111111] text-xs font-mono uppercase tracking-wider hover:bg-[#111111] hover:text-[#f4f1eb] transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4 text-xs font-bold uppercase tracking-[0.15em] text-[#111111]">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity border-b border-current pb-0.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity border-b border-current pb-0.5"
            >
              <span>Direct Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="lg:col-span-6 bg-white/70 p-6 sm:p-8 border border-[#111111]">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#111111]/50 block mb-2">
            Direct Inquiry
          </span>
          <h4 className="font-display text-xl uppercase font-bold text-[#111111] mb-4">
            Send a Quick Note
          </h4>

          <form onSubmit={handleQuickSend} className="space-y-3">
            <div>
              <input
                type="text"
                placeholder="Subject or Project Type (e.g. Brand Strategy / Summer Role)"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#111111]/30 focus:border-[#111111] text-xs focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Tell me a bit about the opportunity or project..."
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#111111]/30 focus:border-[#111111] text-xs focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#111111] text-[#f4f1eb] text-xs uppercase font-bold tracking-widest hover:bg-black/85 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Draft Email & Send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
