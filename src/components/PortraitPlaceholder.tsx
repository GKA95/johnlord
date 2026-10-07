import React, { useState } from 'react';
import { Camera, Sparkles, Image as ImageIcon, Upload } from 'lucide-react';

interface PortraitPlaceholderProps {
  className?: string;
  variant?: 'hero' | 'about' | 'card' | 'compact';
  customImage?: string;
  allowUploadPreview?: boolean;
}

export const PortraitPlaceholder: React.FC<PortraitPlaceholderProps> = ({
  className = '',
  variant = 'about',
  customImage,
  allowUploadPreview = true,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(customImage || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const isHero = variant === 'hero';

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b from-[#0B2418]/60 via-[#050505] to-[#050505] border border-white/10 group select-none ${className}`}
      style={{
        boxShadow: '0 20px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}
    >
      {previewUrl ? (
        <div className="relative w-full h-full">
          <img
            src={previewUrl}
            alt="Prophet John Lord"
            className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          {allowUploadPreview && (
            <label className="absolute top-4 right-4 z-20 cursor-pointer bg-[#050505]/80 hover:bg-[#168A45] text-white/80 hover:text-white px-3 py-1.5 text-xs rounded transition-colors backdrop-blur-md border border-white/10 flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5" />
              <span>Change Photo</span>
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
          )}
        </div>
      ) : (
        <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 min-h-[300px] sm:min-h-[360px] md:min-h-[380px]">
          {/* Subtle architectural & photographic guides */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {/* Rule of thirds / viewfinder guides */}
            <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#63D98A]/40 to-transparent" />
            <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#63D98A]/40 to-transparent" />
            <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-[#63D98A]/40 to-transparent" />
            <div className="absolute top-0 bottom-0 right-1/3 w-[1px] bg-gradient-to-b from-transparent via-[#63D98A]/40 to-transparent" />
          </div>

          {/* Top corner branding & metadata */}
          <div className="relative z-10 flex items-center justify-between text-xs tracking-wider uppercase text-white/40">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#168A45] animate-pulse shrink-0" />
              <span className="text-[#63D98A] font-medium tracking-widest text-[9px] sm:text-[10px]">Official Portrait Studio</span>
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] text-white/30 truncate max-w-[120px] sm:max-w-none text-right">PROPHET JOHN LORD</span>
          </div>

          {/* Center Monogram & Cinematic Silhouette */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4 sm:py-8 text-center">
            {/* Glowing ring */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center border border-[#168A45]/40 bg-[#0B2418]/50 shadow-[0_0_40px_rgba(22,138,69,0.25)] mb-4 sm:mb-6 shrink-0">
              <div className="absolute inset-2 rounded-full border border-white/5 flex items-center justify-center">
                <span className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-[#F5F7F5]">
                  PJL
                </span>
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#63D98A] opacity-75" />
            </div>

            {/* Clear, intentional placeholder directive */}
            <div className="max-w-xs space-y-1.5 sm:space-y-2 px-2">
              <div className="inline-block px-2.5 py-1 sm:px-3 sm:py-1 bg-[#168A45]/20 border border-[#168A45]/40 text-[#63D98A] text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase">
                REPLACE WITH PROPHET JOHN LORD PHOTO
              </div>
              <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed font-light">
                Reserved for official high-resolution ministerial portrait of Prophet John Lord.
              </p>
            </div>

            {/* Optional quick upload preview for instant local testing */}
            {allowUploadPreview && (
              <div className="mt-3 sm:mt-4">
                <label className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded transition-all cursor-pointer border border-white/10">
                  <Camera className="w-3.5 h-3.5 text-[#63D98A]" />
                  <span>Preview Custom Photo</span>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </label>
              </div>
            )}
          </div>

          {/* Bottom editorial caption */}
          <div className="relative z-10 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
            <span className="font-serif-luxury italic text-xs sm:text-sm text-[#F5F7F5]/80">Prophetic Mandate</span>
            <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#63D98A]/80">Editorial Asset Slot</span>
          </div>

          {/* Radial ambient glow */}
          <div className="absolute inset-0 bg-radial from-[#168A45]/10 via-transparent to-transparent pointer-events-none" />
        </div>
      )}
    </div>
  );
};
