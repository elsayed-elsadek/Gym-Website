import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import homeImg from '../assets/home.jpg';
const homeImg = require('../assets/home.jpg');

const HeroSection: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1200, once: true }); }, []);
  return (
    <header
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh] bg-cover bg-center text-center"
      style={{
        backgroundImage: `url(${homeImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4" data-aos="fade-down">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg mb-6 leading-tight">Power House Gym</h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-4 md:mb-6">معاك خطوة بخطوة لتحقيق هدفك</p>
        <div className="flex flex-col gap-2 md:gap-3 mb-8">
        </div>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-300 transition duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          سجّل الآن
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
