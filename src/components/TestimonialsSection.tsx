import React from 'react';
import { testimonials } from '../data/testimonials';

const TestimonialsSection: React.FC = () => (

  <section id="testimonials"
   className="py-16 px-4 bg-gray-900 rounded-2xl shadow-2xl my-12 max-w-4xl mx-auto" 
   data-aos="fade-up">

    <h2
     className="text-3xl font-extrabold text-yellow-400 mb-8 text-center">
      آراء المشتركين</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div key={idx} 
        className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <svg width="32" height="32" fill="#FFD600" viewBox="0 0 24 24" 
          className="mb-2">
            <path d="M7.17 6A5.001 5.001 0 0 0 2 11c0 2.21 1.79 4 4 4 .55 0 1 .45 1 1v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-1.1-.9-2-2-2-1.1 0-2-.9-2-2s.9-2 2-2c.55 0 1-.45 1-1s-.45-1-1-1zm10 0A5.001 5.001 0 0 0 12 11c0 2.21 1.79 4 4 4 .55 0 1 .45 1 1v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-1.1-.9-2-2-2-1.1 0-2-.9-2-2s.9-2 2-2c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
          <p className="text-gray-100 text-lg text-center mb-2">{t.text}</p>
          <span className="text-yellow-300 font-bold">{t.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;