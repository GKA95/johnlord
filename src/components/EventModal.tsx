import React, { useState } from 'react';
import { EventItem } from '../types';
import { X, Calendar, MapPin, Clock, CheckCircle2, User, Mail, Phone } from 'lucide-react';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', attendeeCount: '1' });

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setRegistered(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-[#0B2418]/60 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#168A45]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#63D98A]">
              Event Registration & Details
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-5 sm:space-y-6">
          <div className="space-y-1 sm:space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#63D98A] font-medium">
              {event.category}
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-medium text-white">
              {event.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-3.5 sm:p-4 bg-white/5 border border-white/10 text-xs text-white/80">
            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-[#63D98A] shrink-0 mt-0.5" />
              <div>
                <span className="text-white/40 block">Date</span>
                <span className="font-medium text-white">{event.date}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#63D98A] shrink-0 mt-0.5" />
              <div>
                <span className="text-white/40 block">Time</span>
                <span className="font-medium text-white">{event.time}</span>
              </div>
            </div>
            <div className="sm:col-span-2 flex items-start gap-2.5 pt-2 border-t border-white/5">
              <MapPin className="w-4 h-4 text-[#63D98A] shrink-0 mt-0.5" />
              <div>
                <span className="text-white/40 block">Location & Access</span>
                <span className="font-medium text-white">{event.location}</span>
                {event.venueDetails && (
                  <span className="text-white/60 block mt-0.5">{event.venueDetails}</span>
                )}
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            {event.description}
          </p>

          {registered ? (
            <div className="p-4 sm:p-5 bg-[#0B2418] border border-[#168A45] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#63D98A] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-white">
                  Registration Confirmed for {formData.name}
                </p>
                <p className="text-xs text-white/70 mt-1 font-light">
                  A verification confirmation has been sent to {formData.email}. We look forward to fellowship with you under an open heaven.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 pt-4 border-t border-white/10">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-white/90">
                Reserve Your Attendance Seat
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 bg-black/60 border border-white/10 focus:border-[#168A45] text-white text-base sm:text-xs outline-none min-h-[44px]"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 bg-black/60 border border-white/10 focus:border-[#168A45] text-white text-base sm:text-xs outline-none min-h-[44px]"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 bg-black/60 border border-white/10 focus:border-[#168A45] text-white text-base sm:text-xs outline-none min-h-[44px]"
                  />
                </div>
                <div>
                  <select
                    value={formData.attendeeCount}
                    onChange={(e) => setFormData({ ...formData, attendeeCount: e.target.value })}
                    className="w-full px-3 py-2.5 bg-black/60 border border-white/10 focus:border-[#168A45] text-white text-base sm:text-xs outline-none min-h-[44px]"
                  >
                    <option value="1">1 Attendee</option>
                    <option value="2">2 Attendees</option>
                    <option value="3">3 Attendees</option>
                    <option value="4+">Family / Delegation (4+)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-[0_4px_16px_rgba(22,138,69,0.3)] min-h-[48px]"
              >
                COMPLETE FREE REGISTRATION
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
