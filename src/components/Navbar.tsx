import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, Flame } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'ministry', label: 'MINISTRY' },
    { id: 'sermons', label: 'SERMONS' },
    { id: 'events', label: 'EVENTS' },
    { id: 'resources', label: 'RESOURCES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLight
            ? isScrolled
              ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3.5 shadow-lg shadow-black/5'
              : 'bg-gradient-to-b from-white/90 via-white/50 to-transparent py-5 border-b border-black/5'
            : isScrolled
              ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
              : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168A45]"
            aria-label="Prophet John Lord - Home"
          >
            <div className={`w-8 h-8 rounded border flex items-center justify-center font-serif-luxury font-bold text-sm tracking-widest transition-all ${
              isLight
                ? 'border-[#168A45] bg-[#EAF7EE] text-[#0B3B20] shadow-sm group-hover:bg-[#168A45] group-hover:text-white'
                : 'border-[#168A45]/60 bg-[#0B2418] text-[#63D98A] group-hover:border-[#63D98A] group-hover:shadow-[0_0_15px_rgba(99,217,138,0.4)]'
            }`}>
              JL
            </div>
            <div className="flex flex-col">
              <span className={`font-serif-luxury text-lg md:text-xl font-medium tracking-[0.2em] transition-colors ${
                isLight
                  ? 'text-neutral-950 group-hover:text-[#168A45]'
                  : 'text-[#F5F7F5] group-hover:text-white'
              }`}>
                PROPHET JOHN LORD
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#168A45] dark:text-[#63D98A] uppercase font-sans-clean font-semibold">
                International Ministry
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-xs tracking-[0.18em] font-sans-clean font-medium transition-all relative py-1 focus-visible:outline-none focus-visible:text-[#168A45] ${
                    isLight
                      ? isActive
                        ? 'text-neutral-950 font-bold'
                        : 'text-neutral-600 hover:text-neutral-950'
                      : isActive
                        ? 'text-white font-semibold'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#168A45] shadow-[0_0_8px_#168A45]" />
                  )}
                  <span className="absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-[#63D98A] transition-all duration-300 opacity-0 group-hover:left-0 group-hover:right-0 group-hover:opacity-100" />
                </button>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle + GIVE button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Dark / Light Mode Toggle Button */}
            <ThemeToggle className="scale-95" />

            {/* GIVE Action Button */}
            <button
              onClick={() => handleNavClick('give')}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-semibold tracking-widest uppercase transition-all duration-300 border focus-visible:outline-none min-h-[40px] sm:min-h-[44px] cursor-pointer ${
                currentPage === 'give'
                  ? 'bg-[#168A45] text-white border-[#63D98A] shadow-[0_0_20px_rgba(22,138,69,0.5)]'
                  : 'bg-[#168A45] hover:bg-[#13743a] text-white border-[#168A45] shadow-[0_4px_16px_rgba(22,138,69,0.3)] hover:shadow-[0_4px_24px_rgba(99,217,138,0.4)]'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-[#63D98A]" />
              <span>GIVE</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 sm:p-2.5 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168A45] transition-all min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center cursor-pointer ${
                isLight
                  ? 'text-neutral-900 border-gray-300 bg-white/90 hover:bg-gray-100'
                  : 'text-white/90 hover:text-white border-white/10 hover:border-[#168A45] bg-[#050505]/80'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#168A45]" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Overlay Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 sm:px-8 overflow-y-auto transition-opacity duration-300 animate-fade-in ${
            isLight
              ? 'bg-[#F8FAF8]/98 text-neutral-900'
              : 'bg-[#050505]/98 text-[#F5F7F5]'
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#168A45]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/5">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#168A45] font-semibold block">
              MINISTRY DIRECTORY
            </span>
            <ThemeToggle showLabel />
          </div>

          <div className="space-y-6 my-auto py-6">
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left text-xl sm:text-2xl md:text-3xl font-serif-luxury tracking-wide transition-all flex items-center justify-between group py-2 border-b min-h-[44px] cursor-pointer ${
                      isLight
                        ? isActive
                          ? 'text-[#168A45] font-bold border-[#168A45]/30'
                          : 'text-neutral-900 hover:text-[#168A45] border-black/5'
                        : isActive
                          ? 'text-[#63D98A] italic font-medium border-[#168A45]/30'
                          : 'text-[#F5F7F5] hover:text-white border-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                        isActive
                          ? 'text-[#168A45] translate-x-1 -translate-y-1'
                          : 'text-gray-400 group-hover:text-[#168A45] group-hover:translate-x-1 group-hover:-translate-y-1'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>

          <div className={`space-y-4 pt-6 border-t shrink-0 ${
            isLight ? 'border-black/10' : 'border-white/10'
          }`}>
            <button
              onClick={() => handleNavClick('give')}
              className="w-full py-3.5 sm:py-4 text-center text-xs sm:text-sm font-semibold tracking-widest uppercase bg-[#168A45] hover:bg-[#13743a] text-white flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(22,138,69,0.4)] min-h-[48px] cursor-pointer"
            >
              <Flame className="w-4 h-4 text-[#63D98A]" />
              <span>PARTNER & GIVE</span>
            </button>
            <div className={`text-center text-[11px] tracking-wider ${
              isLight ? 'text-gray-500' : 'text-white/40'
            }`}>
              Prophetic Voice · Kingdom Impact · Transforming Lives
            </div>
          </div>
        </div>
      )}
    </>
  );
};
