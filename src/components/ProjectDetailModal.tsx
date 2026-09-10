import React from 'react';
import { Project } from '../types';
import { X, ArrowUpRight, Play, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenMediaCustomizer: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenMediaCustomizer,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div
      id="project-detail-backdrop"
      className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div
        id="project-detail-dialog"
        className="bg-[#f4f1eb] text-[#111111] w-full max-w-4xl border-2 border-[#111111] shadow-2xl relative my-auto max-h-[92vh] flex flex-col overflow-hidden"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#111111] bg-[#f4f1eb]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold bg-[#111111] text-[#f4f1eb] px-2 py-0.5">
              {project.number}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#111111]/70">
              {project.category}
            </span>
            <span className="text-xs text-[#111111]/40">·</span>
            <span className="text-xs uppercase font-medium text-[#111111]">
              {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-[#111111] hover:bg-[#111111] hover:text-[#f4f1eb] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          {/* Main Visual Display (Image or Video) */}
          <div className="relative aspect-video sm:aspect-[16/9] w-full bg-[#111111] border border-[#111111] overflow-hidden group">
            {project.media.type === 'image' ? (
              <img
                src={project.media.url}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={project.media.url}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}

            {/* Media Format Chip */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#111111]/80 backdrop-blur-sm text-[#f4f1eb] text-[10px] font-mono uppercase tracking-widest border border-white/20">
              Portfolio Media · {project.media.type.toUpperCase()}
            </div>

            {/* Quick Edit Media Trigger */}
            <button
              onClick={() => onOpenMediaCustomizer(project)}
              className="absolute bottom-4 right-4 px-3 py-1.5 bg-[#f4f1eb] text-[#111111] border border-[#111111] text-xs uppercase font-bold tracking-wider hover:bg-[#111111] hover:text-[#f4f1eb] transition-colors cursor-pointer shadow-lg"
            >
              Replace Media URL
            </button>
          </div>

          {project.media.caption && (
            <p className="text-xs font-mono text-[#111111]/60 italic">
              ↳ {project.media.caption}
            </p>
          )}

          {/* Title & Core Summary */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#111111] leading-none mb-4">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-[#111111] font-normal leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Strategy / Overview */}
          <div className="pt-6 border-t border-[#111111]/20">
            <span className="text-xs uppercase font-mono tracking-widest text-[#111111]/50 block mb-3">
              Strategic Approach
            </span>
            <p className="text-base text-[#111111]/80 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Deliverables & Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#111111]/20">
            {/* Deliverables */}
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#111111]/50 block mb-3">
                Key Deliverables & Formats
              </span>
              <ul className="space-y-2">
                {project.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2.5 text-sm text-[#111111] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics / Highlights */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#111111]/50 block mb-3">
                  Campaign Benchmarks
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 bg-white/70 border border-[#111111]/20">
                      <span className="text-[10px] uppercase font-mono text-[#111111]/50 block">
                        {m.label}
                      </span>
                      <span className="text-sm font-bold uppercase text-[#111111] mt-1 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#111111] bg-[#f4f1eb] flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 border border-[#111111]/20 text-[#111111]/70"
              >
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#111111] text-[#f4f1eb] text-xs uppercase font-bold tracking-wider hover:bg-black/85"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
