import React, { useState } from 'react';
import { FORMSPREE_ENDPOINT } from '../data/ministryData';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ContactForm: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Guard against duplicate submissions while in-flight
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Success: display required text and clear the form
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        // Failure: keep user's entered information and show error
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch {
      // Network or fetch failure: keep entered info and display failure message
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full p-5 sm:p-8 md:p-10 shadow-2xl relative border transition-colors duration-300 ${
      isLight ? 'bg-white border-gray-200' : 'bg-[#050505] border-white/10'
    }`}>
      {/* Decorative top green accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#168A45] to-transparent" />

      {/* Success Notification */}
      {status === 'success' && (
        <div
          role="alert"
          aria-live="polite"
          className={`mb-6 sm:mb-8 p-4 border flex items-start gap-3.5 animate-fade-in ${
            isLight
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-[#0B2418] border-[#168A45] text-[#F5F7F5]'
          }`}
        >
          <CheckCircle2 className="w-5 h-5 text-[#168A45] dark:text-[#63D98A] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">
              Thank you. Your message has been sent successfully.
            </p>
            <p className={`text-xs mt-1 ${isLight ? 'text-emerald-800' : 'text-white/70'}`}>
              Our ministry secretariat will review your inquiry with prayer and attention.
            </p>
          </div>
        </div>
      )}

      {/* Failure Notification */}
      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className={`mb-6 sm:mb-8 p-4 border flex items-start gap-3.5 animate-fade-in ${
            isLight
              ? 'bg-red-50 border-red-200 text-red-950'
              : 'bg-red-950/40 border-red-500/40 text-red-200'
          }`}
        >
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">
              {errorMessage || 'Something went wrong. Please try again.'}
            </p>
            <p className={`text-xs mt-1 ${isLight ? 'text-red-800' : 'text-red-300/70'}`}>
              Your message was preserved. If you have not configured your Formspree endpoint yet in{' '}
              <code className="text-xs px-1 py-0.5 rounded font-mono bg-black/10 dark:bg-black/40">
                FORMSPREE_ENDPOINT
              </code>
              , replace it with your actual ID.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate={false} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Full Name (Required) */}
          <div className="space-y-1.5 sm:space-y-2">
            <label
              htmlFor="name"
              className={`block text-xs font-semibold tracking-wider uppercase ${
                isLight ? 'text-gray-700' : 'text-white/80'
              }`}
            >
              Full Name <span className="text-[#168A45] dark:text-[#63D98A]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Samuel Adebayo"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border text-base sm:text-sm outline-none transition-all focus:ring-1 focus:ring-[#168A45] disabled:opacity-50 min-h-[44px] ${
                isLight
                  ? 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white focus:border-[#168A45] placeholder-gray-400'
                  : 'bg-[#0B2418]/30 border-white/10 hover:border-white/20 focus:border-[#168A45] focus:bg-[#0B2418]/60 text-white placeholder-white/30'
              }`}
            />
          </div>

          {/* Email Address (Required) */}
          <div className="space-y-1.5 sm:space-y-2">
            <label
              htmlFor="email"
              className={`block text-xs font-semibold tracking-wider uppercase ${
                isLight ? 'text-gray-700' : 'text-white/80'
              }`}
            >
              Email Address <span className="text-[#168A45] dark:text-[#63D98A]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. samuel@example.com"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border text-base sm:text-sm outline-none transition-all focus:ring-1 focus:ring-[#168A45] disabled:opacity-50 min-h-[44px] ${
                isLight
                  ? 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white focus:border-[#168A45] placeholder-gray-400'
                  : 'bg-[#0B2418]/30 border-white/10 hover:border-white/20 focus:border-[#168A45] focus:bg-[#0B2418]/60 text-white placeholder-white/30'
              }`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Phone Number (Optional) */}
          <div className="space-y-1.5 sm:space-y-2">
            <label
              htmlFor="phone"
              className={`block text-xs font-semibold tracking-wider uppercase ${
                isLight ? 'text-gray-700' : 'text-white/80'
              }`}
            >
              Phone Number <span className={isLight ? 'text-gray-400' : 'text-white/40'}> (optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border text-base sm:text-sm outline-none transition-all focus:ring-1 focus:ring-[#168A45] disabled:opacity-50 min-h-[44px] ${
                isLight
                  ? 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white focus:border-[#168A45] placeholder-gray-400'
                  : 'bg-[#0B2418]/30 border-white/10 hover:border-white/20 focus:border-[#168A45] focus:bg-[#0B2418]/60 text-white placeholder-white/30'
              }`}
            />
          </div>

          {/* Subject (Required) */}
          <div className="space-y-1.5 sm:space-y-2">
            <label
              htmlFor="subject"
              className={`block text-xs font-semibold tracking-wider uppercase ${
                isLight ? 'text-gray-700' : 'text-white/80'
              }`}
            >
              Subject <span className="text-[#168A45] dark:text-[#63D98A]">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border text-base sm:text-sm outline-none transition-all focus:ring-1 focus:ring-[#168A45] disabled:opacity-50 min-h-[44px] ${
                isLight
                  ? 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white focus:border-[#168A45]'
                  : 'bg-[#0B2418]/30 border-white/10 hover:border-white/20 focus:border-[#168A45] focus:bg-[#0B2418]/60 text-white'
              }`}
            >
              <option value="" disabled className={isLight ? 'bg-white text-gray-400' : 'bg-[#050505] text-white/40'}>
                Select inquiry nature
              </option>
              <option value="Prayer Request & Prophetic Petition" className={isLight ? 'bg-white text-gray-900' : 'bg-[#050505] text-white'}>
                Prayer Request & Prophetic Petition
              </option>
              <option value="Ministry Speaking Engagement Invitation" className={isLight ? 'bg-white text-gray-900' : 'bg-[#050505] text-white'}>
                Ministry Speaking Engagement Invitation
              </option>
              <option value="Vision Partnership Inquiry" className={isLight ? 'bg-white text-gray-900' : 'bg-[#050505] text-white'}>
                Vision Partnership Inquiry
              </option>
              <option value="Media & Press Inquiries" className={isLight ? 'bg-white text-gray-900' : 'bg-[#050505] text-white'}>
                Media & Press Inquiries
              </option>
              <option value="General Ministerial Inquiry" className={isLight ? 'bg-white text-gray-900' : 'bg-[#050505] text-white'}>
                General Ministerial Inquiry
              </option>
            </select>
          </div>
        </div>

        {/* Message (Required) */}
        <div className="space-y-1.5 sm:space-y-2">
          <label
            htmlFor="message"
            className={`block text-xs font-semibold tracking-wider uppercase ${
              isLight ? 'text-gray-700' : 'text-white/80'
            }`}
          >
            Message <span className="text-[#168A45] dark:text-[#63D98A]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message, prayer petition, or inquiry with clarity..."
            disabled={isSubmitting}
            className={`w-full px-4 py-3 border text-base sm:text-sm outline-none transition-all focus:ring-1 focus:ring-[#168A45] disabled:opacity-50 resize-y ${
              isLight
                ? 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white focus:border-[#168A45] placeholder-gray-400'
                : 'bg-[#0B2418]/30 border-white/10 hover:border-white/20 focus:border-[#168A45] focus:bg-[#0B2418]/60 text-white placeholder-white/30'
            }`}
          />
        </div>

        {/* Privacy Note */}
        <div className={`text-[11px] font-light ${isLight ? 'text-gray-500' : 'text-white/40'}`}>
          Your communications are kept in strict confidentiality and handled by the authorized ministerial pastoral team.
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#168A45] hover:bg-[#13743a] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(22,138,69,0.3)] hover:shadow-[0_4px_30px_rgba(99,217,138,0.4)] min-h-[48px] cursor-pointer hover:scale-102"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-[#63D98A]" />
                <span>SENDING...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#63D98A]" />
                <span>SEND MESSAGE</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
