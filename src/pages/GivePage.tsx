import React from 'react';
import { ministryProfile, givingInitiatives } from '../data/ministryData';
import { Flame, ShieldCheck, Heart, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface GivePageProps {
  onOpenGiveModal: () => void;
}

export const GivePage: React.FC<GivePageProps> = ({ onOpenGiveModal }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#050505]">
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto space-y-4 sm:space-y-6 text-center">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#63D98A]">
          <Flame className="w-4 h-4" />
          <span>COVENANT PARTNERSHIP</span>
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-tight">
          PARTNER WITH <br />
          <span className="italic text-[#63D98A]">THE VISION</span>
        </h1>
        <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-white/5 border border-white/10 space-y-2">
          <p className="font-serif-luxury italic text-base sm:text-xl text-white/90 leading-relaxed">
            &ldquo;{ministryProfile.givingMessage}&rdquo;
          </p>
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono block">
            [Official Ministry Giving Statement Placeholder]
          </span>
        </div>

        <div className="pt-2 sm:pt-4">
          <button
            onClick={onOpenGiveModal}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-[0_4px_30px_rgba(22,138,69,0.4)] hover:shadow-[0_4px_45px_rgba(99,217,138,0.5)] inline-flex items-center justify-center gap-3 min-h-[48px]"
          >
            <Flame className="w-4 h-4 text-[#63D98A]" />
            <span>GIVE NOW</span>
          </button>
        </div>
      </section>

      {/* Strategic Initiatives */}
      <section className="px-4 sm:px-6 md:px-12 py-10 sm:py-16 max-w-7xl mx-auto border-t border-white/10 space-y-8 sm:space-y-12">
        <div className="text-center space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
            STRATEGIC IMPACT AREAS
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-medium text-white">
            WHERE YOUR KINGDOM SEED GOES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {givingInitiatives.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-[#0B2418]/25 border border-white/10 hover:border-[#168A45] flex flex-col justify-between space-y-5 sm:space-y-6 group transition-all"
            >
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-[#63D98A] font-mono block">
                  {item.badge}
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-white group-hover:text-[#63D98A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <button
                onClick={onOpenGiveModal}
                className="w-full py-3 bg-white/5 hover:bg-[#168A45] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border border-white/10 min-h-[44px]"
              >
                <span>SUPPORT THIS PILLAR</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#63D98A] group-hover:text-white" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Benefits / Covenant Overview */}
      <section className="px-4 sm:px-6 md:px-12 py-10 sm:py-16 max-w-5xl mx-auto border-t border-white/10">
        <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-r from-[#0B2418]/40 via-[#050505] to-[#0B2418]/40 border border-[#168A45]/30 space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#63D98A] font-semibold">
              COVENANT BLESSINGS
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-medium text-white">
              WHAT IT MEANS TO PARTNER
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#63D98A]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Continuous Prayer
                </span>
              </div>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Prophet John Lord lifts all registered ministry partners on daily apostolic intercessory altars.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#63D98A]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Prophetic Briefings
                </span>
              </div>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Direct monthly apostolic letters, audio devotionals, and early access to upcoming convocation registrations.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#63D98A]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Eternal Harvest
                </span>
              </div>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Sharing in the spiritual reward and supernatural fruit of souls won across all continents and languages.
              </p>
            </div>
          </div>

          {/* Payment Provider Readiness Notice */}
          <div className="p-3.5 sm:p-4 bg-black/60 border border-white/10 text-xs text-white/60 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#63D98A] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white font-medium">Gateway Ready:</strong> This ministry giving module is structured to integrate with your chosen merchant processor (Stripe, PayPal, Paystack, Flutterwave, or official Swift banking instructions). In compliance with requirements, no fabricated account or phone numbers are presented.
            </p>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onOpenGiveModal}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-lg inline-flex items-center justify-center gap-2 min-h-[48px]"
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
