import React, { useState, Suspense } from 'react';

// Component imports - lazy loaded for code splitting
const Navigation = React.lazy(() => import('./components/navigation/Navigation'));
const Hero = React.lazy(() => import('./components/hero/Hero'));
const AboutSection = React.lazy(() => import('./components/about/AboutSection'));
const ObjectivesSection = React.lazy(() => import('./components/objectives/ObjectivesSection'));
const VisionSection = React.lazy(() => import('./components/vision/VisionSection'));
const FutureSection = React.lazy(() => import('./components/future/FutureSection'));
const CommunitySection = React.lazy(() => import('./components/community/CommunitySection'));
const EventsSection = React.lazy(() => import('./components/events/EventsSection'));
const ContactSection = React.lazy(() => import('./components/contact/ContactSection'));
const Footer = React.lazy(() => import('./components/footer/Footer'));

// Modal components - lazy loaded
const Modal = React.lazy(() => import('./components/contact/Modal'));
const UpcomingEvents = React.lazy(() => import('./components/community/UpcomingEvents'));

// Shared components
import { ErrorBoundary, LoadingSpinner } from './components/shared';

/**
 * Main App Component
 * 
 * The root component for the Sewing Circle website.
 * Manages global state and renders all major sections organized by website sections.
 */
const App = () => {
  // State management for modal and events
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  // Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Events handlers
  const openEvents = () => setIsEventsOpen(true);
  const closeEvents = () => setIsEventsOpen(false);

  return (
    <ErrorBoundary>
      <div className="app-container">
        {/* Fixed Navigation Bar */}
        <Suspense fallback={<LoadingSpinner size="small" textKey="loading.navigation" />}>
          <Navigation />
        </Suspense>

        {/* Main Content Sections */}
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner textKey="loading.hero" />}>
            <Hero />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner textKey="loading.about" />}>
            <AboutSection />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner textKey="loading.objectives" />}>
            <ObjectivesSection />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner textKey="loading.vision" />}>
            <VisionSection />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner textKey="loading.future" />}>
            <FutureSection />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner textKey="loading.community" />}>
            <CommunitySection />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner textKey="loading.events" />}>
            <EventsSection />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner textKey="loading.contact" />}>
            <ContactSection onOpenModal={openModal} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner size="small" textKey="loading.footer" />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>

        {/* Modals */}
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={null}>
            <UpcomingEvents 
              isOpen={isEventsOpen} 
              onClose={closeEvents} 
              onGetInvolved={openModal}
            />
          </Suspense>
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default App;