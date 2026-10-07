import React from 'react';
import { ministryProfile, givingInitiatives } from '../data/ministryData';
import { Flame, ShieldCheck, Heart, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface GivePageProps {
  onOpenGiveModal: () => void;
}

export const GivePage: React.FC<GivePageProps> = ({ onOpenGiveModal }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`pt-24 sm:pt-28 pb-16 sm:pb-20 transition-colors duration-400 ${
      isLight ? 'bg-[#F8FAF8] text-[#080D0A]' : 'bg-[#050505] text-[#F5F7F5]'
    }`}>
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#168A45] dark:text-[#63D98A]">
          <Flame className="w-4 h-4" />
          <span>COVENANT PARTNERSHIP</span>
        </div>
        <h1 className={`font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-tight ${
          isLight ? 'text-neutral-950' : 'text-white'
        }`}>
          PARTNER WITH <br />
          <span className="italic text-[#168A45] dark:text-[#63D98A]">THE VISION</span>
        </h1>
        <div className={`max-w-2xl mx-auto p-4 sm:p-6 border space-y-2 ${
          isLight ? 'bg-white border-gray-200 shadow-xs' : 'bg-white/5 border-white/10'
        }`}>
          <p className={`font-serif-luxury italic text-base sm:text-xl leading-relaxed ${
            isLight ? 'text-neutral-800' : 'text-white/90'
          }`}>
            &ldquo;{ministryProfile.givingMessage}&rdquo;
          </p>
          <span className={`text-[10px] uppercase tracking-widest font-mono block ${
            isLight ? 'text-gray-400' : 'text-white/40'
          }`}>
            [Official Ministry Giving Statement Placeholder]
          </span>
        </div>

        <div className="pt-2 sm:pt-4">
          <button
            onClick={onOpenGiveModal}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-[0_4px_30px_rgba(22,138,69,0.4)] hover:shadow-[0_4px_45px_rgba(99,217,138,0.5)] inline-flex items-center justify-center gap-3 min-h-[48px] cursor-pointer hover:scale-105"
          >
            <Flame className="w-4 h-4 text-[#63D98A]" />
            <span>GIVE NOW</span>
          </button>
        </div>
      </section>

      {/* Strategic Initiatives */}
      <section className={`px-4 sm:px-6 md:px-12 py-10 sm:py-16 max-w-7xl mx-auto border-t space-y-8 sm:space-y-12 ${
        isLight ? 'border-gray-200' : 'border-white/10'
      }`}>
        <div className="text-center space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#168A45] dark:text-[#63D98A] font-semibold">
            STRATEGIC IMPACT AREAS
          </span>
          <h2 className={`font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-medium ${
            isLight ? 'text-neutral-950' : 'text-white'
          }`}>
            WHERE YOUR KINGDOM SEED GOES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {givingInitiatives.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 border flex flex-col justify-between space-y-5 sm:space-y-6 group transition-all duration-300 hover:-translate-y-1 ${
                isLight 
                  ? 'bg-white border-gray-200 hover:border-[#168A45] shadow-xs hover:shadow-md'
                  : 'bg-[#0B2418]/25 border-white/10 hover:border-[#168A45]'
              }`}
            >
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-[#168A45] dark:text-[#63D98A] font-mono block font-semibold">
                  {item.badge}
                </span>
                <h3 className={`font-serif-luxury text-xl sm:text-2xl font-medium group-hover:text-[#168A45] dark:group-hover:text-[#63D98A] transition-colors ${
                  isLight ? 'text-neutral-900' : 'text-white'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-xs font-light leading-relaxed ${
                  isLight ? 'text-gray-600' : 'text-white/70'
                }`}>
                  {item.description}
                </p>
              </div>

              <button
                onClick={onOpenGiveModal}
                className={`w-full py-3 text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border min-h-[44px] cursor-pointer ${
                  isLight
                    ? 'bg-gray-50 hover:bg-[#168A45] text-neutral-800 hover:text-white border-gray-200 hover:border-[#168A45]'
                    : 'bg-white/5 hover:bg-[#168A45] text-white border-white/10'
                }`}
              >
                <span>SUPPORT THIS PILLAR</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#168A45] dark:text-[#63D98A] group-hover:text-white" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Benefits / Covenant Overview */}
      <section className={`px-4 sm:px-6 md:px-12 py-10 sm:py-16 max-w-5xl mx-auto border-t ${
        isLight ? 'border-gray-200' : 'border-white/10'
      }`}>
        <div className={`p-6 sm:p-8 md:p-12 border space-y-6 sm:space-y-8 ${
          isLight
            ? 'bg-gradient-to-r from-emerald-50/60 via-white to-emerald-50/60 border-emerald-200/80 shadow-xs'
            : 'bg-gradient-to-r from-[#0B2418]/40 via-[#050505] to-[#0B2418]/40 border-[#168A45]/30'
        }`}>
          <div className="text-center space-y-2">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#168A45] dark:text-[#63D98A] font-semibold">
              COVENANT BLESSINGS
            </span>
            <h3 className={`font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-medium ${
              isLight ? 'text-neutral-950' : 'text-white'
            }`}>
              WHAT IT MEANS TO PARTNER
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#168A45] dark:text-[#63D98A]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  isLight ? 'text-neutral-900' : 'text-white'
                }`}>
                  Continuous Prayer
                </span>
              </div>
              <p className={`text-xs font-light leading-relaxed ${
                isLight ? 'text-gray-600' : 'text-white/60'
              }`}>
                Prophet John Lord lifts all registered ministry partners on daily apostolic intercessory altars.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#168A45] dark:text-[#63D98A]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  isLight ? 'text-neutral-900' : 'text-white'
                }`}>
                  Prophetic Briefings
                </span>
              </div>
              <p className={`text-xs font-light leading-relaxed ${
                isLight ? 'text-gray-600' : 'text-white/60'
              }`}>
                Direct monthly apostolic letters, audio devotionals, and early access to upcoming convocation registrations.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#168A45] dark:text-[#63D98A]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  isLight ? 'text-neutral-900' : 'text-white'
                }`}>
                  Eternal Harvest
                </span>
              </div>
              <p className={`text-xs font-light leading-relaxed ${
                isLight ? 'text-gray-600' : 'text-white/60'
              }`}>
                Sharing in the spiritual reward and supernatural fruit of souls won across all continents and languages.
              </p>
            </div>
          </div>

          {/* Payment Provider Readiness Notice */}
          <div className={`p-3.5 sm:p-4 border text-xs flex items-start gap-3 ${
            isLight
              ? 'bg-white border-gray-200 text-gray-700 shadow-xs'
              : 'bg-black/60 border-white/10 text-white/60'
          }`}>
            <ShieldCheck className="w-4 h-4 text-[#168A45] dark:text-[#63D98A] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className={isLight ? 'text-neutral-900 font-semibold' : 'text-white font-medium'}>Gateway Ready:</strong> This ministry giving module is structured to integrate with your chosen merchant processor (Stripe, PayPal, Paystack, Flutterwave, or official Swift banking instructions). In compliance with requirements, no fabricated account or phone numbers are presented.
            </p>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onOpenGiveModal}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-lg inline-flex items-center justify-center gap-2 min-h-[48px] cursor-pointer hover:scale-102"
            >
              <Heart className="w-4 h-4 text-[#63D98A]" />
              <span>BECOME A MONTHLY COVENANT PARTNER</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

