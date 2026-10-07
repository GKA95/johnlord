import React, { useState } from 'react';
import { X, Flame, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';
import { givingInitiatives, ministryProfile } from '../data/ministryData';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [frequency, setFrequency] = useState<'monthly' | 'one-time'>('monthly');
  const [amount, setAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedFund, setSelectedFund] = useState(givingInitiatives[0].id);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const amounts = ['50', '100', '250', '500', '1000'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-[#0B2418]/80 shrink-0">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#63D98A]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#63D98A]">
              Kingdom Partnership Covenant
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
          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-medium text-white">
              PARTNER WITH THE VISION
            </h3>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              {ministryProfile.givingMessage}
            </p>
          </div>

          {submitted ? (
            <div className="p-5 sm:p-6 bg-[#0B2418] border border-[#168A45] space-y-3">
              <div className="flex items-center gap-2.5 text-[#63D98A]">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="font-semibold text-sm text-white">
                  Partnership Intent Registered
                </span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Thank you for resolving to partner with Prophet John Lord&apos;s global mandate for ${customAmount || amount} ({frequency}).
              </p>
              <div className="p-3 bg-black/40 border border-white/10 text-[11px] text-white/60 space-y-1">
                <span className="text-[#63D98A] font-semibold block">INTEGRATION NOTICE</span>
                <p>
                  Official payment gateway connectors (Stripe / PayPal / Paystack / Wire) will be attached here upon deployment. No mock payment credentials were processed.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-3 px-6 py-3 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all min-h-[44px]"
              >
                CLOSE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Frequency Toggle */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-white/70 font-medium">
                  Contribution Frequency
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 p-1 bg-white/5 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-2.5 text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all min-h-[40px] ${
                      frequency === 'monthly'
                        ? 'bg-[#168A45] text-white font-semibold shadow-md'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Monthly Covenant
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`py-2.5 text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all min-h-[40px] ${
                      frequency === 'one-time'
                        ? 'bg-[#168A45] text-white font-semibold shadow-md'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    One-Time Seed
                  </button>
                </div>
              </div>

              {/* Giving Fund */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-white/70 font-medium">
                  Select Kingdom Allocation
                </label>
                <select
                  value={selectedFund}
                  onChange={(e) => setSelectedFund(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0B2418]/40 border border-white/10 text-white text-base sm:text-xs outline-none focus:border-[#168A45] min-h-[44px]"
                >
                  {givingInitiatives.map((fund) => (
                    <option key={fund.id} value={fund.id} className="bg-[#050505] text-white">
                      {fund.title} — ({fund.badge})
                    </option>
                  ))}
                </select>
              </div>

              {/* Preset Amounts */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-white/70 font-medium">
                  Select Amount (USD)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {amounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => {
                        setAmount(val);
                        setCustomAmount('');
                      }}
                      className={`py-2.5 text-xs font-semibold tracking-wider border transition-all min-h-[40px] ${
                        amount === val && !customAmount
                          ? 'border-[#63D98A] bg-[#168A45] text-white shadow-lg'
                          : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      ${val}
                    </button>
                  ))}
                </div>
                <div className="pt-2">
                  <input
                    type="number"
                    min="1"
                    placeholder="Or enter custom amount in USD"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount('');
                    }}
                    className="w-full px-4 py-2.5 bg-black/60 border border-white/10 text-white text-base sm:text-xs outline-none focus:border-[#168A45] min-h-[44px]"
                  />
                </div>
              </div>

              {/* Gateway integration status notice */}
              <div className="flex items-start gap-2.5 p-3 sm:p-3.5 bg-white/5 border border-white/10 text-xs text-white/60">
                <ShieldCheck className="w-4 h-4 text-[#63D98A] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-[11px] sm:text-xs">
                  Financial gateway accounts (Stripe / Bank Swift / Wire) will be attached by your ministry financial administrator. No sensitive financial credentials are requested on this initial build.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(22,138,69,0.4)] min-h-[48px]"
              >
                <Heart className="w-4 h-4 text-[#63D98A]" />
                <span>CONFIRM PARTNERSHIP COVENANT (${customAmount || amount || '100'})</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
