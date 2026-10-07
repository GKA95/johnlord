import React, { useState } from 'react';
import { PageId } from '../types';
import { ministryPillars } from '../data/ministryData';
import { ArrowRight, Check, Sparkles, BookOpen, HeartHandshake } from 'lucide-react';

interface MinistryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenGiveModal: () => void;
}

export const MinistryPage: React.FC<MinistryPageProps> = ({ onNavigate, onOpenGiveModal }) => {
  const [selectedPillarId, setSelectedPillarId] = useState(ministryPillars[0].id);

  const selectedPillar = ministryPillars.find((p) => p.id === selectedPillarId) || ministryPillars[0];

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#050505]">
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#63D98A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A45]" />
          <span>APOSTOLIC MANDATES</span>
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-tight">
          THE MINISTRY <br />
          <span className="italic text-[#63D98A]">PILLARS</span>
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-2xl font-light leading-relaxed">
          Equipping people to discover purpose, walk in faith and make kingdom impact through 6 strategic spiritual expressions.
        </p>
      </section>

      {/* Grid of all 6 pillars */}
      <section className="px-4 sm:px-6 md:px-12 py-8 sm:py-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ministryPillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer ${
                selectedPillarId === pillar.id
                  ? 'bg-[#0B2418]/60 border-[#63D98A] shadow-[0_0_30px_rgba(22,138,69,0.3)]'
                  : 'bg-[#050505] border-white/10 hover:border-[#168A45] hover:bg-[#0B2418]/20'
              }`}
              onClick={() => setSelectedPillarId(pillar.id)}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif-luxury text-3xl font-light text-[#63D98A]">
                    {pillar.number}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono">
                    {pillar.scriptureReference.split('·')[0]}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white">
                  {pillar.title}
                </h3>

                <p className="text-xs uppercase tracking-wider text-[#63D98A] font-medium">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-2 space-y-1.5 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono block">
                    Strategic Outreaches:
                  </span>
                  {pillar.keyInitiatives.map((init, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-[#63D98A] shrink-0" />
                      <span>{init}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span className="text-[10px] font-mono">Scripture: {pillar.scriptureReference}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Deep Dive of Selected Pillar */}
      <section className="px-4 sm:px-6 md:px-12 py-10 sm:py-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="p-6 sm:p-10 md:p-14 bg-gradient-to-br from-[#0B2418]/50 via-[#050505] to-[#050505] border border-[#168A45]/40 space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-b border-white/10 pb-5 sm:pb-6">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#63D98A] font-semibold block mb-1">
                DEEP DIVE MANDATE · {selectedPillar.number}
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-5xl font-medium text-white">
                {selectedPillar.title} — {selectedPillar.subtitle}
              </h2>
            </div>
            <div className="text-[11px] sm:text-xs text-[#63D98A] font-mono px-3 py-1.5 bg-black/40 border border-white/10 self-start md:self-auto">
              Anchor: {selectedPillar.scriptureReference}
            </div>
          </div>

          <p className="text-sm sm:text-lg text-white/80 font-light leading-relaxed max-w-3xl">
            {selectedPillar.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {selectedPillar.keyInitiatives.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 bg-black/60 border border-white/10 space-y-2">
                <span className="text-xs text-[#63D98A] font-mono">Initiative 0{idx + 1}</span>
                <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">{item}</h4>
                <p className="text-xs text-white/60 font-light">
                  Active global ministry deployment advancing the kingdom mandate under Prophet John Lord.
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={onOpenGiveModal}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(22,138,69,0.3)] min-h-[48px]"
            >
              <HeartHandshake className="w-4 h-4 text-[#63D98A]" />
              <span>SUPPORT THIS INITIATIVE</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>CONNECT WITH SECRETARIAT</span>
              <ArrowRight className="w-4 h-4 text-[#63D98A]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
