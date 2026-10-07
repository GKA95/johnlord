import React, { useState } from 'react';
import { EventItem } from '../types';
import { X, Calendar, MapPin, Clock, CheckCircle2, User, Mail, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className={`relative w-full max-w-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[90vh] transition-colors ${
        isLight ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#050505] border-white/10 text-[#F5F7F5]'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b shrink-0 ${
          isLight ? 'bg-emerald-900 text-white border-emerald-800' : 'bg-[#0B2418]/60 text-white border-white/10'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#168A45]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#63D98A]">
              Event Registration & Details
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-5 sm:space-y-6">
          <div className="space-y-1 sm:space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#168A45] dark:text-[#63D98A] font-semibold">
              {event.category}
            </span>
            <h3 className={`font-serif-luxury text-xl sm:text-2xl md:text-3xl font-medium ${
              isLight ? 'text-neutral-900' : 'text-white'
            }`}>
              {event.title}
            </h3>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-3.5 sm:p-4 border text-xs ${
            isLight ? 'bg-gray-50 border-gray-200 text-gray-700' : 'bg-white/5 border-white/10 text-white/80'
          }`}>
            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-[#168A45] dark:text-[#63D98A] shrink-0 mt-0.5" />
              <div>
                <span className={`block ${isLight ? 'text-gray-500' : 'text-white/40'}`}>Date</span>
                <span className={`font-medium ${isLight ? 'text-neutral-900' : 'text-white'}`}>{event.date}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#168A45] dark:text-[#63D98A] shrink-0 mt-0.5" />
              <div>
                <span className={`block ${isLight ? 'text-gray-500' : 'text-white/40'}`}>Time</span>
                <span className={`font-medium ${isLight ? 'text-neutral-900' : 'text-white'}`}>{event.time}</span>
              </div>
            </div>
            <div className={`sm:col-span-2 flex items-start gap-2.5 pt-2 border-t ${
              isLight ? 'border-gray-200' : 'border-white/5'
            }`}>
              <MapPin className="w-4 h-4 text-[#168A45] dark:text-[#63D98A] shrink-0 mt-0.5" />
              <div>
                <span className={`block ${isLight ? 'text-gray-500' : 'text-white/40'}`}>Location & Access</span>
                <span className={`font-medium ${isLight ? 'text-neutral-900' : 'text-white'}`}>{event.location}</span>
                {event.venueDetails && (
                  <span className={`block mt-0.5 ${isLight ? 'text-gray-500' : 'text-white/60'}`}>{event.venueDetails}</span>
                )}
              </div>
            </div>
          </div>

          <p className={`text-xs sm:text-sm font-light leading-relaxed ${
            isLight ? 'text-gray-600' : 'text-white/70'
          }`}>
            {event.description}
          </p>

          {registered ? (
            <div className={`p-4 sm:p-5 border flex items-start gap-3 ${
              isLight ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-[#0B2418] border-[#168A45] text-white'
            }`}>
              <CheckCircle2 className="w-5 h-5 text-[#168A45] dark:text-[#63D98A] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">
                  Registration Confirmed for {formData.name}
                </p>
                <p className={`text-xs mt-1 font-light ${isLight ? 'text-emerald-900' : 'text-white/70'}`}>
                  A verification confirmation has been sent to {formData.email}. We look forward to fellowship with you under an open heaven.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`space-y-3.5 sm:space-y-4 pt-4 border-t ${
              isLight ? 'border-gray-200' : 'border-white/10'
            }`}>
              <h4 className={`text-xs font-semibold tracking-wider uppercase ${
                isLight ? 'text-gray-900' : 'text-white/90'
              }`}>
                Reserve Your Attendance Seat
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <User className={`absolute left-3.5 top-3.5 w-4 h-4 ${isLight ? 'text-gray-400' : 'text-white/40'}`} />
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2.5 border text-base sm:text-xs outline-none min-h-[44px] ${
                      isLight
                        ? 'bg-white border-gray-300 text-gray-900 focus:border-[#168A45]'
                        : 'bg-black/60 border-white/10 focus:border-[#168A45] text-white'
                    }`}
                  />
                </div>
                <div className="relative">
                  <Mail className={`absolute left-3.5 top-3.5 w-4 h-4 ${isLight ? 'text-gray-400' : 'text-white/40'}`} />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2.5 border text-base sm:text-xs outline-none min-h-[44px] ${
                      isLight
                        ? 'bg-white border-gray-300 text-gray-900 focus:border-[#168A45]'
                        : 'bg-black/60 border-white/10 focus:border-[#168A45] text-white'
                    }`}
                  />
                </div>
                <div className="relative">
                  <Phone className={`absolute left-3.5 top-3.5 w-4 h-4 ${isLight ? 'text-gray-400' : 'text-white/40'}`} />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2.5 border text-base sm:text-xs outline-none min-h-[44px] ${
                      isLight
                        ? 'bg-white border-gray-300 text-gray-900 focus:border-[#168A45]'
                        : 'bg-black/60 border-white/10 focus:border-[#168A45] text-white'
                    }`}
                  />
                </div>
                <div>
                  <select
                    value={formData.attendeeCount}
                    onChange={(e) => setFormData({ ...formData, attendeeCount: e.target.value })}
                    className={`w-full px-3 py-2.5 border text-base sm:text-xs outline-none min-h-[44px] ${
                      isLight
                        ? 'bg-white border-gray-300 text-gray-900 focus:border-[#168A45]'
                        : 'bg-black/60 border-white/10 focus:border-[#168A45] text-white'
                    }`}
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
                className="w-full py-3.5 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-[0_4px_16px_rgba(22,138,69,0.3)] min-h-[48px] cursor-pointer hover:scale-102"
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

