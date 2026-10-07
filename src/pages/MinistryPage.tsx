import React, { useState } from 'react';
import { PageId } from '../types';
import { ministryPillars } from '../data/ministryData';
import { ArrowRight, Check, Sparkles, BookOpen, HeartHandshake } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface MinistryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenGiveModal: () => void;
}

export const MinistryPage: React.FC<MinistryPageProps> = ({ onNavigate, onOpenGiveModal }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [selectedPillarId, setSelectedPillarId] = useState(ministryPillars[0].id);

  const selectedPillar = ministryPillars.find((p) => p.id === selectedPillarId) || ministryPillars[0];

  return (
    <div className={`pt-24 sm:pt-28 pb-16 sm:pb-20 transition-colors duration-400 ${
      isLight ? 'bg-[#F8FAF8] text-[#080D0A]' : 'bg-[#050505] text-[#F5F7F5]'
    }`}>
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#168A45] dark:text-[#63D98A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A45]" />
          <span>APOSTOLIC MANDATES</span>
        </div>
        <h1 className={`font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-tight ${
          isLight ? 'text-neutral-950' : 'text-white'
        }`}>
          THE MINISTRY <br />
          <span className="italic text-[#168A45] dark:text-[#63D98A]">PILLARS</span>
        </h1>
        <p className={`text-sm md:text-base max-w-2xl font-light leading-relaxed ${
          isLight ? 'text-gray-600' : 'text-white/70'
        }`}>
          Equipping people to discover purpose, walk in faith and make kingdom impact through 6 strategic spiritual expressions.
        </p>
      </section>

      {/* Grid of all 6 pillars */}
      <section className={`px-4 sm:px-6 md:px-12 py-8 sm:py-12 max-w-7xl mx-auto border-t ${
        isLight ? 'border-gray-200' : 'border-white/10'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ministryPillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer hover:-translate-y-1 ${
                selectedPillarId === pillar.id
                  ? isLight
                    ? 'bg-white border-[#168A45] shadow-lg ring-1 ring-[#168A45]'
                    : 'bg-[#0B2418]/60 border-[#63D98A] shadow-[0_0_30px_rgba(22,138,69,0.3)]'
                  : isLight
                    ? 'bg-[#F9FAF9] border-gray-200 hover:border-[#168A45] hover:bg-white shadow-xs'
                    : 'bg-[#050505] border-white/10 hover:border-[#168A45] hover:bg-[#0B2418]/20'
              }`}
              onClick={() => setSelectedPillarId(pillar.id)}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif-luxury text-3xl font-light text-[#168A45] dark:text-[#63D98A]">
                    {pillar.number}
                  </span>
                  <span className={`text-[10px] font-mono ${isLight ? 'text-gray-400' : 'text-white/40'}`}>
                    {pillar.scriptureReference.split('·')[0]}
                  </span>
                </div>

                <h3 className={`font-serif-luxury text-2xl sm:text-3xl font-medium ${
                  isLight ? 'text-neutral-900' : 'text-white'
                }`}>
                  {pillar.title}
                </h3>

                <p className="text-xs uppercase tracking-wider text-[#168A45] font-semibold">
                  {pillar.subtitle}
                </p>

                <p className={`text-sm font-light leading-relaxed ${isLight ? 'text-gray-600' : 'text-white/70'}`}>
                  {pillar.description}
                </p>

                <div className={`pt-2 space-y-1.5 border-t ${isLight ? 'border-gray-200' : 'border-white/10'}`}>
                  <span className={`text-[10px] uppercase tracking-wider font-mono block ${
                    isLight ? 'text-gray-400' : 'text-white/40'
                  }`}>
                    Strategic Outreaches:
                  </span>
                  {pillar.keyInitiatives.map((init, i) => (
                    <div key={i} className={`flex items-center gap-2 text-xs ${
                      isLight ? 'text-neutral-800' : 'text-white/80'
                    }`}>
                      <Check className="w-3.5 h-3.5 text-[#168A45] shrink-0" />
                      <span>{init}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                isLight ? 'border-gray-200 text-gray-500' : 'border-white/10 text-white/60'
              }`}>
                <span className="text-[10px] font-mono">Scripture: {pillar.scriptureReference}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Deep Dive of Selected Pillar */}
      <section className={`px-4 sm:px-6 md:px-12 py-10 sm:py-16 max-w-7xl mx-auto border-t ${
        isLight ? 'border-gray-200' : 'border-white/10'
      }`}>
        <div className={`p-6 sm:p-10 md:p-14 border space-y-6 sm:space-y-8 shadow-xl ${
          isLight
            ? 'bg-white border-[#168A45]/30'
            : 'bg-gradient-to-br from-[#0B2418]/50 via-[#050505] to-[#050505] border-[#168A45]/40'
        }`}>
          <div className={`flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-b pb-5 sm:pb-6 ${
            isLight ? 'border-gray-200' : 'border-white/10'
          }`}>
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#168A45] dark:text-[#63D98A] font-semibold block mb-1">
                DEEP DIVE MANDATE · {selectedPillar.number}
              </span>
              <h2 className={`font-serif-luxury text-2xl sm:text-3xl md:text-5xl font-medium ${
                isLight ? 'text-neutral-900' : 'text-white'
              }`}>
                {selectedPillar.title} — {selectedPillar.subtitle}
              </h2>
            </div>
            <div className={`text-[11px] sm:text-xs font-mono px-3 py-1.5 border self-start md:self-auto ${
              isLight
                ? 'bg-emerald-50 text-[#0B3B20] border-emerald-200'
                : 'text-[#63D98A] bg-black/40 border-white/10'
            }`}>
              Anchor: {selectedPillar.scriptureReference}
            </div>
          </div>

          <p className={`text-sm sm:text-lg font-light leading-relaxed max-w-3xl ${
            isLight ? 'text-gray-700' : 'text-white/80'
          }`}>
            {selectedPillar.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {selectedPillar.keyInitiatives.map((item, idx) => (
              <div key={idx} className={`p-4 sm:p-5 border space-y-2 ${
                isLight
                  ? 'bg-[#F9FAF9] border-gray-200 shadow-xs'
                  : 'bg-black/60 border-white/10'
              }`}>
                <span className="text-xs text-[#168A45] font-mono">Initiative 0{idx + 1}</span>
                <h4 className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                  isLight ? 'text-neutral-900' : 'text-white'
                }`}>{item}</h4>
                <p className={`text-xs font-light ${isLight ? 'text-gray-600' : 'text-white/60'}`}>
                  Active global ministry deployment advancing the kingdom mandate under Prophet John Lord.
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={onOpenGiveModal}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(22,138,69,0.3)] min-h-[48px] cursor-pointer hover:scale-105"
            >
              <HeartHandshake className="w-4 h-4 text-[#63D98A]" />
              <span>SUPPORT THIS INITIATIVE</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`w-full sm:w-auto px-8 py-3.5 border text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer hover:scale-105 ${
                isLight
                  ? 'bg-white hover:bg-gray-100 text-neutral-900 border-gray-300'
                  : 'bg-white/5 hover:bg-white/10 border-white/20 text-white'
              }`}
            >
              <span>CONNECT WITH SECRETARIAT</span>
              <ArrowRight className="w-4 h-4 text-[#168A45] dark:text-[#63D98A]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
