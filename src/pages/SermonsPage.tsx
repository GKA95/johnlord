import React, { useState } from 'react';
import { SermonItem } from '../types';
import { placeholderSermons, cmsAdapterConfig } from '../data/ministryData';
import { Play, Search, Clock, BookOpen, Filter, Database } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SermonsPageProps {
  onOpenVideo: (sermon: SermonItem) => void;
}

export const SermonsPage: React.FC<SermonsPageProps> = ({ onOpenVideo }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
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
    <div className={`pt-24 sm:pt-28 pb-16 sm:pb-20 transition-colors duration-400 ${
      isLight ? 'bg-[#F8FAF8] text-[#080D0A]' : 'bg-[#050505] text-[#F5F7F5]'
    }`}>
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#168A45] dark:text-[#63D98A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A45]" />
          <span>AUDIOVISUAL RELEASES</span>
        </div>
        <h1 className={`font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-tight ${
          isLight ? 'text-neutral-950' : 'text-white'
        }`}>
          SERMONS & <br />
          <span className="italic text-[#168A45] dark:text-[#63D98A]">TEACHINGS</span>
        </h1>
        <p className={`text-sm md:text-base max-w-2xl font-light leading-relaxed ${
          isLight ? 'text-gray-600' : 'text-white/70'
        }`}>
          Access the prophetic archive of Prophet John Lord. Grounded in the unadulterated Word of God and accompanied by Holy Spirit illumination.
        </p>

        {/* CMS Readiness Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 border text-[10px] sm:text-[11px] ${
          isLight 
            ? 'bg-white border-gray-200 text-gray-700 shadow-xs' 
            : 'bg-white/5 border-white/10 text-white/60'
        }`}>
          <Database className="w-3.5 h-3.5 text-[#168A45] dark:text-[#63D98A] shrink-0" />
          <span>CMS Ready: Prepared for WordPress REST API connection (`/wp-json/wp/v2/sermons`)</span>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className={`px-4 sm:px-6 md:px-12 py-4 sm:py-6 max-w-7xl mx-auto border-t ${
        isLight ? 'border-gray-200' : 'border-white/10'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-medium tracking-wider whitespace-nowrap transition-all border min-h-[38px] cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#168A45] text-white border-[#63D98A] shadow-sm'
                    : isLight
                      ? 'bg-white text-gray-700 border-gray-200 hover:border-[#168A45] hover:text-[#168A45]'
                      : 'bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className={`w-4 h-4 absolute left-3 top-3.5 ${isLight ? 'text-gray-400' : 'text-white/40'}`} />
            <input
              type="text"
              placeholder="Search sermons or scripture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2.5 border text-sm outline-none min-h-[44px] transition-all ${
                isLight
                  ? 'bg-white border-gray-300 text-gray-900 focus:border-[#168A45] placeholder:text-gray-400 shadow-xs'
                  : 'bg-black/60 border-white/10 hover:border-white/20 focus:border-[#168A45] text-white'
              }`}
            />
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="px-4 sm:px-6 md:px-12 py-8 sm:py-10 max-w-7xl mx-auto">
        {filteredSermons.length === 0 ? (
          <div className={`text-center py-20 space-y-3 border p-8 ${
            isLight ? 'bg-white border-gray-200' : 'bg-white/5 border-white/10'
          }`}>
            <p className={`text-base font-medium ${isLight ? 'text-gray-900' : 'text-white'}`}>No sermons match your criteria.</p>
            <p className={`text-xs ${isLight ? 'text-gray-500' : 'text-white/50'}`}>Try broadening your search or resetting category filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-4 py-2 bg-[#168A45] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon) => (
              <div
                key={sermon.id}
                className={`group border overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  isLight
                    ? 'bg-white border-gray-200 hover:border-[#168A45] shadow-xs hover:shadow-lg'
                    : 'bg-[#0B2418]/20 border-white/10 hover:border-[#168A45]'
                }`}
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
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 cursor-pointer"
                      aria-label={`Play sermon ${sermon.title}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#168A45] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </button>

                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 text-[10px] text-white/90 font-mono">
                      {sermon.duration}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className={`flex items-center justify-between text-[11px] ${
                      isLight ? 'text-gray-500' : 'text-white/50'
                    }`}>
                      <span className="text-[#168A45] font-semibold">{sermon.category}</span>
                      <span>{sermon.date}</span>
                    </div>

                    <h3 className={`font-serif-luxury text-2xl font-medium transition-colors leading-snug ${
                      isLight ? 'text-neutral-900 group-hover:text-[#168A45]' : 'text-white group-hover:text-[#63D98A]'
                    }`}>
                      {sermon.title}
                    </h3>

                    <p className={`text-xs font-light leading-relaxed line-clamp-3 ${
                      isLight ? 'text-gray-600' : 'text-white/60'
                    }`}>
                      {sermon.description}
                    </p>

                    {sermon.scripture && (
                      <div className="text-[11px] text-[#168A45] font-serif-luxury italic flex items-center gap-1.5 pt-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{sermon.scripture}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenVideo(sermon)}
                    className={`w-full py-3 text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 border min-h-[44px] cursor-pointer ${
                      isLight
                        ? 'bg-gray-50 hover:bg-[#168A45] text-neutral-900 hover:text-white border-gray-200 hover:border-[#168A45]'
                        : 'bg-white/5 hover:bg-[#168A45] text-white border-white/10 group-hover:border-[#168A45]'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#168A45] group-hover:text-white" />
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
