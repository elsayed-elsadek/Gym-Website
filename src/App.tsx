import React, { useEffect, useState } from 'react';
import './styles/index.css';
import CopyRight from './components/CopyRight';
const TrainersSection = React.lazy(() => import('./components/TrainersSection'));
const AboutSection = React.lazy(() => import('./components/AboutSection'));
const ServicesSection = React.lazy(() => import('./components/ServicesSection'));
const GallerySection = React.lazy(() => import('./components/GallerySection'));
const LocationSection = React.lazy(() => import('./components/LocationSection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const HeroSection = React.lazy(() => import('./components/HeroSection'));

const App: React.FC = () => {
  // Scroll to Top Button
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const id = e.target.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return (
    <div className="bg-gray-950 min-h-screen">
      <React.Suspense fallback={<div className="text-center text-yellow-400 py-20 text-2xl">جاري التحميل...</div>}>
        <Navbar />
        <div className="pt-20">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TrainersSection />
          <GallerySection />
          <TestimonialsSection />
          <LocationSection />
          <ContactSection />
          <CopyRight/>
        </div>
      </React.Suspense>
      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition border-2 border-yellow-500 animate-bounce"
          aria-label="العودة للأعلى"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7"/></svg>
        </button>
      )}
   
    </div>
  );
};

export default App;