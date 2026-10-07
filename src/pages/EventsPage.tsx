import React, { useState } from 'react';
import { EventItem } from '../types';
import { placeholderEvents } from '../data/ministryData';
import { Calendar, Clock, MapPin, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';

interface EventsPageProps {
  onOpenEvent: (event: EventItem) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onOpenEvent }) => {
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Conference', 'Leadership', 'Revival Night', 'Training'];

  const filteredEvents = placeholderEvents.filter(
    (evt) => filterCategory === 'All' || evt.category === filterCategory
  );

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#050505]">
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#63D98A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A45]" />
          <span>MINISTERIAL ITINERARY</span>
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-tight">
          UPCOMING <br />
          <span className="italic text-[#63D98A]">EVENTS & GATHERINGS</span>
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-2xl font-light leading-relaxed">
          Mark your calendar for strategic apostolic convocations, all-night prophetic vigils, and leadership intensives with Prophet John Lord.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 sm:px-6 md:px-12 py-4 sm:py-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-2 text-xs font-medium tracking-wider whitespace-nowrap transition-all border min-h-[38px] ${
                filterCategory === cat
                  ? 'bg-[#168A45] text-white border-[#63D98A]'
                  : 'bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Events List */}
      <section className="px-4 sm:px-6 md:px-12 py-8 sm:py-10 max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            className="p-5 sm:p-8 md:p-10 bg-[#0B2418]/20 border border-white/10 hover:border-[#168A45] transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
          >
            {/* Date Box */}
            <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-3 lg:pb-0 lg:pr-8">
              <span className="text-xs uppercase tracking-widest text-[#63D98A] font-medium font-mono">
                {evt.category}
              </span>
              <div className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-medium text-white text-right lg:text-left">
                {evt.date}
              </div>
              <span className="text-xs text-white/50 flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5 text-[#63D98A]" />
                {evt.time}
              </span>
            </div>

            {/* Event Details */}
            <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
              <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-medium text-white hover:text-[#63D98A] transition-colors leading-snug">
                {evt.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                {evt.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                <MapPin className="w-4 h-4 text-[#63D98A] shrink-0" />
                <span className="text-white/80 font-medium">{evt.location}</span>
                {evt.venueDetails && (
                  <span className="text-white/40">· {evt.venueDetails}</span>
                )}
              </div>
            </div>

            {/* Action */}
            <div className="lg:col-span-3 flex flex-col items-stretch lg:items-end justify-center pt-2 lg:pt-0">
              <button
                onClick={() => onOpenEvent(evt)}
                className="w-full lg:w-auto px-6 py-3.5 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(22,138,69,0.3)] min-h-[44px]"
              >
                <Ticket className="w-4 h-4 text-[#63D98A]" />
                <span>RESERVE SEAT</span>
              </button>
              <span className="text-[10px] text-white/40 mt-1.5 text-center lg:text-right font-mono">
                * Free admission with pre-registration
              </span>
            </div>
          </div>
        ))}

        <div className="p-6 bg-white/5 border border-white/10 text-xs text-white/60 flex items-start gap-3 mt-8">
          <ShieldCheck className="w-4 h-4 text-[#63D98A] shrink-0 mt-0.5" />
          <p>
            Event dates and auditorium locations shown above represent upcoming calendar placeholders. Verified schedules will synchronize directly upon official ministerial publication.
          </p>
        </div>
      </section>
    </div>
  );
};
