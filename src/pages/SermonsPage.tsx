import React, { useState } from 'react';
import { SermonItem } from '../types';
import { placeholderSermons, cmsAdapterConfig } from '../data/ministryData';
import { Play, Search, Clock, BookOpen, Filter, Database } from 'lucide-react';

interface SermonsPageProps {
  onOpenVideo: (sermon: SermonItem) => void;
}

export const SermonsPage: React.FC<SermonsPageProps> = ({ onOpenVideo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Prophetic Direction', 'Faith & Dominion', 'Kingdom Purpose', 'Spiritual Warfare', 'Supernatural Encounters'];

  const filteredSermons = placeholderSermons.filter((sermon) => {
    const matchesCategory = selectedCategory === 'All' || sermon.category === selectedCategory;
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (sermon.scripture && sermon.scripture.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#050505]">
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#63D98A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A45]" />
          <span>AUDIOVISUAL RELEASES</span>
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-tight">
          SERMONS & <br />
          <span className="italic text-[#63D98A]">TEACHINGS</span>
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-2xl font-light leading-relaxed">
          Access the prophetic archive of Prophet John Lord. Grounded in the unadulterated Word of God and accompanied by Holy Spirit illumination.
        </p>

        {/* CMS Readiness Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] sm:text-[11px] text-white/60">
          <Database className="w-3.5 h-3.5 text-[#63D98A] shrink-0" />
          <span>CMS Ready: Prepared for WordPress REST API connection (`/wp-json/wp/v2/sermons`)</span>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="px-4 sm:px-6 md:px-12 py-4 sm:py-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-medium tracking-wider whitespace-nowrap transition-all border min-h-[38px] ${
                  selectedCategory === cat
                    ? 'bg-[#168A45] text-white border-[#63D98A]'
                    : 'bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search sermons or scripture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-black/60 border border-white/10 hover:border-white/20 focus:border-[#168A45] text-white text-base sm:text-xs outline-none min-h-[44px]"
            />
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="px-4 sm:px-6 md:px-12 py-8 sm:py-10 max-w-7xl mx-auto">
        {filteredSermons.length === 0 ? (
          <div className="text-center py-20 space-y-3 bg-white/5 border border-white/10 p-8">
            <p className="text-base text-white font-medium">No sermons match your criteria.</p>
            <p className="text-xs text-white/50">Try broadening your search or resetting category filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-4 py-2 bg-[#168A45] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon) => (
              <div
                key={sermon.id}
                className="group bg-[#0B2418]/20 border border-white/10 hover:border-[#168A45] overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
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
                      aria-label={`Play sermon ${sermon.title}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#168A45] text-white flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </button>

                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 text-[10px] text-white/90 font-mono">
                      {sermon.duration}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-white/50">
                      <span className="text-[#63D98A] font-medium">{sermon.category}</span>
                      <span>{sermon.date}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl font-medium text-white group-hover:text-[#63D98A] transition-colors leading-snug">
                      {sermon.title}
                    </h3>

                    <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">
                      {sermon.description}
                    </p>

                    {sermon.scripture && (
                      <div className="text-[11px] text-[#63D98A] font-serif-luxury italic flex items-center gap-1.5 pt-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{sermon.scripture}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenVideo(sermon)}
                    className="w-full py-3 bg-white/5 hover:bg-[#168A45] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border border-white/10 group-hover:border-[#168A45]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#63D98A] group-hover:text-white" />
                    <span>WATCH BROADCAST</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
