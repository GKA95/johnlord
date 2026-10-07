import React from 'react';
import { contactInfo } from '../data/ministryData';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock, Shield, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ContactPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`pt-24 sm:pt-28 pb-16 sm:pb-20 transition-colors duration-400 ${
      isLight ? 'bg-[#F8FAF8] text-[#080D0A]' : 'bg-[#050505] text-[#F5F7F5]'
    }`}>
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#168A45] dark:text-[#63D98A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A45]" />
          <span>MINISTRY SECRETARIAT</span>
        </div>
        <h1 className={`font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-tight ${
          isLight ? 'text-neutral-950' : 'text-white'
        }`}>
          GET IN <br />
          <span className="italic text-[#168A45] dark:text-[#63D98A]">TOUCH</span>
        </h1>
        <p className={`text-sm md:text-base max-w-2xl font-light leading-relaxed ${
          isLight ? 'text-gray-600' : 'text-white/70'
        }`}>
          Communicate with the official secretariat of Prophet John Lord for prayer requests, speaking invitations, ministry partnerships, and press inquiries.
        </p>
      </section>

      {/* Main Grid: Info + Formspree Form */}
      <section className={`px-4 sm:px-6 md:px-12 py-8 sm:py-12 max-w-7xl mx-auto border-t ${
        isLight ? 'border-gray-200' : 'border-white/10'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#168A45] dark:text-[#63D98A] font-semibold">
                HEADQUARTERS & DESK
              </span>
              <h2 className={`font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-medium ${
                isLight ? 'text-neutral-950' : 'text-white'
              }`}>
                OFFICIAL CONTACT CHANNELS
              </h2>
              <p className={`text-xs font-light leading-relaxed ${isLight ? 'text-gray-600' : 'text-white/60'}`}>
                All communications sent to Prophet John Lord are handled with ministerial dignity, privacy, and prayerful intercession.
              </p>
            </div>

            {/* Centralized Contact Information Cards */}
            <div className="space-y-3 sm:space-y-4">
              <div className={`p-4 sm:p-5 border transition-all flex items-start gap-3.5 sm:gap-4 hover:-translate-y-0.5 ${
                isLight 
                  ? 'bg-white border-gray-200 shadow-xs hover:border-[#168A45]' 
                  : 'bg-[#0B2418]/30 border-white/10 hover:border-[#168A45]'
              }`}>
                <div className={`p-2.5 sm:p-3 border shrink-0 ${
                  isLight
                    ? 'bg-[#EAF7EE] border-[#168A45]/30 text-[#0B3B20]'
                    : 'bg-[#0B2418] border-[#168A45]/40 text-[#63D98A]'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <span className={`text-[10px] uppercase tracking-widest font-mono block ${
                    isLight ? 'text-gray-400' : 'text-white/40'
                  }`}>
                    Email Address
                  </span>
                  <div className={`text-xs sm:text-sm font-medium break-all ${isLight ? 'text-neutral-900' : 'text-white'}`}>
                    {contactInfo.email}
                  </div>
                  <span className={`text-[11px] sm:text-xs block ${isLight ? 'text-gray-500' : 'text-white/50'}`}>
                    Official Secretariat & Inquiries
                  </span>
                </div>
              </div>

              <div className={`p-4 sm:p-5 border transition-all flex items-start gap-3.5 sm:gap-4 hover:-translate-y-0.5 ${
                isLight 
                  ? 'bg-white border-gray-200 shadow-xs hover:border-[#168A45]' 
                  : 'bg-[#0B2418]/30 border-white/10 hover:border-[#168A45]'
              }`}>
                <div className={`p-2.5 sm:p-3 border shrink-0 ${
                  isLight
                    ? 'bg-[#EAF7EE] border-[#168A45]/30 text-[#0B3B20]'
                    : 'bg-[#0B2418] border-[#168A45]/40 text-[#63D98A]'
                }`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <span className={`text-[10px] uppercase tracking-widest font-mono block ${
                    isLight ? 'text-gray-400' : 'text-white/40'
                  }`}>
                    Phone & Prayer Line
                  </span>
                  <div className={`text-xs sm:text-sm font-medium ${isLight ? 'text-neutral-900' : 'text-white'}`}>
                    {contactInfo.phone}
                  </div>
                  <span className={`text-[11px] sm:text-xs block ${isLight ? 'text-gray-500' : 'text-white/50'}`}>
                    Available during pastoral office hours
                  </span>
                </div>
              </div>

              <div className={`p-4 sm:p-5 border transition-all flex items-start gap-3.5 sm:gap-4 hover:-translate-y-0.5 ${
                isLight 
                  ? 'bg-white border-gray-200 shadow-xs hover:border-[#168A45]' 
                  : 'bg-[#0B2418]/30 border-white/10 hover:border-[#168A45]'
              }`}>
                <div className={`p-2.5 sm:p-3 border shrink-0 ${
                  isLight
                    ? 'bg-[#EAF7EE] border-[#168A45]/30 text-[#0B3B20]'
                    : 'bg-[#0B2418] border-[#168A45]/40 text-[#63D98A]'
                }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <span className={`text-[10px] uppercase tracking-widest font-mono block ${
                    isLight ? 'text-gray-400' : 'text-white/40'
                  }`}>
                    Ministry Headquarters
                  </span>
                  <div className={`text-xs sm:text-sm font-medium ${isLight ? 'text-neutral-900' : 'text-white'}`}>
                    {contactInfo.location}
                  </div>
                  <span className={`text-[11px] sm:text-xs block ${isLight ? 'text-gray-500' : 'text-white/50'}`}>
                    International Administrative Center
                  </span>
                </div>
              </div>
            </div>

            {/* Protocol Notice */}
            <div className={`p-4 sm:p-5 border space-y-2 text-xs ${
              isLight ? 'bg-white border-gray-200 text-gray-700 shadow-xs' : 'bg-white/5 border-white/10 text-white/70'
            }`}>
              <div className="flex items-center gap-2 text-[#168A45] dark:text-[#63D98A] font-semibold tracking-wider uppercase text-[10px] sm:text-[11px]">
                <Shield className="w-4 h-4" />
                <span>CONFIDENTIALITY PROTOCOL</span>
              </div>
              <p className="font-light leading-relaxed">
                Emergency hospital visits and pastoral emergency intercessions can be flagged directly with the word &ldquo;URGENT&rdquo; in the subject line.
              </p>
            </div>
          </div>

          {/* Right Column: Formspree Contact Form */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#168A45] dark:text-[#63D98A] font-semibold">
                DIRECT SECURE TRANSMISSION
              </span>
              <h2 className={`font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-medium ${
                isLight ? 'text-neutral-950' : 'text-white'
              }`}>
                SEND A MESSAGE OR PETITION
              </h2>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
