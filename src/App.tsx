import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TrainersSection from './components/TrainersSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import LocationSection from './components/LocationSection';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrainersSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </div>
      <footer className="w-full text-center py-6 mt-10 text-gray-400 text-sm">
        <p className="my-5">&copy; <span id="year"></span> 
          <a href="https://www.instagram.com/thesayed___/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Elsayed Elsadek</a> 
          (Design & Development).
        </p>
      </footer>
    </div>
  );
};

export default App;