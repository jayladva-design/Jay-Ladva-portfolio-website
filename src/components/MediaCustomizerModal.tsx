import React, { useState } from 'react';
import { Project, ProjectMedia } from '../types';
import { X, Image as ImageIcon, Video, Check, RotateCcw, Sparkles } from 'lucide-react';

interface MediaCustomizerModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveMedia: (projectId: string, media: ProjectMedia) => void;
  onResetMedia: (projectId: string) => void;
}

const PRESET_ASSETS: { label: string; media: ProjectMedia }[] = [
  {
    label: 'Motorcycle Action (Photo)',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1400&auto=format&fit=crop',
      caption: 'High-performance street motorcycle with dramatic lighting',
    },
  },
  {
    label: 'Touring Landscape (Photo)',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1400&auto=format&fit=crop',
      caption: 'Adventure touring bike on open mountain terrain',
    },
  },
  {
    label: 'Art Exhibition (Photo)',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1400&auto=format&fit=crop',
      caption: 'Curated gallery exhibition hall with contemporary artworks',
    },
  },
  {
    label: 'Cinematic Reel (Sample Video)',
    media: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      caption: 'High-energy brand campaign motion visual showcase',
    },
  },
  {
    label: 'Editorial Motion (Sample Video)',
    media: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      caption: 'Automotive adventure and highway movement reel',
    },
  },
];

export const MediaCustomizerModal: React.FC<MediaCustomizerModalProps> = ({
  project,
  isOpen,
  onClose,
  onSaveMedia,
  onResetMedia,
}) => {
  if (!isOpen || !project) return null;

  const [mediaType, setMediaType] = useState<'image' | 'video'>(project.media.type);
  const [url, setUrl] = useState(project.media.url);
  const [caption, setCaption] = useState(project.media.caption || '');
  const [previewError, setPreviewError] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    onSaveMedia(project.id, {
      type: mediaType,
      url: url.trim(),
      caption: caption.trim(),
    });
    onClose();
  };

  const handleApplyPreset = (preset: typeof PRESET_ASSETS[0]) => {
    setMediaType(preset.media.type);
    setUrl(preset.media.url);
    setCaption(preset.media.caption || '');
    setPreviewError(false);
  };

  const handleReset = () => {
    onResetMedia(project.id);
    onClose();
  };

  return (
    <div
      id="media-customizer-backdrop"
      className="fixed inset-0 z-50 bg-[#111111]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        id="media-customizer-dialog"
        className="bg-[#f4f1eb] text-[#111111] w-full max-w-xl border-2 border-[#111111] shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 border border-[#111111] hover:bg-[#111111] hover:text-[#f4f1eb] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6 pb-4 border-b border-[#111111]/20">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#111111]/50 block">
            Project Media Showcase
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#111111]">
            Update Media: {project.title}
          </h3>
          <p className="text-xs text-[#111111]/70 mt-1">
            Embed your custom image or video URL (MP4, WebM, or online portfolio link) for this project card.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          {/* Format Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2">
              Media Format
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setMediaType('image');
                  setPreviewError(false);
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 border text-xs uppercase font-bold tracking-wider transition-colors ${
                  mediaType === 'image'
                    ? 'bg-[#111111] text-[#f4f1eb] border-[#111111]'
                    : 'bg-transparent text-[#111111] border-[#111111]/30 hover:border-[#111111]'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Image</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMediaType('video');
                  setPreviewError(false);
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 border text-xs uppercase font-bold tracking-wider transition-colors ${
                  mediaType === 'video'
                    ? 'bg-[#111111] text-[#f4f1eb] border-[#111111]'
                    : 'bg-transparent text-[#111111] border-[#111111]/30 hover:border-[#111111]'
                }`}
              >
                <Video className="w-4 h-4" />
                <span>Video (MP4)</span>
              </button>
            </div>
          </div>

          {/* Media URL */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-1">
              {mediaType === 'image' ? 'Image URL' : 'Video URL (Direct MP4 / WebM)'}
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setPreviewError(false);
              }}
              placeholder={
                mediaType === 'image'
                  ? 'https://example.com/portfolio-image.jpg'
                  : 'https://example.com/portfolio-video.mp4'
              }
              required
              className="w-full px-3 py-2.5 bg-white border border-[#111111] text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#111111]"
            />
          </div>

          {/* Caption */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-1">
              Caption / Media Description (Optional)
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. Campaign reel concept or high-resolution shoot"
              className="w-full px-3 py-2.5 bg-white border border-[#111111] text-xs focus:outline-none focus:ring-2 focus:ring-[#111111]"
            />
          </div>

          {/* Live Preview Box */}
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#111111]/50 block mb-1.5">
              Live Preview
            </span>
            <div className="relative aspect-video w-full bg-[#111111] border border-[#111111] overflow-hidden flex items-center justify-center text-xs text-[#f4f1eb]/60">
              {url ? (
                mediaType === 'image' ? (
                  <img
                    src={url}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    onError={() => setPreviewError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    onError={() => setPreviewError(true)}
                  />
                )
              ) : (
                <span>No URL provided yet</span>
              )}
              {previewError && (
                <div className="absolute inset-0 bg-red-950/80 text-white flex items-center justify-center p-4 text-center text-xs">
                  Unable to load preview. Please verify URL is accessible.
                </div>
              )}
            </div>
          </div>

          {/* Preset Quick Chooser */}
          <div className="pt-2 border-t border-[#111111]/15">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#111111]/60 flex items-center gap-1 mb-2">
              <Sparkles className="w-3 h-3 text-[#111111]" />
              <span>Or Choose Sample Creative Asset</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {PRESET_ASSETS.map((preset, pIdx) => (
                <button
                  key={pIdx}
                  type="button"
                  onClick={() => handleApplyPreset(preset)}
                  className="text-[11px] px-2.5 py-1 border border-[#111111]/30 hover:border-[#111111] bg-white font-medium text-[#111111] transition-colors"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#111111]/20 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs uppercase font-mono tracking-wider text-[#111111]/70 hover:text-red-600 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-[#111111] text-xs uppercase font-bold tracking-wider text-[#111111] hover:bg-black/5"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#111111] text-[#f4f1eb] text-xs uppercase font-bold tracking-wider hover:bg-black/80 flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Save Media</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
