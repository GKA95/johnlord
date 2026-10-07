import React, { useState } from 'react';
import { ResourceItem } from '../types';
import { placeholderResources } from '../data/ministryData';
import { BookOpen, Download, Search, Check, Sparkles } from 'lucide-react';

interface ResourcesPageProps {
  onOpenResource: (resource: ResourceItem) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenResource }) => {
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
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#050505]">
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#63D98A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A45]" />
          <span>APOSTOLIC LIBRARY</span>
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-tight">
          MINISTRY <br />
          <span className="italic text-[#63D98A]">RESOURCES & BOOKS</span>
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-2xl font-light leading-relaxed">
          Nourish your inner man with prophetic literature, daily devotionals, and audio masterclasses authored by Prophet John Lord.
        </p>
      </section>

      {/* Filter and Search */}
      <section className="px-4 sm:px-6 md:px-12 py-4 sm:py-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3.5 py-2 text-xs font-medium tracking-wider whitespace-nowrap transition-all border min-h-[38px] ${
                  filterType === t
                    ? 'bg-[#168A45] text-white border-[#63D98A]'
                    : 'bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search resource titles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-black/60 border border-white/10 hover:border-white/20 focus:border-[#168A45] text-white text-base sm:text-xs outline-none min-h-[44px]"
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
              className="group bg-[#0B2418]/20 border border-white/10 hover:border-[#168A45] p-6 flex flex-col justify-between space-y-6 transition-all"
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
                  <span className="text-[10px] uppercase tracking-widest text-[#63D98A] font-medium font-mono">
                    {res.pagesOrDuration}
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-medium text-white group-hover:text-[#63D98A] transition-colors leading-snug">
                    {res.title}
                  </h3>
                  <p className="text-xs text-white/50">By {res.author}</p>
                </div>

                <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-3">
                  {res.description}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenResource(res)}
                  className="w-full py-3 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(22,138,69,0.3)]"
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
