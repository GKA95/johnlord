import React from 'react';
import { PageId } from '../types';
import { ministryProfile, contactInfo } from '../data/ministryData';
import { PortraitPlaceholder } from '../components/PortraitPlaceholder';
import { ArrowRight, BookOpen, Compass, Shield, Award, Sparkles, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#050505]">
      {/* Hero Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#63D98A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A45]" />
          <span>BIOGRAPHICAL PORTRAIT</span>
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-tight">
          ABOUT PROPHET <br />
          <span className="italic text-[#63D98A]">JOHN LORD</span>
        </h1>
        <p className="font-serif-luxury text-lg sm:text-2xl text-white/80 italic max-w-2xl">
          &ldquo;{ministryProfile.tagline}&rdquo;
        </p>
      </section>

      {/* Main Split Section */}
      <section className="px-4 sm:px-6 md:px-12 py-8 sm:py-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 space-y-6 max-w-sm sm:max-w-md lg:max-w-none mx-auto w-full">
            <PortraitPlaceholder variant="about" className="w-full aspect-[3/4] shadow-2xl" />
            
            <div className="p-5 sm:p-6 bg-[#0B2418]/30 border border-[#168A45]/30 space-y-3">
              <span className="text-[10px] tracking-widest uppercase text-[#63D98A] font-medium block">
                MINISTERIAL IDENTITY
              </span>
              <h4 className="font-serif-luxury text-2xl text-white font-medium">
                Prophet John Lord
              </h4>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Anointed vessel dedicated to the proclamation of the Kingdom of God, prophetic instruction, and equipping generations for spiritual dominance.
              </p>
              <div className="pt-2 border-t border-white/10 text-xs text-white/50 space-y-1">
                <div>Office: <span className="text-white">Prophetic & Apostolic Mandate</span></div>
                <div>Focus: <span className="text-white">Transformation & Kingdom Impact</span></div>
              </div>
            </div>
          </div>

          {/* Biography Content Column */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            <div className="space-y-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#63D98A] font-semibold">
                BIOGRAPHICAL STATEMENT
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-medium text-white">
                A VOICE FOR THIS GENERATION
              </h2>
              <div className="p-5 sm:p-6 bg-white/5 border border-white/10 space-y-3">
                <p className="font-serif-luxury italic text-base sm:text-lg text-white/80 leading-relaxed">
                  {ministryProfile.biography}
                </p>
                <div className="text-[10px] sm:text-[11px] text-white/40 font-mono uppercase tracking-wider">
                  [Official ministerial biography placeholder awaiting archive upload]
                </div>
              </div>
            </div>

            {/* Core Narrative Subsections */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-medium border-b border-white/10 pb-3">
                MINISTERIAL PILLARS & CONVICTIONS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-5 bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#63D98A]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">01. Calling</span>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {ministryProfile.subsections.calling}
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#63D98A]">
                    <Compass className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">02. Vision</span>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {ministryProfile.subsections.vision}
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#63D98A]">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">03. Mission</span>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {ministryProfile.subsections.mission}
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#63D98A]">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">04. Global Mandate</span>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {ministryProfile.subsections.ministry}
                  </p>
                </div>
              </div>
            </div>

            {/* Ministerial Tenets */}
            <div className="space-y-3 sm:space-y-4 pt-4 border-t border-white/10">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#63D98A] font-semibold">
                CORE TENETS OF LEADERSHIP
              </span>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  'Biblical Inerrancy & The Uncompromising Word of God',
                  'Authentic Prophetic Demonstration Governed by Love & Humility',
                  'Kingdom Impact Beyond the Church Walls into Culture & Marketplace',
                  'Generational Stewardship, Mentorship, and Leadership Succession',
                ].map((tenet, idx) => (
                  <div key={idx} className="flex items-start sm:items-center gap-3 text-xs sm:text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-[#63D98A] shrink-0 mt-0.5 sm:mt-0" />
                    <span>{tenet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button
                onClick={() => onNavigate('ministry')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(22,138,69,0.3)] min-h-[48px]"
              >
                <span>EXPLORE THE MINISTRY</span>
                <ArrowRight className="w-4 h-4 text-[#63D98A]" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/5 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center min-h-[48px]"
              >
                <span>MINISTERIAL INVITATIONS</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
