import React from 'react';

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl my-12 max-w-xl mx-auto" data-aos="fade-up">
    <h2 className="text-4xl font-extrabold text-yellow-400 mb-10 text-center">تواصل معنا</h2>
    <form className="flex flex-col gap-6 bg-gray-800 rounded-2xl p-8 shadow-xl">
      <input type="text" placeholder="الاسم" required className="p-4 rounded-md bg-gray-900 text-white placeholder-gray-400 text-lg" />
      <input type="email" placeholder="البريد الإلكتروني" required className="p-4 rounded-md bg-gray-900 text-white placeholder-gray-400 text-lg" />
      <textarea placeholder="رسالتك" rows={4} required className="p-4 rounded-md bg-gray-900 text-white placeholder-gray-400 text-lg" />
      <button type="submit" className="bg-yellow-400 text-gray-900 font-bold py-4 rounded-md text-lg hover:bg-yellow-300 transition">إرسال</button>
    </form>
    <div className="flex flex-col gap-4 items-center mt-8">
      <h3 className="text-2xl font-bold text-yellow-400 mb-2">حساباتنا على السوشيال ميديا</h3>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href="https://www.instagram.com/powerhousegym_3" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-white rounded-full p-1 w-8 h-8 sm:w-10 sm:h-10"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          <span className="sr-only">Instagram</span>
        </a>
        <a href="https://www.facebook.com/powerhouseandmuscles" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1877F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-white rounded-full p-1 w-8 h-8 sm:w-10 sm:h-10"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          <span className="sr-only">Facebook</span>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
