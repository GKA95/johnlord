import React, { useState } from 'react';
import { ResourceItem } from '../types';
import { placeholderResources } from '../data/ministryData';
import { BookOpen, Download, Search, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ResourcesPageProps {
  onOpenResource: (resource: ResourceItem) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenResource }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [filterType, setFilterType] = useState('All');
  const [search, setSearch] = useState('');

  const types = ['All', 'Book', 'Devotional', 'Audio Series', 'Study Guide'];

  const filtered = placeholderResources.filter((res) => {
    const matchType = filterType === 'All' || res.type === filterType;
    const matchSearch =
      res.title.toLowerCase().includes(search.toLowerCase()) ||
      res.description.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className={`pt-24 sm:pt-28 pb-16 sm:pb-20 transition-colors duration-400 ${
      isLight ? 'bg-[#F8FAF8] text-[#080D0A]' : 'bg-[#050505] text-[#F5F7F5]'
    }`}>
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#168A45] dark:text-[#63D98A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A45]" />
          <span>APOSTOLIC LIBRARY</span>
        </div>
        <h1 className={`font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-tight ${
          isLight ? 'text-neutral-950' : 'text-white'
        }`}>
          MINISTRY <br />
          <span className="italic text-[#168A45] dark:text-[#63D98A]">RESOURCES & BOOKS</span>
        </h1>
        <p className={`text-sm md:text-base max-w-2xl font-light leading-relaxed ${
          isLight ? 'text-gray-600' : 'text-white/70'
        }`}>
          Nourish your inner man with prophetic literature, daily devotionals, and audio masterclasses authored by Prophet John Lord.
        </p>
      </section>

      {/* Filter and Search */}
      <section className={`px-4 sm:px-6 md:px-12 py-4 sm:py-6 max-w-7xl mx-auto border-t ${
        isLight ? 'border-gray-200' : 'border-white/10'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3.5 py-2 text-xs font-medium tracking-wider whitespace-nowrap transition-all border min-h-[38px] cursor-pointer ${
                  filterType === t
                    ? 'bg-[#168A45] text-white border-[#63D98A] shadow-sm'
                    : isLight
                      ? 'bg-white text-gray-700 border-gray-200 hover:border-[#168A45] hover:text-[#168A45]'
                      : 'bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className={`w-4 h-4 absolute left-3 top-3.5 ${isLight ? 'text-gray-400' : 'text-white/40'}`} />
            <input
              type="text"
              placeholder="Search resource titles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full pl-9 pr-4 py-2.5 border text-sm outline-none min-h-[44px] transition-all ${
                isLight
                  ? 'bg-white border-gray-300 text-gray-900 focus:border-[#168A45] placeholder:text-gray-400 shadow-xs'
                  : 'bg-black/60 border-white/10 hover:border-white/20 focus:border-[#168A45] text-white'
              }`}
            />
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-4 sm:px-6 md:px-12 py-8 sm:py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((res) => (
            <div
              key={res.id}
              className={`group border p-6 flex flex-col justify-between space-y-6 transition-all hover:-translate-y-1 ${
                isLight
                  ? 'bg-white border-gray-200 hover:border-[#168A45] shadow-xs hover:shadow-lg'
                  : 'bg-[#0B2418]/20 border-white/10 hover:border-[#168A45]'
              }`}
            >
              <div className="space-y-4">
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
                  <span className="text-[10px] uppercase tracking-widest text-[#168A45] font-semibold font-mono">
                    {res.pagesOrDuration}
                  </span>
                  <h3 className={`font-serif-luxury text-2xl font-medium transition-colors leading-snug ${
                    isLight ? 'text-neutral-900 group-hover:text-[#168A45]' : 'text-white group-hover:text-[#63D98A]'
                  }`}>
                    {res.title}
                  </h3>
                  <p className={`text-xs ${isLight ? 'text-gray-500' : 'text-white/50'}`}>By {res.author}</p>
                </div>

                <p className={`text-xs font-light leading-relaxed line-clamp-3 ${
                  isLight ? 'text-gray-600' : 'text-white/60'
                }`}>
                  {res.description}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenResource(res)}
                  className="w-full py-3 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(22,138,69,0.3)] cursor-pointer hover:scale-102"
                >
                  <Download className="w-3.5 h-3.5 text-[#63D98A]" />
                  <span>PREVIEW & DOWNLOAD</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
