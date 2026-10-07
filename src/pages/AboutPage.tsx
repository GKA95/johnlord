import React from 'react';
import { PageId } from '../types';
import { ministryProfile, contactInfo } from '../data/ministryData';
import { PortraitPlaceholder } from '../components/PortraitPlaceholder';
import { ArrowRight, BookOpen, Compass, Shield, Award, Sparkles, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`pt-24 sm:pt-28 pb-16 sm:pb-20 transition-colors duration-400 ${
      isLight ? 'bg-[#F8FAF8] text-[#080D0A]' : 'bg-[#050505] text-[#F5F7F5]'
    }`}>
      {/* Hero Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#168A45] dark:text-[#63D98A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A45]" />
          <span>BIOGRAPHICAL PORTRAIT</span>
        </div>
        <h1 className={`font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-tight ${
          isLight ? 'text-neutral-950' : 'text-white'
        }`}>
          ABOUT PROPHET <br />
          <span className="italic text-[#168A45] dark:text-[#63D98A]">JOHN LORD</span>
        </h1>
        <p className={`font-serif-luxury text-lg sm:text-2xl italic max-w-2xl ${
          isLight ? 'text-gray-700' : 'text-white/80'
        }`}>
          &ldquo;{ministryProfile.tagline}&rdquo;
        </p>
      </section>

      {/* Main Split Section */}
      <section className={`px-4 sm:px-6 md:px-12 py-8 sm:py-12 max-w-7xl mx-auto border-t ${
        isLight ? 'border-gray-200' : 'border-white/10'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 space-y-6 max-w-sm sm:max-w-md lg:max-w-none mx-auto w-full">
            <PortraitPlaceholder variant="about" className="w-full aspect-[3/4] shadow-2xl" />
            
            <div className={`p-5 sm:p-6 border space-y-3 ${
              isLight 
                ? 'bg-white border-gray-200 shadow-sm' 
                : 'bg-[#0B2418]/30 border-[#168A45]/30'
            }`}>
              <span className="text-[10px] tracking-widest uppercase text-[#168A45] dark:text-[#63D98A] font-semibold block">
                MINISTERIAL IDENTITY
              </span>
              <h4 className={`font-serif-luxury text-2xl font-medium ${isLight ? 'text-neutral-900' : 'text-white'}`}>
                Prophet John Lord
              </h4>
              <p className={`text-xs font-light leading-relaxed ${isLight ? 'text-gray-600' : 'text-white/60'}`}>
                Anointed vessel dedicated to the proclamation of the Kingdom of God, prophetic instruction, and equipping generations for spiritual dominance.
              </p>
              <div className={`pt-2 border-t text-xs space-y-1 ${
                isLight ? 'border-gray-200 text-gray-500' : 'border-white/10 text-white/50'
              }`}>
                <div>Office: <span className={isLight ? 'text-neutral-900 font-medium' : 'text-white'}>Prophetic & Apostolic Mandate</span></div>
                <div>Focus: <span className={isLight ? 'text-neutral-900 font-medium' : 'text-white'}>Transformation & Kingdom Impact</span></div>
              </div>
            </div>
          </div>

          {/* Biography Content Column */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            <div className="space-y-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#168A45] dark:text-[#63D98A] font-semibold">
                BIOGRAPHICAL STATEMENT
              </span>
              <h2 className={`font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-medium ${
                isLight ? 'text-neutral-950' : 'text-white'
              }`}>
                A VOICE FOR THIS GENERATION
              </h2>
              <div className={`p-5 sm:p-6 border space-y-3 ${
                isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-white/5 border-white/10'
              }`}>
                <p className={`font-serif-luxury italic text-base sm:text-lg leading-relaxed ${
                  isLight ? 'text-neutral-800' : 'text-white/80'
                }`}>
                  {ministryProfile.biography}
                </p>
              </div>
            </div>

            {/* Core Narrative Subsections */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className={`font-serif-luxury text-xl sm:text-2xl font-medium border-b pb-3 ${
                isLight ? 'text-neutral-900 border-gray-200' : 'text-white border-white/10'
              }`}>
                MINISTERIAL PILLARS & CONVICTIONS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className={`p-4 sm:p-5 border space-y-2 hover:-translate-y-0.5 transition-all ${
                  isLight ? 'bg-white border-gray-200 shadow-xs' : 'bg-white/5 border-white/10'
                }`}>
                  <div className="flex items-center gap-2 text-[#168A45] dark:text-[#63D98A]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">01. Calling</span>
                  </div>
                  <p className={`text-xs font-light leading-relaxed ${isLight ? 'text-gray-600' : 'text-white/70'}`}>
                    {ministryProfile.subsections.calling}
                  </p>
                </div>

                <div className={`p-4 sm:p-5 border space-y-2 hover:-translate-y-0.5 transition-all ${
                  isLight ? 'bg-white border-gray-200 shadow-xs' : 'bg-white/5 border-white/10'
                }`}>
                  <div className="flex items-center gap-2 text-[#168A45] dark:text-[#63D98A]">
                    <Compass className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">02. Vision</span>
                  </div>
                  <p className={`text-xs font-light leading-relaxed ${isLight ? 'text-gray-600' : 'text-white/70'}`}>
                    {ministryProfile.subsections.vision}
                  </p>
                </div>

                <div className={`p-4 sm:p-5 border space-y-2 hover:-translate-y-0.5 transition-all ${
                  isLight ? 'bg-white border-gray-200 shadow-xs' : 'bg-white/5 border-white/10'
                }`}>
                  <div className="flex items-center gap-2 text-[#168A45] dark:text-[#63D98A]">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">03. Mission</span>
                  </div>
                  <p className={`text-xs font-light leading-relaxed ${isLight ? 'text-gray-600' : 'text-white/70'}`}>
                    {ministryProfile.subsections.mission}
                  </p>
                </div>

                <div className={`p-4 sm:p-5 border space-y-2 hover:-translate-y-0.5 transition-all ${
                  isLight ? 'bg-white border-gray-200 shadow-xs' : 'bg-white/5 border-white/10'
                }`}>
                  <div className="flex items-center gap-2 text-[#168A45] dark:text-[#63D98A]">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">04. Global Mandate</span>
                  </div>
                  <p className={`text-xs font-light leading-relaxed ${isLight ? 'text-gray-600' : 'text-white/70'}`}>
                    {ministryProfile.subsections.ministry}
                  </p>
                </div>
              </div>
            </div>

            {/* Ministerial Tenets */}
            <div className={`space-y-3 sm:space-y-4 pt-4 border-t ${
              isLight ? 'border-gray-200' : 'border-white/10'
            }`}>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#168A45] dark:text-[#63D98A] font-semibold">
                CORE TENETS OF LEADERSHIP
              </span>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  'Biblical Inerrancy & The Uncompromising Word of God',
                  'Authentic Prophetic Demonstration Governed by Love & Humility',
                  'Kingdom Impact Beyond the Church Walls into Culture & Marketplace',
                  'Generational Stewardship, Mentorship, and Leadership Succession',
                ].map((tenet, idx) => (
                  <div key={idx} className={`flex items-start sm:items-center gap-3 text-xs sm:text-sm ${
                    isLight ? 'text-neutral-800' : 'text-white/80'
                  }`}>
                    <CheckCircle className="w-4 h-4 text-[#168A45] shrink-0 mt-0.5 sm:mt-0" />
                    <span>{tenet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button
                onClick={() => onNavigate('ministry')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(22,138,69,0.3)] min-h-[48px] cursor-pointer hover:scale-105"
              >
                <span>EXPLORE THE MINISTRY</span>
                <ArrowRight className="w-4 h-4 text-[#63D98A]" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className={`w-full sm:w-auto px-8 py-3.5 border text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center min-h-[48px] cursor-pointer hover:scale-105 ${
                  isLight
                    ? 'bg-white hover:bg-gray-100 text-neutral-900 border-gray-300'
                    : 'bg-transparent hover:bg-white/5 border-white/20 text-white'
                }`}
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
