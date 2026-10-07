import React from 'react';
import { SermonItem } from '../types';
import { X, ExternalLink, BookOpen, Clock } from 'lucide-react';

interface VideoModalProps {
  sermon: SermonItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ sermon, onClose }) => {
  if (!sermon) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[94vh] sm:max-h-[90vh]">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-[#0B2418]/60 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-2 h-2 rounded-full bg-[#168A45]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#63D98A]">
              Featured Prophetic Broadcast
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {sermon.youtubeId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${sermon.youtubeId}?autoplay=1&rel=0`}
              title={sermon.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8 space-y-4">
              <p className="text-white/60 text-sm">
                Video player configured for: {sermon.title}
              </p>
              <a
                href={sermon.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                <span>Open On YouTube Channel</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Details footer */}
        <div className="p-6 overflow-y-auto space-y-4 bg-[#050505]">
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
            <span className="text-[#63D98A] font-medium">{sermon.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {sermon.duration}
            </span>
            <span>·</span>
            <span>{sermon.date}</span>
          </div>

          <h3
            id="video-modal-title"
            className="font-serif-luxury text-2xl md:text-3xl font-medium text-white"
          >
            {sermon.title}
          </h3>

          <p className="text-sm text-white/70 font-light leading-relaxed">
            {sermon.description}
          </p>

          {sermon.scripture && (
            <div className="flex items-center gap-2 text-xs text-[#63D98A] font-serif-luxury italic pt-2 border-t border-white/5">
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>Scriptural Foundation: {sermon.scripture}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
