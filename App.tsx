import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { TestimonialsPage } from './components/TestimonialsPage';
import { PoliciesPage } from './components/PoliciesPage';
import { JobsPage } from './components/JobsPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { PageLoader } from './components/LoadingSpinner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = async (page: string, serviceId?: string) => {
    setIsTransitioning(true);
    
    // Simulate page transition delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setCurrentPage(page);
    if (serviceId) {
      setSelectedService(serviceId);
    }
    
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    setIsTransitioning(false);
  };

  const renderPage = () => {
    try {
      switch (currentPage) {
        case 'home':
          return <HomePage onNavigate={handleNavigation} />;
        case 'services':
          return <ServicesPage onNavigate={handleNavigation} />;
        case 'about':
          return <AboutPage />;
        case 'contact':
          return <ContactPage />;
        case 'testimonials':
          return <TestimonialsPage />;
        case 'policies':
          return <PoliciesPage />;
        case 'jobs':
          return <JobsPage />;
        case 'service-detail':
          return <ServiceDetailPage serviceId={selectedService} onNavigate={handleNavigation} />;
        default:
          return <HomePage onNavigate={handleNavigation} />;
      }
    } catch (error) {
      console.error('Error rendering page:', error);
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-2xl font-bold text-navy-blue mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-4">Please try refreshing the page.</p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="bg-orange hover:bg-orange/90 text-white px-6 py-2 rounded-md transition-all-smooth hover-lift"
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={handleNavigation} />
      <main className={`min-h-screen transition-opacity duration-300 ${
        isTransitioning ? 'opacity-50' : 'opacity-100'
      }`}>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}