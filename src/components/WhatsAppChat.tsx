import React, { useState, useEffect, useRef } from 'react';
import { whatsappConfig } from '../data/ministryData';
import { 
  MessageCircle, 
  X, 
  Send, 
  CheckCheck, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const WhatsAppChat: React.FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [hasPrompted, setHasPrompted] = useState(false);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show a gentle greeting prompt after 3.5 seconds to invite engagement
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
      setShowNotificationBadge(false);
    }
  }, [isOpen]);

  const handleSendMessage = (customText?: string) => {
    const textToSend = customText || message.trim() || whatsappConfig.defaultMessage;
    const cleanPhone = whatsappConfig.phoneNumber.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(textToSend);
    const waUrl = `https://wa.me/${cleanPhone}?text=${encoded}`;
    
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setMessage('');
    setIsOpen(false);
  };

  const handleQuickOptionClick = (presetText: string) => {
    handleSendMessage(presetText);
  };

  return (
    <aside 
      aria-label="WhatsApp Ministry Contact"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex flex-col items-end print:hidden pointer-events-none"
    >
      {/* Speech Prompt Bubble (before user clicks, if closed) */}
      {!isOpen && hasPrompted && (
        <div 
          onClick={() => setIsOpen(true)}
          className={`pointer-events-auto mb-3 max-w-[280px] p-3.5 rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-102 flex items-start gap-3 border animate-fade-in-up ${
            theme === 'light'
              ? 'bg-white text-gray-900 border-[#168A45]/20 shadow-emerald-950/15'
              : 'bg-[#0B1A12]/95 backdrop-blur-md text-[#F5F7F5] border-[#168A45]/40 shadow-black/80'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-[#168A45] text-white flex items-center justify-center shrink-0 font-serif-luxury font-bold text-xs shadow-md">
            JL
          </div>
          <div className="flex-1 text-xs leading-relaxed">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-[#168A45]">Prophet John Lord Desk</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setHasPrompted(false);
                }}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white"
                aria-label="Dismiss chat prompt"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
              Shalom! Need prayer, counseling, or event info? Connect directly on WhatsApp.
            </p>
          </div>
        </div>
      )}

      {/* Expanded WhatsApp Chat Window */}
      {isOpen && (
        <div 
          className={`pointer-events-auto w-[90vw] sm:w-[380px] rounded-2xl shadow-2xl border overflow-hidden flex flex-col mb-4 transition-all duration-300 animate-fade-in-up ${
            theme === 'light'
              ? 'bg-[#F9FAF9] text-gray-900 border-gray-200 shadow-2xl shadow-emerald-900/20'
              : 'bg-[#080E0B] text-[#F5F7F5] border-[#168A45]/30 shadow-2xl shadow-black/90'
          }`}
          style={{ maxHeight: '82vh' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0B2418] via-[#103E24] to-[#168A45] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-black/40 border border-[#63D98A]/40 flex items-center justify-center font-serif-luxury font-bold text-base text-[#63D98A] shadow-inner">
                  JL
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#63D98A] border-2 border-[#0B2418] rounded-full animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-medium text-sm tracking-wide text-white">
                    Prophet John Lord
                  </h3>
                  <ShieldCheck className="w-4 h-4 text-[#63D98A]" />
                </div>
                <p className="text-[11px] text-[#A7F3D0] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#63D98A]" />
                  Online • Official Ministry Desk
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Conversation Body */}
          <div className={`p-4 overflow-y-auto space-y-3.5 text-xs ${
            theme === 'light' ? 'bg-[#F0F4F1]' : 'bg-[#050906]'
          }`}>
            <div className="text-center">
              <span className={`px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase font-mono ${
                theme === 'light' ? 'bg-white/80 text-gray-500 shadow-xs' : 'bg-white/5 text-gray-400'
              }`}>
                Official Verified Line
              </span>
            </div>

            {/* Inbound Welcome Bubble */}
            <div className="flex flex-col items-start max-w-[88%]">
              <div className={`p-3.5 rounded-2xl rounded-tl-xs shadow-sm border ${
                theme === 'light' 
                  ? 'bg-white text-gray-800 border-gray-200/70' 
                  : 'bg-[#101F17] text-gray-100 border-[#168A45]/30'
              }`}>
                <p className="leading-relaxed font-sans-clean">
                  {whatsappConfig.welcomeMessage}
                </p>
                <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-gray-400">
                  <span>Just now</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#168A45]" />
                </div>
              </div>
            </div>

            {/* Quick Action Suggested Prompts */}
            <div className="space-y-1.5 pt-1">
              <p className={`text-[11px] font-medium tracking-wide flex items-center gap-1 ${
                theme === 'light' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                <Sparkles className="w-3 h-3 text-[#168A45]" />
                Quick Actions:
              </p>
              <div className="flex flex-col gap-1.5">
                {whatsappConfig.quickOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickOptionClick(opt.message)}
                    className={`text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between group border ${
                      theme === 'light'
                        ? 'bg-white hover:bg-emerald-50 text-gray-700 hover:text-[#0B3B20] border-gray-200 hover:border-[#168A45]/40 shadow-xs'
                        : 'bg-[#0D1812] hover:bg-[#12241B] text-gray-200 hover:text-white border-white/5 hover:border-[#168A45]/50'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#168A45] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Footer */}
          <div className={`p-3 border-t ${
            theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#080E0B] border-white/10'
          }`}>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your prayer or message..."
                className={`flex-1 text-xs px-3.5 py-2.5 rounded-xl border focus:outline-none transition-all ${
                  theme === 'light'
                    ? 'bg-gray-50 text-gray-900 border-gray-300 focus:border-[#168A45] focus:bg-white'
                    : 'bg-[#0D1812] text-white border-white/10 focus:border-[#168A45] focus:bg-[#112018]'
                }`}
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-[#168A45] hover:bg-[#107036] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#168A45]/30 shrink-0"
                aria-label="Send message on WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-gray-400">
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3 h-3 text-[#168A45]" />
                Opens directly in WhatsApp
              </span>
              <span>{whatsappConfig.displayNumber}</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button (Launcher) */}
      <div className="pointer-events-auto relative">
        {/* Subtle pulsing background glow ring */}
        <span className="absolute -inset-1.5 rounded-full bg-[#168A45]/30 animate-ping opacity-75 pointer-events-none" />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close WhatsApp Chat" : "Open WhatsApp Chat with Prophet John Lord Ministry"}
          className={`relative group w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-108 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#168A45]/40 ${
            isOpen
              ? 'bg-neutral-900 border-2 border-[#168A45]'
              : 'bg-gradient-to-tr from-[#0F5A2E] via-[#168A45] to-[#25D366] shadow-[0_8px_30px_rgba(22,138,69,0.5)]'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          ) : (
            <>
              {/* WhatsApp icon */}
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-white/10 stroke-[2.2] animate-pulse" />
              
              {/* Active Online Dot */}
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#63D98A] border-2 border-[#050505] rounded-full" />
              
              {/* Unread / Notification Pill */}
              {showNotificationBadge && !isOpen && (
                <span className="absolute -top-1 -left-1 px-1.5 py-0.5 rounded-full bg-red-600 text-[10px] font-bold text-white shadow-md animate-bounce">
                  1
                </span>
              )}
            </>
          )}
        </button>
      </div>
    </aside>
  );
};
