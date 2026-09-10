import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, ProjectMedia } from '../types';
import { INITIAL_PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { MediaCustomizerModal } from './MediaCustomizerModal';
import { SlidersHorizontal, Sparkles, Filter } from 'lucide-react';

const STORAGE_KEY = 'jay_ladva_portfolio_projects_v5';

export const SelectedWork: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore fallback
    }
    return INITIAL_PROJECTS;
  });

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editingMediaProject, setEditingMediaProject] = useState<Project | null>(null);

  // Sync to local storage
  const handleSaveMedia = (projectId: string, newMedia: ProjectMedia) => {
    setProjects((prev) => {
      const updated = prev.map((p) => (p.id === projectId ? { ...p, media: newMedia } : p));
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Storage full or unavailable
      }
      return updated;
    });

    // Also update selectedProject if currently viewing modal
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject((prev) => (prev ? { ...prev, media: newMedia } : null));
    }
  };

  const handleResetMedia = (projectId: string) => {
    const original = INITIAL_PROJECTS.find((p) => p.id === projectId);
    if (!original) return;
    handleSaveMedia(projectId, original.media);
  };

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Social Media', value: 'social' },
    { label: 'Content Strategy', value: 'content' },
    { label: 'Influencer Marketing', value: 'influencer' },
    { label: 'Creative Comm', value: 'creative' },
    { label: 'SEO & Growth', value: 'seo' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.filterTag === activeFilter);

  return (
    <section
      id="work"
      className="py-24 md:py-36 px-[5%] border-t border-[#111111] bg-[#f4f1eb]"
    >
      {/* Top Label & Controls Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#111111] mb-4">
            <span>04 — Selected Work</span>
            <span className="font-mono text-[#111111]/50">[6 Core Studies]</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-[#111111]">
            Featured Campaigns & Strategy
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`text-xs uppercase font-semibold tracking-wider px-3.5 py-1.5 border transition-all cursor-pointer ${
                activeFilter === cat.value
                  ? 'bg-[#111111] text-[#f4f1eb] border-[#111111]'
                  : 'bg-transparent text-[#111111] border-[#111111]/30 hover:border-[#111111]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: 2 Columns matching original editorial style */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelectProject={setSelectedProject}
              onOpenMediaCustomizer={setEditingMediaProject}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Helper Banner */}
      <div className="mt-12 p-4 border border-[#111111]/20 bg-[#111111]/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#111111]/70">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#111111]" />
          <span>Interactive Media Slots: You can click the "Media" icon on any card to embed your custom photos or video links.</span>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem(STORAGE_KEY);
            setProjects(INITIAL_PROJECTS);
          }}
          className="text-xs uppercase tracking-wider font-sans font-semibold text-[#111111] hover:underline"
        >
          Reset All Media
        </button>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenMediaCustomizer={(p) => {
          setSelectedProject(null);
          setEditingMediaProject(p);
        }}
      />

      {/* Media Customizer Modal */}
      <MediaCustomizerModal
        project={editingMediaProject}
        isOpen={!!editingMediaProject}
        onClose={() => setEditingMediaProject(null)}
        onSaveMedia={handleSaveMedia}
        onResetMedia={handleResetMedia}
      />
    </section>
  );
};
