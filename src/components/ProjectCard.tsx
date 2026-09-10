import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight, Video, Image as ImageIcon, Edit3, Play, Pause } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelectProject: (project: Project) => void;
  onOpenMediaCustomizer: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelectProject,
  onOpenMediaCustomizer,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  // Color scheme matching user's original CSS alternating pattern:
  // 1st: #111 (dark)
  // 2nd: #d9d3c8 (light warm gray)
  // 3rd: #c9c2b5 (sand)
  // 4th: #111 (dark)
  // 5th: #d9d3c8 (light warm gray)
  // 6th: #111 (dark)
  const getCardTheme = (idx: number) => {
    const mod = idx % 4;
    if (mod === 0) return { bg: 'bg-[#111111]', text: 'text-[#f4f1eb]', border: 'border-[#111111]', isDark: true };
    if (mod === 1) return { bg: 'bg-[#d9d3c8]', text: 'text-[#111111]', border: 'border-[#111111]', isDark: false };
    if (mod === 2) return { bg: 'bg-[#c9c2b5]', text: 'text-[#111111]', border: 'border-[#111111]', isDark: false };
    return { bg: 'bg-[#111111]', text: 'text-[#f4f1eb]', border: 'border-[#111111]', isDark: true };
  };

  const theme = getCardTheme(index);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12 }}
      className={`min-h-[540px] p-6 sm:p-9 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 border ${theme.border} ${theme.bg} ${theme.text} relative group`}
    >
      {/* Top Bar: Number and Category */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest pb-4 border-b border-current/20">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm">{project.number}</span>
          <span className="opacity-40">/ 06</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-sans font-semibold tracking-wider">{project.category}</span>
        </div>
      </div>

      {/* Visual Media Showcase Frame (Image or Video) */}
      <div className="my-6 relative aspect-[16/10] w-full overflow-hidden border border-current/20 bg-black/20 group/media">
        {project.media.type === 'image' ? (
          <img
            src={project.media.url}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          <video
            src={project.media.url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        )}

        {/* Media Type Badge */}
        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/70 backdrop-blur-sm text-[#f4f1eb] text-[10px] font-mono uppercase tracking-wider flex items-center gap-1">
          {project.media.type === 'video' ? (
            <>
              <Video className="w-3 h-3 text-red-400" />
              <span>Video</span>
            </>
          ) : (
            <>
              <ImageIcon className="w-3 h-3 text-sky-400" />
              <span>Visual</span>
            </>
          )}
        </div>

        {/* Media Customizer Trigger Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenMediaCustomizer(project);
          }}
          title="Add / Replace project image or video"
          className="absolute bottom-2.5 right-2.5 p-1.5 rounded bg-white/90 text-[#111111] hover:bg-white hover:scale-105 transition-all cursor-pointer opacity-80 group-hover/media:opacity-100 shadow-md flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider"
        >
          <Edit3 className="w-3 h-3" />
          <span className="hidden sm:inline">Media</span>
        </button>
      </div>

      {/* Main Content: Title & Description */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] mb-4">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed opacity-90 max-w-md">
            {project.description}
          </p>
        </div>

        {/* Bottom Actions & Details */}
        <div className="pt-6 mt-6 border-t border-current/20 flex items-center justify-between">
          <div className="text-[11px] uppercase font-mono tracking-wider opacity-70">
            {project.client}
          </div>

          <button
            onClick={() => onSelectProject(project)}
            className={`inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest py-2 px-3 border transition-colors cursor-pointer ${
              theme.isDark
                ? 'border-[#f4f1eb] text-[#f4f1eb] hover:bg-[#f4f1eb] hover:text-[#111111]'
                : 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#f4f1eb]'
            }`}
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
