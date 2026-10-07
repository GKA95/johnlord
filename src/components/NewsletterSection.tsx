import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!name.trim()) {
      setValidationError('Please enter your full name.');
      setStatus('error');
      return;
    }

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setValidationError('Please provide a valid email address.');
      setStatus('error');
      return;
    }

    // Frontend validation passed
    setStatus('success');
    setName('');
    setEmail('');
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#050505] via-[#0B2418]/30 to-[#050505] border-y border-white/10 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#168A45]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#63D98A]">
            <Mail className="w-3.5 h-3.5" />
            <span>APOSTOLIC BULLETIN</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#F5F7F5]">
            STAY CONNECTED
          </h2>
          <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Receive new messages, ministry updates, events and resources directly from the ministry of Prophet John Lord.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-6 bg-[#0B2418] border border-[#168A45] max-w-lg mx-auto text-left flex items-start gap-3.5 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-[#63D98A] shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm text-white">
                Thank you for subscribing to Prophet John Lord&apos;s ministerial broadcast.
              </p>
              <p className="text-xs text-white/70 mt-1 font-light">
                You will receive apostolic updates and upcoming conference announcements.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div>
                <label htmlFor="newsletter-name" className="sr-only">
                  Your Full Name
                </label>
                <input
                  id="newsletter-name"
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#050505]/80 border border-white/10 hover:border-white/25 focus:border-[#168A45] text-white text-sm outline-none transition-all focus:ring-1 focus:ring-[#168A45]"
                />
              </div>
              <div>
                <label htmlFor="newsletter-email" className="sr-only">
                  Your Email Address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#050505]/80 border border-white/10 hover:border-white/25 focus:border-[#168A45] text-white text-sm outline-none transition-all focus:ring-1 focus:ring-[#168A45]"
                />
              </div>
            </div>

            {status === 'error' && validationError && (
              <div className="flex items-center justify-center gap-2 text-xs text-red-400 bg-red-950/30 py-2 border border-red-500/30">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{validationError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(22,138,69,0.3)] hover:shadow-[0_4px_30px_rgba(99,217,138,0.4)]"
            >
              <span>SUBSCRIBE</span>
              <Send className="w-3.5 h-3.5 text-[#63D98A]" />
            </button>

            <p className="text-[11px] text-white/40 font-light">
              We respect your privacy. No spam. You may unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
