import React, { useState } from 'react';
import { ResourceItem } from '../types';
import { X, BookOpen, Download, CheckCircle2, FileText, Share2 } from 'lucide-react';

interface ResourceModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, onClose }) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!resource) return null;

  const handleDownload = () => {
    setDownloadStarted(true);
    // Simulate digital asset release
    setTimeout(() => {
      setDownloadStarted(false);
    }, 4000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-[#0B2418]/60 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#168A45]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#63D98A]">
              Ministry Resource Library
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="w-28 h-36 sm:w-40 sm:h-56 shrink-0 bg-[#0B2418] border border-[#168A45]/40 overflow-hidden shadow-xl relative flex items-center justify-center mx-auto sm:mx-0">
              {resource.coverImage ? (
                <img
                  src={resource.coverImage}
                  alt={resource.title}
                  className="w-full h-full object-cover filter contrast-105"
                />
              ) : (
                <BookOpen className="w-12 h-12 text-[#63D98A]/50" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2 right-2 text-[9px] uppercase tracking-wider text-center text-white/80 font-mono">
                {resource.type}
              </span>
            </div>

            <div className="space-y-2 sm:space-y-3 flex-1 text-center sm:text-left">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#63D98A] font-medium block">
                {resource.type} · {resource.format}
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-medium text-white leading-tight">
                {resource.title}
              </h3>
              <p className="text-xs text-white/50">
                Authored by <span className="text-white font-medium">{resource.author}</span>
              </p>

              <div className="pt-1 sm:pt-2 text-xs text-white/70 space-y-1">
                <div>Format: <span className="text-white">{resource.format}</span></div>
                {resource.pagesOrDuration && (
                  <div>Volume: <span className="text-white">{resource.pagesOrDuration}</span></div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-white/80 font-medium">
              Overview & Revelation
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              {resource.description}
            </p>
          </div>

          {downloadStarted && (
            <div className="p-3.5 sm:p-4 bg-[#0B2418] border border-[#168A45] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#63D98A] shrink-0" />
              <div className="text-xs text-white">
                <span className="font-semibold block">Download Initiated</span>
                Digital package is preparing. For hardcovers, contact the ministry bookstore secretariat.
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10">
            <button
              onClick={handleDownload}
              className="flex-1 py-3.5 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(22,138,69,0.3)] min-h-[44px]"
            >
              <Download className="w-4 h-4 text-[#63D98A]" />
              <span>ACCESS / DOWNLOAD STUDY ASSET</span>
            </button>

            <button
              onClick={handleShare}
              className="px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Share2 className="w-4 h-4 text-[#63D98A]" />
              <span>{copied ? 'LINK COPIED' : 'SHARE'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
