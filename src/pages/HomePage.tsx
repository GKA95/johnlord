import React, { useState } from 'react';
import { PageId, SermonItem, EventItem, ResourceItem } from '../types';
import { 
  ministryProfile, 
  ministryPillars, 
  placeholderSermons, 
  placeholderEvents, 
  placeholderResources, 
  placeholderTestimonials,
  socialLinks,
  contactInfo
} from '../data/ministryData';
import { PortraitPlaceholder } from '../components/PortraitPlaceholder';
import { NewsletterSection } from '../components/NewsletterSection';
import { 
  Play, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  BookOpen, 
  Download, 
  Flame, 
  Sparkles, 
  Quote, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenVideo: (sermon: SermonItem) => void;
  onOpenEvent: (event: EventItem) => void;
  onOpenResource: (resource: ResourceItem) => void;
  onOpenGiveModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenVideo,
  onOpenEvent,
  onOpenResource,
  onOpenGiveModal,
}) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const featuredSermon = placeholderSermons[0];

  const handleNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => 
      (prev + 1) % placeholderTestimonials.length
    );
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIndex((prev) => 
      prev === 0 ? placeholderTestimonials.length - 1 : prev - 1
    );
  };

  const currentTestimony = placeholderTestimonials[activeTestimonialIndex];

  return (
    <div className="relative overflow-hidden bg-[#050505]">
      
      {/* ========================================================
          1. HERO SECTION (Full-screen, Cinematic, Dramatic)
         ======================================================== */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-14 px-4 sm:px-6 md:px-12 bg-cinematic-glow overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#0B2418]/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-40 right-10 w-96 h-96 bg-[#168A45]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1 bg-[#0B2418]/80 border border-[#168A45]/40 text-[#63D98A] text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#63D98A] animate-pulse" />
                <span>APOSTOLIC & PROPHETIC MANDATE</span>
              </div>

              <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] break-words">
                PROPHET <br />
                <span className="italic font-light text-white/95">JOHN LORD</span>
              </h1>

              <p className="font-serif-luxury text-lg sm:text-2xl text-[#63D98A] italic tracking-wide">
                &ldquo;{ministryProfile.tagline}&rdquo;
              </p>
            </div>

            <p className="text-sm md:text-base text-white/70 max-w-xl font-light leading-relaxed">
              {ministryProfile.subTagline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={() => onOpenVideo(featuredSermon)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_4px_25px_rgba(22,138,69,0.35)] hover:shadow-[0_4px_35px_rgba(99,217,138,0.5)] group min-h-[48px]"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#63D98A] group-hover:scale-110 transition-transform" />
                <span>WATCH MESSAGES</span>
              </button>

              <button
                onClick={() => onNavigate('ministry')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent hover:bg-white/5 text-white/90 hover:text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 border border-white/20 hover:border-[#63D98A]/50 flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <span>DISCOVER THE MINISTRY</span>
                <ArrowRight className="w-4 h-4 text-[#63D98A] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quiet metadata line */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-white/40 font-mono">
              <span>GLOBAL REVELATION</span>
              <span>·</span>
              <span>SUPERNATURAL REALMS</span>
              <span>·</span>
              <span>KINGDOM DISCIPLES</span>
            </div>
          </div>

          {/* Right Column: Large Cinematic Portrait Placeholder */}
          <div className="lg:col-span-5 flex justify-center mt-2 lg:mt-0">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#168A45]/30 to-transparent blur-xl opacity-50" />
              <PortraitPlaceholder
                variant="hero"
                className="w-full aspect-[4/5] shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-white/40 text-[9px] sm:text-[10px] tracking-widest uppercase pointer-events-none">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#63D98A]" />
        </div>
      </section>


      {/* ========================================================
          2. INTRODUCTION SECTION (Large Editorial Statement)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-[#050505] border-t border-white/10">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 text-center">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#63D98A] font-semibold">
            EDITORIAL STATEMENT
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F5F7F5] leading-tight tracking-wide">
            A VOICE OF FAITH. <br />
            <span className="italic text-[#63D98A]">A LIFE OF PURPOSE.</span> <br />
            A MANDATE FOR IMPACT.
          </h2>

          <div className="max-w-2xl mx-auto text-sm sm:text-lg text-white/70 font-light leading-relaxed space-y-3 sm:space-y-4">
            <p className="italic font-serif-luxury text-lg sm:text-xl text-white/90">
              &ldquo;{ministryProfile.introduction}&rdquo;
            </p>
            <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-mono">
              [Editable Introductory Narrative Placeholder]
            </p>
          </div>

          <div className="pt-2 sm:pt-4">
            <button
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 bg-white/5 hover:bg-[#168A45]/20 text-white text-xs font-semibold tracking-widest uppercase border border-white/15 hover:border-[#63D98A] transition-all group min-h-[48px]"
            >
              <span>LEARN MORE ABOUT PROPHET JOHN LORD</span>
              <ArrowRight className="w-4 h-4 text-[#63D98A] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>


      {/* ========================================================
          3. ABOUT PROPHET JOHN LORD (Sophisticated Split Screen)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#050505] via-[#0B2418]/20 to-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: Portrait Placeholder */}
          <div className="lg:col-span-5 order-2 lg:order-1 max-w-sm sm:max-w-md lg:max-w-none mx-auto w-full">
            <PortraitPlaceholder
              variant="about"
              className="w-full aspect-[3/4] shadow-2xl"
            />
          </div>

          {/* Right: Editorial Bio & Mandate */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
                ABOUT THE PROPHET
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F7F5] leading-tight">
                CALLED TO IMPACT GENERATIONS
              </h2>
            </div>

            <div className="p-4 sm:p-5 bg-white/5 border border-white/10 space-y-2">
              <p className="text-sm md:text-base text-white/80 font-light italic font-serif-luxury leading-relaxed">
                {ministryProfile.biography}
              </p>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono block">
                Official Biographical Statement Placeholder
              </span>
            </div>

            {/* Editable Subsections Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="p-4 bg-[#050505] border border-white/10 space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#63D98A] font-semibold">
                  01 · Calling
                </span>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {ministryProfile.subsections.calling}
                </p>
              </div>

              <div className="p-4 bg-[#050505] border border-white/10 space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#63D98A] font-semibold">
                  02 · Vision
                </span>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {ministryProfile.subsections.vision}
                </p>
              </div>

              <div className="p-4 bg-[#050505] border border-white/10 space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#63D98A] font-semibold">
                  03 · Mission
                </span>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {ministryProfile.subsections.mission}
                </p>
              </div>

              <div className="p-4 bg-[#050505] border border-white/10 space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#63D98A] font-semibold">
                  04 · Ministry Scope
                </span>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {ministryProfile.subsections.ministry}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(22,138,69,0.3)] min-h-[48px]"
              >
                <span>READ FULL STORY</span>
                <ArrowRight className="w-4 h-4 text-[#63D98A]" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          4. THE MINISTRY (6 Core Pillars)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
                APOSTOLIC PILLARS
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F7F5]">
                THE MINISTRY
              </h2>
            </div>
            <p className="text-sm md:text-base text-white/60 max-w-md font-light leading-relaxed">
              Equipping people to discover purpose, walk in faith and make kingdom impact across the nations.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {ministryPillars.map((pillar) => (
              <div
                key={pillar.id}
                onClick={() => onNavigate('ministry')}
                className="group p-6 sm:p-8 bg-[#0B2418]/25 hover:bg-[#0B2418]/60 border border-white/10 hover:border-[#168A45] transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(22,138,69,0.2)]"
              >
                {/* Subtle top light bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#63D98A] transition-all duration-500" />

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-luxury text-2xl font-light text-[#63D98A]">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase text-white/40 font-mono">
                      {pillar.scriptureReference.split('·')[0]}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white group-hover:text-[#63D98A] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider text-[#63D98A] font-medium">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 group-hover:text-white">
                  <span className="tracking-widest uppercase font-semibold text-[10px]">
                    EXPLORE MANDATE
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#63D98A] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          5. FEATURED MESSAGE (Dramatic Full-Width Video Section)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-cinematic-dark border-t border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-2 sm:space-y-3">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
              FEATURED BROADCAST
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F7F5]">
              LATEST MESSAGE
            </h2>
          </div>

          {/* Large Video Section Card */}
          <div className="relative min-h-[380px] sm:min-h-0 sm:aspect-[16/9] w-full max-w-5xl mx-auto bg-black border border-white/15 overflow-hidden group shadow-2xl flex flex-col justify-between">
            <img
              src={featuredSermon.thumbnail}
              alt={featuredSermon.title}
              className="absolute inset-0 w-full h-full object-cover filter brightness-70 group-hover:scale-105 transition-all duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

            {/* Top Bar for Mobile */}
            <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between text-xs text-white/60">
              <span className="px-2.5 py-1 bg-black/60 border border-white/10 text-[#63D98A] font-mono text-[10px] uppercase">
                {featuredSermon.category}
              </span>
              <span className="text-[11px] font-mono text-white/70">{featuredSermon.duration}</span>
            </div>

            {/* Centered Play Button */}
            <div className="relative z-10 my-auto flex justify-center py-4">
              <button
                onClick={() => onOpenVideo(featuredSermon)}
                className="w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-[#168A45]/90 hover:bg-[#168A45] text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_50px_rgba(22,138,69,0.7)] group-hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#63D98A]"
                aria-label={`Play sermon: ${featuredSermon.title}`}
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current text-white translate-x-0.5" />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 p-5 sm:p-8 md:p-10 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
                <h3 className="font-serif-luxury text-xl sm:text-3xl md:text-4xl font-medium text-white leading-snug">
                  &ldquo;{featuredSermon.title}&rdquo;
                </h3>
                <p className="text-xs md:text-sm text-white/70 line-clamp-2 font-light">
                  {featuredSermon.description}
                </p>
              </div>

              <button
                onClick={() => onOpenVideo(featuredSermon)}
                className="w-full sm:w-auto px-6 py-3 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all shrink-0 flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>WATCH MESSAGE</span>
                <Play className="w-3.5 h-3.5 fill-current text-[#63D98A]" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          6. SERMONS (Latest Messages Grid)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
                APOSTOLIC RELEASES
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F7F5]">
                LATEST MESSAGES
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate('sermons')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#63D98A] hover:text-white transition-colors self-start sm:self-auto py-1"
            >
              <span>VIEW ALL MESSAGES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {placeholderSermons.slice(0, 3).map((sermon) => (
              <div
                key={sermon.id}
                className="group bg-[#0B2418]/20 border border-white/10 hover:border-[#168A45] overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <img
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    
                    <button
                      onClick={() => onOpenVideo(sermon)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50"
                      aria-label={`Watch ${sermon.title}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#168A45] text-white flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </button>

                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 text-[10px] text-white/90 font-mono">
                      {sermon.duration}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-white/50">
                      <span className="text-[#63D98A] font-medium">{sermon.category}</span>
                      <span>{sermon.date}</span>
                    </div>

                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-white group-hover:text-[#63D98A] transition-colors leading-snug">
                      {sermon.title}
                    </h3>

                    <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">
                      {sermon.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => onOpenVideo(sermon)}
                    className="w-full py-3 bg-white/5 hover:bg-[#168A45] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border border-white/10 group-hover:border-[#168A45] min-h-[44px]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#63D98A] group-hover:text-white" />
                    <span>WATCH BROADCAST</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          7. EVENTS (Upcoming Gatherings)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#050505] via-[#0B2418]/25 to-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
                HOLY CONVOCATIONS
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F7F5]">
                UPCOMING EVENTS
              </h2>
            </div>

            <button
              onClick={() => onNavigate('events')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#63D98A] hover:text-white transition-colors self-start sm:self-auto py-1"
            >
              <span>VIEW FULL ITINERARY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {placeholderEvents.slice(0, 4).map((evt) => (
              <div
                key={evt.id}
                className="p-6 sm:p-8 bg-[#050505] border border-white/10 hover:border-[#168A45] transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#63D98A] uppercase tracking-wider font-semibold">
                      {evt.category}
                    </span>
                    <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/70 text-[10px] tracking-wider uppercase">
                      Seat Reservation Open
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white group-hover:text-[#63D98A] transition-colors">
                    {evt.title}
                  </h3>

                  <div className="space-y-2 text-xs text-white/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#63D98A] shrink-0" />
                      <span className="font-medium text-white">{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#63D98A] shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#63D98A] shrink-0" />
                      <span className="truncate">{evt.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onOpenEvent(evt)}
                    className="w-full py-3.5 bg-[#0B2418] hover:bg-[#168A45] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border border-[#168A45]/40 min-h-[44px]"
                  >
                    <span>LEARN MORE & RESERVE SEAT</span>
                    <ArrowRight className="w-4 h-4 text-[#63D98A] group-hover:text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          8. RESOURCES (Books, Devotionals, Teachings)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
                KINGDOM CURRICULUM
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F7F5]">
                MINISTRY RESOURCES
              </h2>
            </div>

            <button
              onClick={() => onNavigate('resources')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#63D98A] hover:text-white transition-colors self-start sm:self-auto py-1"
            >
              <span>EXPLORE ALL RESOURCES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {placeholderResources.map((res) => (
              <div
                key={res.id}
                className="group bg-[#0B2418]/20 border border-white/10 hover:border-[#168A45] p-5 flex flex-col justify-between space-y-5 transition-all"
              >
                <div className="space-y-4">
                  {/* Cover */}
                  <div className="aspect-[3/4] w-full bg-[#0B2418] border border-white/10 overflow-hidden relative shadow-lg">
                    <img
                      src={res.coverImage}
                      alt={res.title}
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-[9px] uppercase tracking-wider text-[#63D98A] font-mono">
                      {res.type}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif-luxury text-xl font-medium text-white group-hover:text-[#63D98A] transition-colors leading-snug">
                      {res.title}
                    </h3>
                    <p className="text-[11px] text-white/50">{res.format}</p>
                  </div>

                  <p className="text-xs text-white/60 font-light line-clamp-3">
                    {res.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenResource(res)}
                  className="w-full py-3 bg-white/5 hover:bg-[#168A45] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 border border-white/10 min-h-[44px]"
                >
                  <Download className="w-3.5 h-3.5 text-[#63D98A]" />
                  <span>ACCESS ASSET</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          9. TESTIMONIALS (Elegant Slider / Carousel)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#050505] via-[#0B2418]/30 to-[#050505] border-t border-white/10 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 text-center relative z-10">
          <div className="space-y-2">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
              EVIDENCE OF GRACE
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F7F5]">
              TESTIMONIES
            </h2>
          </div>

          <div className="relative p-6 sm:p-10 md:p-14 bg-[#050505] border border-white/10 shadow-2xl space-y-5 sm:space-y-6">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#168A45]/40 mx-auto" />
            
            <p className="font-serif-luxury italic text-lg sm:text-2xl md:text-3xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              &ldquo;{currentTestimony.quote}&rdquo;
            </p>

            <div className="space-y-1 pt-4 border-t border-white/10">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white block">
                {currentTestimony.name}
              </span>
              <span className="text-xs text-[#63D98A] font-light">
                {currentTestimony.location} · {currentTestimony.category}
              </span>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-center gap-4 pt-2 sm:pt-4">
              <button
                onClick={handlePrevTestimonial}
                className="p-2 sm:p-2.5 border border-white/15 hover:border-[#63D98A] hover:bg-white/5 text-white/70 hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Previous testimony"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="text-xs font-mono text-white/40">
                0{activeTestimonialIndex + 1} / 0{placeholderTestimonials.length}
              </div>

              <button
                onClick={handleNextTestimonial}
                className="p-2 sm:p-2.5 border border-white/15 hover:border-[#63D98A] hover:bg-white/5 text-white/70 hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Next testimony"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-white/40 italic">
            * Testimonial entries reserved for authenticated partner accounts upon submission.
          </div>
        </div>
      </section>


      {/* ========================================================
          10. SOCIAL MEDIA (Connect With The Ministry)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 text-center">
          <div className="space-y-2">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
              GLOBAL BROADCAST NETWORK
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#F5F7F5]">
              CONNECT WITH THE MINISTRY
            </h2>
            <p className="text-xs md:text-sm text-white/60 max-w-lg mx-auto font-light">
              Follow official channels for live prophetic transmissions, apostolic declarations, and media updates.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-6 bg-white/5 hover:bg-[#0B2418] border border-white/10 hover:border-[#63D98A] transition-all group flex flex-col items-center justify-center space-y-2 sm:space-y-3 min-h-[110px]"
              >
                <span className="font-serif-luxury text-lg sm:text-xl font-medium text-white group-hover:text-[#63D98A] transition-colors">
                  {social.name}
                </span>
                <span className="text-[9px] sm:text-[10px] text-white/40 font-mono truncate max-w-full">
                  {social.handle}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-[#63D98A]" />
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          11. GIVING (Partner With The Vision)
         ======================================================== */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-cinematic-glow border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#63D98A]">
            <Flame className="w-4 h-4" />
            <span>COVENANT PARTNERSHIP</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F7F5]">
            PARTNER WITH THE VISION
          </h2>

          <div className="p-4 sm:p-6 bg-white/5 border border-white/10 max-w-2xl mx-auto">
            <p className="text-sm md:text-base text-white/80 font-light italic font-serif-luxury leading-relaxed">
              &ldquo;{ministryProfile.givingMessage}&rdquo;
            </p>
          </div>

          <div>
            <button
              onClick={onOpenGiveModal}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-[0_4px_30px_rgba(22,138,69,0.4)] hover:shadow-[0_4px_45px_rgba(99,217,138,0.5)] inline-flex items-center justify-center gap-3 min-h-[48px]"
            >
              <Flame className="w-4 h-4 text-[#63D98A]" />
              <span>GIVE NOW</span>
            </button>
          </div>

          <p className="text-xs text-white/40 max-w-md mx-auto font-light">
            Empower worldwide missions, crusades, humanitarian compassion drives, and television broadcasts.
          </p>
        </div>
      </section>


      {/* ========================================================
          12. NEWSLETTER (Stay Connected)
         ======================================================== */}
      <NewsletterSection />


      {/* ========================================================
          13. CONTACT CTA
         ======================================================== */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#050505] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
            DIRECT MINISTERIAL INQUIRIES
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white">
            SEEKING PROPHETIC COUNSEL OR MINISTRY ENGAGEMENT?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-xl mx-auto">
            Reach the official office of Prophet John Lord for speaking invitations, prayer requests, or partnership inquiries.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/5 border border-[#168A45] hover:border-[#63D98A] text-white text-xs font-semibold tracking-widest uppercase transition-all inline-flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>ACCESS CONTACT PORTAL</span>
              <ArrowRight className="w-4 h-4 text-[#63D98A]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
