import React from 'react';
import { PageId } from '../types';
import { ministryProfile, contactInfo, socialLinks } from '../data/ministryData';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'YouTube':
        return <Youtube className="w-4 h-4" />;
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'Facebook':
        return <Facebook className="w-4 h-4" />;
      case 'X':
        return <Twitter className="w-4 h-4" />;
      default:
        return (
          <span className="font-bold text-xs">
            {platform.slice(0, 2).toUpperCase()}
          </span>
        );
    }
  };

  return (
    <footer className={`relative border-t overflow-hidden transition-colors duration-300 ${
      isLight 
        ? 'bg-neutral-900 text-white border-neutral-800' 
        : 'bg-[#050505] text-white border-white/10'
    }`}>
      {/* Decorative emerald accent glow & fine grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#168A45] to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2418]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-14 sm:pt-20 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Mandate */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#63D98A] font-medium block">
                GLOBAL KINGDOM MANDATE
              </span>
              <h2 className="font-serif-luxury text-3xl md:text-4xl font-medium tracking-wide text-[#F5F7F5]">
                {ministryProfile.name}
              </h2>
            </div>
            
            <p className="text-sm text-white/60 leading-relaxed font-light max-w-md">
              {ministryProfile.ministryDescription}
            </p>

            <div className="text-xs text-[#63D98A] font-serif-luxury italic tracking-wide">
              &ldquo;{ministryProfile.tagline}&rdquo;
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-3">
                CONNECT WITH THE MINISTRY
              </span>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-[#168A45]/30 border border-white/10 hover:border-[#63D98A]/50 text-white/70 hover:text-white transition-all text-xs min-h-[38px]"
                    title={`${social.name} - ${social.handle}`}
                  >
                    {getSocialIcon(social.platform)}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#63D98A] font-medium block">
              PORTAL NAVIGATION
            </span>
            <ul className="space-y-1.5 sm:space-y-2.5 text-sm text-white/70 font-sans-clean">
              {[
                { id: 'home' as PageId, label: 'Home' },
                { id: 'about' as PageId, label: 'About Prophet John Lord' },
                { id: 'ministry' as PageId, label: 'The Ministry Pillars' },
                { id: 'sermons' as PageId, label: 'Messages & Teachings' },
                { id: 'events' as PageId, label: 'Upcoming Gatherings' },
                { id: 'resources' as PageId, label: 'Books & Resources' },
                { id: 'give' as PageId, label: 'Partner with the Vision' },
                { id: 'contact' as PageId, label: 'Contact & Inquiries' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group text-left py-1 min-h-[36px] w-full cursor-pointer"
                  >
                    <span className="w-1.5 h-[1px] bg-[#168A45] group-hover:w-3 transition-all shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Headquarters */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#63D98A] font-medium block">
              OFFICIAL CONTACT
            </span>
            <div className="space-y-3.5 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#63D98A] shrink-0 mt-1" />
                <div>
                  <span className="text-white/40 text-xs block">Ministry Headquarters</span>
                  <span className="font-light">{contactInfo.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#63D98A] shrink-0 mt-1" />
                <div>
                  <span className="text-white/40 text-xs block">General Inquiries</span>
                  <span className="font-light">{contactInfo.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#63D98A] shrink-0 mt-1" />
                <div>
                  <span className="text-white/40 text-xs block">Official Contact Line</span>
                  <span className="font-light">{contactInfo.phone}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#0B2418]/40 border border-[#168A45]/30 space-y-2 mt-6">
              <div className="text-xs font-semibold tracking-wider text-white uppercase">
                PRAYER & MINISTERIAL REQUESTS
              </div>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Send your prayer petitions and consultation requests directly through our secure contact portal.
              </p>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs text-[#63D98A] hover:text-white font-medium inline-flex items-center gap-1 transition-colors min-h-[36px] cursor-pointer"
              >
                Submit Petition →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Prophet John Lord. All Rights Reserved.</span>
            <ThemeToggle className="scale-90" />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <span className="text-white/30">Official International Ministry Portal</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/60 hover:text-[#63D98A] transition-colors group p-1 min-h-[36px] cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
