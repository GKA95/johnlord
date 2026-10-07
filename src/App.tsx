import React, { useState, useEffect } from 'react';
import { PageId, SermonItem, EventItem, ResourceItem } from './types';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { EventModal } from './components/EventModal';
import { ResourceModal } from './components/ResourceModal';
import { PartnerModal } from './components/PartnerModal';
import { WhatsAppChat } from './components/WhatsAppChat';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MinistryPage } from './pages/MinistryPage';
import { SermonsPage } from './pages/SermonsPage';
import { EventsPage } from './pages/EventsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { GivePage } from './pages/GivePage';

function MainAppLayout() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedVideo, setSelectedVideo] = useState<SermonItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [isGiveModalOpen, setIsGiveModalOpen] = useState(false);

  // Sync hash with current page for deep-linking and browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = [
        'home',
        'about',
        'ministry',
        'sermons',
        'events',
        'resources',
        'contact',
        'give',
      ];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans-clean antialiased selection:bg-[#168A45] selection:text-white transition-colors duration-300 ${
      isLight ? 'bg-[#F8FAF8] text-[#0A110D]' : 'bg-[#050505] text-[#F5F7F5]'
    }`}>
      {/* Sticky Header with Navigation and Dark/Light Mode Switcher */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenVideo={(s) => setSelectedVideo(s)}
            onOpenEvent={(e) => setSelectedEvent(e)}
            onOpenResource={(r) => setSelectedResource(r)}
            onOpenGiveModal={() => setIsGiveModalOpen(true)}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'ministry' && (
          <MinistryPage
            onNavigate={navigateTo}
            onOpenGiveModal={() => setIsGiveModalOpen(true)}
          />
        )}
        {currentPage === 'sermons' && (
          <SermonsPage onOpenVideo={(s) => setSelectedVideo(s)} />
        )}
        {currentPage === 'events' && (
          <EventsPage onOpenEvent={(e) => setSelectedEvent(e)} />
        )}
        {currentPage === 'resources' && (
          <ResourcesPage onOpenResource={(r) => setSelectedResource(r)} />
        )}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'give' && (
          <GivePage onOpenGiveModal={() => setIsGiveModalOpen(true)} />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating WhatsApp Ministry Chat Widget */}
      <WhatsAppChat />

      {/* Global Interactive Modals */}
      <VideoModal
        sermon={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <ResourceModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />

      <PartnerModal
        isOpen={isGiveModalOpen}
        onClose={() => setIsGiveModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainAppLayout />
    </ThemeProvider>
  );
}
